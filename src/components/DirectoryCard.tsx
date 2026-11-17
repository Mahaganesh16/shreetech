'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, RotateCw, CheckCircle2, LucideIcon, Sparkles } from 'lucide-react';

export interface DirectoryCardProps {
  title: string;
  description: string;
  href: string;
  badge: string;
  icon: LucideIcon;
  gradient: string;
  backBadge?: string;
  backTitle?: string;
  highlights?: string[];
  ctaText?: string;
}

export default function DirectoryCard({
  title,
  description,
  href,
  badge,
  icon: Icon,
  gradient,
  backBadge,
  backTitle,
  highlights = [
    'Enterprise-grade engineering standards',
    'Modern scalable architecture',
    'Guaranteed delivery timelines',
    'Comprehensive post-launch support',
  ],
  ctaText = 'Visit Section',
}: DirectoryCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="flip-card-wrapper h-[350px] sm:h-[370px] w-full select-none group"
      onMouseMove={handleMouseMove}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        {/* ========================================================
            FRONT FACE OF THE CARD
            ======================================================== */}
        <div className="flip-card-front glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between border border-white/95 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.06)] group-hover:border-orange-300/70 transition-colors duration-500 cursor-pointer">
          {/* Dynamic Cursor Spotlight (Follows mouse across front) */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 107, 0, 0.12), transparent 75%)`,
            }}
          />

          {/* Front Top Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5">
              {/* Animated Icon Container with Gradient Border */}
              <div className="relative">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${gradient} p-0.5 shadow-sm group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300`}>
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-slate-800 shadow-inner">
                    <Icon className="w-5 h-5 text-slate-800 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
              </div>

              {/* Clean Badge Pill (No Dots) */}
              <span className="text-[11px] font-semibold text-orange-900 bg-orange-100/70 group-hover:bg-orange-100 group-hover:text-orange-950 border border-orange-200/60 px-3.5 py-1 rounded-full font-body shadow-2xs transition-colors">
                {badge}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300 font-heading mb-2.5">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-600 font-normal font-body leading-relaxed">
              {description}
            </p>
          </div>

          {/* Front Bottom Action Area (Flip Hint) */}
          <div className="relative z-10 pt-4 border-t border-slate-200/60 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 group-hover:text-orange-600 transition-colors duration-300 font-body flex items-center gap-1.5">
              <RotateCw className="w-3.5 h-3.5 text-orange-500 transition-transform duration-500 group-hover:rotate-180" />
              Hover to Flip & Reveal
            </span>

            {/* Sleek Animated Circle Arrow Button */}
            <div className="w-8 h-8 rounded-full bg-slate-100/90 border border-slate-200/80 group-hover:border-orange-500/30 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 text-slate-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* ========================================================
            BACK FACE OF THE CARD (Revealed on 3D Rotation)
            ======================================================== */}
        <div className="flip-card-back glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between border-2 border-orange-400/50 bg-white/95 shadow-[0_25px_50px_-12px_rgba(255,107,0,0.22)]">
          {/* Ambient Warm Gradient Accent on the Back */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-orange-200/50 via-rose-200/25 to-transparent rounded-bl-full pointer-events-none" />

          {/* Back Top Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-[11px] font-bold text-orange-900 bg-orange-100/90 border border-orange-300/80 px-3 py-0.5 rounded-full font-body uppercase tracking-wider">
                {backBadge || 'Key Highlights'}
              </span>

              <span className="text-[11px] font-semibold text-slate-500 font-body flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-orange-500" />
                Revealed
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-3">
              {backTitle || title}
            </h4>

            {/* Revealed 4 Highlight Bullets */}
            <div className="space-y-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium font-body leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Back Bottom CTA Button */}
          <div className="relative z-10 pt-4 border-t border-slate-200/70">
            <Link
              href={href}
              onClick={(e) => e.stopPropagation()}
              className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-orange-500 via-rose-600 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold text-xs sm:text-sm font-body flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(255,107,0,0.35)] hover:shadow-[0_6px_22px_rgba(255,107,0,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
