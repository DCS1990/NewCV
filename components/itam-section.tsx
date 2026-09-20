'use client';

import React from 'react';
import { itamSpecializations } from '@/src/data/profile';
import {
  RefreshCw,
  ScanLine,
  WifiOff,
  Clock,
  Trash2,
  Wrench,
  ShieldCheck,
  Laptop,
  FileCheck2,
  Users,
  BarChart3
} from 'lucide-react';

export function ItamSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'RefreshCw':
        return <RefreshCw className="w-4 h-4" />;
      case 'ScanLine':
        return <ScanLine className="w-4 h-4" />;
      case 'WifiOff':
        return <WifiOff className="w-4 h-4" />;
      case 'Clock':
        return <Clock className="w-4 h-4" />;
      case 'Trash2':
        return <Trash2 className="w-4 h-4" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4" />;
      case 'Laptop':
        return <Laptop className="w-4 h-4" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-4 h-4" />;
      case 'Users':
        return <Users className="w-4 h-4" />;
      case 'BarChart3':
        return <BarChart3 className="w-4 h-4" />;
      default:
        return <RefreshCw className="w-4 h-4" />;
    }
  };

  return (
    <section id="itam" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="font-mono text-xs font-bold text-[#1d63ed] dark:text-sky-400 tracking-wider uppercase block mb-1.5">
            05. CORE DOMAIN SPECIALIZATION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            IT Asset Management &amp; Operational Governance
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed">
            Enterprise apparel manufacturing requires tight physical asset control, accurate depreciation tracking, and flawless compliance. Here are the eleven core disciplines I administer across multi-site site operations.
          </p>
        </div>

        {/* 11 Specialization Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itamSpecializations.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-blue-100 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-blue-300 dark:hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/80 text-[#1d63ed] dark:text-sky-400 flex items-center justify-center mb-4 shadow-2xs">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Operational Tasks Checklist */}
              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800/80">
                <span className="font-mono text-[10px] font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500 block mb-2.5">
                  KEY OPERATIONAL TASKS:
                </span>
                <ul className="space-y-1.5">
                  {item.tasks.map((task, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1d63ed] shrink-0"></span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
