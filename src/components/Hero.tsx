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
}

export default function Hero({
  onSearchQuery,
  onOpenSearch,
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

  const heroPhoto =
    ALBUMS_DATA[1]?.photos[2]?.previewUrl ||
    ALBUMS_DATA[0]?.photos[0]?.previewUrl ||
    "";

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[520px] lg:min-h-[580px] flex items-center justify-center">
      {/* Background Image with subtle dark gradients */}
      <div className="absolute inset-0 z-0">
        {heroPhoto && (
          <img
            src={heroPhoto}
            alt="1st World Konkani Music Mega Convention"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-25 scale-105 transform animate-fade-in"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/90" />

        {/* Ambient Brand Radiant Glows - Matching Logo Colors */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#870069]/30 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#FF693C]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#870069]/20 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center space-y-6">
        {/* Cultural Badge Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF693C] animate-ping"></span>
          <span className="text-amber-300 font-bold">Po&apos;ylo Vishv Konknni So&apos;ngeet Mo&apos;hame&apos;ll</span>
          <span className="text-white/40">•</span>
          <span className="text-white font-bold">1st World Konkani Music Mega Convention (Active)</span>
        </div>

        {/* Hero Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto">
          The Official{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF693C] via-amber-300 to-[#FF873C]">
            Event Photo Library
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          High-definition photographic archives of the historic 13-day convention presented by{" "}
          <strong className="text-white">Mandd Sobhann</strong> at Kalaangann, Mangalore.
        </p>

        {/* Large Prominent Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto">
          <form
            onSubmit={handleSearchSubmit}
            className="relative flex items-center shadow-2xl rounded-2xl overflow-hidden bg-white/95 p-1.5 border border-white/20 backdrop-blur-xl focus-within:ring-4 focus-within:ring-[#870069]/40 transition-all"
          >
            <div className="pl-4 text-slate-400">
              <Search className="w-5 h-5 text-[#870069]" />
            </div>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by photo filename, session, ceremony, date..."
              className="w-full px-3 py-3 text-slate-900 placeholder-slate-400 text-sm sm:text-base outline-none bg-transparent font-medium"
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
            {["Welcoming CM", "Grand Inauguration", "Guinness Marathon", "Kalaangann"].map(
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

        {/* 4 Feature Highlights / Statistics Counters */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              {ALBUMS_DATA.length}
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1 flex items-center justify-center gap-1">
              <Layers className="w-3.5 h-3.5 text-amber-300" />
              <span>Event Albums</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center hover:bg-white/10 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FF693C]">
              {EVENT_DETAILS.totalPhotosCount}+
            </div>
            <div className="text-xs text-slate-300 font-medium mt-1 flex items-center justify-center gap-1">
              <Camera className="w-3.5 h-3.5 text-[#FF693C]" />
              <span>Original HD Photos</span>
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
              <span>Master Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
