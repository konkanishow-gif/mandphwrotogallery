"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import {
  Layers,
  Calendar,
  MapPin,
  Camera,
  ArrowRight,
  Search,
  Share2,
  RefreshCw,
} from "lucide-react";
import { ALBUMS_DATA, EVENT_DETAILS, AlbumItem, PhotoItem } from "@/data/driveCatalog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import LightboxModal from "@/components/LightboxModal";
import PhotoCredits from "@/components/PhotoCredits";
import { shareAlbumOnWhatsApp } from "@/utils/whatsapp";

export default function AlbumsPage() {
  const [albums, setAlbums] = useState<AlbumItem[]>(ALBUMS_DATA);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [activeLightboxAlbum, setActiveLightboxAlbum] = useState<AlbumItem>(ALBUMS_DATA[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncText, setLastSyncText] = useState("Just now");
  const [autoSyncToast, setAutoSyncToast] = useState<string | null>(null);
  const prevCountRef = React.useRef(0);

  // Function to refresh catalog from Google Drive
  const fetchLiveCatalog = useCallback(async (force = false) => {
    try {
      if (force) setIsSyncing(true);
      const res = await fetch(`/api/drive/catalog${force ? "?refresh=1" : "?autosync=1"}`);
      const data = await res.json();
      if (data?.albums && Array.isArray(data.albums) && data.albums.length > 0) {
        if (prevCountRef.current > 0 && data.albums.length > prevCountRef.current) {
          setAutoSyncToast("📁 Auto-Synced: New Google Drive album detected!");
          setTimeout(() => setAutoSyncToast(null), 5000);
        }
        if (prevCountRef.current !== data.albums.length) {
          prevCountRef.current = data.albums.length;
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

  // Background Auto-Sync loop (every 30 seconds)
  useEffect(() => {
    fetchLiveCatalog(false);
    const interval = setInterval(() => {
      fetchLiveCatalog(false);
    }, 30000);
    return () => clearInterval(interval);
  }, [fetchLiveCatalog]);

  // Auto-sync immediately when tab gains focus
  useEffect(() => {
    const handleFocus = () => {
      if (document.visibilityState === "visible") {
        fetchLiveCatalog(true);
      }
    };
    document.addEventListener("visibilitychange", handleFocus);
    window.addEventListener("focus", handleFocus);
    return () => {
      document.removeEventListener("visibilitychange", handleFocus);
      window.removeEventListener("focus", handleFocus);
    };
  }, [fetchLiveCatalog]);

  // Dynamically compute unique categories from albums
  const dynamicCategories = useMemo(() => {
    const cats = new Set<string>();
    cats.add("All");
    albums.forEach((a) => {
      if (a.category) {
        cats.add(a.category);
      }
    });
    return Array.from(cats);
  }, [albums]);

  const filtered = albums.filter((a) => {
    const matchesCat =
      selectedCategory === "All" || a.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesQ =
      !searchQuery ||
      a.name.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q);
    return matchesCat && matchesQ;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
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

      <main className="flex-grow max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-6 sm:space-y-10">
        {/* Page Title & Breadcrumbs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#870069] font-bold">Albums</span>
            </div>

            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Google Drive Sync
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {isSyncing ? "Checking Drive..." : `Synced at ${lastSyncText}`}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              1st World Konkani Music Mega Convention (Active)
            </h1>
            <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
              Explore official photographic albums powered directly by Google Drive.
              All folders and newly added media automatically synchronize live.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchLiveCatalog(true)}
              disabled={isSyncing}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-700 shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
              title="Force real-time scan of Google Drive"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${
                  isSyncing ? "animate-spin text-[#870069]" : "text-[#FF693C]"
                }`}
              />
              <span>{isSyncing ? "Checking Drive..." : "Sync Drive Live"}</span>
            </button>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none touch-pan-x">
            {dynamicCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#870069] to-[#FF693C] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:min-w-[260px] md:w-auto">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#870069] focus:bg-white text-slate-800"
            />
          </div>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((album) => (
            <div
              key={album.id}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#870069]/40 transition-all duration-300 flex flex-col"
            >
              {/* Cover Image Container */}
              <div className="relative w-full aspect-[16/10] bg-slate-900 overflow-hidden">
                {album.coverPhoto ? (
                  <img
                    src={album.coverPhoto.previewUrl}
                    alt={album.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-500 p-6 text-center">
                    <Camera className="w-8 h-8 mb-2 opacity-50" />
                    <span className="text-xs font-semibold">Live Google Drive Folder</span>
                    <span className="text-[10px] text-slate-400 mt-1">Photos rendering live</span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-[#870069] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    {album.category}
                  </span>
                </div>

                {/* Photo Count Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                    {album.hasSubfolders
                      ? `${album.subfolderCount} Sessions • ${album.photoCount} HD`
                      : `${album.photoCount} Photos`}
                  </span>
                </div>
              </div>

              {/* Album Info */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#870069] transition-colors leading-snug">
                    {album.name}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {album.description}
                  </p>
                </div>

                {/* Meta details */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#FF693C]" />
                    <span>{album.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FF693C]" />
                    <span className="truncate max-w-[140px]">{album.location}</span>
                  </div>
                </div>

                {/* Actions: View Album & WhatsApp */}
                <div className="pt-2 flex items-center gap-2">
                  <Link
                    href={`/album/${album.slug}`}
                    className="flex-grow py-2.5 px-4 rounded-xl text-center text-xs font-bold bg-[#870069] hover:bg-[#6A0050] text-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>View Album</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={() => shareAlbumOnWhatsApp(album)}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 text-slate-600 transition-colors cursor-pointer"
                    title="Share album on WhatsApp"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center space-y-4 bg-white rounded-3xl border border-dashed border-slate-200">
            <Layers className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-700">No albums matched</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try adjusting your category filter or search query.
            </p>
          </div>
        )}
        {/* Official Photography Credits Section */}
        <PhotoCredits className="mt-8 sm:mt-14" />
      </main>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        photos={activeLightboxAlbum.photos}
        initialIndex={lightboxIndex}
        album={activeLightboxAlbum}
        onClose={() => setLightboxOpen(false)}
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
