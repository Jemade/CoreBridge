import { reference, imageRegionStyle } from '../content/referenceImages';
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
    <div className="footer-brand"><BrandWordmark variant="light" size="1.6rem" /></div>
    <div><h2>Company</h2><Link to="/about">About</Link><Link to="/approach">Our approach</Link><Link to="/contact">Contact</Link><Link to="/case-studies">Workflow examples</Link></div>
    <div><h2>Solutions</h2><Link to="/solutions#erp-crm">ERP & business systems</Link><Link to="/solutions#systems-integration">Integrations</Link><Link to="/solutions#business-automation">Automation & AI</Link><Link to="/industries">Industries</Link></div>
    <div><h2>Contact</h2><Link to="/contact">Get in touch</Link><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={`tel:${contact.tel}`}>{contact.phone}</a></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Corebridge. All rights reserved.</span><Link to="/privacy">Privacy</Link></div></div></footer>;
}
export function FloatingContact() {
  return null;
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
  return <figure className={`photo ${className}`} style={{ aspectRatio: typeof src === 'object' ? `${src.rect[2]} / ${src.rect[3]}` : '3 / 2' }}>
    {typeof src === 'object' ? <span className="reference-image" style={imageRegionStyle(src)} role="img" aria-label={alt} /> : <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" width="800" height="540" />}
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
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
  breadcrumb,
  page = ''
}) {
  return <section className={`page-hero reference-hero ${light ? 'hero-light' : ''} ${page ? `${page}-hero` : ''} ${typeof image === 'string' ? 'photographic-hero' : ''}`}>
    <Photo src={image} alt={alt} className="hero-background" eager />
    <div className="hero-shade" />
    <div className="container hero-content"><div className="hero-copy">
      {breadcrumb && <div className="breadcrumb">{breadcrumb}</div>}
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1><p className="hero-description">{text}</p>
      {children || <Button>Let’s talk</Button>}
    </div></div>
  </section>;
}
function CTA({
  title = 'Have a business problem to solve?',
  text = 'Tell us what is slowing you down. We can explore ERP, connected systems, AI and automation around your needs.',
  image = false,
  variant = 'centered',
  label = 'Let’s talk'
}) {
  return <section className={`contact-band ${image ? 'contact-band-photo' : ''} cta-${variant}`}>
    {image && <><Photo src={typeof image === 'object' ? image : reference.workflowCTA} alt="Illustrative business workspace" className="cta-background" /><div className="cta-shade" /></>}
    <div className="container cta-inner"><h2>{title}</h2><div><p>{text}</p><Button>{label}</Button></div></div>
  </section>;
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
  return <div className={`business-areas ${dark ? 'dark-areas' : ''}`}>
    {[['Finance', 'Accounting, reporting and financial control in one system.'], ['Stock', 'Inventory, purchasing and warehouse management.'], ['Sales', 'CRM, quotations, orders and customer management.'], ['Operations', 'Production, projects and day-to-day operations.']].map(([title, text]) => <div key={title}><h3>{title}</h3><p>{text}</p></div>)}
  </div>;
}
function Steps({
  list,
  detailed = false
}) {
  return <ol className={detailed ? 'process-list' : 'numbered-steps'}>{list.map((step, index) => <li key={step.title}><span className="step-number">{index + 1}</span><div><h3>{step.title}</h3><p>{step.text || step.desc}</p>{step.deliverable && detailed && <p className="deliverable"><strong>What we agree:</strong> {step.deliverable}</p>}</div>{detailed && step.image && <Photo src={step.image} alt={`Illustrative business scene for ${step.title.toLowerCase()}`} />}</li>)}</ol>;
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
  return <div className="reference-page solutions-page"><SEO title="Business solutions | Corebridge" description={businessDescription} />
    <Hero page="solutions" title={<>Business problems.<br /><span>Practical solutions.</span></>} text="ERP, connected systems, AI and automation built around your work." image={reference.solutionsHero} alt="Approved solutions hero photograph" />
    <section className="erp-section" id="erp-crm"><div className="container service-intro"><div><h2>ERP & CRM implementation</h2><p className="service-subtitle">A solid foundation for a more efficient business.</p><p>We implement Odoo and Zoho to bring your core business processes together. From initial setup to data migration, configuration, training and ongoing support, we help you get real value from your ERP and CRM.</p><Button>Explore ERP & CRM</Button></div><Photo src={reference.erp} alt="Business professionals planning an ERP implementation" /></div></section>
    <div className="erp-areas"><div className="container"><Areas /></div></div>
    <section className="service-editorial-section"><div className="container service-list">
      {services.slice(1).map((item, index) => <article key={item.slug} id={item.slug} className={`service-row ${index % 2 ? 'reverse' : ''}`}><Photo src={item.image} alt={`Approved photograph for ${item.title.toLowerCase()}`} /><div><h2>{item.title}</h2><p>{['Connect your key systems to eliminate data silos and give your team a more complete view of the business. We integrate ERPs, CRMs and third-party tools.', 'Remove repetitive work and reduce manual errors with practical automation. We design workflows that fit your processes and save time.', 'Use AI to solve real business problems, from document processing to decision support, with practical solutions that fit your needs.', 'When off-the-shelf isn’t enough, we build tailored applications that solve specific operational challenges and fit seamlessly into your ecosystem.', 'Get expert guidance, hands-on support and a long-term partner to help you keep improving as your business evolves.'][index]}</p><Button secondary>{['Integrate your systems', 'Automate workflows', 'Apply AI in your business', 'Build a tailored solution', 'Get ongoing support'][index]}</Button></div></article>)}
      <div className="service-notes" id="payment-integration"><div><h3>Payment systems</h3><p>Payment and accounting connections can be included in the agreed integration scope.</p></div><div id="data-reporting"><h3>Data & reporting</h3><p>Connected records can support clearer reporting and business decisions.</p></div></div>
    </div></section><CTA variant="inline light" title="Keep what works. Improve what doesn’t." text="We build on your existing systems, connect the pieces and introduce practical improvements that make a real difference to your business." label="Discuss your business" />
  </div>;
}
export function Industries() {
  const [query, setQuery] = useState('');
  const entries = [['retail-fmcg', 'Retail & wholesale', 'Manage stock, sales and supply chains across multiple locations.'], ['logistics-transport', 'Logistics & transport', 'Connect operations, fleets and customer data for greater efficiency.'], ['construction-real-estate', 'Construction', 'Connect projects, costs and resources from bid to completion.'], ['manufacturing-assembly', 'Manufacturing', 'Unify production, stock and sales for smoother operations.'], ['agriculture', 'Agriculture', 'Track production, stock and distribution across your operations.'], ['healthcare-pharmaceuticals', 'Healthcare', 'Streamline operations, procurement and patient support services.'], ['financial-services', 'Financial services', 'Improve reporting and operational control.'], ['professional-services', 'Professional services', 'Manage projects, resources and client information in one place.'], ['energy-utilities', 'Energy & utilities', 'Coordinate assets, maintenance and field operations.'], ['hospitality-tourism', 'Hospitality', 'Simplify bookings, stock and operations across your venues.'], ['education-institutions', 'Education', 'Manage people, facilities and resources more efficiently.'], ['mining', 'Mining', 'Track assets, production and procurement across your operation.']].map(([slug, name, shortDesc], i) => ({
    ...industries.find(item => item.slug === slug),
    slug,
    name,
    shortDesc,
    image: reference.industries[i]
  }));
  const filtered = entries.filter(item => `${item.name} ${item.shortDesc}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <div className="reference-page industries-page"><SEO title="Industry solutions | Corebridge" description="ERP, integrations, AI and automation shaped around your industry and business needs." />
    <Hero page="industries" title={<>Every industry<br /><span>works differently.</span></>} text="The same goal: simpler systems, more efficient work and better results." image={reference.industriesHero} alt="Industry professional reviewing operations"><label className="search-field"><span className="sr-only">Search industries</span><Search size={19} aria-hidden="true" /><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search industries" /></label></Hero>
    <section className="industry-gallery-section"><div className="container"><p className="sr-only" role="status">{filtered.length} matching industries</p>{filtered.length ? <div className="industry-grid">{filtered.map(item => <IndustryCard key={item.slug} item={item} />)}</div> : <div className="empty-state"><h2>No industries match that search.</h2><button type="button" className="button button-primary" onClick={() => setQuery('')}>Show all industries</button></div>}</div></section>
    <CTA title="Connect the work across your business." text="Different industries. Common challenges. We bring your systems, data and people together to help you work more efficiently and make better decisions." label="Explore a solution" />
  </div>;
}
export function Approach() {
  return <div className="reference-page approach-page"><SEO title="Our approach | Corebridge" description="We start with your business problem, then agree, implement and support a practical solution." />
    <Hero page="approach" title={<>We start with your<br /><span>business problem.</span></>} text="Understand the work before choosing the technology." image={reference.approachHero} alt="Business discovery conversation" />
    <section className="approach-process-section"><div className="container"><Heading title="Our approach" text="A practical, collaborative process to solve real business problems." /><Steps list={process} detailed /></div></section>
    <section className="approach-principles-section surface"><div className="container"><Heading title="Our principles" /><div className="principles-grid">{[['Preserve what works', 'We build on your existing strengths and improve what matters.'], ['Start with a clear scope', 'We keep things focused, practical and aligned with your goals.'], ['Design for local realities', 'We take into account your industry, market and the way your team works.'], ['Make progress visible', 'We set clear milestones and keep you informed every step of the way.']].map(([title, text], i) => <article key={title}><IconTile name={['settings', 'layers', 'network', 'workflow'][i]} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <CTA title="Let’s discuss your challenge." text="Tell us about your business and we’ll explore the best way forward together." />
  </div>;
}
export function About() {
  return <div className="reference-page about-page"><SEO title="About Corebridge" description={businessDescription} />
    <Hero page="about" title={<>Here to solve<br />business problems.</>} text="We help businesses implement ERP systems, connect their important tools and use practical AI and automation to work smarter." image={reference.aboutHero} alt="Approved photograph of business collaboration" />
    <section className="about-story-section surface"><div className="container split-grid"><Photo src={reference.story} alt="City business district" /><div><span className="eyebrow">OUR STORY</span><h2>Technology should help your business work better.</h2><p>Corebridge was founded to help businesses get real value from technology. We adapt proven global systems to the realities of each business, focusing on practical solutions that solve everyday problems and create a stronger, more efficient future.</p></div></div></section>
    <section className="about-services-section"><div className="container"><Heading centered eyebrow="WHAT WE DO" title="Build. Connect. Improve." text="We implement and support ERP systems, connect your business tools, and apply practical AI and automation to remove manual work and give you clearer information for better decisions." /><div className="principles-grid">{[['ERP implementation', 'Set up and configure ERP systems around how your business works.'], ['System integrations', 'Connect your key business tools and eliminate data silos.'], ['Workflow automation', 'Automate repetitive tasks so your team can focus on what matters.'], ['Practical AI', 'Use AI in useful, realistic ways to improve productivity and insight.']].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="about-values-section surface"><div className="container"><Heading centered eyebrow="OUR VALUES" title={<>Practical technology.<br />Real business impact.</>} /><div className="values-photo-grid">{[['Understand first', 'We take time to understand your business, people and challenges before suggesting any solution.'], ['Practical solutions', 'We focus on solutions that are realistic, useful and suitable for your business environment.'], ['Connected information', 'We help you bring your systems and data together for a clearer, more complete picture of your business.'], ['Ongoing support', 'We stay engaged to support your team as your business evolves and your needs change.']].map(([title, text], i) => <article key={title}><Photo src={reference.values[i]} alt={`Approved photograph illustrating ${title.toLowerCase()}`} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="people-section"><div className="container"><div className="people-banner"><Photo src={reference.people} alt="Illustrative business collaboration" className="people-background" /><div className="people-shade" /><div className="people-copy"><h2>The people behind Corebridge</h2><p>We bring practical technical experience and a focus on solving real business problems. We combine an understanding of your work with useful technology to help your business operate better.</p></div></div></div></section>
    <CTA variant="inline light" title="Let’s solve your business challenges together." text="Whether you are exploring an ERP implementation, need to connect your systems, or want to automate repetitive processes, we would love to hear from you." />
  </div>;
}
export function Workflows() {
  const cards = [examples[2], examples[3], examples[1]];
  const knowledge = allExamples.at(-1);
  return <div className="reference-page workflows-page"><SEO title="Workflow examples | Corebridge" description="Illustrative approaches using ERP, connected systems, automation and practical AI." />
    <Hero page="workflows" eyebrow="ILLUSTRATIVE EXAMPLES" title={<>What better connected<br />work could look like.</>} text="These examples show common business challenges and how ERP, connected systems, automation and practical AI can help. They are for illustration only." image={reference.workflowsHero} alt="Business operations professional using a tablet" />
    <section className="workflow-gallery-section"><div className="container"><div className="workflow-feature"><ExampleCard item={examples[0]} featured /></div><div className="examples-grid">{cards.map(item => <ExampleCard key={item.slug} item={item} />)}</div><div className="knowledge-feature"><ExampleCard item={knowledge} /></div></div></section>
    <CTA title="Have a similar challenge?" text="Let’s discuss how a more connected, automated and intelligent setup could work for your business." image={reference.workflowCTA} variant="inline" />
  </div>;
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
  return <div className="reference-page industry-detail-page"><SEO title={`${industry.name} | Corebridge`} description={`ERP, connected systems, AI and automation for ${industry.name.toLowerCase()}.`} /><Hero eyebrow="INDUSTRY SOLUTIONS" title={slug === 'retail-fmcg' ? <>Keep sales, stock<br />and finance<br />connected.</> : industry.name} text={slug === 'retail-fmcg' ? 'Bring your retail and wholesale operations together with an integrated ERP, connected systems and practical automation.' : industry.overview} image={slug === 'retail-fmcg' ? reference.retailDetailHero : industry.image} alt={`${industry.name} operations`} light breadcrumb={<><Link to="/industries">All industries</Link><span> / {industry.name}</span></>}><Button>Discuss your operations</Button></Hero>
  <section className="section surface"><div className="container"><Heading eyebrow="BUSINESS CHALLENGES" title="Where work can become harder than it needs to be." text="These are common considerations. We confirm what matters in your business before recommending a solution." /><div className="challenge-grid photo-challenges">{industry.operationalChallenges?.map((item, i) => <article key={item}><Photo src={reference.detailChallenges[i % 3]} alt="Illustrative business challenge" /><p>{item}</p></article>)}</div></div></section>
  <section className="section"><div className="container"><Heading eyebrow="HOW WE HELP" title="A more connected operation." /><div className="industry-solutions">{rows.map(row => <article key={row.title}><Photo src={row.image} alt={`Illustrative scene for ${row.title.toLowerCase()}`} /><div><h3>{row.title}</h3><p>{row.text}</p><ul className="plain-list">{row.items?.map(item => <li key={item}>{item}</li>)}</ul></div></article>)}</div></div></section>
  <section className="section surface"><div className="container"><Heading title="Keep the important information in view." /><Areas />{steps.length > 0 && <><Heading eyebrow="ILLUSTRATIVE WORKFLOW" title="How a connected process could work." text="The systems, checks and responsibilities would be agreed for your business." /><Steps list={steps} /></>}</div></section><CTA title="Start with one workflow." text="We can review the business problem, identify a suitable approach and agree a manageable scope." /></div>;
}
export function WorkflowDetail() {
  const {
    slug
  } = useParams();
  const item = allExamples.find(i => i.slug === slug);
  if (!item) return <Missing title="That workflow example could not be found." />;
  return <div className="reference-page example-detail-page"><SEO title={`${item.title} | Corebridge`} description={item.problem} /><Hero eyebrow="ILLUSTRATIVE EXAMPLE" title={slug === 'pos-odoo-integration' ? <>From a sale to an<br />accounting record.</> : item.title} text="A possible approach to a business problem, to discuss and test against your requirements." image={reference.exampleHero} alt={`Illustrative scene for ${item.title.toLowerCase()}`} light breadcrumb={<Link to="/case-studies">All workflow examples</Link>}><Button>Discuss a similar problem</Button></Hero>
  <section className="section"><div className="container detail-intro"><Heading eyebrow="THE BUSINESS PROBLEM" title="Repeated work across separate systems." text={item.problem} /><Photo src={reference.exampleProblem} alt="Illustrative operational workflow" /></div></section>
  <section className="section surface"><div className="container"><Heading eyebrow="A POSSIBLE APPROACH" title="Connect the work and simplify the handoffs." text={item.approach} /><div className="systems-list">{item.systems.map((system, i) => <article key={system}><Photo src={reference.exampleSystems[i % 4]} alt={system} /><h3>{system}</h3></article>)}</div></div></section>
  <section className="section"><div className="container"><Heading eyebrow="ILLUSTRATIVE WORKFLOW" title="How the process could work." /><Steps list={item.steps.map(title => ({
          title
        }))} /><p className="illustration-note">Proposed workflow, not a client case study. No outcome is assumed before testing.</p><div className="validation-section"><div><h2>Less manual work. A clearer process.</h2><p>ERP and integrations can coordinate records, while automation and AI can assist with repeat tasks. Review steps keep people involved in decisions and exceptions.</p></div><div><h3>What we would validate with you</h3><ul className="check-list">{item.validation.map(v => <li key={v}><Check size={16} aria-hidden="true" />{v}</li>)}</ul></div></div></div></section><CTA title="Discuss a similar business problem." image /></div>;
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
  return <form className="enquiry-form" onSubmit={handleSubmit}><h2>Send us a message</h2><label>Your name<input name="name" autoComplete="name" required maxLength={120} /></label><label>Company <span className="optional">(optional)</span><input name="company" autoComplete="organization" maxLength={160} /></label><label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label><fieldset><legend>What do you need help with?</legend><div className="checkbox-grid">{['ERP & CRM', 'Connecting systems', 'Automation', 'AI', 'Other'].map(n => <label key={n}><input type="checkbox" name="needs" value={n} />{n}</label>)}</div></fieldset><label>Your message<textarea name="message" required rows={5} maxLength={5000} placeholder="Describe the business problem in your own words." /></label><label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label><button className="button button-primary" type="submit">Send enquiry</button><p className="form-notice">Opens an email draft for you to review and send.</p>{status && <p className="form-status" role="status">{status}</p>}</form>;
}
export function Contact() {
  return <div className="reference-page contact-page"><SEO title="Contact Corebridge" description="Tell Corebridge about your business problem. Discuss ERP, connected systems, automation and practical AI." />
    <Hero page="contact" title={<>Tell us what is slowing<br />your business down.</>} text="We are here to understand your challenges and explore how ERP, connected systems, automation or practical AI can help your business work better." image={reference.contactHero} alt="Approved business workspace photograph" light><span /></Hero>
    <section className="contact-form-section" id="enquiry"><div className="container contact-layout"><aside className="contact-details"><h2>Get in touch</h2><p>Choose the easiest way to reach us.</p>{[[WhatsAppIcon, 'WhatsApp', contact.phone, contact.whatsapp], [Phone, 'Call', contact.phone, `tel:${contact.tel}`], [Mail, 'Email', contact.email, `mailto:${contact.email}`]].map(([Icon, label, value, href]) => <a className={`contact-method ${label === 'WhatsApp' ? 'contact-whatsapp' : ''}`} key={label} href={href} {...label === 'WhatsApp' ? {
            target: '_blank',
            rel: 'noopener noreferrer'
          } : {}}><span className="contact-icon"><Icon size={24} aria-hidden="true" /></span><span><strong>{label}</strong><span>{value}</span></span></a>)}</aside><EnquiryForm /></div></section>
    <section className="contact-next-section"><div className="container"><Heading centered title="What happens next" text="A simple and straightforward process." /><Steps list={[{
          title: 'Understand your challenge',
          text: 'We will talk about your business, goals and the challenges you are facing.'
        }, {
          title: 'Discuss a suitable approach',
          text: 'We will explore the options that make sense for your business and share practical ideas.'
        }, {
          title: 'Agree the next step',
          text: 'If there is a good fit, we will agree on the next step and how to move forward.'
        }]} /><Photo src={reference.contactDesk} alt="Notebook, pen and laptop on a business desk" className="contact-desk-photo" /></div></section>
    <CTA variant="inline light" title="Let’s start a conversation." text="Tell us what is slowing your business down and let’s explore how we can help." />
  </div>;
}
export function Missing({
  title = 'This page could not be found.'
}) {
  return <><SEO title="Page not found | Corebridge" description="Find Corebridge business solutions or contact us about your business problem." /><section className="missing-page"><div className="container"><span className="eyebrow">404</span><h1>{title}</h1><p>The page may have moved, or the address may be incorrect. You can explore our solutions or get in touch.</p><div className="actions"><Button to="/">Home</Button><Button to="/solutions" secondary>Explore solutions</Button><Button secondary>Contact Corebridge</Button></div></div><Photo src={reference.missingDesk} alt="Business workspace" /></section></>;
}
export function Privacy() {
  return <><SEO title="Website privacy | Corebridge" description="How the Corebridge website handles enquiry information and external contact links." /><section className="section"><div className="container legal-copy"><span className="eyebrow">WEBSITE INFORMATION</span><h1>Privacy</h1><p>This page describes the enquiry features on this website.</p><h2>Enquiry information</h2><p>The enquiry form prepares a draft in your email application. It does not submit your details to a server or store your enquiry in browser storage. You review and send the draft yourself.</p><h2>External contact services</h2><p>WhatsApp, email and phone links open the relevant service or application. Information you share there is handled by that service and by Corebridge as part of the conversation.</p><h2>Website operation</h2><p>The site does not add analytics tracking or advertising cookies. The hosting provider may process technical request information to operate the website.</p><h2>Questions</h2><p>Contact <a href={`mailto:${contact.email}`}>{contact.email}</a> with questions about an enquiry or information you have shared.</p></div></section></>;
}
