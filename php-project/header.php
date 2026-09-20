<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/data.php';
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= e(PROFILE_NAME) ?> – <?= e(PROFILE_TITLE) ?></title>
    <meta name="description" content="<?= e(PROFILE_NAME) ?> - IT Support Specialist with 13+ years experience in Enterprise Infrastructure, IT Operations, ITAM, and Automation.">
    <meta name="author" content="<?= e(PROFILE_NAME) ?>">
    
    <!-- OpenGraph -->
    <meta property="og:title" content="<?= e(PROFILE_NAME) ?> – IT Support & Infrastructure Portfolio">
    <meta property="og:description" content="<?= e(PROFILE_TAGLINE) ?>">
    <meta property="og:type" content="website">

    <!-- Tailwind CSS (Play CDN for standalone portability) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#f0f7ff',
                            100: '#e0effe',
                            500: '#0284c7',
                            600: '#0369a1',
                            700: '#075985',
                            900: '#0c4a6e'
                        }
                    }
                }
            }
        }
    </script>
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <script>
        // Inline script to prevent flash of wrong theme
        if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    </script>
</head>
<body class="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased selection:bg-sky-500 selection:text-white transition-colors duration-200">

<!-- Navigation -->
<header id="site-header" class="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <!-- Brand Logo -->
            <a href="#hero" class="flex items-center gap-3 group">
                <div class="w-10 h-10 rounded-lg bg-sky-600 dark:bg-sky-500 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
                    CS
                </div>
                <div>
                    <span class="font-semibold text-slate-900 dark:text-white tracking-tight block text-base leading-tight">
                        <?= e(PROFILE_NAME) ?>
                    </span>
                    <span class="text-xs text-sky-600 dark:text-sky-400 font-medium block">
                        IT Support & Infrastructure
                    </span>
                </div>
            </a>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                <a href="#about" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">About</a>
                <a href="#experience" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Experience</a>
                <a href="#skills" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Skills</a>
                <a href="#projects" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Projects</a>
                <a href="#itam" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">ITAM Focus</a>
                <a href="#certifications" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Certifications</a>
                <a href="#contact" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Contact</a>
            </nav>

            <!-- Actions -->
            <div class="flex items-center gap-3">
                <!-- Theme toggle button -->
                <button type="button" id="theme-toggle" aria-label="Toggle theme" class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                    <i data-lucide="sun" class="w-5 h-5 hidden dark:block"></i>
                    <i data-lucide="moon" class="w-5 h-5 block dark:hidden"></i>
                </button>

                <!-- CV Download Button -->
                <a href="download-cv.php" class="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-600 hover:bg-sky-700 text-white transition-colors shadow-sm">
                    <i data-lucide="download" class="w-4 h-4"></i>
                    <span>Download CV</span>
                </a>

                <!-- Mobile Menu Button -->
                <button type="button" id="mobile-menu-btn" class="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Open menu">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Nav Menu -->
        <div id="mobile-menu" class="hidden md:hidden py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
            <a href="#about" class="px-2 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">About</a>
            <a href="#experience" class="px-2 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Experience</a>
            <a href="#skills" class="px-2 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Skills</a>
            <a href="#projects" class="px-2 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Projects</a>
            <a href="#itam" class="px-2 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">ITAM Focus</a>
            <a href="#certifications" class="px-2 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Certifications</a>
            <a href="#contact" class="px-2 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">Contact</a>
            <a href="download-cv.php" class="inline-flex items-center justify-center gap-2 mt-2 px-4 py-2 rounded-lg text-sm font-semibold bg-sky-600 text-white">
                <i data-lucide="download" class="w-4 h-4"></i> Download CV
            </a>
        </div>
    </div>
</header>
