**Version:** 1.2 · **Updated:** October 21, 2026

# Bodhi, start here

You’re setting up an independent copy of your website. **GitHub keeps the files. Cloudflare Pages serves the site. Web3Forms delivers contact requests. GoDaddy can keep your domain and DNS.**

Work through one section at a time. You can stop between sections. Save your own repository URL, Pages URL and where you stopped in your private notes. If something differs from the guide or you get stuck, call Robby and work through that step together.

## 1. Create your accounts

1. Open [GitHub signup](https://github.com/signup). Create a free personal account with an email you control. Verify the email and save your login in your password manager.
2. Open [Cloudflare signup](https://dash.cloudflare.com/sign-up). Create your account and verify your email. We’ll use **Pages**. You do not need to transfer the domain, add a domain/zone or choose a paid plan to make the first preview.
3. Keep your existing GoDaddy account; its domain changes come later.

You enter your passwords, verification codes and account agreements yourself. The public repository can be read without signing in; signing in lets you create your own copy.

## 2. Make your own GitHub copy

1. While signed into **your** GitHub, open [Create your website copy](https://github.com/robbyDAninja/the-handy-guru-website/generate). You can also use **Use this template → Create a new repository** on the original repository page.
2. Choose **your account** as Owner. Name the repository `the-handy-guru-website` (or another name you prefer).
3. Choose **Public**, keep only the default branch and create the repository. Website files and these instructions are public. Keep private notes and customer messages elsewhere.
4. Confirm the new address starts with `github.com/YOUR-USERNAME/` and contains `public/index.html` and this guide.

This independent copy belongs to you. Future changes to Robby’s original template will not automatically change yours. Keep your own repository link.

## 3. Get a Cloudflare Pages preview

In **your Cloudflare account**:

1. Open **Workers & Pages → Create application → Pages → Connect to Git** (the wording may say import an existing Git repository). Select **Pages** when offered a choice.
2. Connect GitHub. Give the Cloudflare GitHub app access to **your new website repository**. Keep any unrelated existing repository permissions intact.
3. Select your copy and use these settings:

| Field | Enter |
|---|---|
| Project name | `the-handy-guru` or an available name you choose |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | `exit 0` |
| Build output directory | `public` |
| Root directory | Leave blank — repository root |
| Environment variables | None needed |

4. Save and deploy. Wait for a successful deployment, then open the **actual `pages.dev` address Cloudflare gives you**. Don’t copy an example address from this guide.
5. Check Home, Services and Contact on your computer and phone. The preview message and inactive form are expected at this point.

The Pages preview is publicly accessible. Noindex asks search engines not to list it; it does not make it private. A push/merge to your production branch `main` publishes a new version automatically.

## 4. Set up your contact form

We’re using [Web3Forms](https://web3forms.com/) so the static site can email inquiries without a custom backend. At the time this guide was checked, its Free plan allows **250 submissions per month**. Limits and provider terms can change; check [current pricing](https://web3forms.com/pricing) when signing up. Domain registration and your mailbox are separate from website hosting.

1. Create your own free account/form at [Web3Forms](https://app.web3forms.com/) and **verify the inbox where you want inquiries delivered**. You can use your actual working business email; you must be able to open it.
2. Copy the form’s **access key**. This particular key is designed to be public in a website; it is not your account password or a Cloudflare/GitHub token.
3. In the form’s settings, enable **hCaptcha** as the spam verification method. This website includes its compact widget and requires its response before sending. The free integration does not need a separate hCaptcha account or key. If you cannot find that setting, stop and ask Robby.
4. In **your GitHub copy**, open `public/site-config.js`, choose the pencil/edit control and replace the empty quotes on the `web3formsAccessKey` line with your form’s access key. Keep the quotes and comma. Commit this setup change to `main`; Pages will redeploy your preview.
5. Open Contact. The fields should activate and the verification should appear. Enter one clearly labelled test request using your own details, complete the verification yourself, and send it. Check your inbox and spam folder. Confirm you can reply to the address in the request.
6. Test again on the **final custom domain** during section 5. Some free hosting subdomains may be rejected by Web3Forms; eligibility of your particular Pages address must be checked. If the preview is blocked, the live custom-domain test is essential. If the final domain is rejected, stop and ask Robby; don’t buy an upgrade or add a proxy as a workaround without discussing it.

A success message means the provider accepted a request. **Seeing the email in your actual inbox is the delivery check.** Error messages retain the visitor’s fields. Visitors without JavaScript or working CAPTCHA should use the call/text/email links instead.

Customer details pass through Web3Forms, whose [privacy policy](https://web3forms.com/privacy) describes storage/retention. Check your account’s retention settings. Watch the monthly quota: after the limit is reached, new requests can be rejected. The site offers direct contact alternatives.

## 5. Connect the domain while keeping GoDaddy DNS

The intended primary address is **https://www.thehandyguru.com**. The bare **https://thehandyguru.com** will forward to it. This is the Pages subdomain route that can keep your existing GoDaddy nameservers.

**Before changing anything:** confirm you control this exact domain, save/export the current DNS records and forwarding settings, and keep the old site/service available for recovery. Note which service receives `hello@thehandyguru.com`. Preserve all MX, TXT and mail-related records. If GoDaddy is only the registrar and your DNS is elsewhere, stop and map that with Robby first.

### Connect www

1. In your Pages project, open **Custom domains → Set up a domain**. Enter `www.thehandyguru.com` and follow the external-DNS instructions.
2. Cloudflare will show your actual Pages target, such as `YOUR-ACTUAL-PROJECT.pages.dev`. Copy the value from your own project.
3. At GoDaddy, open the domain’s **DNS records**. Save the previous `www` record, then set **CNAME / Name `www` / Value your actual Pages target**. Resolve any existing conflicting `www` record deliberately; don’t leave two incompatible records.
4. Wait for Pages to show the hostname active and HTTPS working. Add the hostname in Pages first; creating only the CNAME is not enough.

### Forward the bare domain

1. In GoDaddy’s domain/DNS management, find **Forwarding → Domain → Add/Edit**.
2. Set the destination to **https://www.thehandyguru.com**, choose **Permanent (301)** and **forward only / unmasked**. Don’t use masking. GoDaddy’s current instructions include HTTPS forwarding when forwarding is newly set up or edited.
3. Record/save the change. If the flow asks for a nameserver move or unrelated email changes, stop and ask Robby. Forwarding may change the bare domain’s website records, so retain the saved previous values.
4. Check `http://thehandyguru.com`, `https://thehandyguru.com` and `https://www.thehandyguru.com`. They should reach the approved www site with valid HTTPS. Check old `/services` and `/contact` links and any important query strings. If forwarding drops the page path or behaves unexpectedly, ask Robby before considering the cutover complete.
5. Confirm the existing mailbox still receives mail, and send one legitimate final-domain form test to the intended inbox.

**Important distinction:** putting **the bare apex directly on Pages** requires Cloudflare nameservers. That is a different option from the www-plus-forwarding route above. Domain registration can stay with GoDaddy either way. No nameserver move is part of this primary roadmap.

If you need to undo the cutover, restore the saved previous `www`, bare-domain and forwarding settings. Don’t cancel Airo or remove the old hosting until the replacement, mail and rollback plan are verified.

## 6. Review and launch

Confirm your phone/email, towns, service scope and the free-estimate wording. The old unverified ratings/testimonials/licensing claims were omitted. Your existing badge is retained. Review whether the photo-referenced generated portraits actually look like you and feel welcoming, and whether the final site fits your existing brand. They are generated illustrations, not original photos or documented jobs. Approve the draft or supply original photos you have permission to publish. [ASSETS.md](ASSETS.md) explains the references and replacement.

When you approve the site and the final-domain inquiry test has reached your inbox:

- In `public/site-config.js`, change `preview: true` to `preview: false`.
- In `public/_headers`, remove only the line `X-Robots-Tag: noindex, nofollow`.
- In `public/robots.txt`, remove only `Disallow: /`.
- Leave the final www canonical addresses and sitemap in place. If you chose a different domain, update those addresses on every page and in the sitemap first.

These commits deploy automatically. Check the actual website again, including phone layout, each page, call/text/email links and form delivery. If a helper has a terminal, `npm run check:launch` checks source settings; you still do the domain and inbox checks.

## 7. Make an update, or undo one

For future changes, ask your assistant/helper to make a small change on a **new branch**, open its Pages preview and show you the result. Approve it by merging the pull request into `main`; that publishes it. Direct edits committed to `main` also publish, so use them only for a deliberate change.

If a published edit causes trouble, open Pages → **Deployments**, find the previous successful production deployment, open its three-dot menu and select **Rollback to this deployment**. Then fix/revert the source in GitHub so the next deployment does not reintroduce the problem. Domain/DNS changes and customer messages are not undone by a website rollback.

Do one small update and undo with Robby while signed in as yourself. That is how you verify the handoff works for you.

## Optional: give your assistant this message

> Help me set up my Handy Guru website using this guide and SITE-RULES.md. Start with my own GitHub template copy and Cloudflare Pages preview. Use my existing connected tools where available and verify account identities. If a step needs my sign-in, agreement, email verification, CAPTCHA or domain decision, show me that exact step and let me complete it. Use Pages, public/ as the output and the www-plus-GoDaddy-forwarding route. Keep passwords/private credentials out of chat and GitHub. The Web3Forms public form access key belongs only in its documented field. Show me what is verified and where I should resume. Reading a public repository does not by itself give you permission or capability to edit my copy. Do not change my live domain, nameservers, email service or paid plan without my explicit approval.

## Official help

[GitHub template copies](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) · [Pages static HTML](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) · [Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/) · [Pages rollback](https://developers.cloudflare.com/pages/configuration/rollbacks/) · [GoDaddy forwarding](https://www.godaddy.com/help/forward-my-godaddy-domain-12123) · [Web3Forms CAPTCHA](https://docs.web3forms.com/getting-started/customizations/spam-protection/hcaptcha)

Provider steps checked October 21, 2026. Bodhi’s own account setup, actual Pages project, form acceptance/inbox delivery, DNS/TLS/forwarding and owner update/undo are not pre-verified by this template.

---

| Version | Date | Change |
|---|---|---|
| 1.2 | 2026-10-21 | Clarified that existing approved badge is retained and new likeness/site draft needs review. |
| 1.1 | 2026-10-21 | Added explicit owner review of the refined logo and photo-referenced generated likeness. |
| 1.0 | 2026-10-21 | Initial website and owner handoff. |
