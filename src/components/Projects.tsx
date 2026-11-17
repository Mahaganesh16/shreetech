'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projectsData, Project } from '@/data/projects';
import { ArrowUpRight, X, CheckCircle2, RotateCw, Sparkles } from 'lucide-react';

function ProjectFlipCard({
  project,
  onOpenModal,
}: {
  project: Project;
  onOpenModal: (p: Project) => void;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isFeatured = project.layoutSpan === 'featured';

  return (
    <div
      className={`flip-card-wrapper h-[520px] sm:h-[540px] w-full select-none group ${
        isFeatured ? 'md:col-span-2' : 'col-span-1'
      }`}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        {/* ========================================================
            FRONT FACE OF THE PROJECT CARD
            ======================================================== */}
        <div className="flip-card-front glass-card rounded-3xl flex flex-col justify-between border border-white/95 shadow-[0_20px_45px_-10px_rgba(15,23,42,0.06)] group-hover:border-orange-300/70 transition-colors duration-500 overflow-hidden cursor-pointer">
          {/* Image preview */}
          <div className="relative h-60 sm:h-64 overflow-hidden shrink-0">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-transparent to-transparent opacity-80" />

            {/* Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span className="glass-pill px-3 py-1 rounded-xl text-xs font-semibold text-slate-800">
                {project.categoryLabel}
              </span>
              <span className="glass-pill text-xs font-stat font-semibold text-slate-700 px-2.5 py-1 rounded-xl">
                {project.year}
              </span>
            </div>

            {/* Metric pill */}
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl glass-panel text-right">
              <div className="text-[9px] text-slate-500 font-semibold uppercase tracking-wider">
                {project.metrics.label}
              </div>
              <div className="text-xs font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 font-stat tracking-tight">
                {project.metrics.value}
              </div>
            </div>
          </div>

          {/* Front content */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-orange-600 mb-1 font-body">{project.client}</div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300 font-heading mb-2">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal font-body leading-relaxed line-clamp-2">
                {project.summary}
              </p>

              {/* Technologies */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="glass-pill px-2.5 py-0.5 rounded-lg text-[11px] text-slate-700 font-medium font-body"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-[11px] text-slate-400 font-medium self-center">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Bottom Flip Hint */}
            <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 group-hover:text-orange-600 transition-colors duration-300 font-body flex items-center gap-1.5">
                <RotateCw className="w-3.5 h-3.5 text-orange-500 transition-transform duration-500 group-hover:rotate-180" />
                Hover to Flip Case Study
              </span>
              <div className="w-8 h-8 rounded-full bg-slate-100/90 border border-slate-200/80 group-hover:border-orange-500/30 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 text-slate-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            BACK FACE OF THE PROJECT CARD (Reveals Architecture & Metrics)
            ======================================================== */}
        <div className="flip-card-back glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between border-2 border-orange-400/50 bg-white/95 shadow-[0_25px_50px_-12px_rgba(255,107,0,0.22)]">
          <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-orange-200/50 via-rose-200/25 to-transparent rounded-bl-full pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-orange-900 bg-orange-100/90 border border-orange-300/80 px-3 py-0.5 rounded-full font-body uppercase tracking-wider">
                {project.categoryLabel}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 font-body flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-orange-500" />
                Case Highlights
              </span>
            </div>

            <div className="text-xs font-semibold text-orange-600 font-body">{project.client}</div>
            <h4 className="text-lg font-bold text-slate-900 font-heading mb-3">
              {project.title}
            </h4>

            {/* Impact Metric Banner */}
            <div className="p-3 rounded-xl bg-orange-50/80 border border-orange-200/70 mb-3 flex items-center justify-between">
              <span className="text-xs text-slate-600 font-medium font-body">{project.metrics.label}</span>
              <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 font-stat">
                {project.metrics.value}
              </span>
            </div>

            {/* Core highlights */}
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-xs text-slate-700 font-medium font-body leading-snug">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>Zero downtime rolling deployment architecture</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-700 font-medium font-body leading-snug">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>High-concurrency cloud scaling & sub-second response times</span>
              </div>
            </div>

            {/* Technologies list */}
            <div className="mt-3 pt-3 border-t border-slate-200/60">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-body mb-1.5">
                Technologies Stack
              </div>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="glass-pill px-2 py-0.5 rounded-md text-[10px] text-slate-700 font-medium font-body"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="relative z-10 pt-4 border-t border-slate-200/70">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(project);
              }}
              className="w-full py-2.5 px-4 rounded-2xl bg-gradient-to-r from-orange-500 via-rose-600 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold text-xs sm:text-sm font-body flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(255,107,0,0.35)] hover:shadow-[0_6px_22px_rgba(255,107,0,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>View Full Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Applications' },
    { id: 'enterprise', label: 'Enterprise SaaS' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'cloud', label: 'Cloud Infrastructure' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-transparent overflow-hidden">
      {/* Background Ambient Blooms */}
      <div className="absolute top-1/3 -right-32 w-[38rem] h-[38rem] bg-orange-200/25 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-[38rem] h-[38rem] bg-rose-200/25 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="glass-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-orange-800 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>Selected Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-heading">
              Featured Client Deployments
            </h2>
            <p className="mt-4 text-base text-slate-600 font-normal leading-relaxed font-body">
              Explore how our engineering teams design, build, and scale mission-critical digital systems
              across finance, healthcare, logistics, and global commerce.
            </p>
          </div>

          {/* Translucent Glass Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-2xl transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'glass-btn-primary shadow-md'
                    : 'glass-btn-secondary text-slate-700 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Flip Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectFlipCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Frosted Glass Case Study Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl glass-panel shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2.5 rounded-2xl bg-white/80 text-slate-600 hover:text-slate-900 hover:bg-white shadow-sm transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <span className="glass-pill px-3 py-1 rounded-xl text-xs font-semibold text-orange-800">
                {activeModalProject.categoryLabel}
              </span>
              <span className="text-xs text-slate-500 font-medium">Client: {activeModalProject.client}</span>
              <span className="text-xs text-slate-500 font-stat font-semibold">Year: {activeModalProject.year}</span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 mb-2 font-heading">{activeModalProject.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal font-body">{activeModalProject.summary}</p>

            <div className="mt-6 p-4 rounded-2xl glass-card flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-500 font-medium">Primary Impact Metric</div>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600 font-stat tracking-tight mt-0.5">
                  {activeModalProject.metrics.value}
                </div>
              </div>
              <div className="text-xs text-slate-600 font-semibold">{activeModalProject.metrics.label}</div>
            </div>

            <div className="mt-6 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-heading">
                Architectural Highlights
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 font-body">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>Sub-second response latencies verified under peak production load</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>Strict TypeScript type safety ensuring zero unhandled runtime exceptions</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>Automated CI/CD build and testing pipeline with zero-downtime rolling deploys</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-heading">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="glass-pill px-2.5 py-1 rounded-xl text-xs text-slate-700 font-medium font-body"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/60 flex justify-end">
              <Link
                href="/contact"
                onClick={() => setActiveModalProject(null)}
                className="glass-btn-primary px-6 py-2.5 rounded-2xl font-semibold text-xs sm:text-sm cursor-pointer inline-flex items-center font-body"
              >
                Discuss a Similar Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
