"use client";

import React, { useState, useEffect } from "react";
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

export default function PhotoCard({
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

  // Progressive Google Drive URLs if one endpoint experiences network throttling
  const imageSources = [
    `https://drive.google.com/thumbnail?id=${photo.id}&sz=w800`,
    photo.thumbUrl,
    `/api/drive/image?id=${photo.id}&sz=800`,
    photo.previewUrl,
  ];

  const currentSrc = imageSources[retryIndex] || photo.thumbUrl;

  useEffect(() => {
    setRetryIndex(0);
    setLoaded(false);
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
      className={`group relative rounded-2xl overflow-hidden bg-white border cursor-pointer select-none transition-all duration-200 ${
        isSelected
          ? "ring-3 ring-[#870069] shadow-lg border-[#870069] -translate-y-1"
          : "border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#870069]/40 hover:-translate-y-1"
      }`}
    >
      {/* 3:2 Photographic Aspect Ratio Container */}
      <div className="relative w-full aspect-[3/2] bg-slate-900 overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 img-placeholder-shimmer" />
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
          className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Selection Checkbox */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            onToggleSelect(photo.id);
          }}
          className={`absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-20 transition-all duration-200 ${
            isMultiSelectMode || isSelected
              ? "opacity-100 scale-100"
              : "opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
          }`}
        >
          <div
            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center transition-colors shadow-md ${
              isSelected
                ? "bg-[#870069] text-white"
                : "bg-white/90 text-slate-700 hover:bg-white"
            }`}
          >
            {isSelected ? (
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
            ) : (
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-sm border-2 border-slate-400" />
            )}
          </div>
        </div>

        {/* Exact Google Drive filename tag at top right */}
        <div className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 z-20 pointer-events-none max-w-[65%] sm:max-w-none">
          <span className="block px-1.5 sm:px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[9px] sm:text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider border border-white/20 shadow-xs truncate">
            {photo.name}
          </span>
        </div>

        {/* Hover Overlay with Action Buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 z-10">
          <div className="flex items-center justify-between gap-2">
            {/* Resolution indicator */}
            <span className="text-[10px] text-white/90 font-medium truncate flex items-center gap-1">
              <Camera className="w-3 h-3 text-[#FF693C]" />
              <span>Drive Master HD</span>
            </span>

            {/* Quick Action Icons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleWhatsAppShare}
                className="p-1.5 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
                title="Share this photograph on WhatsApp"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleDownloadDirect}
                className="p-1.5 rounded-lg bg-[#870069]/90 hover:bg-[#870069] text-white transition-colors cursor-pointer"
                title={`Download original ${photo.name}`}
              >
                <Download className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox(index);
                }}
                className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                title="Open full-screen preview"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer: Exact Google Drive Filename & Album Attribution */}
      <div className="p-2 sm:p-3 bg-white flex items-center justify-between text-xs border-t border-slate-100">
        <span className="font-mono text-[10px] sm:text-[11px] font-bold text-slate-800 truncate" title={photo.name}>
          {photo.name}
        </span>
        <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium shrink-0 ml-1.5 hidden xs:inline">
          {album.shortTitle}
        </span>
      </div>
    </div>
  );
}
