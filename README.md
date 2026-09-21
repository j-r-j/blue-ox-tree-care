# Blue Ox Tree Care — Austin Marketing Site

Static marketing site for [Blue Ox Tree Care](https://www.blueoxtreecarellc.com/) — ISA certified arborists Travis & Lacy Berlin serving Austin, Round Rock, Bee Cave, and Lakeway, Texas.

Built with **Astro** (static output) and **Tailwind CSS**, deployed to **GitHub Pages** for preview.

## Stack

- [Astro 7](https://astro.build/) — static site generator
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- Minimal JavaScript (no client frameworks)
- JSON-LD structured data (LocalBusiness, Service, FAQPage)

## Local Development

**Requirements:** Node.js 22.12+

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

Build output is written to `dist/`.

Preview the production build locally (uses the same `/blue-ox-tree-care/` base path as GitHub Pages):

```bash
npm run preview
```

## Live preview (GitHub Pages)

**Preview URL:** [https://j-r-j.github.io/blue-ox-tree-care/](https://j-r-j.github.io/blue-ox-tree-care/)

The site is configured for project Pages with:

| Setting | Value |
|---------|-------|
| **Astro `site`** | `https://j-r-j.github.io` |
| **Astro `base`** | `/blue-ox-tree-care/` |
| **Build command** | `npm run build` |
| **Publish directory** | `dist` |
| **Node.js version** | 22 |

### One-time GitHub setup

1. In the repo → **Settings** → **Pages**, set **Build and deployment** → **Source** to **GitHub Actions**.
2. Merge to `main`. The [Deploy to GitHub Pages](.github/workflows/deploy-github-pages.yml) workflow runs on every push to `main` (and can be triggered manually).

No secrets are required — the workflow uses `actions/upload-pages-artifact` and `actions/deploy-pages` with `pages: write` and `id-token: write` permissions.

## Site Structure

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/services` | Services index |
| `/services/*` | Individual service pages |
| `/service-areas` | Service areas index |
| `/service-areas/*` | Austin, Round Rock, Bee Cave/Lakeway |
| `/about` | About Travis & Lacy Berlin |
| `/gallery` | Project gallery (placeholder) |
| `/faq` | Frequently asked questions |
| `/contact` | Contact & estimate request |

## NAP (Name, Address, Phone)

- **Phone:** (512) 749-8615
- **Email:** Owner@BlueOxTreeCareLLC.com
- **Service area:** Austin metro — no public street address (service-area business)

## License

Proprietary — © Blue Ox Tree Care LLC
