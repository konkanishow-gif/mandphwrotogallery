"use client";

import React, { useState, useEffect, memo } from "react";
import {
  Download,
  Share2,
  Maximize2,
  Check,
  Camera,
} from "lucide-react";
import { PhotoItem, AlbumItem } from "@/data/driveCatalog";
import { sharePhotoOnWhatsApp } from "@/utils/whatsapp";

interface PhotoCardProps {
  photo: PhotoItem;
  album: AlbumItem;
  index: number;
  isSelected: boolean;
  isMultiSelectMode: boolean;
  onToggleSelect: (photoId: string) => void;
  onOpenLightbox: (index: number) => void;
}

function PhotoCardComponent({
  photo,
  album,
  index,
  isSelected,
  isMultiSelectMode,
  onToggleSelect,
  onOpenLightbox,
}: PhotoCardProps) {
  const [loaded, setLoaded] = useState(false);
  const [retryIndex, setRetryIndex] = useState(0);

  // Progressive high-performance Google CDN endpoints (Fastest CDN thumb first to prevent flashing)
  const imageSources = [
    photo.thumbUrl || `https://lh3.googleusercontent.com/d/${photo.id}=s400`,
    `https://lh3.googleusercontent.com/d/${photo.id}=w800`,
    `https://drive.google.com/thumbnail?id=${photo.id}&sz=w800`,
    `/api/drive/image?id=${photo.id}&sz=800`,
  ];

  const currentSrc = imageSources[retryIndex] || photo.thumbUrl;

  useEffect(() => {
    setRetryIndex(0);
  }, [photo.id]);

  const handleDownloadDirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = photo.downloadUrl;
    link.download = photo.name;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleWhatsAppShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    sharePhotoOnWhatsApp(photo, album);
  };

  const handleCardClick = () => {
    if (isMultiSelectMode) {
      onToggleSelect(photo.id);
    } else {
      onOpenLightbox(index);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={`group relative rounded-2xl overflow-hidden bg-slate-900 border cursor-pointer select-none transition-transform duration-150 active:scale-95 touch-manipulation ${
        isSelected
          ? "ring-3 ring-[#870069] shadow-lg border-[#870069]"
          : "border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#870069]/40 sm:hover:-translate-y-1"
      }`}
    >
      {/* 3:2 Photographic Aspect Ratio Container */}
      <div className="relative w-full aspect-[3/2] bg-slate-900 overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 bg-slate-800 animate-pulse" />
        )}

        <img
          src={currentSrc}
          alt={photo.name}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => {
            if (retryIndex < imageSources.length - 1) {
              setRetryIndex((prev) => prev + 1);
            } else {
              setLoaded(true);
            }
          }}
          className={`w-full h-full object-cover transition-opacity duration-200 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Selection Checkbox */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            onToggleSelect(photo.id);
          }}
          className={`absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-20 transition-all duration-200 touch-manipulation ${
            isMultiSelectMode || isSelected
              ? "opacity-100 scale-100"
              : "opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
          }`}
        >
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors shadow-md ${
              isSelected
                ? "bg-[#870069] text-white"
                : "bg-white/90 text-slate-700 hover:bg-white"
            }`}
          >
            {isSelected ? (
              <Check className="w-4 h-4 stroke-[3]" />
            ) : (
              <div className="w-4 h-4 rounded-sm border-2 border-slate-400" />
            )}
          </div>
        </div>

        {/* Exact Google Drive filename tag at top right */}
        <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-20 pointer-events-none max-w-[65%] sm:max-w-none">
          <span className="block px-1.5 sm:px-2 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md text-[9px] sm:text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider border border-white/20 shadow-xs truncate">
            {photo.name}
          </span>
        </div>

        {/* Hover / Active Overlay with Action Buttons */}
        <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-col justify-end p-3 z-10 pointer-events-none">
          <div className="flex items-center justify-between gap-2 pointer-events-auto">
            {/* Resolution indicator */}
            <span className="text-[10px] text-white/90 font-medium truncate flex items-center gap-1">
              <Camera className="w-3 h-3 text-[#FF693C]" />
              <span>Drive Master HD</span>
            </span>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleWhatsAppShare}
                aria-label="Share on WhatsApp"
                className="w-7 h-7 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                title="Share photo via WhatsApp"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleDownloadDirect}
                aria-label="Download original photo"
                className="w-7 h-7 rounded-lg bg-white/90 hover:bg-white text-slate-900 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                title="Download original resolution photo"
              >
                <Download className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox(index);
                }}
                aria-label="View full screen"
                className="w-7 h-7 rounded-lg bg-white/20 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                title="Open full resolution lightbox"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PhotoCardComponent);
