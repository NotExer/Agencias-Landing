import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const catalogPath = path.join(root, "src/data/catalog.ts");
const imageDir = path.join(root, "src/img");
const source = await readFile(catalogPath, "utf8");
if (source.includes("Este zapato de protección Machita está fabricado con un corte en cuero bovino")) {
  throw new Error("The copied Machita description is still assigned to catalog products.");
}
for (const verifiedProduct of [
  "Bota Workman Food Industry Blanca",
  "Zapaton Plastico Machita Dama",
  "Bota Workman Super Safety P/Seg + Plantilla en Acero",
  "Bota Workman Safety Food Industry Blanca",
  "Bota Workman Safety Waterproof P/Seg Negra",
]) {
  if (!source.includes(verifiedProduct)) throw new Error(`Missing verified catalog product: ${verifiedProduct}`);
}
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
