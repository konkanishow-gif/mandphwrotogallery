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
  layoutMode?: "grid" | "feed";
  fitMode?: "contain" | "cover";
}

function PhotoCardComponent({
  photo,
  album,
  index,
  isSelected,
  isMultiSelectMode,
  onToggleSelect,
  onOpenLightbox,
  layoutMode = "grid",
  fitMode = "cover",
}: PhotoCardProps) {
  const [loaded, setLoaded] = useState(false);
  const [retryIndex, setRetryIndex] = useState(0);

  // Progressive high-performance Google CDN endpoints
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

  const isFeed = layoutMode === "feed";

  return (
    <div
      onClick={handleCardClick}
      className={`group relative rounded-2xl overflow-hidden bg-slate-900 border cursor-pointer select-none transition-all duration-200 active:scale-[0.98] touch-manipulation ${
        isSelected
          ? "ring-3 ring-[#FF693C] shadow-lg border-[#FF693C]"
          : "border-slate-800/80 shadow-md hover:shadow-2xl hover:border-slate-600 sm:hover:-translate-y-1"
      } ${isFeed ? "w-full max-w-2xl mx-auto" : "w-full"}`}
    >
      {/* Photo Container: Portrait Aspect Ratio matching Reference */}
      <div
        className={`relative w-full bg-slate-950 overflow-hidden flex items-center justify-center ${
          isFeed
            ? "min-h-[280px] max-h-[75vh]"
            : "aspect-[3/4] sm:aspect-[4/5]"
        }`}
      >
        {!loaded && (
          <div className="absolute inset-0 bg-slate-900 animate-pulse" />
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
          className={`w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-103 ${
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
                ? "bg-[#FF693C] text-black"
                : "bg-black/60 backdrop-blur-md text-white border border-white/30 hover:bg-black/80"
            }`}
          >
            {isSelected ? (
              <Check className="w-4 h-4 stroke-[3]" />
            ) : (
              <div className="w-3.5 h-3.5 rounded-xs border border-white/60" />
            )}
          </div>
        </div>

        {/* Action Controls for Mobile Feed Mode */}
        {isFeed && (
          <div className="absolute bottom-2 inset-x-2 z-20 flex items-center justify-between p-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white">
            <span className="text-[11px] font-medium text-slate-300 truncate">
              {photo.name}
            </span>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleWhatsAppShare}
                className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                title="Share on WhatsApp"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleDownloadDirect}
                className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors"
                title="Download Photo"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox(index);
                }}
                className="p-1.5 rounded-lg bg-[#870069] text-white hover:bg-[#6A0050] transition-colors"
                title="Full Screen"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Desktop Hover Overlay with Action Buttons */}
        {!isFeed && (
          <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-col justify-end p-3 z-10 pointer-events-none">
            <div className="flex items-center justify-between gap-2 pointer-events-auto">
              {/* Filename indicator */}
              <span className="text-[10px] text-white/90 font-mono truncate max-w-[120px]">
                {photo.name}
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
                  className="w-7 h-7 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
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
        )}
      </div>
    </div>
  );
}

export default memo(PhotoCardComponent);
