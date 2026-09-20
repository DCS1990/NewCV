<!-- Footer -->
<footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-12 pb-8 transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div class="md:col-span-2">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-9 h-9 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-base">
                        CS
                    </div>
                    <span class="font-semibold text-slate-900 dark:text-white text-lg">
                        <?= e(PROFILE_NAME) ?>
                    </span>
                </div>
                <p class="text-sm text-slate-600 dark:text-slate-400 max-w-md mb-4 leading-relaxed">
                    Senior IT Support & Infrastructure Specialist with over 13 years of operational leadership across MAS Capital and Brandix manufacturing operations.
                </p>
                <div class="flex items-center gap-3 text-slate-500 dark:text-slate-400">
                    <a href="<?= e(PROFILE_LINKEDIN) ?>" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="LinkedIn">
                        <i data-lucide="linkedin" class="w-5 h-5"></i>
                    </a>
                    <a href="<?= e(PROFILE_GITHUB) ?>" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="GitHub">
                        <i data-lucide="github" class="w-5 h-5"></i>
                    </a>
                    <a href="<?= e(PROFILE_WHATSAPP_URL) ?>" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="WhatsApp">
                        <i data-lucide="message-square" class="w-5 h-5"></i>
                    </a>
                    <a href="mailto:<?= e(PROFILE_EMAIL) ?>" class="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400 transition-colors" aria-label="Email">
                        <i data-lucide="mail" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>

            <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">Quick Navigation</h4>
                <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li><a href="#about" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Core Focus</a></li>
                    <li><a href="#experience" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Career Timeline</a></li>
                    <li><a href="#skills" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Technical Skills</a></li>
                    <li><a href="#projects" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">Applied Projects</a></li>
                    <li><a href="#itam" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">IT Asset Management</a></li>
                </ul>
            </div>

            <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">Direct Contact</h4>
                <ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li class="flex items-center gap-2">
                        <i data-lucide="mail" class="w-4 h-4 text-sky-600 dark:text-sky-400"></i>
                        <span class="break-all"><?= e(PROFILE_EMAIL) ?></span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i data-lucide="phone" class="w-4 h-4 text-sky-600 dark:text-sky-400"></i>
                        <span><?= e(PROFILE_PHONE) ?></span>
                    </li>
                    <li class="flex items-center gap-2">
                        <i data-lucide="map-pin" class="w-4 h-4 text-sky-600 dark:text-sky-400"></i>
                        <span><?= e(PROFILE_LOCATION) ?></span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <p>© <?= date('Y') ?> <?= e(PROFILE_NAME) ?>. All rights reserved. Enterprise IT & Infrastructure.</p>
            <p class="flex items-center gap-1">
                Built with PHP, HTML5 & Tailwind CSS
            </p>
        </div>
    </div>
</footer>

<!-- Scripts -->
<script>
    // Initialize Lucide icons
    lucide.createIcons();

    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn?.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // Mobile Menu Toggle Logic
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileBtn?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('hidden');
    });

    // Close mobile menu on anchor click
    mobileMenu?.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
</script>
</body>
</html>
