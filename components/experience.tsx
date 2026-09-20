'use client';

import React from 'react';
import { experienceList } from '@/src/data/profile';
import { CheckCircle2, Building2, MapPin, Calendar, Briefcase, ChevronRight, Award, ShieldCheck } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Verified Career Progression</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            13+ Years Enterprise Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Continuous technical service across high-volume industrial plants, enterprise IT operations, hardware RMA, and regional corporate networks.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto space-y-8">
          
          {/* Vertical Track Line for Timeline Visual */}
          <div className="absolute left-4 sm:left-8 top-8 bottom-8 w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block"></div>

          {experienceList.map((item, index) => (
            <div
              key={item.id}
              className="relative md:pl-16 group"
            >
              {/* Timeline Marker Dot */}
              <div className="hidden md:flex absolute left-6 top-8 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-sky-600 dark:bg-sky-500 shadow-sm z-10 group-hover:scale-125 transition-transform items-center justify-center">
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-sky-300 dark:hover:border-sky-700 transition-all">
                
                {/* Role & Org Info */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {item.role}
                      </h3>
                      {item.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 shadow-2xs flex items-center gap-1.5">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                          </span>
                          <span>ACTIVE TENURE</span>
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm font-bold text-sky-600 dark:text-sky-400 flex-wrap">
                      <Building2 className="w-4 h-4 shrink-0" />
                      <span>{item.company}</span>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-slate-700 dark:text-slate-300">{item.legalEntity}</span>
                      <span>&bull;</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                        {item.location}
                      </span>
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 shrink-0 self-start font-mono border border-slate-200/80 dark:border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                    {item.period}
                  </span>
                </div>

                {/* Company Context */}
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic mb-5 leading-relaxed bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80">
                  {item.companyDescription}
                </p>

                {/* Key Responsibilities & Achievements */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                    Key Technical Responsibilities &amp; Impact
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-400 dark:text-slate-500 mr-2 font-semibold">
                    Core Ecosystem:
                  </span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
