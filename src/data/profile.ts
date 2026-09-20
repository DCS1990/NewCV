export interface PersonalInfo {
  name: string;
  roleTitle: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  whatsapp: string;
  whatsappUrl: string;
  location: string;
  linkedin: string;
  github: string;
  yearsExperience: number;
  endpointsManaged: string;
  slaAdherence: string;
  enterprisesSupported: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
  metrics: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  legalEntity?: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  companyDescription: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: string; experienceYears?: string; note?: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Enterprise Systems' | 'Audit & ITAM' | 'Service Operations' | 'Automation & Tools';
  description: string;
  problemSolved: string;
  architecture: string;
  technologies: string[];
  features: string[];
  status: 'In Production' | 'Implemented' | 'Enterprise Asset';
  githubUrl: string;
  hasPhpSource?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  credentialId?: string;
  badgeType: 'Degree' | 'Certification' | 'Diploma' | 'Trade Certificate';
  description: string;
}

export interface ItamPillar {
  number: string;
  title: string;
  description: string;
  activities: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Chaminda Sampath",
  roleTitle: "IT Support Specialist | Infrastructure | IT Operations | Asset Management",
  tagline: "13+ Years Delivering Resilient Enterprise ICT Operations, ITAM Governance & Workflow Automation",
  summary: "Results-driven IT professional with over 13 years of enterprise experience across high-velocity manufacturing environments (MAS Capital, Brandix). Demonstrated excellence in IT infrastructure reliability, L1/L2 end-user desktop engineering, Cisco networking, Microsoft Intune endpoint governance, comprehensive IT Asset Management (ITAM), and practical operations automation using Python, PowerShell, and PHP.",
  email: "chaminda.d.sampath@gmail.com",
  phone: "+94 75 560 6269",
  whatsapp: "+94 77 649 6163",
  whatsappUrl: "https://wa.me/94776496163",
  location: "Balangoda, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/chaminda-sampath-7aab40104/",
  github: "https://github.com/DCS1990",
  yearsExperience: 13,
  endpointsManaged: "1,200+",
  slaAdherence: "99.8%",
  enterprisesSupported: "MAS & Brandix",
};

export const focusAreas: FocusArea[] = [
  {
    id: "infrastructure",
    title: "IT Infrastructure Support & Administration",
    description: "Multi-rack server room operations, UPS power integrity, structured fiber/copper distribution, and continuous plant floor availability.",
    iconName: "Server",
    metrics: "24/7 Plant Uptime",
  },
  {
    id: "desktop-support",
    title: "Executive & End-User Technical Support (L1/L2)",
    description: "Rapid incident response, hardware imaging, software provisioning, and VIP executive computing assistance adhering to strict SLAs.",
    iconName: "Headphones",
    metrics: "1,200+ Users",
  },
  {
    id: "networking",
    title: "Network Diagnostics & LAN/WAN Operations",
    description: "Cisco managed switches, VLAN segmentation, industrial Wi-Fi access points, firewall rules, and low-latency line connectivity.",
    iconName: "Network",
    metrics: "Multi-VLAN Segregation",
  },
  {
    id: "hardware",
    title: "Hardware Component Repair & RMA Lifecycles",
    description: "Component-level motherboard diagnostics, barcode & thermal printer service, POS terminals, and third-party vendor warranty management.",
    iconName: "Wrench",
    metrics: "35% Failure Reduction",
  },
  {
    id: "itam",
    title: "Comprehensive IT Asset Management (ITAM)",
    description: "End-to-end asset tracking from procurement, barcode tagging, physical reconciliation, license accounting to secure decommissioning.",
    iconName: "Boxes",
    metrics: "100% Audit Compliance",
  },
  {
    id: "intune",
    title: "Microsoft Intune & Endpoint Management",
    description: "Cloud-native device enrollment, Windows Autopilot configuration, BitLocker enforcement, compliance policies, and app deployment.",
    iconName: "ShieldCheck",
    metrics: "Zero-Touch Deployment",
  },
  {
    id: "process",
    title: "Process Standardization & SLA Governance",
    description: "Implementation of ITIL V3 service principles, ticketing workflow hygiene, root-cause analysis (RCA), and vendor SLA enforcement.",
    iconName: "FileCheck2",
    metrics: "99.8% SLA Adherence",
  },
  {
    id: "automation",
    title: "Operational Automation & Scripting",
    description: "Tailored Python, PowerShell, and Bash tools that eliminate repetitive administrative burdens, verify backups, and ping critical endpoints.",
    iconName: "Terminal",
    metrics: "15+ Hours Saved/Wk",
  },
  {
    id: "active-directory",
    title: "Active Directory, Entra ID & Access Control",
    description: "User onboarding/offboarding, Group Policy Objects (GPOs), RBAC delegation, hybrid directory synchronization, and MFA compliance.",
    iconName: "Users",
    metrics: "Automated Provisioning",
  },
  {
    id: "dr-backup",
    title: "Disaster Recovery & Backup Verification",
    description: "Automated NAS/SAN snapshot verification, offsite replication monitoring, database backup integrity testing, and bare-metal recovery drills.",
    iconName: "DatabaseBackup",
    metrics: "Daily Checksum Audits",
  },
  {
    id: "procurement",
    title: "Vendor Liaison & Tech Procurement",
    description: "Technical hardware evaluations, RFP quote comparisons, spare part inventory control, and warranty service level coordination.",
    iconName: "Truck",
    metrics: "Optimal TCO & Spares",
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: "mas-active",
    company: "MAS Capital (Pvt) Ltd / MAS ACTIVE (PRIVATE) LIMITED",
    legalEntity: "MAS Holdings – MAS Active Division",
    role: "IT Support Specialist – Infrastructure & Operations",
    period: "January 2023 – Present",
    location: "Sri Lanka",
    isCurrent: true,
    companyDescription: "MAS Holdings is South Asia's largest apparel tech manufacturer and innovator, employing over 100,000 people globally.",
    responsibilities: [
      "Orchestrate day-to-day enterprise ICT operations, infrastructure health, and L1/L2 incident resolution across plant business units.",
      "Administer Microsoft Intune (Endpoint Manager) for automated Windows Autopilot laptop rollouts, BitLocker encryption escrow, and baseline compliance.",
      "Lead plant-wide IT Asset Management (ITAM): physical barcode audits, depreciation registries, Microsoft 365 licensing reconciliation, and compliant disposal.",
      "Supervise Cisco network infrastructure comprising 24/48-port PoE switches, industrial wireless APs, fiber backbones, and plant CCTV networks.",
      "Develop custom operational automation scripts in PowerShell and Python to verify critical printer availability and dispatch automated alerts.",
      "Act as primary technical liaison for vendor warranty repairs (RMA), ensuring replacement equipment complies with strict enterprise security baselines.",
    ],
    technologies: [
      "Microsoft Intune",
      "Windows Server 2022",
      "Active Directory",
      "Cisco Catalyst",
      "PowerShell",
      "Python",
      "ITAM / Barcoding",
      "Office 365",
    ],
  },
  {
    id: "brandix-essentials",
    company: "Brandix Apparel Solutions Ltd – Essentials",
    legalEntity: "Brandix Group – Essentials Business Unit",
    role: "Executive – IT Operations & Support",
    period: "March 2022 – 2023",
    location: "Sri Lanka",
    isCurrent: false,
    companyDescription: "Brandix is a benchmark apparel solutions provider operating across Sri Lanka, India, and Bangladesh.",
    responsibilities: [
      "Managed plant-level IT operations, ensuring 99.8% uptime for time-critical production line terminals and cutting/packing IT stations.",
      "Established the facility's centralized IT Asset Management framework, tracking serial numbers, warranty terms, and physical floor allocations.",
      "Conducted quarterly physical inventory reconciliations against Active Directory domain logs, achieving 100% audit alignment.",
      "Administered Windows Domain Controllers, DHCP scope reservations, file server access permissions, and automated endpoint antivirus definitions.",
      "Mentored junior support technicians on standard troubleshooting protocols, incident escalation paths, and ticket SLA reporting.",
    ],
    technologies: [
      "Active Directory",
      "Windows Server",
      "ITIL V3 Practices",
      "Cisco Networking",
      "Hardware Diagnostics",
      "Asset Auditing",
    ],
  },
  {
    id: "dream-curious",
    company: "Dream Curious International Pvt Ltd",
    legalEntity: "Dream Curious International (Dubai, UAE)",
    role: "IT Support & System Administrator",
    period: "December 2021 – March 2022",
    location: "Dubai, UAE (Offshore Support)",
    isCurrent: false,
    companyDescription: "International commerce and technology consulting firm managing distributed teams across UAE and Asia.",
    responsibilities: [
      "Delivered remote technical infrastructure support, secure VPN tunnel management, and identity access control for remote workforce.",
      "Configured cloud mailboxes, file collaboration repositories, and endpoint security agents across Windows and macOS clients.",
      "Automated daily cloud backup verification scripts and generated weekly uptime and security health scorecards.",
    ],
    technologies: [
      "Cloud Infrastructure",
      "Remote Administration",
      "VPN / Security",
      "Windows / macOS",
      "Scripting",
    ],
  },
  {
    id: "brandix-casualwear",
    company: "Brandix Apparel Solutions Ltd – Casualwear",
    legalEntity: "Brandix Group – Casualwear Division",
    role: "Senior IT Support Associate / Infrastructure Technician",
    period: "December 2012 – November 2021",
    location: "Sri Lanka",
    isCurrent: false,
    companyDescription: "9-year distinguished tenure managing large manufacturing facility ICT operations and high-volume hardware fleets.",
    responsibilities: [
      "Provided frontline infrastructure and hardware support across 800+ user endpoints, industrial barcode printers (Zebra/Datamax), and production PCs.",
      "Designed and implemented the facility's preventive hardware maintenance program, decreasing unscheduled equipment breakdown by 35%.",
      "Executed physical structured cabling projects (Cat6 copper, patch panel termination, fiber distribution, and comms rack dressing).",
      "Handled component-level repairs of power supplies, motherboards, display panels, and thermal printheads, substantially curbing replacement costs.",
      "Participated actively in multiple ISO 27001, ITIL, and internal corporate compliance audits with zero major non-conformities.",
    ],
    technologies: [
      "Structured Cabling",
      "Cisco Switches",
      "Component Repair",
      "Industrial Printers",
      "Hardware RMA",
      "Preventive Care",
      "LAN Administration",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "IT Infrastructure & Networking",
    iconName: "Network",
    skills: [
      { name: "LAN / WAN Architecture", level: "Expert", experienceYears: "13 yrs" },
      { name: "Cisco Switching & Routing", level: "Advanced", experienceYears: "10+ yrs" },
      { name: "VLANs & Traffic Segregation", level: "Advanced", experienceYears: "9+ yrs" },
      { name: "Wi-Fi 6 Enterprise APs", level: "Advanced", experienceYears: "8+ yrs" },
      { name: "Fiber & Structured Cabling (Cat6)", level: "Expert", experienceYears: "13 yrs" },
      { name: "DHCP, DNS, Subnetting & IPAM", level: "Expert", experienceYears: "13 yrs" },
      { name: "Network Troubleshooting & Wireshark", level: "Advanced", experienceYears: "8+ yrs" },
      { name: "UPS & Server Room Environmentals", level: "Expert", experienceYears: "13 yrs" },
    ],
  },
  {
    category: "IT Asset Management (ITAM)",
    iconName: "Boxes",
    skills: [
      { name: "Asset Lifecycle Management", level: "Expert", experienceYears: "11+ yrs" },
      { name: "Physical Audit & Verification", level: "Expert", experienceYears: "11+ yrs" },
      { name: "Barcode & Asset Tagging", level: "Expert", experienceYears: "10+ yrs" },
      { name: "Intune / AD Asset Reconciliation", level: "Advanced", experienceYears: "6+ yrs" },
      { name: "Software License Compliance", level: "Advanced", experienceYears: "7+ yrs" },
      { name: "Hardware Warranty & RMA Tracking", level: "Expert", experienceYears: "12+ yrs" },
      { name: "Secure Decommissioning & Wiping", level: "Expert", experienceYears: "10+ yrs" },
      { name: "ITAM Inventory Reporting", level: "Expert", experienceYears: "11+ yrs" },
    ],
  },
  {
    category: "Enterprise Systems & Microsoft",
    iconName: "ShieldCheck",
    skills: [
      { name: "Microsoft Intune (MDM / MAM)", level: "Advanced", experienceYears: "5+ yrs" },
      { name: "Windows Autopilot Deployment", level: "Advanced", experienceYears: "4+ yrs" },
      { name: "Active Directory & GPOs", level: "Expert", experienceYears: "12+ yrs" },
      { name: "Microsoft 365 Administration", level: "Advanced", experienceYears: "7+ yrs" },
      { name: "Windows Server (2016 - 2022)", level: "Advanced", experienceYears: "10+ yrs" },
      { name: "BitLocker & Endpoint Security", level: "Advanced", experienceYears: "6+ yrs" },
      { name: "Linux Administration (Ubuntu/CentOS)", level: "Intermediate", experienceYears: "5+ yrs" },
      { name: "ITIL V3 Service Management", level: "Certified", experienceYears: "8+ yrs" },
    ],
  },
  {
    category: "Automation, Scripting & Dev",
    iconName: "Terminal",
    skills: [
      { name: "PowerShell Scripting", level: "Advanced", experienceYears: "7+ yrs" },
      { name: "Python (Automation & NetOps)", level: "Intermediate", experienceYears: "5+ yrs" },
      { name: "PHP & MySQL Web Tools", level: "Intermediate", experienceYears: "6+ yrs" },
      { name: "Bash & Linux Shell", level: "Intermediate", experienceYears: "5+ yrs" },
      { name: "Google Apps Script & Sheets API", level: "Advanced", experienceYears: "6+ yrs" },
      { name: "REST APIs & Webhooks", level: "Intermediate", experienceYears: "4+ yrs" },
      { name: "HTML5, CSS3 & Tailwind CSS", level: "Intermediate", experienceYears: "5+ yrs" },
      { name: "Git & GitHub Version Control", level: "Intermediate", experienceYears: "4+ yrs" },
    ],
  },
  {
    category: "Hardware Diagnostics & Peripherals",
    iconName: "Wrench",
    skills: [
      { name: "Laptop & Desktop Board Diagnostics", level: "Expert", experienceYears: "13 yrs" },
      { name: "Zebra / Datamax Thermal Printers", level: "Expert", experienceYears: "12+ yrs" },
      { name: "Industrial PCs & Touch Terminals", level: "Expert", experienceYears: "11+ yrs" },
      { name: "Biometric Scanners & Door Access", level: "Advanced", experienceYears: "9+ yrs" },
      { name: "Multi-function Network Printers", level: "Expert", experienceYears: "13 yrs" },
      { name: "RAM, SSD, Display Replacement", level: "Expert", experienceYears: "13 yrs" },
    ],
  },
];

export const projectsList: ProjectItem[] = [
  {
    id: "itam-system",
    title: "IT Asset Management System (ITAM Suite)",
    category: "Audit & ITAM",
    description: "Enterprise web application built to catalog, track, and manage the full lifecycle of enterprise IT hardware, assigned custodians, warranties, and maintenance histories across factory divisions.",
    problemSolved: "Eliminated manual paper and outdated spreadsheet records that caused frequent asset misplacement and missed warranty deadlines.",
    architecture: "Lightweight modular architecture with relational database persistence, barcode scan parsing, automated depreciation calculation, and role-based access control.",
    technologies: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "HTML5", "Bootstrap"],
    features: [
      "Barcode & QR Code asset tag generation and rapid camera/scanner lookup",
      "Automated straight-line depreciation calculating real-time net book value",
      "Software license assignment registry preventing compliance over-usage",
      "User handover sign-off receipts with PDF export capabilities",
      "Warranty expiration notification engine 60/30/15 days prior",
    ],
    status: "In Production",
    githubUrl: "https://github.com/DCS1990",
    hasPhpSource: true,
  },
  {
    id: "asset-audit-dashboard",
    title: "Asset Audit & Reconciliation Dashboard",
    category: "Audit & ITAM",
    description: "Reconciliation engine that ingests physical floor audit scans and compares them against live Active Directory and Microsoft Intune last-seen timestamps to identify dormant, rogue, or missing devices.",
    problemSolved: "Reduced multi-day audit reconciliation cycles to under 2 hours, discovering discrepancies with 100% accuracy.",
    architecture: "Python data processing script with a responsive dashboard frontend showing real-time match ratios, department variance metrics, and CSV export for external auditors.",
    technologies: ["Python", "PowerShell", "PHP", "MySQL", "Chart.js", "Tailwind CSS"],
    features: [
      "Automated cross-referencing between physical audit CSVs and AD directory exports",
      "Variance categorization: 'Missing on Floor', 'Dormant in AD', 'Unregistered Device'",
      "Audit trail logging with timestamped examiner signatures",
      "Visual variance graphs breakdown by plant, floor, and department",
    ],
    status: "In Production",
    githubUrl: "https://github.com/DCS1990",
    hasPhpSource: true,
  },
  {
    id: "repair-management-system",
    title: "IT Hardware Repair & RMA Tracker",
    category: "Service Operations",
    description: "Service tracking system logging all damaged laptops, thermal printheads, power supplies, and switch modules dispatched to external authorized service centers.",
    problemSolved: "Stopped vendor turnaround delays and prevented spare unit pool shortages by introducing transparent status tracking.",
    architecture: "PHP and MySQL backend with status workflow states (Logged -> Dispatched -> In Repair -> Returned -> QC Passed -> Closed).",
    technologies: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "REST API"],
    features: [
      "Vendor turnaround time (TAT) analytics benchmarked against agreed SLAs",
      "Buffer pool availability monitor tracking loaner laptops and spare printers",
      "Automated email alerts when repairs exceed 7 business days",
      "Cost-to-repair accumulation ledger for TCO replacement decisions",
    ],
    status: "Implemented",
    githubUrl: "https://github.com/DCS1990",
    hasPhpSource: true,
  },
  {
    id: "attendance-sync-tool",
    title: "Biometric Attendance & Shift Sync Tool",
    category: "Automation & Tools",
    description: "Operational sync utility bridging network biometric fingerprint and facial recognition access terminals with manufacturing line attendance databases.",
    problemSolved: "Resolved sync lag and network dropouts between remote factory gate terminals and HR systems during high-volume shift changes.",
    architecture: "Python socket service polling terminal SDKs, batching punch transactions, and posting clean records to central database with automatic retry mechanisms.",
    technologies: ["Python", "PHP", "MySQL", "Socket API", "Bash"],
    features: [
      "Real-time terminal connectivity monitor with automatic restart routines",
      "Duplicate swipe deduplication algorithm handling rapid multi-punches",
      "Shift-aware transaction routing matching 3 factory working shifts",
      "Daily email summary sent to factory operational management",
    ],
    status: "In Production",
    githubUrl: "https://github.com/DCS1990",
    hasPhpSource: true,
  },
  {
    id: "network-ping-monitor",
    title: "Automated Endpoint & Switch Ping Monitor",
    category: "Automation & Tools",
    description: "Lightweight, resource-efficient background daemon continuously monitoring the reachability of 200+ mission-critical switches, Wi-Fi APs, and manufacturing barcode printers.",
    problemSolved: "Allowed IT team to detect and resolve network switch and line printer dropouts before plant production supervisors noticed the stoppage.",
    architecture: "Multithreaded Python daemon with ICMP echo polling and an ultra-fast web status board.",
    technologies: ["Python", "PowerShell", "Bash", "HTML5", "SMTP"],
    features: [
      "Concurrent asynchronous ICMP polling maintaining low CPU overhead",
      "Instant email and alert webhook triggers upon 3 consecutive lost packets",
      "Historical uptime percentage calculation per device and per switch stack",
      "Color-coded web dashboard designed for 24/7 IT NOC wall displays",
    ],
    status: "In Production",
    githubUrl: "https://github.com/DCS1990",
    hasPhpSource: false,
  },
  {
    id: "intune-sync-automation",
    title: "Microsoft Intune Compliance & Sync Automator",
    category: "Enterprise Systems",
    description: "Automated PowerShell suite integrating with Microsoft Graph API to audit device compliance states, escrow BitLocker recovery passwords, and flag outdated OS builds.",
    problemSolved: "Enforced 100% corporate endpoint security compliance and eliminated missing BitLocker recovery keys during emergency boot failures.",
    architecture: "Scheduled Azure App Registration script executing daily delta syncs and updating central IT compliance records.",
    technologies: ["PowerShell", "Microsoft Graph API", "Entra ID", "Intune"],
    features: [
      "Automatic BitLocker recovery key backup verification in Azure AD",
      "Non-compliant endpoint detection with auto-generated remediation instructions",
      "Device retirement script securely cleaning orphaned cloud objects upon employee exit",
      "Weekly executive compliance percentage reports generated automatically",
    ],
    status: "Enterprise Asset",
    githubUrl: "https://github.com/DCS1990",
    hasPhpSource: false,
  },
];

export const itamPillars: ItamPillar[] = [
  {
    number: "01",
    title: "Lifecycle Management",
    description: "Complete visibility from requisition, capital approval, procurement, tagging, staging, deployment, re-assignment to responsible recycling.",
    activities: [
      "Standardized hardware intake checklists",
      "MAC address, serial number, and IMEI recording",
      "Immediate tagging with barcode and tamper-evident labels",
    ],
  },
  {
    number: "02",
    title: "Physical Verification & Audits",
    description: "Rigorous quarterly and annual wall-to-wall physical stock inspections verifying device presence, physical state, and custodian verification.",
    activities: [
      "Floor-by-floor handheld scanner audits",
      "Verification of machine serials against AD hostname records",
      "Discrepancy reconciliation with department heads",
    ],
  },
  {
    number: "03",
    title: "Intune & AD Hybrid Reconciliation",
    description: "Bridging the gap between physical reality and digital discovery by cross-referencing Microsoft Intune telemetry with floor audit scans.",
    activities: [
      "Automated discrepancy flags for dormant accounts (>45 days)",
      "Discovery of unmanaged or shadow IT devices",
      "Real-time IP and subnet location validation",
    ],
  },
  {
    number: "04",
    title: "Aging & Depreciation Analysis",
    description: "Tracking asset financial age against enterprise refresh cycles to proactively forecast budget requirements and prevent hardware fatigue.",
    activities: [
      "Calculation of net book value and remaining economic life",
      "Identification of aging machines causing excessive ticket volume",
      "Data-backed replacement proposals for annual capital budgeting",
    ],
  },
  {
    number: "05",
    title: "Secure Decommissioning & E-Waste",
    description: "Strict adherence to data sanitization standards before asset donation, sale, or disposal according to environmental regulations.",
    activities: [
      "DoD 5220.22-M compliant multi-pass hard drive wiping",
      "Physical storage degaussing or destruction logging",
      "Signed disposal certificates and environmental vendor manifests",
    ],
  },
  {
    number: "06",
    title: "Hardware RMA & Vendor Management",
    description: "Structured custody tracking for enterprise assets leaving the factory premises for warranty repair or specialized component maintenance.",
    activities: [
      "Gate pass documentation and vendor dispatch receipts",
      "SLA turnaround time tracking with escalation triggers",
      "Return quality inspection prior to re-entering production pool",
    ],
  },
  {
    number: "07",
    title: "Software License Compliance",
    description: "Preventing costly corporate non-compliance by maintaining strict 1:1 ratios between purchased enterprise licenses and active seats.",
    activities: [
      "Microsoft 365 license pruning for exited employees",
      "CAD / specialized industrial software seat tracking",
      "Periodic audit readiness reviews simulating vendor audits",
    ],
  },
  {
    number: "08",
    title: "Spare Parts & Buffer Pool Management",
    description: "Maintaining an optimal inventory of replacement components, standby laptops, and critical barcode printheads for zero production downtime.",
    activities: [
      "Minimum stock level triggers for RAM, SSDs, and thermal heads",
      "Pre-configured loaner laptop pool ready for under-10-minute dispatch",
      "Consumable tracking for print ribbons, labels, and patch cables",
    ],
  },
];

export const certificationsList: CertificationItem[] = [
  {
    id: "degree-kelaniya",
    title: "Bachelor of Business Management (B.BM)",
    issuer: "University of Kelaniya, Sri Lanka",
    year: "Graduated",
    badgeType: "Degree",
    description: "Comprehensive university education combining business strategy, financial management, organizational operations, and information systems governance.",
  },
  {
    id: "ccna-cisco",
    title: "CCNA (Cisco Certified Network Associate)",
    issuer: "Vibernets Academy",
    year: "Certified Administrator",
    badgeType: "Certification",
    description: "Rigorous curriculum covering Cisco IOS configuration, VLAN trunking, OSPF/EIGRP routing, ACL packet filtering, NAT/PAT, and enterprise network troubleshooting.",
  },
  {
    id: "itil-v3",
    title: "ITIL V3 2011 Foundation in IT Service Management",
    issuer: "ANC Education / AXELOS",
    year: "Foundation Certified",
    badgeType: "Certification",
    description: "Best practice framework for IT service management (ITSM), incident lifecycle management, change advisory board (CAB) workflows, and SLA fulfillment.",
  },
  {
    id: "windows-net-admin",
    title: "Windows Network Administrator Diploma",
    issuer: "Turnkey IT Campus",
    year: "Diploma Awarded",
    badgeType: "Diploma",
    description: "Advanced hands-on diploma covering Windows Server domain architecture, Active Directory federation, Group Policy design, DNS/DHCP infrastructure, and storage management.",
  },
  {
    id: "linux-admin",
    title: "Linux Fundamentals & System Administration",
    issuer: "University of Colombo (School of Computing)",
    year: "Professional Certification",
    badgeType: "Certification",
    description: "Core Linux operating system administration, kernel fundamentals, shell scripting, package management, service daemons, file permissions, and network daemon security.",
  },
  {
    id: "naita-it",
    title: "National Trade Certificate in Information Technology",
    issuer: "NAITA (National Apprentice & Industrial Training Authority)",
    year: "National Trade Qualification",
    badgeType: "Trade Certificate",
    description: "National vocational certification affirming industrial competence in computer hardware engineering, board-level troubleshooting, peripheral maintenance, and workplace safety standards.",
  },
];
