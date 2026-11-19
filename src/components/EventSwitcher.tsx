"use client";

import React, { useMemo } from "react";
import {
  Download,
  Share2,
  CheckSquare,
  Square,
  Sparkles,
  Camera,
  RefreshCw,
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
  onRefreshLive?: () => void;
  isRefreshing?: boolean;
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
  onRefreshLive,
  isRefreshing = false,
}: EventSwitcherProps) {
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

  return (
    <div className="space-y-6">
      {/* Category Filter Chips & Live Sync Button */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none flex-grow">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap pl-1">
            Filter:
          </span>
          {dynamicCategories.map((cat) => {
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

        {onRefreshLive && (
          <button
            onClick={onRefreshLive}
            disabled={isRefreshing}
            className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
            title="Scan Google Drive for newly added folders or photos"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 ${
                isRefreshing ? "animate-spin text-[#870069]" : "text-[#FF693C]"
              }`}
            />
            <span>{isRefreshing ? "Checking Drive..." : "Sync Drive Live"}</span>
          </button>
        )}
      </div>

      {/* Featured Album Switcher Grid */}
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
                  {hasPhotos ? `${album.photoCount} HD` : "Live Folder"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Session Info Bar */}
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

          <div className="pt-1 flex items-center gap-2 text-xs text-slate-500 flex-wrap">
            <span className="font-semibold text-slate-700">Official Coverage:</span>
            <span className="text-[#870069] font-medium bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200/60">
              {activeAlbum.photographer}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 font-mono text-[11px]">
              {activeAlbum.photoCount} High-Resolution Photographs
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
            title="Download full album original files as a ZIP archive"
          >
            <Download className="w-4 h-4" />
            <span>Download All ({activeAlbum.photoCount})</span>
          </button>
        </div>
      </div>
    </div>
  );
}
