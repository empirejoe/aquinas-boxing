# Setup Instructions

## Fixing NPM Permission Issue

If you encounter an npm cache permission error, run this command in your terminal:

```bash
sudo chown -R $(whoami) "/Users/josephsirianni/.npm"
```

Then navigate to the project directory and install dependencies:

```bash
cd /Users/josephsirianni/Desktop/aquinas-boxing
npm install
```

## Running the Development Server

After dependencies are installed:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Quick Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## First Time Setup Checklist

1. Fix npm permissions (see command above)
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:3000
5. Customize content in component files
6. Replace hero background image in `components/Hero.tsx`
7. Update contact information in `components/Footer.tsx`
