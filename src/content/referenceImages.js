/* Real photography, bundled locally. The approved Corebridge mug is retained on Contact. */
const team = new URL('../assets/images/about/corebridge-team-harare.jpg', import.meta.url).href;
const warehouse = new URL('../assets/images/sections/operational-reality.jpg', import.meta.url).href;
const training = new URL('../assets/images/sections/editorial-statement.jpg', import.meta.url).href;
const board = new URL('../assets/images/hero/approach-hero.jpg', import.meta.url).href;
const office = new URL('../assets/images/hero/contact-hero.jpg', import.meta.url).href;
const city = new URL('../assets/images/hero/industries-hero.jpg', import.meta.url).href;
const documents = new URL('../assets/images/case-studies/document-ai.jpg', import.meta.url).href;
const pos = new URL('../assets/images/case-studies/pos-odoo-sync.jpg', import.meta.url).href;
const field = new URL('../assets/images/case-studies/field-service.jpg', import.meta.url).href;
const grocery = new URL('../assets/images/industries/fmcg.jpg', import.meta.url).href;
const truck = new URL('../assets/images/industries/logistics-transport.jpg', import.meta.url).href;
const construction = new URL('../assets/images/industries/construction.jpg', import.meta.url).href;
const manufacturing = new URL('../assets/images/industries/manufacturing.jpg', import.meta.url).href;
const agriculture = new URL('../assets/images/industries/agriculture.jpg', import.meta.url).href;
const health = new URL('../assets/images/industries/healthcare.jpg', import.meta.url).href;
const finance = new URL('../assets/images/industries/financial-services.jpg', import.meta.url).href;
const professional = new URL('../assets/images/industries/professional-services.jpg', import.meta.url).href;
const energy = new URL('../assets/images/industries/energy-utilities.jpg', import.meta.url).href;
const hospitality = new URL('../assets/images/industries/hospitality-tourism.jpg', import.meta.url).href;
const education = new URL('../assets/images/industries/education.jpg', import.meta.url).href;
const woman = '/photos/woman-desk.jpg';
const planning = '/photos/team-planning.jpg';
const discussion = '/photos/office-discussion.jpg';
const meeting = '/photos/whiteboard-planning.jpg';
const photo = id => `/photos/sections/${id}.jpg`;
export const reference = {
 solutionsHero: woman, industriesHero: warehouse, approachHero: meeting,
 erp: team, integration: photo('BNBA1h-NgdY'), automation: planning, ai: photo('iusJ25iYu1c'), software: photo('CPs2X8JYmS8'), consulting: discussion,
 industries: [grocery, photo('EmEQ6kK_5P0'), photo('qvBYnMuNJ9A'), photo('WjOWazUPAss'), photo('Gh_Oc8USMe8'), photo('NFvdKIhxYlU'), photo('jpqyfK7GB4w'), photo('SJvDxw0azqw'), photo('Ilpf2eUPpUE'), photo('hotel-interior'), photo('GDokEYnOfnE'), '/photos/open-pit-mine.jpg'],
 process: [photo('KdeqA3aTnBY'), board, photo('7aakZdIl4vg'), photo('bPVM4nOy0Rg'), photo('gMsnXqILjp4'), photo('50TkCaP8M3A')],
 aboutHero: photo('faEfWCdOKIg'), story: city,
 values: [photo('OW5KP_Pj85Q'), photo('xoU52jUVUXA'), photo('MkxWUzCuYkE'), photo('46bom4lObsA')],
 people: new URL('../assets/images/about/corebridge-engineering-focus.jpg', import.meta.url).href,
 contactHero: {sheet:'/reference-images/about-contact-workflows.png',dimensions:[1536,1024],rect:[531,69,475,183]},
 workflowsHero: photo('dI-aXC7DWpQ'), workflowFeatured: pos, workflowJobs: photo('x-ghf9LjrVg'), workflowInvoice: photo('8wLZi9OhsWU'),
 workflowDelivery: photo('5WQJ_ejZ7y8'), workflowKnowledge: photo('Lks7vei-eAg'), workflowCTA: photo('1RT4txDDAbM'),
 homeIndustries: [photo('kGoPcmpPT7c'), photo('nHRXNv2qeDE'), photo('X1P1_EDNnok')],
 homeExamples: [new URL('../assets/images/sections/zimbabwe-operations.jpg', import.meta.url).href, photo('ESZRBtkQ_f8'), photo('q10VITrVYUM')],
 industryHeroes: {
  'retail-fmcg': photo('ezeC8-clZSs'), 'hospitality-tourism': hospitality,
  'mining': photo('Evss0Whf5OI'), 'fmcg': photo('retail-interior')
 },
 exampleHeroes: {
  'pos-odoo-integration': photo('LNnmSumlwO4'),
  'b2b-interoperability-layer': new URL('../assets/images/case-studies/logistics-manifest.jpg', import.meta.url).href,
  'field-service-workflow-engine': field,
  'practical-document-ocr-pipeline': documents,
  'business-knowledge-assistant': new URL('../assets/images/industries/retail.jpg', import.meta.url).href
 },
 exampleProblems: {
  'pos-odoo-integration': photo('JhevWHCbVyw'), 'b2b-interoperability-layer': photo('NndKt2kF1L4'),
  'field-service-workflow-engine': photo('41X6FwTwPh4'), 'practical-document-ocr-pipeline': photo('PlikkWB79qs'),
  'business-knowledge-assistant': photo('9l_326FISzk')
 },
 missingDesk: photo('3A4XZUopCJA')
};
export function imageRegionStyle(image) {
  const [sheetWidth, sheetHeight] = image.dimensions;
  const [x, y, width, height] = image.rect;
  return {
    '--region-ratio': `${width} / ${height}`,
    backgroundImage: `url("${image.sheet}")`,
    backgroundSize: `${sheetWidth / width * 100}% ${sheetHeight / height * 100}%`,
    backgroundPosition: `${x / (sheetWidth - width) * 100}% ${y / (sheetHeight - height) * 100}%`,
    backgroundRepeat: 'no-repeat'
  };
}
