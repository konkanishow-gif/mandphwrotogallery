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
  Calendar,
  MapPin,
  Check,
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
      className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-between select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar: Event Badge, Drive Filename, Counter, Action Buttons */}
      <div
        className="flex items-center justify-between text-white w-full px-3 sm:px-6 py-2.5 sm:py-3.5 z-20 border-b border-slate-800/80 bg-slate-950/90 gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Album Name, Exact Google Drive filename, Counter */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
          <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-bold bg-[#870069] text-white shrink-0">
            {album.shortTitle}
          </span>
          <span className="font-mono text-[11px] sm:text-sm text-amber-300 font-bold bg-white/10 px-1.5 sm:px-2 py-0.5 rounded border border-white/15 truncate max-w-[110px] sm:max-w-[240px]">
            {currentPhoto.name}
          </span>
          <span className="text-[10px] sm:text-xs text-slate-400 font-medium shrink-0">
            ({currentIndex + 1}/{photos.length})
          </span>
        </div>

        {/* Right: Zoom controls (desktop), Info, WhatsApp, Download, Close */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Zoom Controls (Desktop only to prevent mobile clutter) */}
          <div className="hidden md:flex items-center gap-1">
            <button
              onClick={() => setZoomLevel((z) => Math.min(z + 0.5, 3))}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Zoom In (+)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.max(z - 0.5, 1))}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Zoom Out (-)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            {zoomLevel > 1 && (
              <button
                onClick={() => setZoomLevel(1)}
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-amber-400 hover:text-amber-300 transition-colors text-xs font-semibold"
                title="Reset Zoom (0)"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Details Toggle */}
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={`p-2 rounded-xl transition-colors ${
              showInfo
                ? "bg-[#870069] text-white"
                : "bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white"
            }`}
            title="Toggle Photo Details"
          >
            <Info className="w-4 h-4" />
          </button>

          {/* WhatsApp Share */}
          <button
            onClick={handleWhatsApp}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
            title="Share via WhatsApp"
          >
            <Share2 className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>

          {/* Download Original */}
          <button
            onClick={handleDownload}
            className="p-2 sm:px-3.5 sm:py-1.5 rounded-xl bg-gradient-to-r from-[#FF693C] to-[#870069] hover:opacity-95 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
            title={`Download ${currentPhoto.name}`}
          >
            <Download className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
            <span className="hidden sm:inline">Download HD</span>
          </button>

          {/* Close Lightbox */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors ml-0.5 sm:ml-1"
            title="Close Lightbox (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Center Stage: Image Display + Navigation Chevrons + Touch Swipe */}
      <div
        className="relative flex-grow flex items-center justify-center p-2 sm:p-4 overflow-hidden touch-pan-y"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-slate-900/70 sm:bg-slate-900/80 hover:bg-[#870069] text-white border border-white/20 flex items-center justify-center transition-all shadow-xl hover:scale-105 cursor-pointer"
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
          className="max-w-full max-h-[70vh] sm:max-h-[75vh] flex items-center justify-center transition-transform duration-200"
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
            className="max-w-full max-h-[68vh] sm:max-h-[72vh] rounded-xl sm:rounded-2xl shadow-2xl object-contain border border-slate-800 select-none"
          />
        </div>

        {/* Next Button */}
        {currentIndex < photos.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-30 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-slate-900/70 sm:bg-slate-900/80 hover:bg-[#870069] text-white border border-white/20 flex items-center justify-center transition-all shadow-xl hover:scale-105 cursor-pointer"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Floating Photo Info Drawer */}
        {showInfo && (
          <div className="absolute top-2 right-2 inset-x-2 sm:inset-x-auto sm:top-4 sm:right-4 z-30 max-w-sm sm:w-80 ml-auto p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl text-xs space-y-2.5 text-slate-300 animate-in fade-in slide-in-from-right-4 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="font-bold text-white text-sm">Google Drive File Info</span>
              <button
                onClick={() => setShowInfo(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-bold">File Name</span>
              <span className="text-amber-300 font-mono font-bold text-xs sm:text-sm truncate block">{currentPhoto.name}</span>
            </div>

            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Event Album</span>
              <span className="text-white font-medium">{album.name}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Date</span>
                <span className="text-slate-200">{album.date}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Resolution</span>
                <span className="text-emerald-400 font-semibold">Original Full HD</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-1">
              <span className="text-slate-500 block text-[10px] uppercase font-bold">Official Photography</span>
              <span className="text-amber-300 font-bold block text-xs">Stanly Bantwal</span>
              <span className="text-cyan-300 text-[10px] block font-semibold">Anvita Photography & Ancita Videography</span>
              <span className="text-slate-400 text-[10px] block">Ph: +91 9164687588 / 9448240584</span>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={handleDownload}
                className="text-[#FF693C] hover:underline flex items-center gap-1.5 font-semibold text-[11px] cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Master Resolution Photo</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Thumbnail Strip for Fast Navigation */}
      <div
        className="w-full bg-slate-950/90 border-t border-slate-800/80 px-2 sm:px-4 py-2 sm:py-3 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          <span className="text-xs font-mono text-amber-300 font-semibold shrink-0 hidden sm:inline">
            {currentPhoto.name}
          </span>

          {/* Thumbnails row */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-1 scrollbar-none mx-auto touch-pan-x">
            {photos.map((p, idx) => {
              const isCurrent = idx === currentIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setZoomLevel(1);
                    setImgLoading(true);
                  }}
                  className={`relative w-10 h-7 sm:w-12 sm:h-9 rounded-md sm:rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    isCurrent
                      ? "border-[#FF693C] scale-110 shadow-md ring-2 ring-[#870069]"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={p.thumbUrl}
                    alt={p.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>

          <span className="text-xs text-slate-400 font-medium shrink-0 hidden sm:inline">
            {album.location}
          </span>
        </div>
      </div>
    </div>
  );
}
