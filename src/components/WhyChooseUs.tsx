'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  HeartHandshake, 
  RotateCw,
  Sparkles,
  ArrowRight,
  LucideIcon 
} from 'lucide-react';
import { whyChooseUsData, WhyChooseUsItem } from '@/data/whyChooseUs';

const iconMap: Record<string, LucideIcon> = {
  Users,
  Layers,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  HeartHandshake,
};

const itemGuarantees: Record<string, string[]> = {
  'experienced-team': [
    'Direct collaboration with senior engineers',
    'Strict type-safety & automated test coverage',
    'Zero offshore subcontractor pass-throughs',
  ],
  'modern-stack': [
    'Next.js 16, React 19, TypeScript & Flutter',
    'Sub-second load times & 60 FPS mobile UI',
    'Clean, maintainable domain architectures',
  ],
  'quality-focused': [
    'Automated end-to-end regression testing',
    'Continuous security & dependency scanning',
    'Rigorous peer-reviewed PR workflows',
  ],
  'scalable-architecture': [
    'Multi-region elastic cloud deployments',
    'Horizontal database sharding & caching',
    'Resilient microservices & serverless pipelines',
  ],
  'reliable-support': [
    'Guaranteed 1-hour critical response SLAs',
    '24/7 automated infrastructure monitoring',
    'Proactive security patches & dependency updates',
  ],
  'client-centered': [
    'Transparent agile sprint ceremonies & demos',
    'Direct Slack & GitHub repository access',
    'Predictable delivery milestones & budgets',
  ],
};

function WhyChooseUsFlipCard({ item, idx }: { item: WhyChooseUsItem; idx: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = iconMap[item.iconName] || Users;
  const guarantees = itemGuarantees[item.id] || [
    'Enterprise-standard architecture',
    'Dedicated engineering oversight',
    'Continuous quality assurance',
  ];

  return (
    <div
      className="flip-card-wrapper h-[380px] sm:h-[400px] w-full select-none group"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        {/* ========================================================
            FRONT FACE OF THE WHY CHOOSE US CARD
            ======================================================== */}
        <div className="flip-card-front glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between border border-white/95 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.06)] group-hover:border-orange-300/70 transition-colors duration-500 cursor-pointer">
          <div>
            {/* Top Bar with Icon & Advantage Number */}
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-600 group-hover:text-white group-hover:border-transparent group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xs font-bold font-stat text-slate-400 group-hover:text-orange-600 transition-colors duration-300">
                0{idx + 1}
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-orange-600 transition-colors duration-300 font-heading">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal font-body">
              {item.description}
            </p>
          </div>

          {/* Metric pill & Flip hint */}
          <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-orange-600 transition-colors">
              <RotateCw className="w-3.5 h-3.5 text-orange-500 transition-transform duration-500 group-hover:rotate-180" />
              Hover to Flip
            </div>
            <span className="text-xs font-black font-stat text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 tracking-tight">
              {item.metric}
            </span>
          </div>
        </div>

        {/* ========================================================
            BACK FACE OF THE WHY CHOOSE US CARD (Revealed Guarantees)
            ======================================================== */}
        <div className="flip-card-back glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between border-2 border-orange-400/50 bg-white/95 shadow-[0_25px_50px_-12px_rgba(255,107,0,0.22)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200/50 via-rose-200/25 to-transparent rounded-bl-full pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-[11px] font-bold text-orange-900 bg-orange-100/90 border border-orange-300/80 px-3 py-0.5 rounded-full font-body uppercase tracking-wider">
                Engineering Standard
              </span>
              <span className="text-[11px] font-semibold text-slate-500 font-body flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-orange-500" />
                Guaranteed
              </span>
            </div>

            <h4 className="text-base font-bold text-slate-900 font-heading mb-3">
              {item.title}
            </h4>

            {/* 3 Guarantees */}
            <div className="space-y-2.5">
              {guarantees.map((g, gIdx) => (
                <div key={gIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium font-body leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>{g}</span>
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
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Background Ambient Blooms */}
      <div className="absolute top-1/2 left-1/3 w-[38rem] h-[38rem] bg-rose-200/25 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Why Choose Shree Tech</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            Engineering Rigor. Transparent Communication. Measurable Outcomes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed font-body">
            We operate with the standards of an elite in-house engineering team. Here is how our engineering
            principles translate into clear business advantages for our clients.
          </p>
        </div>

        {/* 6 Advantages in 3D Flip Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUsData.map((item, idx) => (
            <WhyChooseUsFlipCard key={item.id} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
