"use client";

import React, { useState } from "react";
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
    photo.thumbUrl,
    `https://drive.google.com/thumbnail?id=${photo.id}&sz=w1000`,
    `https://drive.google.com/uc?export=view&id=${photo.id}`,
    photo.previewUrl,
  ];

  const currentSrc = imageSources[retryIndex] || photo.thumbUrl;

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
          className={`absolute top-2.5 left-2.5 z-20 transition-all duration-200 ${
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
        <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none">
          <span className="px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 uppercase tracking-wider border border-white/20 shadow-xs">
            {photo.name}
          </span>
        </div>

        {/* Hover Overlay with Action Buttons */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 z-10">
          <div className="flex items-center justify-between gap-2">
            {/* Quick Preview button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenLightbox(index);
              }}
              className="p-2 rounded-xl bg-white/95 hover:bg-white text-slate-800 shadow-md backdrop-blur-md transition-transform hover:scale-110 cursor-pointer"
              title="Full Screen Preview"
            >
              <Maximize2 className="w-4 h-4 text-[#870069]" />
            </button>

            <div className="flex items-center gap-1.5">
              {/* WhatsApp Share Button */}
              <button
                onClick={handleWhatsAppShare}
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-transform hover:scale-110 cursor-pointer"
                title="Share photo on WhatsApp"
              >
                <Share2 className="w-4 h-4" />
              </button>

              {/* Direct Download Button */}
              <button
                onClick={handleDownloadDirect}
                className="p-2 rounded-xl bg-gradient-to-r from-[#FF693C] to-[#870069] hover:opacity-95 text-white shadow-md transition-transform hover:scale-110 cursor-pointer"
                title={`Download ${photo.name}`}
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Caption / Google Drive Filename Bar */}
      <div className="p-3 bg-white flex items-center justify-between gap-2 border-t border-slate-100">
        <div className="min-w-0">
          <span className="block text-xs font-mono font-bold text-slate-900 truncate">
            {photo.name}
          </span>
          <span className="block text-[10px] text-slate-500 truncate flex items-center gap-1 mt-0.5">
            <Camera className="w-3 h-3 text-[#870069]" />
            <span>Original HD Master</span>
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenLightbox(index);
          }}
          className="text-[11px] font-bold text-[#870069] hover:text-[#FF693C] hover:underline shrink-0"
        >
          View HD &rarr;
        </button>
      </div>
    </div>
  );
}
