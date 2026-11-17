'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useInView } from 'framer-motion';
import { CheckCircle2, ArrowRight, RotateCw, Sparkles } from 'lucide-react';

interface StatProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
  detail: string;
}

function StatCounter({ value, suffix = '', label, sublabel, detail }: StatProps) {
  const [count, setCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const totalFrames = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(value * (1 - Math.pow(1 - progress, 3)));
      setCount(current);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(value);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="flip-card-wrapper h-36 sm:h-40 w-full select-none group cursor-pointer"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        {/* ========================================================
            FRONT FACE OF THE STAT CARD
            ======================================================== */}
        <div className="flip-card-front glass-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between border border-white/95 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.06)] group-hover:border-orange-300/70 transition-colors">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-stat group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-rose-600 transition-all duration-300">
              {count}{suffix}
            </div>
            <div className="text-sm font-bold text-slate-800 mt-1">{label}</div>
            <div className="text-xs text-slate-500 mt-0.5">{sublabel}</div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 group-hover:text-orange-600 transition-colors pt-2 border-t border-slate-200/50">
            <span>Flip for detail</span>
            <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500 text-orange-500" />
          </div>
        </div>

        {/* ========================================================
            BACK FACE OF THE STAT CARD (Revealed Details)
            ======================================================== */}
        <div className="flip-card-back glass-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between border-2 border-orange-400/50 bg-white/95 shadow-[0_25px_50px_-12px_rgba(255,107,0,0.2)]">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-orange-900 bg-orange-100/90 border border-orange-300/80 px-2 py-0.5 rounded-full uppercase tracking-wider font-body">
                Verified Metric
              </span>
              <Sparkles className="w-3 h-3 text-orange-500" />
            </div>
            <div className="text-xs font-bold text-slate-900 font-heading mt-1">{label}</div>
            <p className="text-[11px] text-slate-600 font-normal leading-relaxed mt-1 font-body">
              {detail}
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-orange-600 font-semibold pt-1 border-t border-slate-200/60">
            <CheckCircle2 className="w-3 h-3 shrink-0" />
            <span>Enterprise Benchmark</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Background Ambient Blooms */}
      <div className="absolute top-1/2 -left-40 w-[36rem] h-[36rem] bg-orange-200/35 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[34rem] h-[34rem] bg-rose-200/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Description, Bullet Achievements (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-800">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>About Shree Tech</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight font-heading">
              A Dedicated Software Engineering Partner for Growing Businesses
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal font-body">
              Shree Tech is an independent software development and consulting agency. We partner with
              fast-growing businesses, enterprise technology leaders, and modern startups to design, build,
              and maintain mission-critical software solutions with clean, frosted glassmorphism UI.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed font-normal font-body">
              Unlike traditional agencies that pass work to inexperienced subcontractors, our core engineering
              team directly designs your architecture, writes strict type-safe code, and provides continuous
              deployment visibility.
            </p>

            {/* Core Achievements in Frosted Glass Container */}
            <div className="glass-panel p-6 rounded-3xl space-y-3.5">
              {[
                'Full-stack engineering capabilities from concept through multi-cloud deployment',
                'Strict adherence to Domain-Driven Design, clean architecture, and automated testing',
                'Transparent agile communication with direct access to senior developers',
                'Guaranteed response SLAs and dedicated ongoing maintenance support'
              ].map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium font-body">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-rose-800 transition-colors group cursor-pointer font-body"
              >
                <span>Read More About Our Engineering Practices</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Workplace / Engineering Team Image & Glass Statistics (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Real Workplace Image with Frosted Glass Frame */}
            <div className="relative rounded-3xl overflow-hidden glass-card glass-card-hover p-2.5 shadow-2xl group">
              <div className="rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                  alt="Shree Tech software engineering team collaborating on architecture"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-panel flex items-center justify-between text-xs text-slate-800">
                  <span className="font-bold text-slate-900 font-heading">Shree Tech Engineering Labs</span>
                  <span className="text-slate-600 font-medium font-body">Sprint Planning</span>
                </div>
              </div>
            </div>

            {/* 4 Statistics in 3D Flip Frosted Glass Cards with Count-Up */}
            <div className="grid grid-cols-2 gap-4">
              <StatCounter
                value={150}
                suffix="+"
                label="Delivered Projects"
                sublabel="Web, mobile & cloud SaaS"
                detail="Delivered across 12 countries for FinTech, MedTech, and high-growth enterprise SaaS."
              />
              <StatCounter
                value={99}
                suffix="%"
                label="Client Retention"
                sublabel="Long-term technology partners"
                detail="Sustained multi-year engineering partnerships with predictable ongoing delivery SLAs."
              />
              <StatCounter
                value={10}
                suffix="+"
                label="Years Experience"
                sublabel="Established engineering record"
                detail="A decade of architecting distributed systems, cloud migrations, and product launches."
              />
              <StatCounter
                value={45}
                suffix="+"
                label="Senior Engineers"
                sublabel="Specialized across full stack"
                detail="Elite technical directors and full-stack devs specialized in React, Node, Python & Cloud."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
