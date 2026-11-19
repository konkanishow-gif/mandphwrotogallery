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
  const [activeAlbum, setActiveAlbum] = useState<AlbumItem>(ALBUMS_DATA[0]);
  const [activeSubfolder, setActiveSubfolder] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  const [selectedPhotoIds, setSelectedPhotoIds] = useState<string[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [loadedCount, setLoadedCount] = useState(24);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncText, setLastSyncText] = useState("Just now");

  // Function to refresh catalog from Google Drive
  const fetchLiveCatalog = useCallback(async (force = false) => {
    try {
      if (force) setIsSyncing(true);
      const res = await fetch(`/api/drive/catalog${force ? "?refresh=1" : ""}`);
      const data = await res.json();
      if (data?.albums && Array.isArray(data.albums) && data.albums.length > 0) {
        setAlbums(data.albums);
        setActiveAlbum((prev) => {
          const match = data.albums.find((a: AlbumItem) => a.id === prev.id);
          return match || data.albums[0];
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
    if (!activeAlbum?.id) return;
    fetch(`/api/drive/folder?id=${activeAlbum.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.photos && Array.isArray(data.photos) && data.photos.length > 0) {
          setActiveAlbum((prev) => {
            if (prev.id !== activeAlbum.id) return prev;
            return {
              ...prev,
              photos: data.photos,
              photoCount: data.photoCount || data.photos.length,
              coverPhoto: data.photos[0] || prev.coverPhoto,
              hasLivePhotos: true,
            };
          });
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
  const filteredAlbums =
    selectedCategory === "All"
      ? albums
      : albums.filter((a) => a.category === selectedCategory);

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

  // Visible sliced photos for infinite scroll simulation
  const visiblePhotos = currentPhotos.slice(0, loadedCount);

  // Selected photos array for SelectionBar
  const selectedPhotos = currentPhotos.filter((p) =>
    selectedPhotoIds.includes(p.id)
  );

  const totalPhotosCount = useMemo(() => {
    return albums.reduce((acc, curr) => acc + (curr.photoCount || 0), 0);
  }, [albums]);

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
              Select an official Google Drive folder below to explore photographs in master resolution.
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
            setActiveAlbum(album);
            setActiveSubfolder("all");
            setLoadedCount(24);
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
            setLoadedCount(24);
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

        {/* Progressive Load More Button */}
        {loadedCount < currentPhotos.length && (
          <div className="pt-8 pb-4 flex flex-col items-center gap-2">
            <button
              onClick={() => setLoadedCount((prev) => prev + 24)}
              className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-800 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-2 hover:border-[#870069]/40"
            >
              <Camera className="w-4 h-4 text-[#870069]" />
              <span>
                Load More Photographs ({currentPhotos.length - loadedCount} remaining)
              </span>
            </button>
            <span className="text-[11px] text-slate-400">
              Showing {loadedCount} of {currentPhotos.length} in this session
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
