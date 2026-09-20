'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/src/data/profile';
import {
  FolderKanban,
  FileText,
  Mail,
  MessageSquare,
  MapPin,
  Linkedin,
  Github,
  CheckCircle2,
  Code2,
  Phone,
  Server,
  ShieldCheck,
  Award,
  Copy,
  Check,
  ExternalLink,
  Laptop,
  Cpu,
  Boxes
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
    <section id="hero" className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200 bg-gradient-to-b from-white via-slate-50/50 to-slate-100/30 dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950">
      
      {/* Subtle Background Ambience using clean Tailwind utility patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-7">
            {/* Status & Credential Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Active Enterprise Plant IT Operations &bull; Balangoda</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/70 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>MAS Capital &amp; Brandix Enterprise Track Record</span>
              </div>
            </div>

            {/* Main Headline & Identity */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                  {personalInfo.name}
                </h1>
              </div>
              <p className="text-base sm:text-xl font-bold text-sky-600 dark:text-sky-400 tracking-tight">
                Senior IT Support Specialist &bull; Infrastructure &bull; Operations &bull; ITAM Lead
              </p>
            </div>

            {/* Executive Summary */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
              Senior technical specialist with <span className="font-semibold text-slate-900 dark:text-white">13+ years</span> of progressive enterprise engineering across Sri Lanka&apos;s apex manufacturing giants (<span className="font-semibold text-slate-900 dark:text-white">MAS Capital</span> &amp; <span className="font-semibold text-slate-900 dark:text-white">Brandix</span>). Specializing in plant infrastructure resilience, L1/L2 executive computing, Cisco LAN/WAN networks, Microsoft Intune endpoint governance, 11+ years of IT Asset Management (ITAM), and custom operational automation in Python, PowerShell, and PHP.
            </p>

            {/* Call to Actions (Tailwind High-Contrast Buttons) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-cv-cta"
                type="button"
                onClick={onOpenCvModal}
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-md shadow-sky-600/20 transition-all flex items-center gap-2.5 active:scale-[0.98] cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View &amp; Download Executive CV</span>
              </button>

              <a
                id="hero-projects-cta"
                href="#projects"
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-xs transition-all flex items-center gap-2.5 active:scale-[0.98]"
              >
                <FolderKanban className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Applied Projects</span>
              </a>

              <a
                id="hero-php-cta"
                href="#php-project"
                className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-2.5 active:scale-[0.98]"
              >
                <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>PHP 8+ Project Hub</span>
              </a>
            </div>

            {/* Contact Badges & Instant Copy Tool */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80">
              <div className="inline-flex items-center gap-1.5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-mono"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-500 inline mr-1.5" />
                  <span>{personalInfo.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                <span>WhatsApp: {personalInfo.whatsapp}</span>
              </a>

              <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>{personalInfo.location}</span>
              </span>
            </div>
          </div>

          {/* Profile Card / Metrics Bento Column */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-6 backdrop-blur-xs">
              
              {/* Profile Monogram & Verified Header */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700 text-white flex items-center justify-center font-black text-2xl shadow-md tracking-wider">
                    CS
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-white" title="Verified Professional">
                    <Check className="w-3 h-3" />
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-snug">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    MAS Active Trading IT Specialist
                  </p>
                  <div className="inline-flex items-center gap-1.5 mt-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    <span>13+ Years Service</span>
                  </div>
                </div>
              </div>

              {/* Verified KPI Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-sky-800 transition-colors">
                  <span className="text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400 block font-mono">
                    {personalInfo.yearsExperience}+
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Years Enterprise IT
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-sky-800 transition-colors">
                  <span className="text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400 block font-mono">
                    {personalInfo.endpointsManaged}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Fleet Endpoints
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-sky-800 transition-colors">
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 block font-mono">
                    {personalInfo.slaAdherence}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Incident SLA Rate
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-sky-800 transition-colors">
                  <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 block font-mono">
                    11+ Yrs
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    ITAM Audits
                  </span>
                </div>
              </div>

              {/* Core Facility Badges */}
              <div className="pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                  Key Production Footprint
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    MAS Active Trading
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    Brandix Apparel Group
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    Dream Curious (UAE)
                  </span>
                </div>
              </div>

              {/* External Profile Links */}
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-600" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                  <span>GitHub Code</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
