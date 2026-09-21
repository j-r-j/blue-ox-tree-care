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

This repo stays **private**. Cloudflare Pages supports private GitHub repos on paid plans; either connect Git in the dashboard or deploy from GitHub Actions with API credentials.

| Setting | Value |
|---------|-------|
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Node.js version** | 22 (`NODE_VERSION=22` in dashboard, or use Actions `node-version: 22`) |

After the first successful deploy, the live preview URL is shown in the Cloudflare dashboard (typically `https://blue-ox-tree-care.pages.dev` unless you add a custom domain).

### Option A — Connect Git repository (recommended)

Best if you want Cloudflare to build and deploy on every push without managing GitHub secrets.

1. In the [Cloudflare dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorize GitHub and select **`j-r-j/blue-ox-tree-care`** (private repo access requires a Cloudflare plan that includes it).
3. Configure build settings using the table above.
4. Set **Production branch** to `main` and deploy.

Every push to `main` triggers a production deploy. Pull request previews are available when enabled in the project settings.

### Option B — GitHub Actions (Wrangler)

Use this when you prefer deploy credentials in GitHub instead of granting Cloudflare direct repo access. The workflow lives at [`.github/workflows/deploy-cloudflare-pages.yml`](.github/workflows/deploy-cloudflare-pages.yml) and runs on pushes to `main` (and on manual **Run workflow**).

**One-time setup:**

1. **Create a Cloudflare Pages project** (empty is fine) named `blue-ox-tree-care`, or let the first Wrangler deploy create it.
2. **Create an API token** in Cloudflare → **My Profile** → **API Tokens** → **Create Token** → **Edit Cloudflare Workers** template (includes Pages deploy permissions). Scope it to your account.
3. **Copy your Account ID** from the Cloudflare dashboard URL or the **Workers & Pages** overview sidebar.
4. In GitHub → **Settings** → **Secrets and variables** → **Actions**, add repository secrets:

   | Secret | Value |
   |--------|-------|
   | `CLOUDFLARE_API_TOKEN` | API token from step 2 |
   | `CLOUDFLARE_ACCOUNT_ID` | Account ID from step 3 |

5. Merge or push to `main`. The **Deploy to Cloudflare Pages** workflow builds with `npm ci && npm run build` and runs `wrangler pages deploy dist --project-name=blue-ox-tree-care`.

Do **not** commit tokens to the repo. If secrets are missing, the deploy step fails until they are configured.

### Option C — Direct upload via Wrangler CLI

For ad-hoc deploys from a local machine:

```bash
npm run build
npx wrangler pages deploy dist --project-name=blue-ox-tree-care
```

Requires [Wrangler](https://developers.cloudflare.com/workers/wrangler/) authenticated to your Cloudflare account (`npx wrangler login`).

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
