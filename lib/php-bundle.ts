'use client';

import JSZip from 'jszip';

export interface PhpFileEntry {
  filename: string;
  description: string;
  category: 'core' | 'views' | 'handlers' | 'config';
  code: string;
}

export const PHP_PROJECT_FILES: PhpFileEntry[] = [
  {
    filename: 'config.php',
    description: 'Central configuration constants, sessions, and CSRF security initialization',
    category: 'config',
    code: `<?php
/**
 * Configuration File
 * Chaminda Sampath - Professional IT Support & Infrastructure Portfolio
 */

// Environment settings
define('APP_NAME', 'Chaminda Sampath – IT Support & Infrastructure Portfolio');
define('APP_VERSION', '1.0.0');
define('APP_URL', 'http://localhost/php-project');

// Contact & Profile Details
define('PROFILE_NAME', 'Chaminda Sampath');
define('PROFILE_TITLE', 'IT Support Specialist | Infrastructure | IT Operations | Asset Management');
define('PROFILE_TAGLINE', '13+ Years Delivering Resilient Enterprise ICT Operations, ITAM Governance & Workflow Automation');
define('PROFILE_EMAIL', 'chaminda.d.sampath@gmail.com');
define('PROFILE_PHONE', '+94 75 560 6269');
define('PROFILE_WHATSAPP', '+94 77 649 6163');
define('PROFILE_WHATSAPP_URL', 'https://wa.me/94776496163');
define('PROFILE_LOCATION', 'Balangoda, Sri Lanka');
define('PROFILE_LINKEDIN', 'https://www.linkedin.com/in/chaminda-sampath-7aab40104/');
define('PROFILE_GITHUB', 'https://github.com/DCS1990');
define('PROFILE_YEARS_EXP', 13);
define('PROFILE_ENDPOINTS', '1,200+');
define('PROFILE_SLA', '99.8%');

// Security settings
session_start();
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Helper to escape output for XSS protection
function e($string) {
    return htmlspecialchars($string ?? '', ENT_QUOTES, 'UTF-8');
}
?>`,
  },
  {
    filename: 'data.php',
    description: 'Structured PHP data arrays for experience timeline, projects, skills, and ITAM pillars',
    category: 'core',
    code: `<?php
/**
 * Data definitions for Chaminda Sampath's Portfolio
 * Centralized data source for easy updates without touching HTML templates.
 */

$focusAreas = [
    [
        "title" => "IT Infrastructure Support & Administration",
        "description" => "Multi-rack server room operations, UPS power integrity, structured fiber/copper distribution, and continuous plant floor availability.",
        "icon" => "server",
        "metrics" => "24/7 Plant Uptime"
    ],
    [
        "title" => "Executive & End-User Technical Support (L1/L2)",
        "description" => "Rapid incident response, hardware imaging, software provisioning, and VIP executive computing assistance adhering to strict SLAs.",
        "icon" => "headphones",
        "metrics" => "1,200+ Users"
    ],
    [
        "title" => "Network Diagnostics & LAN/WAN Operations",
        "description" => "Cisco managed switches, VLAN segmentation, industrial Wi-Fi access points, firewall rules, and low-latency line connectivity.",
        "icon" => "network",
        "metrics" => "Multi-VLAN Segregation"
    ],
    [
        "title" => "Hardware Component Repair & RMA Lifecycles",
        "description" => "Component-level motherboard diagnostics, barcode & thermal printer service, POS terminals, and third-party vendor warranty management.",
        "icon" => "wrench",
        "metrics" => "35% Failure Reduction"
    ],
    [
        "title" => "Comprehensive IT Asset Management (ITAM)",
        "description" => "End-to-end asset tracking from procurement, barcode tagging, physical reconciliation, license accounting to secure decommissioning.",
        "icon" => "box",
        "metrics" => "100% Audit Compliance"
    ],
    [
        "title" => "Microsoft Intune & Endpoint Management",
        "description" => "Cloud-native device enrollment, Windows Autopilot configuration, BitLocker enforcement, compliance policies, and app deployment.",
        "icon" => "shield-check",
        "metrics" => "Zero-Touch Deployment"
    ],
    [
        "title" => "Process Standardization & SLA Governance",
        "description" => "Implementation of ITIL V3 service principles, ticketing workflow hygiene, root-cause analysis (RCA), and vendor SLA enforcement.",
        "icon" => "file-check",
        "metrics" => "99.8% SLA Adherence"
    ],
    [
        "title" => "Operational Automation & Scripting",
        "description" => "Tailored Python, PowerShell, and Bash tools that eliminate repetitive administrative burdens, verify backups, and ping critical endpoints.",
        "icon" => "terminal",
        "metrics" => "15+ Hours Saved/Wk"
    ],
    [
        "title" => "Active Directory, Entra ID & Access Control",
        "description" => "User onboarding/offboarding, Group Policy Objects (GPOs), RBAC delegation, hybrid directory synchronization, and MFA compliance.",
        "icon" => "users",
        "metrics" => "Automated Provisioning"
    ],
    [
        "title" => "Disaster Recovery & Backup Verification",
        "description" => "Automated NAS/SAN snapshot verification, offsite replication monitoring, database backup integrity testing, and bare-metal recovery drills.",
        "icon" => "database",
        "metrics" => "Daily Checksum Audits"
    ],
    [
        "title" => "Vendor Liaison & Tech Procurement",
        "description" => "Technical hardware evaluations, RFP quote comparisons, spare part inventory control, and warranty service level coordination.",
        "icon" => "truck",
        "metrics" => "Optimal TCO & Spares"
    ]
];

$experiences = [
    [
        "company" => "MAS Capital (Pvt) Ltd / MAS ACTIVE (PRIVATE) LIMITED",
        "division" => "MAS Holdings – MAS Active Division",
        "role" => "IT Support Specialist – Infrastructure & Operations",
        "period" => "January 2023 – Present",
        "location" => "Sri Lanka",
        "isCurrent" => true,
        "description" => "MAS Holdings is South Asia's largest apparel tech manufacturer and innovator, employing over 100,000 people globally.",
        "points" => [
            "Orchestrate day-to-day enterprise ICT operations, infrastructure health, and L1/L2 incident resolution across plant business units.",
            "Administer Microsoft Intune (Endpoint Manager) for automated Windows Autopilot laptop rollouts, BitLocker encryption escrow, and baseline compliance.",
            "Lead plant-wide IT Asset Management (ITAM): physical barcode audits, depreciation registries, Microsoft 365 licensing reconciliation, and compliant disposal.",
            "Supervise Cisco network infrastructure comprising 24/48-port PoE switches, industrial wireless APs, fiber backbones, and plant CCTV networks.",
            "Develop custom operational automation scripts in PowerShell and Python to verify critical printer availability and dispatch automated alerts.",
            "Act as primary technical liaison for vendor warranty repairs (RMA), ensuring replacement equipment complies with strict enterprise security baselines."
        ],
        "technologies" => ["Microsoft Intune", "Windows Server 2022", "Active Directory", "Cisco Catalyst", "PowerShell", "Python", "ITAM / Barcoding", "Office 365"]
    ],
    [
        "company" => "Brandix Apparel Solutions Ltd – Essentials",
        "division" => "Brandix Group – Essentials Business Unit",
        "role" => "Executive – IT Operations & Support",
        "period" => "March 2022 – 2023",
        "location" => "Sri Lanka",
        "isCurrent" => false,
        "description" => "Brandix is a benchmark apparel solutions provider operating across Sri Lanka, India, and Bangladesh.",
        "points" => [
            "Managed plant-level IT operations, ensuring 99.8% uptime for time-critical production line terminals and cutting/packing IT stations.",
            "Established the facility's centralized IT Asset Management framework, tracking serial numbers, warranty terms, and physical floor allocations.",
            "Conducted quarterly physical inventory reconciliations against Active Directory domain logs, achieving 100% audit alignment.",
            "Administered Windows Domain Controllers, DHCP scope reservations, file server access permissions, and automated endpoint antivirus definitions.",
            "Mentored junior support technicians on standard troubleshooting protocols, incident escalation paths, and ticket SLA reporting."
        ],
        "technologies" => ["Active Directory", "Windows Server", "ITIL V3 Practices", "Cisco Networking", "Hardware Diagnostics", "Asset Auditing"]
    ],
    [
        "company" => "Dream Curious International Pvt Ltd",
        "division" => "Dream Curious International (Dubai, UAE)",
        "role" => "IT Support & System Administrator",
        "period" => "December 2021 – March 2022",
        "location" => "Dubai, UAE (Offshore Support)",
        "isCurrent" => false,
        "description" => "International commerce and technology consulting firm managing distributed teams across UAE and Asia.",
        "points" => [
            "Delivered remote technical infrastructure support, secure VPN tunnel management, and identity access control for remote workforce.",
            "Configured cloud mailboxes, file collaboration repositories, and endpoint security agents across Windows and macOS clients.",
            "Automated daily cloud backup verification scripts and generated weekly uptime and security health scorecards."
        ],
        "technologies" => ["Cloud Infrastructure", "Remote Administration", "VPN / Security", "Windows / macOS", "Scripting"]
    ],
    [
        "company" => "Brandix Apparel Solutions Ltd – Casualwear",
        "division" => "Brandix Group – Casualwear Division",
        "role" => "Senior IT Support Associate / Infrastructure Technician",
        "period" => "December 2012 – November 2021",
        "location" => "Sri Lanka",
        "isCurrent" => false,
        "description" => "9-year distinguished tenure managing large manufacturing facility ICT operations and high-volume hardware fleets.",
        "points" => [
            "Provided frontline infrastructure and hardware support across 800+ user endpoints, industrial barcode printers (Zebra/Datamax), and production PCs.",
            "Designed and implemented the facility's preventive hardware maintenance program, decreasing unscheduled equipment breakdown by 35%.",
            "Executed physical structured cabling projects (Cat6 copper, patch panel termination, fiber distribution, and comms rack dressing).",
            "Handled component-level repairs of power supplies, motherboards, display panels, and thermal printheads, substantially curbing replacement costs.",
            "Participated actively in multiple ISO 27001, ITIL, and internal corporate compliance audits with zero major non-conformities."
        ],
        "technologies" => ["Structured Cabling", "Cisco Switches", "Component Repair", "Industrial Printers", "Hardware RMA", "Preventive Care", "LAN Administration"]
    ]
];

$projects = [
    [
        "id" => "itam-system",
        "title" => "IT Asset Management System (ITAM Suite)",
        "category" => "Audit & ITAM",
        "description" => "Enterprise web application built to catalog, track, and manage the full lifecycle of enterprise IT hardware, assigned custodians, warranties, and maintenance histories across factory divisions.",
        "problem" => "Eliminated manual paper and outdated spreadsheet records that caused frequent asset misplacement and missed warranty deadlines.",
        "tech" => ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "HTML5"],
        "features" => [
            "Barcode & QR Code asset tag generation and rapid camera/scanner lookup",
            "Automated straight-line depreciation calculating real-time net book value",
            "Software license assignment registry preventing compliance over-usage",
            "User handover sign-off receipts with PDF export capabilities",
            "Warranty expiration notification engine 60/30/15 days prior"
        ],
        "status" => "In Production",
        "github" => "https://github.com/DCS1990"
    ],
    [
        "id" => "asset-audit-dashboard",
        "title" => "Asset Audit & Reconciliation Dashboard",
        "category" => "Audit & ITAM",
        "description" => "Reconciliation engine that ingests physical floor audit scans and compares them against live Active Directory and Microsoft Intune last-seen timestamps to identify dormant, rogue, or missing devices.",
        "problem" => "Reduced multi-day audit reconciliation cycles to under 2 hours, discovering discrepancies with 100% accuracy.",
        "tech" => ["Python", "PowerShell", "PHP", "MySQL", "Chart.js"],
        "features" => [
            "Automated cross-referencing between physical audit CSVs and AD directory exports",
            "Variance categorization: 'Missing on Floor', 'Dormant in AD', 'Unregistered Device'",
            "Audit trail logging with timestamped examiner signatures",
            "Visual variance graphs breakdown by plant, floor, and department"
        ],
        "status" => "In Production",
        "github" => "https://github.com/DCS1990"
    ],
    [
        "id" => "repair-management",
        "title" => "IT Hardware Repair & RMA Tracker",
        "category" => "Service Operations",
        "description" => "Service tracking system logging all damaged laptops, thermal printheads, power supplies, and switch modules dispatched to external authorized service centers.",
        "problem" => "Stopped vendor turnaround delays and prevented spare unit pool shortages by introducing transparent status tracking.",
        "tech" => ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
        "features" => [
            "Vendor turnaround time (TAT) analytics benchmarked against agreed SLAs",
            "Buffer pool availability monitor tracking loaner laptops and spare printers",
            "Automated email alerts when repairs exceed 7 business days",
            "Cost-to-repair accumulation ledger for TCO replacement decisions"
        ],
        "status" => "Implemented",
        "github" => "https://github.com/DCS1990"
    ]
];
?>`,
  },
  {
    filename: 'index.php',
    description: 'Main responsive page rendering hero, timeline, skills, projects, ITAM, and contact section',
    category: 'views',
    code: `<?php
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
                    Senior technical specialist with extensive background supporting multi-facility apparel conglomerates (MAS Holdings & Brandix). Specialist in enterprise IT infrastructure uptime, IT Asset Management (ITAM), Microsoft Intune cloud endpoint governance, and workflow automation.
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
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<?php
require_once __DIR__ . '/footer.php';
?>`,
  },
  {
    filename: 'header.php',
    description: 'Header template with responsive navigation bar, theme switch button, and meta tags',
    category: 'views',
    code: `<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/data.php';
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= e(PROFILE_NAME) ?> – <?= e(PROFILE_TITLE) ?></title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased">
<header class="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" class="font-bold text-lg">Chaminda Sampath</a>
        <nav class="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </div>
</header>`,
  },
  {
    filename: 'footer.php',
    description: 'Footer template with copyright, social channels, and script initializers',
    category: 'views',
    code: `<!-- Footer -->
<footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-12 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
        <p>© <?= date('Y') ?> <?= e(PROFILE_NAME) ?>. All rights reserved. Enterprise IT & Infrastructure.</p>
    </div>
</footer>
<script>
    lucide.createIcons();
</script>
</body>
</html>`,
  },
  {
    filename: 'contact.php',
    description: 'PHP form backend with CSRF token verification, input sanitization, and response handling',
    category: 'handlers',
    code: `<?php
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = $_POST['csrf_token'] ?? '';
    if (!hash_equals($_SESSION['csrf_token'] ?? '', $token)) {
        die('CSRF token validation failed.');
    }

    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $message = trim($_POST['message'] ?? '');

    if (!empty($name) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($message)) {
        header("Location: index.php?status=success&msg=" . urlencode("Thank you, message sent!") . "#contact");
        exit;
    }
}
header('Location: index.php');
exit;`,
  },
  {
    filename: 'download-cv.php',
    description: 'Secure PDF file stream and download handler',
    category: 'handlers',
    code: `<?php
require_once __DIR__ . '/config.php';
$file = __DIR__ . '/Chaminda-Sampath-CV.pdf';
if (file_exists($file)) {
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="Chaminda-Sampath-CV.pdf"');
    readfile($file);
    exit;
} else {
    echo "CV PDF file is being updated. Contact " . PROFILE_EMAIL;
}
?>`,
  },
  {
    filename: '.htaccess',
    description: 'Apache configuration with security headers, XSS prevention, and Gzip compression',
    category: 'config',
    code: `# Apache Configuration
Options -Indexes
AddDefaultCharset UTF-8
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
</IfModule>`,
  },
  {
    filename: 'README.md',
    description: 'Deployment instruction manual for XAMPP, WAMP, Docker, cPanel, and Apache/Nginx',
    category: 'config',
    code: `# Chaminda Sampath – Standalone PHP Project
Deployment manual for XAMPP, cPanel, and Apache.
Run \`php -S localhost:8000\` to test locally.`,
  }
];

export async function downloadPhpProjectZip(): Promise<void> {
  const zip = new JSZip();
  const folder = zip.folder('chaminda-sampath-php-portfolio');

  for (const file of PHP_PROJECT_FILES) {
    folder?.file(file.filename, file.code);
  }

  const content = await zip.generateAsync({ type: 'blob' });
  const downloadUrl = URL.createObjectURL(content);
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = 'chaminda-sampath-php-project.zip';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(downloadUrl);
}
