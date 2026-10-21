**Version:** 1.1 · **Updated:** October 21, 2026

# Images and source facts

## Current visual draft

Bodhi still needs to approve the likeness, refined logo and final design before launch. All three new images were created October 21, 2026 with the built-in imagegen tool and optimized into local WebP files. System fonts are used; no photo or font CDN is needed.

| Asset | Provenance |
|---|---|
| `public/assets/bodhi-portrait.webp` | Photo-referenced AI portrait, not an original photograph of Bodhi. |
| `public/assets/bodhi-workshop.webp` | Matching generated scene, not a documented customer job, his actual workshop or tools. |
| `public/assets/handy-guru-logo.webp` | Transparent refinement of the original navy/gold craft-sign badge. The inaccurate cartoon face is replaced by a hammer/heart emblem. |

The real references are the openly displayed [OM Shack instructor photo explicitly labeled Bodhi Campbell](https://www.omshack.com/meet-the-om-shack-team) and the **public profile thumbnail only** of [@the_singed_sage](https://www.instagram.com/the_singed_sage/), linked from [Bodhi's own About page](https://www.thebodhispot.com/about.html). Private posts were not accessed. The old cartoon supplied branding direction only, never facial identity. Reference originals are excluded from this public repository; public availability does not establish a license to redistribute those original photos.

The reference thumbnail is 150×150 and the studio photo is 890×677; fine facial detail is limited by source resolution. Whether the output looks like Bodhi remains a human judgment. Page captions identify the generated images. Keep that distinction accurate.

### Portrait — exact prompt

Inputs: actual public profile thumbnail first; actual OM Shack studio photo second.

> Create a natural editorial brand portrait for The Handy Guru website. The two supplied photographs are identity references of the SAME real person, Bodhi Campbell. Reference 1 is his public Instagram profile picture and is the primary face / hair / beard reference. Reference 2 is his named OM Shack instructor portrait, a supporting face, build and posture reference. Preserve this specific man's actual likeness: his long slightly angular face, broad forehead, deep-set eyes, strong brows, distinctive nose and mouth, age lines, slightly tousled medium-length gray-brown hair swept back and to the side, and SHORT white beard concentrated around chin and jaw with white mustache. Do not substitute a generic older handyman, do not add an oversized full Santa beard, curlier longer hair, a younger face or an exaggerated cartoon smile. Keep age and facial asymmetry natural. A realistic waist-up portrait, looking directly toward the camera with a gentle approachable half-smile, relaxed shoulders, hands casually resting near a workbench at lower frame. He wears a real cotton button-front work shirt with rolled sleeves, a restrained teal/navy/plum woven pattern that feels colorful and individual, with no logos or jewelry invented. In a simple light-filled workshop / porch doorway, pale wood bench and a small unbranded hand tool subtly present at the bottom; background softly out of focus, warm muted honey-gold wood, navy door detail, green foliage. Professional small-business editorial photography, lifelike skin pores, believable aging, soft window daylight, neutral skin tones, normal anatomy, not retouched glamour, not oversaturated orange. Portrait 4:5 composition, subject centered, head fully inside frame and generous breathing room, clear unobstructed face, shoulders and forearms visible. This is a newly generated illustrative portrait based on public photo references, not documentation of an actual customer job. No text, badges, lettering, van, tool belt, floating tools, other people or watermark. User wants less animated and less obviously AI, while retaining warmth and color. Identity fidelity is the primary priority.

### Workshop scene — exact prompt

Inputs: same two actual photographs, then the generated portrait for wardrobe/setting continuity only.

> Create a second natural editorial website image for The Handy Guru, consistent with supplied reference 3 (the newly generated portrait). References 1 and 2 are the actual public photos of Bodhi Campbell and are the identity authority; reference 3 is ONLY continuity for clothing, warm daylight and setting. Preserve this specific man's facial proportions, age, slightly tousled gray-brown swept-back hair, short white beard and mustache. Do not turn him into a generic older handyman or use an oversized beard. Landscape 3:2 composition in a modest bright workshop beside a porch. Medium shot, Bodhi is on the right two thirds of the frame, standing comfortably at a wooden bench, looking down with a gentle relaxed expression while holding a small plain wooden offcut flat with one hand and marking it lightly with a pencil in the other. A mundane workbench moment, not construction or a customer job. Hands anatomically correct and relaxed, five fingers per hand, correct pencil grip, exactly two arms. He wears the same restrained teal/navy/plum woven plaid cotton shirt, sleeves rolled, casual functional clothes. Left third has the bench, one unbranded closed tape measure and soft green outdoor foliage in the background. Natural aging, lifelike skin, neutral skin color, warm wood and navy doorway, soft side daylight, unretouched professional local-business photography. Believable tools and material scale, simple scene, no floating parts. The face remains readable in three-quarter view with enough detail to recognize the reference. No other people, no text, logos, watermarks, badges, van, tool belt, elaborate construction, visible address or client. No artificial cartoon, painterly outlines, plastic skin, overly cinematic grading or exaggerated grin. This is generated illustration based on photo references and must not imply a documented completed job.

### Logo refinement — exact prompt

Input: original existing-site badge as a branding reference, not facial identity. Transparent background requested and preserved.

> Refine the supplied existing The Handy Guru logo into a polished, restrained, official small-business horizontal logo on a TRUE transparent background. This supplied image is a BRAND STYLE REFERENCE only: preserve its recognizable navy and warm golden-ochre palette, distinctive bold craft/sign-painted slab-serif Handy Guru lettering, and friendly tools / helper-heart spirit. Do NOT reproduce the portrait: the original illustrated man is inaccurate and the website has a separate photo-referenced portrait. Build one cohesive horizontal logo lockup, approximately 3.1:1 aspect ratio, centered tightly with minimal transparent padding. At the left a compact circular navy-and-gold workshop seal contains a simple elegant hammer and small heart, crisp strong silhouette, not ornamental mandalas. At right use exact legible lettering: small script 'The' above bold large 'HANDY GURU'. Navy letterforms with restrained warm-gold inset detail / outline, easy to read when the whole mark is about 240 pixels wide. One thin gold underline or subtle vintage sign border is enough. No additional words or tagline. Flat vector-like clean finished artwork, professional sign painter quality, confident balanced kerning, no photorealism, no 3D, no glowing effects, no distressed grunge, no extraneous flourishes, no full cartoon figure, no big white background, no black rectangle, no mockup or scene. Limited colors deep navy #162D45, warm gold #D49C32, small off-white highlights if needed. It must read clearly on an ivory website header in its upper-left corner.

## Earlier still life — retained as an optional alternative

`public/assets/porch-tools.webp` is an **AI-generated illustrative scene**, created October 21, 2026 with the built-in imagegen tool. It is not a portrait of Bodhi, his tools/home, a customer or completed work. It is no longer displayed by default. The supplied WebP is optimized from the generated PNG; it is approximately 192 KiB. No external photo/font CDN is needed.

The embedded-text flyer and inaccurate original AI face are not reused. The new portraits above use actual public photographs as likeness references.

### Replace it with real photos

1. Choose a well-lit horizontal photo of Bodhi at work, or one real job photo you have permission to publish. Avoid visible addresses, private customer details and bystanders without permission.
2. Have your helper export a reasonably sized WebP/JPEG under `public/assets/`, typically 1200–1600 pixels wide. Give it a simple filename.
3. In `public/index.html`, change the relevant image paths, actual width/height, alt text and captions. Social preview image metadata on the HTML pages currently points to `bodhi-workshop.webp`; update it if appropriate. Match the CSS crop to the face.
4. Preview desktop and phone before merging/publishing. Caption real photos accurately. Remove a generated-image caption only after replacing that particular image with a real photograph; never label generated scenes as completed work.

There are no stock photo licenses or font packages in this source. System fonts are used. The business name and source facts come from the existing public website and need owner review.

### Earlier still-life generation prompt

The final prompt, using the built-in tool (not CLI/API):

> Use case: photorealistic-natural. Asset type: editorial website photograph for The Handy Guru, a local handyman serving Florida's Treasure Coast. Create a quiet, believable still-life photograph of a small well-used navy canvas tool bag with a few ordinary unbranded hand tools (wood-handled hammer, screwdriver, tape measure) resting on a pale wooden bench beside an open screened porch in a modest, well-kept Florida home. The background has softly out-of-focus white door trim, a sage plant and natural daylight. Restrained navy, soft white, natural wood and muted brass tones, tactile real materials with small signs of use, candid local-business warmth, realistic scale and tool geometry, no luxury mansion, no showroom gloss. Landscape 3:2 composition, a closer grounded view with the bag in the lower-middle and breathing room above. No people, hands, faces, logos, lettering, watermarks, badges or visible construction projects. No claim this is an actual client job. This is one illustrative mood image; all website text will be real HTML.

## Source facts for owner review

[Existing Home](https://thehandyguru.com/) · [Services](https://thehandyguru.com/services) · [Contact](https://thehandyguru.com/contact), checked October 21, 2026. Name/contact, Treasure Coast coverage and service categories were retained or condensed. Testimonials, ratings, claimed tenure, license/insurance statements and absolute service guarantees were omitted pending owner confirmation. Public source is evidence of what was displayed, not independent proof of credentials or every service.

---

| Version | Date | Change |
|---|---|---|
| 1.1 | 2026-10-21 | Recorded public photo references, generated portrait family, refined logo, exact prompts and pending likeness review. |
| 1.0 | 2026-10-21 | Initial website and owner handoff. |
