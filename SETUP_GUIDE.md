# Aquinas Boxing - Newsletter & Donations Setup Guide

This guide will help you activate the newsletter signup and donation features on your website.

## 🎯 Overview

The website now includes:
- **Newsletter Signup** (via Beehiiv) - Email, SMS, and physical mail collection
- **Donations System** (via Stripe) - One-time and recurring donations with fee coverage option

---

## 📧 Part 1: Beehiiv Newsletter Setup

### Step 1: Create Beehiiv Account
1. Go to https://beehiiv.com
2. Sign up for a free account
3. Create a new publication named "Aquinas Boxing"

### Step 2: Get Your API Credentials
1. In Beehiiv dashboard, go to **Settings** → **Publications**
2. Copy your **Publication ID**
3. Go to **Settings** → **API**
4. Create a new API key with "Write" permissions
5. Copy the API key

### Step 3: Add Credentials to Your Website
1. Create a file named `.env.local` in your project root:
   ```bash
   cd /Users/josephsirianni/Desktop/aquinas-boxing
   touch .env.local
   ```

2. Open `.env.local` and add:
   ```
   NEXT_PUBLIC_BEEHIIV_API_KEY=your_api_key_here
   ```

3. Open `components/Newsletter.tsx` and replace line 29:
   ```typescript
   const BEEHIIV_PUBLICATION_ID = 'YOUR_PUBLICATION_ID';
   ```
   With your actual publication ID:
   ```typescript
   const BEEHIIV_PUBLICATION_ID = 'pub_abc123...';
   ```

### Step 4: Configure Custom Fields in Beehiiv
1. Go to **Settings** → **Custom Fields**
2. Add these custom fields:
   - `phone` (type: Text)
   - `name` (type: Text)
   - `mailing_address` (type: Text)
   - `preferences` (type: JSON)

### Step 5: Export Contacts for Physical Mail
When you need to send physical mail:
1. Go to **Audience** → **Subscribers**
2. Filter by custom field `preferences.mail = true`
3. Export to CSV
4. The CSV will include names and mailing addresses

---

## 💳 Part 2: Stripe Donations Setup

### Step 1: Create Stripe Account
1. Go to https://stripe.com
2. Sign up for an account
3. Complete business verification (required for accepting payments)

### Step 2: Get API Keys
1. In Stripe Dashboard, go to **Developers** → **API keys**
2. You'll see two keys:
   - **Publishable key** (starts with `pk_test_...`)
   - **Secret key** (starts with `sk_test_...`)
3. Copy both keys

### Step 3: Install Stripe SDK
Run this command in your project directory:
```bash
cd /Users/josephsirianni/Desktop/aquinas-boxing
npm install stripe @stripe/stripe-js
```

### Step 4: Add Stripe Keys to Environment
Add to your `.env.local` file:
```
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
```

### Step 5: Activate Stripe Integration
1. Open `app/api/create-checkout-session/route.ts`
2. **Uncomment lines 13-48** (the Stripe integration code)
3. **Comment out or delete lines 51-62** (the temporary response)

### Step 6: Update Stripe Checkout Flow
1. Open `components/Donations.tsx`
2. Find line 38 (around the `handleDonate` function)
3. Replace lines 45-48 with:
   ```typescript
   const stripe = await import('@stripe/stripe-js').then(m =>
     m.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
   );

   if (stripe) {
     await stripe.redirectToCheckout({ sessionId });
   }
   ```

### Step 7: Configure Stripe Webhook (Optional but Recommended)
1. In Stripe Dashboard, go to **Developers** → **Webhooks**
2. Add endpoint: `https://your-domain.com/api/webhooks/stripe`
3. Select events to listen for:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.deleted`
4. Copy the webhook signing secret
5. Add to `.env.local`:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
   ```

### Step 8: Test Donations
Stripe provides test card numbers:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- Use any future expiry date (e.g., 12/34)
- Use any 3-digit CVC (e.g., 123)

---

## 🚀 Part 3: Deploy to Vercel

### Step 1: Add Environment Variables to Vercel
1. Go to https://vercel.com/dashboard
2. Select your `aquinas-boxing` project
3. Go to **Settings** → **Environment Variables**
4. Add all variables from your `.env.local`:
   - `NEXT_PUBLIC_BEEHIIV_API_KEY`
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_WEBHOOK_SECRET` (if using webhooks)

### Step 2: Redeploy
```bash
cd /Users/josephsirianni/Desktop/aquinas-boxing
git add .
git commit -m "Add newsletter and donation features

- Integrated Beehiiv for email/SMS/mail signups
- Added Stripe for one-time and recurring donations
- Implemented fee coverage option
- Created donation success page

🤖 Generated with Claude Code"

git push
```

Vercel will automatically redeploy with the new features!

---

## 🎨 Customization Options

### Change Donation Preset Amounts
Edit `components/Donations.tsx` line 18:
```typescript
const presetAmounts = [25, 50, 100, 250, 500]; // Change these amounts
```

### Modify Stripe Fee Calculation
The fee calculation (2.9% + $0.30) is on line 22 of `components/Donations.tsx`. Adjust if your Stripe fee structure is different.

### Update Success Page Branding
Edit `app/donation-success/page.tsx` to customize the thank you message and branding.

---

## 📊 Going Live with Real Payments

### Switch from Test Mode to Live Mode

1. **Stripe Dashboard**:
   - Toggle from "Test mode" to "Live mode" (top right)
   - Get your live API keys from **Developers** → **API keys**
   - Replace test keys in Vercel environment variables

2. **Beehiiv**:
   - Already in production mode (no test/live distinction)

3. **Test Everything**:
   - Make a small real donation ($1) to verify flow
   - Sign up for newsletter to test emails

---

## 🆘 Troubleshooting

### Newsletter signups aren't working
- Check that `NEXT_PUBLIC_BEEHIIV_API_KEY` is set in Vercel
- Verify Publication ID is correct in `Newsletter.tsx`
- Check browser console for error messages

### Donations fail to process
- Ensure Stripe SDK is installed: `npm list stripe`
- Verify both Stripe keys are in Vercel environment variables
- Check Stripe Dashboard logs for error details

### Environment variables not loading
- Restart dev server after changing `.env.local`
- Redeploy on Vercel after adding environment variables
- Ensure variable names start with `NEXT_PUBLIC_` for client-side access

---

## 📞 Support Contacts

- **Beehiiv Support**: https://beehiiv.com/support
- **Stripe Support**: https://support.stripe.com
- **Vercel Support**: https://vercel.com/support

---

## ✅ Checklist

- [ ] Created Beehiiv account and got API key
- [ ] Added Beehiiv credentials to `.env.local`
- [ ] Configured custom fields in Beehiiv
- [ ] Created Stripe account
- [ ] Installed Stripe SDK (`npm install stripe @stripe/stripe-js`)
- [ ] Added Stripe keys to `.env.local`
- [ ] Uncommented Stripe integration code
- [ ] Added all environment variables to Vercel
- [ ] Tested newsletter signup (dev)
- [ ] Tested donation flow (dev)
- [ ] Deployed to Vercel
- [ ] Tested newsletter signup (production)
- [ ] Tested donation with test card (production)
- [ ] Switched to live Stripe keys
- [ ] Made real test donation

---

**Need help?** All the code is commented and includes TODO markers where you need to add your credentials!
