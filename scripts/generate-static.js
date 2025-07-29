import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the built index.html
const distPath = join(__dirname, '../dist');
const indexPath = join(distPath, 'index.html');

if (!existsSync(indexPath)) {
  console.error('dist/index.html not found. Please run "npm run build" first.');
  process.exit(1);
}

const indexContent = readFileSync(indexPath, 'utf-8');

// Routes to generate
const routes = [
  { path: '/', file: 'index.html' },
  { path: '/#/founder-bio', file: 'founder-bio.html' },
  { path: '/#/why-pinewoods', file: 'why-pinewoods.html' },
  { path: '/#/contact', file: 'contact.html' }
];

// Generate HTML for each route
routes.forEach(route => {
  let html = indexContent;
  
  // Update the title based on route
  let title = 'Pinewoods Management';
  if (route.path.includes('founder-bio')) {
    title = 'Founder Bio - Pinewoods Management';
  } else if (route.path.includes('why-pinewoods')) {
    title = 'Why Pinewoods - Pinewoods Management';
  } else if (route.path.includes('contact')) {
    title = 'Contact - Pinewoods Management';
  }
  
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  
  // Add a script to set the initial route for hash routing
  const routeScript = `
    <script>
      // Set initial route for hash routing
      if (window.location.hash === '') {
        window.location.hash = '${route.path.replace('/#', '#')}';
      }
    </script>
  `;
  
  html = html.replace('</head>', `${routeScript}</head>`);
  
  const outputPath = join(distPath, route.file);
  writeFileSync(outputPath, html);
  console.log(`Generated: ${route.file}`);
});

console.log('Static site generation complete!');