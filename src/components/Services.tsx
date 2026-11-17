'use client';

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
  CheckCircle2,
  LucideIcon
} from 'lucide-react';
import { servicesData } from '@/data/services';

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
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Comprehensive Software Engineering & Technical Consulting
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We provide end-to-end technology services tailored to modern enterprise requirements. Explore
            our eight core service disciplines engineered with clean, frosted glassmorphism UI.
          </p>
        </div>

        {/* 8 Premium Frosted Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Code2;

            return (
              <div
                key={service.id}
                className="glass-card glass-card-hover p-7 rounded-3xl flex flex-col justify-between group"
              >
                <div>
                  {/* Frosted Icon Box with Logo Brand Colors */}
                  <div className="w-12 h-12 rounded-2xl bg-orange-50/80 border border-orange-100 flex items-center justify-center text-orange-600 mb-6 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-600 group-hover:text-white group-hover:border-transparent group-hover:scale-105 group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300 font-heading">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Bullet List */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 space-y-2">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-slate-700 group-hover:text-orange-600 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Discuss Requirement</span>
                  </Link>
                  <div className="w-8 h-8 rounded-full bg-slate-100/80 border border-slate-200/70 group-hover:border-orange-500/30 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 text-slate-600 group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_4px_12px_rgba(255,107,0,0.3)]">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
