# Gig Economy Portfolio Template

A reusable React + TypeScript + TailwindCSS website template for local service businesses in the gig economy.

Default preset is **Lawn Mower / Lawn Care**, with built-in switches for:

- Plumber
- Nail Salon
- Cleaning Service
- Electrician
- Handyman

## Features

- Industry preset switcher (changes copy, services, and accent colors)
- Modern one-page portfolio layout
- Sections: Hero, Services, Pricing, Gallery, Testimonials, FAQ, Contact
- Mobile responsive design
- Reusable data-driven structure

## Local demo (for showing customers)

```bash
npm install
npm run dev
```

Then open the localhost link shown in terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Customize

Edit `src/data/presets.ts` to update business names, services, pricing, colors, testimonials, and FAQs.

## Deploy options

- Vercel
- Netlify
- GitHub Pages (with extra config)
