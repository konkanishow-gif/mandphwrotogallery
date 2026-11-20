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
  const [autoSyncToast, setAutoSyncToast] = useState<string | null>(null);
  const prevAlbumPhotosRef = React.useRef(0);

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
        if (prevAlbumPhotosRef.current > 0 && data.photos.length > prevAlbumPhotosRef.current) {
          const diff = data.photos.length - prevAlbumPhotosRef.current;
          setAutoSyncToast(`✨ Auto-Synced: ${diff} new photo${diff > 1 ? "s" : ""} added live to this album!`);
          setTimeout(() => setAutoSyncToast(null), 5000);
        }
        prevAlbumPhotosRef.current = data.photos.length;

        setCurrentAlbum((prev) => {
          if (!prev) return prev;
          const existingIds = new Set(prev.photos.map((p) => p.id));
          const newPhotos = data.photos.filter((p: any) => !existingIds.has(p.id));
          if (newPhotos.length === 0) return prev;
          const merged = [...newPhotos, ...prev.photos];
          return {
            ...prev,
            photos: merged,
            photoCount: merged.length,
            coverPhoto: merged[0] || prev.coverPhoto,
            subfolders: data.subfolders || prev.subfolders,
            hasLivePhotos: true,
          };
        });
        setLastSyncText(
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      }
    } catch (err) {
      console.log("Live folder refresh error:", err);
    } finally {
      setIsRefreshingFolder(false);
    }
  }, [currentAlbum?.id]);

  // Gentle 30-second live check loop (preserves mobile battery and eliminates screen flicker)
  useEffect(() => {
    if (!currentAlbum?.id) return;
    refreshLivePhotos();
    const interval = setInterval(() => {
      refreshLivePhotos();
    }, 30000);
    return () => clearInterval(interval);
  }, [currentAlbum?.id, refreshLivePhotos]);

  // Immediate sync on tab focus / visibility
  useEffect(() => {
    const handleFocus = () => {
      if (document.visibilityState === "visible") {
        refreshLivePhotos();
      }
    };
    document.addEventListener("visibilitychange", handleFocus);
    window.addEventListener("focus", handleFocus);
    return () => {
      document.removeEventListener("visibilitychange", handleFocus);
      window.removeEventListener("focus", handleFocus);
    };
  }, [refreshLivePhotos]);

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
        <div className="min-h-screen flex flex-col bg-[#0B0F19] text-white">
          <Navbar onOpenSearch={() => setSearchModalOpen(true)} />
          <div className="flex-grow flex flex-col items-center justify-center p-8 space-y-4">
            <RefreshCw className="w-8 h-8 animate-spin text-[#870069]" />
            <p className="text-sm font-semibold text-slate-300">
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
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-white">
      <Navbar onOpenSearch={() => setSearchModalOpen(true)} />

      {/* Floating Auto-Sync Notification Toast */}
      {autoSyncToast && (
        <div className="fixed top-20 inset-x-4 max-w-md mx-auto z-50 animate-in slide-in-from-top-4 fade-in duration-300 pointer-events-none">
          <div className="bg-slate-900/95 backdrop-blur-xl text-white px-4 py-3 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <p className="text-xs font-bold text-white flex-grow">{autoSyncToast}</p>
          </div>
        </div>
      )}

      {/* Album Hero Cover Banner */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-4 sm:py-12 border-b border-slate-800">
        {/* Cover Background */}
        <div className="absolute inset-0 z-0">
          {currentAlbum.coverPhoto && (
            <img
              src={currentAlbum.coverPhoto.previewUrl}
              alt={currentAlbum.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-25 scale-105 filter blur-xs"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-[#0B0F19]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-3 sm:space-y-5">
          {/* Breadcrumb Navigation */}
          <Link
            href="/albums"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Albums</span>
          </Link>

          {/* Dedicated Album Cover Thumbnail & Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 max-w-5xl">
            {/* Visual Cover Thumbnail Photo for the Dedicated Album */}
            <div className="w-16 h-16 sm:w-28 sm:h-28 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 border border-white/20 shadow-2xl bg-slate-900">
              <img
                src={
                  currentAlbum.coverPhoto?.thumbUrl ||
                  currentAlbum.photos[0]?.thumbUrl ||
                  `https://lh3.googleusercontent.com/d/${currentAlbum.photos[0]?.id || currentAlbum.id}=s400`
                }
                alt={currentAlbum.name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1.5 sm:space-y-2 flex-grow min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-[#870069] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  {currentAlbum.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[10px] sm:text-xs font-medium border border-white/20">
                  {displayedPhotos.length} HD Photos
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] sm:text-xs font-medium border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </span>
              </div>

              <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {currentAlbum.name}
              </h1>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl line-clamp-2">
                {currentAlbum.description}
              </p>
            </div>
          </div>

          {/* Event Meta Details Grid */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-slate-400 border-t border-slate-800">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#FF693C]" />
              <span>{currentAlbum.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF693C]" />
              <span>{currentAlbum.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-emerald-400" />
              <span>Photos: <strong className="text-amber-300 font-semibold">{currentAlbum.photographer}</strong></span>
            </div>
          </div>

          {/* Action Buttons: Download All, WhatsApp, Multi-Select */}
          <div className="pt-1 grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownloadAllZip}
              disabled={displayedPhotos.length === 0}
              className={`col-span-2 sm:col-span-1 px-4 py-2 sm:py-2.5 rounded-xl text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 ${
                displayedPhotos.length > 0
                  ? "bg-gradient-to-r from-[#870069] to-[#FF693C] hover:opacity-95 cursor-pointer"
                  : "bg-slate-800 text-slate-500 cursor-not-allowed"
              }`}
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>Download ZIP ({displayedPhotos.length})</span>
            </button>

            <button
              onClick={() => shareAlbumOnWhatsApp(currentAlbum)}
              className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <Share2 className="w-4 h-4 shrink-0" />
            </button>

            <button
              onClick={() => setIsMultiSelectMode(!isMultiSelectMode)}
              className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-1.5 border cursor-pointer ${
                isMultiSelectMode
                  ? "bg-white text-slate-900 border-white"
                  : "bg-white/10 hover:bg-white/20 text-white border-white/20"
              }`}
            >
              {isMultiSelectMode ? (
                <>
                  <CheckSquare className="w-4 h-4 text-[#870069] shrink-0" />
                  <span className="truncate">Multi-Select</span>
                </>
              ) : (
                <>
                  <Square className="w-4 h-4 text-slate-300 shrink-0" />
                  <span className="truncate">Select</span>
                </>
              )}
            </button>

            <button
              onClick={refreshLivePhotos}
              disabled={isRefreshingFolder}
              className="col-span-2 sm:col-span-1 px-4 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              title="Fetch new photos directly from Google Drive"
            >
              <RefreshCw
                className={`w-4 h-4 shrink-0 ${
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
        <section className="bg-slate-900 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none touch-pan-x">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5 pr-2">
                <FolderOpen className="w-3.5 h-3.5 text-[#FF693C]" />
                Sessions / Days:
              </span>
              <button
                onClick={() => setSelectedSubfolder("All")}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedSubfolder === "All"
                    ? "bg-[#870069] text-white shadow-xs"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
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
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? "bg-[#870069] text-white shadow-xs"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
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
      <main className="flex-grow max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-10 space-y-4 sm:space-y-6">
        {/* Gallery Toolbar: Total Counter & Sort Options */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2.5 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-300">
              Showing {displayedPhotos.length} Photographs
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400">
              Original Google Drive Masters
            </span>
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs text-slate-400 font-medium">Sort:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as any)}
              className="text-xs font-semibold bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-slate-200 outline-none focus:border-[#FF693C] cursor-pointer"
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

      {/* Sleek Floating Bottom Credit Pill matching Reference */}
      <div className="fixed bottom-3 inset-x-0 z-30 flex justify-center pointer-events-none px-4">
        <div className="pointer-events-auto px-4 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/60 shadow-xl text-[11px] text-slate-300 flex items-center gap-2">
          <span>Photos: <strong className="text-amber-300 font-semibold">Stanly Bantwal</strong></span>
          <span className="text-slate-500">•</span>
          <span>Website: <strong className="text-white font-semibold">Techharmonix</strong></span>
        </div>
      </div>

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
