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

  const [autoSyncToast, setAutoSyncToast] = useState<string | null>(null);
  const prevPhotosCountRef = React.useRef<number>(0);
  const prevAlbumsCountRef = React.useRef<number>(0);

  // Function to refresh catalog from Google Drive
  const fetchLiveCatalog = useCallback(async (force = false) => {
    try {
      if (force) setIsSyncing(true);
      const res = await fetch(`/api/drive/catalog${force ? "?refresh=1" : "?autosync=1"}`);
      const data = await res.json();
      if (data?.albums && Array.isArray(data.albums) && data.albums.length > 0) {
        // Detect if new photos or albums were added
        const newTotal = data.totalPhotos || data.albums.reduce((s: number, a: any) => s + (a.photoCount || a.photos?.length || 0), 0);
        const newAlbumCount = data.albums.length;

        if (prevPhotosCountRef.current > 0 && newTotal > prevPhotosCountRef.current) {
          const diff = newTotal - prevPhotosCountRef.current;
          setAutoSyncToast(`✨ Auto-Synced: ${diff} new photograph${diff > 1 ? "s" : ""} added live from Google Drive!`);
          setTimeout(() => setAutoSyncToast(null), 5000);
        } else if (prevAlbumsCountRef.current > 0 && newAlbumCount > prevAlbumsCountRef.current) {
          setAutoSyncToast(`📁 Auto-Synced: New Google Drive folder detected and added!`);
          setTimeout(() => setAutoSyncToast(null), 5000);
        }

        // Only update albums state if total photo count or album count changed
        if (newTotal !== prevPhotosCountRef.current || newAlbumCount !== prevAlbumsCountRef.current) {
          prevPhotosCountRef.current = newTotal;
          prevAlbumsCountRef.current = newAlbumCount;
          setAlbums(data.albums);
        }

        setLastSyncText(
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      }
    } catch (err) {
      console.log("Drive auto-sync check:", err);
    } finally {
      if (force) setIsSyncing(false);
    }
  }, []);

  // Background Auto-Sync loop (gentle 30-second cadence to preserve mobile battery and prevent UI freezing)
  useEffect(() => {
    fetchLiveCatalog(false);
    const interval = setInterval(() => {
      fetchLiveCatalog(false);
    }, 30000);
    return () => clearInterval(interval);
  }, [fetchLiveCatalog]);

  // Instant Auto-Sync on Tab Visibility / Focus
  // When user adds photos to Drive in another tab and returns, it syncs immediately!
  useEffect(() => {
    const handleVisibilityOrFocus = () => {
      if (document.visibilityState === "visible") {
        fetchLiveCatalog(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityOrFocus);
    window.addEventListener("focus", handleVisibilityOrFocus);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityOrFocus);
      window.removeEventListener("focus", handleVisibilityOrFocus);
    };
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
                const existingIds = new Set(a.photos.map((p) => p.id));
                const newPhotos = data.photos.filter((p: any) => !existingIds.has(p.id));
                if (newPhotos.length === 0) return a;
                const merged = [...newPhotos, ...a.photos];
                return {
                  ...a,
                  photos: merged,
                  photoCount: merged.length,
                  coverPhoto: merged[0] || a.coverPhoto,
                  subfolders: data.subfolders || a.subfolders,
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
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-white">
      {/* Primary Sticky Header */}
      <Navbar onOpenSearch={() => setSearchModalOpen(true)} />

      {/* Hero Section */}
      <Hero
        onOpenSearch={() => setSearchModalOpen(true)}
        totalPhotos={totalPhotosCount}
        totalAlbums={albums.length}
      />

      {/* Floating Auto-Sync Notification Toast */}
      {autoSyncToast && (
        <div className="fixed top-20 inset-x-4 max-w-md mx-auto z-50 animate-in slide-in-from-top-4 fade-in duration-300 pointer-events-none">
          <div className="bg-slate-900/95 backdrop-blur-xl text-white px-4 py-3 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <p className="text-xs font-bold text-white flex-grow">{autoSyncToast}</p>
          </div>
        </div>
      )}

      {/* Main Interactive Photo Gallery Container */}
      <main
        id="gallery-section"
        className="flex-grow max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-12 space-y-5 sm:space-y-8"
      >
        {/* Section Header with Live Google Drive Status & Manual Refresh */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 text-xs font-semibold border border-emerald-800/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Google Drive Sync
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {isSyncing ? (
                  <span className="text-amber-300 font-semibold flex items-center gap-1">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    Checking Drive...
                  </span>
                ) : (
                  `Synced at ${lastSyncText}`
                )}
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              Convention Photo Library
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Select an official Google Drive folder below or explore all {totalPhotosCount} photographs in master resolution.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchLiveCatalog(true)}
              disabled={isSyncing}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
              title="Force real-time scan of Google Drive"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${
                  isSyncing ? "animate-spin text-[#870069]" : "text-[#FF693C]"
                }`}
              />
              <span>{isSyncing ? "Scanning Drive..." : "Sync Drive Now"}</span>
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

        {/* Responsive Photo Grid with Built-In Progressive Batching */}
        <PhotoGrid
          photos={currentPhotos}
          album={activeAlbum}
          selectedPhotoIds={selectedPhotoIds}
          isMultiSelectMode={isMultiSelectMode}
          onToggleSelect={handleToggleSelect}
          onOpenLightbox={handleOpenLightbox}
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
