'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  Smartphone, 
  Code2, 
  Layout, 
  ShoppingBag, 
  Cloud, 
  RefreshCw, 
  Cpu, 
  ArrowRight,
  RotateCw,
  CheckCircle2,
  Sparkles,
  LucideIcon
} from 'lucide-react';
import { servicesData, ServiceItem } from '@/data/services';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Code2,
  Layout,
  ShoppingBag,
  Cloud,
  RefreshCw,
  Cpu,
};

function ServiceFlipCard({ service, idx }: { service: ServiceItem; idx: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = iconMap[service.iconName] || Code2;

  return (
    <div
      className="flip-card-wrapper h-[380px] sm:h-[400px] w-full select-none group"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        {/* ========================================================
            FRONT FACE OF THE SERVICE CARD
            ======================================================== */}
        <div className="flip-card-front glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between border border-white/95 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.06)] group-hover:border-orange-300/70 transition-colors duration-500 cursor-pointer">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-orange-50/90 border border-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-600 group-hover:text-white group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xs font-bold font-stat text-slate-400 group-hover:text-orange-600 transition-colors">
                0{idx + 1}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300 font-heading mb-2.5">
              {service.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 group-hover:text-orange-600 transition-colors duration-300 font-body flex items-center gap-1.5">
              <RotateCw className="w-3.5 h-3.5 text-orange-500 transition-transform duration-500 group-hover:rotate-180" />
              Hover to Flip & Reveal
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-100/90 border border-slate-200/80 group-hover:border-orange-500/30 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 text-slate-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* ========================================================
            BACK FACE OF THE SERVICE CARD (Reveals Deliverables)
            ======================================================== */}
        <div className="flip-card-back glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between border-2 border-orange-400/50 bg-white/95 shadow-[0_25px_50px_-12px_rgba(255,107,0,0.22)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200/50 via-rose-200/25 to-transparent rounded-bl-full pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-[11px] font-bold text-orange-900 bg-orange-100/90 border border-orange-300/80 px-3 py-0.5 rounded-full font-body uppercase tracking-wider">
                Key Deliverables
              </span>
              <span className="text-[11px] font-semibold text-slate-500 font-body flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-orange-500" />
                Included Scope
              </span>
            </div>

            <h4 className="text-base font-bold text-slate-900 font-heading mb-3">
              {service.title}
            </h4>

            <div className="space-y-2">
              {service.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 pt-4 border-t border-slate-200/70">
            <Link
              href="/contact"
              onClick={(e) => e.stopPropagation()}
              className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-orange-500 via-rose-600 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold text-xs sm:text-sm font-body flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(255,107,0,0.35)] hover:shadow-[0_6px_22px_rgba(255,107,0,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Discuss Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Ambient Lighting Blooms for Glass Layers */}
      <div className="absolute top-1/3 -right-40 w-[38rem] h-[38rem] bg-orange-200/25 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-40 w-[38rem] h-[38rem] bg-rose-200/25 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            Comprehensive Software Engineering & Technical Consulting
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed font-body">
            We provide end-to-end technology services tailored to modern enterprise requirements. Explore
            our eight core service disciplines engineered with clean, frosted glassmorphism UI.
          </p>
        </div>

        {/* 8 Premium 3D Flip Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => (
            <ServiceFlipCard key={service.id} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
