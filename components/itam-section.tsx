'use client';

import React from 'react';
import { itamPillars } from '@/src/data/profile';
import {
  Boxes,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
  QrCode,
  Laptop,
  RefreshCw,
  Trash2,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export function ItamSection() {
  const lifecycleSteps = [
    { step: '01', title: 'Procurement', desc: 'Vendor PO, BOM verification & CapEx validation', icon: FileSpreadsheet },
    { step: '02', title: 'Asset Tagging', desc: 'Physical barcode/QR & Entra/Intune enrollment', icon: QrCode },
    { step: '03', title: 'Deployment', desc: 'Secure user handover & signed gate-pass record', icon: Laptop },
    { step: '04', title: 'Plant Audit', desc: 'Quarterly physical reconciliation & Intune sync', icon: RefreshCw },
    { step: '05', title: 'Decommission', desc: 'NIST data wipe, parts salvage & e-waste compliance', icon: Trash2 },
  ];

  return (
    <section id="itam" className="py-20 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 mb-3">
            <Boxes className="w-3.5 h-3.5" />
            <span>Specialty Focus &bull; 11+ Years Governance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Enterprise IT Asset Management (ITAM) Framework
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Rigorous operational governance that protects corporate capital, enforces continuous audit readiness, controls software license spend, and minimizes hardware Total Cost of Ownership (TCO).
          </p>
        </div>

        {/* 5-Step Asset Lifecycle Flow Strip */}
        <div className="mb-16 bg-slate-50 dark:bg-slate-950/60 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="text-center sm:text-left mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                End-to-End Governance
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Standard Industrial ITAM Lifecycle Flow
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
              ISO 27001 &amp; Sarbanes-Oxley (SOX) Ready
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {lifecycleSteps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.step}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 relative group hover:border-sky-400 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs font-extrabold text-slate-300 dark:text-slate-700">
                      {step.step}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8-Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {itamPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between shadow-xs hover:border-sky-400 dark:hover:border-sky-600 transition-all hover:shadow-md"
            >
              <div>
                <span className="text-3xl font-extrabold text-sky-600/30 dark:text-sky-400/30 block mb-2 font-mono">
                  {pillar.number}
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80">
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                  Key Operational Activities
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {pillar.activities.map((act, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-sky-500 font-bold shrink-0">&bull;</span>
                      <span className="leading-snug">{act}</span>
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
