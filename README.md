# Blue Ox Tree Care — Austin Marketing Site

Static marketing site for [Blue Ox Tree Care](https://www.blueoxtreecarellc.com/) — ISA certified arborists Travis & Lacy Berlin serving Austin, Round Rock, Bee Cave, and Lakeway, Texas.

Built with **Astro** (static output) and **Tailwind CSS**, deployed to **Cloudflare Pages**.

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

## Deploy to Cloudflare Pages

### Option A — Connect Git repository (recommended)

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. In the [Cloudflare dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select this repository and configure:

   | Setting | Value |
   |---------|-------|
   | **Framework preset** | Astro (or None) |
   | **Build command** | `npm run build` |
   | **Build output directory** | `dist` |
   | **Node.js version** | 22 (set via environment variable `NODE_VERSION=22`) |

4. Deploy. Cloudflare Pages will rebuild on every push to the production branch.

### Option B — Direct upload via Wrangler CLI

```bash
npm run build
npx wrangler pages deploy dist --project-name=blue-ox-tree-care
```

Requires [Wrangler](https://developers.cloudflare.com/workers/wrangler/) authenticated to your Cloudflare account.

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
