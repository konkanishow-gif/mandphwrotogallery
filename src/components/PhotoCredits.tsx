"use client";

import React from "react";
import { Phone, MapPin, MessageCircle, Award } from "lucide-react";

interface PhotoCreditsProps {
  className?: string;
}

export default function PhotoCredits({ className = "" }: PhotoCreditsProps) {
  return (
    <section
      aria-label="Official Photo Credits"
      className={`rounded-xl bg-gradient-to-r from-slate-950 via-purple-950/60 to-slate-900 border border-purple-500/20 text-white p-2.5 sm:p-3.5 shadow-md relative overflow-hidden ${className}`}
    >
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        {/* Left Side: Compact Photographer Details */}
        <div className="space-y-1 text-center sm:text-left flex-grow min-w-0">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[9px] font-bold uppercase tracking-wider">
              <Award className="w-2.5 h-2.5 text-amber-400" />
              <span>Official Photo Coverage</span>
            </span>
            <span className="text-[10px] text-slate-400">• Mandd Sobhann Media Partner</span>
          </div>

          <div>
            <h4 className="text-sm sm:text-base font-bold text-amber-300 tracking-tight leading-tight">
              Stanly Bantwal
            </h4>
            <p className="text-[10px] sm:text-xs font-semibold text-cyan-300 tracking-wide uppercase">
              ANVITA PHOTOGRAPHY • ANCITA VIDEOGRAPHY
            </p>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-1 text-[10px] text-slate-400">
            <MapPin className="w-2.5 h-2.5 text-[#FF693C] shrink-0" />
            <span className="truncate">Bikarnakatte Junction, Mangalore</span>
          </div>

          {/* Quick Action Buttons */}
          <div className="pt-0.5 flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
            <a
              href="tel:+919164687588"
              className="px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-[10px] font-semibold border border-white/20 transition-transform active:scale-95 flex items-center gap-1"
            >
              <Phone className="w-2.5 h-2.5 text-emerald-400" />
              <span>+91 9164687588</span>
            </a>

            <a
              href="tel:+919448240584"
              className="px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-[10px] font-semibold border border-white/20 transition-transform active:scale-95 flex items-center gap-1"
            >
              <Phone className="w-2.5 h-2.5 text-emerald-400" />
              <span>+91 9448240584</span>
            </a>

            <a
              href="https://wa.me/919164687588?text=Hello%20Stanly%20Bantwal,%20regarding%20the%201st%20World%20Konkani%20Music%20Mega%20Convention%20photos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-0.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-semibold shadow-xs transition-transform active:scale-95 flex items-center gap-1"
            >
              <MessageCircle className="w-2.5 h-2.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Side: Small Sleek Badge Image */}
        <div className="shrink-0">
          <div className="w-24 sm:w-32 rounded-lg overflow-hidden border border-white/15 shadow-sm bg-black">
            <img
              src="/brand/photo-credits.png"
              alt="Stanly Bantwal Photo Credits"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
