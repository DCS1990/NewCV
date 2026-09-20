'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './theme-provider';
import { personalInfo } from '@/src/data/profile';
import { downloadPhpProjectZip } from '@/lib/php-bundle';
import { Sun, Moon, Download, Menu, X, Code2, FileText, Check, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export function Navbar({ onOpenCvModal }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      await downloadPhpProjectZip();
    } catch (err) {
      console.error('Failed to generate zip', err);
    } finally {
      setIsZipping(false);
    }
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'ITAM', href: '#itam' },
    { label: 'Qualifications', href: '#certifications' },
    { label: 'PHP Hub', href: '#php-project' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'backdrop-blur-md bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 shadow-sm'
          : 'bg-white/80 dark:bg-slate-950/80 border-b border-slate-100 dark:border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Monogram & Title */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-base shadow-xs group-hover:scale-105 transition-transform">
                CS
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-950"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 dark:text-white tracking-tight block text-sm sm:text-base leading-tight">
                  {personalInfo.name}
                </span>
              </div>
              <span className="text-xs text-sky-600 dark:text-sky-400 font-semibold block">
                IT Support &bull; Infrastructure Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* PHP Project Download Button */}
            <button
              id="nav-php-download-btn"
              type="button"
              onClick={handleDownloadZip}
              disabled={isZipping}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors shadow-2xs cursor-pointer active:scale-98"
              title="Download standalone PHP project codebase as ZIP"
            >
              <Code2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{isZipping ? 'Bundling ZIP...' : 'PHP Project (.ZIP)'}</span>
            </button>

            {/* View CV Modal Trigger */}
            <button
              id="nav-cv-btn"
              type="button"
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-xs shadow-sky-600/20 transition-all cursor-pointer active:scale-98"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Executive CV</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-nav-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div id="mobile-nav-menu" className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  handleDownloadZip();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              >
                <Code2 className="w-4 h-4 text-emerald-600" />
                <span>Download Standalone PHP Project (.ZIP)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
