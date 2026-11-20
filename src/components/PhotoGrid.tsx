"use client";

import React, { useState, useEffect, memo } from "react";
import {
  PlusCircle,
  Zap,
  CheckCircle2,
  ArrowUp,
  Clock,
  Grid,
  Maximize2,
  Minimize2,
  Square,
  LayoutGrid,
} from "lucide-react";
import { PhotoItem, AlbumItem } from "@/data/driveCatalog";
import PhotoCard from "./PhotoCard";

interface PhotoGridProps {
  photos: PhotoItem[];
  album: AlbumItem;
  isMultiSelectMode: boolean;
  selectedPhotoIds: string[];
  onToggleSelect: (photoId: string) => void;
  onOpenLightbox: (index: number) => void;
  onLoadedCountChange?: (count: number) => void;
}

const BATCH_SIZE = 48;

function PhotoGridComponent({
  photos,
  album,
  isMultiSelectMode,
  selectedPhotoIds,
  onToggleSelect,
  onOpenLightbox,
  onLoadedCountChange,
}: PhotoGridProps) {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  // Default to comfortable 2-column on mobile, responsive multi-column on desktop
  const [layoutMode, setLayoutMode] = useState<"compact" | "grid" | "feed">("grid");
  const [fitMode, setFitMode] = useState<"contain" | "cover">("cover");

  // Reset visible count only when album ID changes
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [album.id]);

  useEffect(() => {
    onLoadedCountChange?.(Math.min(visibleCount, photos.length));
  }, [visibleCount, photos.length, onLoadedCountChange]);

  const displayedPhotos = photos.slice(0, visibleCount);
  const hasMore = visibleCount < photos.length;
  const remainingCount = photos.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, photos.length));
  };

  const handleLoadAll = () => {
    setVisibleCount(photos.length);
  };

  if (photos.length === 0) {
    return (
      <div className="py-12 sm:py-16 px-4 sm:px-6 text-center bg-slate-900 rounded-2xl border border-slate-800 shadow-2xs max-w-2xl mx-auto space-y-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-purple-950/80 text-amber-300 flex items-center justify-center shadow-xs border border-purple-800/40">
          <Clock className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <div className="space-y-1.5">
          <span className="px-3 py-1 rounded-full bg-purple-950/80 text-amber-300 text-xs font-bold uppercase tracking-wider border border-purple-800/40">
            Official Session Archive
          </span>
          <h3 className="text-base sm:text-lg font-bold text-white">
            Awaiting Photographs from this Session
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            Photographs for <code>{album.name}</code> are currently being processed
            by the media team and will appear here in master resolution.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-5">
      {/* Mobile-Friendly View Controls Bar */}
      <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-slate-800 flex-wrap">
        <span className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
          {displayedPhotos.length} of {photos.length} Photos
        </span>

        <div className="flex items-center gap-1.5">
          {/* Fit Mode Toggle: Auto-Fit (Full photo visible) vs Fill Frame (Cropped) */}
          <button
            onClick={() => setFitMode(fitMode === "contain" ? "cover" : "contain")}
            className="px-2 py-1 rounded-lg text-[10px] sm:text-xs font-semibold bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 shadow-2xs flex items-center gap-1 transition-colors"
            title={fitMode === "contain" ? "Auto-Fit: Entire Photo Visible" : "Fill: Cropped to fill"}
          >
            {fitMode === "contain" ? (
              <>
                <Minimize2 className="w-3 h-3 text-[#FF693C]" />
                <span className="hidden xs:inline">Auto-Fit</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3 h-3 text-amber-300" />
                <span className="hidden xs:inline">Fill</span>
              </>
            )}
          </button>

          {/* Mobile Layout Mode Toggle: Compact (3-col) vs Grid (2-col) vs Feed (1-col) */}
          <div className="flex items-center gap-0.5 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
            <button
              onClick={() => setLayoutMode("compact")}
              className={`p-1 sm:px-2 sm:py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all ${
                layoutMode === "compact"
                  ? "bg-slate-800 text-amber-300 shadow-2xs"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Compact 3 Photos per row (Smaller size)"
            >
              <Grid className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Small</span>
            </button>

            <button
              onClick={() => setLayoutMode("grid")}
              className={`p-1 sm:px-2 sm:py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all ${
                layoutMode === "grid"
                  ? "bg-slate-800 text-[#FF693C] shadow-2xs"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Medium 2 Photos per row"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Medium</span>
            </button>

            <button
              onClick={() => setLayoutMode("feed")}
              className={`p-1 sm:px-2 sm:py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all ${
                layoutMode === "feed"
                  ? "bg-slate-800 text-white shadow-2xs"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Full width 1 photo per row"
            >
              <Square className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Feed</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Photo Container: 2-col on mobile, 3 on large mobile, 4 on tablet, 5-6 on desktop */}
      <div
        className={
          layoutMode === "feed"
            ? "flex flex-col gap-3 max-w-xl mx-auto w-full"
            : layoutMode === "compact"
            ? "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-1.5 sm:gap-2.5"
            : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4"
        }
      >
        {displayedPhotos.map((photo, index) => {
          const isSelected = selectedPhotoIds.includes(photo.id);
          return (
            <PhotoCard
              key={photo.id}
              photo={photo}
              album={album}
              index={index}
              isSelected={isSelected}
              isMultiSelectMode={isMultiSelectMode}
              onToggleSelect={onToggleSelect}
              onOpenLightbox={onOpenLightbox}
              layoutMode={layoutMode}
              fitMode={fitMode}
            />
          );
        })}
      </div>

      {/* Batch Loading Controls */}
      {hasMore ? (
        <div className="pt-2 sm:pt-4 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={handleLoadMore}
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 hover:border-[#870069]/40"
          >
            <PlusCircle className="w-4 h-4 text-[#870069]" />
            <span>
              Load More ({Math.min(BATCH_SIZE, remainingCount)} of {remainingCount} remaining)
            </span>
          </button>

          <button
            onClick={handleLoadAll}
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-[#870069] to-[#FF693C] hover:opacity-95 text-white shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 text-amber-300" />
            <span>Load All Remaining ({remainingCount})</span>
          </button>
        </div>
      ) : (
        photos.length > BATCH_SIZE && (
          <div className="pt-4 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              All {photos.length} master photographs loaded
            </span>
          </div>
        )
      )}
    </div>
  );
}

export default memo(PhotoGridComponent);
