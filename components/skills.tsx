'use client';

import React, { useState } from 'react';
import { skillCategories } from '@/src/data/profile';
import {
  Server,
  Boxes,
  ShieldCheck,
  Code2,
  Wrench
} from 'lucide-react';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'infra':
        return <Server className="w-4 h-4" />;
      case 'asset':
        return <Boxes className="w-4 h-4" />;
      case 'microsoft':
        return <ShieldCheck className="w-4 h-4" />;
      case 'development':
        return <Code2 className="w-4 h-4" />;
      case 'tools':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Server className="w-4 h-4" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  const totalCompetencies = skillCategories.reduce((acc, c) => acc + c.competencyCount, 0);

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="font-mono text-xs font-bold text-[#1d63ed] dark:text-sky-400 tracking-wider uppercase block mb-1.5">
            03. TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Skills &amp; Technology Stack
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            Organized across core infrastructure, enterprise systems management, IT asset governance, and software development. Presented objectively with neutral skill cards without artificial percentage ratings.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#1d63ed] text-white shadow-sm shadow-blue-600/20'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            All Categories ({totalCompetencies})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#1d63ed] text-white shadow-sm shadow-blue-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
              }`}
            >
              {cat.category} ({cat.competencyCount})
            </button>
          ))}
        </div>

        {/* Categories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-blue-100 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-[#1d63ed] dark:text-sky-400 flex items-center justify-center shrink-0">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills Pill List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-800"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1d63ed] shrink-0"></span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Competency Count */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 text-right">
                <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500">
                  {cat.competencyCount} COMPETENCIES
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
