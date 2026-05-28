# ─────────────────────────────────────────────────────────────────────────────
# Stage 1: Builder – alle Dependencies + medusa build
# ─────────────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

# pnpm aktivieren
RUN corepack enable && corepack prepare pnpm@10.26.0 --activate

# Workspace-Konfiguration (für Cache-Layer)
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml .npmrc ./
COPY apps/backend/package.json  apps/backend/package.json
COPY apps/storefront/package.json apps/storefront/package.json

# ALLE Dependencies installieren (inkl. devDeps – Vite, swc etc. für den Build)
RUN pnpm install --frozen-lockfile

# Backend-Quellcode kopieren
COPY apps/backend apps/backend

# medusa build → erstellt .medusa/server/ inkl. Admin-UI
RUN pnpm backend:build

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2: Runner – nur Produktions-Dependencies
# ─────────────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.26.0 --activate

# Workspace-Konfiguration
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml .npmrc ./
COPY apps/backend/package.json  apps/backend/package.json
COPY apps/storefront/package.json apps/storefront/package.json

# Nur Produktions-Dependencies (devDeps wie jest/typescript werden weggelassen)
ENV NODE_ENV=production
RUN pnpm install --frozen-lockfile

# Gebaute Artefakte aus Stage 1 übernehmen
COPY --from=builder /app/apps/backend/.medusa /app/apps/backend/.medusa

# JS-Wrapper für medusa-config (Node kann .ts nicht direkt laden)
COPY apps/backend/medusa-config.js apps/backend/medusa-config.js

EXPOSE 9000

# Migrations ausführen und Server starten
CMD ["pnpm", "backend:deploy"]
