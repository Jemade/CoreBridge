import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { Layers, Network, Workflow, Cpu, Code2, Settings, Menu, X, Search, Phone, Mail, MapPin, FileText, Package, ShoppingCart, BarChart3, Check } from 'lucide-react';
import BrandWordmark from '../components/common/BrandWordmark';
import WhatsAppIcon from '../components/common/WhatsAppIcon';
import SEO from '../components/common/SEO';
import { heroLeadImg, solutionsHeroImg, industriesHeroImg, aboutHeroImg, approachHeroImg, contactHeroImg, caseStudiesHeroImg, editorialStatementImg, operationalRealityImg, buildIntegrateImproveImg, finalCtaImg } from '../data/initialData';
import { services, process, principles, industries, featuredIndustrySlugs, examples, allExamples, contact, businessDescription } from '../content/businessContent';
const icons = {
  layers: Layers,
  network: Network,
  workflow: Workflow,
  cpu: Cpu,
  code: Code2,
  settings: Settings
};
const navItems = [['/solutions', 'Solutions'], ['/industries', 'Industries'], ['/approach', 'Approach'], ['/about', 'About'], ['/contact', 'Contact']];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 820) setOpen(false);
    };
    window.addEventListener('resize', closeOnDesktop);
    return () => window.removeEventListener('resize', closeOnDesktop);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector('a')?.focus();
    function onKey(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === 'Tab') {
        const controls = [toggleRef.current, ...menuRef.current.querySelectorAll('a')].filter(Boolean);
        const index = controls.indexOf(document.activeElement);
        if (event.shiftKey && index === 0) {
          event.preventDefault();
          controls.at(-1).focus();
        }
        if (!event.shiftKey && index === controls.length - 1) {
          event.preventDefault();
          controls[0].focus();
        }
      }
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  return <header className="site-header"><div className="container header-inner">
    <BrandWordmark variant="dark" linkTo="/" size="1.55rem" />
    <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}</nav>
    <Link className="button button-primary header-contact" to="/contact">Let’s talk</Link>
    <button className="menu-toggle" type="button" ref={toggleRef} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div>{open && <nav id="mobile-navigation" ref={menuRef} className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}<Link to="/case-studies">Workflow examples</Link><Link to="/contact" className="button button-primary">Discuss your business</Link></nav>}</header>;
}
export function SiteFooter() {
  return <footer className="site-footer"><div className="container"><div className="footer-grid">
    <div className="footer-brand"><BrandWordmark variant="light" size="1.6rem" /><p>Here to solve business problems.</p><p>ERP, connected systems, practical AI and automation built around your work.</p></div>
    <div><h2>Company</h2><Link to="/about">About Corebridge</Link><Link to="/approach">Our approach</Link><Link to="/case-studies">Workflow examples</Link><Link to="/contact">Contact</Link></div>
    <div><h2>Solutions</h2>{services.map(s => <Link key={s.slug} to={`/solutions#${s.slug}`}>{s.title}</Link>)}</div>
    <div><h2>Contact</h2><p>Harare, Zimbabwe</p><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={`tel:${contact.tel}`}>{contact.phone}</a><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Corebridge. All rights reserved.</span><Link to="/privacy">Privacy</Link></div></div></footer>;
}
export function FloatingContact() {
  return <a className="floating-contact" href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Corebridge on WhatsApp"><WhatsAppIcon size={23} /><span>Let’s talk</span></a>;
}
export function ScrollManager() {
  const {
    pathname,
    hash
  } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        let id = hash.slice(1);
        try {
          id = decodeURIComponent(id);
        } catch {/* Treat malformed hashes as plain text. */}
        document.getElementById(id)?.scrollIntoView();
      } else window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
function Button({
  children = 'Discuss your business',
  to = '/contact',
  secondary = false,
  ...rest
}) {
  return <Link to={to} className={`button ${secondary ? 'button-secondary' : 'button-primary'}`} {...rest}>{children}</Link>;
}
function Photo({
  src,
  alt,
  className = '',
  eager = false,
  caption
}) {
  return <figure className={`photo ${className}`}><img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" width="800" height="540" />{caption && <figcaption>{caption}</figcaption>}</figure>;
}
function Heading({
  eyebrow,
  title,
  text,
  centered = false
}) {
  return <div className={`section-heading ${centered ? 'centered' : ''}`}>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
function Hero({
  eyebrow,
  title,
  text,
  image,
  alt,
  light = false,
  children,
  breadcrumb
}) {
  return <section className={`page-hero ${light ? 'hero-light' : ''}`}><div className="container hero-split"><div>{breadcrumb && <div className="breadcrumb">{breadcrumb}</div>}<span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p className="hero-description">{text}</p>{children || <Button>Let’s talk</Button>}</div><Photo src={image} alt={alt} eager /></div></section>;
}
function CTA({
  title = 'Have a business problem to solve?',
  text = 'Tell us what is slowing you down. We can explore ERP, connected systems, AI and automation around your needs.',
  image = false
}) {
  return <section className={`contact-band ${image ? 'contact-band-photo' : ''}`} style={image ? {
    backgroundImage: `linear-gradient(90deg, rgba(10,25,41,.95), rgba(10,25,41,.85)), url(${finalCtaImg})`
  } : undefined}><div className="container cta-inner"><h2>{title}</h2><div><p>{text}</p><div className="actions"><Button /> <a className="text-link light-link" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">Or talk on WhatsApp</a></div></div></div></section>;
}
function IconTile({
  name
}) {
  const Icon = icons[name] || Layers;
  return <span className="icon-tile"><Icon size={26} strokeWidth={1.6} aria-hidden="true" /></span>;
}
function IndustryCard({
  item,
  featured = false
}) {
  return <article className={`industry-card ${featured ? 'featured' : ''}`}><Link to={`/industries/${item.slug}`} className="image-link" tabIndex={-1} aria-hidden="true"><Photo src={item.image} alt={`${item.name} operations`} /></Link><h3>{item.name}</h3><p>{item.shortDesc}</p><Link className="text-link" to={`/industries/${item.slug}`}>View industry<span className="sr-only">: {item.name}</span></Link></article>;
}
function ExampleCard({
  item,
  featured = false
}) {
  return <article className={`example-card ${featured ? 'featured' : ''}`}><Photo src={item.image} alt={`Illustrative scene for ${item.title.toLowerCase()}`} /><div className="example-card-content"><span className="eyebrow">{item.category}</span><h3>{item.title}</h3><h4>Business problem</h4><p>{item.problem}</p><h4>Possible approach</h4><p>{item.approach}</p><Link className="button button-soft" to={`/case-studies/${item.slug}`}>Read example<span className="sr-only">: {item.title}</span></Link></div></article>;
}
function Areas({
  dark = false
}) {
  return <div className={`business-areas ${dark ? 'dark-areas' : ''}`}>{[[BarChart3, 'Finance', 'Accounting, reporting and financial control'], [Package, 'Stock', 'Inventory, purchasing and warehouse records'], [ShoppingCart, 'Sales', 'Customers, quotations and orders'], [Settings, 'Operations', 'Projects, production and day-to-day work']].map(([Icon, title, text]) => <div key={title}><Icon size={27} strokeWidth={1.6} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></div>)}</div>;
}
function Steps({
  list,
  detailed = false
}) {
  return <ol className={detailed ? 'process-list' : 'numbered-steps'}>{list.map((step, index) => <li key={step.title}><span className="step-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{step.title}</h3><p>{step.text || step.desc}</p>{step.deliverable && detailed && <p className="deliverable"><strong>What we agree:</strong> {step.deliverable}</p>}</div>{detailed && step.image && <Photo src={step.image} alt={`Illustrative business scene for ${step.title.toLowerCase()}`} />}</li>)}</ol>;
}
export function Home() {
  const featuredIndustries = featuredIndustrySlugs.map(slug => industries.find(i => i.slug === slug));
  return <><SEO title="Corebridge | Smarter Systems. Stronger Businesses." description={businessDescription} />
    <section className="home-hero" style={{
      backgroundImage: `linear-gradient(90deg, rgba(10,25,41,.93) 0%, rgba(10,25,41,.72) 48%, rgba(10,25,41,.1) 100%), url(${heroLeadImg})`
    }}><div className="container"><div className="home-hero-copy"><span className="eyebrow">Here to solve business problems</span><h1>Smarter Systems.<br />Stronger Businesses.</h1><p>We bring ERP, business systems, AI and automation together to make your operations work better.</p><div className="actions"><Button to="/solutions">Explore solutions</Button><Button secondary>Discuss your business</Button></div></div></div></section>
    <section className="section surface"><div className="container split-grid problem-section"><Heading eyebrow="THE BUSINESS PROBLEM" title="Businesses rarely run on one system." text="Sales, stock, finance and operations can end up working in separate tools. We help close the gaps, reduce repeated work and connect the information your team needs." /><div className="transaction-panel"><p className="panel-caption">One transaction. Connected information.</p><div className="transaction-items">{[[FileText, 'Order'], [ShoppingCart, 'Sales'], [Package, 'Stock'], [BarChart3, 'Accounting']].map(([Icon, label], i) => <div key={label}><span className="small-number">0{i + 1}</span><Icon size={27} aria-hidden="true" /><strong>{label}</strong></div>)}</div><p>ERP and integrations give related records a clearer place in the same workflow.</p></div></div></section>
    <section className="section"><div className="container"><Heading title="Build. Connect. Improve." text="Choose the right change for the business problem." /><div className="pillars">{[{
            title: 'Build',
            text: 'Implement a suitable ERP or create the business tool you need.',
            image: solutionsHeroImg
          }, {
            title: 'Connect',
            text: 'Bring existing tools and information into a coordinated workflow.',
            image: operationalRealityImg
          }, {
            title: 'Improve',
            text: 'Use practical AI and automation to make everyday work easier.',
            image: buildIntegrateImproveImg
          }].map((item, i) => <article key={item.title}><span className="eyebrow">0{i + 1} / {item.title}</span><h3>{item.text}</h3><Photo src={item.image} alt={`Illustrative business scene: ${item.title.toLowerCase()}`} /></article>)}</div></div></section>
    <section className="section dark"><div className="container capabilities-layout"><Heading eyebrow="OUR SOLUTIONS" title="From the business problem to a working solution." text="Technology is useful when it helps the people, information and work behind your business." /><div className="capability-list">{services.slice(0, 4).map(s => <Link key={s.slug} to={`/solutions#${s.slug}`} className="capability-item"><IconTile name={s.icon} /><div><h3>{s.title}</h3><p>{s.short}</p><span className="plain-link">Explore {s.title.toLowerCase()}</span></div></Link>)}</div></div></section>
    <section className="section"><div className="container"><Heading eyebrow="INDUSTRIES" title="Technology shaped around your operations." text="Different businesses have different needs. We start with the work your team does." /><div className="featured-industries">{featuredIndustries.map((item, i) => <IndustryCard key={item.slug} item={item} featured={i === 0} />)}</div><Link to="/industries" className="text-link section-link">Explore all industries</Link></div></section>
    <section className="section surface"><div className="container"><Heading eyebrow="ILLUSTRATIVE WORKFLOW EXAMPLES" title="See how better connected work could look." text="Practical starting points to discuss and validate with your business." /><div className="home-examples">{[examples[0], examples[2], examples[3]].map((item, i) => <ExampleCard key={item.slug} item={item} featured={i === 0} />)}</div><Link to="/case-studies" className="text-link section-link">Explore workflow examples</Link></div></section>
    <section className="section"><div className="container split-grid"><Photo src={editorialStatementImg} alt="Illustrative business collaboration" /><div><span className="eyebrow">OUR PERSPECTIVE</span><h2>Technology should make the business work better.</h2><p className="spaced-copy">We start by understanding your work. Then we agree what needs to change and find a practical way forward, using ERP, integrations, AI, automation or custom software where it fits.</p><Link className="text-link" to="/about">About Corebridge</Link></div></div></section><CTA title="Have a technology gap to bridge?" /></>;
}
export function Solutions() {
  return <><SEO title="Business solutions | Corebridge" description={businessDescription} /><Hero eyebrow="OUR SOLUTIONS" title={<>Business problems.<br /><span>Practical solutions.</span></>} text="ERP, connected systems, AI and automation built around your work." image={solutionsHeroImg} alt="Illustrative business planning" />
  <section className="section"><div className="container"><div className="service-intro" id="erp-crm"><div><span className="eyebrow">A CONNECTED BUSINESS FOUNDATION</span><h2>ERP & CRM implementation</h2><p className="spaced-copy">{services[0].text}</p><Button>{services[0].button}</Button></div><Photo src={solutionsHeroImg} alt="Illustrative ERP planning and implementation" /></div><Areas /><p className="platform-note">Odoo and Zoho are examples of platforms we can assess with you. Platform choice, licensing and integration scope depend on your requirements.</p></div></section>
  <section className="section surface"><div className="container service-list">{services.slice(1).map((s, i) => <article key={s.slug} id={s.slug} className={`service-row ${i % 2 ? 'reverse' : ''}`}><Photo src={s.image} alt={`Illustrative scene for ${s.title.toLowerCase()}`} /><div><IconTile name={s.icon} /><h2>{s.title}</h2><p>{s.text}</p><ul className="check-list">{s.items.map(item => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul><Button secondary>{s.button}</Button></div></article>)}<div className="service-notes"><div id="payment-integration"><h3>Payment systems</h3><p>We assess how payment records can connect to orders and finance, including the provider interfaces available to your business.</p></div><div id="data-reporting"><h3>Data & reporting</h3><p>Make approved business information easier to access and review through suitable reporting and connected records.</p></div></div></div></section><CTA title="Keep what works. Improve what doesn’t." text="Tell us about your current tools and the business problem you need to solve." /></>;
}
export function Industries() {
  const [query, setQuery] = useState('');
  const filtered = industries.filter(i => `${i.name} ${i.shortDesc} ${i.overview}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <><SEO title="Industry solutions | Corebridge" description="ERP, integrations, AI and automation shaped around industry workflows in Zimbabwe." /><Hero eyebrow="INDUSTRIES" title={<>Every industry<br /><span>works differently.</span></>} text="The same goal: simpler systems, more efficient work and clearer information. We shape the solution around your operations." image={industriesHeroImg} alt="Illustrative industry operations"><label className="search-field"><span className="sr-only">Search industries by name or challenge</span><Search size={20} aria-hidden="true" /><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search industries or business needs" /></label></Hero>
  <section className="section"><div className="container"><div className="results-summary"><p role="status">{filtered.length} {filtered.length === 1 ? 'industry' : 'industries'}{query ? ` matching “${query}”` : ' to explore'}</p>{query && <button className="text-link" onClick={() => setQuery('')}>Clear search</button>}</div>{filtered.length ? <div className="industry-grid">{filtered.map(item => <IndustryCard key={item.slug} item={item} />)}</div> : <div className="empty-state"><h2>No industries match that search.</h2><p>Try a broader term, or tell us about your business directly.</p><Button /></div>}</div></section><CTA title="Connect the work across your business." text="Explore how ERP, integrations, AI and automation can fit your industry’s needs." /></>;
}
export function Approach() {
  return <><SEO title="Our approach | Corebridge" description="Understand the business problem, map the workflow, agree the solution, implement, train and support." /><Hero eyebrow="OUR APPROACH" title={<>We start with your<br /><span>business problem.</span></>} text="Understand the work before choosing the technology." image={approachHeroImg} alt="Illustrative business discovery discussion" /><section className="section"><div className="container"><Heading title="A practical, collaborative approach." text="Clear steps, agreed responsibilities and work tied to a useful business result." /><Steps list={process} detailed /></div></section><section className="section surface"><div className="container"><Heading title="Our principles" /><div className="principles-grid">{principles.map((item, i) => <article key={item.title}><IconTile name={['network', 'layers', 'settings', 'workflow'][i]} /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section><CTA title="Let’s discuss your challenge." /></>;
}
export function About() {
  return <><SEO title="About Corebridge" description={businessDescription} /><Hero eyebrow="ABOUT COREBRIDGE" title="Here to solve business problems." text="We help businesses implement ERP, connect their tools and use practical AI and automation to make work easier." image={aboutHeroImg} alt="Illustrative business collaboration" />
  <section className="section"><div className="container split-grid"><Photo src={operationalRealityImg} alt="Illustrative business operations" /><div><span className="eyebrow">OUR PERSPECTIVE</span><h2>Technology should help your business work better.</h2><p className="spaced-copy">Businesses often grow around a mix of software, spreadsheets and manual processes. Corebridge helps make sense of that setup and close the gaps that slow work down.</p><p>Our work in Zimbabwe considers the people using the systems, local operating conditions and the result the business needs. We adapt suitable technology rather than starting with a product to sell.</p></div></div></section>
  <section className="section surface"><div className="container"><Heading centered eyebrow="WHAT WE DO" title="Build. Connect. Improve." text="Implement useful systems, connect the information and simplify how work gets done." /><div className="principles-grid">{services.slice(0, 4).map(s => <article key={s.slug}><IconTile name={s.icon} /><h3>{s.title}</h3><p>{s.short}</p></article>)}</div></div></section>
  <section className="section"><div className="container"><Heading title="Practical technology. Clear business purpose." /><div className="values-list">{principles.map((p, i) => <article key={p.title}><span className="small-number">0{i + 1}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}</div></div></section>
  <section className="section surface"><div className="container split-grid"><div><span className="eyebrow">WORKING WITH COREBRIDGE</span><h2>A conversation before a recommendation.</h2><p className="spaced-copy">Tell us what is happening in your business. We will discuss your requirements, the options worth exploring and the scope of a practical next step.</p><Button to="/approach" secondary>Our approach</Button></div><Photo src={editorialStatementImg} alt="Illustrative collaboration; not a photograph of the Corebridge team" caption="Illustrative photography" /></div></section><CTA title="Let’s solve your business challenges together." /></>;
}
export function Workflows() {
  return <><SEO title="Workflow examples | Corebridge" description="Illustrative ERP, integration, automation and AI approaches to common business problems." /><Hero eyebrow="ILLUSTRATIVE WORKFLOW EXAMPLES" title="What better connected work could look like." text="Explore common business problems and possible approaches using ERP, integrations, automation and practical AI. These are examples to discuss and validate, not claims of client results." image={caseStudiesHeroImg} alt="Illustrative business workflow review" /><section className="section"><div className="container"><div className="workflow-feature"><ExampleCard item={examples[0]} featured /></div><div className="examples-grid">{allExamples.slice(1).map(item => <ExampleCard key={item.slug} item={item} />)}</div></div></section><CTA title="Have a similar challenge?" image /></>;
}
export function IndustryDetail() {
  const {
    slug
  } = useParams();
  const industry = industries.find(i => i.slug === slug);
  if (!industry) return <Missing title="That industry page could not be found." />;
  const rows = [{
    title: 'ERP & business management',
    text: 'Bring relevant stock, purchasing, sales and finance processes into a suitable ERP setup.',
    items: industry.commonSystems?.slice(0, 3),
    image: solutionsHeroImg
  }, {
    title: 'Connected business systems',
    text: 'Assess where your existing tools can exchange useful information and reduce repeated entry.',
    items: industry.integrationOpportunities?.slice(0, 3),
    image: industry.image
  }, {
    title: 'Automation & practical AI',
    text: 'Simplify routine handoffs and explore AI where it supports a clear need, with appropriate review.',
    items: [...(industry.automationOpportunities || []), ...(industry.aiOpportunities || [])].slice(0, 4),
    image: examples[3].image
  }];
  const steps = Array.isArray(industry.exampleWorkflow) ? industry.exampleWorkflow : [];
  return <><SEO title={`${industry.name} | Corebridge`} description={`ERP, connected systems, AI and automation for ${industry.name.toLowerCase()}.`} /><Hero eyebrow="INDUSTRY SOLUTIONS" title={industry.name} text={industry.overview} image={industry.image} alt={`${industry.name} operations`} light breadcrumb={<><Link to="/industries">All industries</Link><span> / {industry.name}</span></>}><Button>Discuss your operations</Button></Hero>
  <section className="section surface"><div className="container"><Heading eyebrow="BUSINESS CHALLENGES" title="Where work can become harder than it needs to be." text="These are common considerations. We confirm what matters in your business before recommending a solution." /><div className="challenge-grid">{industry.operationalChallenges?.map((item, i) => <article key={item}><span className="small-number">0{i + 1}</span><p>{item}</p></article>)}</div></div></section>
  <section className="section"><div className="container"><Heading eyebrow="HOW WE HELP" title="A more connected operation." /><div className="industry-solutions">{rows.map(row => <article key={row.title}><Photo src={row.image} alt={`Illustrative scene for ${row.title.toLowerCase()}`} /><div><h3>{row.title}</h3><p>{row.text}</p><ul className="plain-list">{row.items?.map(item => <li key={item}>{item}</li>)}</ul></div></article>)}</div></div></section>
  <section className="section surface"><div className="container"><Heading title="Keep the important information in view." /><Areas />{steps.length > 0 && <><Heading eyebrow="ILLUSTRATIVE WORKFLOW" title="How a connected process could work." text="The systems, checks and responsibilities would be agreed for your business." /><Steps list={steps} /></>}</div></section><CTA title="Start with one workflow." text="We can review the business problem, identify a suitable approach and agree a manageable scope." /></>;
}
export function WorkflowDetail() {
  const {
    slug
  } = useParams();
  const item = allExamples.find(i => i.slug === slug);
  if (!item) return <Missing title="That workflow example could not be found." />;
  return <><SEO title={`${item.title} | Corebridge`} description={item.problem} /><Hero eyebrow="ILLUSTRATIVE EXAMPLE" title={item.title} text="A possible approach to a business problem, to discuss and test against your requirements." image={item.image} alt={`Illustrative scene for ${item.title.toLowerCase()}`} light breadcrumb={<Link to="/case-studies">All workflow examples</Link>}><Button>Discuss a similar problem</Button></Hero>
  <section className="section"><div className="container detail-intro"><Heading eyebrow="THE BUSINESS PROBLEM" title="Repeated work across separate systems." text={item.problem} /><Photo src={operationalRealityImg} alt="Illustrative operational workflow" /></div></section>
  <section className="section surface"><div className="container"><Heading eyebrow="A POSSIBLE APPROACH" title="Connect the work and simplify the handoffs." text={item.approach} /><div className="systems-list">{item.systems.map((system, i) => <article key={system}><span className="small-number">0{i + 1}</span><FileText size={26} aria-hidden="true" /><h3>{system}</h3></article>)}</div></div></section>
  <section className="section"><div className="container"><Heading eyebrow="ILLUSTRATIVE WORKFLOW" title="How the process could work." /><Steps list={item.steps.map(title => ({
          title
        }))} /><p className="illustration-note">Proposed workflow, not a client case study. No outcome is assumed before testing.</p><div className="validation-section"><div><h2>Less manual work. A clearer process.</h2><p>ERP and integrations can coordinate records, while automation and AI can assist with repeat tasks. Review steps keep people involved in decisions and exceptions.</p></div><div><h3>What we would validate with you</h3><ul className="check-list">{item.validation.map(v => <li key={v}><Check size={16} aria-hidden="true" />{v}</li>)}</ul></div></div></div></section><CTA title="Discuss a similar business problem." image /></>;
}
export function EnquiryForm() {
  const [status, setStatus] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    if (fields.get('website')) return;
    const name = fields.get('name').trim();
    const email = fields.get('email').trim();
    const message = fields.get('message').trim();
    if (!name || !email || !message) {
      setStatus('Please enter your name, email and business problem.');
      return;
    }
    const category = fields.getAll('needs').join(', ') || 'Business enquiry';
    const body = `Name: ${name}\nCompany: ${fields.get('company').trim()}\nReply email: ${email}\nHelp needed: ${category}\n\nBusiness problem:\n${message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Corebridge enquiry: ${category}`)}&body=${encodeURIComponent(body)}`;
    setStatus('Your email app should open with an enquiry draft. Review it and press Send there. Nothing has been sent by this website. If no app opens, contact us directly by email or WhatsApp.');
  }
  return <form className="enquiry-form" onSubmit={handleSubmit}><h2>Tell us about your business problem</h2><p className="form-intro">Prepare an enquiry to send using your email app.</p><label>Your name<input name="name" autoComplete="name" required maxLength={120} /></label><label>Company <span className="optional">(optional)</span><input name="company" autoComplete="organization" maxLength={160} /></label><label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label><fieldset><legend>What do you need help with?</legend><div className="checkbox-grid">{['ERP & CRM', 'Connecting systems', 'Automation', 'AI', 'Custom software', 'Other'].map(n => <label key={n}><input type="checkbox" name="needs" value={n} />{n}</label>)}</div></fieldset><label>Your business problem<textarea name="message" required rows={5} maxLength={5000} placeholder="Describe what is slowing your business down, in your own words." /></label><label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label><button className="button button-primary" type="submit">Prepare email enquiry</button><p className="form-notice">This opens an email draft. You send it from your email app.</p>{status && <p className="form-status" role="status">{status}</p>}</form>;
}
export function Contact() {
  return <><SEO title="Contact Corebridge" description="Tell Corebridge about your business problem. Discuss ERP, integrations, AI and automation in Zimbabwe." /><Hero eyebrow="LET’S TALK" title="Tell us what is slowing your business down." text="You do not need a technical specification. Tell us what is happening and what you want to improve." image={contactHeroImg} alt="Illustrative business workspace" light><a href="#enquiry" className="button button-primary">Prepare an enquiry</a></Hero>
  <section className="section" id="enquiry"><div className="container contact-layout"><aside className="contact-details"><h2>Get in touch</h2><p>Choose the easiest way to reach us.</p>{[[WhatsAppIcon, 'WhatsApp', contact.phone, contact.whatsapp], [Phone, 'Call', contact.phone, `tel:${contact.tel}`], [Mail, 'Email', contact.email, `mailto:${contact.email}`]].map(([Icon, label, value, href]) => <a className="contact-method" key={label} href={href} {...label === 'WhatsApp' ? {
            target: '_blank',
            rel: 'noopener noreferrer'
          } : {}}><span className="contact-icon"><Icon size={24} aria-hidden="true" /></span><span><strong>{label}</strong><span>{value}</span></span></a>)}<div className="contact-location"><MapPin size={20} aria-hidden="true" /><p>Harare, Zimbabwe<br /><span>Contact us to arrange a conversation.</span></p></div></aside><EnquiryForm /></div></section>
  <section className="section surface"><div className="container"><Heading centered title="What happens next" text="A conversation about your needs and a practical next step." /><Steps list={[{
          title: 'Understand your challenge',
          text: 'We discuss the problem, your goals and the way your team works.'
        }, {
          title: 'Explore a suitable approach',
          text: 'We look at the options that make sense for your business.'
        }, {
          title: 'Agree the next step',
          text: 'If there is a fit, we agree the scope, responsibilities and how to proceed.'
        }]} /></div></section></>;
}
export function Missing({
  title = 'This page could not be found.'
}) {
  return <><SEO title="Page not found | Corebridge" description="Find Corebridge business solutions or contact us about your business problem." /><section className="missing-page"><div className="container"><span className="eyebrow">404</span><h1>{title}</h1><p>The page may have moved, or the address may be incorrect. You can explore our solutions or get in touch.</p><div className="actions"><Button to="/">Home</Button><Button to="/solutions" secondary>Explore solutions</Button><Button secondary>Contact Corebridge</Button></div></div><Photo src={contactHeroImg} alt="Business workspace" /></section></>;
}
export function Privacy() {
  return <><SEO title="Website privacy | Corebridge" description="How the Corebridge website handles enquiry information and external contact links." /><section className="section"><div className="container legal-copy"><span className="eyebrow">WEBSITE INFORMATION</span><h1>Privacy</h1><p>This page describes the enquiry features on this website.</p><h2>Enquiry information</h2><p>The enquiry form prepares a draft in your email application. It does not submit your details to a server or store your enquiry in browser storage. You review and send the draft yourself.</p><h2>External contact services</h2><p>WhatsApp, email and phone links open the relevant service or application. Information you share there is handled by that service and by Corebridge as part of the conversation.</p><h2>Website operation</h2><p>The site does not add analytics tracking or advertising cookies. The hosting provider may process technical request information to operate the website.</p><h2>Questions</h2><p>Contact <a href={`mailto:${contact.email}`}>{contact.email}</a> with questions about an enquiry or information you have shared.</p></div></section></>;
}
