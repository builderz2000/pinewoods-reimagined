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
    route: '/',
    file: 'index.html',
    title: 'Pinewoods Management - Business Acquisition & Legacy Building',
    description: 'Pinewoods Management acquires and operates businesses with a focus on building upon existing accomplishments and preserving company legacy.'
  },
  {
    route: '/founder-bio',
    file: 'founder-bio.html',
    title: 'Founder Bio - Dan Grigorescu | Pinewoods Management',
    description: 'Learn about Dan Grigorescu, founder of Pinewoods Management, and his commitment to business legacy and growth through strategic acquisitions.'
  },
  {
    route: '/why-pinewoods',
    file: 'why-pinewoods.html',
    title: 'Why Choose Pinewoods - Benefits & Approach | Pinewoods Management',
    description: 'Discover why business owners choose Pinewoods Management for their transitions. Learn about our unique approach to preserving company legacy.'
  },
  {
    route: '/contact',
    file: 'contact.html',
    title: 'Contact Us - Get In Touch | Pinewoods Management',
    description: 'Contact Pinewoods Management to discuss your business transition needs. Reach out via email, phone, or visit our Boston office.'
  }
];

// Generate static HTML for each route
routes.forEach(routeConfig => {
  let html = baseHtml;
  
  // Update title and meta description
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${routeConfig.title}</title>`
  );
  
  html = html.replace(
    /<meta name="description" content=".*?"/,
    `<meta name="description" content="${routeConfig.description}"`
  );
  
  html = html.replace(
    /<meta property="og:title" content=".*?"/,
    `<meta property="og:title" content="${routeConfig.title}"`
  );
  
  html = html.replace(
    /<meta property="og:description" content=".*?"/,
    `<meta property="og:description" content="${routeConfig.description}"`
  );
  
  // Add route initialization script for hash routing
  const routeScript = `
    <script>
      // Initialize the correct route on page load
      window.addEventListener('DOMContentLoaded', function() {
        const targetHash = '#${routeConfig.route}';
        if (window.location.hash === '' || window.location.hash === '#' || window.location.hash === '#/') {
          if ('${routeConfig.route}' === '/') {
            window.location.hash = '#/';
          } else {
            window.location.hash = targetHash;
          }
        }
      });
    </script>`;
  
  html = html.replace('</head>', `${routeScript}\n  </head>`);
  
  // Write the file
  const outputPath = join(distPath, routeConfig.file);
  writeFileSync(outputPath, html);
  console.log(`✓ Generated: ${routeConfig.file} -> ${routeConfig.route}`);
});

console.log('\n🎉 Static site generation complete!');
console.log('\nGenerated files:');
routes.forEach(routeConfig => {
  console.log(`  - ${routeConfig.file} (route: ${routeConfig.route})`);
});

console.log('\n📁 Your static site is ready in the /dist folder!');
console.log('   You can now:');
console.log('   1. Upload /dist contents to GitHub Pages');
console.log('   2. Open any .html file locally to test');
console.log('   3. Deploy to any static hosting service');
console.log('\n💡 Each page works independently and supports hash routing!');