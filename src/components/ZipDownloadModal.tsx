"use client";

import React from "react";
import {
  Package,
  CheckCircle2,
  AlertCircle,
  X,
  FileArchive,
  Loader2,
} from "lucide-react";
import { ZipProgressState } from "@/utils/zipDownload";

interface ZipDownloadModalProps {
  isOpen: boolean;
  state: ZipProgressState;
  onClose: () => void;
}

export default function ZipDownloadModal({
  isOpen,
  state,
  onClose,
}: ZipDownloadModalProps) {
  if (!isOpen) return null;

  const isComplete = !state.isDownloading && state.progressPercent === 100;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-7 space-y-5 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div
              className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                isComplete
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-blue-100 text-[#457CF3]"
              }`}
            >
              {isComplete ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <FileArchive className="w-5 h-5" />
              )}
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 leading-tight">
                {isComplete ? "Archive Ready!" : "Packaging ZIP Archive"}
              </h3>
              <p className="text-xs text-slate-500">
                {state.totalFiles} Original Resolution Photographs
              </p>
            </div>
          </div>

          {isComplete && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Progress Bar & Status Text */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-700">
              {isComplete
                ? "Download initiated automatically"
                : `Fetching & Bundling (${state.completedFiles} of ${state.totalFiles})`}
            </span>
            <span className="text-[#457CF3]">{state.progressPercent}%</span>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200/80">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                isComplete
                  ? "bg-emerald-500"
                  : "bg-gradient-to-r from-[#457CF3] via-blue-500 to-indigo-600"
              }`}
              style={{ width: `${state.progressPercent}%` }}
            />
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
            {!isComplete && <Loader2 className="w-3.5 h-3.5 animate-spin text-[#457CF3]" />}
            <span className="truncate">
              {state.currentFileName || "Processing image files..."}
            </span>
          </div>
        </div>

        {/* Info callout */}
        <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 leading-relaxed">
          <strong>Quality Guarantee:</strong> Images are packaged in original camera resolution directly from the Google Drive cloud master without lossy compression.
        </div>

        {/* Completion Action */}
        {isComplete && (
          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Done & Return to Gallery
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
