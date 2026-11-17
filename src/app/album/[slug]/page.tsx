"use client";

import React, { useState, useMemo, useEffect } from "react";
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
  const [sortOption, setSortOption] = useState<"default" | "az" | "za">("default");
  const [isMultiSelectMode, setIsMultiSelectMode] = useState(false);
  const [selectedPhotoIds, setSelectedPhotoIds] = useState<string[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Live Drive sync
  useEffect(() => {
    fetch("/api/drive/catalog")
      .then((res) => res.json())
      .then((data) => {
        if (data?.albums && Array.isArray(data.albums) && data.albums.length > 0) {
          setAlbums(data.albums);
        }
      })
      .catch((err) => console.log("Using static albums:", err));
  }, []);

  const album = albums.find((a) => a.slug === slug);

  // ZIP download modal state
  const [zipModalOpen, setZipModalOpen] = useState(false);
  const [zipState, setZipState] = useState<ZipProgressState>({
    isDownloading: false,
    progressPercent: 0,
    currentFileName: "",
    totalFiles: 0,
    completedFiles: 0,
  });

  if (!album) {
    return notFound();
  }

  // Sorted photos
  const sortedPhotos = useMemo(() => {
    const list = [...album.photos];
    if (sortOption === "az") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "za") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    }
    return list;
  }, [album.photos, sortOption]);

  const handleToggleSelect = (photoId: string) => {
    setSelectedPhotoIds((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
  };

  const handleSelectAll = () => {
    setSelectedPhotoIds(album.photos.map((p) => p.id));
  };

  const handleDeselectAll = () => {
    setSelectedPhotoIds([]);
  };

  const handleDownloadAllZip = () => {
    if (album.photos.length === 0) return;
    setZipModalOpen(true);
    downloadPhotosAsZip(
      album.photos,
      `${album.name}_Full_Album`,
      (state) => setZipState(state)
    );
  };

  const handleDownloadSelectedZip = () => {
    const selectedPhotos = album.photos.filter((p) =>
      selectedPhotoIds.includes(p.id)
    );
    if (selectedPhotos.length === 0) return;

    setZipModalOpen(true);
    downloadPhotosAsZip(
      selectedPhotos,
      `${album.shortTitle}_Selected_Photos`,
      (state) => setZipState(state)
    );
  };

  const selectedPhotos = album.photos.filter((p) =>
    selectedPhotoIds.includes(p.id)
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar onOpenSearch={() => setSearchModalOpen(true)} />

      {/* Album Hero Cover Banner */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-16 sm:py-24">
        {/* Cover Background */}
        <div className="absolute inset-0 z-0">
          {album.coverPhoto && (
            <img
              src={album.coverPhoto.previewUrl}
              alt={album.name}
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
                {album.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium border border-white/20">
                {album.photoCount} High-Resolution Photographs
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {album.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {album.description}
            </p>
          </div>

          {/* Event Meta Details Grid */}
          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#FF693C]" />
              <span>{album.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF693C]" />
              <span>{album.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-400" />
              <span>Photographer: <strong>{album.photographer}</strong></span>
            </div>
          </div>

          {/* Action Buttons: Download All & Share */}
          <div className="pt-2 flex items-center gap-3 flex-wrap">
            <button
              onClick={handleDownloadAllZip}
              disabled={album.photoCount === 0}
              className={`px-5 py-3 rounded-xl text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 ${
                album.photoCount > 0
                  ? "bg-gradient-to-r from-[#870069] to-[#FF693C] hover:opacity-95 cursor-pointer"
                  : "bg-slate-800 text-slate-500 cursor-not-allowed"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Download Entire Album as ZIP ({album.photoCount})</span>
            </button>

            <button
              onClick={() => shareAlbumOnWhatsApp(album)}
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
                  <span>Select Multiple Photos</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Main Album Photos Grid */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
        {/* Gallery Toolbar: Total Counter & Sort Options */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900">
              Showing {sortedPhotos.length} Photographs
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

        {/* Photo Grid */}
        <PhotoGrid
          photos={sortedPhotos}
          album={album}
          isMultiSelectMode={isMultiSelectMode}
          selectedPhotoIds={selectedPhotoIds}
          onToggleSelect={handleToggleSelect}
          onOpenLightbox={(idx) => {
            setLightboxIndex(idx);
            setLightboxOpen(true);
          }}
        />
      </main>

      {/* Selection Floating Bar */}
      <SelectionBar
        selectedPhotos={selectedPhotos}
        album={album}
        totalAlbumPhotos={album.photoCount}
        onSelectAll={handleSelectAll}
        onDeselectAll={handleDeselectAll}
        onDownloadZip={handleDownloadSelectedZip}
        onClear={() => setSelectedPhotoIds([])}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        photos={sortedPhotos}
        initialIndex={lightboxIndex}
        album={album}
        onClose={() => setLightboxOpen(false)}
      />

      {/* ZIP Download Modal */}
      <ZipDownloadModal
        isOpen={zipModalOpen}
        state={zipState}
        onClose={() => setZipModalOpen(false)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />

      <Footer />
    </div>
  );
}
