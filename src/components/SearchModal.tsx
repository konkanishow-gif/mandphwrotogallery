"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  X,
  Calendar,
  Layers,
  ArrowRight,
  Camera,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { ALBUMS_DATA, AlbumItem, PhotoItem } from "@/data/driveCatalog";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAlbum?: (album: AlbumItem) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  onSelectAlbum,
}: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

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

  // Search Results
  const filteredAlbums = useMemo(() => {
    return ALBUMS_DATA.filter((album) => {
      const matchesCat =
        selectedCategory === "All" || album.category === selectedCategory;
      const q = query.toLowerCase();
      const matchesQuery =
        !query ||
        album.name.toLowerCase().includes(q) ||
        album.category.toLowerCase().includes(q) ||
        album.description.toLowerCase().includes(q) ||
        album.location.toLowerCase().includes(q) ||
        album.date.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, selectedCategory]);

  // Photo Matches
  const matchedPhotos = useMemo(() => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    const results: { photo: PhotoItem; album: AlbumItem }[] = [];

    for (const album of ALBUMS_DATA) {
      for (const photo of album.photos) {
        if (photo.name.toLowerCase().includes(q)) {
          results.push({ photo, album });
          if (results.length >= 8) return results;
        }
      }
    }
    return results;
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="relative p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#870069] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search albums, sessions, photo filenames (e.g. DSC_7494)..."
            autoFocus
            className="w-full text-sm sm:text-base text-slate-900 placeholder-slate-400 outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-slate-600 text-xs font-semibold px-2 py-1 bg-slate-100 rounded-lg cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="px-5 py-2.5 bg-slate-50 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
            Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#870069] to-[#FF693C] text-white shadow-xs"
                  : "bg-white text-slate-600 hover:bg-slate-200/60 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 sm:p-5 space-y-6">
          {/* Matched Albums */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
              <span>Matching Albums ({filteredAlbums.length})</span>
            </div>

            {filteredAlbums.length > 0 ? (
              <div className="space-y-2">
                {filteredAlbums.map((album) => (
                  <div
                    key={album.id}
                    onClick={() => {
                      onSelectAlbum?.(album);
                      onClose();
                    }}
                    className="p-3 rounded-2xl border border-slate-200/80 hover:border-[#870069] hover:bg-purple-50/40 transition-all flex items-center justify-between gap-3 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 overflow-hidden shrink-0">
                        {album.coverPhoto && (
                          <img
                            src={album.coverPhoto.thumbUrl}
                            alt={album.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="min-w-0">
                        <span className="block text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#870069] truncate">
                          {album.name}
                        </span>
                        <div className="flex items-center gap-2 text-[11px] text-slate-500">
                          <span>{album.date}</span>
                          <span>•</span>
                          <span>{album.photoCount} Photos</span>
                          <span>•</span>
                          <span className="text-[#870069] font-semibold">{album.category}</span>
                        </div>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#870069] group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-xs text-slate-400">
                No albums match your search query.
              </div>
            )}
          </div>

          {/* Matched Specific Photos if any */}
          {matchedPhotos.length > 0 && (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Matching Photos ({matchedPhotos.length})
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {matchedPhotos.map(({ photo, album }) => (
                  <div
                    key={photo.id}
                    onClick={() => {
                      onSelectAlbum?.(album);
                      onClose();
                    }}
                    className="group rounded-xl overflow-hidden border border-slate-200 bg-white hover:border-[#870069] cursor-pointer"
                  >
                    <div className="aspect-[4/3] bg-slate-900 overflow-hidden">
                      <img
                        src={photo.thumbUrl}
                        alt={photo.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-2 text-[10px] truncate">
                      <span className="font-mono font-bold block truncate text-slate-900">
                        {photo.name}
                      </span>
                      <span className="text-slate-400 truncate block">
                        {album.shortTitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-400">
          Tip: Search by Google Drive filename (e.g. DSC_7494, AVDM1831) or session title.
        </div>
      </div>
    </div>
  );
}
