# Aquinas Boxing Program Homepage

Official website for the Aquinas Institute Boxing Program and Mission Bouts.

## Features

- **Hero Banner**: Full-screen hero with AI-generated boxing background and CTAs
- **Streaming Section**: Embedded Hudl page for live and on-demand match viewing
- **About Section**: Program description and Mission Bouts information
- **Events Calendar**: Upcoming events with modern grid layout
- **Swag Store**: Placeholder product cards ready for e-commerce integration
- **Footer**: Navigation links and social media integration

## Tech Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework with custom Aquinas colors (maroon & gold)
- **Responsive Design**: Mobile-first approach with accessibility in mind

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
aquinas-boxing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page integrating all components
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Hero.tsx            # Hero banner component
│   ├── Streaming.tsx       # Hudl streaming embed
│   ├── About.tsx           # About program section
│   ├── Events.tsx          # Events calendar
│   ├── SwagStore.tsx       # Merchandise store
│   └── Footer.tsx          # Site footer
├── public/                 # Static assets (add images here)
└── tailwind.config.ts      # Tailwind configuration with custom colors
```

## Customization

### Colors

The project uses custom Aquinas colors defined in `tailwind.config.ts`:
- **Maroon**: Primary brand color (maroon-50 to maroon-950)
- **Gold**: Accent color (gold-50 to gold-950)

### Hero Background Image

The Hero component currently uses a placeholder boxing image from Unsplash. To use your own image:

1. Add your image to the `public/` folder (e.g., `public/hero-bg.jpg`)
2. Update the `backgroundImage` in `components/Hero.tsx`:

```tsx
backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('/hero-bg.jpg')`
```

### Content Updates

All content is currently hardcoded for easy editing:
- **Hero text**: Edit in `components/Hero.tsx`
- **About section**: Edit in `components/About.tsx`
- **Events**: Update the `events` array in `components/Events.tsx`
- **Products**: Update the `products` array in `components/SwagStore.tsx`

### Future Enhancements

- Connect to a CMS (Contentful, Sanity, etc.) for dynamic content
- Integrate e-commerce platform (Shopify, Stripe) for swag store
- Add event registration system
- Implement Google Calendar integration for events
- Add photo gallery section

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

```bash
npm run build
npm start
```

## Contact

For questions or support, contact the Aquinas Institute Boxing Program.

## License

© 2025 Aquinas Institute Boxing Program. All rights reserved.
