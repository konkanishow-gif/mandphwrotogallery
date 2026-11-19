"use client";

import React from "react";
import {
  Download,
  Share2,
  X,
  CheckSquare,
  Square,
  Package,
} from "lucide-react";
import { PhotoItem, AlbumItem } from "@/data/driveCatalog";
import { shareSelectedPhotosOnWhatsApp } from "@/utils/whatsapp";

interface SelectionBarProps {
  selectedPhotos: PhotoItem[];
  album: AlbumItem;
  totalAlbumPhotos: number;
  onSelectAll: () => void;
  onDeselectAll: () => void;
  onDownloadZip: () => void;
  onClear: () => void;
}

export default function SelectionBar({
  selectedPhotos,
  album,
  totalAlbumPhotos,
  onSelectAll,
  onDeselectAll,
  onDownloadZip,
  onClear,
}: SelectionBarProps) {
  if (selectedPhotos.length === 0) return null;

  const allSelected = selectedPhotos.length === totalAlbumPhotos;

  return (
    <div className="fixed bottom-3 inset-x-2 sm:bottom-6 sm:inset-x-0 z-40 max-w-xl mx-auto px-1 sm:px-4 pointer-events-none animate-in slide-in-from-bottom-6 duration-300">
      <div className="pointer-events-auto bg-slate-900/95 backdrop-blur-xl text-white rounded-2xl shadow-2xl p-2.5 sm:p-4 border border-slate-700/80 flex items-center justify-between gap-2 sm:gap-3">
        {/* Left: Counter & Select All toggle */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#870069] flex items-center justify-center font-bold text-xs text-white shadow-xs shrink-0">
            {selectedPhotos.length}
          </div>
          <div className="truncate">
            <span className="text-xs sm:text-sm font-bold block text-white truncate">
              {selectedPhotos.length} Selected
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-400 block truncate">
              {album.shortTitle}
            </span>
          </div>

          <button
            onClick={allSelected ? onDeselectAll : onSelectAll}
            className="hidden md:flex items-center gap-1 text-[11px] font-semibold text-amber-300 hover:text-amber-200 ml-2 hover:underline cursor-pointer shrink-0"
          >
            {allSelected ? "Deselect All" : "Select All"}
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* WhatsApp Share Selected */}
          <button
            onClick={() => shareSelectedPhotosOnWhatsApp(selectedPhotos, album)}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer shadow-xs"
            title="Share selected photos via WhatsApp"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>

          {/* Download Selected as ZIP */}
          <button
            onClick={onDownloadZip}
            className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-[#870069] to-[#FF693C] hover:opacity-95 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
            title="Download selected photos as ZIP"
          >
            <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Download ZIP</span>
          </button>

          {/* Clear button */}
          <button
            onClick={onClear}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Clear Selection"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
