import { readFile, readdir, stat } from "node:fs/promises";
import { resolve, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { siteConfig } from "../public/site-config.js";
import { formIsConfigured } from "../public/form.js";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "../public");
const errors = [];
async function exists(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}
const files = await readdir(root);
let links = 0;
for (const name of files.filter((x) => x.endsWith(".html"))) {
  const source = await readFile(resolve(root, name), "utf8");
  if ((source.match(/<h1[ >]/g) || []).length !== 1)
    errors.push(`${name}: expected one H1`);
  if (!source.includes('name="viewport"'))
    errors.push(`${name}: viewport missing`);
  for (const [, attr, ref] of source.matchAll(/\b(href|src)="([^"]+)"/g)) {
    if (/^(https?:|tel:|mailto:|sms:|data:|#)/.test(ref)) continue;
    const link = new URL(ref, "https://local.invalid/");
    const pathname = link.pathname;
    const hash = link.hash.slice(1);
    const path =
      pathname === "/"
        ? resolve(root, "index.html")
        : resolve(root, pathname.replace(/^\//, ""));
    let target = path;
    if (!extname(target) && !(await exists(target))) target += ".html";
    if (!target.startsWith(root) || !(await exists(target)))
      errors.push(`${name}: missing ${ref}`);
    else if (hash) {
      const body = await readFile(target, "utf8");
      if (!body.includes(`id="${hash}"`))
        errors.push(`${name}: missing anchor ${ref}`);
    }
    links++;
  }
  if (
    /facebook\.com\/|instagram\.com\/|api\/contact\/contact-us|airo-assets/.test(
      source,
    )
  )
    errors.push(`${name}: old provider/placeholder link`);
}
const headers = await readFile(resolve(root, "_headers"), "utf8");
const robots = await readFile(resolve(root, "robots.txt"), "utf8");
if (process.argv.includes("--launch")) {
  if (siteConfig.preview)
    errors.push("Set preview: false only after owner approval.");
  if (!formIsConfigured(siteConfig.web3formsAccessKey))
    errors.push("Bodhi's public form key is missing.");
  if (/X-Robots-Tag:\s*noindex/i.test(headers))
    errors.push("Remove preview X-Robots-Tag after final approval.");
  if (/^Disallow:\s*\/\s*$/m.test(robots))
    errors.push("Remove preview robots Disallow after final approval.");
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(
  `PASS: ${files.filter((x) => x.endsWith(".html")).length} pages and ${links} local links/assets. ${process.argv.includes("--launch") ? "Source launch settings pass; real DNS/inbox/owner proof is separate." : "Preview settings retained; actual form delivery and owner launch remain pending."}`,
);
