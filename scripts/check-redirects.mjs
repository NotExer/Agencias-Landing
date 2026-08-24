import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const configPath = path.join(process.cwd(), "vercel.json");
let config;
try {
  config = JSON.parse(await readFile(configPath, "utf8"));
} catch {
  console.error("vercel.json with permanent redirects is missing or invalid.");
  process.exit(1);
}

const redirects = new Map((config.redirects ?? []).map((item) => [item.source, item]));
if (config.trailingSlash !== true) {
  console.error("vercel.json must enforce canonical trailing slashes.");
  process.exit(1);
}
const required = new Map([
  ["/categorias/calzado-de-trabajo", "/categoria/calzado-de-trabajo/"],
  ["/categorias/epp", "/categoria/epp/"],
  ["/categorias/uniformes-de-trabajo", "/categoria/uniformes-de-trabajo/"],
  ["/categorias/hospitalaria", "/categoria/hospitalaria/"],
  ["/categorias/gorros-y-redecillas", "/categoria/gorros-y-redecillas/"],
  ["/categorias/todas-los-productos", "/producto/"],
  ["/zapato-tipo-crocs-ref-219", "/producto/zapato-tipo-crocs-ref-219/"],
  ["/bota-soldador-inyectada", "/producto/bota-soldador-inyectada/"],
  ["/pantal%C3%B3n-epm", "/producto/pantalon-epm/"],
  ["/pava-epm-con-solapa-especiales", "/producto/pava-epm/"],
]);

for (const [source, destination] of required) {
  const redirect = redirects.get(source);
  if (!redirect || redirect.destination !== destination || redirect.permanent !== true) {
    console.error(`Missing permanent redirect: ${source} -> ${destination}`);
    process.exit(1);
  }
}

console.log(`Permanent redirect checks passed: ${required.size}`);
