"use client";

import React from "react";
import {
  Download,
  Share2,
  CheckSquare,
  Square,
  Sparkles,
  Clock,
  Camera,
} from "lucide-react";
import { AlbumItem } from "@/data/driveCatalog";
import { shareAlbumOnWhatsApp } from "@/utils/whatsapp";

interface EventSwitcherProps {
  albums: AlbumItem[];
  activeAlbum: AlbumItem;
  onSelectAlbum: (album: AlbumItem) => void;
  loadedCount: number;
  totalCount: number;
  isMultiSelectMode: boolean;
  onToggleMultiSelect: () => void;
  onDownloadAll: () => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export default function EventSwitcher({
  albums,
  activeAlbum,
  onSelectAlbum,
  loadedCount,
  totalCount,
  isMultiSelectMode,
  onToggleMultiSelect,
  onDownloadAll,
  selectedCategory,
  onSelectCategory,
}: EventSwitcherProps) {
  const percentLoaded =
    totalCount > 0 ? Math.min(100, Math.round((loadedCount / totalCount) * 100)) : 0;

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

  return (
    <div className="space-y-6">
      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap pl-1">
          Filter:
        </span>
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                isSelected
                  ? "bg-gradient-to-r from-[#870069] to-[#FF693C] text-white shadow-xs"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Featured Album Switcher Horizontal Scroll / Grid Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {albums.map((album) => {
          const isActive = album.id === activeAlbum.id;
          const hasPhotos = album.photoCount > 0;
          return (
            <button
              key={album.id}
              onClick={() => onSelectAlbum(album)}
              className={`p-3.5 rounded-2xl text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 border ${
                isActive
                  ? "bg-gradient-to-r from-[#870069] to-[#6A0050] text-white border-[#870069] shadow-md scale-[1.01]"
                  : "bg-white hover:bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="min-w-0">
                <span
                  className={`block text-[10px] font-bold uppercase tracking-wider ${
                    isActive ? "text-[#FF873C]" : "text-[#870069]"
                  }`}
                >
                  {album.category}
                </span>
                <span className="block font-bold text-xs sm:text-sm truncate mt-0.5">
                  {album.name}
                </span>
                <span
                  className={`block text-[11px] mt-0.5 ${
                    isActive ? "text-purple-200" : "text-slate-400"
                  }`}
                >
                  {album.date}
                </span>
              </div>

              <div className="shrink-0 flex flex-col items-end gap-1">
                <span
                  className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                    isActive
                      ? "bg-[#FF693C] text-white shadow-2xs"
                      : hasPhotos
                      ? "bg-purple-100 text-[#870069]"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {hasPhotos ? `${album.photoCount} HD` : "Scheduled"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Session Info Bar & Photographer Attribution (Sumadhur Style) */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left: Active Album Title, Date, Venue */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-md bg-[#870069] text-white text-[11px] font-bold uppercase tracking-wider">
              {activeAlbum.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {activeAlbum.date} • {activeAlbum.location}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
            {activeAlbum.name}
          </h3>

          {/* Dual Photographer Attribution Bar */}
          <div className="pt-1 flex items-center gap-2 text-xs text-slate-500 flex-wrap">
            <span className="font-semibold text-slate-700">Official Coverage:</span>
            <span className="text-[#870069] font-medium bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200/60">
              {activeAlbum.photographer}
            </span>
          </div>
        </div>

        {/* Right: Batch Actions (Multi-Select, Download All, WhatsApp) */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Multi-Select Toggle Button */}
          <button
            onClick={onToggleMultiSelect}
            className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer border ${
              isMultiSelectMode
                ? "bg-[#870069] text-white border-[#870069] shadow-sm"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {isMultiSelectMode ? (
              <>
                <CheckSquare className="w-4 h-4" />
                <span>Multi-Select Active</span>
              </>
            ) : (
              <>
                <Square className="w-4 h-4 text-slate-400" />
                <span>Select Multiple</span>
              </>
            )}
          </button>

          {/* Share Active Album on WhatsApp */}
          <button
            onClick={() => shareAlbumOnWhatsApp(activeAlbum)}
            className="px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Share this album on WhatsApp"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share Album</span>
          </button>

          {/* Download Entire Album ZIP */}
          <button
            onClick={onDownloadAll}
            disabled={activeAlbum.photoCount === 0}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center gap-1.5 ${
              activeAlbum.photoCount > 0
                ? "bg-gradient-to-r from-[#FF693C] to-[#870069] hover:opacity-95 text-white cursor-pointer"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
            title={
              activeAlbum.photoCount > 0
                ? `Download all ${activeAlbum.photoCount} photos as ZIP`
                : "No photos to download"
            }
          >
            <Download className="w-4 h-4" />
            <span>Download All ZIP ({activeAlbum.photoCount})</span>
          </button>
        </div>
      </div>

      {/* Progress Bar (Sumadhur Style: Showing loaded photos vs total album count) */}
      {totalCount > 0 && (
        <div className="space-y-1.5 px-1">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing <strong>{Math.min(loadedCount, totalCount)}</strong> of{" "}
              <strong>{totalCount}</strong> HD photographs from this session
            </span>
            <span className="font-bold text-[#870069]">{percentLoaded}% loaded</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#870069] to-[#FF693C] transition-all duration-300 rounded-full"
              style={{ width: `${percentLoaded}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
