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
        <div className="flip-card-front glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between border border-[#F1E6EE] shadow-sm group-hover:border-[#C01858] transition-colors duration-500 cursor-pointer">
          {/* Dynamic Cursor Spotlight (Follows mouse across front) */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 107, 0, 0.08), transparent 75%)`,
            }}
          />

          {/* Front Top Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5">
              {/* Animated Icon Container with Gradient Border */}
              <div className="relative">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${gradient} p-0.5 shadow-xs group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300`}>
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-[#FF6B00] shadow-inner">
                    <Icon className="w-5 h-5 text-[#FF6B00] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
              </div>

              {/* Clean Badge Pill (Purple tint #F5F0FF + #8B5CF6 text) */}
              <span className="text-[11px] font-semibold text-[#8B5CF6] bg-[#F5F0FF] border border-[#F1E6EE] px-3.5 py-1 rounded-full font-body shadow-xs transition-colors">
                {badge}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#C01858] transition-colors duration-300 font-heading mb-2.5">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#475569] font-normal font-body leading-relaxed">
              {description}
            </p>
          </div>

          {/* Front Bottom Action Area (Flip Hint) */}
          <div className="relative z-10 pt-4 border-t border-[#F1E6EE] flex items-center justify-between">
            <span className="text-xs font-semibold text-[#475569] group-hover:text-[#C01858] transition-colors duration-300 font-body flex items-center gap-1.5">
              <RotateCw className="w-3.5 h-3.5 text-[#FF6B00] transition-transform duration-500 group-hover:rotate-180" />
              Hover to Flip & Reveal
            </span>

            {/* Sleek Animated Circle Arrow Button */}
            <div className="w-8 h-8 rounded-full bg-[#F5F0FF] border border-[#F1E6EE] group-hover:border-[#C01858] group-hover:bg-[#C01858] text-[#FF6B00] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* ========================================================
            BACK FACE OF THE CARD (Revealed on 3D Rotation)
            ======================================================== */}
        <div className="flip-card-back glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between border-2 border-[#C01858] bg-white shadow-xl">
          {/* Ambient Warm Gradient Accent on the Back */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#FFF4EA] via-[#FFF0F5] to-transparent rounded-bl-full pointer-events-none" />

          {/* Back Top Content */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-[11px] font-bold text-[#8B5CF6] bg-[#F5F0FF] border border-[#F1E6EE] px-3 py-0.5 rounded-full font-body uppercase tracking-wider">
                {backBadge || 'Key Highlights'}
              </span>

              <span className="text-[11px] font-semibold text-[#8B5CF6] font-body flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#8B5CF6]" />
                Revealed
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading mb-3">
              {backTitle || title}
            </h4>

            {/* Revealed 4 Highlight Bullets */}
            <div className="space-y-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#475569] font-medium font-body leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Back Bottom CTA Button */}
          <div className="relative z-10 pt-4 border-t border-[#F1E6EE]">
            <Link
              href={href}
              onClick={(e) => e.stopPropagation()}
              className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-[#FF6B00] via-[#C01858] to-[#8B5CF6] hover:opacity-95 text-white font-semibold text-xs sm:text-sm font-body flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
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
