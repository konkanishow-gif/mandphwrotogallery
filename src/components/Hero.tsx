"use client";

import React from "react";
import {
  Camera,
  Layers,
  Sparkles,
  Calendar,
  MapPin,
} from "lucide-react";
import { EVENT_DETAILS, ALBUMS_DATA } from "@/data/driveCatalog";

interface HeroProps {
  onSearchQuery?: (q: string) => void;
  onOpenSearch?: () => void;
  totalPhotos?: number;
  totalAlbums?: number;
}

export default function Hero({
  onSearchQuery,
  onOpenSearch,
  totalPhotos,
  totalAlbums,
}: HeroProps) {
  const displayTotalAlbums = totalAlbums ?? ALBUMS_DATA.length;
  const displayTotalPhotos = totalPhotos ?? EVENT_DETAILS.totalPhotosCount;

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-6 sm:py-14 md:py-16 border-b border-slate-800">
      {/* Background Atmosphere Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://lh3.googleusercontent.com/d/1EE4zjtobRAVtx7KKXFJFHgAq0bosrF4G=s1920"
          alt="1st World Konkani Music Mega Convention"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105 filter blur-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-[#0F0210]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center space-y-3 sm:space-y-5">
        {/* Cultural Edition Pill */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-sm font-semibold text-white shadow-sm max-w-full truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
          <span className="truncate">Po&apos;ylo Vishv Konknni So&apos;ngeet Mo&apos;hame&apos;ll (Active)</span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
          1st World Konkani Music Mega Convention
        </h1>

        <p className="text-xs sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          The official high-resolution photographic archive powered directly by Google Drive.
          Preserving, promoting, and celebrating Konkani music across the globe.
        </p>

        {/* Venue, Date & Organizer Bar */}
        <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-[11px] sm:text-sm text-slate-300">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF693C]" />
            <span>3 - 15 Nov, 2026</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF693C]" />
            <span>Kalaangann, Mangalore</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
            <span>Mandd Sobhann Media Cell</span>
          </div>
        </div>

        {/* 4 Feature Highlights / Real-Time Statistics Counters */}
        <div className="mt-4 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors">
            <div className="text-lg sm:text-3xl font-extrabold text-white flex items-center justify-center gap-1">
              <span>{displayTotalAlbums}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Live Google Drive Sync" />
            </div>
            <div className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5 sm:mt-1 flex items-center justify-center gap-1">
              <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300" />
              <span>Albums</span>
            </div>
          </div>

          <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors">
            <div className="text-lg sm:text-3xl font-extrabold text-[#FF693C] flex items-center justify-center gap-1">
              <span>{displayTotalPhotos}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF693C] animate-pulse" title="Live Photos Count" />
            </div>
            <div className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5 sm:mt-1 flex items-center justify-center gap-1">
              <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF693C]" />
              <span>HD Photos</span>
            </div>
          </div>

          <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors">
            <div className="text-lg sm:text-3xl font-extrabold text-emerald-400">
              13
            </div>
            <div className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5 sm:mt-1 flex items-center justify-center gap-1">
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
              <span>Days</span>
            </div>
          </div>

          <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors">
            <div className="text-lg sm:text-3xl font-extrabold text-amber-300">
              100%
            </div>
            <div className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5 sm:mt-1 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300" />
              <span>Drive HD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
