# MEAA Site

Official advocacy website for the **Military Enlisted Association of America (MEAA)** — connecting enlisted service members with their congressional representatives and providing tools to take action on issues that affect them.

**Live site:** https://darkeyedp.github.io/Meaa/

---

## Tech stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Routing | React Router v7 |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4, Emotion |
| UI primitives | shadcn/ui (Radix UI) |
| Icons | Lucide React |
| Charts | Recharts |
| Animation | Motion, Embla Carousel |
| Forms | React Hook Form |
| Deployment | GitHub Pages (GitHub Actions) |

---

## Getting started

**Prerequisites:** Node.js 20+, npm or pnpm

```bash
# Install dependencies
npm install

# Start local dev server → http://localhost:5173/Meaa/
npm run dev

# Production build → dist/
npm run build
```

No environment variables or API keys are required.

---

## Pages and routes

All routes are served under the `/Meaa` base path (GitHub Pages subpath).

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with mission statement, policy priorities, and testimonials |
| `/about` | About | Organization background and mission |
| `/policy` | Policy | Detailed MEAA policy priorities and advocacy focus areas |
| `/policy-tracker` | Policy Tracker | Real-time tracking of legislation affecting enlisted members |
| `/find-your-lawmakers` | Find Your Lawmakers | Address lookup to find senators and representatives + advocacy message templates |
| `/membership` | Membership | Membership information and sign-up |
| `/news` | News | Policy developments and announcements |
| `/insights` | Insights | Expert commentary on military policy |
| `/research` | Research | Long-form policy reports and publications |
| `/press` | Press | Press releases, statements, and media resources |
| `/contact` | Contact | Contact form and information |

---

## Project structure

```
src/
  app/
    pages/                  # One component per route (11 pages)
    components/
      Header.tsx            # Top nav with dropdown menus, mobile menu
      Footer.tsx
      RootLayout.tsx        # Shared layout wrapper (Header + Footer + Outlet)
      lawmakers/            # "Find Your Lawmakers" feature components
        AddressForm.tsx
        OfficialCard.tsx
        IssueSelector.tsx
        MessageTemplatePanel.tsx
      ui/                   # shadcn/ui primitive components (48 components)
    data/
      messageTemplates.ts   # 5 MEAA advocacy issue templates
    types/
      lawmakers.ts          # TypeScript interfaces for the lawmakers feature
    utils/
      civicApi.ts           # Loads and filters legislators-current.json
      renderTemplate.ts     # Substitutes {{placeholders}} in message templates
      normalizeOfficials.ts # Data normalization helpers
    styles/
      index.css
      theme.css             # Custom design tokens and theme variables
      fonts.css
public/
  legislators-current.json      # Bundled congressional roster (update periodically)
  legislator-committees.json    # Bioguide ID → committee name list (update with roster)
  404.html                      # GitHub Pages SPA redirect shim
.github/
  workflows/
    deploy.yml              # CI/CD: build + deploy to GitHub Pages on push to main
```

---

## Find Your Lawmakers feature

Located at `/find-your-lawmakers`. Visitors enter their home address and optional congressional district number(s) to look up their two U.S. Senators and House Representative(s). They can then select one of five MEAA advocacy issues to generate a personalized message to copy into their lawmaker's contact form.

**No API keys required.** Congressional data is bundled as two static JSON files served from the same origin — no CORS issues, no external runtime dependencies:

| File | Source | Purpose |
|---|---|---|
| `public/legislators-current.json` | [unitedstates/congress-legislators](https://github.com/unitedstates/congress-legislators) | Names, state, district, phone, contact URL, party |
| `public/legislator-committees.json` | unitedstates/congress-legislators committee YAML | Maps bioguide ID → committee name list |

Lawmaker photos are loaded from the Library of Congress bioguide photo service (`https://bioguide.congress.gov/bioguide/photo/{letter}/{id}.jpg`) — no API key required.

**Advocacy issue templates** (in `src/app/data/messageTemplates.ts`):
- Military Pay & Compensation
- Housing & Basic Allowance for Housing (BAH)
- Healthcare Access (TRICARE)
- Family Support (childcare, spouse employment)
- Transition & Veteran Success

Each template includes an email body, subject line, and phone script. Templates support `{{recipientName}}`, `{{userName}}`, `{{userState}}`, and `{{userContactInfo}}` placeholders. Senders can optionally enter their name, phone, and email — these are appended to the message signature.

**Military-relevant committee highlighting:** Committees on each official's card are automatically bolded and starred (★) if they fall into one of these categories:

- Armed Services
- Veterans' Affairs
- Appropriations
- Intelligence
- Homeland Security
- Foreign Relations
- Foreign Affairs
- Homeland Security and Governmental Affairs

### Keeping congressional data current

Both `public/legislators-current.json` and `public/legislator-committees.json` are point-in-time snapshots and must be refreshed manually when the congressional roster changes.

#### When to update

| Event | Action |
|---|---|
| **Start of a new Congress** (early January, odd years) | Update immediately — entire House + 1/3 Senate turns over |
| **Special election** (vacancy filled mid-term) | Update within a few days of the winner being certified |
| **Resignation or death** | Update once a replacement is sworn in |
| **Routine maintenance** | Every 3–6 months as a precaution |

> **Next hard deadline: January 2027** (119th → 120th Congress). Set a recurring calendar reminder for the first week of January in odd-numbered years.

#### How to update

1. **Download the latest YAML sources:**

   ```bash
   curl -fsSL https://raw.githubusercontent.com/unitedstates/congress-legislators/main/legislators-current.yaml \
     -o legislators-current.yaml
   curl -fsSL https://raw.githubusercontent.com/unitedstates/congress-legislators/main/committees-current.yaml \
     -o committees-current.yaml
   curl -fsSL https://raw.githubusercontent.com/unitedstates/congress-legislators/main/committee-membership-current.yaml \
     -o committee-membership-current.yaml
   ```

2. **Convert to JSON and overwrite the bundled files** (`js-yaml` is already a dev dependency):

   ```bash
   # Legislators
   node -e "
     const yaml = require('js-yaml');
     const fs   = require('fs');
     const data = yaml.load(fs.readFileSync('legislators-current.yaml', 'utf8'));
     fs.writeFileSync('public/legislators-current.json', JSON.stringify(data));
     console.log('Written:', data.length, 'legislators');
   "

   # Committee memberships
   node -e "
     const yaml = require('js-yaml');
     const fs   = require('fs');
     const committees  = yaml.load(fs.readFileSync('committees-current.yaml', 'utf8'));
     const memberships = yaml.load(fs.readFileSync('committee-membership-current.yaml', 'utf8'));
     const nameMap = {};
     for (const c of committees) {
       nameMap[c.thomas_id] = c.name;
       for (const sub of (c.subcommittees || [])) {
         nameMap[c.thomas_id + sub.thomas_id] = sub.name;
       }
     }
     const result = {};
     for (const [comId, members] of Object.entries(memberships)) {
       for (const m of members) {
         const name = nameMap[comId];
         if (!name) continue;
         if (!result[m.bioguide]) result[m.bioguide] = [];
         if (!result[m.bioguide].includes(name)) result[m.bioguide].push(name);
       }
     }
     fs.writeFileSync('public/legislator-committees.json', JSON.stringify(result));
     console.log('Written:', Object.keys(result).length, 'legislators with committee data');
   "
   ```

3. **Verify the counts:**

   ```bash
   node -e "const d=require('./public/legislators-current.json'); console.log(d.length, 'legislators');"
   node -e "const d=require('./public/legislator-committees.json'); console.log(Object.keys(d).length, 'with committees');"
   ```

4. **Clean up and commit:**

   ```bash
   rm legislators-current.yaml committees-current.yaml committee-membership-current.yaml
   git add public/legislators-current.json public/legislator-committees.json
   git commit -m "Update congressional data to <Month Year>"
   git push
   ```

---

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via the workflow at `.github/workflows/deploy.yml`.

**Workflow steps:**
1. Check out code
2. Install dependencies with pnpm
3. Run `pnpm build` (Vite → `dist/`)
4. Upload `dist/` as a GitHub Pages artifact
5. Deploy to https://darkeyedp.github.io/Meaa/

To trigger a manual deploy without a code change, use the **"Run workflow"** button on the [Actions tab](https://github.com/darkeyedp/Meaa/actions).

### SPA routing on GitHub Pages

GitHub Pages serves a 404 for any URL that isn't a real file. Two files handle client-side routing:

- `public/404.html` — captures the URL on 404 and stores it in `sessionStorage`, then redirects to `/Meaa/`
- `index.html` — reads from `sessionStorage` on load and replaces the URL, so React Router sees the correct path

---

## Environment variables

No environment variables are required. The `.env.example` file is kept for historical reference — a Google Civic API key was used in an earlier version but has since been replaced by the bundled dataset approach.

---

## Contributing

1. Fork the repository and create a feature branch off `main`
2. Run `npm install` and `npm run dev` to start locally
3. Make your changes and test at http://localhost:5173/Meaa/
4. Push to your fork and open a pull request against `main`
5. CI will build automatically — once merged, the site deploys within ~2 minutes
