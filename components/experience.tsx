'use client';

import React, { useState } from 'react';
import { experienceList } from '@/src/data/profile';
import {
  Calendar,
  Building2,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

export function Experience() {
  const [expandedIds, setExpandedIds] = useState<string[]>(['mas-capital', 'mas-kreeda']);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    if (expandedIds.length === experienceList.length) {
      setExpandedIds([]);
    } else {
      setExpandedIds(experienceList.map((e) => e.id));
    }
  };

  const isAllExpanded = expandedIds.length === experienceList.length;

  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="font-mono text-xs font-bold text-[#1d63ed] dark:text-sky-400 tracking-wider uppercase block mb-1.5">
              02. CAREER TIMELINE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Professional Experience
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              13+ years of continuous service managing mission-critical enterprise apparel manufacturing ICT.
            </p>
          </div>

          <button
            type="button"
            onClick={expandAll}
            className="self-start sm:self-auto px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 shadow-2xs transition-colors cursor-pointer"
          >
            {isAllExpanded ? 'Collapse All Roles' : 'Expand All Roles'}
          </button>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-6 sm:space-y-8 before:absolute before:left-[11px] sm:before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-blue-200 dark:before:bg-slate-800">
          {experienceList.map((exp) => {
            const isExpanded = expandedIds.includes(exp.id);

            return (
              <div key={exp.id} className="relative">
                
                {/* Timeline Node Circle */}
                <div
                  className={`absolute -left-6 sm:-left-10 top-5 w-6 h-6 rounded-full border-4 flex items-center justify-center transition-colors ${
                    exp.isCurrent
                      ? 'border-blue-100 dark:border-blue-900/60 bg-[#1d63ed]'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950'
                  }`}
                >
                  {exp.isCurrent && (
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  )}
                </div>

                {/* Role Card */}
                <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-blue-100 dark:border-slate-800 shadow-sm overflow-hidden transition-all">
                  
                  {/* Card Header */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-5 sm:p-6 cursor-pointer hover:bg-slate-50/70 dark:hover:bg-slate-900/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-sky-400 text-xs font-semibold">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </span>

                        {exp.isCurrent && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                            CURRENT ROLE
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400 font-medium">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 text-[#1d63ed]" />
                          <span>{exp.company}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="self-end sm:self-center inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    >
                      <span>{isExpanded ? 'Hide details' : 'Show details'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Expandable Details Body */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                          Key Operational Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1d63ed] mt-2 shrink-0"></span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                          Technologies &amp; Tools:
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
