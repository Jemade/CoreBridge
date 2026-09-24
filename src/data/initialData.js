import {
  Code2, Link, Cpu, Settings, Headphones,
  Stethoscope, Truck, Warehouse, Wrench, BriefcaseBusiness, ShieldCheck,
  Search, Lightbulb, Rocket, Zap, CheckCircle2, Lock
} from "lucide-react";

export const servicesData = [
  {
    id: "custom-software",
    slug: "custom-software",
    icon: Code2,
    title: "Custom Software\nDevelopment",
    shortDescription: "Tailored web and mobile applications built for your unique business needs.",
    description: "Off-the-shelf software rarely fits nuanced operational processes. We architect, build, and deploy resilient custom web and mobile platforms engineered to handle high transaction volumes and complex business logic.",
    deliverables: [
      "Custom web platforms & internal operational portals",
      "Field & customer-facing mobile applications",
      "Scalable backend architectures and relational databases",
      "Automated testing, continuous deployment, and security hardening"
    ]
  },
  {
    id: "system-integrations",
    slug: "system-integrations",
    icon: Link,
    title: "System Integrations",
    shortDescription: "Connect your tools, data and teams for seamless workflows and better visibility.",
    description: "Eliminate data silos, manual copy-pasting, and disconnected spreadsheets. We design reliable API pipelines, webhook listeners, and bi-directional synchronizations across your critical tools.",
    deliverables: [
      "Custom RESTful & GraphQL API development",
      "Legacy software database bridging and ETL pipelines",
      "Payment gateway integrations (EcoCash, Paynow, Visa/Mastercard)",
      "Automated error recovery and event auditing"
    ]
  },
  {
    id: "ai-integrations",
    slug: "ai-integrations",
    icon: Cpu,
    title: "AI Integrations",
    shortDescription: "Automate processes, add intelligence and improve decision-making with AI.",
    description: "Practical AI integration focused on business value, not hype. We deploy intelligent document parsers, automated customer support agents, predictive stock replenishment, and intelligent workflow assistants.",
    deliverables: [
      "Intelligent WhatsApp and omnichannel conversational agents",
      "Document processing, invoice extraction, and optical verification",
      "Predictive demand forecasting and anomaly detection",
      "Proprietary retrieval-augmented generation (RAG) on company knowledge"
    ]
  },
  {
    id: "odoo-zoho-implementation",
    slug: "odoo-zoho-implementation",
    icon: Settings,
    title: "Odoo & Zoho\nImplementation",
    shortDescription: "Configure and customize powerful ERP and CRM platforms for your business.",
    description: "Maximized ROI from enterprise ERP and CRM platforms. We manage end-to-end architecture, module customization, data migration, and staff enablement for Odoo and Zoho ecosystems.",
    deliverables: [
      "Odoo Community & Enterprise module customization (Python/XML)",
      "Zoho One suite orchestration (CRM, Books, Inventory, Desk)",
      "Clean data migration from legacy accounting systems",
      "Role-based access controls, automated approvals, and compliance audit trails"
    ]
  },
  {
    id: "it-consultancy",
    slug: "it-consultancy",
    icon: Headphones,
    title: "IT Consultancy &\nTroubleshooting",
    shortDescription: "Strategic advice, system optimization and hands-on support when you need it.",
    description: "Unbiased technical leadership for growing businesses. Whether evaluating modern infrastructure, untangling technical debt, or debugging mission-critical system outages, we provide actionable guidance.",
    deliverables: [
      "Comprehensive system architecture & security reviews",
      "Infrastructure cost optimization and cloud migration",
      "Incident investigation, bottleneck profiling, and performance tuning",
      "Technology roadmap planning and fractional CTO support"
    ]
  }
];

export const industriesData = [
  {
    slug: "pharmacies-health",
    name: "Pharmacies & Health",
    shortDesc: "Compliance. Traceability.\nBetter patient care.",
    desc: "Ensure strict batch traceability, cold-chain monitoring, automated prescription management, and regulatory compliance with healthcare authorities.",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=800&q=85",
    icon: Stethoscope,
    challenges: [
      "Stringent regulatory reporting and audit traceability",
      "Expiry date management and batch-level stock tracking",
      "Integration with health insurance and digital claims"
    ],
    solutions: [
      "Automated batch expiry alerting and FEFO inventory enforcement",
      "Integrated electronic dispensary and point-of-sale systems",
      "Secure patient communication and prescription re-order bots"
    ]
  },
  {
    slug: "transport-logistics",
    name: "Transport & Logistics",
    shortDesc: "Track. Automate. Deliver\nfaster.",
    desc: "Connect telematics, dispatch schedules, driver waybills, and client notifications into a unified, real-time logistics command center.",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=85",
    icon: Truck,
    challenges: [
      "Blind spots in transit and unpredictable delivery ETA communications",
      "Manual paperwork and trip reconciliation errors",
      "Fuel management and fleet maintenance tracking"
    ],
    solutions: [
      "Automated customer WhatsApp delivery notifications and live tracking",
      "Digital driver manifests and mobile proof-of-delivery (e-POD)",
      "Automated billing triggers synchronized with GPS route completion"
    ]
  },
  {
    slug: "fmcg-wholesalers",
    name: "FMCG Wholesalers",
    shortDesc: "Smarter stock. Faster\nsales.",
    desc: "Keep multi-warehouse stock accurate, prevent stockouts, speed up order turnaround, and equip field sales teams with mobile ordering capabilities.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=85",
    icon: Warehouse,
    challenges: [
      "High volume order processing delays and reconciliation lags",
      "Discrepancies between physical warehouse stock and accounting figures",
      "Credit limit enforcement during fast-paced field sales"
    ],
    solutions: [
      "High-throughput barcode scanning and mobile warehouse picking apps",
      "Real-time multi-branch inventory synchronization",
      "Automated credit checks and instantaneous invoice generation"
    ]
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    shortDesc: "Control costs. Increase\noutput.",
    desc: "Gain complete transparency over bills of materials (BOM), production scrap, machine uptime, and direct labor overheads.",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=85",
    icon: Wrench,
    challenges: [
      "Uncertain cost-per-unit metrics due to unrecorded wastage",
      "Production delays caused by raw material stockout surprises",
      "Disconnected maintenance schedules leading to machine downtime"
    ],
    solutions: [
      "Odoo Manufacturing / MRP configuration with automated BOM cost rollups",
      "Predictive preventive maintenance work order scheduling",
      "Shop-floor touchscreen tracking for job stage transitions"
    ]
  },
  {
    slug: "microfinance-credit",
    name: "Microfinance & Credit",
    shortDesc: "Simpler onboarding.\nBetter collections.",
    desc: "Accelerate loan origination, automate KYC verification, enforce repayment schedules, and minimize portfolio delinquency.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85",
    icon: BriefcaseBusiness,
    challenges: [
      "Paper-intensive onboarding resulting in slow turnaround times",
      "High default rates from late payment follow-ups",
      "Complex interest calculations and compliance audit logs"
    ],
    solutions: [
      "Digital self-service and agent-assisted mobile loan onboarding",
      "Automated payment reminders via WhatsApp & SMS with direct payment links",
      "Automated ledger posting and portfolio aging analytics"
    ]
  },
  {
    slug: "private-security",
    name: "Private Security",
    shortDesc: "Manage teams. Ensure\nsafety.",
    desc: "Coordinate guard patrols, streamline incident reporting, automate shift rosters, and deliver transparent SLA reports to clients.",
    image: "https://images.unsplash.com/photo-1453873531674-2151bcd01707?auto=format&fit=crop&w=800&q=85",
    icon: ShieldCheck,
    challenges: [
      "Proof-of-presence verification across dispersed patrol sites",
      "Slow response times and manual incident report compiling",
      "Complex guard shift scheduling and overtime payroll calculation"
    ],
    solutions: [
      "NFC/GPS guard tour patrol verification with instant exception alerts",
      "Mobile incident capture with photo and geo-tagging",
      "Automated shift rostering synchronized with biometric attendance"
    ]
  }
];

export const processSteps = [
  {
    num: "01",
    icon: Search,
    title: "Discovery & Operational Audit",
    text: "We analyze your existing workflows, legacy software, and operational bottlenecks to locate friction."
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "System Architecture Design",
    text: "We formulate a concrete technical blueprint specifying platforms, integration hooks, and milestones."
  },
  {
    num: "03",
    icon: Code2,
    title: "Build, Integrate & Validate",
    text: "We develop custom modules, configure enterprise platforms, and rigorously test integrations."
  },
  {
    num: "04",
    icon: Rocket,
    title: "Deployment & Ongoing Support",
    text: "We execute cutover, train operational teams, and provide continuous technical support and monitoring."
  }
];

export const resultsData = [
  { stat: "100%", label: "Engineering Rigor", note: "Custom code built to international standards." },
  { stat: "Production", label: "Readiness", note: "Architecture built for real-world operations." },
  { stat: "Dedicated", label: "Local Support", note: "Direct engineering contact in Zimbabwe." },
  { stat: "Measurable", label: "Business ROI", note: "Designed to reduce manual hours & eliminate errors." }
];

export const capabilitiesData = [
  {
    icon: Zap,
    title: "Engineered for Reliability",
    description: "Every integration and custom application is built with fault tolerance, retry mechanisms, and full audit logging so critical business transactions are never dropped."
  },
  {
    icon: CheckCircle2,
    title: "Full-Stack System Ownership",
    description: "From database schema design and ERP configuration to API orchestration and front-facing mobile interfaces, we take complete end-to-end technical responsibility."
  },
  {
    icon: Lock,
    title: "Data Sovereignty & Security",
    description: "We implement role-based access control (RBAC), end-to-end encryption for sensitive data, and secure cloud or on-premise hosting models aligned with industry regulations."
  }
];
