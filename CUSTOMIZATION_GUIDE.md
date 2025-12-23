# Customization Guide

## Quick Edits for Common Changes

### 1. Hero Section Text

**File**: `components/Hero.tsx`

```tsx
// Line 14-16: Main headline
<h1>Aquinas Boxing</h1>

// Line 19-21: Tagline
<p>Tradition. Discipline. Heart.</p>

// Line 24-26: Description
<p>Home of the Aquinas Institute Boxing Program...</p>
```

### 2. Hero Background Image

**Option A - Use Your Own Image**
1. Add your image to `/public/hero-bg.jpg`
2. Update line 11 in `components/Hero.tsx`:
```tsx
backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('/hero-bg.jpg')`
```

**Option B - Use Different Stock Image**
Replace the Unsplash URL on line 11

### 3. Update Events

**File**: `components/Events.tsx` (lines 8-41)

```tsx
const events = [
  {
    id: 1,
    title: "Your Event Name",
    date: "March 15, 2026",
    time: "7:00 PM",
    location: "Venue Name",
    type: "Championship", // or "Training", "Tryouts", "Special Event"
    status: "upcoming", // or "registration-open"
  },
  // Add more events...
];
```

### 4. Update Products in Swag Store

**File**: `components/SwagStore.tsx` (lines 8-53)

```tsx
const products = [
  {
    id: 1,
    name: "Product Name",
    price: "$25.00",
    image: "https://your-image-url.com/image.jpg", // or "/product-1.jpg" if in public folder
    description: "Product description",
    badge: "Best Seller", // or null for no badge
  },
  // Add more products...
];
```

### 5. Update Contact Information

**File**: `components/Footer.tsx`

- **Email**: Line 80 - Change `boxing@aquinas.org`
- **Phone**: Line 88 - Change `(555) 123-4567`
- **Address**: Lines 68-72

### 6. Change Colors

**File**: `tailwind.config.ts`

Current theme uses:
- **maroon-800**: Primary brand color (dark maroon)
- **gold-500**: Accent color (bright gold)

To change throughout the site, modify the color values in the config or do a find-replace:
- Find: `maroon-800` → Replace with your color (e.g., `blue-800`)
- Find: `gold-500` → Replace with your color (e.g., `yellow-500`)

### 7. Social Media Links

**File**: `components/Footer.tsx` (lines 20-60)

Update the `href` values:
- Facebook: Line 26
- Instagram: Line 36
- Twitter/X: Line 46

### 8. About Section Content

**File**: `components/About.tsx`

- **Program Description**: Lines 28-41
- **Mission Bouts Description**: Lines 49-60
- **Statistics**: Lines 65-75

### 9. Meta Tags (SEO)

**File**: `app/layout.tsx` (lines 5-8)

```tsx
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description...",
};
```

### 10. Add More Sections

To add a new section:

1. Create a new component in `/components/YourSection.tsx`
2. Import it in `app/page.tsx`
3. Add it to the component stack (line 14-20)

## Color Reference

### Maroon Scale
- `maroon-50` to `maroon-950` (lightest to darkest)
- Commonly used: `maroon-800`, `maroon-900`

### Gold Scale  
- `gold-50` to `gold-950` (lightest to darkest)
- Commonly used: `gold-400`, `gold-500`

### Boxing Theme Colors
- Red: `red-600` (used for CTA buttons)
- Black: `gray-900` (used for text and backgrounds)

## Responsive Breakpoints

- `sm:` - 640px and up (mobile landscape)
- `md:` - 768px and up (tablets)
- `lg:` - 1024px and up (desktops)
- `xl:` - 1280px and up (large desktops)

All components are mobile-first and responsive!
