# KI Analysix System website

Corporate website for KI Analysix System, covering integrated security, networking, smart living, hospitality automation, audiovisual, safety, software, and power solutions.

## GitHub Pages

The included GitHub Actions workflow builds and publishes the site whenever the `main` branch changes. In the repository settings, set **Pages → Source** to **GitHub Actions**.

## Local development

```bash
npm ci
npm run dev
```

The blog lives under `/blog`, with individual articles in `app/blog/<article-slug>/page.tsx`.
