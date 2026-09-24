# Deploying Corebridge on Render

This guide outlines how to deploy the full Corebridge platform (React SPA Frontend + FastAPI Python Backend + Managed PostgreSQL) on [Render](https://render.com).

---

## Architecture Overview

Corebridge is architected for high-performance, cost-effective cloud deployment on Render:

| Component | Render Service Type | Plan | Description |
| :--- | :--- | :--- | :--- |
| **Frontend** | Static Site | **Free** | React 18 + Vite SPA served via Render's Global CDN with automatic SPA client-side routing. |
| **Backend** | Web Service | **Free** / Starter | FastAPI + Uvicorn Python runtime exposing `/api/v1` with automatic table creation, seeding, rate limiting, and CORS. |
| **Database** | PostgreSQL | **Free** / Starter | Managed PostgreSQL with automatic schema migration and fallback to SQLite if offline. |

---

## Method 1: Automated Blueprint Deployment (Recommended)

The repository includes a ready-to-use [`render.yaml`](./render.yaml) Infrastructure-as-Code Blueprint.

### Step 1: Push Code to GitHub or GitLab
Create a new repository on your GitHub or GitLab account, then run:

```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

### Step 2: Connect Blueprint on Render
1. Log in to [Render Dashboard](https://dashboard.render.com).
2. Click **New +** in the top navigation and select **Blueprint**.
3. Connect your GitHub/GitLab account and select your repository.
4. Render will detect `render.yaml` and display the resources to create:
   - `corebridge-backend` (Web Service)
   - `corebridge-frontend` (Static Site)
   - `corebridge-postgres` (PostgreSQL Database)
5. Click **Apply**. Render will automatically provision the database, build the backend, and deploy the frontend.

---

## Method 2: Manual Dashboard Deployment

If you prefer to configure each service individually via the Render UI:

### 1. Database (PostgreSQL)
1. In Render Dashboard, click **New +** -> **PostgreSQL**.
2. **Name**: `corebridge-postgres`
3. **Database**: `corebridge`
4. **User**: `corebridge_user`
5. **Plan**: `Free`
6. Click **Create Database**. Once created, copy the **Internal Database URL**.

---

### 2. Backend (FastAPI Web Service)
1. Click **New +** -> **Web Service**.
2. Connect your Git repository.
3. Configure the service settings:
   - **Name**: `corebridge-backend`
   - **Region**: Same region as database (e.g. Frankfurt or Oregon)
   - **Branch**: `main`
   - **Root Directory**: `backend`
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install --upgrade pip && pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
   - **Plan**: `Free`
4. Add **Environment Variables**:
   - `PYTHON_VERSION`: `3.11.9`
   - `DATABASE_URL`: Paste the Internal Database URL from Step 1 (or leave blank to use automatic local SQLite)
   - `SECRET_KEY`: Generate a random string or click Generate
   - `FIRST_SUPERUSER_EMAIL`: `admin@corebridge.co.zw`
   - `FIRST_SUPERUSER_PASSWORD`: `CorebridgeAdmin2025!`
   - `ADMIN_NOTIFICATION_EMAIL`: `info@corebridge.co.zw`
   - `RATE_LIMIT_ENABLED`: `true`
   - `BACKEND_CORS_ORIGINS`: `http://localhost:5173,https://corebridge-frontend.onrender.com`
5. Click **Create Web Service**.
6. Note the URL assigned by Render, e.g.: `https://corebridge-backend.onrender.com`.

---

### 3. Frontend (React Static Site)
1. Click **New +** -> **Static Site**.
2. Connect your Git repository.
3. Configure the service settings:
   - **Name**: `corebridge-frontend`
   - **Branch**: `main`
   - **Root Directory**: `.` (leave blank or enter `.`)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Add **Environment Variables**:
   - `VITE_API_BASE_URL`: `https://corebridge-backend.onrender.com/api/v1` *(replace with your actual backend URL)*
5. Configure **Redirects / Rewrites** (under Settings -> Redirects/Rewrites):
   - **Rule 1 (API Proxy)**:
     - **Type**: `Rewrite`
     - **Source**: `/api/*`
     - **Destination**: `https://corebridge-backend.onrender.com/api/*`
   - **Rule 2 (SPA Fallback)**:
     - **Type**: `Rewrite`
     - **Source**: `/*`
     - **Destination**: `/index.html`
6. Click **Create Static Site**.

---

## Verifying the Deployment

### 1. Healthcheck
Visit: `https://<your-backend-url>/api/v1/health`
Expected response:
```json
{
  "status": "healthy",
  "database": "connected",
  "version": "1.1.0"
}
```

### 2. Admin Portal
1. Open `https://<your-frontend-url>/admin/login`
2. Log in with:
   - **Email**: `admin@corebridge.co.zw`
   - **Password**: `CorebridgeAdmin2025!`
3. Verify access to:
   - Operational Audits pipeline
   - Contact inquiries & lead management
   - Service & Case Study CMS
   - Settings & System Status

---

## Custom Domain Setup (Optional)
To attach a custom domain such as `corebridge.co.zw`:
1. In Render Dashboard, open `corebridge-frontend` -> **Settings** -> **Custom Domains**.
2. Add `corebridge.co.zw` and `www.corebridge.co.zw`.
3. Add the DNS CNAME/A records provided by Render in your DNS registrar.
4. Add `https://corebridge.co.zw` to `BACKEND_CORS_ORIGINS` in the backend service.
