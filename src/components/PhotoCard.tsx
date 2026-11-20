"use client";

import React, { useState, useEffect, memo } from "react";
import {
  Download,
  Share2,
  Maximize2,
  Check,
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
  layoutMode?: "compact" | "grid" | "feed";
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
  fitMode = "contain",
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

  const isFeed = layoutMode === "feed";
  const isCompact = layoutMode === "compact";

  return (
    <div
      onClick={handleCardClick}
      className={`group relative rounded-lg sm:rounded-xl overflow-hidden bg-slate-900 border cursor-pointer select-none transition-all duration-150 active:scale-[0.98] touch-manipulation ${
        isSelected
          ? "ring-2 ring-[#FF693C] shadow-lg border-[#FF693C]"
          : "border-slate-800/80 shadow-xs hover:shadow-lg hover:border-slate-600 sm:hover:-translate-y-0.5"
      } ${isFeed ? "w-full max-w-xl mx-auto" : "w-full"}`}
    >
      {/* Photo Container: Perfectly Proportioned 3:2 matching DSLR photos */}
      <div
        className={`relative w-full bg-slate-950 overflow-hidden flex items-center justify-center ${
          isFeed
            ? "min-h-[200px] max-h-[65vh]"
            : "aspect-[3/2]"
        }`}
      >
        {!loaded && (
          <div className="absolute inset-0 bg-slate-900/80 animate-pulse flex items-center justify-center">
            <div className="w-5 h-5 rounded-full border-2 border-slate-700 border-t-amber-400 animate-spin opacity-50" />
          </div>
        )}

        <img
          src={currentSrc}
          srcSet={`https://lh3.googleusercontent.com/d/${photo.id}=s400 400w, https://lh3.googleusercontent.com/d/${photo.id}=w800 800w, https://lh3.googleusercontent.com/d/${photo.id}=w1200 1200w`}
          sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1200px) 25vw, 16vw"
          alt={photo.name}
          loading={index < 8 ? "eager" : "lazy"}
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
          className={`transition-all duration-300 group-hover:scale-105 ${
            isFeed
              ? "w-full h-auto max-h-[65vh] object-contain"
              : fitMode === "cover"
              ? "w-full h-full object-cover object-center"
              : "w-full h-full object-contain object-center"
          } ${loaded ? "opacity-100" : "opacity-0"}`}
        />

        {/* Selection Checkbox */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            onToggleSelect(photo.id);
          }}
          className={`absolute top-1 left-1 sm:top-2 sm:left-2 z-20 transition-all duration-200 touch-manipulation ${
            isMultiSelectMode || isSelected
              ? "opacity-100 scale-100"
              : "opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
          }`}
        >
          <div
            className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center transition-colors shadow-md ${
              isSelected
                ? "bg-[#FF693C] text-black"
                : "bg-black/70 text-white border border-white/30 hover:bg-black/90"
            }`}
          >
            {isSelected ? (
              <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
            ) : (
              <div className="w-2.5 h-2.5 rounded-xs border border-white/60" />
            )}
          </div>
        </div>

        {/* Action Controls for Mobile Feed Mode */}
        {isFeed && (
          <div className="absolute bottom-1.5 inset-x-1.5 z-20 flex items-center justify-between p-1.5 rounded-lg bg-slate-950/90 border border-white/10 text-white">
            <span className="text-[10px] font-medium text-slate-300 truncate">
              {photo.name}
            </span>
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={handleWhatsAppShare}
                className="p-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                title="Share on WhatsApp"
              >
                <Share2 className="w-3 h-3" />
              </button>
              <button
                onClick={handleDownloadDirect}
                className="p-1 rounded bg-white/20 hover:bg-white/30 text-white transition-colors"
                title="Download Photo"
              >
                <Download className="w-3 h-3" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox(index);
                }}
                className="p-1 rounded bg-[#870069] text-white hover:bg-[#6A0050] transition-colors"
                title="Full Screen"
              >
                <Maximize2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* Desktop Hover Overlay with Action Buttons */}
        {!isFeed && !isCompact && (
          <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-col justify-end p-2 z-10 pointer-events-none">
            <div className="flex items-center justify-between gap-1 pointer-events-auto">
              <span className="text-[10px] text-white/90 font-mono truncate max-w-[100px]">
                {photo.name}
              </span>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleWhatsAppShare}
                  aria-label="Share on WhatsApp"
                  className="w-6 h-6 rounded bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                  title="Share photo via WhatsApp"
                >
                  <Share2 className="w-3 h-3" />
                </button>

                <button
                  onClick={handleDownloadDirect}
                  aria-label="Download original photo"
                  className="w-6 h-6 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                  title="Download original resolution photo"
                >
                  <Download className="w-3 h-3" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenLightbox(index);
                  }}
                  aria-label="View full screen"
                  className="w-6 h-6 rounded bg-white/20 hover:bg-white/30 text-white backdrop-blur-md flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                  title="Open full resolution lightbox"
                >
                  <Maximize2 className="w-3 h-3" />
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
