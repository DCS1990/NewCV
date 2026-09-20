'use client';

import React, { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { ItamSection } from '@/components/itam-section';
import { Certifications } from '@/components/certifications';
import { PhpProjectHub } from '@/components/php-project-hub';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { CvModal } from '@/components/cv-modal';

export default function HomePage() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
        {/* Navigation Bar */}
        <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

        {/* Hero Section */}
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />

        {/* Core Competencies (11 Pillars) */}
        <About />

        {/* Career Experience Timeline */}
        <Experience />

        {/* Technical Skills Matrix */}
        <Skills />

        {/* Applied Engineering Projects */}
        <Projects />

        {/* Dedicated IT Asset Management (ITAM) Section */}
        <ItamSection />

        {/* Academic & Professional Certifications */}
        <Certifications />

        {/* Dedicated Standalone PHP Project Hub & Exporter */}
        <PhpProjectHub />

        {/* Contact Section */}
        <Contact />

        {/* Global Footer */}
        <Footer />

        {/* In-browser CV View & Print Modal */}
        <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
