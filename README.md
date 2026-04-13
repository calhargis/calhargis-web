# calhargis-web

Personal portfolio site for Cal Hargis, built with Astro and styled with a synthwave-inspired visual system.

## Local Development

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run check
```

## Deployment

The repo includes a GitHub Pages workflow that builds the Astro site and publishes the static `dist/` output.

By default:

- local development builds at `/`
- GitHub Actions builds with the `/calhargis-web` base path

If you later attach a custom domain or self-host the built files, update `SITE_URL` and `BASE_PATH` in the workflow or environment.
