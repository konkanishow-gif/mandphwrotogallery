import React from "react";
import Link from "next/link";
import {
  Heart,
  Layers,
  Sparkles,
  Camera,
  MapPin,
  Calendar,
} from "lucide-react";
import { EVENT_DETAILS, ALBUMS_DATA } from "@/data/driveCatalog";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-20 border-t border-slate-800">
      {/* Upper Footer: Brand info & Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Organization & Logos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-14 w-auto p-1 bg-white rounded-xl shadow-md flex items-center justify-center shrink-0">
                <img
                  src="/brand/event-logo.jpg"
                  alt="Event Emblem"
                  className="h-full w-auto object-contain max-w-[64px]"
                />
              </div>
              <div className="h-10 flex items-center pl-2 border-l border-slate-700">
                <img
                  src="/brand/mandd-sobhann-logo.png"
                  alt="Mandd Sobhann"
                  className="h-full w-auto object-contain brightness-0 invert max-w-[130px]"
                />
              </div>
            </div>

            <h3 className="text-white font-extrabold text-base leading-snug">
              {EVENT_DETAILS.englishTitle} (Active)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Official photographic archive of the First World Konkani Music Mega
              Convention, presented by Mandd Sobhann — World&apos;s Premier Konkani
              Cultural Organization.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF693C]" />
                <span>Kalaangann, Shaktinagar, Mangalore - 575016</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>3 - 15 November, 2026</span>
              </div>
            </div>
          </div>

          {/* Column 2: Featured Albums */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider text-[#FF693C]">
              Featured Albums
            </h4>
            <ul className="space-y-2 text-xs">
              {ALBUMS_DATA.slice(0, 6).map((album) => (
                <li key={album.slug}>
                  <Link
                    href={`/album/${album.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span className="truncate max-w-[200px]">
                      {album.shortTitle}
                    </span>
                    <span className="text-[10px] text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded">
                      {album.photoCount} HD
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider text-[#FF693C]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Convention Gallery Home
                </Link>
              </li>
              <li>
                <Link href="/albums" className="hover:text-white transition-colors">
                  All Event Albums
                </Link>
              </li>
              <li>
                <span className="text-slate-500 block">
                  Original HD Photo Downloads Available
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Photography & Engineering Attribution */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider text-[#FF693C]">
              Official Coverage
            </h4>
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
              <span className="text-[11px] text-amber-300 font-bold block uppercase tracking-wider">
                Official Photography:
              </span>
              <span className="text-sm font-extrabold text-white block">
                Stanly Bantwal
              </span>
              <span className="text-xs text-cyan-300 font-semibold block">
                Anvita Photography • Ancita Videography
              </span>
              <span className="text-[11px] text-slate-400 block">
                Ph: +91 9164687588 / 9448240584
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
              <span className="text-[10px] text-slate-400 block">
                Engineering & Platform:
              </span>
              <span className="text-xs font-extrabold text-amber-300">
                Techharmonix
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="border-t border-slate-900 bg-black/60 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} {EVENT_DETAILS.organizer}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400 font-medium">
            <span>Website built by</span>
            <strong className="text-white">Techharmonix</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}
