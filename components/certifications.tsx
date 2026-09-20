'use client';

import React, { useState } from 'react';
import { educationCertificationsList } from '@/src/data/profile';
import { Calendar, Building2, CheckCircle2 } from 'lucide-react';

export function Certifications() {
  const [selectedType, setSelectedType] = useState<string>('All');

  const filterOptions = ['All', 'Degree', 'Certification', 'Diploma', 'School'];

  const filteredList =
    selectedType === 'All'
      ? educationCertificationsList
      : educationCertificationsList.filter((item) => item.type === selectedType);

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'Degree':
        return 'bg-[#1d63ed] text-white';
      case 'Certification':
        return 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800';
      case 'Diploma':
        return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700';
      case 'School':
        return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
    }
  };

  return (
    <section id="education" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="font-mono text-xs font-bold text-[#1d63ed] dark:text-sky-400 tracking-wider uppercase block mb-1.5">
              07. ACADEMIC &amp; PROFESSIONAL GROWTH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Education &amp; Certifications
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              A solid foundation pairing a university business management degree with rigorous network engineering, systems administration, and IT service management credentials.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-white dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs self-start md:self-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setSelectedType(opt)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  selectedType === opt
                    ? 'bg-[#1d63ed] text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-blue-100 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-blue-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="space-y-3">
                {/* Year & Badge Row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 font-mono">
                    <Calendar className="w-3 h-3 text-[#1d63ed]" />
                    <span>{item.year}</span>
                  </span>

                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${getBadgeStyle(
                      item.type
                    )}`}
                  >
                    {item.type.toUpperCase()}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>

                {/* Institution */}
                <div className="flex items-start gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  <Building2 className="w-3.5 h-3.5 shrink-0 text-slate-400 mt-0.5" />
                  <span>{item.institution}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              {/* Verified Credential Footer */}
              <div className="pt-4 mt-5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                <span className="text-[11px] font-medium">Verified Credential</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
