// Injects the server-rendered app into dist/index.html so the shipped HTML contains real text.
import { readFileSync, writeFileSync, rmSync } from "node:fs";

const { render } = await import("../dist-ssr/entry-server.js");
const file = "dist/index.html";
const html = readFileSync(file, "utf8");
if (!html.includes("<!--app-->")) throw new Error("dist/index.html is missing the <!--app--> placeholder");
const app = render();
writeFileSync(file, html.replace("<!--app-->", app));
const todos = app.match(/\[TODO: [^\]]+\]/g) ?? [];
if (todos.length) console.warn(`WARNING: ${todos.length} unfilled TODOs in the page:\n  ${[...new Set(todos)].join("\n  ")}`);
rmSync("dist-ssr", { recursive: true, force: true });
console.log("prerendered dist/index.html");
