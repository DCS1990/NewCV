'use client';

import React from 'react';
import { personalInfo } from '@/src/data/profile';
import { Linkedin, Github, MessageSquare, Mail, Phone, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-12 pb-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Identity */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-base shadow-xs">
                CS
              </div>
              <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                {personalInfo.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mb-4 leading-relaxed">
              Senior IT Support Specialist with over 13 years of enterprise experience across MAS Capital and Brandix garment manufacturing operations.
            </p>

            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Portfolio Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#about" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Core Competencies</a></li>
              <li><a href="#experience" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Career Timeline</a></li>
              <li><a href="#skills" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Skills Matrix</a></li>
              <li><a href="#projects" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Applied Projects</a></li>
              <li><a href="#itam" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">IT Asset Management</a></li>
              <li><a href="#php-project" className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">PHP Project Hub</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Contact Channels
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li className="break-all">
                <a href={`mailto:${personalInfo.email}`} className="hover:text-sky-600 dark:hover:text-sky-400">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-sky-600 dark:hover:text-sky-400">
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
