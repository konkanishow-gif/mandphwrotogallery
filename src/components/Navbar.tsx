"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Menu,
  X,
  Sparkles,
  Grid,
} from "lucide-react";
import { EVENT_DETAILS } from "@/data/driveCatalog";

interface NavbarProps {
  onOpenSearch?: () => void;
}

export default function Navbar({ onOpenSearch }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: Sparkles },
    { name: "All Albums", href: "/albums", icon: Grid },
  ];

  return (
    <>
      {/* Top Announcement Bar - Active Convention Indicator */}
      <aside
        aria-label="Active Convention"
        className="bg-gradient-to-r from-[#6A0050] via-[#870069] to-[#FF693C] text-white text-xs py-2 px-4 shadow-sm"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap w-full sm:w-auto">
            <span className="bg-white/20 backdrop-blur-md text-white font-extrabold px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider flex items-center gap-1.5 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping"></span>
              ACTIVE CONVENTION
            </span>
            <span className="font-semibold text-white/95">
              <strong>{EVENT_DETAILS.englishTitle}</strong> — {EVENT_DETAILS.location}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[11px] text-white/90">
            <span className="text-amber-200 font-bold">
              3 - 15 Nov 2026
            </span>
          </div>
        </div>
      </aside>

      {/* Main Glass Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-xs transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            {/* Dual Logos & Cultural Title */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
                {/* Event Official Emblem - Large, Crisp, Unclipped */}
                <div className="h-14 sm:h-16 w-auto p-1 bg-white rounded-xl shadow-xs border border-slate-200/90 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src="/brand/event-logo.jpg"
                    alt="Po'ylo Vishv Konknni So'ngeet Mo'hame'll Emblem"
                    className="h-full w-auto object-contain max-w-[68px] sm:max-w-[76px]"
                  />
                </div>

                {/* Mandd Sobhann Official Brand Logo - Natural Aspect Ratio */}
                <div className="h-10 sm:h-12 flex items-center pl-1 border-l border-slate-200 group-hover:opacity-95 transition-opacity">
                  <img
                    src="/brand/mandd-sobhann-logo.png"
                    alt="Mandd Sobhann Logo"
                    className="h-full w-auto object-contain max-w-[120px] sm:max-w-[150px]"
                  />
                </div>

                {/* Brand Titles */}
                <div className="hidden xl:flex flex-col text-left pl-1">
                  <span className="font-extrabold text-sm sm:text-base text-slate-900 tracking-tight leading-tight group-hover:text-[#870069] transition-colors">
                    1st World Konkani Music Mega Convention
                  </span>
                  <span className="text-[11px] font-semibold text-[#870069]">
                    Po&apos;ylo Vishv Konknni So&apos;ngeet Mo&apos;hame&apos;ll (Active)
                  </span>
                </div>
              </Link>
            </div>

            {/* Center Navigation Links - Simple & Focused */}
            <div className="hidden md:flex items-center gap-1.5 bg-slate-100/90 p-1 rounded-2xl border border-slate-200/80">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-[#870069] to-[#FF693C] text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/80"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Trigger */}
              <button
                onClick={onOpenSearch}
                aria-label="Search photos"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-semibold transition-colors border border-slate-200/60 cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#870069]" />
                <span className="hidden sm:inline">Search Photos...</span>
                <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-white border border-slate-300 rounded text-slate-500 shadow-2xs font-mono">
                  ⌘K
                </kbd>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 border-t border-slate-200/90 px-6 py-5 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                      isActive
                        ? "bg-[#870069] text-white"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
