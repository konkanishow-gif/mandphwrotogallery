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
        className="bg-gradient-to-r from-[#6A0050] via-[#870069] to-[#FF693C] text-white text-[10px] sm:text-xs py-1 sm:py-1.5 px-3 sm:px-4 shadow-xs"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-1.5 justify-center sm:justify-start w-full sm:w-auto truncate">
            <span className="bg-white/20 backdrop-blur-md text-white font-extrabold px-1.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider flex items-center gap-1 border border-white/20 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-ping"></span>
              ACTIVE
            </span>
            <span className="font-semibold text-white/95 truncate text-[11px] sm:text-xs">
              <strong>{EVENT_DETAILS.englishTitle}</strong> — {EVENT_DETAILS.location}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[11px] text-white/90 shrink-0">
            <span className="text-amber-200 font-bold">
              3 - 15 Nov 2026
            </span>
          </div>
        </div>
      </aside>

      {/* Main Glass Navigation Bar - Sleek Dark Theme matching Reference */}
      <nav className="sticky top-0 z-40 bg-[#0B0F19]/95 backdrop-blur-xl border-b border-slate-800 text-white transition-all duration-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-18">
            {/* Dual Logos & Cultural Title matching Reference Screenshot */}
            <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 min-w-0">
              <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
                {/* Event Official Emblem */}
                <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-full p-0.5 bg-white shadow-xs border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
                  <img
                    src="/brand/event-logo.jpg"
                    alt="Emblem"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Brand Titles: 2-line title like screenshot */}
                <div className="flex flex-col text-left truncate">
                  <span className="font-bold text-xs sm:text-sm md:text-base text-white tracking-tight leading-tight truncate group-hover:text-amber-300 transition-colors">
                    1st World Konkani Music Convention
                  </span>
                  <span className="text-[9px] sm:text-[11px] font-bold text-cyan-400 tracking-wider uppercase truncate">
                    MANDD SOBHANN • KALAANGANN
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Controls: Search button + Nav Links + Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Center Navigation Links (Desktop) */}
              <div className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        isActive
                          ? "bg-[#870069] text-white"
                          : "text-slate-400 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Search Trigger Button */}
              <button
                onClick={onOpenSearch}
                className="p-2 sm:px-3 sm:py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition-all flex items-center gap-1.5 cursor-pointer"
                title="Search Photos (⌘K)"
                aria-label="Search Photos"
              >
                <Search className="w-4 h-4 text-[#FF693C]" />
                <span className="hidden sm:inline">Search</span>
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0F19] border-t border-slate-800 px-5 py-4 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                      isActive
                        ? "bg-[#870069] text-white"
                        : "text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
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
