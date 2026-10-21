**Version:** 1.0 · **Updated:** October 21, 2026

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

The current hero is an AI-generated illustrative tools/porch image. It is not a photograph of Bodhi or his work. See [ASSETS.md](ASSETS.md) for the prompt and how to replace it with real photos.

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
| 1.0 | 2026-10-21 | Initial website and owner handoff. |
