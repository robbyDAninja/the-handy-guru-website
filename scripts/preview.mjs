import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "../public");
const port = Number(process.env.PORT || 8378);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml",
  ".txt": "text/plain",
};
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  if (url.pathname === "/__review/mobile") {
    const width = [320, 360, 390, 430].includes(
      Number(url.searchParams.get("width")),
    )
      ? Number(url.searchParams.get("width"))
      : 390;
    const path = ["/", "/contact", "/services"].includes(
      url.searchParams.get("path"),
    )
      ? url.searchParams.get("path")
      : "/";
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(
      `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>The Handy Guru — ${width}px layout check</title><style>body{margin:0;background:#dce4e8;font:14px system-ui;color:#192d45}p{margin:12px;text-align:center}iframe{display:block;width:${width}px;height:844px;border:0;margin:0 auto;background:white}</style></head><body><p>Local layout check · ${width}px wide</p><iframe title="Phone website preview" src="${path}"></iframe></body></html>`,
    );
    return;
  }
  let path;
  try {
    path = resolve(root, "." + decodeURIComponent(url.pathname));
  } catch {
    res.writeHead(400);
    res.end();
    return;
  }
  if (path !== root && !path.startsWith(root + "/")) {
    res.writeHead(403);
    res.end();
    return;
  }
  if (path === root) path = resolve(root, "index.html");
  try {
    if (!(await stat(path)).isFile()) throw Error();
  } catch {
    if (!extname(path)) path += ".html";
  }
  try {
    const data = await readFile(path);
    res.writeHead(200, {
      "Content-Type": types[extname(path)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(await readFile(resolve(root, "404.html")));
  }
});
server.listen(port, "127.0.0.1", () =>
  console.log(
    `Local preview: http://127.0.0.1:${port}/ · phone: /__review/mobile?width=390`,
  ),
);
