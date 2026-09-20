'use client';

import React, { useState } from 'react';
import { useTheme } from './theme-provider';
import { personalInfo } from '@/src/data/profile';
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export function Navbar({ onOpenCvModal }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'itam', label: 'Asset Management', href: '#itam' },
    { id: 'automation', label: 'Automation', href: '#automation' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0d162a]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#1d63ed] text-white flex items-center justify-center font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
              CS
            </div>
            <div>
              <span className="font-extrabold text-slate-900 dark:text-white tracking-tight block text-sm sm:text-base leading-tight">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                IT Support &amp; Asset Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-[#1d63ed] bg-blue-50 dark:bg-blue-950/60 font-semibold'
                    : 'hover:text-[#1d63ed] hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-2xs cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500 fill-amber-500" />
              )}
            </button>

            {/* View / Download CV Button */}
            <button
              id="nav-cv-btn"
              type="button"
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#1d63ed] hover:bg-blue-700 text-white shadow-sm shadow-blue-600/20 transition-all cursor-pointer active:scale-98"
            >
              <FileText className="w-4 h-4" />
              <span>CV / Resume</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-nav-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div id="mobile-nav-menu" className="xl:hidden py-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-lg ${
                  activeSection === item.id
                    ? 'text-[#1d63ed] bg-blue-50 dark:bg-blue-950 font-semibold'
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
