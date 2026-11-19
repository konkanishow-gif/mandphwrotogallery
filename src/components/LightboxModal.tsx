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
      `https://drive.google.com/thumbnail?id=${currentPhoto.id}&sz=w1920`,
      currentPhoto.previewUrl,
      `/api/drive/image?id=${currentPhoto.id}&sz=1920`,
      currentPhoto.fullUrl,
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
        className="flex items-center justify-between text-white w-full px-4 sm:px-6 py-3.5 z-20 border-b border-slate-800/80 bg-slate-950/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Album Name, Exact Google Drive filename, Counter */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
          <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#870069] text-white">
            {album.shortTitle}
          </span>
          <span className="font-mono text-xs sm:text-sm text-amber-300 font-bold bg-white/10 px-2 py-0.5 rounded border border-white/15">
            {currentPhoto.name}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            ({currentIndex + 1} / {photos.length})
          </span>
        </div>

        {/* Right: Zoom controls, Info, WhatsApp, Download, Close */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Zoom In */}
          <button
            onClick={() => setZoomLevel((z) => Math.min(z + 0.5, 3))}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Zoom In (+)"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Zoom Out */}
          <button
            onClick={() => setZoomLevel((z) => Math.max(z - 0.5, 1))}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Zoom Out (-)"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Reset Zoom */}
          {zoomLevel > 1 && (
            <button
              onClick={() => setZoomLevel(1)}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-amber-400 hover:text-amber-300 transition-colors text-xs font-semibold"
              title="Reset Zoom (0)"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

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
            className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs"
            title="Share via WhatsApp"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>

          {/* Download Original */}
          <button
            onClick={handleDownload}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#FF693C] to-[#870069] hover:opacity-95 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
            title={`Download ${currentPhoto.name}`}
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Download HD</span>
          </button>

          {/* Close Lightbox */}
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors ml-1"
            title="Close Lightbox (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Center Stage: Image Display + Navigation Chevrons */}
      <div
        className="relative flex-grow flex items-center justify-center p-2 sm:p-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/80 hover:bg-[#870069] text-white border border-white/20 flex items-center justify-center transition-all shadow-xl hover:scale-105"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Loading Spinner */}
        {imgLoading && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <div className="w-12 h-12 border-4 border-[#870069]/30 border-t-[#FF693C] rounded-full animate-spin"></div>
          </div>
        )}

        {/* The Enlarged Image */}
        <div
          className="max-w-full max-h-[75vh] flex items-center justify-center transition-transform duration-200"
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
            className="max-w-full max-h-[72vh] rounded-2xl shadow-2xl object-contain border border-slate-800 select-none"
          />
        </div>

        {/* Next Button */}
        {currentIndex < photos.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-900/80 hover:bg-[#870069] text-white border border-white/20 flex items-center justify-center transition-all shadow-xl hover:scale-105"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Floating Photo Info Drawer */}
        {showInfo && (
          <div className="absolute top-4 right-4 z-30 w-80 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl text-xs space-y-2.5 text-slate-300 animate-in fade-in slide-in-from-right-4 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <span className="font-bold text-white text-sm">Google Drive File Info</span>
              <button
                onClick={() => setShowInfo(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-bold">File Name</span>
              <span className="text-amber-300 font-mono font-bold text-sm">{currentPhoto.name}</span>
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
        className="w-full bg-slate-950/90 border-t border-slate-800/80 px-4 py-3 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <span className="text-xs font-mono text-amber-300 font-semibold shrink-0 hidden sm:inline">
            {currentPhoto.name}
          </span>

          {/* Thumbnails row */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none mx-auto">
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
                  className={`relative w-12 h-9 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
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
