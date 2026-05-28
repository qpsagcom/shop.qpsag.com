# Railway Deployment – QPS Shop

## Architektur

```
GitHub (qpsagcom/shop.qpsag.com)
        │
        ├── Railway Service: qps-backend  (Port 9000)
        │     └── apps/backend  →  api.shop.qpsag.com
        │
        ├── Railway Service: qps-storefront  (Port 8000)
        │     └── apps/storefront  →  shop.qpsag.com
        │
        └── Railway Service: PostgreSQL (bereits vorhanden)
              └── zephyr.proxy.rlwy.net:52599
```

---

## Schritt 1 – Railway-Services erstellen

### 1a) Backend-Service

Railway Dashboard → New Service → GitHub Repo → `qpsagcom/shop.qpsag.com`

**Settings → General:**
- Service Name: `qps-backend`
- Root Directory: *(leer lassen – Monorepo-Root)*

**Settings → Build:**
- Build Command: `pnpm install && pnpm backend:build`

**Settings → Deploy:**
- Start Command: `pnpm backend:deploy`
- Healthcheck Path: `/health`

**Settings → Networking:**
- Generate Domain: z.B. `qps-backend.up.railway.app`
- Custom Domain: `api.shop.qpsag.com` (nach DNS-Setup)
- Port: `9000`

---

### 1b) Storefront-Service

Railway Dashboard → New Service → GitHub Repo → `qpsagcom/shop.qpsag.com`

**Settings → General:**
- Service Name: `qps-storefront`
- Root Directory: *(leer lassen – Monorepo-Root)*

**Settings → Build:**
- Build Command: `pnpm install && pnpm storefront:build`

**Settings → Deploy:**
- Start Command: `pnpm storefront:start`
- Healthcheck Path: `/`

**Settings → Networking:**
- Generate Domain: z.B. `qps-storefront.up.railway.app`
- Custom Domain: `shop.qpsag.com` (nach DNS-Setup)
- Port: `8000`

---

## Schritt 2 – Umgebungsvariablen setzen

### Backend-Service (qps-backend) – Railway Variables

| Variable | Wert | Beschreibung |
|----------|------|--------------|
| `DATABASE_URL` | `postgresql://...` | Railway PostgreSQL Connection String |
| `JWT_SECRET` | *(starkes Zufalls-Secret)* | `node -e "require('crypto').randomBytes(32).toString('hex')"` |
| `COOKIE_SECRET` | *(starkes Zufalls-Secret)* | Wie oben |
| `STORE_CORS` | `https://shop.qpsag.com,https://qps-storefront.up.railway.app` | Storefront-URLs |
| `ADMIN_CORS` | `https://api.shop.qpsag.com,https://qps-backend.up.railway.app` | Admin-URLs |
| `AUTH_CORS` | Kombination von STORE + ADMIN CORS | Alle erlaubten Quellen |
| `STRIPE_API_KEY` | `sk_live_...` | Stripe Secret Key (aus Stripe Dashboard) |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` | Stripe Webhook Secret |
| `NODE_ENV` | `production` | Produktionsmodus |

### Storefront-Service (qps-storefront) – Railway Variables

| Variable | Wert | Beschreibung |
|----------|------|--------------|
| `NEXT_PUBLIC_MEDUSA_BACKEND_URL` | `https://api.shop.qpsag.com` | Backend-URL (oder Railway-Domain) |
| `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` | `pk_...` | Aus Medusa Admin → Settings → API Keys |
| `NEXT_PUBLIC_DEFAULT_REGION` | `ch` | Schweiz als Standard |
| `NEXT_PUBLIC_BASE_URL` | `https://shop.qpsag.com` | Storefront-URL |
| `NEXT_PUBLIC_STRIPE_KEY` | `pk_live_...` | Stripe Publishable Key (öffentlich!) |
| `NODE_ENV` | `production` | Produktionsmodus |

---

## Schritt 3 – Reihenfolge des ersten Deployments

1. **Backend zuerst deployen** (läuft `db:migrate` automatisch beim Start)
2. **Publishable API Key erstellen:**
   - Backend-URL aufrufen: `https://api.shop.qpsag.com/app`
   - Login mit `arturmarkus@gmail.com`
   - Settings → API Keys → Create Publishable Key
   - Key in Storefront-Service Variable `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` eintragen
3. **Storefront deployen** (nach Key-Eintrag → Redeploy auslösen)

---

## Schritt 4 – DNS-Einstellungen (bei eurem Domain-Provider)

```
shop.qpsag.com      CNAME → qps-storefront.up.railway.app
api.shop.qpsag.com  CNAME → qps-backend.up.railway.app
```

Railway stellt automatisch HTTPS/TLS-Zertifikate aus (Let's Encrypt).

---

## Schritt 5 – Stripe Webhook konfigurieren

Stripe Dashboard → Developers → Webhooks → Add Endpoint:
- URL: `https://api.shop.qpsag.com/hooks/payment/stripe`
- Events: `payment_intent.succeeded`, `payment_intent.payment_failed`
- Webhook Secret → in Railway Backend-Variable `STRIPE_WEBHOOK_SECRET` eintragen

---

## Schritt 6 – Schweiz-Region im Medusa Admin

Nach dem ersten Login im Admin:
1. Settings → Regions → Add Region
   - Name: `Schweiz`
   - Currency: `CHF`
   - Countries: `Switzerland (CH)`
   - Payment Providers: `Stripe` (erscheint nach Konfiguration)
2. Settings → API Keys → Create Publishable Key → diesem Key die Region zuweisen

---

## Lokale Entwicklung

```bash
# Backend starten
cd apps/backend && pnpm dev

# Storefront starten (neues Terminal)
cd apps/storefront && pnpm dev

# Beide zusammen (Turbo)
pnpm dev
```

Backend: http://localhost:9000/app
Storefront: http://localhost:8000
