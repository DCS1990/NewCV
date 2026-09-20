'use client';

import React from 'react';
import { automationSolutions } from '@/src/data/profile';
import {
  FileSpreadsheet,
  Activity,
  Database,
  CheckCircle2,
  ArrowUpRight,
  Code2,
  Terminal,
  MessageSquare
} from 'lucide-react';

export function AutomationSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-4 h-4" />;
      case 'Activity':
        return <Activity className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <section id="automation" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="font-mono text-xs font-bold text-[#1d63ed] dark:text-sky-400 tracking-wider uppercase block mb-1.5">
            06. AUTOMATION &amp; PROCESS ENGINEERING
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Software Solutions for Practical IT Challenges
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            I don&apos;t write code in isolation; I write automation scripts, full-stack portals, and reporting dashboards designed directly to eliminate factory downtime, replace manual paperwork, and optimize IT staff hours.
          </p>
        </div>

        {/* 4 Solutions (2x2 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {automationSolutions.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 sm:p-7 border border-blue-100 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-5 hover:border-blue-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="space-y-4">
                
                {/* Header with Icon and Category */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-[#1d63ed] dark:text-sky-400 flex items-center justify-center shrink-0">
                    {getIcon(item.iconName)}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold text-[#1d63ed] dark:text-sky-400">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Problem Identified Box (Pink/Red) */}
                <div className="p-3.5 rounded-xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/50">
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-rose-600 dark:text-rose-400 block mb-1">
                    PROBLEM IDENTIFIED:
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* Practical Solution Built Box (Light Blue) */}
                <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60">
                  <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-[#1d63ed] dark:text-sky-400 block mb-1">
                    PRACTICAL SOLUTION BUILT:
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {item.solution}
                  </p>
                </div>

                {/* Measured Impact (Green) */}
                <div className="flex items-start gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                  <p>
                    <strong className="font-bold">Measured Impact: </strong>
                    {item.impact}
                  </p>
                </div>

              </div>

              {/* Technologies Tags & Badge */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  {item.statusBadge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#0f172a] border border-blue-100 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#1d63ed] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-sm sm:text-base text-slate-900 dark:text-white">
                Looking to automate repetitive IT operations or asset reporting?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                I design lightweight, maintainable tools using modern web stacks and native Windows/Linux shell scripting.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#1d63ed] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
}
