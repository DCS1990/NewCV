'use client';

import React, { useState } from 'react';
import { PHP_PROJECT_FILES, downloadPhpProjectZip, PhpFileEntry } from '@/lib/php-bundle';
import {
  Code2,
  Download,
  Copy,
  CheckCheck,
  FileCode,
  Server,
  FolderArchive,
  Terminal,
  Layers,
  Sparkles,
  ExternalLink,
  Check
} from 'lucide-react';

export function PhpProjectHub() {
  const [selectedFilename, setSelectedFilename] = useState<string>('index.php');
  const [copied, setCopied] = useState<boolean>(false);
  const [isZipping, setIsZipping] = useState<boolean>(false);

  const currentFile: PhpFileEntry =
    PHP_PROJECT_FILES.find((f) => f.filename === selectedFilename) || PHP_PROJECT_FILES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    try {
      setIsZipping(true);
      await downloadPhpProjectZip();
    } catch (err) {
      console.error('Download failed:', err);
    } finally {
      setIsZipping(false);
    }
  };

  const codeLines = currentFile.code.split('\n');

  return (
    <section
      id="php-project"
      className="py-20 md:py-24 bg-slate-950 text-white border-b border-slate-800/80 transition-colors duration-200 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title & Action */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 mb-3 font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>PHP 8+ Standalone Codebase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Self-Contained PHP Project Codebase
            </h2>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              As requested, the complete personal portfolio application is prepared as a zero-dependency, production-grade PHP web application ready for Apache, cPanel, XAMPP, LAMP, or Docker with 1-click ZIP export.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              id="php-download-zip-btn"
              type="button"
              onClick={handleDownload}
              disabled={isZipping}
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/60 transition-all flex items-center gap-2.5 cursor-pointer active:scale-95"
            >
              <FolderArchive className="w-4 h-4" />
              <span>{isZipping ? 'Bundling ZIP Package...' : 'Download PHP Project (.ZIP)'}</span>
            </button>
          </div>
        </div>

        {/* Professional Code Explorer Window */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-2xl backdrop-blur-xs">
          
          {/* Top Window Bar with macOS Dots & File Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-2.5 gap-3">
            
            <div className="flex items-center gap-4">
              {/* Terminal Window Controls */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>

              {/* File Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
                {PHP_PROJECT_FILES.map((file) => (
                  <button
                    key={file.filename}
                    type="button"
                    onClick={() => setSelectedFilename(file.filename)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all shrink-0 cursor-pointer ${
                      selectedFilename === file.filename
                        ? 'bg-sky-600 text-white shadow-xs font-semibold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                    }`}
                  >
                    {file.filename}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                title="Copy current file code to clipboard"
              >
                {copied ? (
                  <>
                    <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy File Code</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* File description subheader */}
          <div className="bg-slate-950/40 border-b border-slate-800/80 px-6 py-2.5 flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-sky-400 font-semibold flex items-center gap-2">
              <FileCode className="w-3.5 h-3.5" />
              {currentFile.filename}
            </span>
            <span className="italic text-slate-400 text-right">{currentFile.description}</span>
          </div>

          {/* Code Editor Body with Line Numbers */}
          <div className="p-4 sm:p-6 overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed max-h-[500px] overflow-y-auto bg-slate-950">
            <table className="border-collapse w-full">
              <tbody>
                {codeLines.map((line, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/60">
                    <td className="pr-4 py-0.5 select-none text-right text-slate-600 text-[11px] font-mono w-10 shrink-0">
                      {idx + 1}
                    </td>
                    <td className="py-0.5 whitespace-pre">
                      <code>{line}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3 Step Deployment Instructions Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-sm mb-2">
              <Terminal className="w-4 h-4" />
              <span>1. Built-in PHP Server</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Fastest way to test the PHP project locally with zero extra dependencies:
            </p>
            <pre className="p-2.5 rounded-lg bg-slate-950 font-mono text-xs text-slate-300 overflow-x-auto border border-slate-800">
              <code>cd php-project&#10;php -S localhost:8000</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
              <Server className="w-4 h-4" />
              <span>2. XAMPP / WAMP / Apache</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Extract the downloaded ZIP package directly into your server web root:
            </p>
            <pre className="p-2.5 rounded-lg bg-slate-950 font-mono text-xs text-slate-300 overflow-x-auto border border-slate-800">
              <code>C:\xampp\htdocs\portfolio&#10;// Open http://localhost/portfolio</code>
            </pre>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-2">
              <Layers className="w-4 h-4" />
              <span>3. Live cPanel Web Hosting</span>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Upload into <code className="text-sky-300 font-mono">public_html</code> via cPanel File Manager and extract.
            </p>
            <span className="text-[11px] text-slate-400 block font-medium">
              &bull; Zero database setup required &bull; Works out-of-the-box on PHP 7.4 / 8.0+
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
