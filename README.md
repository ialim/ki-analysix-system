# KI Analysix System website

Corporate website for KI Analysix System, covering integrated security,
networking, smart living, hospitality automation, AV, safety, software and
power solutions.

## Product image provenance

Shop product images are extracted from the supplier-provided
`TAOS CATALOG-WIRELESS SMART PRODUCTS` catalogue and matched by exact model
number and catalogue page. KI Analysix System confirmed supplier verbal consent
for marketing and resale use on 23 July 2026. The generated asset-to-source
mapping is retained in `public/products/source-manifest.json`.

## Deployment

The site is configured for Vercel. Import this repository into the linked
Vercel account with the default Next.js settings:

- Framework preset: Next.js
- Build command: `npm run build`
- Output directory: managed automatically by Vercel
- Production branch: `main`

Every push to `main` creates a production deployment. Pull requests receive
preview deployments.

## Local development

Install dependencies, start the development server, and open the local address:

```bash
npm ci
npm run dev
```

Requires Node.js `>=22.13.0`.
