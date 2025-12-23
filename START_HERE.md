# 🥊 Aquinas Boxing Program - START HERE

## Quick Start (3 Steps)

### Step 1: Fix NPM Permissions
Open Terminal and run:
```bash
sudo chown -R $(whoami) "/Users/josephsirianni/.npm"
```
Enter your password when prompted.

### Step 2: Install & Run
```bash
cd /Users/josephsirianni/Desktop/aquinas-boxing
npm install
npm run dev
```

### Step 3: Open Your Browser
Go to: **http://localhost:3000**

---

## 🎉 You're Done!

Your website is now running locally. You should see:
- ✅ Hero banner with "Aquinas Boxing - Tradition. Discipline. Heart."
- ✅ About section with program info
- ✅ Hudl streaming embed
- ✅ Events calendar
- ✅ Swag store with product cards
- ✅ Footer with social links

---

## 📝 First Customizations

### 1. Update Contact Info (2 minutes)
**File**: `components/Footer.tsx`
- Line 80: Change email
- Line 88: Change phone number

### 2. Add Real Events (5 minutes)
**File**: `components/Events.tsx`
- Lines 8-41: Edit the events array
- Add your actual event dates, times, and locations

### 3. Update About Text (5 minutes)
**File**: `components/About.tsx`
- Lines 28-41: Program description
- Lines 49-60: Mission Bouts info

### 4. Add Your Hero Image (2 minutes)
1. Put your image in the `public/` folder as `hero-bg.jpg`
2. **File**: `components/Hero.tsx`, Line 11:
   ```tsx
   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url('/hero-bg.jpg')`
   ```

---

## 📚 Documentation

- **[README.md](README.md)** - Full project overview
- **[CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md)** - Detailed customization instructions
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Complete feature list and architecture
- **[SETUP.md](SETUP.md)** - Setup troubleshooting

---

## 🚀 Deployment (When Ready)

### Deploy to Vercel (Free, Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"
6. Done! Your site is live at `your-project.vercel.app`

---

## ❓ Need Help?

- **Next.js Issues**: Check [Next.js Docs](https://nextjs.org/docs)
- **Tailwind Styling**: Check [Tailwind Docs](https://tailwindcss.com/docs)
- **Git Help**: Run `git status` to see changes

---

## 🎯 Current Status

✅ **All Components Built**
- Hero, About, Streaming, Events, SwagStore, Footer

✅ **Responsive Design**
- Works on mobile, tablet, and desktop

✅ **Ready for Content**
- All text is easily editable

✅ **Version Controlled**
- Git repository initialized with 3 clear commits

⏳ **Next**: Install dependencies and run!

---

**Built with**: Next.js 15 + TypeScript + Tailwind CSS
**Color Theme**: Aquinas Maroon (#8e1d45) & Gold (#eab308)
**Social**: [Facebook - Mission Bouts](https://www.facebook.com/AquinasMissionBouts)
