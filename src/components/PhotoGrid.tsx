"use client";

import React, { useState, useEffect, useRef, memo } from "react";
import {
  PlusCircle,
  Zap,
  CheckCircle2,
  Minimize2,
  LayoutGrid,
  Clock,
  Sparkles,
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

const INITIAL_BATCH = 100;
const INCREMENT_BATCH = 80;

function PhotoGridComponent({
  photos,
  album,
  isMultiSelectMode,
  selectedPhotoIds,
  onToggleSelect,
  onOpenLightbox,
  onLoadedCountChange,
}: PhotoGridProps) {
  // Generous initial batch so smaller albums load completely without any pagination
  const [visibleCount, setVisibleCount] = useState(() => Math.min(INITIAL_BATCH, photos.length));
  const [layoutMode, setLayoutMode] = useState<"compact" | "grid" | "feed">("grid");
  const [fitMode, setFitMode] = useState<"contain" | "cover">("contain");
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Reset visible count when album changes
  useEffect(() => {
    setVisibleCount(Math.min(INITIAL_BATCH, photos.length));
  }, [album.id, photos.length]);

  useEffect(() => {
    onLoadedCountChange?.(Math.min(visibleCount, photos.length));
  }, [visibleCount, photos.length, onLoadedCountChange]);

  const displayedPhotos = photos.slice(0, visibleCount);
  const hasMore = visibleCount < photos.length;
  const remainingCount = photos.length - visibleCount;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + INCREMENT_BATCH, photos.length));
  };

  const handleLoadAll = () => {
    setVisibleCount(photos.length);
  };

  // Seamless Infinite Scrolling: Automatically loads next batch 800px before user reaches bottom
  useEffect(() => {
    if (!hasMore) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + INCREMENT_BATCH, photos.length));
        }
      },
      { rootMargin: "800px" }
    );
    const target = sentinelRef.current;
    if (target) observer.observe(target);
    return () => {
      if (target) observer.unobserve(target);
    };
  }, [hasMore, photos.length]);

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
        <div className="flex items-center gap-2">
          <span className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
            {hasMore ? (
              <span>Showing {displayedPhotos.length} of {photos.length} Photos</span>
            ) : (
              <span className="text-emerald-400">All {photos.length} Photos Loaded</span>
            )}
          </span>
          {hasMore && (
            <button
              onClick={handleLoadAll}
              className="text-[10px] font-bold text-amber-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2 py-0.5 rounded border border-slate-700 cursor-pointer transition-colors"
              title="Instantly load all remaining photos without pagination"
            >
              Load All ({photos.length})
            </button>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {/* Fit Mode Toggle: Auto-Fit (Full uncropped photo) vs Fill Frame */}
          <button
            onClick={() => setFitMode(fitMode === "contain" ? "cover" : "contain")}
            className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold border flex items-center gap-1 transition-all cursor-pointer ${
              fitMode === "contain"
                ? "bg-slate-800 text-[#FF693C] border-[#FF693C]/40 shadow-xs"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
            }`}
            title={fitMode === "contain" ? "Auto-Fit: Full Photo Visible (Uncropped)" : "Fill Frame: Cropped to fill"}
          >
            <Minimize2 className="w-3 h-3 text-[#FF693C]" />
            <span>Auto-Fit</span>
          </button>

          {/* Mobile Layout Mode Toggle */}
          <div className="flex items-center gap-0.5 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
            <button
              onClick={() => setLayoutMode("compact")}
              className={`p-1 sm:px-2 sm:py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                layoutMode === "compact"
                  ? "bg-slate-800 text-amber-300 shadow-2xs"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Compact 3 Photos per row (Smaller size)"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Small</span>
            </button>
            <button
              onClick={() => setLayoutMode("grid")}
              className={`p-1 sm:px-2 sm:py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                layoutMode === "grid"
                  ? "bg-slate-800 text-[#FF693C] shadow-2xs"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Standard 2 Photos per row on Phone"
            >
              <span className="text-[10px] font-extrabold px-0.5">2x</span>
              <span className="hidden xs:inline">Standard</span>
            </button>
            <button
              onClick={() => setLayoutMode("feed")}
              className={`p-1 sm:px-2 sm:py-1 rounded-md text-[11px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                layoutMode === "feed"
                  ? "bg-slate-800 text-amber-300 shadow-2xs"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Large 1 Photo per row (Detailed Feed view)"
            >
              <span className="text-[10px] font-extrabold px-0.5">1x</span>
              <span className="hidden xs:inline">Large</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Responsive Grid Layout */}
      <div
        className={`${
          layoutMode === "compact"
            ? "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-1.5 sm:gap-2.5"
            : layoutMode === "feed"
            ? "flex flex-col gap-3 sm:gap-5"
            : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-3"
        }`}
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

      {/* Seamless Infinite Scroll Sentinel & Batch Controls */}
      {hasMore ? (
        <div ref={sentinelRef} className="pt-4 pb-8 flex flex-col items-center justify-center gap-2.5 text-center">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <div className="w-4 h-4 rounded-full border-2 border-slate-700 border-t-[#FF693C] animate-spin" />
            <span>Auto-loading more photos ({displayedPhotos.length} of {photos.length})...</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <PlusCircle className="w-3.5 h-3.5 text-[#870069]" />
              <span>Load More ({Math.min(INCREMENT_BATCH, remainingCount)})</span>
            </button>

            <button
              onClick={handleLoadAll}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#870069] to-[#FF693C] hover:opacity-95 text-white shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Load All {photos.length} Photos</span>
            </button>
          </div>
        </div>
      ) : (
        photos.length > 0 && (
          <div className="pt-4 pb-6 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-800/40">
              <CheckCircle2 className="w-4 h-4" />
              All {photos.length} Master Photographs Loaded from Google Drive
            </span>
          </div>
        )
      )}
    </div>
  );
}

export default memo(PhotoGridComponent);
