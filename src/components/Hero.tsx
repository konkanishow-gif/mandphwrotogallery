"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Camera,
  Layers,
  Sparkles,
  Calendar,
  MapPin,
  ArrowRight,
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
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchQuery?.(searchInput.trim());
    } else {
      onOpenSearch?.();
    }
  };

  const displayTotalAlbums = totalAlbums ?? ALBUMS_DATA.length;
  const displayTotalPhotos = totalPhotos ?? EVENT_DETAILS.totalPhotosCount;

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Cultural Edition Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-white shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Po&apos;ylo Vishv Konknni So&apos;ngeet Mo&apos;hame&apos;ll (Active)</span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
          1st World Konkani Music Mega Convention
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          The official high-resolution photographic archive powered directly by Google Drive.
          Preserving, promoting, and celebrating Konkani music across the globe.
        </p>

        {/* Venue, Date & Organizer Bar */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#FF693C]" />
            <span>3 - 15 November, 2026</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#FF693C]" />
            <span>Kalaangann, Mangalore</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Mandd Sobhann Media Cell</span>
          </div>
        </div>

        {/* Central Search Bar */}
        <div className="pt-4 max-w-2xl mx-auto">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-2 p-1.5 sm:p-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl focus-within:border-[#FF693C] transition-all"
          >
            <div className="pl-3 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search photographs, dignitaries, events..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none px-2 py-2"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#870069] to-[#FF693C] hover:opacity-95 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <span>Search Photos</span>
              <ArrowRight className="w-4 h-4 hidden sm:inline" />
            </button>
          </form>

          {/* Quick search tags */}
          <div className="mt-3 flex items-center justify-center gap-2 flex-wrap text-xs text-slate-300">
            <span className="text-slate-400 font-medium">Quick Filter:</span>
            {["Grand Inauguration", "Welcoming CM", "Singing Marathon", "Valedictory"].map(
              (tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSearchInput(tag);
                    onSearchQuery?.(tag);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors cursor-pointer text-[11px]"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>

        {/* 4 Feature Highlights / Real-Time Statistics Counters */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center gap-1">
              <span>{displayTotalAlbums}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Live Google Drive Sync" />
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1 flex items-center justify-center gap-1">
              <Layers className="w-3.5 h-3.5 text-amber-300" />
              <span>Real-Time Albums</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FF693C] flex items-center justify-center gap-1">
              <span>{displayTotalPhotos}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF693C] animate-pulse" title="Live Photos Count" />
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1 flex items-center justify-center gap-1">
              <Camera className="w-3.5 h-3.5 text-[#FF693C]" />
              <span>HD Photographs</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
              13
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1 flex items-center justify-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>Days of Convention</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300">
              100%
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1 flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Drive Masters</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
