'use client';

import React from 'react';
import { personalInfo, experienceList, skillCategories, certificationsList } from '@/src/data/profile';
import { X, Printer, Download, Mail, Phone, MapPin, Building2, Calendar, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CvModal({ isOpen, onClose }: CvModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-950 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-slate-900 dark:text-white text-base">
              Executive Curriculum Vitae
            </span>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800">
              Verified Enterprise Record
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-xs transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:space-y-6 text-slate-900 dark:text-slate-100 font-sans">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                  {personalInfo.name}
                </h1>
                <p className="text-sm font-bold text-sky-600 dark:text-sky-400 mt-1">
                  Senior IT Support Specialist &bull; Infrastructure &bull; Operations &bull; ITAM Lead
                </p>
              </div>
              <div className="text-right hidden sm:block font-mono text-xs text-slate-500">
                13+ Years Enterprise Experience
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4 text-xs font-medium text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-mono">
                <Mail className="w-3.5 h-3.5 text-sky-500" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Professional Executive Summary */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {personalInfo.summary}
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillCategories.map((cat) => (
                <div key={cat.category} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold text-slate-900 dark:text-white block mb-1">
                    {cat.category}
                  </span>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                    {cat.skills.map((s) => s.name).join(' &bull; ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Timeline */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4">
              Professional Career Record (13+ Years)
            </h2>
            <div className="space-y-6">
              {experienceList.map((exp) => (
                <div key={exp.id} className="space-y-2 border-b border-slate-100 dark:border-slate-800/80 pb-5 last:border-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                        {exp.role}
                      </span>
                      <span className="text-xs text-sky-600 dark:text-sky-400 font-bold block sm:inline sm:ml-2">
                        &bull; {exp.company} ({exp.legalEntity})
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    {exp.companyDescription}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pl-4 list-disc">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="leading-relaxed">{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Academic & Certifications */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Education &amp; Industry Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certificationsList.map((cert) => (
                <div key={cert.id} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    {cert.title}
                  </span>
                  <span className="text-[11px] text-sky-600 dark:text-sky-400 font-bold block">
                    {cert.issuer}
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-xs text-slate-500">
          <span>Official CV Portfolio &bull; Chaminda Sampath</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg font-bold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
