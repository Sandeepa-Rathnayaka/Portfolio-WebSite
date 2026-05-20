# Sandeepa Rathnayaka — Portfolio

A modern, dark-themed portfolio website built with React + Vite.

## 🚀 Quick Start

```bash
npm install
npm run dev        # Development at http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── sections/
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   └── Contact.jsx / .css
│   ├── data/
│   │   └── portfolio.js      ← Edit YOUR info here
│   ├── hooks/
│   │   └── useInView.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
├── netlify.toml
└── vercel.json
```

## ✏️ Customization

All your personal data is in `src/data/portfolio.js`. Edit that file to update:
- Personal info, links, bio
- Work experience
- Projects (add/remove/edit)
- Skills
- Education & certifications

## 🌐 Deploy to Netlify (Recommended — Free)

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Select your repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy** ✅

## 🌐 Deploy to Vercel (Alternative — Free)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → "New Project"
3. Import your repo
4. Framework preset: **Vite**
5. Click **Deploy** ✅

## 🌐 Deploy to GitHub Pages

1. In `vite.config.js`, add `base: '/your-repo-name/'`
2. Install: `npm install --save-dev gh-pages`
3. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

## Tech Stack
- React 18
- Vite 5
- lucide-react (icons)
- Google Fonts: Syne + DM Mono + DM Sans
- Pure CSS animations (no extra deps)
"# Portfolio-WebSite" 
