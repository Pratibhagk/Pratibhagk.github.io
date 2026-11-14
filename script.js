// Edit this curated list any time. No backend or API key is needed.
const resources = [
  { category: 'DATA & SOCIETY', title: 'Our World in Data', description: 'Research and visualizations to make sense of a changing world.', url: 'https://ourworldindata.org/grapher/life-expectancy' },
  { category: 'GLOBAL DEVELOPMENT', title: 'Gapminder', description: 'Explore surprising patterns in global health, wealth, and development.', url: 'https://www.gapminder.org/fw/world-health-chart/' },
  { category: 'ART & HISTORY', title: 'The Met Collection', description: 'Wander through thousands of years of human creativity.', url: 'https://www.metmuseum.org/art/collection' },
  { category: 'MACHINE LEARNING', title: 'Distill', description: 'Visual and interactive explanations of machine-learning research.', url: 'https://distill.pub/' },
  { category: 'SPACE & SCIENCE', title: 'NASA Science', description: 'Explore the discoveries changing our understanding of the universe.', url: 'https://science.nasa.gov/' },
  { category: 'PHILOSOPHY', title: 'Stanford Encyclopedia of Philosophy', description: 'Deep, carefully edited introductions to important philosophical ideas.', url: 'https://plato.stanford.edu/' },
  { category: 'MATHEMATICS', title: '3Blue1Brown', description: 'Beautiful visual explanations of mathematical ideas.', url: 'https://www.3blue1brown.com/' },
  { category: 'CULTURE & IDEAS', title: 'Vincent Van Gogh', description: 'Unexpected treasures from history, literature, art, and science.', url: 'https://artsandculture.google.com/project/van-gogh' },
  { category: 'DATA STORYTELLING', title: 'The Pudding', description: 'Discover unexpected patterns in music, language, culture, and society through interactive visual essays.', url: 'https://pudding.cool/2026/11/pi/' }

];
let current = 0;
function showResource(index) {
  current = index;
  const item = resources[current];
  document.getElementById('resource-category').textContent = item.category;
  document.getElementById('resource-title').textContent = item.title;
  document.getElementById('resource-description').textContent = item.description;
  document.getElementById('resource-link').href = item.url;
}
document.getElementById('surprise').addEventListener('click', () => {
  let next = Math.floor(Math.random() * (resources.length - 1));
  if (next >= current) next += 1;
  showResource(next);
});
document.getElementById('year').textContent = new Date().getFullYear();
