# Kind Heart Foundation Website

A modern, responsive, and highly polished static website built for the **Kind Heart Foundation**, an NGO dedicated to providing medical camps, child welfare, and support for the elderly.

## 🚀 Technologies Used

This project was intentionally built as a lightweight, zero-dependency static site for maximum performance and easiest deployment, without relying on heavy JavaScript frameworks like React or Next.js.

* **HTML5 & Vanilla JavaScript**: For structure and interactivity (modals, carousels).
* **Tailwind CSS (v4)**: For rapid, utility-first styling and beautiful glassmorphism effects.
* **GSAP & ScrollTrigger**: For premium, high-performance scroll animations, staggering text reveals, and modal bounce effects.

## ✨ Features

* **Glassmorphic Floating Navbar**: A sticky navbar that features a frosted-glass blur and smoothly shrinks into a floating pill shape as the user scrolls.
* **Scroll Animations**: Sections fade and slide into view seamlessly as you scroll down the page, powered by GSAP.
* **Custom Reels Carousel**: A lightweight, auto-advancing Instagram Reels viewer built in pure JS.
* **Masonry Gallery**: A responsive CSS-columns based image gallery showcasing the foundation's impact.
* **Zero-Framework Architecture**: Incredibly fast load times with no virtual DOM or hydration overhead.

## 🛠️ Development

If you wish to modify the Tailwind CSS classes, you will need to recompile the CSS.

1. **Install Dependencies** (Only requires Tailwind CLI):
   ```bash
   npm install
   ```

2. **Run the Tailwind Watcher**:
   This will watch your HTML and JS files for new Tailwind classes and update `output.css` on the fly.
   ```bash
   npm run watch:css
   ```

3. **Build for Production**:
   To generate a minified version of the CSS:
   ```bash
   npm run build:css
   ```

## 🌍 Deployment

Because this is a pure HTML/CSS/JS application, deployment is as simple as possible. You can drag and drop this folder into any static hosting service (like Vercel, Netlify, GitHub Pages, or an AWS S3 bucket) and it will work instantly. No build configuration is required on the server.
