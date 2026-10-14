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
export const reference = {
 solutionsHero: woman, industriesHero: warehouse, approachHero: meeting,
 erp: team, integration: warehouse, automation: planning, ai: documents, software: planning, consulting: discussion,
 industries: [grocery, truck, construction, manufacturing, agriculture, health, finance, professional, energy, hospitality, education, '/photos/open-pit-mine.jpg'],
 process: [meeting, board, discussion, team, training, woman],
 aboutHero: planning, story: city, values: [team, documents, woman, discussion], people: planning,
 contactHero: {sheet:'/reference-images/about-contact-workflows.png',dimensions:[1536,1024],rect:[531,69,475,183]},
 contactDesk: office, workflowsHero: warehouse, workflowFeatured: pos, workflowJobs: field, workflowInvoice: documents,
 workflowDelivery: truck, workflowKnowledge: woman, workflowCTA: office,
 retailDetailHero: grocery, detailChallenges: [grocery, warehouse, documents], detailERP: team, detailIntegration: warehouse, detailAI: documents,
 exampleHero: pos, exampleProblem: woman, exampleSystems: [pos, warehouse, finance, documents], missingDesk: office
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
