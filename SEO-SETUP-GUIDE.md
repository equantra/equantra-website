# Equantra — SEO & Analytics Setup Guide

## 1. Google Analytics Setup

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **Admin** (gear icon) → **Create Property**
3. Property name: `Equantra Website`
4. Set timezone to your preference, currency to **USD**
5. Choose **Web** as the platform
6. Enter `https://equantra.in` as the website URL
7. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)
8. Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

9. Redeploy the site (the analytics script is already wired in)

### Verifying it works

- Open your site in a browser
- Go to Google Analytics → **Realtime** report
- You should see yourself as an active user

---

## 2. Google Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **Add Property**
3. Choose **URL prefix** and enter `https://equantra.in`
4. Select **HTML tag** as the verification method
5. You'll see a meta tag like:
   ```html
   <meta name="google-site-verification" content="abc123xyz..." />
   ```
6. Copy only the `content` value (`abc123xyz...`)
7. Add it to your `.env.local`:

```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123xyz...
```

8. Redeploy the site
9. Go back to Search Console and click **Verify**

### Submit your sitemap

1. In Search Console, go to **Sitemaps** (left sidebar)
2. Enter `https://equantra.in/sitemap.xml` and click **Submit**
3. Google will start crawling and indexing your pages

### Request indexing for key pages

After sitemap submission, go to **URL Inspection** and manually request indexing for:

- `https://equantra.in/`
- `https://equantra.in/services`
- `https://equantra.in/about`
- `https://equantra.in/contact`

This speeds up initial indexing from days to hours.

---

## 3. Create a Proper OG Image

Social sharing images (Open Graph) should be PNG or JPG, not SVG. Current setup uses `logo-full.svg` as a placeholder.

1. Create a **1200 x 630 px** image with:
   - Equantra logo
   - Tagline: "Custom Software Development Company"
   - Brand colors (dark background, violet accent)
2. Save as `public/og-image.png`
3. Update references in `app/layout.tsx`:
   - Change `url: "/logo-full.svg"` to `url: "/og-image.png"` in the `openGraph.images` array
   - Change `images: ["/logo-full.svg"]` to `images: ["/og-image.png"]` in the `twitter` section

---

## 4. Environment Variables Summary

Your `.env.local` should look like this when complete:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

> **Important:** Never commit `.env.local` to git. The `.env.example` file in the repo shows the required variables without values.

If deploying on **Vercel**, add these same variables in:
**Project Settings → Environment Variables**

---

## 5. Google Business Profile (Optional but Recommended)

If you want to appear in Google's local/business results:

1. Go to [business.google.com](https://business.google.com)
2. Create a profile for Equantra
3. Set category to **Software Company** or **IT Consulting**
4. Add your website URL, services, and business hours
5. This creates a Knowledge Panel in search results

---

## 6. Ongoing SEO Tasks

### Content Marketing (Highest Impact)

Starting a blog is the single most effective long-term SEO strategy:

- Target long-tail keywords like "how to hire a dedicated development team" or "fractional CTO vs full-time CTO"
- Publish 2-4 articles per month
- Each article should be 1,500+ words with internal links to your service pages
- Add a `/blog` route to the site when ready

### Backlink Building

- Get listed on software development directories (Clutch, GoodFirms, DesignRush)
- Write guest posts on tech blogs
- Get featured on startup/tech podcasts
- Create case studies that clients can link back to

### Monitor & Iterate

- Check **Search Console** weekly for:
  - Crawl errors
  - Search queries driving impressions
  - Pages not yet indexed
- Check **Google Analytics** for:
  - Bounce rate per page (aim for < 60%)
  - Average session duration
  - Top landing pages
  - Traffic sources
- Check **Core Web Vitals** in Search Console or via Vercel Speed Insights:
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1

---

## What's Already Implemented

| Feature | Status |
|---------|--------|
| Google Analytics (gtag.js) | Ready — needs env var |
| Google Search Console verification | Ready — needs env var |
| Vercel Analytics | Installed |
| Vercel Speed Insights (Core Web Vitals) | Installed |
| Security headers (HSTS, X-Frame-Options, etc.) | Done |
| Cache-Control for static assets | Done |
| `X-Powered-By` header removed | Done |
| Per-page SEO metadata (title, description, keywords) | Done |
| Canonical URLs on all pages | Done |
| Open Graph + Twitter Card meta tags | Done |
| JSON-LD structured data (Organization) | Done — layout |
| JSON-LD structured data (Services ItemList) | Done — /services |
| JSON-LD structured data (AboutPage) | Done — /about |
| JSON-LD structured data (ContactPage) | Done — /contact |
| robots.txt | Done |
| sitemap.xml | Done |
| Bundle optimization (removed unused packages) | Done |
