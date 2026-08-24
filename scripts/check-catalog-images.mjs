import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const catalogPath = path.join(root, "src/data/catalog.ts");
const imageDir = path.join(root, "src/img");
const source = await readFile(catalogPath, "utf8");
const imageNames = [...source.matchAll(/images:\s*\[([^\]]+)\]/g)]
  .flatMap((match) => [...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]));
if (imageNames.length === 0) {
  console.error("No catalog image references were found.");
  process.exit(1);
}
const actualNames = new Set(await readdir(imageDir));
const missing = imageNames.filter((imageName) => !actualNames.has(imageName));

if (missing.length) {
  console.error(`Missing catalog images:\n${missing.map((name) => `- ${name}`).join("\n")}`);
  process.exit(1);
}

console.log(`Catalog image references valid: ${imageNames.length}`);
