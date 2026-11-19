"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import {
  Calendar,
  MapPin,
  Camera,
  Download,
  Share2,
  ArrowLeft,
  SlidersHorizontal,
  CheckSquare,
  Square,
  User,
  RefreshCw,
  FolderOpen,
} from "lucide-react";
import { ALBUMS_DATA, AlbumItem, PhotoItem } from "@/data/driveCatalog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhotoGrid from "@/components/PhotoGrid";
import SelectionBar from "@/components/SelectionBar";
import LightboxModal from "@/components/LightboxModal";
import ZipDownloadModal from "@/components/ZipDownloadModal";
import SearchModal from "@/components/SearchModal";
import { downloadPhotosAsZip, ZipProgressState } from "@/utils/zipDownload";
import { shareAlbumOnWhatsApp } from "@/utils/whatsapp";

export default function AlbumDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [albums, setAlbums] = useState<AlbumItem[]>(ALBUMS_DATA);
  const [currentAlbum, setCurrentAlbum] = useState<AlbumItem | null>(() => {
    return ALBUMS_DATA.find((a) => a.slug === slug) || null;
  });
  const [selectedSubfolder, setSelectedSubfolder] = useState<string>("All");
  const [isLoadingCatalog, setIsLoadingCatalog] = useState(true);
  const [isRefreshingFolder, setIsRefreshingFolder] = useState(false);
  const [sortOption, setSortOption] = useState<"default" | "az" | "za">("default");
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  const [selectedPhotoIds, setSelectedPhotoIds] = useState<string[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [lastSyncText, setLastSyncText] = useState("Just now");

  // Fetch live catalog to find newly created folders
  useEffect(() => {
    setIsLoadingCatalog(true);
    fetch("/api/drive/catalog")
      .then((res) => res.json())
      .then((data) => {
        if (data?.albums && Array.isArray(data.albums)) {
          setAlbums(data.albums);
          const found = data.albums.find((a: AlbumItem) => a.slug === slug);
          if (found) {
            setCurrentAlbum(found);
          }
        }
      })
      .catch((err) => console.log("Catalog fetch error:", err))
      .finally(() => setIsLoadingCatalog(false));
  }, [slug]);

  // Fetch on-demand live photos for this specific folder from Google Drive
  const refreshLivePhotos = useCallback(async () => {
    if (!currentAlbum?.id) return;
    setIsRefreshingFolder(true);
    try {
      const res = await fetch(`/api/drive/folder?id=${currentAlbum.id}`);
      const data = await res.json();
      if (data?.photos && Array.isArray(data.photos) && data.photos.length > 0) {
        setCurrentAlbum((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            photos: data.photos,
            photoCount: data.photoCount || data.photos.length,
            coverPhoto: data.photos[0] || prev.coverPhoto,
            hasLivePhotos: true,
          };
        });
        setLastSyncText(
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })
        );
      }
    } catch (err) {
      console.log("Live folder refresh error:", err);
    } finally {
      setIsRefreshingFolder(false);
    }
  }, [currentAlbum?.id]);

  // Trigger live photo check when currentAlbum is ready
  useEffect(() => {
    if (currentAlbum?.id) {
      refreshLivePhotos();
    }
  }, [currentAlbum?.id, refreshLivePhotos]);

  // ZIP download modal state
  const [zipModalOpen, setZipModalOpen] = useState(false);
  const [zipState, setZipState] = useState<ZipProgressState>({
    isDownloading: false,
    progressPercent: 0,
    currentFileName: "",
    totalFiles: 0,
    completedFiles: 0,
  });

  // If album is still loading from catalog
  if (!currentAlbum) {
    if (isLoadingCatalog) {
      return (
        <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
          <Navbar onOpenSearch={() => setSearchModalOpen(true)} />
          <div className="flex-grow flex flex-col items-center justify-center p-8 space-y-4">
            <RefreshCw className="w-8 h-8 animate-spin text-[#870069]" />
            <p className="text-sm font-semibold text-slate-600">
              Synchronizing album directly from Google Drive...
            </p>
          </div>
          <Footer />
        </div>
      );
    }
    return notFound();
  }

  // Filter photos by subfolder if subfolders exist
  const displayedPhotos = useMemo(() => {
    let list = [...currentAlbum.photos];
    if (selectedSubfolder !== "All" && currentAlbum.subfolders) {
      const sub = currentAlbum.subfolders.find(
        (sf) => sf.name === selectedSubfolder || sf.slug === selectedSubfolder
      );
      if (sub && sub.photos.length > 0) {
        list = sub.photos;
      }
    }
    if (sortOption === "az") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "za") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    }
    return list;
  }, [currentAlbum, selectedSubfolder, sortOption]);

  const handleToggleSelect = (photoId: string) => {
    setSelectedPhotoIds((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
  };

  const handleSelectAll = () => {
    setSelectedPhotoIds(displayedPhotos.map((p) => p.id));
  };

  const handleDeselectAll = () => {
    setSelectedPhotoIds([]);
  };

  const handleDownloadAllZip = () => {
    if (displayedPhotos.length === 0) return;
    setZipModalOpen(true);
    downloadPhotosAsZip(
      displayedPhotos,
      `${currentAlbum.name}_Full_Album`,
      (state) => setZipState(state)
    );
  };

  const handleDownloadSelectedZip = () => {
    const selected = displayedPhotos.filter((p) =>
      selectedPhotoIds.includes(p.id)
    );
    if (selected.length === 0) return;

    setZipModalOpen(true);
    downloadPhotosAsZip(
      selected,
      `${currentAlbum.shortTitle}_Selected_Photos`,
      (state) => setZipState(state)
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar onOpenSearch={() => setSearchModalOpen(true)} />

      {/* Album Hero Cover Banner */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-14 sm:py-20">
        {/* Cover Background */}
        <div className="absolute inset-0 z-0">
          {currentAlbum.coverPhoto && (
            <img
              src={currentAlbum.coverPhoto.previewUrl}
              alt={currentAlbum.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-35 scale-105 filter blur-xs"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb Navigation */}
          <Link
            href="/albums"
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Albums</span>
          </Link>

          {/* Album Title & Badges */}
          <div className="space-y-3 max-w-4xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-[#870069] text-white text-xs font-bold uppercase tracking-wider">
                {currentAlbum.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/20">
                {displayedPhotos.length} High-Resolution Photographs
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Drive Synced ({lastSyncText})
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {currentAlbum.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {currentAlbum.description}
            </p>
          </div>

          {/* Event Meta Details Grid */}
          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#FF693C]" />
              <span>{currentAlbum.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF693C]" />
              <span>{currentAlbum.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-400" />
              <span>Photographer: <strong>{currentAlbum.photographer}</strong></span>
            </div>
          </div>

          {/* Action Buttons: Download All, WhatsApp, Multi-Select, Live Sync */}
          <div className="pt-2 flex items-center gap-3 flex-wrap">
            <button
              onClick={handleDownloadAllZip}
              disabled={displayedPhotos.length === 0}
              className={`px-5 py-3 rounded-xl text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 ${
                displayedPhotos.length > 0
                  ? "bg-gradient-to-r from-[#870069] to-[#FF693C] hover:opacity-95 cursor-pointer"
                  : "bg-slate-800 text-slate-500 cursor-not-allowed"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Download Album as ZIP ({displayedPhotos.length})</span>
            </button>

            <button
              onClick={() => shareAlbumOnWhatsApp(currentAlbum)}
              className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-colors flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Album on WhatsApp</span>
            </button>

            <button
              onClick={() => setIsMultiSelectMode(!isMultiSelectMode)}
              className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 border cursor-pointer ${
                isMultiSelectMode
                  ? "bg-white text-slate-900 border-white"
                  : "bg-white/10 hover:bg-white/20 text-white border-white/20"
              }`}
            >
              {isMultiSelectMode ? (
                <>
                  <CheckSquare className="w-4 h-4 text-[#870069]" />
                  <span>Multi-Select Active</span>
                </>
              ) : (
                <>
                  <Square className="w-4 h-4 text-slate-300" />
                  <span>Select Multiple</span>
                </>
              )}
            </button>

            <button
              onClick={refreshLivePhotos}
              disabled={isRefreshingFolder}
              className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-colors flex items-center gap-2 cursor-pointer"
              title="Fetch new photos directly from Google Drive"
            >
              <RefreshCw
                className={`w-4 h-4 ${
                  isRefreshingFolder ? "animate-spin text-[#FF693C]" : "text-white"
                }`}
              />
              <span>{isRefreshingFolder ? "Checking Drive..." : "Sync Photos"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Subfolder Chips (if parent folder has sub-sessions like Day 01 to Day 13) */}
      {currentAlbum.subfolders && currentAlbum.subfolders.length > 0 && (
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5 pr-2">
                <FolderOpen className="w-3.5 h-3.5 text-[#870069]" />
                Sessions / Days:
              </span>
              <button
                onClick={() => setSelectedSubfolder("All")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedSubfolder === "All"
                    ? "bg-[#870069] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                All Sessions ({currentAlbum.photoCount})
              </button>
              {currentAlbum.subfolders.map((sf) => {
                const isSelected = selectedSubfolder === sf.name;
                return (
                  <button
                    key={sf.id}
                    onClick={() => setSelectedSubfolder(sf.name)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? "bg-[#870069] text-white shadow-xs"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {sf.shortTitle || sf.name.split("|")[0].trim()} ({sf.photoCount} HD)
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Main Album Photos Grid */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
        {/* Gallery Toolbar: Total Counter & Sort Options */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900">
              Showing {displayedPhotos.length} Photographs
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-xs text-slate-500">
              Original Google Drive Masters
            </span>
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-slate-400" />
            <span className="text-xs text-slate-500 font-medium">Sort by:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as any)}
              className="text-xs font-semibold bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 outline-none focus:border-[#870069] cursor-pointer"
            >
              <option value="default">Drive Default Order</option>
              <option value="az">Filename (A &rarr; Z)</option>
              <option value="za">Filename (Z &rarr; A)</option>
            </select>
          </div>
        </div>

        {/* Photos Grid */}
        <PhotoGrid
          photos={displayedPhotos}
          album={currentAlbum}
          selectedPhotoIds={selectedPhotoIds}
          isMultiSelectMode={isMultiSelectMode}
          onToggleSelect={handleToggleSelect}
          onOpenLightbox={(idx) => {
            setLightboxIndex(idx);
            setLightboxOpen(true);
          }}
        />
      </main>

      {/* Multi-Select Float Bar */}
      <SelectionBar
        selectedPhotos={displayedPhotos.filter((p) =>
          selectedPhotoIds.includes(p.id)
        )}
        album={currentAlbum}
        totalAlbumPhotos={displayedPhotos.length}
        onSelectAll={handleSelectAll}
        onDeselectAll={handleDeselectAll}
        onDownloadZip={handleDownloadSelectedZip}
        onClear={() => {
          setIsMultiSelectMode(false);
          setSelectedPhotoIds([]);
        }}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        photos={displayedPhotos}
        initialIndex={lightboxIndex}
        album={currentAlbum}
        onClose={() => setLightboxOpen(false)}
      />

      {/* ZIP Download Modal */}
      <ZipDownloadModal
        isOpen={zipModalOpen}
        state={zipState}
        onClose={() => setZipModalOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        albums={albums}
      />

      <Footer />
    </div>
  );
}
