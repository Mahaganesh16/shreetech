'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import {
  ReactLogo,
  NextLogo,
  JavaScriptLogo,
  NodeLogo,
  PythonLogo,
  AwsLogo,
  FlutterLogo,
  FirebaseLogo,
} from '@/components/TechLogos';

const orbitingTools = [
  { name: 'React', icon: ReactLogo },
  { name: 'Next.js', icon: NextLogo },
  { name: 'JavaScript', icon: JavaScriptLogo },
  { name: 'Node.js', icon: NodeLogo },
  { name: 'Python', icon: PythonLogo },
  { name: 'AWS Cloud', icon: AwsLogo },
  { name: 'Flutter', icon: FlutterLogo },
  { name: 'Firebase', icon: FirebaseLogo },
];

const rotatingPhrases = [
  'Move Businesses Forward.',
  'Move Design Forward.',
];

const fallingLightFeathers = [
  { x: '32%', delay: 0, duration: 4.2, width: 8, height: 16, initialRotate: -15 },
  { x: '46%', delay: 1.4, duration: 4.6, width: 10, height: 20, initialRotate: 20 },
  { x: '60%', delay: 2.6, duration: 3.8, width: 7, height: 14, initialRotate: -25 },
  { x: '24%', delay: 2.0, duration: 4.8, width: 9, height: 18, initialRotate: 15 },
  { x: '68%', delay: 0.8, duration: 4.4, width: 8, height: 16, initialRotate: -10 },
  { x: '52%', delay: 3.3, duration: 4.0, width: 9, height: 18, initialRotate: 25 },
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden flex items-center"
    >
      {/* Ambient Lighting Blooms for Glass Layers (Harmonized with Logo Colors) */}
      <div className="absolute top-1/4 -left-32 w-[38rem] h-[38rem] bg-orange-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[42rem] h-[42rem] bg-rose-200/35 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[34rem] h-[34rem] bg-purple-200/35 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Hero Headline & Action Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline & Action Buttons (7 Cols on desktop for generous text width) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Translucent Glass Pill Badge */}
            <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-slate-700 text-xs font-semibold tracking-wide mb-6">
              <Sparkles className="w-3.5 h-3.5 text-orange-600 shrink-0" />
              <span>Enterprise IT & Modern Digital Experiences</span>
            </div>

            {/* Headline with Balanced 2-Line Architecture for Laptop & Desktop */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.35rem] xl:text-[2.9rem] 2xl:text-[3.25rem] font-black tracking-tight text-slate-900 leading-[1.16]">
              <span className="block lg:whitespace-nowrap">
                Building Digital Solutions That
              </span>
              <span className="block mt-1 sm:mt-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingPhrases[phraseIndex]}
                    initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-600 to-purple-600"
                  >
                    {rotatingPhrases[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              We help businesses transform bold ideas into scalable digital products through innovative
              software engineering, modern cloud technologies, and thoughtful glassmorphism design.
            </p>

            {/* Dual Glass Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href="/services"
                className="glass-btn-primary inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm cursor-pointer shadow-lg w-full sm:w-auto"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="glass-btn-secondary inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm cursor-pointer w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-orange-600" />
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual with Circular Round Orbiting Tools & Phoenix Bird (5 Cols, shifted slightly right) */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] lg:translate-x-2 xl:translate-x-4">
            {/* Shared Single Center Anchor */}
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[390px] lg:h-[390px] xl:w-[420px] xl:h-[420px] flex items-center justify-center">
              {/* Ambient warm glowing power core behind visual */}
              <motion.div
                animate={{
                  scale: [0.95, 1.05, 0.95],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -inset-8 bg-gradient-to-tr from-orange-400/30 via-rose-400/25 to-purple-400/20 rounded-full blur-3xl pointer-events-none"
              />

              {/* 1. Pulsing Outer Wave Ring along the Round Path */}
              <motion.div
                animate={{
                  scale: [0.96, 1.04, 0.96],
                  opacity: [0.3, 0.65, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-full border border-orange-400/30 shadow-[0_0_25px_rgba(255,107,0,0.12)] pointer-events-none"
              />

              {/* 2. Reverse Rotating Dashed Orbit Track (Counter-Rotation Parallax) */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 36,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-orange-400/35 pointer-events-none"
              />

              {/* 3. Inner Subtle Concentric Ring */}
              <div className="absolute inset-5 rounded-full border border-slate-300/40 pointer-events-none" />

              {/* 4. Animated Light-Sweep Radar Beam along the Round Track */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full pointer-events-none opacity-60"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(255, 107, 0, 0.2) 320deg, rgba(244, 63, 94, 0.75) 360deg)',
                  borderRadius: '50%',
                  WebkitMask:
                    'radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))',
                  mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))',
                }}
              />

              {/* 5. Fast Traveling Glowing Comets / Energy Light Pulses on the Round Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full pointer-events-none"
              >
                {/* Primary Glowing Energy Comet Head */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-orange-400 to-rose-500 shadow-[0_0_16px_5px_rgba(255,107,0,0.85)] animate-pulse" />
                  <div className="absolute w-12 h-1.5 rounded-full bg-gradient-to-l from-orange-500/80 to-transparent blur-[1.5px] -left-10" />
                </div>

                {/* Secondary Complementary Comet Head (180° Opposite) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-rose-400 to-purple-500 shadow-[0_0_14px_4px_rgba(244,63,94,0.75)] animate-pulse" />
                  <div className="absolute w-9 h-1 rounded-full bg-gradient-to-l from-purple-500/70 to-transparent blur-[1.5px] -left-7" />
                </div>
              </motion.div>

              {/* 6. Orbiting Rotating Container (Smooth 360° Circular Orbit for Tech Badges) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 pointer-events-none"
              >
                {orbitingTools.map((tool, index) => {
                  const angle = (index / orbitingTools.length) * (2 * Math.PI);
                  const xPercent = 50 + 50 * Math.cos(angle);
                  const yPercent = 50 + 50 * Math.sin(angle);
                  const IconComponent = tool.icon;

                  return (
                    <div
                      key={tool.name}
                      style={{
                        left: `${xPercent}%`,
                        top: `${yPercent}%`,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                    >
                      {/* Counter-rotate: ensures all tool logos remain upright throughout the circular path */}
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 22,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        whileHover={{ scale: 1.25, rotate: -360 }}
                        className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_6px_18px_rgba(15,23,42,0.1),inset_0_1px_2px_rgba(255,255,255,0.95)] flex items-center justify-center p-2 cursor-pointer hover:border-orange-400/80 hover:shadow-[0_10px_25px_rgba(255,107,0,0.35)] transition-all"
                      >
                        {/* Subtle ambient pulse glow behind each tool badge */}
                        <span className="absolute -inset-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-400/20 to-rose-400/20 blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity" />

                        <IconComponent className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                        {/* Name badge tooltip on hover */}
                        <span className="absolute -bottom-7 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md pointer-events-none whitespace-nowrap shadow-md z-50">
                          {tool.name}
                        </span>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Central Stable Hub Visual: Centered Phoenix Bird with Light Falling across Wings & Body */}
              <div className="relative z-10 w-[74%] h-[74%] flex items-center justify-center pointer-events-none">
                {/* Subtle Warm Ambient Core behind Wings */}
                <motion.div
                  animate={{
                    opacity: [0.35, 0.6, 0.35],
                    scale: [0.94, 1.06, 0.94],
                  }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-orange-400/25 via-rose-400/20 to-purple-400/15 blur-2xl pointer-events-none"
                />

                {/* Floating Phoenix Container (Gentle Wing Hover Levitation) */}
                <motion.div
                  animate={{
                    y: [-4, 4, -4],
                    rotate: [-0.6, 0.6, -0.6],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative w-full h-full flex items-center justify-center pointer-events-none"
                >
                  {/* Phoenix Bird Image */}
                  <Image
                    src="/images/phoenix-hero.png"
                    alt="ShreeTech Phoenix Bird Icon"
                    width={1024}
                    height={1024}
                    priority
                    unoptimized
                    className="w-full h-full object-contain select-none pointer-events-auto filter drop-shadow-[0_20px_45px_rgba(255,107,0,0.35)] transition-transform duration-300 hover:scale-105"
                  />

                  {/* 1. Luminous Light Sweep Layer: Masked strictly to the Bird's Wings and Body */}
                  <div
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                    style={{
                      WebkitMaskImage: 'url(/images/phoenix-hero.png)',
                      maskImage: 'url(/images/phoenix-hero.png)',
                      WebkitMaskSize: 'contain',
                      maskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskPosition: 'center',
                    }}
                  >
                    {/* Diagonal cascading light sheen falling from wings across the body */}
                    <motion.div
                      animate={{
                        x: ['-140%', '160%'],
                        y: ['-100%', '140%'],
                      }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        repeatDelay: 1.6,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="absolute inset-0 w-[220%] h-[220%] -top-[60%] -left-[60%] pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.4) 47%, rgba(255, 220, 150, 0.85) 50%, rgba(255, 255, 255, 0.45) 53%, transparent 60%)',
                        mixBlendMode: 'screen',
                      }}
                    />

                    {/* Vertical ethereal light cascade falling through the body */}
                    <motion.div
                      animate={{
                        y: ['-120%', '130%'],
                        opacity: [0, 0.7, 0.9, 0],
                      }}
                      transition={{
                        duration: 4.6,
                        repeat: Infinity,
                        repeatDelay: 2.2,
                        delay: 1.2,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(180deg, transparent 0%, rgba(255, 230, 160, 0.4) 40%, rgba(255, 180, 70, 0.6) 50%, transparent 70%)',
                        mixBlendMode: 'screen',
                      }}
                    />
                  </div>

                  {/* 2. Delicate Glowing Light Feathers / Embers falling down across the Bird's Wings & Body */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {fallingLightFeathers.map((f, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: ['-8%', '112%'],
                          x: [0, (i % 2 === 0 ? 1 : -1) * 14, (i % 2 === 0 ? -6 : 8), 0],
                          rotate: [f.initialRotate, f.initialRotate + 30, f.initialRotate - 20],
                          opacity: [0, 0.85, 0.95, 0],
                          scale: [0.65, 1.1, 0.6],
                        }}
                        transition={{
                          duration: f.duration,
                          repeat: Infinity,
                          delay: f.delay,
                          ease: 'easeInOut',
                        }}
                        style={{
                          left: f.x,
                          top: '4%',
                          width: `${f.width}px`,
                          height: `${f.height}px`,
                        }}
                        className="absolute flex items-center justify-center filter drop-shadow-[0_0_6px_rgba(255,180,60,0.75)]"
                      >
                        <svg
                          viewBox="0 0 14 26"
                          className="w-full h-full"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 0C11.5 5.5 13.5 13.5 11 20C9.5 24 7 26 7 26C7 26 4.5 24 3 20C0.5 13.5 2.5 5.5 7 0Z"
                            fill={`url(#featherGlow-${i})`}
                            opacity="0.9"
                          />
                          <defs>
                            <linearGradient
                              id={`featherGlow-${i}`}
                              x1="7"
                              y1="0"
                              x2="7"
                              y2="26"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FFF4C2" />
                              <stop offset="0.45" stopColor="#FF9838" />
                              <stop offset="1" stopColor="#E02E68" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
