"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Layers,
  Calendar,
  MapPin,
  Camera,
  ArrowRight,
  Search,
  Share2,
} from "lucide-react";
import { ALBUMS_DATA, EVENT_DETAILS, AlbumItem, PhotoItem } from "@/data/driveCatalog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchModal from "@/components/SearchModal";
import LightboxModal from "@/components/LightboxModal";
import { shareAlbumOnWhatsApp } from "@/utils/whatsapp";

export default function AlbumsPage() {
  const [albums, setAlbums] = useState<AlbumItem[]>(ALBUMS_DATA);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [activeLightboxAlbum, setActiveLightboxAlbum] = useState<AlbumItem>(ALBUMS_DATA[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Live Google Drive automatic folder sync
  useEffect(() => {
    fetch("/api/drive/catalog")
      .then((res) => res.json())
      .then((data) => {
        if (data?.albums && Array.isArray(data.albums) && data.albums.length > 0) {
          setAlbums(data.albums);
        }
      })
      .catch((err) => console.log("Using compiled catalog:", err));
  }, []);

  const categories = [
    "All",
    "Ceremonies",
    "VVIP Visits",
    "Exhibition",
    "Performances",
    "Culinary",
    "Ambience",
    "World Record",
  ];

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

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
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

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              1st World Konkani Music Mega Convention (Active)
            </h1>
            <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
              Explore official photographic albums powered directly by Google Drive.
              All folders and newly added media automatically synchronize live.
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#870069] to-[#FF693C] text-white shadow-xs"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search within albums */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search albums by name..."
              className="w-full pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 border border-slate-200 outline-none focus:border-[#870069]"
            />
          </div>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((album) => (
            <div
              key={album.id}
              className="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Cover Image Container */}
                <Link
                  href={`/album/${album.slug}`}
                  className="block aspect-[16/10] bg-slate-950 overflow-hidden relative cursor-pointer"
                >
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 rounded-full bg-[#870069] text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      {album.category}
                    </span>
                  </div>

                  {/* Photo count pill */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-amber-300 uppercase tracking-wider border border-white/20">
                      {album.photoCount > 0 ? `${album.photoCount} HD Photos` : "Awaiting Media"}
                    </span>
                  </div>

                  {/* Bottom title & date */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                    <span className="text-[11px] font-medium text-amber-200 block">
                      {album.date}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white truncate drop-shadow-xs">
                      {album.name}
                    </h3>
                  </div>
                </Link>

                {/* Body Details */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {album.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 truncate max-w-[180px]">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{album.location}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#870069] font-semibold">
                      <Camera className="w-3.5 h-3.5 text-[#FF693C]" />
                      <span>Original HD</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => shareAlbumOnWhatsApp(album)}
                  className="p-2 rounded-xl text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 transition-colors cursor-pointer"
                  title="Share on WhatsApp"
                >
                  <Share2 className="w-4 h-4" />
                </button>

                <Link
                  href={`/album/${album.slug}`}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#870069] to-[#FF693C] hover:opacity-95 text-white text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-1.5"
                >
                  <span>Open Album</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />

      <LightboxModal
        isOpen={lightboxOpen}
        photos={activeLightboxAlbum.photos}
        initialIndex={lightboxIndex}
        album={activeLightboxAlbum}
        onClose={() => setLightboxOpen(false)}
      />

      <Footer />
    </div>
  );
}
