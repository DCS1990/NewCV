'use client';

import React from 'react';
import {
  aboutNarratives,
  executiveSummaryDetails,
  coreOperationalFocusAreas,
} from '@/src/data/profile';
import {
  Server,
  Users,
  Network,
  Wrench,
  Boxes,
  Smartphone,
  Activity,
  Truck,
  FileCheck,
  Zap,
  Code2,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

export function About() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Users':
        return <Users className="w-4 h-4" />;
      case 'Network':
        return <Network className="w-4 h-4" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4" />;
      case 'Boxes':
        return <Boxes className="w-4 h-4" />;
      case 'Smartphone':
        return <Smartphone className="w-4 h-4" />;
      case 'Activity':
        return <Activity className="w-4 h-4" />;
      case 'Truck':
        return <Truck className="w-4 h-4" />;
      case 'FileCheck':
        return <FileCheck className="w-4 h-4" />;
      case 'Zap':
        return <Zap className="w-4 h-4" />;
      case 'Code2':
        return <Code2 className="w-4 h-4" />;
      default:
        return <Server className="w-4 h-4" />;
    }
  };

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="font-mono text-xs font-bold text-[#1d63ed] dark:text-sky-400 tracking-wider uppercase block mb-1.5">
            01. PROFESSIONAL PROFILE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            About Chaminda Sampath
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            Bridging hands-on industrial IT infrastructure reliability with modern asset governance, team leadership, and targeted automation engineering.
          </p>
        </div>

        {/* Narrative & Executive Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: 4 Light Blue Narrative Cards */}
          <div className="lg:col-span-8 space-y-4">
            {aboutNarratives.map((paragraph, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-blue-50/70 dark:bg-slate-900/60 border border-blue-200/80 dark:border-blue-900/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed shadow-2xs"
              >
                {paragraph}
              </div>
            ))}
          </div>

          {/* Right: Dark Navy Executive Summary Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl p-6 sm:p-7 bg-[#0a1628] text-white border border-slate-800 shadow-xl space-y-5 sticky top-24">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-blue-600/30 text-sky-400 flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="font-extrabold text-base tracking-tight">
                  Executive Summary
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                {executiveSummaryDetails.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-100 block">
                        {item.label}:
                      </span>
                      <span className="text-slate-300 block text-xs mt-0.5 leading-snug">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Sub-Section: Core Operational Focus Areas */}
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Core Operational Focus Areas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {coreOperationalFocusAreas.map((area) => (
              <div
                key={area.id}
                className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-blue-100 dark:border-slate-800 shadow-2xs hover:border-blue-300 dark:hover:border-slate-700 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-[#1d63ed] dark:text-sky-400 flex items-center justify-center mb-3.5 shadow-2xs">
                  {getIcon(area.iconName)}
                </div>
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  {area.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
