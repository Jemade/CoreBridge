/* Approved picture assets. CSS displays the original pixels within each image region;
   the enhanced source sheets remove photo annotations and improve detail. Rectangles are [x, y, width, height]. */
const sheets = {
  main: '/reference-images/solutions-industries-approach.png',
  company: '/reference-images/about-contact-workflows.png',
  detail: '/reference-images/detail-pages.png'
};
const region = (sheet, x, y, width, height) => ({
  sheet: sheets[sheet],
  dimensions: [1536, 1024],
  rect: [x, y, width, height]
});
export const reference = {
  solutionsHero: region('main', 16, 65, 485, 168),
  industriesHero: region('main', 526, 65, 485, 199),
  approachHero: region('main', 1035, 65, 484, 172),
  erp: region('main', 285, 249, 195, 114),
  integration: region('main', 43, 467, 163, 76),
  automation: region('main', 310, 559, 170, 83),
  ai: region('main', 43, 656, 163, 73),
  software: region('main', 310, 745, 170, 74),
  consulting: region('main', 43, 835, 163, 65),
  industries: [region('main', 545, 279, 104, 73), region('main', 660, 279, 104, 73), region('main', 776, 279, 104, 73), region('main', 890, 279, 104, 73), region('main', 545, 458, 104, 70), region('main', 660, 458, 104, 70), region('main', 776, 458, 104, 70), region('main', 890, 458, 104, 70), region('main', 545, 642, 104, 73), region('main', 660, 642, 104, 73), region('main', 776, 642, 104, 73), region('main', 890, 642, 104, 73)],
  process: [region('main', 1337, 296, 160, 61), region('main', 1337, 364, 160, 59), region('main', 1337, 433, 160, 60), region('main', 1337, 503, 160, 58), region('main', 1337, 573, 160, 60), region('main', 1337, 643, 160, 62)],
  aboutHero: region('company', 33, 69, 475, 184),
  story: region('company', 50, 267, 200, 124),
  values: [region('company', 50, 657, 101, 56), region('company', 164, 657, 100, 56), region('company', 278, 657, 100, 56), region('company', 391, 657, 100, 56)],
  people: region('company', 50, 806, 442, 60),
  contactHero: region('company', 531, 69, 475, 183),
  contactDesk: region('company', 551, 749, 433, 90),
  workflowsHero: region('company', 1030, 69, 473, 157),
  workflowFeatured: region('company', 1047, 235, 222, 189),
  workflowJobs: region('company', 1044, 440, 141, 60),
  workflowInvoice: region('company', 1196, 440, 141, 60),
  workflowDelivery: region('company', 1351, 440, 141, 60),
  workflowKnowledge: region('company', 1044, 696, 139, 112),
  workflowCTA: region('company', 1046, 824, 456, 61),
  retailDetailHero: region('detail', 15, 70, 488, 212),
  detailChallenges: [region('detail', 40, 355, 134, 79), region('detail', 187, 355, 139, 79), region('detail', 336, 355, 137, 79)],
  detailERP: region('detail', 40, 568, 152, 52),
  detailIntegration: region('detail', 40, 627, 152, 59),
  detailAI: region('detail', 40, 696, 152, 61),
  exampleHero: region('detail', 526, 70, 487, 178),
  exampleProblem: region('detail', 825, 263, 164, 112),
  exampleSystems: [region('detail', 552, 520, 99, 57), region('detail', 665, 520, 99, 57), region('detail', 778, 520, 100, 57), region('detail', 891, 520, 100, 57)],
  missingDesk: region('detail', 1038, 510, 483, 438)
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
