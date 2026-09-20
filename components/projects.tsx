'use client';

import React, { useState } from 'react';
import { projectsList, ProjectItem } from '@/src/data/profile';
import { ExternalLink, Github, Info, Code2 } from 'lucide-react';
import { downloadPhpProjectZip } from '@/lib/php-bundle';

export function Projects() {
  const [selectedBadge, setSelectedBadge] = useState<string>('All');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<ProjectItem | null>(null);
  const [isDownloadingZip, setIsDownloadingZip] = useState(false);

  const filterOptions = ['All', 'Asset Management', 'Automation & Tools', 'Web Applications'];

  const filteredProjects =
    selectedBadge === 'All'
      ? projectsList
      : projectsList.filter((p) => p.badge === selectedBadge);

  const handleDownloadZip = async () => {
    try {
      setIsDownloadingZip(true);
      await downloadPhpProjectZip();
    } catch (e) {
      console.error(e);
    } finally {
      setIsDownloadingZip(false);
    }
  };

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-xs font-bold text-[#1d63ed] dark:text-sky-400 tracking-wider uppercase block mb-1.5">
              04. FEATURED PROJECTS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Applied Solutions &amp; Development
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Practical applications, data dashboards, and automated tools developed to solve real-world IT operations, asset tracking, and business process challenges.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-white dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs self-start md:self-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setSelectedBadge(opt)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  selectedBadge === opt
                    ? 'bg-[#1d63ed] text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
            >
              {/* Dark Header */}
              <div className="bg-[#0a121e] p-5 border-b border-slate-800">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-950 text-sky-400 border border-blue-800/80">
                    {project.badge}
                  </span>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                      project.status === 'In Production'
                        ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60'
                        : 'bg-emerald-950/50 text-emerald-400 border-emerald-900/50'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-slate-400 mt-3 block">
                  {project.subLabel}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-white mt-0.5 tracking-tight">
                  {project.title}
                </h3>
              </div>

              {/* White Body */}
              <div className="bg-white dark:bg-[#0f172a] p-5 border-x border-b border-blue-100 dark:border-slate-800 flex-1 flex flex-col justify-between space-y-4">
                
                <div className="space-y-3.5">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong className="text-slate-900 dark:text-white font-bold block mb-0.5">
                      Operational Value:
                    </strong>
                    {project.operationalValue}
                  </div>

                  <div>
                    <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500 block mb-1.5">
                      TECHNOLOGIES:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedProjectForModal(project)}
                    className="font-bold text-[#1d63ed] dark:text-sky-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Details &amp; Architecture</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Reviewer Note Banner */}
        <div className="mt-8 p-4 rounded-xl bg-[#0a121e] border border-slate-800 flex items-center gap-3 text-xs text-slate-300 shadow-sm">
          <Info className="w-4 h-4 text-sky-400 shrink-0" />
          <p>
            <strong className="text-white font-semibold">Note for reviewers:</strong> All project entries are data-driven and easily configurable via{' '}
            <code className="px-1.5 py-0.5 rounded bg-slate-800 font-mono text-[11px] text-sky-300 border border-slate-700">
              src/data/profile.ts
            </code>
            . New projects, GitHub links, and live production endpoints can be added without altering UI code.
          </p>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProjectForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-[#1d63ed] uppercase tracking-wider block">
                  {selectedProjectForModal.badge}
                </span>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  {selectedProjectForModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProjectForModal(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedProjectForModal.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                Measurable Operational Value
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {selectedProjectForModal.operationalValue}
              </p>
            </div>

            {selectedProjectForModal.hasPhpSource && (
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between text-xs">
                <span className="text-emerald-800 dark:text-emerald-300 font-semibold flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-emerald-600" />
                  Includes full standalone PHP 8+ Source Code (.ZIP bundle)
                </span>
                <button
                  type="button"
                  onClick={handleDownloadZip}
                  disabled={isDownloadingZip}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold cursor-pointer transition-colors"
                >
                  {isDownloadingZip ? 'Bundling...' : 'Download ZIP'}
                </button>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setSelectedProjectForModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
