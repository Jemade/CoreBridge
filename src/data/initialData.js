import {
  Code2, Network, Cpu, Workflow, Settings, CreditCard, BarChart3, Compass,
  Store, Factory, Truck, Stethoscope, Pill, Sprout, Landmark, ShieldCheck,
  HardHat, Building2, Boxes, FileText, CheckCircle2, ArrowRight, Search,
  GitMerge, Layers, Hammer, RefreshCw, AlertCircle, Phone, Mail, MapPin,
  Hotel, GraduationCap, Briefcase, Pickaxe, Zap, ChevronRight, Menu, X,
  ArrowUpRight, Activity, Database, Shield, Lock, Clock, Users, Sliders
} from "lucide-react";

// Real photography imports
import heroOperationsImg from "../assets/images/hero/corebridge-hero-operations.jpg";
import teamHarareImg from "../assets/images/about/corebridge-team-harare.jpg";
import engineeringFocusImg from "../assets/images/about/corebridge-engineering-focus.jpg";

import agricultureImg from "../assets/images/industries/agriculture.jpg";
import financialServicesImg from "../assets/images/industries/financial-services.jpg";
import healthcareImg from "../assets/images/industries/healthcare.jpg";
import pharmaceuticalsImg from "../assets/images/industries/pharmaceuticals.jpg";
import retailImg from "../assets/images/industries/retail.jpg";
import fmcgImg from "../assets/images/industries/fmcg.jpg";
import manufacturingImg from "../assets/images/industries/manufacturing.jpg";
import wholesaleImg from "../assets/images/industries/wholesale-distribution.jpg";
import logisticsImg from "../assets/images/industries/logistics-transport.jpg";
import constructionImg from "../assets/images/industries/construction.jpg";
import realEstateImg from "../assets/images/industries/real-estate.jpg";
import miningImg from "../assets/images/industries/mining.jpg";
import energyImg from "../assets/images/industries/energy-utilities.jpg";
import hospitalityImg from "../assets/images/industries/hospitality-tourism.jpg";
import educationImg from "../assets/images/industries/education.jpg";
import professionalServicesImg from "../assets/images/industries/professional-services.jpg";
import securityImg from "../assets/images/industries/security-services.jpg";

import posOdooSyncImg from "../assets/images/case-studies/pos-odoo-sync.jpg";
import logisticsManifestImg from "../assets/images/case-studies/logistics-manifest.jpg";
import fieldServiceImg from "../assets/images/case-studies/field-service.jpg";
import documentAiImg from "../assets/images/case-studies/document-ai.jpg";

import heroLeadImg from "../assets/images/hero/hero-operations-lead.jpg";
import operationalRealityImg from "../assets/images/sections/operational-reality.jpg";
import whatWeSolveImg from "../assets/images/sections/what-we-solve.jpg";
import buildIntegrateImproveImg from "../assets/images/sections/build-integrate-improve.jpg";
import globalLocalImg from "../assets/images/sections/global-local.jpg";
import zimbabweOperationsImg from "../assets/images/sections/zimbabwe-operations.jpg";
import finalCtaImg from "../assets/images/sections/final-cta.jpg";

export {
  heroLeadImg,
  heroOperationsImg,
  teamHarareImg,
  engineeringFocusImg,
  operationalRealityImg,
  whatWeSolveImg,
  buildIntegrateImproveImg,
  globalLocalImg,
  zimbabweOperationsImg,
  finalCtaImg
};

// =================================================================
// 1. CORE CAPABILITIES / SERVICES (Directive Section 16)
// =================================================================
export const servicesData = [
  {
    id: "custom-software",
    slug: "custom-software",
    num: "01",
    icon: Code2,
    title: "Custom Software Engineering",
    shortDescription: "Business applications, portals, internal systems, and workflow platforms engineered for specific operational logic.",
    description: "When commercial off-the-shelf software fails to match your operational reality, we architect and build resilient web applications, customer portals, backend APIs, and internal tools designed around your exact business rules.",
    useCases: [
      "Internal operational portals replacing disparate spreadsheets and shared drives",
      "Customer account portals with self-service ordering and payment tracking",
      "Field operations management systems with offline data collection",
      "High-throughput relational database architectures and internal REST APIs"
    ],
    relevantSystems: [
      "PostgreSQL", "Python / FastAPI", "Django", "React", "Docker", "Node.js", "Redis"
    ],
    deliverables: [
      "Custom web platforms and operational portals",
      "Scalable backend architectures and relational databases",
      "Secure authentication, role-based access control, and audit logging",
      "Automated testing, continuous deployment, and ongoing technical maintenance"
    ]
  },
  {
    id: "systems-integration",
    slug: "systems-integration",
    num: "02",
    icon: Network,
    title: "Systems Integration",
    shortDescription: "Connect existing business platforms and operational systems into a unified, automated flow of information.",
    description: "Businesses rarely need another standalone piece of software. What they need is for their existing tools to communicate reliably. We eliminate manual re-entry, disconnected exports, and broken synchronizations across your business stack.",
    useCases: [
      "Point of Sale transaction streams flowing automatically into accounting ledgers",
      "E-commerce websites synchronizing stock and customer records with ERP inventory",
      "Automated invoice and transaction reconciliation between banks and ERPs",
      "Bi-directional customer data synchronization between CRM and support desks"
    ],
    relevantSystems: [
      "Odoo", "Sage Pastel", "Zoho One", "QuickBooks", "Retail POS", "Custom Databases", "REST / SOAP APIs"
    ],
    deliverables: [
      "Automated bi-directional data synchronization pipelines",
      "Custom webhook listeners, queue workers, and transaction retry logic",
      "Data normalization layers bridging mismatched accounting and sales schemas",
      "Audit logging dashboards tracking transaction delivery and exception recovery"
    ]
  },
  {
    id: "business-automation",
    slug: "business-automation",
    num: "03",
    icon: Workflow,
    title: "Business Process Automation",
    shortDescription: "Automate repetitive workflows, approvals, notifications, and cross-departmental data handoffs.",
    description: "Repetitive manual data entry introduces fatigue, delays, and costly transcription errors. We engineer robust automated background workers that handle approvals, document routing, cross-department notifications, and scheduled reconciliation.",
    useCases: [
      "Multi-tier purchase order approval workflows with automated managerial signoffs",
      "Automated customer shipment notifications triggered upon warehouse dispatch",
      "Daily automated reconciliation routines comparing sales journals against bank records",
      "Automated generation and distribution of periodic operational reports"
    ],
    relevantSystems: [
      "Event Queues", "Webhook Infrastructure", "Email & SMS Gateways", "WhatsApp Business API", "Cron Schedulers"
    ],
    deliverables: [
      "Custom workflow execution engines and event-driven triggers",
      "Automated alert notifications via email, WhatsApp, and SMS",
      "Exception handling queues alerting operators only when manual review is needed",
      "Documentation of automated business rules and operational procedures"
    ]
  },
  {
    id: "ai-integration",
    slug: "ai-integration",
    num: "04",
    icon: Cpu,
    title: "Pragmatic AI Integration",
    shortDescription: "Apply AI where it creates measurable operational value rather than adding AI for mere appearance.",
    description: "We focus on unglamorous, high-impact enterprise AI. Instead of consumer chat toys, Corebridge introduces machine intelligence where skilled employees are burdened with repetitive transcription, unstructured document parsing, and inquiry triage.",
    useCases: [
      "Extracting line-item data, tax numbers, and totals from scanned supplier PDF invoices",
      "Automated categorization and direct routing of incoming operational inquiries",
      "Internal knowledge retrieval assistants referencing standard operating procedures",
      "Anomaly detection flagging irregular transaction patterns or inventory discrepancies"
    ],
    relevantSystems: [
      "LayoutLM / OCR Engines", "Vector Databases", "Embeddings Pipelines", "LangChain / LlamaIndex", "Local LLM Deployments"
    ],
    deliverables: [
      "Automated document processing pipelines with optical character recognition",
      "Structured data extraction from messy PDFs, scanned receipts, and emails",
      "Private semantic search and retrieval systems across company manuals",
      "Confidence scoring thresholds that route low-confidence records to human review"
    ]
  },
  {
    id: "erp-crm",
    slug: "erp-crm",
    num: "05",
    icon: Settings,
    title: "ERP & CRM Implementation",
    shortDescription: "Implementation, customization, integration, and workflow support for established enterprise platforms.",
    description: "Maximizing the return on investment from enterprise platforms like Odoo and Zoho requires careful operational alignment. We configure modules, migrate legacy records, develop custom business logic, and enable staff adoption.",
    useCases: [
      "End-to-end Odoo module configuration for manufacturing, purchasing, and sales",
      "Zoho One orchestration across CRM, Books, Inventory, and Desk",
      "Customizing business forms, validation rules, and approval hierarchies",
      "Migrating multi-year historic data from legacy spreadsheets into structured ledgers"
    ],
    relevantSystems: [
      "Odoo Enterprise & Community", "Zoho One", "PostgreSQL", "Python Addons", "XML Form Definitions"
    ],
    deliverables: [
      "Workflow mapping and operational blueprint design",
      "Custom module development in Python and XML",
      "Historical data sanitization, migration, and reconciliation",
      "Staff enablement documentation and post-go-live technical support"
    ]
  },
  {
    id: "payment-integration",
    slug: "payment-integration",
    num: "06",
    icon: CreditCard,
    title: "Payment Systems Integration",
    shortDescription: "Connect payment workflows to orders, customer records, accounting ledgers, and internal systems.",
    description: "Payments should not exist in isolation from your accounting journals and order fulfillment. We build payment integration pipelines connecting point-of-sale terminals, web portals, and mobile money services directly to your core ledger.",
    useCases: [
      "EcoCash, Paynow, and local mobile money payment gateway integrations",
      "Automated payment status webhooks updating order fulfillment queues instantly",
      "Credit card gateway integration for international and regional B2B billing",
      "Automated payment receipt matching against pending customer invoices"
    ],
    relevantSystems: [
      "EcoCash API", "Paynow Gateway", "Visa / Mastercard Rails", "Bank Statement Ingestion", "Accounting Ledgers"
    ],
    deliverables: [
      "Idempotent payment webhook ingestion engines",
      "Automated payment reconciliation scripts matching bank/mobile money payouts",
      "Immediate automated digital receipt delivery to customers",
      "Tamper-evident transaction logs for audit and dispute resolution"
    ]
  },
  {
    id: "data-reporting",
    slug: "data-reporting",
    num: "07",
    icon: BarChart3,
    title: "Data & Operational Reporting",
    shortDescription: "Bring operational information together from isolated databases for clear business visibility.",
    description: "Decision-makers should not have to wait days for teams to manually consolidate conflicting spreadsheets. We build operational dashboards and scheduled reporting pipelines that pull validated data directly from your operational systems.",
    useCases: [
      "Consolidating multi-branch sales, inventory, and gross margins into a unified dashboard",
      "Automated daily flash reports sent to management via email at the close of trading",
      "Customer aging reports cross-referenced with recent order activity",
      "Production throughput and material consumption tracking against budgeted standards"
    ],
    relevantSystems: [
      "SQL Data Warehouses", "Metabase", "Power BI Connectors", "Scheduled Report Engines", "Automated Email Generators"
    ],
    deliverables: [
      "Unified operational reporting databases with automated ETL pipelines",
      "Executive and branch-level performance dashboards",
      "Scheduled automated daily, weekly, and monthly summary emails",
      "Standardized data definitions eliminating cross-department reporting disputes"
    ]
  },
  {
    id: "it-consulting",
    slug: "it-consulting",
    num: "08",
    icon: Compass,
    title: "Technology Architecture & Modernisation",
    shortDescription: "Architecture reviews, technology decisions, troubleshooting, and modernisation planning before investing.",
    description: "Independent, experienced guidance when evaluating new software, investigating broken workflows, or planning phased modernisation. We help operators avoid costly software missteps by focusing on operational feasibility first.",
    useCases: [
      "Conducting comprehensive operational audits of existing software and paper workflows",
      "Evaluating vendor software proposals: Build vs. Buy vs. Connect analysis",
      "Root-cause investigation and profiling of slow, failing, or unstable systems",
      "Phased digital modernisation roadmaps that protect day-to-day business momentum"
    ],
    relevantSystems: [
      "System Architecture Diagrams", "Cloud Infrastructure (AWS/Azure/Local)", "Database Tuning", "Disaster Recovery"
    ],
    deliverables: [
      "Written operational technology audit with concrete findings and recommendations",
      "Target system architecture blueprint and integration specification",
      "Software vendor evaluation matrix with risk and cost assessments",
      "Phased implementation timeline with risk mitigation milestones"
    ]
  }
];

// =================================================================
// 2. DETAILED INDUSTRIES (Directive Sections 17 & 18)
// =================================================================
export const industriesData = [
  {
    slug: "agriculture",
    name: "Agriculture & Farming",
    image: agricultureImg,
    icon: Sprout,
    shortDesc: "Harvest tracking, packhouse logistics, input purchasing, and cold chain coordination.",
    overview: "Modern commercial farming depends on coordinated data across dispersed fields, packhouses, input inventories, and export logistics. Corebridge helps agricultural enterprises connect scale weights, field labor records, cold chain telemetry, and accounting ledgers into one dependable operational flow.",
    operationalChallenges: [
      "Manual scale weight ticketing leading to reconciliation discrepancies at packhouses",
      "Delayed visibility into input inventory (fertilizer, seed, chemicals) across scattered storehouses",
      "Disconnect between harvest delivery schedules and cold-storage freight availability",
      "Paper-heavy field labor time tracking causing delayed payroll calculations"
    ],
    commonSystems: [
      "Weighbridge and electronic scale software",
      "Odoo / Sage accounting and inventory modules",
      "Cold-chain temperature logging sensors",
      "Custom mobile harvesting forms"
    ],
    integrationOpportunities: [
      "Automated weighbridge ticket ingestion into central inventory and grower settlement ledgers",
      "Direct synchronization between field picking manifests and packhouse receiving queues",
      "Automatic fuel and input requisition approvals linked to vehicle and field allocations"
    ],
    softwareOpportunities: [
      "Offline-first mobile crop inspection and pest scouting applications",
      "Packhouse batch tracing portal tracking produce from specific field blocks to pallet export",
      "Contract grower management portal tracking seed disbursement, advances, and final payouts"
    ],
    automationOpportunities: [
      "Automated daily harvest tonnage summaries sent to operations managers at day close",
      "Instant exception alerts when cold-storage temperature thresholds are breached",
      "Automated grower payout calculation based on verified grading and moisture readings"
    ],
    aiOpportunities: [
      "Computer vision grading verification for crop uniformity at packhouse sorting lines",
      "Predictive yield and harvest timing forecasts based on historical weather and planting logs",
      "Automated extraction of supplier delivery notes and chemical compliance certifications"
    ],
    exampleWorkflow: [
      { step: "01", title: "Field Harvest", desc: "Picking crews log crates using mobile devices with offline local storage." },
      { step: "02", title: "Packhouse Scale", desc: "Automated weighbridge captures weight and assigns unique batch lot identifiers." },
      { step: "03", title: "ERP Ingestion", desc: "Inventory balances update in real time; grower credit accounts reflect intake." },
      { step: "04", title: "Cold Chain & Export", desc: "Dispatch manifests and export compliance documents generate automatically." }
    ]
  },
  {
    slug: "financial-services",
    name: "Financial Services & Credit",
    image: financialServicesImg,
    icon: Landmark,
    shortDesc: "Loan origination, KYC verification, repayment reconciliation, and audit ledgers.",
    overview: "Credit providers and microfinance institutions face immense pressure to accelerate loan turnaround while maintaining strict risk controls and accurate accounting. We build connective systems that link mobile onboarding, digital KYC verification, mobile money repayment webhooks, and core lending ledgers.",
    operationalChallenges: [
      "Paper-based loan applications creating multi-day backlogs and customer drop-off",
      "Slow manual matching of incoming mobile money repayments against loan balances",
      "Delinquency rates rising because payment reminder notices are sent manually and late",
      "Complex multi-currency accounting reconciliation across bank accounts and cash drawers"
    ],
    commonSystems: [
      "Core banking and loan management platforms",
      "Mobile money gateways (EcoCash, Paynow)",
      "Credit bureau reporting interfaces",
      "Accounting ledgers (Sage, Odoo, QuickBooks)"
    ],
    integrationOpportunities: [
      "Real-time mobile money webhook synchronization posting repayments directly to loan accounts",
      "Automated credit bureau inquiry API triggers during the initial application flow",
      "Two-way synchronization between loan disbursement orders and commercial bank APIs"
    ],
    softwareOpportunities: [
      "Agent-assisted mobile loan origination app with offline identity document capture",
      "Customer self-service portal for balance inquiries, statements, and repayment links",
      "Portfolio risk analytics dashboard visualizing aging buckets and recovery rates"
    ],
    automationOpportunities: [
      "Automated repayment reminders sent via SMS and WhatsApp 48 hours prior to due dates",
      "Instant receipt notifications dispatched upon verified receipt of mobile money funds",
      "Automated end-of-day ledger balancing comparing payment gateway logs to loan system entries"
    ],
    aiOpportunities: [
      "Automated national identity document OCR and extraction for customer onboarding",
      "Bank statement parser extracting average monthly credits and transaction volatility",
      "Intelligent conversational triage assistant answering balance and settlement queries"
    ],
    exampleWorkflow: [
      { step: "01", title: "Digital Application", desc: "Client applies via mobile portal; KYC documents uploaded and parsed." },
      { step: "02", title: "Underwriting & Approval", desc: "Automated checks verify eligibility; loan officer approves in dashboard." },
      { step: "03", title: "Disbursement", desc: "Disbursement API triggers mobile money or bank transfer automatically." },
      { step: "04", title: "Repayment Sync", desc: "Borrower pays via EcoCash; webhook updates ledger and sends instant receipt." }
    ]
  },
  {
    slug: "healthcare-pharmaceuticals",
    name: "Healthcare & Pharmaceuticals",
    image: healthcareImg,
    icon: Stethoscope,
    shortDesc: "Patient records, batch expiry tracking, dispensary workflows, and supplier purchasing.",
    overview: "Clinics, pharmacies, and medical distributors operate under stringent compliance requirements where inventory accuracy directly impacts patient safety. Corebridge builds integrations that connect electronic dispensary systems, point-of-sale terminals, supplier ordering, and FEFO inventory tracking.",
    operationalChallenges: [
      "Inventory write-offs from unmonitored medication expiration dates on pharmacy shelves",
      "Manual claims reconciliation between dispensary records and medical aid societies",
      "Disconnected stock levels between hospital wards, central pharmacy, and procurement",
      "Slow manual inventory counts interrupting customer counter service"
    ],
    commonSystems: [
      "Pharmacy Point of Sale software",
      "Electronic Health Record (EHR) databases",
      "Medical aid claim adjudication switches",
      "Wholesale supplier procurement portals"
    ],
    integrationOpportunities: [
      "Point of sale integration enforcing FEFO (First-Expired, First-Out) stock decrementing",
      "Automated electronic claims submission and authorization checking during dispensary",
      "Synchronizing central hospital pharmacy inventory with departmental dispensary stocks"
    ],
    softwareOpportunities: [
      "Custom batch traceability portal tracking restricted substances and compliance logs",
      "Patient prescription renewal portal with SMS reminder alerts and payment integration",
      "Multi-branch pharmacy reordering dashboard consolidating supplier purchase orders"
    ],
    automationOpportunities: [
      "Automated 90-day, 60-day, and 30-day expiry warning alerts sent to pharmacy managers",
      "Automated purchase order generation when critical medications reach safety stock thresholds",
      "Daily automated dispensary cash-up and medical aid claim reconciliation journals"
    ],
    aiOpportunities: [
      "Prescription order parsing from uploaded doctor notes into electronic line items",
      "Demand forecasting predicting seasonal consumption surges for chronic medications",
      "Automated supplier invoice matching against incoming physical delivery manifests"
    ],
    exampleWorkflow: [
      { step: "01", title: "Prescription Intake", desc: "Pharmacist verifies script; dispensary system checks stock and expiry batches." },
      { step: "02", title: "Claim Adjudication", desc: "Integrated medical aid switch verifies member coverage and copay instantly." },
      { step: "03", title: "Dispense & POS", desc: "Copay collected at terminal; batch decrements using FEFO logic." },
      { step: "04", title: "Stock Replenishment", desc: "Safety threshold trigger creates automated supplier purchase order draft." }
    ]
  },
  {
    slug: "retail-fmcg",
    name: "Retail & FMCG",
    image: retailImg,
    icon: Store,
    shortDesc: "Multi-store POS, inventory balancing, supplier ordering, and cash reconciliation.",
    overview: "Fast-moving consumer goods and multi-branch retail environments require rapid throughput and real-time inventory visibility. Corebridge connects point-of-sale terminals, warehouse pick-and-pack stations, supplier purchasing, and accounting ledgers to eliminate phantom stock and stockouts.",
    operationalChallenges: [
      "Discrepancies between physical shop-floor stock and back-office accounting ledgers",
      "Branch-level stockouts occurring while neighboring branches hold excess inventory",
      "Lengthy manual end-of-day cash-up and card terminal reconciliation",
      "Slow, manual supplier purchase ordering leading to delayed delivery turnaround"
    ],
    commonSystems: [
      "Retail POS terminals (NCR, Posiflex, bespoke)",
      "ERP software (Odoo, Sage Pastel, SAP Business One)",
      "Payment terminals and mobile money rails",
      "Warehouse barcode scanning devices"
    ],
    integrationOpportunities: [
      "Automated end-of-shift POS journal posting directly into general ledger accounts",
      "Real-time multi-branch inventory synchronization preventing overselling across channels",
      "Payment gateway integration reconciling daily settlement deposits against sales logs"
    ],
    softwareOpportunities: [
      "Inter-branch stock transfer portal with digital dispatch and receiving signoffs",
      "Supplier pricing comparison and automated purchase order dispatch tool",
      "Mobile barcode scanning inventory auditing app for fast weekly spot checks"
    ],
    automationOpportunities: [
      "Automated reorder triggers dispatched to central warehouse when branch stock drops below par",
      "Daily exception alerts highlighting cash drawer variances and abnormal return rates",
      "Automated supplier delivery note matching against verified purchase orders"
    ],
    aiOpportunities: [
      "Store-level demand forecasting considering seasonal events, paydays, and promotions",
      "Automated supplier invoice PDF data extraction directly into accounts payable journals",
      "Customer basket association analysis identifying common product affinity pairings"
    ],
    exampleWorkflow: [
      { step: "01", title: "Checkout Sale", desc: "Customer completes payment; POS terminal posts transaction instantly." },
      { step: "02", title: "Stock Decrement", desc: "Branch stock balance decrements; central inventory visibility updates." },
      { step: "03", title: "Reorder Trigger", desc: "Stock below minimum threshold triggers automated replenishment order." },
      { step: "04", title: "Nightly Ledger Post", desc: "Consolidated sales journals, taxes, and payment settlements post to ERP." }
    ]
  },
  {
    slug: "manufacturing-assembly",
    name: "Manufacturing & Assembly",
    image: manufacturingImg,
    icon: Factory,
    shortDesc: "Bills of materials, raw material procurement, work-in-progress, and unit costing.",
    overview: "Manufacturing operations succeed or fail based on accurate cost-per-unit visibility and production scheduling. We configure ERP manufacturing modules, connect shop-floor job tracking, automate raw material allocations, and align bills of materials with actual accounting overheads.",
    operationalChallenges: [
      "Inaccurate cost-per-unit metrics caused by unrecorded scrap and raw material wastage",
      "Production stoppages resulting from unexpected raw material shortages",
      "Shop-floor job tracking handled on paper sheets that take days to enter into the ERP",
      "Maintenance schedules operating on memory rather than machine runtime data"
    ],
    commonSystems: [
      "ERP Manufacturing (MRP) modules (Odoo, Sage)",
      "Shop-floor touchscreen terminals",
      "Raw material warehouse inventory databases",
      "Equipment maintenance management software"
    ],
    integrationOpportunities: [
      "Linking raw material warehouse inventory decrements directly to verified production work orders",
      "Synchronizing finished goods receiving with sales department available-to-promise queues",
      "Connecting machine hour logs to preventive maintenance work order triggers"
    ],
    softwareOpportunities: [
      "Touchscreen shop-floor job card terminal for operators to log batch completion and scrap",
      "Raw material requisition portal requiring supervisor digital signoff before warehouse release",
      "Production yield and scrap analysis dashboard comparing actual output to theoretical BOM"
    ],
    automationOpportunities: [
      "Automated raw material purchase alerts generated when production schedule exceeds stock",
      "Instant work-in-progress (WIP) stage transition notifications sent to quality control",
      "Automated manufacturing variance reports highlighting job orders exceeding standard costs"
    ],
    aiOpportunities: [
      "Predictive machine maintenance alerting based on operating hours and vibration logs",
      "Computer vision inspection flagging dimensional or surface defects on conveyor lines",
      "Automated bill of materials optimization based on historical component scrap rates"
    ],
    exampleWorkflow: [
      { step: "01", title: "Work Order Issued", desc: "Production planning issues manufacturing order based on confirmed sales." },
      { step: "02", title: "Material Release", desc: "Warehouse scans raw materials; inventory allocates to WIP ledger." },
      { step: "03", title: "Shop-Floor Execution", desc: "Operators log job stages and scrap on rugged touchscreen terminals." },
      { step: "04", title: "Cost Rollup & Intake", desc: "Actual labor and materials roll into unit cost; finished goods enter inventory." }
    ]
  },
  {
    slug: "wholesale-distribution",
    name: "Wholesale & Distribution",
    image: wholesaleImg,
    icon: Boxes,
    shortDesc: "Bulk ordering, field sales apps, warehouse pick-pack, and credit terms.",
    overview: "Distributors manage high transaction volumes, complex customer credit limits, multi-warehouse stock allocations, and fast turnaround schedules. Corebridge builds mobile ordering tools for field sales reps, optimizes warehouse picking workflows, and automates credit check reconciliations.",
    operationalChallenges: [
      "Field sales reps taking orders on paper or messaging apps, creating fulfillment delays",
      "Orders dispatched to customers who have exceeded their authorized credit terms",
      "Warehouse pick-and-pack bottlenecks and discrepancies between pick sheets and invoices",
      "Manual credit reconciliation across hundreds of bulk commercial accounts"
    ],
    commonSystems: [
      "Enterprise ERP (Odoo, Sage 200, Sage Pastel)",
      "Mobile sales rep ordering tools",
      "Warehouse management software and barcode scanners",
      "Payment gateway reconciliation tools"
    ],
    integrationOpportunities: [
      "Mobile ordering app synchronizing directly with central ERP inventory and credit limits",
      "Warehouse barcode scanner integration verifying pick lists prior to invoice generation",
      "Automated customer ledger updates upon verified receipt of bank proof-of-payment"
    ],
    softwareOpportunities: [
      "Offline-enabled field sales portal with customer purchase history and live pricing tiers",
      "Warehouse dispatch verification portal matching loaded pallets against truck manifests",
      "Customer B2B self-service reordering portal with live stock levels and account statements"
    ],
    automationOpportunities: [
      "Automated credit limit hold triggers preventing order processing for overdue accounts",
      "Instant dispatch confirmation alerts with electronic invoice PDFs emailed to customers",
      "Automated daily warehouse pick accuracy reports highlighting fulfillment exceptions"
    ],
    aiOpportunities: [
      "Bulk customer purchase order parsing from emailed PDF attachments directly into draft sales orders",
      "Customer replenishment velocity predictions suggesting timely reorder schedules to sales reps",
      "Automated credit risk assessment scoring based on customer historical settlement patterns"
    ],
    exampleWorkflow: [
      { step: "01", title: "Field Order Entry", desc: "Rep takes customer order on tablet; credit limit and live stock verified." },
      { step: "02", title: "Warehouse Queue", desc: "Order arrives in warehouse; barcode pick list generated automatically." },
      { step: "03", title: "Scan Verification", desc: "Picker scans barcodes; system validates items and generates delivery manifest." },
      { step: "04", title: "Dispatch & Invoicing", desc: "Truck departs; electronic invoice and proof-of-dispatch email to customer." }
    ]
  },
  {
    slug: "logistics-transport",
    name: "Logistics & Transport",
    image: logisticsImg,
    icon: Truck,
    shortDesc: "Fleet dispatch, driver manifests, electronic proof of delivery, and trip billing.",
    overview: "Fleet operators and cargo logistics companies must coordinate drivers, transit checkpoints, fuel allocations, maintenance schedules, and timely billing. We integrate telematics data, digital driver manifests, mobile proof-of-delivery (e-POD), and accounting systems to eliminate trip reconciliation lags.",
    operationalChallenges: [
      "Paper delivery notes lost or delayed in transit, delaying final client invoicing by weeks",
      "Unpredictable transit status updates leading to constant customer phone inquiries",
      "Manual fuel and toll expense reconciliation per vehicle trip eating operational hours",
      "Preventive fleet maintenance missed due to unlinked odometer tracking"
    ],
    commonSystems: [
      "Fleet telematics and GPS tracking platforms",
      "Transport Management Systems (TMS)",
      "Driver mobile applications",
      "ERP and invoicing platforms (Sage, Odoo)"
    ],
    integrationOpportunities: [
      "GPS route completion triggers automatically notifying invoicing departments",
      "Electronic proof-of-delivery (photo and signature) synchronizing instantly to the ERP",
      "Telematics mileage integration automating vehicle service interval work orders"
    ],
    softwareOpportunities: [
      "Driver mobile application with offline job sheets, turn-by-turn routes, and e-POD capture",
      "Customer shipment tracking portal providing milestone updates and signed POD downloads",
      "Trip profitability dashboard comparing fuel and toll expenses against agreed freight rates"
    ],
    automationOpportunities: [
      "Automated milestone SMS/WhatsApp updates dispatched to clients upon depot arrival and delivery",
      "Immediate automated invoice generation upon verified driver e-POD upload",
      "Automated exception alerts when delivery vehicle deviates significantly from planned route"
    ],
    aiOpportunities: [
      "Document OCR extraction from third-party customs clearance and cross-border transit permits",
      "Route optimization algorithms calculating most fuel-efficient delivery sequences",
      "Predictive vehicle component maintenance warnings derived from telematics sensor streams"
    ],
    exampleWorkflow: [
      { step: "01", title: "Trip Dispatch", desc: "Dispatcher assigns manifest to vehicle; driver receives digital job sheet." },
      { step: "02", title: "Transit Telematics", desc: "GPS telematics track vehicle progress; automated alerts update client." },
      { step: "03", title: "e-POD Capture", desc: "Driver collects digital signature and photo proof on mobile at destination." },
      { step: "04", title: "Instant Invoicing", desc: "Validated delivery triggers automated invoice generation and trip reconciliation." }
    ]
  },
  {
    slug: "construction-real-estate",
    name: "Construction & Real Estate",
    image: constructionImg,
    icon: HardHat,
    shortDesc: "Project billing, subcontractor progress claims, material tracking, and lease management.",
    overview: "Commercial construction and property management require rigorous tracking of site material deliveries, subcontractor milestone claims, equipment allocation, and tenant lease agreements. We build connective systems that keep site operations aligned with project accounting budgets.",
    operationalChallenges: [
      "Project cost overruns discovered only after projects finish due to disconnected spreadsheets",
      "Disputes over subcontractor progress payments and unverified site milestone completions",
      "Material leakage and unrecorded transfers between different active construction sites",
      "Manual tenant lease renewals, escalating rental tracking, and maintenance ticketing"
    ],
    commonSystems: [
      "Project management software (MS Project, Primavera)",
      "Job-costing accounting packages (Sage Evolution, Odoo)",
      "Property management and tenant portals",
      "Mobile site inspection forms"
    ],
    integrationOpportunities: [
      "Synchronizing approved site inspection milestone signoffs directly with progressive billing claims",
      "Integrating site material delivery logs with central procurement purchase orders",
      "Connecting property management rent roll ledgers to automated payment reconciliation"
    ],
    softwareOpportunities: [
      "Mobile site supervisor app for logging material receipts, equipment hours, and weather delays",
      "Subcontractor compliance and progress claim portal with photo evidence upload",
      "Tenant property management portal for maintenance requests, lease documents, and rent payment"
    ],
    automationOpportunities: [
      "Automated budget variance warnings when committed site purchases approach stage limits",
      "Automated rent invoice generation and lease escalation notifications dispatched to tenants",
      "Automated reminders for subcontractor insurance, tax clearance, and safety compliance renewals"
    ],
    aiOpportunities: [
      "Computer vision site progress comparison against architectural milestones and drawings",
      "Automated subcontractor invoice parsing matching billed labor against agreed rate cards",
      "Tenant maintenance inquiry classification routing requests to appropriate plumbers or electricians"
    ],
    exampleWorkflow: [
      { step: "01", title: "Site Requisition", desc: "Site manager requests materials; system checks available project budget." },
      { step: "02", title: "Delivery Verification", desc: "Materials arrive on site; supervisor inspects and confirms receipt via mobile." },
      { step: "03", title: "Milestone Signoff", desc: "Engineer verifies completed stage; project accounting validates claim." },
      { step: "04", title: "Progress Billing", desc: "System generates progressive client billing certificate with backup logs." }
    ]
  },
  {
    slug: "hospitality-tourism",
    name: "Hospitality & Tourism",
    image: hospitalityImg,
    icon: Hotel,
    shortDesc: "Property management, POS food & beverage, kitchen ticketing, and guest billing.",
    overview: "Hotels, safari lodges, and restaurant groups coordinate multi-point guest interactions: front-desk reservations, restaurant dining, tour activities, and final checkout billing. We integrate Property Management Systems (PMS) with food and beverage point of sale, supplier ordering, and central accounting.",
    operationalChallenges: [
      "Guest dining and bar charges failing to post to room folios, causing checkout disputes",
      "Recipe ingredient wastage and lack of visibility into actual food and beverage gross margins",
      "Disconnected third-party booking channels creating double-booking risks or manual re-entry",
      "Delayed end-of-day revenue reconciliation across diverse hotel cost centers"
    ],
    commonSystems: [
      "Property Management Systems (PMS)",
      "Food & Beverage Point of Sale",
      "Channel managers and booking engines",
      "Enterprise accounting software"
    ],
    integrationOpportunities: [
      "Point of sale integration posting bar and restaurant bills directly to guest room accounts",
      "Channel manager integration synchronizing reservation availability with central PMS",
      "Daily automated night audit journal transfer to general ledger accounting"
    ],
    softwareOpportunities: [
      "Digital kitchen display and order routing system coordinating dining orders with prep stations",
      "Recipe costing and ingredient decrementing tool updating inventory on every dish sold",
      "Guest mobile portal for pre-arrival check-in, safari activity booking, and invoice preview"
    ],
    automationOpportunities: [
      "Automated post-checkout guest statement delivery via email with integrated payment receipt",
      "Daily automated night audit revenue reports delivered to hotel general managers",
      "Low-stock ingredient replenishment alerts dispatched to food and beverage procurement"
    ],
    aiOpportunities: [
      "Intelligent reservation inquiry parsing from travel agent emails into draft bookings",
      "Seasonal demand and room rate dynamic pricing recommendations based on booking pace",
      "Automated guest review sentiment analysis categorizing feedback across dining, rooms, and staff"
    ],
    exampleWorkflow: [
      { step: "01", title: "Guest Reservation", desc: "Booking received via web or channel manager; PMS reserves room inventory." },
      { step: "02", title: "F&B Consumption", desc: "Guest dines; restaurant POS posts bill directly to verified guest room folio." },
      { step: "03", title: "Night Audit", desc: "Automated audit rolls room revenue, taxes, and departmental sales into ERP." },
      { step: "04", title: "Settlement & Departure", desc: "Consolidated folio settles at checkout; digital receipt emails automatically." }
    ]
  },
  {
    slug: "education-institutions",
    name: "Education & Institutions",
    image: educationImg,
    icon: GraduationCap,
    shortDesc: "Student records, tuition fee billing, payment reconciliation, and administrative workflows.",
    overview: "Schools, colleges, and tertiary institutions handle substantial administrative overhead: admissions processing, tuition payment matching, exam records, and parent communications. Corebridge connects student information systems, payment gateways, and accounting ledgers to reduce administrative backlogs.",
    operationalChallenges: [
      "Manual reconciliation of bank and mobile money tuition deposits creating registration delays",
      "Parent inquiries overwhelming administrative staff during enrollment and fee payment cycles",
      "Student academic records disconnected from fee clearance databases, complicating exam permissions",
      "Manual compilation of departmental procurement requisitions and budget tracking"
    ],
    commonSystems: [
      "Student Information Systems (SIS)",
      "Learning Management Systems (LMS)",
      "Bank statement and mobile money feeds",
      "Institutional accounting software"
    ],
    integrationOpportunities: [
      "Tuition payment gateway integration updating student fee clearance records in real time",
      "Student record synchronization between SIS and institutional library/exam systems",
      "Automated tuition billing journal entry generation into general ledger accounts"
    ],
    softwareOpportunities: [
      "Parent self-service portal for viewing fee balances, download statements, and card/mobile payment",
      "Online student registration and document verification workflow tool",
      "Automated exam clearance hall-pass generator accessible only upon verified fee settlement"
    ],
    automationOpportunities: [
      "Automated fee balance notifications and payment reminder SMS messages sent to guardians",
      "Instant confirmation receipts dispatched to parents upon verified bank/mobile money deposit",
      "Automated monthly institutional financial summaries comparing collections to operational budgets"
    ],
    aiOpportunities: [
      "Automated parsing of student application documents, transcripts, and certificates",
      "Conversational enrollment assistant answering frequent parent queries on fees and calendars",
      "Historical student retention and fee settlement pattern analysis informing budget forecasts"
    ],
    exampleWorkflow: [
      { step: "01", title: "Enrollment & Fee Invoice", desc: "Student registers for term; system issues tuition invoice to guardian." },
      { step: "02", title: "Mobile / Bank Payment", desc: "Parent pays via integrated gateway; webhook matches student account code." },
      { step: "03", title: "Clearance Granted", desc: "Student fee ledger updates instantly; exam and class permissions activate." },
      { step: "04", title: "Accounting Integration", desc: "Collections post to institutional general ledger; audited statement updates." }
    ]
  },
  {
    slug: "professional-services",
    name: "Professional Services & Legal",
    image: professionalServicesImg,
    icon: Briefcase,
    shortDesc: "Client matter management, billable time tracking, retainer invoicing, and document storage.",
    overview: "Law firms, accounting practices, engineering consultancies, and corporate advisors depend on accurate billable hour capture, project retainer management, and secure document workflows. We integrate practice management tools, timesheets, retainer billing, and client portals.",
    operationalChallenges: [
      "Unrecorded billable hours lost between fragmented personal notes, calendars, and emails",
      "Manual preparation and emailing of monthly retainer invoices consuming administrative days",
      "Confidential client engagement documents scattered across unmanaged staff laptops",
      "Lack of real-time visibility into project profitability and non-billable realization rates"
    ],
    commonSystems: [
      "Practice management software",
      "Timesheet and billing applications",
      "Document management and cloud storage",
      "Accounting and trust account ledgers"
    ],
    integrationOpportunities: [
      "Timesheet entry integration generating automated draft client billing invoices",
      "Trust account transaction integration maintaining compliant client funds separation",
      "Client engagement portal synchronization with calendar and task deliverable systems"
    ],
    softwareOpportunities: [
      "Secure client portal for sharing engagement letters, deliverables, and digital signoffs",
      "Internal staff matter tracking dashboard monitoring realization rates against fee caps",
      "Centralized document versioning system with role-based confidentiality controls"
    ],
    automationOpportunities: [
      "Automated recurring monthly retainer invoice generation and client dispatch",
      "Automated reminders sent to professionals to submit timesheets before billing cutoff",
      "Automated notifications to partners when engagement billable totals approach client budget limits"
    ],
    aiOpportunities: [
      "Contract and agreement clause extraction highlighting unusual indemnities or liabilities",
      "Timesheet draft assistance suggesting entries based on calendar appointments and sent emails",
      "Internal precedent search finding relevant past briefs, research memos, and templates"
    ],
    exampleWorkflow: [
      { step: "01", title: "Matter Onboarding", desc: "Client engagement created; conflict check verified and retainer billed." },
      { step: "02", title: "Work Execution", desc: "Consultants log billable time and work notes against specific matter codes." },
      { step: "03", title: "Invoice Compilation", desc: "System compiles verified timesheets and expenses into partner review draft." },
      { step: "04", title: "Client Delivery & Sync", desc: "Approved invoice dispatches to client; trust funds apply or payment triggers." }
    ]
  },
  {
    slug: "security-services",
    name: "Security Services & Facilities",
    image: securityImg,
    icon: ShieldCheck,
    shortDesc: "Guard tour verification, incident capture, shift rostering, and client SLA reporting.",
    overview: "Private security providers and facilities management firms manage distributed field forces across hundreds of client sites. Corebridge builds systems connecting NFC guard tour checkpoints, mobile incident reporting, biometric attendance rostering, and client SLA compliance dashboards.",
    operationalChallenges: [
      "Lack of real-time proof-of-presence verification across remote client guard posts",
      "Incident reports compiled manually on paper days after events occur, delaying client alerts",
      "Complex guard shift rostering and manual overtime calculations creating payroll disputes",
      "Difficulty proving contract SLA compliance during client contract review meetings"
    ],
    commonSystems: [
      "Guard patrol and NFC checkpoint readers",
      "Biometric attendance time-clocks",
      "Shift rostering and payroll software",
      "Client incident reporting portals"
    ],
    integrationOpportunities: [
      "NFC checkpoint patrol data synchronizing in real time to operational control rooms",
      "Biometric attendance integration updating shift rosters and calculating verified overtime",
      "Incident logging triggers alerting client security directors and dispatching supervisors"
    ],
    softwareOpportunities: [
      "Mobile guard patrol app with offline NFC checkpoint scanning and GPS verification",
      "Supervisor site inspection app with photo capture, uniform checks, and hazard logs",
      "Client portal displaying real-time patrol compliance rates and archived incident reports"
    ],
    automationOpportunities: [
      "Automated patrol exception alerts triggered when a guard misses a scheduled checkpoint by 15 minutes",
      "Daily automated client SLA compliance certificates emailed to corporate security managers",
      "Automated shift roster balancing flagging scheduled guards nearing legal overtime thresholds"
    ],
    aiOpportunities: [
      "Automated incident report summarization highlighting recurring vulnerability patterns by site",
      "Computer vision monitoring flagging uniform compliance or unauthorized perimeter entry",
      "Predictive shift absence forecasting identifying high-risk absentee shifts based on historical trends"
    ],
    exampleWorkflow: [
      { step: "01", title: "Shift Clock-in", desc: "Guard clocks in via biometric terminal; active roster verifies post assignment." },
      { step: "02", title: "Patrol Checkpoints", desc: "Guard scans NFC tags on patrol; live control room dashboard confirms progress." },
      { step: "03", title: "Incident Logging", desc: "Anomaly detected; guard logs photo and voice note via rugged mobile unit." },
      { step: "04", title: "SLA Client Report", desc: "Client receives immediate alert; month-end SLA certificate compiles automatically." }
    ]
  }
];

// =================================================================
// 3. CORE APPROACH & METHODOLOGY (Directive Section 24)
// =================================================================
export const processSteps = [
  {
    num: "01",
    phase: "DISCOVER",
    icon: Search,
    title: "Operational & Systems Audit",
    headline: "Understand the business, current systems, and operational constraints.",
    description: "We begin on the ground. We examine your actual business environment, interview department operators, inspect current software, and identify where work slows down, stalls, or requires manual workarounds."
  },
  {
    num: "02",
    phase: "MAP",
    icon: GitMerge,
    title: "Workflow & Data Mapping",
    headline: "Document workflows, systems, data flows, and dependencies.",
    description: "We document the path information takes through your business: from initial customer order, across inventory and fulfillment, through payments, into accounting ledgers, and onto executive reports. Gaps become visible immediately."
  },
  {
    num: "03",
    phase: "ARCHITECT",
    icon: Compass,
    title: "Solution Architecture",
    headline: "Determine whether the right solution is build, integration, automation, or improvement.",
    description: "Corebridge does not default to building software. We evaluate whether the best, most cost-effective path is connecting tools you already own, automating a handoff, introducing AI, or engineering a targeted custom application."
  },
  {
    num: "04",
    phase: "BUILD / INTEGRATE",
    icon: Code2,
    title: "Engineering & Implementation",
    headline: "Implement the solution with rigorous testing.",
    description: "We develop custom software modules, configure API pipelines, establish webhook listeners, and implement data normalization. All integrations undergo rigorous edge-case testing, transaction retry validation, and security hardening."
  },
  {
    num: "05",
    phase: "DEPLOY",
    icon: Layers,
    title: "Operational Deployment",
    headline: "Introduce the system into the actual operating environment.",
    description: "We manage cutover carefully to protect ongoing trading. Data is migrated, staff are trained on real operational workflows, and rollback safeguards are maintained until the system operates smoothly under production workloads."
  },
  {
    num: "06",
    phase: "IMPROVE",
    icon: RefreshCw,
    title: "Continuous Support & Evolution",
    headline: "Monitor, support, and refine the system as your business expands.",
    description: "Technology implementation is not a one-off event. We provide ongoing monitoring, error recovery logging, performance tuning, and direct engineering support as your transaction volume and operational scope grow."
  }
];

// =================================================================
// 4. WHAT WE ACTUALLY SOLVE (Directive Section 14)
// =================================================================
export const problemsWeSolve = [
  {
    icon: Network,
    title: "Disconnected systems",
    explanation: "Core platforms operate in silos without automated communication. Sales occurs in one system, fulfillment in another, and accounting in a third. Information remains isolated inside individual software packages.",
    symptoms: "Staff manually re-key transactions between systems, reconcile orders across multiple tabs, and make decisions using conflicting numbers.",
    solution: "We build secure middleware, event webhooks, and REST connectors that move data continuously between systems without human intervention."
  },
  {
    icon: FileText,
    title: "Manual and duplicate data entry",
    explanation: "Employees spend valuable working hours transcribing data from printed documents, emails, or PDFs into operational software. Human transcription inevitably causes typographical errors and invoice discrepancies.",
    symptoms: "Back-office desks buried under paper stacks, clerical staff spending half their day copying lines between terminals, and high error rates during peak trading.",
    solution: "We engineer automated ingestion pipelines, OCR document parsers, and validated forms that capture and record information once at the source."
  },
  {
    icon: Boxes,
    title: "Inventory and sales mismatches",
    explanation: "Stock levels decrement at physical store checkouts or wholesale depots, but the central warehouse, sales reps, and digital catalogs do not update in real time. Discrepancies create stockouts and over-selling.",
    symptoms: "Cashiers sell items that are physically out of stock, warehouse staff pick orders that were already cancelled, and monthly stock-takes reveal large phantom inventory gaps.",
    solution: "We connect point of sale tills, warehouse dispatch counters, and e-commerce carts to a single synchronized inventory ledger with local offline queues."
  },
  {
    icon: BarChart3,
    title: "Delayed management reporting",
    explanation: "Business leadership relies on backward-looking financial and operational reports compiled days or weeks after the close of the trading period. Opportunities to cut costs or capture margin are lost.",
    symptoms: "Executive meetings spend the first hour debating whose numbers are correct because sales, operations, and finance export different figures from different tools.",
    solution: "We construct automated ETL pipelines and consolidated management dashboards that update continuously, giving leadership real-time visibility."
  },
  {
    icon: Sliders,
    title: "Spreadsheet dependency",
    explanation: "Critical business workflows, pricing models, commission calculations, and reconciliations live entirely inside uncontrolled spreadsheets on local laptops. A corrupted formula or lost file risks business disruption.",
    symptoms: "Different versions of Master_Inventory_Final_v3.xlsx floating across staff inboxes, broken VLOOKUP formulas causing financial errors, and zero audit trails on changes.",
    solution: "We migrate fragile spreadsheet calculations into secure relational databases, role-based web applications, and automated background calculation engines."
  },
  {
    icon: CreditCard,
    title: "Payment reconciliation friction",
    explanation: "Customers pay across a fragmented mix of mobile money, bank clearing transfers, physical card swipes, and cash. Matching these payments against outstanding sales invoices requires tedious daily manual effort.",
    symptoms: "Accounting clerks spend whole afternoons cross-referencing EcoCash SMS codes against till slips and bank statements before dispatching customer orders.",
    solution: "We integrate payment webhooks and automated settlement matching scripts that clear open orders and post directly to accounting ledgers upon verified receipt."
  },
  {
    icon: Settings,
    title: "Inflexible off-the-shelf software",
    explanation: "Standard commercial software forces a company to abandon its proven competitive advantages to conform to rigid, overseas software conventions. Workarounds emerge to fill the functional mismatch.",
    symptoms: "Staff running side-systems and shadow spreadsheets because the main enterprise package cannot accommodate local multi-currency rules or unique sales workflows.",
    solution: "We build custom software modules, client portals, and tailored extensions that integrate cleanly with existing databases while supporting exact operating rules."
  },
  {
    icon: RefreshCw,
    title: "Unused or misaligned technology",
    explanation: "Enterprises pay ongoing software licenses for complex platforms that staff find confusing or difficult to navigate. The software remains underutilized while operational problems persist.",
    symptoms: "Expensive ERP or CRM software deployed months ago, yet staff continue logging daily activity in paper notebooks or private desktop files.",
    solution: "We simplify interfaces, streamline software configurations around real staff workflows, and provide hands-on, practical enablement on the ground in Harare."
  }
];

// =================================================================
// 5. BUILD VS INTEGRATE VS IMPROVE (Directive Section 15)
// =================================================================
export const buildIntegrateImprove = [
  {
    pillar: "BUILD",
    tagline: "When existing software cannot provide what you need.",
    description: "When commercial off-the-shelf software does not fit your operational model, we engineer tailored business applications, client portals, internal operating tools, and backend databases.",
    examples: [
      "Custom internal operations portals",
      "Client self-service account management portals",
      "Field technician mobile applications",
      "Custom relational database architectures and REST APIs"
    ]
  },
  {
    pillar: "INTEGRATE",
    tagline: "When the right software exists, but systems cannot talk.",
    description: "When your business already uses capable software (such as Odoo, Sage, POS, or payment gateways), we engineer secure API pipelines and automated connectors so data flows automatically.",
    examples: [
      "Point of Sale to accounting general ledger posting",
      "E-commerce websites to ERP warehouse inventory",
      "Payment gateways (EcoCash, Paynow) to sales reconciliation",
      "CRM customer data to operational billing systems"
    ]
  },
  {
    pillar: "IMPROVE",
    tagline: "When the system works, but the workflow around it does not.",
    description: "When core software is functioning but manual bottlenecks, paperwork, or slow handoffs surround it, we streamline the process with automation, practical AI, and operational redesign.",
    examples: [
      "Automated document and supplier invoice PDF parsing",
      "Automated multi-tier managerial purchase order approvals",
      "Exception notification alerts via WhatsApp and SMS",
      "Consolidated multi-branch operational reporting dashboards"
    ]
  }
];

// =================================================================
// 6. REAL GROUNDED CASE STUDIES (Directive Section 22)
// =================================================================
export const caseStudiesData = [
  {
    id: "pos-odoo-integration",
    slug: "pos-odoo-integration",
    title: "Retail POS and Enterprise ERP Data Synchronization",
    badge: "Client Implementation",
    image: posOdooSyncImg,
    category: "Systems Integration",
    problem: "A multi-branch retailer processed hundreds of retail transactions across independent point of sale terminals daily. End-of-day sales data had to be manually re-entered into central accounting ledgers, causing frequent transcription discrepancies and delayed inventory visibility.",
    context: "Operating multiple physical stores across Harare with unstable network connectivity. The retailer needed a solution that would not interrupt retail checkout speed during network drops.",
    approach: "We designed an asynchronous local-first queuing connector that buffers transactions locally at each store and transmits them to central Odoo ledgers via authenticated REST API endpoints whenever connectivity is established.",
    systemsInvolved: ["Retail POS Terminals", "Odoo ERP", "Local SQLite Buffers", "Central PostgreSQL"],
    technology: "Python, FastAPI, SQLite Local Queue, Odoo XML-RPC / JSON-RPC APIs",
    implementation: "Engineered idempotent webhook listeners, automated transaction retry logic with dead-letter exception queues, and a lightweight reconciliation dashboard for finance controllers.",
    outcome: "Eliminated daily manual ledger re-entry across branches. Stock balances now update automatically, and finance controllers receive automated daily balancing summaries at the close of trading."
  },
  {
    id: "b2b-interoperability-layer",
    slug: "b2b-interoperability-layer",
    title: "B2B Structured Transaction Exchange Architecture",
    badge: "Prototype",
    image: logisticsManifestImg,
    category: "Interoperability",
    problem: "Commercial trading partners frequently run incompatible business platforms. One company uses Sage Pastel, another Odoo, and another QuickBooks. When purchasing bulk stock, purchase orders and invoices are emailed as unstructured PDFs and manually typed back into receiving systems.",
    context: "Developing an independent interoperability middleware layer designed specifically for Southern African B2B commerce. Distinct from and fully compatible with regulatory compliance mechanisms.",
    approach: "Architected a canonical JSON data schema mapping disparate invoice, purchase order, and dispatch formats into a standardized interoperability schema with mutual cryptographic signature verification.",
    systemsInvolved: ["Sage Pastel", "Odoo Community", "QuickBooks Online", "Corebridge Interoperability Gateway"],
    technology: "Python, Pydantic Schema Normalization, Ed25519 Cryptographic Signatures, Redis Event Bus",
    implementation: "Built schema mapping engines translating accounting data structures bidirectionally between Sage, Odoo, and standard electronic business interchange formats.",
    outcome: "Successfully demonstrated automated cross-platform order-to-invoice data exchange between different ERP platforms without either party replacing their existing accounting package."
  },
  {
    id: "field-service-workflow-engine",
    slug: "field-service-workflow-engine",
    title: "Field Operations Technician Workflow and Invoicing Engine",
    badge: "Internal Build",
    image: fieldServiceImg,
    category: "Custom Software",
    problem: "Field service technicians completing installation and repair jobs logged equipment service records and client signoffs on paper sheets. Job cards took up to a week to return to the head office, delaying client invoicing and warranty tracking.",
    context: "Technicians frequently operate in basements, rural sites, and client facilities with intermittent or absent cellular network coverage.",
    approach: "Built an offline-first mobile web application allowing technicians to complete structured job sheets, record serial numbers, capture photos, and collect client digital signoffs offline.",
    systemsInvolved: ["Mobile Web Client", "FastAPI Backend", "Customer Portal", "Accounting Invoicing Engine"],
    technology: "React, Progressive Web App (PWA) IndexedDB Storage, FastAPI, PostgreSQL",
    implementation: "Engineered background IndexedDB synchronization that automatically pushes completed job packets to the central server when the technician enters cellular coverage.",
    outcome: "Field job data now reaches operations teams the moment connectivity resumes. Invoices generate within hours rather than days, and client equipment service histories are instantly searchable."
  },
  {
    id: "practical-document-ocr-pipeline",
    slug: "practical-document-ocr-pipeline",
    title: "Practical Supplier Invoice Document Parsing Pipeline",
    badge: "Research",
    image: documentAiImg,
    category: "AI Integration",
    problem: "Finance departments receive hundreds of supplier invoices monthly in diverse unstructured PDF layouts, scanned formats, and smartphone photos, forcing accounts payable clerks into endless manual data entry.",
    context: "Investigating how open-source and lightweight machine learning models can extract structured line items, VAT numbers, dates, and currency totals from imperfect scanned documents with high reliability.",
    approach: "Evaluated a multi-stage extraction pipeline combining optical character recognition (OCR), spatial coordinate mapping, and language model validation with mandatory confidence scoring thresholds.",
    systemsInvolved: ["Document Intake Queue", "OCR Extraction Engine", "Confidence Scoring Switch", "Accounting Draft Interface"],
    technology: "Tesseract OCR, PyMuPDF, Python Layout Analysis, Structured Pydantic Output Validation",
    implementation: "Constructed an automated processing pipeline where invoices scoring above 95% confidence generate draft accounting bills automatically, while uncertain fields highlight for human operator review.",
    outcome: "Demonstrated reliable extraction of vendor details, invoice numbers, line-item totals, and tax figures across varied layout styles without requiring expensive external cloud AI subscriptions."
  }
];

// =================================================================
// 7. COREBRIDGE SYSTEMS MAP NODES (Directive Section 13)
// =================================================================
export const systemsMapNodes = [
  {
    id: "pos",
    name: "POS",
    label: "Point of Sale",
    icon: Store,
    connectionText: "Move retail transactions directly into accounting journals and trigger automated inventory decrementing across branches without manual end-of-day re-entry."
  },
  {
    id: "erp",
    name: "ERP",
    label: "Enterprise Resource Planning",
    icon: Layers,
    connectionText: "Synchronise operational records between the ERP and other systems without forcing the organisation to replace software that already works."
  },
  {
    id: "crm",
    name: "CRM",
    label: "Customer Relationship",
    icon: Users,
    connectionText: "Ensure sales teams, customer service reps, and accounts staff share consistent, verified client order histories and outstanding invoice balances."
  },
  {
    id: "payments",
    name: "PAYMENTS",
    label: "Payment Ecosystems",
    icon: CreditCard,
    connectionText: "Connect payment events with orders, customer records and accounting workflows where the provider exposes the necessary APIs or approved interfaces."
  },
  {
    id: "accounting",
    name: "ACCOUNTING",
    label: "General Ledgers",
    icon: Landmark,
    connectionText: "Eliminate manual bookkeeping re-entry by feeding verified sales, supplier, and bank data into core general journals and VAT ledgers."
  },
  {
    id: "inventory",
    name: "INVENTORY",
    label: "Warehouse & Stock",
    icon: Boxes,
    connectionText: "Connect stock movements to sales, purchasing, warehouse and reporting workflows with automated reorder thresholds."
  },
  {
    id: "logistics",
    name: "LOGISTICS",
    label: "Dispatch & Freight",
    icon: Truck,
    connectionText: "Connect warehouse pick lists, delivery driver manifests, and proof-of-delivery receipts directly into customer invoicing flows."
  },
  {
    id: "ecommerce",
    name: "E-COMMERCE",
    label: "Digital Storefronts",
    icon: Building2,
    connectionText: "Reflect actual physical warehouse inventory online in real time and pipe web customer orders directly into fulfillment and dispatch queues."
  },
  {
    id: "custom",
    name: "CUSTOM SOFTWARE",
    label: "Line of Business Apps",
    icon: Code2,
    connectionText: "Build tailored operational portals, field applications, and specialized tools that connect to existing databases where off-the-shelf software falls short."
  },
  {
    id: "data",
    name: "DATA",
    label: "Reporting & Analytics",
    icon: BarChart3,
    connectionText: "Consolidate operational numbers from disparate databases into clean, automated management reporting without spreadsheet assembly."
  },
  {
    id: "ai",
    name: "AI",
    label: "Pragmatic Workflows",
    icon: Cpu,
    connectionText: "Apply focused machine learning models for automated supplier invoice parsing, document data extraction, and inquiry triage."
  }
];

// =================================================================
// 8. INTEROPERABILITY FLOW (Directive Section 20)
// =================================================================
export const interoperabilitySteps = [
  { step: "01", node: "Customer Order", desc: "Order placed in-store, via field sales rep, or through digital portal." },
  { step: "02", node: "POS / Web Ingestion", desc: "Transaction validates customer credit limit, pricing tier, and stock availability." },
  { step: "03", node: "Inventory Allocation", desc: "Warehouse stock decrements; picking and dispatch manifests generate." },
  { step: "04", node: "Payment Capture", desc: "EcoCash, swipe card, or bank transfer settles and assigns receipt code." },
  { step: "05", node: "Accounting Ledger", desc: "Sales journal, VAT, cost of goods, and receivables post without manual typing." },
  { step: "06", node: "Operational Report", desc: "Daily flash summaries and gross margin updates reflect in executive dashboard." }
];

// =================================================================
// 9. LOCAL BUSINESS REALITIES (Directive Section 21)
// =================================================================
export const localRealities = [
  {
    title: "Multi-Currency & Local Accounting",
    desc: "Business in Zimbabwe operates across multi-currency environments, evolving tax regulations, and specific ledger structures. We configure systems that handle real-world currency conversions and localized accounting practices."
  },
  {
    title: "Payment Ecosystems (EcoCash, Paynow, ZIPIT)",
    desc: "A business cannot rely solely on international payment gateways. We build integrations that connect to local mobile money rails, swipe card processors, and domestic bank clearing systems where approved interfaces are available."
  },
  {
    title: "Connectivity & Bandwidth Resilience",
    desc: "Internet outages and network volatility happen. We engineer offline-first architectures, local buffer queues, and idempotent synchronization so operations continue trading during connection drops."
  },
  {
    title: "Preserving Working Legacy Software",
    desc: "Replacing software that staff already understand is expensive and disruptive. Where existing tools hold valuable records, we bridge them through APIs, database pipelines, or export hooks rather than forcing complete overhauls."
  },
  {
    title: "Staff Adoption & Operational Usability",
    desc: "The most sophisticated software is useless if shop-floor staff or field operators cannot use it easily. We design clean, straightforward interfaces and support implementations with practical, hands-on staff enablement."
  },
  {
    title: "Dedicated On-the-Ground Support",
    desc: "When operational systems encounter an issue, speaking to distant ticket queues in different time zones creates costly delays. Corebridge provides direct engineering contact and on-the-ground technical support in Harare."
  }
];

// =================================================================
// 10. GLOBAL SYSTEMS, LOCAL REALITIES (Directive Section 19)
// =================================================================
export const globalLocalPerspective = {
  headline: "Global systems. Local realities.",
  lead: "Business infrastructure evolves differently in every market. Corebridge looks at proven systems, architectural patterns, and integration standards developed globally, then considers how they can work reliably within Zimbabwean operating realities.",
  paragraphs: [
    "Mature international markets have developed extensive frameworks for digital procurement, standardized electronic document interchange, open banking APIs, and continuous workflow automation. These concepts demonstrate what is possible when business platforms communicate seamlessly.",
    "However, applying international software without understanding local payment ecosystems, infrastructure constraints, regulatory requirements, and business habits frequently leads to failed implementations.",
    "Our strategic role is bridging that divide: taking proven software engineering principles and adapting them into resilient, practical systems that solve real operational friction for businesses in Zimbabwe and Southern Africa."
  ]
};
