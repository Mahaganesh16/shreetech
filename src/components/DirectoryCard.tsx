'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface DirectoryCardProps {
  title: string;
  description: string;
  href: string;
  badge: string;
  icon: LucideIcon;
  gradient: string;
}

export default function DirectoryCard({
  title,
  description,
  href,
  badge,
  icon: Icon,
  gradient,
}: DirectoryCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      href={href}
      onMouseMove={handleMouseMove}
      className="glass-card glass-card-hover p-7 rounded-3xl flex flex-col justify-between group select-none"
    >
      {/* 1. Dynamic Cursor Spotlight (Follows mouse across the glass card) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 107, 0, 0.12), transparent 75%)`,
        }}
      />

      {/* 2. Card Content Top */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          {/* Animated Icon Container with Smooth Lift */}
          <div className="relative">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${gradient} p-0.5 shadow-sm group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300`}>
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-slate-800 group-hover:bg-transparent group-hover:text-white transition-all duration-300 shadow-inner">
                <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
          </div>

          {/* Clean Badge Pill (No Dots) */}
          <span className="text-[11px] font-semibold text-orange-850 bg-orange-100/70 group-hover:bg-orange-100 group-hover:text-orange-950 border border-orange-200/60 group-hover:border-orange-300/80 px-3.5 py-1 rounded-full font-body transition-all duration-300 shadow-2xs">
            {badge}
          </span>
        </div>

        {/* Title with Smooth Hover Color Transition */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300 font-heading mb-2.5">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 font-normal font-body leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
          {description}
        </p>
      </div>

      {/* 3. Bottom Interactive Action Area (Clean, No Dots) */}
      <div className="relative z-10 pt-4 border-t border-slate-200/60 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-700 group-hover:text-orange-600 transition-colors duration-300 font-body">
          Visit Section
        </span>

        {/* Sleek Animated Circle Arrow Button */}
        <div className="w-8 h-8 rounded-full bg-slate-100/80 border border-slate-200/70 group-hover:border-orange-500/30 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 text-slate-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_4px_12px_rgba(255,107,0,0.3)]">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
}
