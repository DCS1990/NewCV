'use client';

import React from 'react';
import { certificationsList } from '@/src/data/profile';
import { GraduationCap, Award, CheckCircle, ShieldCheck } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-24 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Accreditations &amp; Degrees</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Academic Degree &amp; Industry Certifications
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Bachelor of Business Management (BBM) from University of Kelaniya coupled with Cisco networking, ITIL service governance, and systems administration credentials.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/80 shadow-xs flex flex-col justify-between hover:border-sky-400 dark:hover:border-sky-600 hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold border font-mono ${
                    cert.badgeType === 'Degree'
                      ? 'bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                      : cert.badgeType === 'Certification'
                      ? 'bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}>
                    {cert.badgeType}
                  </span>
                  
                  {cert.year && (
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-mono font-bold">
                      {cert.year}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-bold text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{cert.issuer}</span>
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </span>
                {cert.credentialId && (
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                    ID: {cert.credentialId}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
