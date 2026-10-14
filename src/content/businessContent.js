import { industriesData, solutionsHeroImg, operationalRealityImg, buildIntegrateImproveImg, editorialStatementImg, contactHeroImg, aboutHeroImg, approachHeroImg, caseStudiesData } from '../data/initialData';
import mining from '../assets/images/industries/mining.jpg';
import energy from '../assets/images/industries/energy-utilities.jpg';
import realEstate from '../assets/images/industries/real-estate.jpg';
import pharma from '../assets/images/industries/pharmaceuticals.jpg';
import fmcg from '../assets/images/industries/fmcg.jpg';
export const contact = {
  phone: '+263 780 787 214',
  tel: '+263780787214',
  email: 'info@corebridge.co.zw',
  whatsapp: 'https://wa.me/263780787214'
};
export const businessDescription = 'Corebridge helps businesses solve operational problems through ERP implementation, connected systems, practical AI and workflow automation.';
export const services = [{
  slug: 'erp-crm',
  title: 'ERP & CRM implementation',
  short: 'Bring your core business processes together.',
  text: 'We help you choose, configure and use systems such as Odoo and Zoho around your business. From setup and data migration to training and support, the work starts with what your team needs to do.',
  image: solutionsHeroImg,
  items: ['Finance and accounting', 'Stock and purchasing', 'Sales and customer relationships', 'Projects and day-to-day operations'],
  button: 'Discuss your ERP needs',
  icon: 'layers'
}, {
  slug: 'systems-integration',
  title: 'Systems integration',
  short: 'Connect the tools your business already depends on.',
  text: 'Bring ERP, POS, accounting, payments and other tools into a connected workflow. We assess the available interfaces, agree how information should move and build the connections your business needs.',
  image: operationalRealityImg,
  items: ['Connect existing platforms', 'Reduce duplicate entry', 'Keep records consistent', 'Handle exceptions clearly'],
  button: 'Discuss your systems',
  icon: 'network'
}, {
  slug: 'business-automation',
  title: 'Workflow automation',
  short: 'Give your team more time for the work that matters.',
  text: 'Simplify repeat tasks such as document handoffs, approvals, reminders and reporting. We map the process first, then automate the steps that make sense, with people involved where judgement is needed.',
  image: buildIntegrateImproveImg,
  items: ['Approvals and reminders', 'Order and job handoffs', 'Document processing', 'Routine reports'],
  button: 'Discuss a workflow',
  icon: 'workflow'
}, {
  slug: 'ai-integration',
  title: 'Practical AI',
  short: 'Use AI to address a clear business need.',
  text: 'Make business information easier to find, organise and use. We explore document extraction, knowledge assistants and operational support, with review steps and validation appropriate to your work.',
  image: caseStudiesData[3].image,
  items: ['Document information extraction', 'Business knowledge access', 'Assisted analysis', 'Human review and validation'],
  button: 'Explore AI for your business',
  icon: 'cpu'
}, {
  slug: 'custom-software',
  title: 'Custom business software',
  short: 'Build what your existing tools cannot do.',
  text: 'When a suitable off-the-shelf solution does not fit, we design applications, portals and internal tools around your actual requirements. The aim is useful software that works alongside your business systems.',
  image: editorialStatementImg,
  items: ['Internal business tools', 'Customer and supplier portals', 'Mobile-friendly workflows', 'Integration-ready applications'],
  button: 'Discuss a custom solution',
  icon: 'code'
}, {
  slug: 'it-consulting',
  title: 'Consulting & support',
  short: 'Make a clear plan for your next improvement.',
  text: 'Get help understanding a system problem, choosing software or improving an existing setup. We agree the scope, responsibilities and support arrangements before starting.',
  image: aboutHeroImg,
  items: ['System and workflow reviews', 'Software selection', 'Troubleshooting', 'Training and ongoing support'],
  button: 'Talk through your challenge',
  icon: 'settings'
}];
export const process = [{
  title: 'Understand',
  text: 'We listen to your goals, challenges and the way your business works.',
  deliverable: 'A clear statement of the problem and the people affected.',
  image: approachHeroImg
}, {
  title: 'Map the workflow',
  text: 'We look at the steps, information and systems involved in the work.',
  deliverable: 'An agreed picture of the current process and its gaps.',
  image: operationalRealityImg
}, {
  title: 'Agree the solution',
  text: 'Together, we choose a practical approach with a clear scope and priorities.',
  deliverable: 'Requirements, responsibilities and acceptance criteria.',
  image: solutionsHeroImg
}, {
  title: 'Implement & connect',
  text: 'We configure, build and integrate the systems needed for the agreed change.',
  deliverable: 'A working solution reviewed against your requirements.',
  image: editorialStatementImg
}, {
  title: 'Train & launch',
  text: 'We test with your team and help them use the new workflow.',
  deliverable: 'User testing, training and an agreed launch plan.',
  image: aboutHeroImg
}, {
  title: 'Support & improve',
  text: 'We review what is working and agree any further improvements or support.',
  deliverable: 'A clear handover and suitable support arrangements.',
  image: contactHeroImg
}];
export const principles = [{
  title: 'Understand first',
  text: 'Start with the business problem and the people doing the work.'
}, {
  title: 'Preserve what works',
  text: 'Build on useful existing tools before considering replacement.'
}, {
  title: 'Keep the scope clear',
  text: 'Agree the work, priorities and expected result before implementation.'
}, {
  title: 'Design for real conditions',
  text: 'Consider connectivity, currencies, staff workflows and local requirements.'
}];
const exampleDefinitions = [{
  title: 'Sales, stock and finance working together',
  category: 'ERP & integration',
  problem: 'Sales are recorded in one system, stock in another, and finance has to re-enter the same information.',
  approach: 'Connect POS, ERP and accounting around an agreed transaction workflow, with checks for duplicates and exceptions.',
  systems: ['Point of sale', 'ERP & inventory', 'Invoicing', 'Accounting'],
  steps: ['Record the sale', 'Update stock', 'Prepare the invoice', 'Reconcile the accounting record'],
  validation: ['Confirm the systems and available interfaces', 'Check stock, tax and currency rules', 'Test duplicates, failures and reconciliation', 'Agree who reviews exceptions']
}, {
  title: 'Delivery records and business transactions connected',
  category: 'Business integration',
  problem: 'Purchase orders, invoices and delivery records are shared as documents and typed into different systems.',
  approach: 'Agree a common set of information and connect the sender and receiving systems where their interfaces permit. Route incomplete or uncertain records for review.',
  systems: ['Orders', 'Delivery records', 'ERP', 'Accounting'],
  steps: ['Capture the record', 'Validate the information', 'Match related documents', 'Prepare the receiving entry'],
  validation: ['Agree required fields with both businesses', 'Check interfaces and access permissions', 'Test document matching and duplicates', 'Confirm review and audit requirements']
}, {
  title: 'Quotations and job tracking in one workflow',
  category: 'ERP & automation',
  problem: 'Quotes, job cards and customer updates sit in separate spreadsheets and paper records.',
  approach: 'Use a suitable ERP or business application to connect quotations, scheduled work, job records and invoicing. Keep the process practical for the staff using it.',
  systems: ['CRM & quotations', 'Jobs & scheduling', 'Service records', 'Invoicing'],
  steps: ['Prepare the quotation', 'Schedule the agreed work', 'Record job progress', 'Review the invoice'],
  validation: ['Map approvals and staff responsibilities', 'Check field connectivity requirements', 'Agree job and equipment information', 'Test the complete quote-to-invoice process']
}, {
  title: 'Invoice documents organised for review',
  category: 'AI & automation',
  problem: 'Supplier documents arrive in different layouts and require repeated reading and data entry.',
  approach: 'Use document processing and practical AI to suggest structured information, validate it and prepare drafts for human review before posting to the business system.',
  systems: ['Document intake', 'AI extraction', 'Human review', 'Accounting drafts'],
  steps: ['Receive the document', 'Extract useful information', 'Review uncertain details', 'Prepare an accounting draft'],
  validation: ['Test a representative set of documents', 'Measure accuracy field by field', 'Confirm privacy and retention needs', 'Keep a review step before posting']
}];
export const examples = caseStudiesData.map((item, index) => ({
  slug: item.slug,
  image: item.image,
  ...exampleDefinitions[index]
}));
export const knowledgeExample = {
  slug: 'business-knowledge-assistant',
  title: 'Business information easier to find',
  category: 'Practical AI',
  image: editorialStatementImg,
  problem: 'Useful business knowledge is spread across files, documents and systems, making answers difficult to find.',
  approach: 'Explore an assistant that searches approved information, points to its sources and supports staff without replacing their judgement.',
  systems: ['Approved documents', 'Search', 'Knowledge assistant', 'Staff review'],
  steps: ['Define the information sources', 'Organise access', 'Search relevant material', 'Review the suggested answer'],
  validation: ['Agree access controls and approved sources', 'Test answer accuracy and source references', 'Check handling of unsupported questions', 'Define how content is kept current']
};
export const allExamples = [...examples, knowledgeExample];
const added = [['mining', 'Mining & resources', mining, 'Asset records, procurement, stock and maintenance planning.'], ['energy-utilities', 'Energy & utilities', energy, 'Field work, asset management, customer records and billing.'], ['real-estate', 'Real estate & property', realEstate, 'Property records, maintenance jobs, enquiries and accounting.'], ['pharmaceuticals', 'Pharmaceuticals', pharma, 'Batch stock, purchasing, distribution and document records.'], ['fmcg', 'Consumer goods', fmcg, 'Sales, distribution, stock and purchasing across your operation.']].map(([slug, name, image, shortDesc]) => ({
  slug,
  name,
  image,
  shortDesc,
  overview: `Connect the information and work behind ${name.toLowerCase()}. We help you assess ERP, integrations, automation and practical AI against your business needs.`,
  operationalChallenges: ['Information kept in separate systems', 'Repeated manual entry and document handoffs', 'Delayed visibility into day-to-day operations'],
  commonSystems: ['ERP and stock management', 'Customer and order records', 'Accounting and reporting'],
  integrationOpportunities: ['Connect order, stock and accounting records', 'Link existing business tools where interfaces permit'],
  automationOpportunities: ['Simplify routine approvals and document handoffs'],
  aiOpportunities: ['Assist with document information extraction and review'],
  exampleWorkflow: [{
    title: 'Capture the work',
    desc: 'Record the agreed business information.'
  }, {
    title: 'Review the record',
    desc: 'Check required details and exceptions.'
  }, {
    title: 'Update related systems',
    desc: 'Share validated information with the connected tools.'
  }, {
    title: 'Report and reconcile',
    desc: 'Review the record against the business process.'
  }]
}));
export const industries = [...industriesData, ...added];
export const featuredIndustrySlugs = ['logistics-transport', 'retail-fmcg', 'construction-real-estate'];
