"use client";

import React, { useState, useEffect } from "react";
import {
  PlusCircle,
  Zap,
  CheckCircle2,
  ArrowUp,
  Clock,
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

export default function PhotoGrid({
  photos,
  album,
  isMultiSelectMode,
  selectedPhotoIds,
  onToggleSelect,
  onOpenLightbox,
  onLoadedCountChange,
}: PhotoGridProps) {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  // Reset visible count when album or photos change
  useEffect(() => {
    setVisibleCount(Math.min(BATCH_SIZE, photos.length));
  }, [album.id, photos]);

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

  // When folder has 0 photos in Google Drive (real rendering, no dump)
  if (photos.length === 0) {
    return (
      <div className="py-16 px-6 text-center bg-white rounded-3xl border border-slate-200/90 shadow-2xs max-w-2xl mx-auto space-y-4">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-purple-50 text-[#870069] flex items-center justify-center shadow-xs">
          <Clock className="w-8 h-8" />
        </div>
        <div className="space-y-1.5">
          <span className="px-3 py-1 rounded-full bg-purple-50 text-[#870069] text-xs font-bold uppercase tracking-wider">
            Official Session Archive
          </span>
          <h3 className="text-lg font-bold text-slate-900">
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
    <div className="space-y-8">
      {/* Responsive Spacious Photo Grid with 100% Real Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
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
            />
          );
        })}
      </div>

      {/* Batch Loading Controls */}
      {hasMore ? (
        <div className="pt-4 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleLoadMore}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#870069] to-[#FF693C] hover:opacity-95 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-md shadow-purple-900/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>
              Load More Photos ({Math.min(BATCH_SIZE, remainingCount)} remaining)
            </span>
          </button>

          <button
            onClick={handleLoadAll}
            className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-semibold text-xs sm:text-sm rounded-2xl border border-slate-300 shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap className="w-4 h-4 text-[#FF693C]" />
            <span>Load All Remaining ({remainingCount})</span>
          </button>
        </div>
      ) : (
        /* All Photos Loaded Notice */
        <div className="text-center py-8 px-6 bg-white rounded-3xl border border-slate-200/90 shadow-2xs max-w-md mx-auto">
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
            className="mt-3.5 text-xs text-[#870069] hover:text-[#FF693C] font-semibold flex items-center justify-center gap-1 mx-auto hover:underline cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top of Album</span>
          </button>
        </div>
      )}
    </div>
  );
}
