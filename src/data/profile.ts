export interface PersonalInfo {
  name: string;
  roleTitle: string;
  credentialsSubtitle: string;
  tagline: string;
  summary: string;
  heroBio: string;
  email: string;
  phone: string;
  whatsapp: string;
  whatsappUrl: string;
  location: string;
  linkedin: string;
  github: string;
  heroChecks: string[];
  kpis: { number: string; title: string; subtitle: string }[];
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  isCurrent?: boolean;
  legalEntity?: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  subtitle: string;
  skills: string[];
  competencyCount: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  badge: 'Asset Management' | 'Automation & Tools' | 'Web Applications';
  status: 'In Production' | 'Completed';
  subLabel: string;
  description: string;
  operationalValue: string;
  technologies: string[];
  githubUrl: string;
  hasPhpSource?: boolean;
}

export interface ItamSpecialization {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tasks: string[];
}

export interface AutomationSolution {
  id: string;
  title: string;
  category: string;
  iconName: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  statusBadge: string;
}

export interface EducationCertificationItem {
  id: string;
  title: string;
  year: string;
  type: 'Degree' | 'Certification' | 'Diploma' | 'School';
  institution: string;
  description: string;
}

export const personalInfo: PersonalInfo = {
  name: "Chaminda Sampath",
  roleTitle: "IT Support Specialist | Infrastructure | IT Operations | Asset Management",
  credentialsSubtitle: "ICT Administrator, B.BM | Over 13 Years Enterprise IT Experience",
  tagline: "Bridging hands-on industrial IT infrastructure reliability with modern asset governance, team leadership, and targeted automation engineering.",
  summary: "With over 13 years of enterprise ICT administration and support experience across Sri Lanka and the UAE, I have managed high-availability IT infrastructures in demanding apparel manufacturing environments including Brandix Apparel Solutions and MAS Holdings.",
  heroBio: "I specialize in IT infrastructure support, site operations, asset management, network support, troubleshooting, and technology solutions. I also develop practical applications and automation tools to improve IT operations and business processes.",
  email: "chaminda.d.sampath@gmail.com",
  phone: "+94 75 560 6269",
  whatsapp: "+94 77 649 6163",
  whatsappUrl: "https://wa.me/94776496163",
  location: "Balangoda, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/chaminda-sampath-7aab40104/",
  github: "https://github.com/DCS1990",
  heroChecks: [
    "13+ Years Enterprise IT Operations",
    "End-to-End IT Asset Management (ITAM)",
    "Microsoft Intune & Device Governance",
    "Automation with Python, React & PowerShell",
  ],
  kpis: [
    {
      number: "13+",
      title: "Years in Enterprise IT",
      subtitle: "Administering production networks & servers since 2012",
    },
    {
      number: "2",
      title: "Apparel Conglomerates",
      subtitle: "Proven track record at Brandix Group & MAS Holdings",
    },
    {
      number: "6",
      title: "Technicians Led",
      subtitle: "Mentored site support teams delivering L1/L2 SLA resolution",
    },
    {
      number: "3",
      title: "Sites Managed",
      subtitle: "Simultaneous multi-site ICT governance & inventory control",
    },
  ],
};

export const aboutNarratives = [
  "With over 13 years of enterprise ICT administration and support experience across Sri Lanka and the UAE, I have managed high-availability IT infrastructures in demanding apparel manufacturing environments including Brandix Apparel Solutions and MAS Holdings.",
  "My hands-on expertise spans core infrastructure—from Windows Server 2016, Active Directory, and Cisco networks to VMware virtualization, backup strategies, and Microsoft Intune / Entra ID device governance.",
  "Beyond day-to-day L1/L2 support and managing a team of six IT technicians, I specialize in end-to-end IT Asset Management (ITAM): physical audits, offline asset reconciliation, aging analysis, vendor coordination, and compliant disposal.",
  "To solve recurring operational bottlenecks, I leverage software development and scripting (Python, TypeScript, React, Next.js, PowerShell, and Google Apps Script) to deliver custom asset dashboards, automated reconciliation systems, and internal workflow tools.",
];

export const executiveSummaryDetails = [
  { label: "Current Role", value: "IT Support Specialist (L1) – MAS Capital (Pvt) Ltd" },
  { label: "Experience", value: "Over 13 years in factory & enterprise ICT (since 2012)" },
  { label: "Education", value: "Bachelor of Business Management (B.BM), Univ. of Kelaniya" },
  { label: "Core Specialization", value: "ITAM, Infrastructure Support, Network Diagnostics & Automation" },
  { label: "Base", value: "Balangoda, Sri Lanka (Worked in Sri Lanka & Dubai)" },
];

export const coreOperationalFocusAreas: FocusArea[] = [
  {
    id: "infra",
    title: "IT Infrastructure Support",
    description: "Windows Server 2016, Active Directory, DNS/DHCP, VMware virtualization, NAS storage, and automated scheduled backups for 99.9% site uptime.",
    iconName: "Server",
  },
  {
    id: "helpdesk",
    title: "End-User & Help Desk Support",
    description: "Level 1 and Level 2 diagnostic resolution, workstation imaging, onboarding, peripheral setup, and leading a 6-technician site support team.",
    iconName: "Users",
  },
  {
    id: "network",
    title: "Network & Connectivity",
    description: "LAN/WAN diagnostics, switch/router troubleshooting, VLAN tagging, WiFi access point deployments, and coordinating with enterprise network engineering.",
    iconName: "Network",
  },
  {
    id: "hardware",
    title: "Hardware & Software Support",
    description: "Comprehensive maintenance of PCs, thermal barcode printers, industrial factory terminals, OS upgrades, and patch deployment through SCCM.",
    iconName: "Wrench",
  },
  {
    id: "itam",
    title: "IT Asset Management (ITAM)",
    description: "Tracking hardware lifecycles from procurement tagging and custodian assignment to depreciation analysis, warranty tracking, and secure disposal.",
    iconName: "Boxes",
  },
  {
    id: "intune",
    title: "Microsoft Intune & MDM",
    description: "Enforcing endpoint security policies, Windows Autopilot provisioning, compliance baselines, remote wiping, and Entra ID (Azure AD) sync.",
    iconName: "Smartphone",
  },
  {
    id: "reliability",
    title: "IT Operations & Reliability",
    description: "Running proactive site health monitoring, disaster recovery protocols, standard operating procedure documentation, and shift handovers.",
    iconName: "Activity",
  },
  {
    id: "vendor",
    title: "Vendor & Repair Coordination",
    description: "Managing external warranty claims, repair quotation assessments, loaner hardware rotation, procurement verification, and supplier SLAs.",
    iconName: "Truck",
  },
  {
    id: "audits",
    title: "IT Audits & Asset Reconciliation",
    description: "Performing physical floor serial audits, investigating inactive/offline devices, aligning physical counts with digital records, and passing compliance audits.",
    iconName: "FileCheck",
  },
  {
    id: "process",
    title: "Process Improvement",
    description: "Eliminating procedural redundancies, digitizing paper approvals, and standardizing site ICT request flows to accelerate ticket resolution.",
    iconName: "Zap",
  },
  {
    id: "automation",
    title: "Automation & App Development",
    description: "Engineering practical tools using Python, React, Next.js, PowerShell, and Google Apps Script to automate asset reporting and site operations.",
    iconName: "Code2",
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: "mas-capital",
    period: "1 July 2026 – Present",
    isCurrent: true,
    role: "IT Support Specialist (L1)",
    company: "MAS Capital (Pvt) Ltd",
    location: "Colombo / Sri Lanka",
    responsibilities: [
      "Oversee enterprise L1/L2 incident resolution across corporate head offices and apparel business units.",
      "Administer Microsoft Intune, Windows Autopilot provisioning, and BitLocker device security baselines.",
      "Maintain active directory user accounts, security groups, M365 license assignments, and access delegation.",
      "Track corporate IT assets, monitor loaner device inventory, and coordinate RMA hardware warranty service.",
    ],
    technologies: ["Microsoft Intune", "Windows Server", "Active Directory", "M365", "ITAM"],
  },
  {
    id: "mas-kreeda",
    period: "January 2023 – June 2026",
    role: "IT Site Support Administrator (L1)",
    company: "MAS Kreeda – Balangoda (Outsourced)",
    location: "Balangoda, Sri Lanka",
    responsibilities: [
      "Directed complete on-site ICT operations supporting 1,200+ factory floor users, line terminals, and office workstations.",
      "Led a dedicated site support team of 6 IT technicians delivering SLA compliance above 99.8%.",
      "Conducted quarterly physical IT asset audits, floor reconciliations, and barcoded lifecycle management.",
      "Supervised Cisco edge switches, industrial Wi-Fi access points, fiber backbones, and server room UPS power.",
      "Engineered automated PowerShell and Python scripts to monitor offline thermal printers and ping mission-critical endpoints.",
    ],
    technologies: ["Cisco Catalyst", "VMware", "PowerShell", "Python", "Barcode Systems", "SCCM"],
  },
  {
    id: "brandix-essentials",
    period: "March 2022 – 2023",
    role: "ICT Administrator",
    company: "Brandix Apparel Solutions Ltd – Essentials",
    location: "Sri Lanka",
    responsibilities: [
      "Administered high-availability manufacturing plant network infrastructure, Active Directory GPOs, and core file servers.",
      "Spearheaded plant floor IT asset tracking, software licensing audits, and decommissioned obsolete equipment.",
      "Delivered L1/L2 desktop support, thermal barcode label printer troubleshooting, and factory tablet provisioning.",
      "Collaborated with corporate IT engineering on fiber link expansions and disaster recovery backup tests.",
    ],
    technologies: ["Windows Server 2016", "Active Directory", "Hyper-V", "Zebra Printers", "Backup Exec"],
  },
  {
    id: "dream-curious",
    period: "December 2021 – March 2022",
    role: "ICT Executive",
    company: "Dream Curious International Pvt Ltd",
    location: "Dubai, United Arab Emirates",
    responsibilities: [
      "Provided executive desktop engineering, cloud collaboration administration, and secure remote VPN support in Dubai.",
      "Configured Office 365, SharePoint team sites, cloud identity management, and hardware procurement.",
      "Maintained network switches, biometric access control terminals, and VoIP telephony systems.",
    ],
    technologies: ["Office 365", "SharePoint", "VoIP", "Network Security", "Azure AD"],
  },
  {
    id: "brandix-casualwear",
    period: "December 2012 – November 2021",
    role: "ICT Administrator",
    company: "Brandix Apparel Solutions Ltd – Casualwear",
    location: "Awissawella, Ratmalana & Nivithigala, Sri Lanka",
    responsibilities: [
      "Delivered 9 continuous years of multi-site IT administration across 3 major Brandix manufacturing plants.",
      "Managed server room operations, Windows Server 2008/2012/2016 domain controllers, DHCP/DNS, and NAS storage.",
      "Performed full-scope IT asset lifecycle tracking for over 1,500 endpoint devices, printers, and network appliances.",
      "Designed and deployed custom internal PHP & MySQL web portals for shift attendance and internal inventory logs.",
      "Supported industrial production machinery interfaces, CAD/CAM workstations, and barcode fabric cutting systems.",
    ],
    technologies: ["Windows Server", "Cisco LAN/WAN", "PHP", "MySQL", "Thermal Printers", "ITAM"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "infra",
    category: "IT Infrastructure",
    subtitle: "Core systems, networking, hardware, and physical site operational reliability",
    competencyCount: 9,
    skills: [
      "IT Support (L1 & L2)",
      "Infrastructure Support",
      "Network Troubleshooting",
      "Hardware Diagnostics & Repair",
      "Printer & Peripheral Support",
      "Windows Support & Optimization",
      "End User Support & Training",
      "VMware Workstation",
      "Cisco Networking Fundamentals",
    ],
  },
  {
    id: "asset",
    category: "Asset Management",
    subtitle: "End-to-end ITAM, auditing, compliance, aging analysis, and lifecycle tracking",
    competencyCount: 8,
    skills: [
      "IT Asset Management (ITAM)",
      "Physical Asset Auditing",
      "Offline Asset Reconciliation",
      "Hardware Lifecycle Management",
      "Software Asset & License Tracking",
      "Vendor & Repair Management",
      "Asset Aging & Depreciation Analysis",
      "IT Disposal & E-Waste Process",
    ],
  },
  {
    id: "microsoft",
    category: "Microsoft / Enterprise",
    subtitle: "Modern workplace management, directory services, and enterprise security",
    competencyCount: 9,
    skills: [
      "Microsoft Intune",
      "Windows Server 2016",
      "Microsoft 365 Administration",
      "Microsoft Entra ID (Azure AD)",
      "Device Management & MDM",
      "SCCM Deployment",
      "SharePoint Cloud & Classification",
      "Azure Virtual Desktop (AVD)",
      "CrowdStrike Falcon Endpoint Security",
    ],
  },
  {
    id: "development",
    category: "Development & Software",
    subtitle: "Building production web applications and internal tools to solve real IT problems",
    competencyCount: 12,
    skills: [
      "Python",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 & CSS3",
      "React.js",
      "Next.js",
      "Node.js",
      "REST APIs",
      "Firebase",
      "MongoDB",
      "MySQL & SQL Server",
      "PHP",
    ],
  },
  {
    id: "tools",
    category: "Tools & Automation",
    subtitle: "Scripting, DevOps, version control, and operational automation pipelines",
    competencyCount: 8,
    skills: [
      "Git & GitHub",
      "Docker Basics",
      "PowerShell Scripting",
      "Google Apps Script",
      "Batch & Automation Scripts",
      "Excel Data Analysis",
      "Power Apps",
      "ITIL V3 Foundation",
    ],
  },
];

export const projectsList: ProjectItem[] = [
  {
    id: "itam-system",
    title: "IT Asset Management System",
    badge: "Asset Management",
    status: "In Production",
    subLabel: "Chaminda Sampath // Toolset",
    description: "An internal asset management solution designed to improve IT asset tracking, physical reconciliation, automated reporting, and complete lifecycle...",
    operationalValue: "Eliminated manual spreadsheet discrepancies across thousands of site devices by establishing a centralized relational database with audit logs and barcode verification.",
    technologies: ["Python", "JavaScript", "REST API", "MySQL", "React"],
    githubUrl: "https://github.com/DCS1990",
    hasPhpSource: true,
  },
  {
    id: "asset-audit-dashboard",
    title: "Asset Audit & Reconciliation Dashboard",
    badge: "Asset Management",
    status: "Completed",
    subLabel: "Chaminda Sampath // Toolset",
    description: "An analytics dashboard for monitoring asset verification status, pinpointing offline devices, categorizing asset aging, and viewing live...",
    operationalValue: "Allowed IT leadership to instantly see discrepancies between Active Directory / Intune active records and physical floor audit counts.",
    technologies: ["Python", "Excel Data Analysis", "Interactive Dashboard", "REST API"],
    githubUrl: "https://github.com/DCS1990",
    hasPhpSource: true,
  },
  {
    id: "repair-management-system",
    title: "IT Repair Management Dashboard",
    badge: "Asset Management",
    status: "In Production",
    subLabel: "Chaminda Sampath // Toolset",
    description: "An internal operational solution for logging repair requests, tracking vendor inspections, managing quotations, and observing real-time repair progress.",
    operationalValue: "Streamlined multi-vendor hardware repair workflows, preventing lost warranty units and minimizing printer/workstation downtime.",
    technologies: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    githubUrl: "https://github.com/DCS1990",
    hasPhpSource: true,
  },
  {
    id: "attendance-management-system",
    title: "Attendance Management System",
    badge: "Web Applications",
    status: "Completed",
    subLabel: "Chaminda Sampath // Toolset",
    description: "A responsive web-based attendance and leave management solution featuring user access control, multi-level approval workflows, and comprehensive...",
    operationalValue: "Replaced manual paper roster forms with an intuitive web application providing instant supervisor approvals and shift verification.",
    technologies: ["Next.js", "TypeScript", "Firebase Auth", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/DCS1990",
    hasPhpSource: true,
  },
  {
    id: "endpoint-switch-monitor",
    title: "Automated Endpoint & Switch Monitor",
    badge: "Automation & Tools",
    status: "In Production",
    subLabel: "Chaminda Sampath // Toolset",
    description: "A lightweight automated monitoring script that continually polls network switches, factory floor thermal printers, and production terminals,...",
    operationalValue: "Proactively informed the IT support team of localized network drops before factory floor supervisors logged support tickets.",
    technologies: ["PowerShell", "Python", "Windows Task Scheduler", "SMTP API"],
    githubUrl: "https://github.com/DCS1990",
    hasPhpSource: false,
  },
  {
    id: "intune-inventory-sync",
    title: "Intune & Inventory Sync Automation",
    badge: "Automation & Tools",
    status: "Completed",
    subLabel: "Chaminda Sampath // Toolset",
    description: "A custom automation script bridging Microsoft Intune device exports with internal site asset databases and Google Sheets for daily operational cross-checks.",
    operationalValue: "Eliminated 4 hours of weekly manual data entry comparing Intune enrollment with physical inventory tagging numbers.",
    technologies: ["Google Apps Script", "PowerShell", "Microsoft Graph API", "JSON"],
    githubUrl: "https://github.com/DCS1990",
    hasPhpSource: false,
  },
];

export const itamSpecializations: ItamSpecialization[] = [
  {
    id: "lifecycle",
    title: "Asset Lifecycle Management",
    description: "Complete oversight from initial procurement and provisioning to deployment, maintenance, and eventual retirement.",
    iconName: "RefreshCw",
    tasks: [
      "Procurement tagging",
      "Standardized imaging",
      "Maintenance schedules",
      "Decommissioning",
    ],
  },
  {
    id: "verification",
    title: "Physical Asset Verification",
    description: "Hands-on site audits validating physical serial numbers against digital inventory records across all production lines.",
    iconName: "ScanLine",
    tasks: [
      "Barcode scanning",
      "Location verification",
      "Custodian assignment",
      "Floor tag checks",
    ],
  },
  {
    id: "offline-reconciliation",
    title: "Offline Asset Reconciliation",
    description: "Systematic investigation of endpoints inactive on the network to prevent lost, stolen, or misplaced equipment.",
    iconName: "WifiOff",
    tasks: [
      "AD inactive query",
      "Department sweeps",
      "Intune sync analysis",
      "Status classification",
    ],
  },
  {
    id: "aging",
    title: "Asset Aging Analysis",
    description: "Tracking device age, warranty milestones, and depreciation to plan timely refresh cycles and budget projections.",
    iconName: "Clock",
    tasks: [
      "Depreciation tracking",
      "Warranty expiration logs",
      "Refresh forecasting",
      "Cost-benefit analysis",
    ],
  },
  {
    id: "disposal",
    title: "IT Disposal Process",
    description: "Secure, environmentally compliant e-waste handling including certified storage media sanitization.",
    iconName: "Trash2",
    tasks: [
      "Secure data wiping",
      "Certification of destruction",
      "Hazardous e-waste compliance",
      "Scrap documentation",
    ],
  },
  {
    id: "repair-mgmt",
    title: "Hardware Repair Management",
    description: "Supervising internal diagnostics, external vendor RMA dispatches, warranty claims, and turnaround SLAs.",
    iconName: "Wrench",
    tasks: [
      "RMA tracking",
      "Vendor quotation checks",
      "Loaner device dispatch",
      "Quality inspection",
    ],
  },
  {
    id: "licenses",
    title: "Software License Tracking",
    description: "Ensuring license compliance, eliminating dormant subscriptions, and monitoring software installations via Intune.",
    iconName: "ShieldCheck",
    tasks: [
      "M365 seat audits",
      "Installed software reviews",
      "Compliance validation",
      "Cost optimization",
    ],
  },
  {
    id: "intune-mgmt",
    title: "Intune Device Management",
    description: "Centrally managing endpoint configurations, compliance policies, remote wipes, and software updates.",
    iconName: "Laptop",
    tasks: [
      "Autopilot enrollment",
      "Configuration profiles",
      "Conditional access sync",
      "Remote wipe protocols",
    ],
  },
  {
    id: "audit-support",
    title: "IT Audit Support",
    description: "Preparing audit documentation, asset logs, and reconciliation proofs for internal and external corporate compliance auditors.",
    iconName: "FileCheck2",
    tasks: [
      "Evidence gathering",
      "Variance justification",
      "SOP compliance",
      "Audit walkthroughs",
    ],
  },
  {
    id: "vendor-coord",
    title: "Vendor Coordination",
    description: "Liaising with hardware suppliers, service providers, and finance teams to ensure SLA adherence and fair quotation pricing.",
    iconName: "Users",
    tasks: [
      "Quotation negotiations",
      "Service level tracking",
      "Procurement approvals",
      "Supplier relationship",
    ],
  },
  {
    id: "reporting",
    title: "IT Reporting & Dashboards",
    description: "Transforming raw inventory and ticket data into actionable visual insights for site executives and IT leadership.",
    iconName: "BarChart3",
    tasks: [
      "Uptime KPIs",
      "Asset health dashboards",
      "Discrepancy summaries",
      "Monthly management packs",
    ],
  },
];

export const automationSolutions: AutomationSolution[] = [
  {
    id: "recon-engine",
    title: "Asset Reconciliation Engine",
    category: "IT Operations",
    iconName: "FileSpreadsheet",
    problem: "Discrepancies between physical shop floor computers and Active Directory / Intune cloud registries.",
    solution: "Developed custom Python scripts to parse CSV exports from Intune and compare against physical inventory logs.",
    impact: "Cut weekly audit time from 6 hours to 15 minutes while achieving 99.4% record accuracy.",
    technologies: ["Python", "Pandas", "Excel", "CSV"],
    statusBadge: "Production Tested",
  },
  {
    id: "ping-sweep",
    title: "Network Switch & Printer Ping Sweep",
    category: "Site Monitoring",
    iconName: "Activity",
    problem: "Thermal barcode printers and edge switches failing during off shifts without immediate technician notification.",
    solution: "Deployed a lightweight PowerShell daemon running on a local server checking IP availability every 3 minutes.",
    impact: "Reduced unannounced production line halts by catching offline peripherals before workers report tickets.",
    technologies: ["PowerShell", "Windows Service", "SMTP"],
    statusBadge: "Production Tested",
  },
  {
    id: "repair-portal",
    title: "Internal IT Repair Portal",
    category: "Workflow Automation",
    iconName: "Database",
    problem: "Equipment sent for external repairs tracked via fragmented paper slips and email threads.",
    solution: "Created a full stack Next.js tracking dashboard with stages for inspection, quotation approval, and dispatch.",
    impact: "100% visibility on repair status, eliminating duplicate vendor inquiries and accelerating turnaround by 35%.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    statusBadge: "Production Tested",
  },
  {
    id: "intune-crosscheck",
    title: "Daily Intune Attendance & Asset Cross-Check",
    category: "Productivity",
    iconName: "CheckCircle2",
    problem: "Verifying laptop custodian presence and equipment status across factory departments.",
    solution: "Built Google Apps Script integrations that fetch device last seen timestamps and map to employee rosters.",
    impact: "Quickly flags devices that have not connected to corporate Wi-Fi for prolonged periods.",
    technologies: ["Google Apps Script", "Microsoft Graph", "REST API"],
    statusBadge: "Production Tested",
  },
];

export const educationCertificationsList: EducationCertificationItem[] = [
  {
    id: "bbm",
    title: "Bachelor of Business Management (B.BM)",
    year: "2015 – 2019",
    type: "Degree",
    institution: "University of Kelaniya, Sri Lanka",
    description: "Focus on operational management, business processes, systems integration, and organizational strategy.",
  },
  {
    id: "ccna",
    title: "CCNA Certification Administrator",
    year: "2022",
    type: "Certification",
    institution: "Vibernets Academy Campus, Malabe",
    description: "Cisco routing, switching, IP addressing, VLAN configurations, network security, and WAN architectures.",
  },
  {
    id: "itil",
    title: "ITIL V3 2011 Foundation",
    year: "2019",
    type: "Certification",
    institution: "ANC Education, Colombo 03",
    description: "IT service management principles, service lifecycle, incident management, and continuous improvement.",
  },
  {
    id: "turnkey",
    title: "Diploma in Windows Network Administrator",
    year: "2013",
    type: "Diploma",
    institution: "Turnkey IT Campus, Colombo 03",
    description: "Windows Server infrastructure, Active Directory domain services, Group Policy, DNS, and DHCP.",
  },
  {
    id: "colombo-unix",
    title: "UNIX / Linux Fundamentals, Network and Systems Administration",
    year: "2013",
    type: "Certification",
    institution: "University of Colombo, Sri Lanka",
    description: "Linux shell scripting, server administration, user permissions, and network services.",
  },
  {
    id: "naita",
    title: "National Trade Certificate of Computer Applications",
    year: "2009",
    type: "Diploma",
    institution: "National Apprentice and Industrial Training Authority (NAITA)",
    description: "Computer fundamentals, troubleshooting, office automation, and database administration.",
  },
  {
    id: "nac-hdcs",
    title: "Higher Diploma in Computer Studies",
    year: "2008",
    type: "Diploma",
    institution: "NAC Computer System, Balangoda",
    description: "System architecture, software development fundamentals, and data structures.",
  },
  {
    id: "nac-graphic",
    title: "Diploma in Graphic Design and Computer Studies",
    year: "2007 – 2008",
    type: "Diploma",
    institution: "NAC Computer System, Balangoda",
    description: "Visual communication, digital illustration, and computing workflows.",
  },
  {
    id: "leadership",
    title: "Certified Leadership Development Program",
    year: "2008",
    type: "Certification",
    institution: "University of Sabaragamuwa, Sri Lanka",
    description: "Team leadership, conflict management, and workplace communications.",
  },
  {
    id: "al",
    title: "G.C.E. Advanced Level (Commerce Stream)",
    year: "2009",
    type: "School",
    institution: "National Examinations Department, Sri Lanka",
    description: "Accounting (A), Economics (B), Business Studies (S).",
  },
  {
    id: "ol",
    title: "G.C.E. Ordinary Level",
    year: "2006",
    type: "School",
    institution: "Sri Dharmananda Vidyayathana Pirivena, Sri Lanka",
    description: "Completed standard secondary education certifications.",
  },
];

// Re-export backward compatible lists
export const certificationsList = educationCertificationsList;
export const focusAreas = coreOperationalFocusAreas;
