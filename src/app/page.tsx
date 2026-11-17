"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Camera,
  Layers,
  Sparkles,
  Calendar,
  Grid,
  ArrowRight,
  CheckCircle2,
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  const [selectedPhotoIds, setSelectedPhotoIds] = useState<string[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [loadedCount, setLoadedCount] = useState(24);

  // Live Google Drive automatic folder sync (No redeployment needed)
  useEffect(() => {
    fetch("/api/drive/catalog")
      .then((res) => res.json())
      .then((data) => {
        if (data?.albums && Array.isArray(data.albums) && data.albums.length > 0) {
          setAlbums(data.albums);
          const currentInLive = data.albums.find(
            (a: AlbumItem) => a.id === activeAlbum.id
          );
          if (currentInLive) {
            setActiveAlbum(currentInLive);
          }
        }
      })
      .catch((err) => {
        console.log("Using compiled catalog:", err);
      });
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

  // Multi-select toggle
  const handleToggleSelect = (photoId: string) => {
    setSelectedPhotoIds((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
  };

  const handleSelectAll = () => {
    setSelectedPhotoIds(activeAlbum.photos.map((p) => p.id));
  };

  const handleDeselectAll = () => {
    setSelectedPhotoIds([]);
  };

  // Download all photos of active album as ZIP
  const handleDownloadAll = () => {
    setZipModalOpen(true);
    downloadPhotosAsZip(
      activeAlbum.photos,
      `${activeAlbum.name}_Full_Album`,
      (state) => setZipState(state)
    );
  };

  // Download selected photos as ZIP
  const handleDownloadSelectedZip = () => {
    const selectedPhotos = activeAlbum.photos.filter((p) =>
      selectedPhotoIds.includes(p.id)
    );
    if (selectedPhotos.length === 0) return;

    setZipModalOpen(true);
    downloadPhotosAsZip(
      selectedPhotos,
      `${activeAlbum.shortTitle}_Selected_Photos`,
      (state) => setZipState(state)
    );
  };

  const selectedPhotos = activeAlbum.photos.filter((p) =>
    selectedPhotoIds.includes(p.id)
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Navbar with brand logos */}
      <Navbar onOpenSearch={() => setSearchModalOpen(true)} />

      {/* Hero Section */}
      <Hero
        onOpenSearch={() => setSearchModalOpen(true)}
        onSearchQuery={(q) => {
          const found = albums.find(
            (a) =>
              a.name.toLowerCase().includes(q.toLowerCase()) ||
              a.category.toLowerCase().includes(q.toLowerCase())
          );
          if (found) {
            setActiveAlbum(found);
            const el = document.getElementById("gallery-section");
            el?.scrollIntoView({ behavior: "smooth" });
          } else {
            setSearchModalOpen(true);
          }
        }}
      />

      {/* Main Interactive Photo Gallery Section */}
      <main
        id="gallery-section"
        className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10"
      >
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#870069] mb-1">
              <Camera className="w-3.5 h-3.5" />
              <span>Official Convention Photo Library</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              1st World Konkani Music Mega Convention (Active)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Authentic high-resolution photographs from Google Drive. Explore albums,
              download original images, or share directly on WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/albums"
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold shadow-2xs hover:shadow-xs transition-all flex items-center gap-1.5"
            >
              <span>View All Albums</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#870069]" />
            </Link>
          </div>
        </div>

        {/* Event Switcher Pills, Progress, and Photographer Credit Bar */}
        <EventSwitcher
          albums={filteredAlbums}
          activeAlbum={activeAlbum}
          onSelectAlbum={(album) => {
            setActiveAlbum(album);
            setSelectedPhotoIds([]);
          }}
          loadedCount={loadedCount}
          totalCount={activeAlbum.photoCount}
          isMultiSelectMode={isMultiSelectMode}
          onToggleMultiSelect={() => setIsMultiSelectMode(!isMultiSelectMode)}
          onDownloadAll={handleDownloadAll}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* The Advanced Masonry Photo Grid */}
        <PhotoGrid
          photos={activeAlbum.photos}
          album={activeAlbum}
          isMultiSelectMode={isMultiSelectMode}
          selectedPhotoIds={selectedPhotoIds}
          onToggleSelect={handleToggleSelect}
          onOpenLightbox={(idx) => {
            setLightboxIndex(idx);
            setLightboxOpen(true);
          }}
          onLoadedCountChange={(count) => setLoadedCount(count)}
        />

        {/* Featured Albums Showcase */}
        <section className="pt-10 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#870069]">
                Curated Collections
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Featured Convention Albums
              </h3>
            </div>
            <Link
              href="/albums"
              className="text-xs sm:text-sm font-bold text-[#870069] hover:text-[#FF693C] hover:underline flex items-center gap-1"
            >
              <span>Browse All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.slice(0, 3).map((album) => (
              <div
                key={album.id}
                onClick={() => {
                  setActiveAlbum(album);
                  setSelectedPhotoIds([]);
                  const el = document.getElementById("gallery-section");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden">
                  {album.coverPhoto ? (
                    <img
                      src={album.coverPhoto.thumbUrl}
                      alt={album.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-500">
                      <Camera className="w-8 h-8 opacity-40 text-amber-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#870069] text-white text-[10px] font-bold uppercase tracking-wider">
                    {album.category}
                  </span>
                  <span className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                    {album.photoCount > 0 ? `${album.photoCount} Photos` : "Awaiting Media"}
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base group-hover:text-[#870069] transition-colors">
                      {album.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {album.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
                    <span className="text-slate-400 font-medium">{album.date}</span>
                    <span className="text-[#870069] font-bold group-hover:text-[#FF693C] flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Convention Heritage Banner */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-50 via-slate-50 to-orange-50 border border-purple-100/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#870069] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mandd Sobhann Cultural Heritage</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              1st World Konkani Music Mega Convention
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              3 to 15 November 2026 • Kalaangann, Mangalore. Celebrating the rich legacy,
              global artists, and historic Guinness World Record musical performances.
            </p>
          </div>

          <Link
            href="/albums"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#870069] to-[#FF693C] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0"
          >
            <span>Explore All Event Albums</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </main>

      {/* Floating Selection Action Bar */}
      <SelectionBar
        selectedPhotos={selectedPhotos}
        album={activeAlbum}
        totalAlbumPhotos={activeAlbum.photoCount}
        onSelectAll={handleSelectAll}
        onDeselectAll={handleDeselectAll}
        onDownloadZip={handleDownloadSelectedZip}
        onClear={() => setSelectedPhotoIds([])}
      />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        photos={activeAlbum.photos}
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

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectAlbum={(album) => {
          setActiveAlbum(album);
          setSelectedPhotoIds([]);
          const el = document.getElementById("gallery-section");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Footer with Mandd Sobhann & Techharmonix */}
      <Footer />
    </div>
  );
}
