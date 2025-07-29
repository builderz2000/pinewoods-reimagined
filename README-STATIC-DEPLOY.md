# Pinewoods Management - Static Site Deployment

This project has been configured to generate a fully static site suitable for GitHub Pages and other static hosting services.

## 🚀 Building the Static Site

1. **Build the React app:**
   ```bash
   npm run build
   ```

2. **Generate static pages:**
   ```bash
   node generate-static-pages.js
   ```

   This creates individual HTML files for each route:
   - `index.html` (Homepage)
   - `founder-bio.html` (Founder Bio page)
   - `why-pinewoods.html` (Why Pinewoods page)
   - `contact.html` (Contact page)

## 📁 Static Site Structure

After building, your `/dist` folder will contain:
```
dist/
├── index.html           # Homepage
├── founder-bio.html     # Founder Bio page  
├── why-pinewoods.html   # Why Pinewoods page
├── contact.html         # Contact page
├── assets/              # CSS, JS, and images
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [image files]
└── robots.txt
```

## 🌐 Deployment Options

### GitHub Pages

1. **Method 1: Upload dist/ contents to your repo root**
   ```bash
   # Copy everything from dist/ to your repo root
   cp -r dist/* .
   git add .
   git commit -m "Deploy static site"
   git push
   ```

2. **Method 2: Use gh-pages branch**
   ```bash
   # Push dist/ contents to gh-pages branch
   git subtree push --prefix dist origin gh-pages
   ```

3. **Method 3: GitHub Actions (automated)**
   - The existing `.github/workflows/deploy.yml` can be used
   - It will automatically build and deploy on push to main

### Other Static Hosts

Simply upload the contents of `/dist` to:
- Netlify
- Vercel
- Surge.sh
- Any static file hosting service

## ✅ Testing Locally

1. **Test the static files:**
   - Open `dist/index.html` in your browser
   - Navigation should work with hash-based routing
   - All images and styles should load correctly

2. **Local server (optional):**
   ```bash
   cd dist
   python -m http.server 8000
   # or
   npx serve .
   ```

## 🔧 How It Works

- **Hash-based routing:** Uses `#/` routes that work without a server
- **Relative paths:** All assets use `./assets/...` paths for subdirectory hosting
- **Pre-rendered meta tags:** Each page has proper SEO meta tags
- **Offline capable:** The site works when opened directly from files

## 📝 Notes

- Each HTML file initializes the correct route via JavaScript
- The site works with or without JavaScript (graceful degradation)
- All paths are relative for maximum compatibility
- No server or Node.js required for hosting