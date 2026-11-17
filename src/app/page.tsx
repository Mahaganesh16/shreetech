'use client';

import { 
  Users, 
  Cpu, 
  Code2, 
  Briefcase, 
  Mail, 
  Sparkles,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';
import Hero from '@/components/Hero';
import DirectoryCard from '@/components/DirectoryCard';

export default function Home() {
  const sections = [
    {
      title: 'About Shree Tech',
      description: 'Dedicated software engineering team, enterprise delivery standards, and client-first culture.',
      href: '/about',
      badge: 'Company Profile',
      icon: Users,
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      title: 'Engineering Services',
      description: 'Custom software development, high-scale web platforms, mobile apps, and cloud architectures.',
      href: '/services',
      badge: 'Core Capabilities',
      icon: Code2,
      gradient: 'from-orange-600 to-rose-600',
    },
    {
      title: 'Technology Stack',
      description: 'Modern, battle-tested frameworks across React, Node, Python, AWS, and native mobile compilation.',
      href: '/technologies',
      badge: 'Stack & Tools',
      icon: Cpu,
      gradient: 'from-rose-500 to-purple-600',
    },
    {
      title: 'Featured Projects',
      description: 'Case studies of enterprise SaaS applications, web portals, and mobile systems built for scale.',
      href: '/projects',
      badge: 'Client Success',
      icon: Briefcase,
      gradient: 'from-purple-600 to-indigo-600',
    },
    {
      title: 'Contact & Consultation',
      description: 'Discuss your technical roadmap, get detailed project estimates, and start your engineering partnership.',
      href: '/contact',
      badge: 'Start a Project',
      icon: Mail,
      gradient: 'from-orange-500 to-rose-500',
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section: Headline, Animated Stack, 2 CTAs */}
      <Hero />

      {/* 2. Multi-Page Navigation Directory: Clean, Concise Overview Cards */}
      <section className="relative py-20 sm:py-28 bg-transparent overflow-hidden border-t border-slate-200/60">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-800 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Explore Shree Tech</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
              Engineering Digital Excellence Across Every Dimension
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed font-body">
              Browse our dedicated sections to learn about our engineering team, explore our services,
              review our battle-tested tech stack, and see our work.
            </p>
          </div>

          {/* Directory Cards Grid with High-Tech Hover Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((sec) => (
              <DirectoryCard key={sec.title} {...sec} />
            ))}
          </div>

          {/* Trust Highlights */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-200/60">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-orange-100/80 text-orange-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 font-heading">Enterprise Security</div>
                <div className="text-xs text-slate-500 font-body">ISO & GDPR compliant practices</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-rose-100/80 text-rose-600 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 font-heading">High-Speed Execution</div>
                <div className="text-xs text-slate-500 font-body">Agile two-week sprint delivery</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 font-heading">Global Collaboration</div>
                <div className="text-xs text-slate-500 font-body">Seamless remote engineering teams</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
