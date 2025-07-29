#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const distPath = './dist';
const indexPath = join(distPath, 'index.html');

if (!existsSync(indexPath)) {
  console.error('dist/index.html not found. Please run "npm run build" first.');
  process.exit(1);
}

const baseHtml = readFileSync(indexPath, 'utf-8');

// Routes with their metadata
const routes = [
  {
    path: '#/',
    file: 'index.html',
    title: 'Pinewoods Management - Business Acquisition & Legacy Building',
    description: 'Pinewoods Management acquires and operates businesses with a focus on building upon existing accomplishments and preserving company legacy.'
  },
  {
    path: '#/founder-bio',
    file: 'founder-bio.html',
    title: 'Founder Bio - Dan Grigorescu | Pinewoods Management',
    description: 'Learn about Dan Grigorescu, founder of Pinewoods Management, and his commitment to business legacy and growth through strategic acquisitions.'
  },
  {
    path: '#/why-pinewoods',
    file: 'why-pinewoods.html',
    title: 'Why Choose Pinewoods - Benefits & Approach | Pinewoods Management',
    description: 'Discover why business owners choose Pinewoods Management for their transitions. Learn about our unique approach to preserving company legacy.'
  },
  {
    path: '#/contact',
    file: 'contact.html',
    title: 'Contact Us - Get In Touch | Pinewoods Management',
    description: 'Contact Pinewoods Management to discuss your business transition needs. Reach out via email, phone, or visit our Boston office.'
  }
];

// Generate static HTML for each route
routes.forEach(route => {
  let html = baseHtml;
  
  // Update title and meta description
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${route.title}</title>`
  );
  
  html = html.replace(
    /<meta name="description" content=".*?"/,
    `<meta name="description" content="${route.description}"`
  );
  
  html = html.replace(
    /<meta property="og:title" content=".*?"/,
    `<meta property="og:title" content="${route.title}"`
  );
  
  html = html.replace(
    /<meta property="og:description" content=".*?"/,
    `<meta property="og:description" content="${route.description}"`
  );
  
  // Add route initialization script for hash routing
  const routeScript = `
    <script>
      // Initialize the correct route on page load
      window.addEventListener('DOMContentLoaded', function() {
        if (window.location.hash === '' || window.location.hash === '#') {
          window.location.hash = '${route.path}';
        }
      });
    </script>`;
  
  html = html.replace('</head>', `${routeScript}\n  </head>`);
  
  // Write the file
  const outputPath = join(distPath, route.file);
  writeFileSync(outputPath, html);
  console.log(`✓ Generated: ${route.file}`);
});

console.log('\n🎉 Static site generation complete!');
console.log('\nGenerated files:');
routes.forEach(route => {
  console.log(`  - ${route.file} (${route.path})`);
});

console.log('\n📁 Your static site is ready in the /dist folder!');
console.log('   You can now:');
console.log('   1. Upload /dist contents to GitHub Pages');
console.log('   2. Open index.html locally to test');
console.log('   3. Deploy to any static hosting service');