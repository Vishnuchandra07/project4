# Galipelli Vishnu Chandra — AI/ML Portfolio

Premium modern portfolio website for an AI & Machine Learning engineer. Built with **React**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**.

## Features

- Animated hero with typing roles and gradient background
- Glassmorphism UI with floating AI particle network
- Scroll animations and sticky navbar with active section highlighting
- Project filtering (All, Computer Vision, Deep Learning, Machine Learning)
- Timeline experience section
- Certification cards with credential link support
- Contact form (opens default mail client)
- Loading screen, back-to-top button, fully responsive layout

## Folder Structure

```
Portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          # Add your resume here
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BackToTop.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── LoadingScreen.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ParticlesBackground.jsx
│   │   ├── sections/
│   │   │   ├── About.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Skills.jsx
│   │   └── ui/
│   │       ├── GlassCard.jsx
│   │       └── SectionHeading.jsx
│   ├── data/
│   │   └── portfolio.js    # Central content config
│   ├── hooks/
│   │   ├── useScrollSpy.js
│   │   └── useTypingEffect.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm (included with Node.js)

### Steps

1. **Open the project folder**

   ```bash
   cd Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add your resume (optional)**

   Place your PDF at `public/resume.pdf` for the **Download Resume** button.

4. **Customize content**

   Edit `src/data/portfolio.js` to update:
   - Social links (LinkedIn, GitHub, LeetCode, HackerRank)
   - Email address
   - Project GitHub URLs
   - Certification credential links

5. **Add profile photo (optional)**

   In `src/components/sections/Hero.jsx`, replace the placeholder avatar with an `<img>` pointing to your photo in `public/`.

## Commands

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start dev server (port 5173)   |
| `npm run build`   | Production build to `dist/`    |
| `npm run preview` | Preview production build       |
| `npm run lint`    | Run ESLint                     |

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option A: Vercel Dashboard (recommended)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New Project** → import your GitHub repo.
4. Vercel auto-detects Vite. Use these settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

### Option B: Vercel CLI

```bash
npm install -g vercel
npm run build
vercel
```

Follow the prompts. For production:

```bash
vercel --prod
```

The included `vercel.json` enables SPA routing for client-side navigation.

## Customization Checklist

- [ ] Update social URLs in `src/data/portfolio.js`
- [ ] Add `public/resume.pdf`
- [ ] Replace profile placeholder in `Hero.jsx`
- [ ] Add real GitHub links per project
- [ ] Add certification credential URLs (`link` field in `certifications` array)
- [ ] Replace Unsplash project images with your own screenshots

## Certification Links

When you have public credential URLs, add them in `src/data/portfolio.js`:

```js
{
  id: 'nptel-ml',
  title: 'NPTEL Machine Learning',
  issuer: 'NPTEL',
  year: '2024',
  link: 'https://your-credential-url-here',
},
```

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS 4
- Framer Motion 11
- Lucide React

## License

Personal portfolio — all rights reserved.
