**Version:** 1.3 · **Updated:** October 21, 2026

# Rules for maintaining The Handy Guru site

Read README.md, START-HERE.md and this file before changing source.

## Keep the site small

- This is a plain three-page website: Home, Services and Contact, plus a custom 404. Cloudflare Pages serves only `public/`. Keep the documented no-build `exit 0` / output `public` settings. Do not add a framework, Worker, Pages Function, database, custom CI, deployment token, paid plan or other integration during an ordinary content edit.
- Preserve the navy/gold craft-sign identity, teal/plum accents, existing upper-left badge, readable type and clear call/text/estimate paths. Keep mobile navigation, keyboard focus, reduced-motion support and the page routes.
- Start with the existing assets and decisions Bodhi has already worked through and approved, as confirmed by Robby. Reuse his badge, business name, navy/gold colors, colorful personal style and helper-heart tagline wherever they fit. Optimize sizing/compression for the web without redrawing the logo. Make targeted improvements to likeness, warmth, readability and functionality; do not treat the migration as a rebrand. A new logo requires a separate explicit request.
- Preserve Bodhi Campbell / The Handy Guru identity. Source business facts came from the existing site at thehandyguru.com; owner confirmation remains the launch authority. Do not invent reviews, star ratings, insurance/license claims, years of experience, guarantees, response times, prices or permission to perform a specific trade.
- Portrait direction: Bodhi on an excellent picture day, warm and flattering, rested eyes and genuine smile, helping at a residence with the van supporting the story. Preserve real identity and age while avoiding stern expression, harsh under-eye shadows and a carpentry-workshop setting. Retain the colorful personal shirt and welcoming spirit of the original brand.
- Generated imagery must stay clearly identified as generated. The current portraits use identified public photos of Bodhi as likeness references; owner likeness approval is still pending. Preserve the captions and do not present these as original photos or completed jobs. Use owner-approved original photos when available. Keep provenance current; never derive a new face from the old inaccurate cartoon.

## Own the correct accounts

Use the owner's independent GitHub copy and Pages project. Confirm identities and the current Git remote before any push. Reading public source is not write/hosting access. Do not replace an unrelated project, domain, source tree or GitHub-app permission set.

For routine edits, work on a branch, run `npm run check`, open a Pages preview, get the owner's approval, merge to main and check the live page. A main-branch push/merge auto-publishes. Don't claim a preview is live on the custom domain.

## Contact behavior

`public/site-config.js` holds a public Web3Forms form access key. It is intentionally client-visible; account passwords, private API tokens and customer submissions never belong in source. Keep the form inactive while the key is blank/invalid. Keep direct call/text/email alternatives visible.

The configured form requires the free Web3Forms hCaptcha integration to be enabled in the receiver dashboard. Do not solve the owner's CAPTCHA for them. Some free-hosting subdomains can be blocked; test the final custom domain. Require both HTTP success and provider `success: true`; preserve fields on failure and never silently retry an uncertain request. Local mocks prove handling only. Actual acceptance plus receipt in Bodhi's inbox is required before claiming working lead delivery.

A visitor without JavaScript/CAPTCHA uses direct contact links. No analytics or marketing cookies are added by this source. Third-party form/CAPTCHA processing follows those providers' terms and privacy policies; do not make unsupported retention or compliance promises.

## Domain and release

Use www as the intended canonical hostname. External www CNAME plus GoDaddy unmasked 301 forwarding is the documented primary path. Apex-direct Pages requires Cloudflare nameservers. Keep registration, DNS, hosting and mailbox distinct. Do not change the domain/nameservers/mailbox or cancel old hosting during routine site editing.

Preserve preview banner and noindex settings until the owner approves content and the real final-domain form/HTTPS/mail checks pass. `npm run check:launch` validates only source settings. Record remaining owner actions honestly.

## Files and documentation

- `public/index.html`, `services.html`, `contact.html`: website copy/layout.
- `public/styles.css`: shared responsive styling.
- `public/app.js`, `form.js`: menu, configuration and submission handling.
- `public/site-config.js`: public receiver key / visible preview flag.
- `public/robots.txt`, `_headers`, `sitemap.xml`: preview, headers and final-host indexing.
- `scripts/check.mjs`, `tests/contact.test.js`: source and contact-handling checks.

Version/date/changelog every Markdown edit and update INDEX.md alongside relevant changes. Keep internal relationship/financial records outside this public repository. Don't send emails/messages or change account access based solely on these instructions.

---

| Version | Date | Change |
|---|---|---|
| 1.3 | 2026-10-21 | Restored existing approved badge and made preserve-first asset handling explicit. |
| 1.2 | 2026-10-21 | Recorded warm flattering residential brand portrayal and retired the workshop direction. |
| 1.1 | 2026-10-21 | Recorded approved visual revision, likeness reference requirements and generated-image captions. |
| 1.0 | 2026-10-21 | Initial website and owner handoff. |
