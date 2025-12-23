# Component Architecture Map

## Page Structure

```
app/page.tsx (Main Homepage)
│
├─► Hero Component
│   └─ Full-screen banner with background image
│      ├─ Headline: "Aquinas Boxing"
│      ├─ Tagline: "Tradition. Discipline. Heart."
│      ├─ CTA Button: "Watch Live (Hudl)" → scrolls to #streaming
│      └─ CTA Button: "Shop Swag" → scrolls to #swag-store
│
├─► About Component
│   └─ Two-column layout
│      ├─ LEFT: Boxing Program description
│      │  └─ Core values and program overview
│      └─ RIGHT: Mission Bouts info
│         └─ History, purpose, and statistics
│
├─► Streaming Component
│   └─ Hudl video embed section
│      ├─ Responsive iframe (16:9 aspect ratio)
│      ├─ Embedded page: Aquinas Institute Hudl
│      └─ Direct link to open full screen
│
├─► Events Component
│   └─ Events calendar grid
│      ├─ 4 Placeholder event cards
│      │  ├─ Event title, date, time, location
│      │  ├─ Event type badge
│      │  └─ Status badge (Upcoming/Registration Open)
│      └─ Calendar subscription CTA
│
├─► SwagStore Component
│   └─ Product showcase grid
│      ├─ 6 Placeholder product cards
│      │  ├─ Product image (Unsplash)
│      │  ├─ Name, description, price
│      │  ├─ Optional badge (Best Seller/New/Limited)
│      │  └─ "View" button
│      └─ Custom order CTA section
│
└─► Footer Component
    └─ Site footer
       ├─ Brand info & description
       ├─ Social media icons
       │  ├─ Facebook (AquinasMissionBouts)
       │  ├─ Instagram (placeholder)
       │  └─ Twitter (placeholder)
       ├─ Quick Links navigation
       ├─ Contact information
       │  ├─ Address
       │  ├─ Email
       │  └─ Phone
       └─ Copyright & legal links
```

## Component Files & Responsibilities

### 1. Hero.tsx
**Purpose**: First impression, branding, main CTAs
**Key Features**:
- Background image with overlay
- Responsive typography
- Scroll-to-section navigation
- Animated scroll indicator
**Customization**: Hero text, background image URL

---

### 2. About.tsx
**Purpose**: Program information and mission
**Key Features**:
- Dual-panel layout (program + Mission Bouts)
- Statistics showcase
- Gradient background cards
- Join team CTA
**Customization**: Descriptions, statistics, CTA link

---

### 3. Streaming.tsx
**Purpose**: Live/recorded match viewing
**Key Features**:
- Responsive iframe embed
- 16:9 aspect ratio maintained
- External link for full screen
**Customization**: Hudl URL (currently hardcoded)

---

### 4. Events.tsx
**Purpose**: Showcase upcoming events
**Key Features**:
- Grid of event cards
- Date/time/location display
- Event type badges
- Status indicators
**Customization**: Events array (lines 8-41)
**Future**: Connect to Google Calendar API or CMS

---

### 5. SwagStore.tsx
**Purpose**: Merchandise showcase
**Key Features**:
- Product grid with hover effects
- Image, name, price, description
- Badge system (Best Seller, New, Limited)
- Custom order CTA
**Customization**: Products array (lines 8-53)
**Future**: E-commerce integration (Shopify, Stripe)

---

### 6. Footer.tsx
**Purpose**: Site navigation and contact
**Key Features**:
- Social media links
- Quick navigation
- Contact information
- Copyright and legal links
**Customization**: Social URLs, contact info, navigation links

---

## Shared Features Across All Components

✅ **Responsive Design**: Mobile-first approach with Tailwind breakpoints
✅ **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
✅ **Brand Consistency**: Maroon and gold color scheme throughout
✅ **Performance**: Optimized images, minimal JavaScript
✅ **Transitions**: Smooth hover effects and animations

## Data Flow

```
Static Content (Current)
└─ Hardcoded arrays in component files
   └─ Easy to edit for quick updates

Future: Dynamic Content
└─ Headless CMS (Contentful/Sanity)
   └─ API calls to fetch content
      └─ Real-time updates without code changes
```

## Styling Architecture

```
tailwind.config.ts
└─ Custom color definitions
   ├─ maroon (50-950)
   └─ gold (50-950)

app/globals.css
└─ Tailwind directives
   ├─ @tailwind base
   ├─ @tailwind components
   └─ @tailwind utilities

Component Files
└─ Inline Tailwind classes
   └─ Responsive modifiers (sm:, md:, lg:)
```

## Navigation Structure

```
Smooth Scroll Navigation
├─ #hero (Hero section)
├─ #about (About section)
├─ #streaming (Streaming section)
├─ #events (Events section)
├─ #swag-store (Swag Store section)
└─ #contact (Footer section)
```

## File Size Overview

- **Hero.tsx**: ~2KB (lightweight, image-focused)
- **About.tsx**: ~4KB (content-heavy)
- **Streaming.tsx**: ~2KB (simple iframe embed)
- **Events.tsx**: ~5KB (data-driven with map function)
- **SwagStore.tsx**: ~5KB (product grid with cards)
- **Footer.tsx**: ~5KB (comprehensive footer with links)

**Total Component Size**: ~23KB (pre-compiled)

---

## Component Dependencies

All components are **self-contained** with no external dependencies beyond:
- React (included with Next.js)
- Tailwind CSS (for styling)
- Next.js Image component (not currently used, but available)

No third-party libraries required for current functionality.
