'use client';

import React, { useState } from 'react';
import { focusAreas } from '@/src/data/profile';
import { DynamicIcon } from './icon-helper';
import { Layers, ShieldCheck, Check } from 'lucide-react';

export function About() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Filter groups
  const filterCategories = [
    { id: 'all', label: 'All 11 Pillars' },
    { id: 'infra', label: 'Infrastructure & Net' },
    { id: 'endpoint', label: 'Endpoints & ITAM' },
    { id: 'automation', label: 'Automation & Dev' },
  ];

  const getCategoryForArea = (id: string) => {
    if (id === 'infrastructure' || id === 'networking' || id === 'hardware' || id === 'cctv') return 'infra';
    if (id === 'desktop-support' || id === 'asset-management' || id === 'itil-itsm' || id === 'compliance') return 'endpoint';
    return 'automation';
  };

  const filteredAreas = activeFilter === 'all'
    ? focusAreas
    : focusAreas.filter((area) => getCategoryForArea(area.id) === activeFilter);

  return (
    <section id="about" className="py-20 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Operational Domains</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            11 Enterprise Focus Pillars
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Thirteen years of hands-on technical execution across continuous manufacturing plant floors, enterprise server rooms, and distributed user pools.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterCategories.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-slate-900 text-white dark:bg-sky-600 dark:text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 11 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area, index) => {
            const pillarIndex = focusAreas.findIndex(a => a.id === area.id) + 1;
            const formattedIndex = String(pillarIndex).padStart(2, '0');

            return (
              <div
                key={area.id}
                className="relative p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 hover:border-sky-400 dark:hover:border-sky-600 transition-all flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Top Bar: Icon and Pillar Number */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                      <DynamicIcon name={area.iconName} className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-extrabold text-slate-400 dark:text-slate-600">
                      PILLAR {formattedIndex}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {area.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Enterprise Scope:</span>
                  <span className="font-mono font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/80 px-2 py-0.5 rounded border border-sky-100 dark:border-sky-900">
                    {area.metrics}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
