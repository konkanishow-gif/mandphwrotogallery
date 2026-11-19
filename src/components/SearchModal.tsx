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
  albums?: AlbumItem[];
}

export default function SearchModal({
  isOpen,
  onClose,
  onSelectAlbum,
  albums = ALBUMS_DATA,
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

  // Compute dynamic categories from the live albums
  const dynamicCategories = useMemo(() => {
    const cats = new Set<string>();
    cats.add("All");
    albums.forEach((a) => {
      if (a.category) cats.add(a.category);
    });
    return Array.from(cats);
  }, [albums]);

  // Search Results
  const filteredAlbums = useMemo(() => {
    return albums.filter((album) => {
      const matchesCat =
        selectedCategory === "All" || album.category === selectedCategory;
      const q = query.toLowerCase();
      const matchesQ =
        !query ||
        album.name.toLowerCase().includes(q) ||
        album.category.toLowerCase().includes(q) ||
        album.description.toLowerCase().includes(q) ||
        album.photos.some((p) => p.name.toLowerCase().includes(q));

      return matchesCat && matchesQ;
    });
  }, [albums, query, selectedCategory]);

  // Matched individual photos
  const matchedPhotos = useMemo(() => {
    if (!query || query.length < 2) return [];
    const q = query.toLowerCase();
    const results: Array<{ photo: PhotoItem; album: AlbumItem }> = [];

    for (const album of albums) {
      for (const photo of album.photos) {
        if (photo.name.toLowerCase().includes(q)) {
          results.push({ photo, album });
          if (results.length >= 12) break;
        }
      }
      if (results.length >= 12) break;
    }
    return results;
  }, [albums, query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-200 overflow-y-auto">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto animate-in zoom-in-95 duration-200">
        {/* Search Header Bar */}
        <div className="relative p-4 sm:p-6 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#870069] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search filenames (e.g., DSC_7494, AVDM1594), sessions, albums..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer text-xs font-semibold px-3"
          >
            Esc
          </button>
        </div>

        {/* Dynamic Category Chips */}
        <div className="p-3 sm:px-6 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
            Category:
          </span>
          {dynamicCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-[#870069] text-white shadow-2xs"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-6">
          {/* Matched Albums */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Matching Albums ({filteredAlbums.length})</span>
              <span className="text-[11px] text-[#870069] lowercase font-normal">
                {query ? `matching "${query}"` : "all live albums"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredAlbums.map((album) => (
                <Link
                  key={album.id}
                  href={`/album/${album.slug}`}
                  onClick={onClose}
                  className="p-3 rounded-2xl border border-slate-200 hover:border-[#870069]/40 hover:bg-purple-50/30 transition-all flex items-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                    {album.coverPhoto ? (
                      <img
                        src={album.coverPhoto.thumbUrl}
                        alt={album.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                        <Camera className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 flex-grow">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF693C] block truncate">
                      {album.category}
                    </span>
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900 truncate group-hover:text-[#870069] transition-colors">
                      {album.name}
                    </h5>
                    <span className="text-[11px] text-slate-400 block">
                      {album.photoCount} HD photographs
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#870069] transition-colors shrink-0" />
                </Link>
              ))}
            </div>

            {filteredAlbums.length === 0 && (
              <div className="py-8 text-center text-xs text-slate-400">
                No albums matched your query.
              </div>
            )}
          </div>

          {/* Matched Photos by Filename */}
          {matchedPhotos.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Matching Photo Filenames ({matchedPhotos.length})
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {matchedPhotos.map(({ photo, album }) => (
                  <Link
                    key={photo.id}
                    href={`/album/${album.slug}`}
                    onClick={onClose}
                    className="group rounded-xl border border-slate-200 overflow-hidden hover:border-[#870069] transition-all bg-slate-900"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <img
                        src={photo.thumbUrl}
                        alt={photo.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-2 bg-white">
                      <span className="block font-mono text-[10px] font-bold text-slate-800 truncate">
                        {photo.name}
                      </span>
                      <span className="block text-[10px] text-slate-400 truncate">
                        {album.shortTitle}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Modal Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 px-6">
          <span>Search matches live Google Drive catalog</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
