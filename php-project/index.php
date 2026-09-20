<?php
require_once __DIR__ . '/header.php';
?>

<!-- Hero Section -->
<section id="hero" class="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div class="lg:col-span-8 space-y-6">
                <!-- Verified Experience Pill -->
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>13+ Years Enterprise Experience &bull; Available for Senior IT Roles</span>
                </div>

                <!-- Main Heading -->
                <div class="space-y-2">
                    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                        <?= e(PROFILE_NAME) ?>
                    </h1>
                    <p class="text-lg sm:text-xl font-medium text-sky-600 dark:text-sky-400">
                        <?= e(PROFILE_TITLE) ?>
                    </p>
                </div>

                <!-- Executive Tagline & Summary -->
                <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                    Senior technical specialist with extensive background supporting multi-facility apparel conglomerates (<span class="font-semibold text-slate-800 dark:text-slate-200">MAS Holdings</span> &amp; <span class="font-semibold text-slate-800 dark:text-slate-200">Brandix</span>). Specialist in enterprise IT infrastructure uptime, IT Asset Management (ITAM), Microsoft Intune cloud endpoint governance, and workflow automation.
                </p>

                <!-- Action CTAs -->
                <div class="flex flex-wrap items-center gap-3 pt-2">
                    <a href="#projects" class="px-5 py-2.5 rounded-lg text-sm font-semibold bg-sky-600 hover:bg-sky-700 text-white shadow-sm transition-all inline-flex items-center gap-2">
                        <i data-lucide="folder-kanban" class="w-4 h-4"></i> View Applied Projects
                    </a>
                    <a href="download-cv.php" class="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-sm transition-all inline-flex items-center gap-2">
                        <i data-lucide="file-text" class="w-4 h-4"></i> Download CV (PDF)
                    </a>
                    <a href="#contact" class="px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors inline-flex items-center gap-2">
                        <i data-lucide="mail" class="w-4 h-4"></i> Contact Me
                    </a>
                </div>

                <!-- Quick Contact Info Pills -->
                <div class="pt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
                    <a href="mailto:<?= e(PROFILE_EMAIL) ?>" class="inline-flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                        <i data-lucide="mail" class="w-4 h-4 text-sky-500"></i> <?= e(PROFILE_EMAIL) ?>
                    </a>
                    <a href="<?= e(PROFILE_WHATSAPP_URL) ?>" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        <i data-lucide="message-square" class="w-4 h-4 text-emerald-500"></i> WhatsApp: <?= e(PROFILE_WHATSAPP) ?>
                    </a>
                    <span class="inline-flex items-center gap-1.5">
                        <i data-lucide="map-pin" class="w-4 h-4 text-amber-500"></i> <?= e(PROFILE_LOCATION) ?>
                    </span>
                </div>
            </div>

            <!-- Profile Summary Card -->
            <div class="lg:col-span-4">
                <div class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-600 to-blue-500 text-white flex items-center justify-center font-bold text-2xl shadow-inner">
                            CS
                        </div>
                        <div>
                            <h3 class="font-bold text-slate-900 dark:text-white text-lg">Chaminda Sampath</h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400">Balangoda, Sri Lanka</p>
                            <span class="inline-block mt-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                                Active in Operations
                            </span>
                        </div>
                    </div>

                    <!-- Verified Stats Grid -->
                    <div class="grid grid-cols-2 gap-3 pt-2">
                        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                            <span class="text-2xl font-bold text-sky-600 dark:text-sky-400 block"><?= e(PROFILE_YEARS_EXP) ?>+</span>
                            <span class="text-xs text-slate-500 dark:text-slate-400">Years Experience</span>
                        </div>
                        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                            <span class="text-2xl font-bold text-sky-600 dark:text-sky-400 block"><?= e(PROFILE_ENDPOINTS) ?></span>
                            <span class="text-xs text-slate-500 dark:text-slate-400">Managed Endpoints</span>
                        </div>
                        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                            <span class="text-2xl font-bold text-sky-600 dark:text-sky-400 block"><?= e(PROFILE_SLA) ?></span>
                            <span class="text-xs text-slate-500 dark:text-slate-400">SLA Adherence</span>
                        </div>
                        <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50">
                            <span class="text-2xl font-bold text-sky-600 dark:text-sky-400 block">4</span>
                            <span class="text-xs text-slate-500 dark:text-slate-400">Enterprise Tenures</span>
                        </div>
                    </div>

                    <div class="pt-2">
                        <a href="<?= e(PROFILE_LINKEDIN) ?>" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors">
                            <i data-lucide="linkedin" class="w-4 h-4 text-sky-600"></i> View LinkedIn Profile
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- About & 11 Focus Areas -->
<section id="about" class="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">Core Competencies</h2>
            <h3 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                11 Pillars of Enterprise IT Operations
            </h3>
            <p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                A battle-tested skillset built over thirteen years on the frontlines of large-scale manufacturing facilities.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach ($focusAreas as $area): ?>
                <div class="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 hover:border-sky-300 dark:hover:border-sky-600 transition-all flex flex-col justify-between">
                    <div>
                        <div class="w-10 h-10 rounded-lg bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
                            <i data-lucide="<?= e($area['icon']) ?>" class="w-5 h-5"></i>
                        </div>
                        <h4 class="font-semibold text-slate-900 dark:text-white text-base mb-2">
                            <?= e($area['title']) ?>
                        </h4>
                        <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            <?= e($area['description']) ?>
                        </p>
                    </div>
                    <div class="pt-3 border-t border-slate-200/60 dark:border-slate-700/40 flex items-center justify-between text-xs">
                        <span class="text-slate-400 dark:text-slate-500 font-medium">Impact</span>
                        <span class="font-semibold text-sky-600 dark:text-sky-400"><?= e($area['metrics']) ?></span>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Career Experience Timeline -->
<section id="experience" class="py-20 border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">Career Journey</h2>
            <h3 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Professional Experience Timeline
            </h3>
            <p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                13+ years of continuous service across multinational manufacturing and technology organizations.
            </p>
        </div>

        <div class="space-y-8 max-w-4xl mx-auto">
            <?php foreach ($experiences as $exp): ?>
                <div class="relative bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:shadow-md">
                    <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <h4 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                                    <?= e($exp['role']) ?>
                                </h4>
                                <?php if (!empty($exp['isCurrent'])): ?>
                                    <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                                        CURRENT
                                    </span>
                                <?php endif; ?>
                            </div>
                            <p class="text-sm font-semibold text-sky-600 dark:text-sky-400">
                                <?= e($exp['company']) ?>
                            </p>
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                <?= e($exp['division']) ?> &bull; <?= e($exp['location']) ?>
                            </p>
                        </div>
                        <span class="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0 self-start">
                            <?= e($exp['period']) ?>
                        </span>
                    </div>

                    <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic mb-4">
                        <?= e($exp['description']) ?>
                    </p>

                    <!-- Key Responsibilities -->
                    <ul class="space-y-2 mb-6 text-sm text-slate-700 dark:text-slate-300">
                        <?php foreach ($exp['points'] as $point): ?>
                            <li class="flex items-start gap-2.5">
                                <i data-lucide="check-circle-2" class="w-4 h-4 text-sky-500 shrink-0 mt-0.5"></i>
                                <span class="leading-relaxed"><?= e($point) ?></span>
                            </li>
                        <?php endforeach; ?>
                    </ul>

                    <!-- Technology Badges -->
                    <div class="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <?php foreach ($exp['technologies'] as $tech): ?>
                            <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                <?= e($tech) ?>
                            </span>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Skills & Capabilities -->
<section id="skills" class="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">Technical Mastery</h2>
            <h3 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Skills &amp; Technology Stack
            </h3>
            <p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Ground-truth capabilities tested across 1,200+ endpoints and high-volume industrial line operations.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <?php foreach ($skillsByCategory as $categoryTitle => $skills): ?>
                <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                    <h4 class="font-bold text-slate-900 dark:text-white text-lg mb-4 flex items-center justify-between">
                        <span><?= e($categoryTitle) ?></span>
                        <span class="text-xs font-normal text-slate-500 dark:text-slate-400"><?= count($skills) ?> core areas</span>
                    </h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <?php foreach ($skills as $skill): ?>
                            <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                                <span class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                                    <?= e($skill['name']) ?>
                                </span>
                                <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900">
                                    <?= e($skill['exp']) ?>
                                </span>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Applied Project Portfolio -->
<section id="projects" class="py-20 border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">Practical Engineering</h2>
            <h3 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Applied Projects &amp; Software Tools
            </h3>
            <p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Practical software utilities engineered to resolve real-world bottlenecks in factory floor IT operations.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <?php foreach ($projects as $proj): ?>
                <div class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="px-2.5 py-0.5 rounded text-xs font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                                <?= e($proj['category']) ?>
                            </span>
                            <span class="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> <?= e($proj['status']) ?>
                            </span>
                        </div>

                        <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">
                            <?= e($proj['title']) ?>
                        </h4>

                        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            <?= e($proj['description']) ?>
                        </p>

                        <div class="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 mb-4 border border-slate-100 dark:border-slate-800">
                            <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">Problem Solved</span>
                            <p class="text-xs text-slate-700 dark:text-slate-300 font-medium leading-normal">
                                <?= e($proj['problem']) ?>
                            </p>
                        </div>

                        <ul class="space-y-1.5 mb-6 text-xs text-slate-600 dark:text-slate-400">
                            <?php foreach ($proj['features'] as $f): ?>
                                <li class="flex items-start gap-2">
                                    <i data-lucide="check" class="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5"></i>
                                    <span><?= e($f) ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>

                    <div>
                        <div class="flex flex-wrap gap-1.5 mb-4">
                            <?php foreach ($proj['tech'] as $t): ?>
                                <span class="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                    <?= e($t) ?>
                                </span>
                            <?php endforeach; ?>
                        </div>

                        <a href="<?= e($proj['github']) ?>" target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors">
                            <i data-lucide="github" class="w-4 h-4"></i> View on GitHub
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Dedicated ITAM Section -->
<section id="itam" class="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">Specialized Domain</h2>
            <h3 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Enterprise IT Asset Management (ITAM)
            </h3>
            <p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Rigorous operational governance protecting corporate capital, maintaining audit readiness, and minimizing hardware TCO.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <?php foreach ($itamPillars as $pillar): ?>
                <div class="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 flex flex-col justify-between">
                    <div>
                        <span class="text-3xl font-black text-sky-600/30 dark:text-sky-400/30 block mb-2 font-mono">
                            <?= e($pillar['num']) ?>
                        </span>
                        <h4 class="font-bold text-slate-900 dark:text-white text-base mb-2">
                            <?= e($pillar['title']) ?>
                        </h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                            <?= e($pillar['desc']) ?>
                        </p>
                    </div>

                    <ul class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 pt-3 border-t border-slate-200/60 dark:border-slate-700/40">
                        <?php foreach ($pillar['bullets'] as $b): ?>
                            <li class="flex items-start gap-2">
                                <span class="text-sky-500 font-bold">&bull;</span>
                                <span><?= e($b) ?></span>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Education & Certifications -->
<section id="certifications" class="py-20 border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">Qualifications</h2>
            <h3 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Education &amp; Professional Certifications
            </h3>
            <p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Formal business management degree paired with industry-standard IT networking and infrastructure accreditations.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <?php foreach ($certifications as $cert): ?>
                <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                    <div>
                        <div class="flex items-center justify-between mb-3">
                            <span class="px-2.5 py-0.5 rounded text-xs font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                                <?= e($cert['badge']) ?>
                            </span>
                        </div>
                        <h4 class="text-base font-bold text-slate-900 dark:text-white mb-1">
                            <?= e($cert['title']) ?>
                        </h4>
                        <p class="text-xs font-semibold text-sky-600 dark:text-sky-400 mb-3">
                            <?= e($cert['issuer']) ?>
                        </p>
                        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                            <?= e($cert['desc']) ?>
                        </p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-20 bg-white dark:bg-slate-900 transition-colors duration-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div class="lg:col-span-5 space-y-6">
                <div>
                    <h2 class="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">Get In Touch</h2>
                    <h3 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Let's Discuss Your Infrastructure Needs
                    </h3>
                    <p class="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Available for Senior IT Support, Infrastructure Leadership, and IT Asset Management positions across Sri Lanka and remote engagements.
                    </p>
                </div>

                <div class="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                    <div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                        <i data-lucide="mail" class="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0"></i>
                        <div>
                            <span class="text-xs text-slate-400 dark:text-slate-500 block">Direct Email</span>
                            <a href="mailto:<?= e(PROFILE_EMAIL) ?>" class="font-medium hover:text-sky-600 dark:hover:text-sky-400 transition-colors break-all">
                                <?= e(PROFILE_EMAIL) ?>
                            </a>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                        <i data-lucide="message-square" class="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0"></i>
                        <div>
                            <span class="text-xs text-slate-400 dark:text-slate-500 block">WhatsApp Direct</span>
                            <a href="<?= e(PROFILE_WHATSAPP_URL) ?>" target="_blank" rel="noopener noreferrer" class="font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                                <?= e(PROFILE_WHATSAPP) ?>
                            </a>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                        <i data-lucide="phone" class="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0"></i>
                        <div>
                            <span class="text-xs text-slate-400 dark:text-slate-500 block">Mobile Phone</span>
                            <span class="font-medium"><?= e(PROFILE_PHONE) ?></span>
                        </div>
                    </div>

                    <div class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                        <i data-lucide="map-pin" class="w-5 h-5 text-amber-500 shrink-0"></i>
                        <div>
                            <span class="text-xs text-slate-400 dark:text-slate-500 block">Location</span>
                            <span class="font-medium"><?= e(PROFILE_LOCATION) ?></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="lg:col-span-7">
                <div class="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 shadow-sm">
                    <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Send an Inquiry</h4>
                    <p class="text-xs text-slate-600 dark:text-slate-400 mb-6">Leave a message below and I will respond to your corporate or recruitment inquiry promptly.</p>

                    <?php if (isset($_GET['status'])): ?>
                        <?php if ($_GET['status'] === 'success'): ?>
                            <div class="p-4 mb-6 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-sm">
                                <?= e($_GET['msg'] ?? 'Message sent successfully!') ?>
                            </div>
                        <?php else: ?>
                            <div class="p-4 mb-6 rounded-lg bg-rose-50 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-sm">
                                <?= e($_GET['msg'] ?? 'Failed to send message.') ?>
                            </div>
                        <?php endif; ?>
                    <?php endif; ?>

                    <form action="contact.php" method="POST" class="space-y-4">
                        <input type="hidden" name="csrf_token" value="<?= e($_SESSION['csrf_token'] ?? '') ?>">

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label for="name" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Name *</label>
                                <input type="text" id="name" name="name" required class="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500">
                            </div>
                            <div>
                                <label for="email" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                                <input type="email" id="email" name="email" required class="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500">
                            </div>
                        </div>

                        <div>
                            <label for="subject" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                            <input type="text" id="subject" name="subject" value="Corporate IT Inquiry" class="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500">
                        </div>

                        <div>
                            <label for="message" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Message *</label>
                            <textarea id="message" name="message" rows="4" required class="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
                        </div>

                        <button type="submit" class="w-full py-2.5 px-4 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm transition-colors shadow-sm inline-flex items-center justify-center gap-2">
                            <i data-lucide="send" class="w-4 h-4"></i>
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>
            </div>

        </div>
    </div>
</section>

<?php
require_once __DIR__ . '/footer.php';
?>
