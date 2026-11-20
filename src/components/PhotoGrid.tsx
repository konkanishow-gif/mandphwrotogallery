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
  const [layoutMode, setLayoutMode] = useState<"grid" | "feed">("grid");
  const [fitMode, setFitMode] = useState<"contain" | "cover">("contain");

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

  const scrollToTop = () => {
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  if (photos.length === 0) {
    return (
      <div className="py-12 sm:py-16 px-4 sm:px-6 text-center bg-white rounded-3xl border border-slate-200/90 shadow-2xs max-w-2xl mx-auto space-y-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-3xl bg-purple-50 text-[#870069] flex items-center justify-center shadow-xs">
          <Clock className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <div className="space-y-1.5">
          <span className="px-3 py-1 rounded-full bg-purple-50 text-[#870069] text-xs font-bold uppercase tracking-wider">
            Official Session Archive
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Awaiting Photographs from this Session
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            Photographs for <code>{album.name}</code> are currently being processed
            by the media team and will appear here in master resolution.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Mobile-Friendly View Controls Bar */}
      <div className="flex items-center justify-between gap-2 pb-1 border-b border-slate-200/80">
        <span className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
          {displayedPhotos.length} of {photos.length} Photos
        </span>

        <div className="flex items-center gap-1.5">
          {/* Fit Mode Toggle: Auto-Fit (Contain) vs Fill Frame (Cover) */}
          <button
            onClick={() => setFitMode(fitMode === "contain" ? "cover" : "contain")}
            className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 shadow-2xs flex items-center gap-1 transition-colors"
            title={fitMode === "contain" ? "Switch to Fill Box" : "Switch to Auto-Fit Full Photo"}
          >
            {fitMode === "contain" ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-[#FF693C]" />
                <span className="hidden xs:inline">Auto-Fit: ON</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-[#870069]" />
                <span className="hidden xs:inline">Fill Box: ON</span>
              </>
            )}
          </button>

          {/* Mobile Layout Mode Toggle: Grid (2-col) vs Full Feed (1-col) */}
          <div className="flex items-center gap-0.5 bg-slate-100 p-0.5 rounded-xl border border-slate-200">
            <button
              onClick={() => setLayoutMode("grid")}
              className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
                layoutMode === "grid"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
              title="Grid View (2 photos per row on phone)"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#870069]" />
              <span className="hidden sm:inline">Grid</span>
            </button>

            <button
              onClick={() => setLayoutMode("feed")}
              className={`p-1.5 sm:px-2.5 sm:py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
                layoutMode === "feed"
                  ? "bg-white text-slate-900 shadow-2xs"
                  : "text-slate-500 hover:text-slate-800"
              }`}
              title="Full Width Auto-Fit Feed (1 photo per row on phone)"
            >
              <Square className="w-3.5 h-3.5 text-[#FF693C]" />
              <span className="hidden sm:inline">Feed</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Photo Container: 1-col in Feed mode, 2-col to 4-col in Grid mode */}
      <div
        className={
          layoutMode === "feed"
            ? "flex flex-col gap-4 max-w-2xl mx-auto w-full"
            : "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-5"
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
        <div className="pt-2 sm:pt-4 text-center flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
          <button
            onClick={handleLoadMore}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-gradient-to-r from-[#870069] to-[#FF693C] hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md shadow-purple-900/20 hover:shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
          >
            <PlusCircle className="w-4 h-4" />
            <span>
              Load More Photos ({Math.min(BATCH_SIZE, remainingCount)} remaining)
            </span>
          </button>

          <button
            onClick={handleLoadAll}
            className="w-full sm:w-auto px-5 sm:px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-semibold text-xs sm:text-sm rounded-2xl border border-slate-300 shadow-2xs transition-transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
          >
            <Zap className="w-4 h-4 text-[#FF693C]" />
            <span>Load All Remaining ({remainingCount})</span>
          </button>
        </div>
      ) : (
        /* All Photos Loaded Notice */
        <div className="text-center py-6 sm:py-8 px-4 sm:px-6 bg-white rounded-3xl border border-slate-200/90 shadow-2xs max-w-md mx-auto">
          <div className="w-10 h-10 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h4 className="text-slate-900 font-bold text-sm">
            All {photos.length} Real Photographs Loaded
          </h4>
          <p className="text-xs text-slate-500 mt-1">
            You have explored all genuine photographs from this Google Drive album.
            Click any photo to preview in full resolution.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-3.5 text-xs text-[#870069] hover:text-[#FF693C] font-semibold flex items-center justify-center gap-1 mx-auto hover:underline cursor-pointer touch-manipulation"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top of Album</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default memo(PhotoGridComponent);
