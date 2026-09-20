'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/src/data/profile';
import {
  ArrowRight,
  Download,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  FileText,
  Copy,
  Check
} from 'lucide-react';

interface HeroProps {
  onOpenCvModal: () => void;
}

export function Hero({ onOpenCvModal }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Bio, Credentials & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-blue-200/90 dark:border-blue-900/70 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Open to senior IT Support, Infrastructure &amp; Asset Management Opportunities</span>
            </div>

            {/* Big Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black tracking-tight text-slate-950 dark:text-white leading-[1.08]">
                {personalInfo.name}
              </h1>
              
              {/* Electric Blue Subtitle */}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#1d63ed] dark:text-sky-400 mt-2 tracking-tight">
                {personalInfo.roleTitle}
              </h2>

              {/* Monospace Subtitle */}
              <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 mt-1.5">
                {personalInfo.credentialsSubtitle}
              </p>
            </div>

            {/* Paragraph Bio */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {personalInfo.heroBio}
            </p>

            {/* 4 Checkmarks (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {personalInfo.heroChecks.map((check, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>{check}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1d63ed] hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 transition-all cursor-pointer active:scale-98"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold text-sm border border-slate-300 dark:border-slate-700 shadow-2xs transition-all cursor-pointer active:scale-98"
              >
                <Download className="w-4 h-4 text-[#1d63ed]" />
                <span>Download CV</span>
              </button>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white underline underline-offset-4 ml-1 cursor-pointer"
              >
                View / Print CV
              </button>
            </div>

            {/* Horizontal Divider */}
            <div className="border-t border-slate-300/80 dark:border-slate-800 pt-4">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600 dark:text-slate-400">
                <span className="font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  CONNECT DIRECTLY:
                </span>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#1d63ed] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#1d63ed] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 hover:text-[#1d63ed] transition-colors cursor-pointer"
                  title="Click to copy email"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-500" />
                  <span className="font-mono">{personalInfo.email}</span>
                  {copiedEmail && <span className="text-[10px] text-emerald-500 font-bold">(copied)</span>}
                </button>

                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{personalInfo.location}</span>
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white dark:bg-[#0f172a] rounded-3xl p-3 sm:p-4 shadow-xl border border-blue-100 dark:border-slate-800">
              
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/5 bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700">
                
                {/* Visual Representation of Professional Portrait */}
                <div className="absolute inset-0 bg-linear-to-b from-sky-50 via-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex flex-col items-center justify-center p-6 text-center">
                  
                  {/* Executive Avatar Graphic */}
                  <div className="relative mb-4">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-linear-to-tr from-slate-800 via-blue-900 to-sky-700 p-1 shadow-lg flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center text-white overflow-hidden relative">
                        {/* Suit and Tie silhouette */}
                        <div className="text-3xl sm:text-4xl font-black tracking-wider text-sky-400">
                          CS
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-widest">
                          CHAMINDA
                        </span>
                      </div>
                    </div>
                    <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900"></span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
                    Chaminda Sampath
                  </h3>
                  <p className="text-xs text-[#1d63ed] dark:text-sky-400 font-semibold mt-0.5">
                    Senior Enterprise IT Support Specialist
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-xs mt-2 leading-relaxed">
                    13+ Years high-velocity apparel plant IT operations, ITAM asset lifecycle &amp; Intune governance.
                  </p>
                </div>

                {/* Dark Bottom Bar Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 backdrop-blur-md px-4 py-3 border-t border-slate-800 flex items-center justify-between text-left">
                  <div>
                    <span className="text-xs sm:text-sm font-extrabold text-white block">
                      MAS Capital (Pvt) Ltd
                    </span>
                    <span className="text-[11px] text-slate-400 block font-medium">
                      IT Support Specialist (L1)
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    CURRENT ROLE
                  </span>
                </div>
              </div>

              {/* Bottom 2 Info Boxes */}
              <div className="grid grid-cols-2 gap-2.5 mt-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-center">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">
                    Education
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white block mt-0.5">
                    B.BM (Kelaniya)
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-center">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">
                    Certifications
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white block mt-0.5">
                    CCNA &amp; ITIL V3
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom 4 KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {personalInfo.kpis.map((kpi, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-blue-100 dark:border-slate-800 shadow-sm"
            >
              <span className="text-3xl sm:text-4xl font-black text-[#1d63ed] dark:text-sky-400 block tracking-tight">
                {kpi.number}
              </span>
              <span className="font-extrabold text-slate-900 dark:text-white text-sm block mt-1.5">
                {kpi.title}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1 leading-relaxed">
                {kpi.subtitle}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
