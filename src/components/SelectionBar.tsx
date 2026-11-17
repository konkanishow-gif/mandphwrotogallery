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
    <div className="fixed bottom-6 inset-x-0 z-40 max-w-2xl mx-auto px-4 pointer-events-none animate-in slide-in-from-bottom-6 duration-300">
      <div className="pointer-events-auto bg-slate-900/95 backdrop-blur-xl text-white rounded-2xl shadow-2xl p-3 sm:p-4 border border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Counter & Select All toggle */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#870069] flex items-center justify-center font-bold text-xs text-white shadow-xs">
            {selectedPhotos.length}
          </div>
          <div>
            <span className="text-xs sm:text-sm font-bold block text-white">
              {selectedPhotos.length} {selectedPhotos.length === 1 ? "Photo" : "Photos"} Selected
            </span>
            <span className="text-[10px] text-slate-400 block">
              from {album.shortTitle}
            </span>
          </div>

          <button
            onClick={allSelected ? onDeselectAll : onSelectAll}
            className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-amber-300 hover:text-amber-200 ml-2 hover:underline cursor-pointer"
          >
            {allSelected ? "Deselect All" : "Select All"}
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* WhatsApp Share Selected */}
          <button
            onClick={() => shareSelectedPhotosOnWhatsApp(selectedPhotos, album)}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            title="Share selected photos via WhatsApp"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Share</span>
          </button>

          {/* Download Selected as ZIP */}
          <button
            onClick={onDownloadZip}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#870069] to-[#FF693C] hover:opacity-95 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
            title="Download selected photos as ZIP"
          >
            <Package className="w-4 h-4" />
            <span>Download ZIP</span>
          </button>

          {/* Clear button */}
          <button
            onClick={onClear}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
            title="Clear Selection"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
