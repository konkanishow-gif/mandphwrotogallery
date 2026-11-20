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
  FolderOpen,
} from "lucide-react";
import { AlbumItem, SubfolderItem } from "@/data/driveCatalog";
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
  activeSubfolder?: string;
  onSelectSubfolder?: (subfolderSlug: string) => void;
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
  activeSubfolder = "all",
  onSelectSubfolder,
}: EventSwitcherProps) {
  // Dynamically compute unique categories from root albums
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
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none flex-grow touch-pan-x">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap pl-1">
            Category:
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

      {/* Main Drive Folders: Swipeable snap carousel on phone, 4-col grid on desktop */}
      <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x sm:snap-none gap-2.5 sm:gap-3.5 pb-2 sm:pb-0 scrollbar-none touch-pan-x sm:grid-cols-2 lg:grid-cols-4">
        {albums.map((album) => {
          const isActive = album.id === activeAlbum.id;
          const hasPhotos = album.photoCount > 0;
          return (
            <button
              key={album.id}
              onClick={() => {
                onSelectAlbum(album);
                onSelectSubfolder?.("all");
              }}
              className={`min-w-[170px] sm:min-w-0 snap-start shrink-0 sm:shrink p-3 sm:p-4 rounded-xl sm:rounded-2xl text-left transition-all duration-150 active:scale-95 touch-manipulation cursor-pointer flex flex-col justify-between gap-2 sm:gap-3 border ${
                isActive
                  ? "bg-gradient-to-r from-[#870069] to-[#6A0050] text-white border-[#870069] shadow-md"
                  : "bg-white hover:bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="w-full">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span
                    className={`block text-[9px] sm:text-[10px] font-bold uppercase tracking-wider truncate ${
                      isActive ? "text-[#FF873C]" : "text-[#870069]"
                    }`}
                  >
                    {album.category}
                  </span>
                  <span
                    className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold shrink-0 ${
                      isActive
                        ? "bg-[#FF693C] text-white shadow-2xs"
                        : hasPhotos
                        ? "bg-purple-100 text-[#870069]"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {album.hasSubfolders
                      ? `${album.photoCount} HD`
                      : hasPhotos
                      ? `${album.photoCount} HD`
                      : "0 Photos"}
                  </span>
                </div>

                <span className="block font-bold text-xs sm:text-base leading-snug line-clamp-2">
                  {album.name}
                </span>
              </div>

              <div
                className={`text-[10px] sm:text-[11px] pt-1.5 sm:pt-2 border-t ${
                  isActive ? "border-white/20 text-purple-200" : "border-slate-100 text-slate-400"
                } flex items-center justify-between truncate`}
              >
                <span className="truncate">{album.date}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* If Active Album has Subfolders (like Guinness Marathon Day 01-13 or Symposium Sessions) */}
      {activeAlbum.hasSubfolders && activeAlbum.subfolders && activeAlbum.subfolders.length > 0 && (
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <FolderOpen className="w-4 h-4 text-[#870069]" />
              Explore Sessions / Days inside {activeAlbum.shortTitle}:
            </span>
            <span className="text-[11px] text-slate-400">
              {activeAlbum.subfolderCount} Subfolders in Google Drive
            </span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none touch-pan-x">
            <button
              onClick={() => onSelectSubfolder?.("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                activeSubfolder === "all"
                  ? "bg-[#870069] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Sessions ({activeAlbum.photoCount} Photos)
            </button>
            {activeAlbum.subfolders.map((sf) => {
              const isSelected = activeSubfolder === sf.slug;
              return (
                <button
                  key={sf.id}
                  onClick={() => onSelectSubfolder?.(sf.slug)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-[#870069] text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {sf.shortTitle} ({sf.photoCount} HD)
                </button>
              );
            })}
          </div>
        </div>
      )}

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
              {totalCount} High-Resolution Photographs
            </span>
          </div>
        </div>

        {/* Right: Batch Actions (Multi-Select, Download All, WhatsApp) */}
        <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3 w-full lg:w-auto">
          {/* Multi-Select Toggle Button */}
          <button
            onClick={onToggleMultiSelect}
            className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer border ${
              isMultiSelectMode
                ? "bg-[#870069] text-white border-[#870069] shadow-sm"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {isMultiSelectMode ? (
              <>
                <CheckSquare className="w-4 h-4 shrink-0" />
                <span className="truncate">Multi-Select</span>
              </>
            ) : (
              <>
                <Square className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="truncate">Select Multiple</span>
              </>
            )}
          </button>

          {/* Share Active Album on WhatsApp */}
          <button
            onClick={() => shareAlbumOnWhatsApp(activeAlbum)}
            className="px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            title="Share this album on WhatsApp"
          >
            <Share2 className="w-4 h-4 shrink-0" />
            <span className="truncate">Share Album</span>
          </button>

          {/* Download Entire Album ZIP */}
          <button
            onClick={onDownloadAll}
            disabled={totalCount === 0}
            className={`col-span-2 sm:col-span-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-1.5 ${
              totalCount > 0
                ? "bg-gradient-to-r from-[#FF693C] to-[#870069] hover:opacity-95 text-white cursor-pointer"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }`}
            title="Download full album original files as a ZIP archive"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span>Download All ({totalCount})</span>
          </button>
        </div>
      </div>
    </div>
  );
}
