# Deploying Corebridge Static Website

Corebridge is built as a fast, high-performance static Single Page Application (React 18 + Vite) designed for global edge CDN distribution with zero server overhead, zero database maintenance, and lightning-fast load times.

---

## Deployment Architecture

| Component | Architecture | Hosting Target | Cost |
| :--- | :--- | :--- | :--- |
| **Frontend** | React 18 + Vite SPA | Render Static Site / Vercel / Netlify / Cloudflare Pages | **Free** |
| **Data & Content** | Pre-bundled static data (`src/data/initialData.js`) | Included in build bundle | **Free** |
| **Lead Intake** | Direct WhatsApp API (`+263 780 787 214`) + Email (`info@corebridge.co.zw`) | LocalStorage buffer + instant links | **Free** |

---

## Method 1: Deploy on Render (Recommended)

The repository includes a ready-to-use [`render.yaml`](./render.yaml) Blueprint configured specifically for static site deployment.

### Step 1: Push Code to GitHub / GitLab
```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

### Step 2: Connect Blueprint on Render
1. Log in to [Render Dashboard](https://dashboard.render.com).
2. Click **New +** > **Blueprint**.
3. Connect your repository.
4. Render will read `render.yaml` and provision:
   - **`corebridge-frontend`** (Static Site)
5. Click **Apply**. Render will build and deploy the site across its global CDN.

---

## Method 2: Manual Static Site on Render

If creating manually via the Render UI:
1. Click **New +** > **Static Site**.
2. Connect your Git repository.
3. Set the following settings:
   - **Name**: `corebridge-frontend`
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Add **Redirects / Rewrites** (under **Settings** > **Redirects/Rewrites**):
   - **Type**: `Rewrite`
   - **Source**: `/*`
   - **Destination**: `/index.html`
5. Click **Create Static Site**.

---

## Method 3: Deploy to Vercel, Netlify, or Cloudflare Pages

Because Corebridge is a pure static site, it can be deployed to any static host with one click:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: `18.x` or `20.x`

---

## Custom Domain Setup (Optional)

To link `corebridge.co.zw`:
1. In Render Dashboard, navigate to your static site > **Settings** > **Custom Domains**.
2. Add `corebridge.co.zw` and `www.corebridge.co.zw`.
3. Add the DNS CNAME/A records provided by Render at your domain registrar.
4. Render will automatically issue and renew a free Let's Encrypt SSL/TLS certificate.
