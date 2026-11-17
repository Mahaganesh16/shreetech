'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { testimonialsData, Testimonial } from '@/data/testimonials';
import { Star, Quote, RotateCw, Sparkles, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialImpactMap: Record<string, { scope: string; stack: string; outcome: string }> = {
  '1': {
    scope: 'Institutional Real-Time Trading Platform',
    stack: 'Next.js 16, TypeScript, WebSockets, Redis',
    outcome: '100% on-time delivery with zero latency streaming',
  },
  '2': {
    scope: 'HIPAA-Compliant Patient Portal & EHR',
    stack: 'React, Node.js, PostgreSQL, AWS GovCloud',
    outcome: '99.99% availability & verified clinical security audits',
  },
  '3': {
    scope: 'Cross-Platform Fleet Logistics & Dispatch Engine',
    stack: 'Flutter, Dart, SQLite Offline Sync, Firebase',
    outcome: '4,500+ daily drivers with zero data sync loss',
  },
  '4': {
    scope: 'Multi-Cloud Kubernetes & IaC Orchestration',
    stack: 'Terraform, Kubernetes, Docker, AWS & Azure',
    outcome: '99.999% uptime with automated rolling deploys',
  },
};

function TestimonialFlipCard({ testimonial }: { testimonial: Testimonial }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const impact = testimonialImpactMap[testimonial.id] || {
    scope: 'Enterprise Software Engineering',
    stack: 'Modern Full-Stack Architecture',
    outcome: 'Sub-second performance & guaranteed uptime',
  };

  return (
    <div
      className="w-[360px] sm:w-[440px] h-[330px] sm:h-[350px] shrink-0 flip-card-wrapper group cursor-pointer select-none"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        {/* ========================================================
            FRONT FACE OF TESTIMONIAL CARD
            ======================================================== */}
        <div className="flip-card-front glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between border border-white/95 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.06)] group-hover:border-orange-300/70 transition-colors">
          <div>
            {/* Top Bar: Quote Icon & 5 Stars */}
            <div className="flex items-center justify-between mb-4">
              <Quote className="w-10 h-10 text-orange-500/25 group-hover:text-orange-500/40 group-hover:scale-105 transition-all duration-300" />
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Review Quote */}
            <p className="text-xs sm:text-sm text-slate-700 font-normal font-body leading-relaxed line-clamp-4 italic">
              &ldquo;{testimonial.content}&rdquo;
            </p>
          </div>

          {/* Client Bio & Flip Hint */}
          <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-11 h-11 rounded-xl p-[2px] bg-gradient-to-tr from-orange-400 via-rose-500 to-purple-500 shadow-sm shrink-0">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-full h-full rounded-[10px] object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-slate-900 font-heading truncate">
                  {testimonial.name}
                </div>
                <div className="text-[11px] text-slate-500 font-medium font-body truncate">
                  {testimonial.designation}, <span className="text-orange-600 font-semibold">{testimonial.company}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 group-hover:text-orange-600 transition-colors shrink-0 pl-2">
              <RotateCw className="w-3 h-3 text-orange-500 group-hover:rotate-180 transition-transform duration-500" />
              <span>Flip</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            BACK FACE OF TESTIMONIAL CARD (Reveals Project Scope & Tech)
            ======================================================== */}
        <div className="flip-card-back glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between border-2 border-orange-400/50 bg-white/95 shadow-[0_25px_50px_-12px_rgba(255,107,0,0.22)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200/50 via-rose-200/25 to-transparent rounded-bl-full pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold text-orange-900 bg-orange-100/90 border border-orange-300/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-body">
                Verified Client Review
              </span>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 font-body">
                <Sparkles className="w-3 h-3 text-orange-500" />
                5.0 Rating
              </div>
            </div>

            <h4 className="text-sm font-bold text-slate-900 font-heading mb-1">
              {testimonial.company}
            </h4>
            <div className="text-[11px] text-slate-500 font-body mb-3">
              Client Contact: {testimonial.name} ({testimonial.designation})
            </div>

            {/* Scope & Outcome details */}
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs text-slate-700 font-medium font-body leading-snug">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span><strong>Scope:</strong> {impact.scope}</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-700 font-medium font-body leading-snug">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span><strong>Tech:</strong> {impact.stack}</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-700 font-medium font-body leading-snug">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span><strong>Outcome:</strong> {impact.outcome}</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-3 border-t border-slate-200/70">
            <Link
              href="/contact"
              onClick={(e) => e.stopPropagation()}
              className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-orange-500 via-rose-600 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold text-xs font-body flex items-center justify-center gap-1.5 shadow-[0_4px_16px_rgba(255,107,0,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Repeating set for continuous seamless loop
  const marqueeTestimonials = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ];

  // Continuous smooth auto-drift loop
  useEffect(() => {
    let animId: number;

    const step = () => {
      const el = scrollRef.current;
      if (el && !isHovered && !isInteracting) {
        el.scrollLeft += 0.85; // smooth 60 FPS drift
        // If scrolled past half the duplicated width, wrap around seamlessly
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isHovered, isInteracting]);

  // Smooth scroll nudge on button click or arrow key press
  const handleScrollNudge = useCallback((direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    // Temporarily pause auto-drift during manual smooth transition
    setIsInteracting(true);
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 850);

    const cardStep = el.clientWidth < 640 ? 340 : 470;

    if (direction === 'left') {
      if (el.scrollLeft <= 50) {
        el.scrollLeft += el.scrollWidth / 2;
      }
      el.scrollBy({ left: -cardStep, behavior: 'smooth' });
    } else {
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft -= el.scrollWidth / 2;
      }
      el.scrollBy({ left: cardStep, behavior: 'smooth' });
    }
  }, []);

  // Keyboard navigation for Left and Right Arrow Keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't hijack if user is typing in form inputs or textareas
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleScrollNudge('left');
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleScrollNudge('right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleScrollNudge]);

  return (
    <section id="testimonials" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Background Ambient Blooms */}
      <div className="absolute top-1/2 left-1/4 w-[38rem] h-[38rem] bg-orange-200/25 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
            Trusted by Technology Leaders
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal font-body">
            Read what engineering and product executives say about partnering with Shree Tech.
          </p>
        </div>

        {/* Continuous Auto-Scrolling Testimonials Track with Left/Right Arrow Navigation */}
        <div
          className="relative w-full overflow-hidden py-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left & Right Soft Horizon Fade Masks */}
          <div className="pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/85 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#faf9f6] via-[#faf9f6]/85 to-transparent z-20" />

          {/* Smooth Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex w-full overflow-x-auto no-scrollbar gap-5 sm:gap-7 select-none scroll-smooth py-2 px-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {marqueeTestimonials.map((testimonial, idx) => (
              <TestimonialFlipCard
                key={`${testimonial.id}-${idx}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>

        {/* Controls: Left & Right Buttons */}
        <div className="mt-6 flex items-center justify-end">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleScrollNudge('left')}
              aria-label="Previous testimonial (Left Arrow key)"
              className="glass-btn-secondary p-3 rounded-2xl text-slate-700 hover:text-slate-950 hover:border-orange-300/80 active:scale-95 transition-all cursor-pointer shadow-sm"
              title="Previous (Left Arrow key)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScrollNudge('right')}
              aria-label="Next testimonial (Right Arrow key)"
              className="glass-btn-secondary p-3 rounded-2xl text-slate-700 hover:text-slate-950 hover:border-orange-300/80 active:scale-95 transition-all cursor-pointer shadow-sm"
              title="Next (Right Arrow key)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
