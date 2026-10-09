# Blue Ox Tree Care: Austin Marketing Site

Static marketing site for [Blue Ox Tree Care](https://www.blueoxtreecarellc.com/). ISA certified arborists Travis & Lacy Berlin serving Austin, Round Rock, Bee Cave, and Lakeway, Texas.

Built with **Astro** (static output) and **Tailwind CSS**, deployed to **GitHub Pages** for preview.

## Stack

- [Astro 7](https://astro.build/): static site generator
- [Tailwind CSS 4](https://tailwindcss.com/): utility-first styling
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

No secrets are required. The workflow uses `actions/upload-pages-artifact` and `actions/deploy-pages` with `pages: write` and `id-token: write` permissions.

## Receiving leads from the estimate form

The estimate form lives on `/contact` (anchor `#estimate`). Every "Free Estimate" button links there. The site is static, so the form sends each request to an outside form service, which emails it to you and keeps a copy.

**Until you set this up**, the form opens the visitor's email app with their request filled in, addressed to `Owner@BlueOxTreeCareLLC.com`. Many visitors will not finish that step, so set up a form service as soon as you can.

### What John needs to do (one time)

1. **Pick a form service and create a form.** Any service that accepts a JSON `POST` works. Two easy options:
   - [Formspree](https://formspree.io): sign up with the email that should get leads, create a form, and copy its endpoint. It looks like `https://formspree.io/f/abcdwxyz`.
   - [Web3Forms](https://web3forms.com): enter the email that should get leads to get an access key. The endpoint is `https://api.web3forms.com/submit`. You will also need the access key in step 2.

   Check the free plan's monthly submission limit and upgrade if you need more.
2. **Add the endpoint to GitHub.** In the repo, go to **Settings → Secrets and variables → Actions → Variables** tab → **New repository variable**:

   | Name | Value |
   |------|-------|
   | `PUBLIC_LEAD_FORM_ENDPOINT` | Your form endpoint URL from step 1 |
   | `PUBLIC_LEAD_FORM_ACCESS_KEY` | Web3Forms only: your access key. Skip for Formspree. |

   These are *variables*, not secrets: they end up in the public page HTML, which is normal for these services.
3. **Redeploy.** Go to **Actions → Deploy to GitHub Pages → Run workflow** (or merge any change to `main`).
4. **Test it.** Open `/contact`, send a test request, and confirm the email arrives. Some services ask you to confirm your email on the first submission.

If the site moves to Cloudflare Pages, add the same two names under **Settings → Environment variables** in the Cloudflare project. For a local build, copy `.env.example` to `.env` and fill it in.

### What each submission contains

| Field | Notes |
|-------|-------|
| `name`, `phone`, `email`, `location`, `service`, `message`, `preferred_contact` | What the visitor typed. Email is optional unless they pick Email as their contact method. |
| `sms_consent` | `true` only if they checked the call/text consent box. It is never pre-checked and is not required. |
| `sms_consent_text` | The exact consent wording shown next to the box. |
| `consent_timestamp` | When they submitted (ISO 8601, UTC). |
| `page_url` | The page they submitted from. |
| `_subject` / `subject` | Email subject line used by most form services. |

**Keep these records.** The consent fields are your proof that someone agreed to calls and texts. Do not delete old submissions in the form service, or export them regularly. Only send marketing or automated texts to people with `sms_consent: true`, and honor STOP replies right away.

The consent wording lives in `src/data/leadForm.ts`. The Privacy Policy (`/privacy`) and Terms (`/terms`) pages are plain-language starting points. Have a lawyer review all three before relying on them.

### Spam protection

The form has a hidden honeypot field (`_gotcha`). Submissions that fill it are dropped in the browser. There is a `TODO(turnstile)` in `src/components/LeadForm.astro` for adding Cloudflare Turnstile later if spam gets through.

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
| `/contact` | Contact & estimate request form (`#estimate`) |
| `/privacy` | Privacy Policy |
| `/terms` | Terms, including text message terms |

## NAP (Name, Address, Phone)

- **Phone:** (512) 749-8615
- **Email:** Owner@BlueOxTreeCareLLC.com
- **Service area:** Austin metro (service-area business, no public street address)

## License

Proprietary. © Blue Ox Tree Care LLC
