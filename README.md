**Version:** 1.3 · **Updated:** October 21, 2026

# The Handy Guru — your website and setup guide

A simple website for **Bodhi Campbell / The Handy Guru**, with Home, Services and Contact pages. Plain HTML, CSS and JavaScript; no framework, paid website builder or application server.

**Bodhi: start with [START-HERE.md](START-HERE.md).** You can read everything here without a GitHub account. You will need your own account to make and maintain your own copy.

[**Make your own website copy**](https://github.com/robbyDAninja/the-handy-guru-website/generate)

The guide walks you through GitHub → your own copy → Cloudflare Pages → contact requests → your existing domain. The intended address is **www.thehandyguru.com**, with GoDaddy keeping the domain registration and DNS and forwarding the bare domain to www. No domain registration transfer is needed.

The supplied site is a **review draft**: a visible preview notice and search-engine noindex settings are retained. Call/text/email links are available; the online form stays inactive until you configure your own Web3Forms receiver. Your accounts, actual email delivery and domain launch still need to be completed and checked by you.

## What you need

- Your own GitHub and Cloudflare accounts; Free plans are sufficient candidates for this small static setup.
- An email inbox you can read, plus your own Web3Forms form.
- Access to the current GoDaddy domain/DNS settings for the final connection.
- Your review of the business wording, services, phone/email, and photos.

The draft now includes the existing circular Handy Guru badge, reused without redesign, and warm, flattering photo-referenced AI images at a residence, with the van from the original brand concept. These are generated images, not original photographs of Bodhi or completed jobs. Bodhi still needs to approve the likeness and final design. See [ASSETS.md](ASSETS.md) for provenance and replacement instructions.

## For someone helping with the files

Read [SITE-RULES.md](SITE-RULES.md). Serve **only `public/`**. Cloudflare Pages settings: **None / main / build `exit 0` / output `public` / root blank**. No API secret is required for static hosting.

With Node.js 22 or newer, optional local checks are:

```sh
npm run check
npm run preview
```

No dependency installation is needed. Open the local address printed by the preview command. After owner setup, `npm run check:launch` checks the launch settings; it cannot prove DNS or inbox delivery.

[File index](INDEX.md) · [Setup roadmap](START-HERE.md) · [Image provenance](ASSETS.md)

---

| Version | Date | Change |
|---|---|---|
| 1.3 | 2026-10-21 | Restored original Handy Guru badge; existing approved assets are the design baseline. |
| 1.2 | 2026-10-21 | Updated imagery to warm, flattering residential welcome and home-help scenes. |
| 1.1 | 2026-10-21 | Added photo-referenced portrait family and refined logo; owner likeness/design approval remains pending. |
| 1.0 | 2026-10-21 | Initial website and owner handoff. |
