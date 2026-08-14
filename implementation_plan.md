# Kind Heart Foundation Website

This plan details the setup and development of a premium, modern static website for the "Kind Heart Foundation" NGO using your requested tech stack and design aesthetic: **Next.js, Tailwind CSS, and GSAP**.

## User Review Required

> [!IMPORTANT]  
> Please review this updated plan. Once approved, I will begin initializing the project and coding the layout.

## Design Aesthetic (Apple / Stripe Style)
- **Vibe:** Clean, neutral, professional, and trustworthy.
- **Colors:** Light mode by default. Neutral backgrounds (whites, very light grays) with high-contrast text and perhaps a single subtle accent color for primary actions.
- **Typography:** Modern, clean sans-serif (e.g., Inter or a similar system font).
- **Layout:** Generous whitespace, clear hierarchy, and smooth micro-interactions.

## Proposed Architecture & Changes

The website will be built as a Single Page-style scrolling site structured with the Next.js App Router.

### 1. Project Initialization
- Initialize a fresh **Next.js** project in the current directory.
- Configure **Tailwind CSS** during the Next.js setup (using `npm` for optimal performance in Next.js).
- Install **GSAP** via `npm` for all motion and scroll triggers.

### 2. Core Layout & Styling
- **Navigation Bar**: A minimalist, sticky header with a placeholder for your logo and clean links to page sections (Home, About, Services, Contact). Will include a subtle backdrop-blur (glassmorphism) if appropriate for the Apple style.
- **Footer**: A neat footer with basic NGO contact info and copyright.

### 3. Homepage Sections
- **Hero Section**: A high-impact, clean banner.
  - *GSAP Animation*: A sophisticated, smooth text reveal for "Kind Heart Foundation".
- **About Us**: A brief, breathable section describing the NGO.
  - *GSAP Animation*: Elements gently fading in and shifting slightly upward as the user scrolls into view.
- **Services/What We Do**: A grid layout showcasing the services provided, using clean, lightly-shadowed cards with plenty of padding.
  - *GSAP Animation*: Staggered entry animations for the service cards.
- **Call to Action / Contact**: A beautifully simple section encouraging people to get involved.

## Open Questions

> [!NOTE]
> - Since we are using an Apple/Stripe aesthetic, I will default to a minimalist black/white/gray palette with a subtle blue or green accent. Let me know if you have a specific accent color in mind!

## Verification Plan

### Automated Steps
- I will run the project initialization commands and ensure Next.js, Tailwind, and GSAP are installed properly.
- I will start the development server to verify the build compiles without errors.

### Manual Verification
- After the initial build, you can view the layout in your browser to experience the whitespace and GSAP animations.
- We will iteratively replace the placeholder content and add the logo when you provide them.
