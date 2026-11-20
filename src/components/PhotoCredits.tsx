"use client";

import React from "react";
import { Camera, Phone, MapPin, MessageCircle, Award, CheckCircle2, QrCode } from "lucide-react";

interface PhotoCreditsProps {
  className?: string;
}

export default function PhotoCredits({ className = "" }: PhotoCreditsProps) {
  return (
    <section
      aria-label="Official Photo Credits"
      className={`rounded-3xl bg-gradient-to-br from-slate-950 via-purple-950/70 to-slate-900 border border-purple-500/30 text-white p-5 sm:p-8 shadow-2xl relative overflow-hidden ${className}`}
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#870069]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF693C]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
        {/* Left Side: Photographer & Studio Information */}
        <div className="space-y-3.5 text-center lg:text-left max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Event Photography & Videography</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-amber-300 tracking-tight">
              Stanly Bantwal
            </h3>
            <p className="text-sm sm:text-base font-extrabold text-cyan-300 tracking-wide uppercase">
              ANVITA PHOTOGRAPHY • ANCITA VIDEOGRAPHY
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Official photographic & videographic documentation of the{" "}
            <strong className="text-white">1st World Konkani Music Mega Convention</strong>.
            All master high-resolution images are captured and preserved under official media accreditation.
          </p>

          <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF693C] shrink-0" />
              <span>Bikarnakatte Junction, Near Manohar Hotel, Mangalore - 575005</span>
            </div>
          </div>

          {/* Quick Action Buttons for Mobile & Desktop */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
            <a
              href="tel:+919164687588"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 shadow-xs transition-transform active:scale-95 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 9164687588</span>
            </a>

            <a
              href="tel:+919448240584"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 shadow-xs transition-transform active:scale-95 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 9448240584</span>
            </a>

            <a
              href="https://wa.me/919164687588?text=Hello%20Stanly%20Bantwal,%20regarding%20the%201st%20World%20Konkani%20Music%20Mega%20Convention%20photos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-transform active:scale-95 flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>

        {/* Right Side: High-Resolution Credit Badge / Visiting Card */}
        <div className="shrink-0 w-full sm:w-auto flex flex-col items-center">
          <div className="relative group max-w-sm sm:max-w-md w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
            <img
              src="/brand/photo-credits.png"
              alt="Official Photo Credits - Stanly Bantwal, Anvita Photography, Ancita Videography"
              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-white/20">
              Official Media Accreditation
            </div>
          </div>
          <span className="text-[11px] text-slate-400 mt-2 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            Mandd Sobhann Media Partner
          </span>
        </div>
      </div>
    </section>
  );
}
