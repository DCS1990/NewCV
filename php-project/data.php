<?php
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

$skillsByCategory = [
    "IT Infrastructure & Networking" => [
        ["name" => "LAN / WAN Architecture", "level" => "Expert", "exp" => "13 yrs"],
        ["name" => "Cisco Switching & Routing", "level" => "Advanced", "exp" => "10+ yrs"],
        ["name" => "VLANs & Traffic Segregation", "level" => "Advanced", "exp" => "9+ yrs"],
        ["name" => "Wi-Fi 6 Enterprise APs", "level" => "Advanced", "exp" => "8+ yrs"],
        ["name" => "Fiber & Structured Cabling (Cat6)", "level" => "Expert", "exp" => "13 yrs"],
        ["name" => "DHCP, DNS, Subnetting & IPAM", "level" => "Expert", "exp" => "13 yrs"],
        ["name" => "Network Troubleshooting & Wireshark", "level" => "Advanced", "exp" => "8+ yrs"],
        ["name" => "UPS & Server Room Environmentals", "level" => "Expert", "exp" => "13 yrs"]
    ],
    "IT Asset Management (ITAM)" => [
        ["name" => "Asset Lifecycle Management", "level" => "Expert", "exp" => "11+ yrs"],
        ["name" => "Physical Audit & Verification", "level" => "Expert", "exp" => "11+ yrs"],
        ["name" => "Barcode & Asset Tagging", "level" => "Expert", "exp" => "10+ yrs"],
        ["name" => "Intune / AD Asset Reconciliation", "level" => "Advanced", "exp" => "6+ yrs"],
        ["name" => "Software License Compliance", "level" => "Advanced", "exp" => "7+ yrs"],
        ["name" => "Hardware Warranty & RMA Tracking", "level" => "Expert", "exp" => "12+ yrs"],
        ["name" => "Secure Decommissioning & Wiping", "level" => "Expert", "exp" => "10+ yrs"],
        ["name" => "ITAM Inventory Reporting", "level" => "Expert", "exp" => "11+ yrs"]
    ],
    "Enterprise Systems & Microsoft" => [
        ["name" => "Microsoft Intune (MDM / MAM)", "level" => "Advanced", "exp" => "5+ yrs"],
        ["name" => "Windows Autopilot Deployment", "level" => "Advanced", "exp" => "4+ yrs"],
        ["name" => "Active Directory & GPOs", "level" => "Expert", "exp" => "12+ yrs"],
        ["name" => "Microsoft 365 Administration", "level" => "Advanced", "exp" => "7+ yrs"],
        ["name" => "Windows Server (2016 - 2022)", "level" => "Advanced", "exp" => "10+ yrs"],
        ["name" => "BitLocker & Endpoint Security", "level" => "Advanced", "exp" => "6+ yrs"],
        ["name" => "Linux Administration (Ubuntu/CentOS)", "level" => "Intermediate", "exp" => "5+ yrs"],
        ["name" => "ITIL V3 Service Management", "level" => "Certified", "exp" => "8+ yrs"]
    ],
    "Automation, Scripting & Dev" => [
        ["name" => "PowerShell Scripting", "level" => "Advanced", "exp" => "7+ yrs"],
        ["name" => "Python (Automation & NetOps)", "level" => "Intermediate", "exp" => "5+ yrs"],
        ["name" => "PHP & MySQL Web Tools", "level" => "Intermediate", "exp" => "6+ yrs"],
        ["name" => "Bash & Linux Shell", "level" => "Intermediate", "exp" => "5+ yrs"],
        ["name" => "Google Apps Script & Sheets API", "level" => "Advanced", "exp" => "6+ yrs"],
        ["name" => "REST APIs & Webhooks", "level" => "Intermediate", "exp" => "4+ yrs"],
        ["name" => "HTML5, CSS3 & Tailwind CSS", "level" => "Intermediate", "exp" => "5+ yrs"],
        ["name" => "Git & GitHub Version Control", "level" => "Intermediate", "exp" => "4+ yrs"]
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
    ],
    [
        "id" => "attendance-sync",
        "title" => "Biometric Attendance & Shift Sync Tool",
        "category" => "Automation & Tools",
        "description" => "Operational sync utility bridging network biometric fingerprint and facial recognition access terminals with manufacturing line attendance databases.",
        "problem" => "Resolved sync lag and network dropouts between remote factory gate terminals and HR systems during high-volume shift changes.",
        "tech" => ["Python", "PHP", "MySQL", "Socket API"],
        "features" => [
            "Real-time terminal connectivity monitor with automatic restart routines",
            "Duplicate swipe deduplication algorithm handling rapid multi-punches",
            "Shift-aware transaction routing matching 3 factory working shifts",
            "Daily email summary sent to factory operational management"
        ],
        "status" => "In Production",
        "github" => "https://github.com/DCS1990"
    ],
    [
        "id" => "ping-monitor",
        "title" => "Automated Endpoint & Switch Ping Monitor",
        "category" => "Automation & Tools",
        "description" => "Lightweight, resource-efficient background daemon continuously monitoring the reachability of 200+ mission-critical switches, Wi-Fi APs, and manufacturing barcode printers.",
        "problem" => "Allowed IT team to detect and resolve network switch and line printer dropouts before plant production supervisors noticed the stoppage.",
        "tech" => ["Python", "PowerShell", "Bash", "SMTP"],
        "features" => [
            "Concurrent asynchronous ICMP polling maintaining low CPU overhead",
            "Instant email and alert webhook triggers upon 3 consecutive lost packets",
            "Historical uptime percentage calculation per device and per switch stack",
            "Color-coded web dashboard designed for 24/7 IT NOC wall displays"
        ],
        "status" => "In Production",
        "github" => "https://github.com/DCS1990"
    ]
];

$itamPillars = [
    [
        "num" => "01",
        "title" => "Lifecycle Management",
        "desc" => "Complete hardware governance from capital requisition to compliant electronic disposal.",
        "bullets" => ["Standardized hardware intake checklists", "Serial number, MAC & IMEI registration", "Immediate barcode tagging upon arrival"]
    ],
    [
        "num" => "02",
        "title" => "Physical Verification",
        "desc" => "Quarterly and annual wall-to-wall inspections verifying device location and custodian sign-off.",
        "bullets" => ["Floor-by-floor handheld scanner audits", "Machine serial verification against AD", "Formal discrepancy sign-off with managers"]
    ],
    [
        "num" => "03",
        "title" => "Intune & AD Reconciliation",
        "desc" => "Synchronizing physical floor truth with digital telemetry to catch shadow IT or dormant hardware.",
        "bullets" => ["Flags devices offline for >45 days", "Identification of unmanaged devices", "IP and subnet physical validation"]
    ],
    [
        "num" => "04",
        "title" => "Aging & Depreciation",
        "desc" => "Forecasting hardware replacement budgets by calculating net book value and failure rates.",
        "bullets" => ["Straight-line depreciation accounting", "Flagging failure-prone aging machines", "Data-backed capital budget forecasts"]
    ],
    [
        "num" => "05",
        "title" => "Secure Disposal",
        "desc" => "Strict data sanitization before asset disposal, ensuring complete protection of corporate IP.",
        "bullets" => ["DoD 5220.22-M storage wiping", "Destruction logs and serial certification", "Licensed green e-waste vendor handoff"]
    ],
    [
        "num" => "06",
        "title" => "RMA & Repairs",
        "desc" => "Structured custody tracking for hardware sent to authorized external service centers.",
        "bullets" => ["Gate pass & dispatch chain-of-custody", "Vendor turnaround SLA enforcement", "Return QA inspection before redeployment"]
    ],
    [
        "num" => "07",
        "title" => "License Compliance",
        "desc" => "Monitoring 1:1 ratios between purchased software licenses and active enterprise seats.",
        "bullets" => ["M365 seat reclamation on exit", "Specialized CAD license monitoring", "Continuous audit readiness"]
    ],
    [
        "num" => "08",
        "title" => "Buffer Pool Control",
        "desc" => "Maintaining pre-imaged replacement laptops and standby thermal printers for instant swap-outs.",
        "bullets" => ["<10 minute loaner laptop turnaround", "Critical printer standby inventory", "Automated reorder levels for SSD/RAM"]
    ]
];

$certifications = [
    [
        "title" => "Bachelor of Business Management (B.BM)",
        "issuer" => "University of Kelaniya, Sri Lanka",
        "badge" => "Degree",
        "desc" => "Higher education combining business administration, organizational operations, and information systems governance."
    ],
    [
        "title" => "CCNA (Cisco Certified Network Associate)",
        "issuer" => "Vibernets Academy",
        "badge" => "Certification",
        "desc" => "Enterprise Cisco switching, routing protocols (OSPF/EIGRP), VLAN segmentation, ACL packet filtering, and network diagnostics."
    ],
    [
        "title" => "ITIL V3 2011 Foundation in IT Service Management",
        "issuer" => "ANC Education / AXELOS",
        "badge" => "Certification",
        "desc" => "Standard framework for IT service management (ITSM), incident lifecycle governance, SLA adherence, and change management."
    ],
    [
        "title" => "Windows Network Administrator Diploma",
        "issuer" => "Turnkey IT Campus",
        "badge" => "Diploma",
        "desc" => "Hands-on diploma covering Windows Server domain architecture, Active Directory, Group Policies, DNS/DHCP, and hybrid storage."
    ],
    [
        "title" => "Linux Fundamentals & System Administration",
        "issuer" => "University of Colombo (School of Computing)",
        "badge" => "Certification",
        "desc" => "Linux operating system administration, kernel fundamentals, shell scripting, package management, daemon security, and permissions."
    ],
    [
        "title" => "National Trade Certificate in Information Technology",
        "issuer" => "NAITA (National Apprentice & Industrial Training Authority)",
        "badge" => "Trade Certificate",
        "desc" => "National qualification affirming industrial competence in PC hardware engineering, component-level diagnostics, and workplace safety."
    ]
];
?>
