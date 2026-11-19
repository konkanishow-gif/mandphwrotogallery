"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import {
  Camera,
  Layers,
  Sparkles,
  Calendar,
  Grid,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Zap,
} from "lucide-react";
import { ALBUMS_DATA, AlbumItem, PhotoItem, EVENT_DETAILS } from "@/data/driveCatalog";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventSwitcher from "@/components/EventSwitcher";
import PhotoGrid from "@/components/PhotoGrid";
import SelectionBar from "@/components/SelectionBar";
import LightboxModal from "@/components/LightboxModal";
import ZipDownloadModal from "@/components/ZipDownloadModal";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import { downloadPhotosAsZip, ZipProgressState } from "@/utils/zipDownload";

export default function HomePage() {
  const [albums, setAlbums] = useState<AlbumItem[]>(ALBUMS_DATA);
  const [activeAlbumId, setActiveAlbumId] = useState<string>("all-photos");
  const [activeSubfolder, setActiveSubfolder] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  const [selectedPhotoIds, setSelectedPhotoIds] = useState<string[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [loadedCount, setLoadedCount] = useState(48);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncText, setLastSyncText] = useState("Just now");

  // Synthetic "All Photographs" collection encompassing the entire Google Drive
  const allPhotosAlbum: AlbumItem = useMemo(() => {
    const all: PhotoItem[] = [];
    const seen = new Set<string>();
    for (const a of albums) {
      for (const p of a.photos) {
        if (!seen.has(p.id)) {
          seen.add(p.id);
          all.push(p);
        }
      }
    }
    return {
      id: "all-photos",
      name: "All Photographs (Full Mega Convention)",
      slug: "all-photos",
      shortTitle: "All Photographs",
      category: "Full Event Archive",
      date: "03 - 15 Nov 2026",
      location: "Kalaangann, Mangalore",
      photographer: "Mandd Sobhann Media Cell",
      description:
        "Comprehensive live photographic archive containing all 1,000+ photographs across all sessions and events.",
      driveFolderUrl: EVENT_DETAILS.rootDriveUrl,
      photoCount: all.length,
      hasSubfolders: false,
      subfolderCount: 0,
      coverPhoto: all[0] || null,
      photos: all,
      isDriveConnected: true,
      year: 2026,
      hasLivePhotos: all.length > 0,
    };
  }, [albums]);

  // Combined list of display albums with All-Photos as primary option
  const displayAlbums = useMemo(() => {
    return [allPhotosAlbum, ...albums];
  }, [allPhotosAlbum, albums]);

  // Current active album
  const activeAlbum = useMemo(() => {
    if (activeAlbumId === "all-photos") {
      return allPhotosAlbum;
    }
    return albums.find((a) => a.id === activeAlbumId) || allPhotosAlbum;
  }, [activeAlbumId, allPhotosAlbum, albums]);

  // Function to refresh catalog from Google Drive
  const fetchLiveCatalog = useCallback(async (force = false) => {
    try {
      if (force) setIsSyncing(true);
      const res = await fetch(`/api/drive/catalog${force ? "?refresh=1" : ""}`);
      const data = await res.json();
      if (data?.albums && Array.isArray(data.albums) && data.albums.length > 0) {
        setAlbums(data.albums);
        setLastSyncText(
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })
        );
      }
    } catch (err) {
      console.log("Drive sync check:", err);
    } finally {
      if (force) setIsSyncing(false);
    }
  }, []);

  // Check on mount and periodically in background every 30 seconds
  useEffect(() => {
    fetchLiveCatalog(false);
    const interval = setInterval(() => {
      fetchLiveCatalog(false);
    }, 30000);
    return () => clearInterval(interval);
  }, [fetchLiveCatalog]);

  // When active album changes, also fetch live photos for this specific folder
  useEffect(() => {
    if (!activeAlbum?.id || activeAlbum.id === "all-photos") return;
    fetch(`/api/drive/folder?id=${activeAlbum.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.photos && Array.isArray(data.photos) && data.photos.length > 0) {
          setAlbums((prevAlbums) =>
            prevAlbums.map((a) => {
              if (a.id === activeAlbum.id) {
                return {
                  ...a,
                  photos: data.photos,
                  photoCount: data.photoCount || data.photos.length,
                  coverPhoto: data.photos[0] || a.coverPhoto,
                  hasLivePhotos: true,
                };
              }
              return a;
            })
          );
        }
      })
      .catch(() => {});
  }, [activeAlbum.id]);

  // ZIP Download progress state
  const [zipModalOpen, setZipModalOpen] = useState(false);
  const [zipState, setZipState] = useState<ZipProgressState>({
    isDownloading: false,
    progressPercent: 0,
    currentFileName: "",
    totalFiles: 0,
    completedFiles: 0,
  });

  // Filter albums by category for the switcher
  const filteredAlbums = useMemo(() => {
    if (selectedCategory === "All") {
      return displayAlbums;
    }
    return displayAlbums.filter((a) => a.category === selectedCategory);
  }, [selectedCategory, displayAlbums]);

  // Active photos based on subfolder selection
  const currentPhotos = useMemo(() => {
    if (activeSubfolder === "all" || !activeAlbum.subfolders) {
      return activeAlbum.photos;
    }
    const match = activeAlbum.subfolders.find((sf) => sf.slug === activeSubfolder);
    return match && match.photos.length > 0 ? match.photos : activeAlbum.photos;
  }, [activeAlbum, activeSubfolder]);

  // Multi-select toggle
  const handleToggleSelect = (photoId: string) => {
    setSelectedPhotoIds((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
  };

  const handleSelectAll = () => {
    setSelectedPhotoIds(currentPhotos.map((p) => p.id));
  };

  const handleDeselectAll = () => {
    setSelectedPhotoIds([]);
  };

  // Download all photos of active selection as ZIP
  const handleDownloadAll = () => {
    setZipModalOpen(true);
    downloadPhotosAsZip(
      currentPhotos,
      `${activeAlbum.name}_Full_Album`,
      (state) => setZipState(state)
    );
  };

  // Download selected photos as ZIP
  const handleDownloadSelected = () => {
    const selected = currentPhotos.filter((p) =>
      selectedPhotoIds.includes(p.id)
    );
    if (selected.length === 0) return;

    setZipModalOpen(true);
    downloadPhotosAsZip(
      selected,
      `${activeAlbum.shortTitle}_Selected_Photos`,
      (state) => setZipState(state)
    );
  };

  // Open Lightbox on click
  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Visible sliced photos for infinite scroll
  const visiblePhotos = currentPhotos.slice(0, loadedCount);

  // Selected photos array for SelectionBar
  const selectedPhotos = currentPhotos.filter((p) =>
    selectedPhotoIds.includes(p.id)
  );

  const totalPhotosCount = allPhotosAlbum.photoCount;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Primary Sticky Header */}
      <Navbar onOpenSearch={() => setSearchModalOpen(true)} />

      {/* Hero Section */}
      <Hero
        onOpenSearch={() => setSearchModalOpen(true)}
        totalPhotos={totalPhotosCount}
        totalAlbums={albums.length}
      />

      {/* Main Interactive Photo Gallery Container */}
      <main
        id="gallery-section"
        className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8"
      >
        {/* Section Header with Live Google Drive Status & Manual Refresh */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Google Drive Synchronized
              </span>
              <span className="text-xs text-slate-400">
                Synced: {lastSyncText}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Convention Photo Library
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select an official Google Drive folder below or explore all {totalPhotosCount} photographs in master resolution.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchLiveCatalog(true)}
              disabled={isSyncing}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
              title="Force real-time scan of Google Drive"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${
                  isSyncing ? "animate-spin text-[#870069]" : "text-[#FF693C]"
                }`}
              />
              <span>{isSyncing ? "Checking Drive..." : "Sync Drive Now"}</span>
            </button>
            <Link
              href="/albums"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#870069] hover:bg-[#6A0050] text-white shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>All {albums.length} Folders</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Dynamic Event / Session Switcher */}
        <EventSwitcher
          albums={filteredAlbums}
          activeAlbum={activeAlbum}
          onSelectAlbum={(album) => {
            setActiveAlbumId(album.id);
            setActiveSubfolder("all");
            setLoadedCount(48);
          }}
          loadedCount={visiblePhotos.length}
          totalCount={currentPhotos.length}
          isMultiSelectMode={isMultiSelectMode}
          onToggleMultiSelect={() => setIsMultiSelectMode(!isMultiSelectMode)}
          onDownloadAll={handleDownloadAll}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onRefreshLive={() => fetchLiveCatalog(true)}
          isRefreshing={isSyncing}
          activeSubfolder={activeSubfolder}
          onSelectSubfolder={(sub) => {
            setActiveSubfolder(sub);
            setLoadedCount(48);
          }}
        />

        {/* Responsive Masonry / Dynamic Photo Grid */}
        <PhotoGrid
          photos={visiblePhotos}
          album={activeAlbum}
          selectedPhotoIds={selectedPhotoIds}
          isMultiSelectMode={isMultiSelectMode}
          onToggleSelect={handleToggleSelect}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Progressive Load More Controls */}
        {loadedCount < currentPhotos.length && (
          <div className="pt-8 pb-4 flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setLoadedCount((prev) => prev + 48)}
                className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-2 hover:border-[#870069]/40"
              >
                <Camera className="w-4 h-4 text-[#870069]" />
                <span>
                  Load More ({Math.min(48, currentPhotos.length - loadedCount)} of{" "}
                  {currentPhotos.length - loadedCount} remaining)
                </span>
              </button>

              <button
                onClick={() => setLoadedCount(currentPhotos.length)}
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-[#870069] to-[#FF693C] hover:opacity-95 text-white shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>Load All Remaining ({currentPhotos.length - loadedCount})</span>
              </button>
            </div>
            <span className="text-[11px] text-slate-400">
              Showing {loadedCount} of {currentPhotos.length} photographs in this view
            </span>
          </div>
        )}
      </main>

      {/* Floating Selection Bar */}
      <SelectionBar
        selectedPhotos={selectedPhotos}
        album={activeAlbum}
        totalAlbumPhotos={currentPhotos.length}
        onSelectAll={handleSelectAll}
        onDeselectAll={handleDeselectAll}
        onDownloadZip={handleDownloadSelected}
        onClear={() => {
          setIsMultiSelectMode(false);
          setSelectedPhotoIds([]);
        }}
      />

      {/* Full-Screen Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        photos={currentPhotos}
        initialIndex={lightboxIndex}
        album={activeAlbum}
        onClose={() => setLightboxOpen(false)}
      />

      {/* ZIP Download Progress Modal */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
