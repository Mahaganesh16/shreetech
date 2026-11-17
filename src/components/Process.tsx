'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { processSteps, ProcessStep } from '@/data/process';
import { CheckCircle2, RotateCw, Sparkles, ArrowRight } from 'lucide-react';

function ProcessFlipCard({ step }: { step: ProcessStep }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card-wrapper h-[380px] sm:h-[400px] w-full select-none group"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        {/* ========================================================
            FRONT FACE OF THE PROCESS CARD
            ======================================================== */}
        <div className="flip-card-front glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between border border-white/95 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.06)] group-hover:border-orange-300/70 transition-colors duration-500 cursor-pointer">
          <div>
            {/* Step Number & Header */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 font-stat tracking-tight group-hover:scale-105 transition-transform duration-300 inline-block">
                {step.number}
              </span>
              <span className="text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full text-slate-700 bg-orange-100/70 border border-orange-200/60 font-bold group-hover:bg-orange-100 group-hover:text-orange-950 transition-colors">
                Phase {step.number}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-orange-600 transition-colors duration-300 font-heading">
              {step.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal font-body">
              {step.description}
            </p>
          </div>

          {/* Bottom Flip Hint */}
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
            BACK FACE OF THE PROCESS CARD (Reveals Phase Deliverables)
            ======================================================== */}
        <div className="flip-card-back glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between border-2 border-orange-400/50 bg-white/95 shadow-[0_25px_50px_-12px_rgba(255,107,0,0.22)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200/50 via-rose-200/25 to-transparent rounded-bl-full pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-[11px] font-bold text-orange-900 bg-orange-100/90 border border-orange-300/80 px-3 py-0.5 rounded-full font-body uppercase tracking-wider">
                Phase {step.number} Scope
              </span>
              <span className="text-[11px] font-semibold text-slate-500 font-body flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-orange-500" />
                Artifacts
              </span>
            </div>

            <h4 className="text-base font-bold text-slate-900 font-heading mb-3">
              {step.title}
            </h4>

            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600 font-body">
                Key Deliverables
              </div>
              {step.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium font-body leading-snug">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
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
              <span>Start Phase {step.number}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Background Ambient Blooms */}
      <div className="absolute top-1/2 right-1/4 w-[38rem] h-[38rem] bg-orange-200/25 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Our Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            Our Development Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed font-body">
            A disciplined six-phase development lifecycle engineered to transition concepts into robust,
            maintainable, and production-tested software platforms.
          </p>
        </div>

        {/* 6 Step Process in 3D Flip Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <ProcessFlipCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
