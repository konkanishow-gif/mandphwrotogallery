"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ExternalLink,
  Info,
} from "lucide-react";
import { PhotoItem, AlbumItem } from "@/data/driveCatalog";
import { sharePhotoOnWhatsApp } from "@/utils/whatsapp";

interface LightboxModalProps {
  isOpen: boolean;
  photos: PhotoItem[];
  initialIndex: number;
  album: AlbumItem;
  onClose: () => void;
}

export default function LightboxModal({
  isOpen,
  photos,
  initialIndex,
  album,
  onClose,
}: LightboxModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showInfo, setShowInfo] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);
  const [retryIndex, setRetryIndex] = useState(0);

  // Sync index when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoomLevel(1);
    setImgLoading(true);
    setRetryIndex(0);
  }, [initialIndex, isOpen]);

  const currentPhoto = photos[currentIndex];

  useEffect(() => {
    setRetryIndex(0);
    setImgLoading(true);
  }, [currentIndex, currentPhoto?.id]);

  const previewSources = useMemo(() => {
    if (!currentPhoto) return [];
    return [
      currentPhoto.previewUrl || `https://lh3.googleusercontent.com/d/${currentPhoto.id}=w1600`,
      `https://lh3.googleusercontent.com/d/${currentPhoto.id}=w2400`,
      `https://drive.google.com/thumbnail?id=${currentPhoto.id}&sz=w1920`,
      `/api/drive/image?id=${currentPhoto.id}&sz=1920`,
    ];
  }, [currentPhoto]);

  const currentPreviewSrc = previewSources[retryIndex] || currentPhoto?.previewUrl;

  const handleNext = useCallback(() => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setZoomLevel(1);
      setImgLoading(true);
    }
  }, [currentIndex, photos.length]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setZoomLevel(1);
      setImgLoading(true);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "+" || e.key === "=") {
        setZoomLevel((z) => Math.min(z + 0.5, 3));
      } else if (e.key === "-") {
        setZoomLevel((z) => Math.max(z - 0.5, 1));
      } else if (e.key === "0") {
        setZoomLevel(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Mobile Touch Swipe Handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  if (!isOpen || !currentPhoto) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = currentPhoto.downloadUrl;
    link.download = currentPhoto.name;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleWhatsApp = () => {
    sharePhotoOnWhatsApp(currentPhoto, album);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0B0F19]/98 backdrop-blur-2xl flex flex-col justify-between select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar: Orange Album Pill, Counter, Action Buttons matching Screenshot */}
      <div
        className="flex items-center justify-between text-white w-full px-3 sm:px-6 py-2.5 sm:py-3.5 z-20 border-b border-slate-800/80 bg-slate-950/90 gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Orange album badge pill + Photo count */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 mr-1">
          <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold bg-[#FF9800] text-black shrink-0 shadow-sm truncate max-w-[100px] xs:max-w-[140px] sm:max-w-[200px]">
            {album.shortTitle}
          </span>
          <span className="text-white text-[11px] sm:text-sm font-semibold truncate shrink-0">
            {currentIndex + 1} / {photos.length}
          </span>
        </div>

        {/* Right: WhatsApp, Download, Fullscreen/External, Close */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* WhatsApp Share */}
          <button
            onClick={handleWhatsApp}
            className="p-1.5 sm:p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center justify-center shadow-xs cursor-pointer"
            title="Share on WhatsApp"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Download Original HD */}
          <button
            onClick={handleDownload}
            className="p-1.5 sm:px-3 sm:py-2 rounded-xl bg-[#FF9800] hover:bg-amber-400 text-black font-bold text-xs transition-all flex items-center gap-1 shadow-sm cursor-pointer"
            title={`Download ${currentPhoto.name}`}
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download</span>
          </button>

          {/* External Full Res Link */}
          <a
            href={currentPhoto.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Open Full Resolution"
          >
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Close Lightbox */}
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-800/90 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 transition-colors"
            title="Close (Esc)"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Main Center Stage: Image Display + Navigation Chevrons + Touch Swipe */}
      <div
        className="relative flex-grow flex items-center justify-center p-2 sm:p-6 overflow-hidden touch-pan-y"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Previous Button - Circular round button directly on left */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-slate-900/85 hover:bg-[#FF693C] text-white border border-white/20 flex items-center justify-center transition-all shadow-2xl hover:scale-105 cursor-pointer"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Loading Spinner */}
        {imgLoading && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border-3 sm:border-4 border-[#870069]/30 border-t-[#FF693C] rounded-full animate-spin"></div>
          </div>
        )}

        {/* The Enlarged Image */}
        <div
          className="max-w-full max-h-[72vh] sm:max-h-[78vh] flex items-center justify-center transition-transform duration-200"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={currentPreviewSrc}
            alt={currentPhoto.name}
            referrerPolicy="no-referrer"
            onLoad={() => setImgLoading(false)}
            onError={() => {
              if (retryIndex < previewSources.length - 1) {
                setRetryIndex((prev) => prev + 1);
              } else {
                setImgLoading(false);
              }
            }}
            className="max-w-[94vw] max-h-[70vh] sm:max-h-[76vh] rounded-xl sm:rounded-2xl shadow-2xl object-contain border border-slate-800 select-none w-auto h-auto"
          />
        </div>

        {/* Next Button - Circular round button directly on right */}
        {currentIndex < photos.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2.5 sm:right-6 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/85 hover:bg-[#FF693C] text-white border border-white/20 flex items-center justify-center transition-all shadow-2xl hover:scale-105 cursor-pointer"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Bottom Area: Navigation hint & Subtle floating domain pill matching reference */}
      <div
        className="w-full bg-slate-950/90 border-t border-slate-800/80 px-3 py-3 z-20 flex flex-col items-center justify-center gap-1.5"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-[11px] text-slate-400 font-medium text-center">
          Use &larr; &rarr; arrows to navigate • Press ESC to close
        </span>
        <div className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] sm:text-[11px] text-slate-400">
          <span>Photos: <strong className="text-amber-300">Stanly Bantwal</strong> • Built by <strong className="text-white">Techharmonix</strong></span>
        </div>
      </div>
    </div>
  );
}
