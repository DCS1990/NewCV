'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/src/data/profile';
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  Info,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Linkedin,
  Github,
  Clock,
  Send,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

interface ContactProps {
  onOpenCvModal: () => void;
}

export function Contact({ onOpenCvModal }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top: Download Chaminda Sampath's CV Card (From Image 9) */}
        <div className="bg-white dark:bg-[#0f172a] rounded-3xl p-6 sm:p-10 border border-blue-100 dark:border-slate-800 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#1d63ed] dark:text-sky-400 bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-900 uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5" />
                <span>CURRICULUM VITAE</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Download Chaminda Sampath&apos;s CV
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Looking for a comprehensive resume outlining 13+ years of apparel site IT operations, ITAM audits, Intune device policies, and infrastructure leadership? Download the complete official PDF or view the print-ready document.
              </p>

              {/* 4 Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Comprehensive employment history (MAS &amp; Brandix)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>University degree (B.BM) &amp; CCNA / ITIL verified</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>IT Asset Management &amp; Intune specialization</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Verified corporate referees &amp; full contact details</span>
                </div>
              </div>

              {/* Notice Box */}
              <div className="p-3.5 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60 flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                <Info className="w-4 h-4 text-[#1d63ed] dark:text-sky-400 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-slate-900 dark:text-white font-bold">Official Document: </strong>
                  Authentic 2-page PDF formatted to standard resume specifications. If your browser blocks popups or downloads in iframe preview, you can also view or print the CV directly in a new tab.
                </p>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <button
                type="button"
                onClick={onOpenCvModal}
                className="w-full py-3.5 px-5 rounded-xl bg-[#1d63ed] hover:bg-blue-700 text-white font-extrabold text-sm shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
              >
                <Download className="w-4 h-4" />
                <span>Download Official CV (PDF)</span>
              </button>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="w-full py-3 px-5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 shadow-2xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#1d63ed]" />
                <span>View &amp; Print Full CV</span>
              </button>

              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 px-1 pt-1">
                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="hover:text-slate-900 dark:hover:text-white underline cursor-pointer"
                >
                  Quick View Highlights Modal
                </button>
                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="hover:text-[#1d63ed] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Open PDF in new tab</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom: 08. GET IN TOUCH / Contact Chaminda Sampath */}
        <div>
          
          <div className="mb-8">
            <span className="font-mono text-xs font-bold text-[#1d63ed] dark:text-sky-400 tracking-wider uppercase block mb-1.5">
              08. GET IN TOUCH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Contact Chaminda Sampath
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Available for enterprise IT infrastructure, site support administration, and IT asset management roles. Reach out directly via email, WhatsApp, or the inquiry form below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Direct Channels */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 border border-blue-100 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="font-black text-base text-slate-900 dark:text-white">
                  Direct Channels
                </h3>

                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950 text-[#1d63ed] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="font-mono text-xs font-semibold text-slate-900 dark:text-white hover:text-[#1d63ed] truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp */}
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-300 transition-colors cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      WhatsApp Direct
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                      {personalInfo.whatsapp}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 transition-colors cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Phone Support
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
                  <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* Profile Links Row */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#1d63ed]" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Activity</span>
                  </a>
                </div>

                {/* References Callout */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  <Clock className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-slate-900 dark:text-white font-bold">Professional References: </strong>
                    Verified management references from MAS Technology Services and Brandix Apparel Solutions are available upon interview request.
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Send an Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-[#0f172a] rounded-2xl p-6 sm:p-8 border border-blue-100 dark:border-slate-800 shadow-sm space-y-4">
                <div>
                  <h3 className="font-black text-base sm:text-lg text-slate-900 dark:text-white">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Have an infrastructure question, ITAM project, or employment opportunity? Leave a message.
                  </p>
                </div>

                {submitted && (
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                      <strong className="block font-bold">Message Transmitted!</strong>
                      <span>Chaminda will respond to your enterprise inquiry promptly via email or WhatsApp.</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiry-name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Perera"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1d63ed]"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1d63ed]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry-subject" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <select
                      id="inquiry-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1d63ed]"
                    >
                      <option value="">Select a subject...</option>
                      <option value="IT Infrastructure & Support Role">IT Infrastructure &amp; Support Role</option>
                      <option value="IT Asset Management (ITAM) Consultation">IT Asset Management (ITAM) Consultation</option>
                      <option value="Site Administration Opportunity">Site Administration Opportunity</option>
                      <option value="Automation & Software Solution">Automation &amp; Software Solution</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="inquiry-message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the opportunity, infrastructure inquiry, or collaboration..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1d63ed]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#1d63ed] hover:bg-blue-700 text-white font-extrabold text-sm shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting...' : 'Submit Message'}</span>
                  </button>
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
