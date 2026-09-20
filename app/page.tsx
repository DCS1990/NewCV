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
import { AutomationSection } from '@/components/automation-section';
import { Certifications } from '@/components/certifications';
import { PhpProjectHub } from '@/components/php-project-hub';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { CvModal } from '@/components/cv-modal';

export default function HomePage() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen site-blueprint-grid text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

        <main>
          {/* Hero Section */}
          <Hero onOpenCvModal={() => setCvModalOpen(true)} />

          {/* 01. Professional Profile / About */}
          <About />

          {/* 02. Career Timeline / Experience */}
          <Experience />

          {/* 03. Technical Capabilities / Skills */}
          <Skills />

          {/* 04. Featured Projects / Applied Solutions */}
          <Projects />

          {/* 05. Core Domain Specialization / ITAM */}
          <ItamSection />

          {/* 06. Automation & Process Engineering */}
          <AutomationSection />

          {/* 07. Academic & Professional Growth / Education & Certifications */}
          <Certifications />

          {/* Standalone Enterprise PHP Project Hub */}
          <PhpProjectHub />

          {/* 08. Curriculum Vitae & Get in Touch / Contact */}
          <Contact onOpenCvModal={() => setCvModalOpen(true)} />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* In-browser CV View & Print Modal */}
        <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
