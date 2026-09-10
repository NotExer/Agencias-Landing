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

const redirects = new Map((config.redirects ?? []).map((item) => [item.source.replace(/\/$/, ""), item]));
const wwwRedirect = config.redirects?.find((item) =>
  item.has?.some((condition) => condition.type === "host" && condition.value === "www.agenciasnacionales.com"),
);
if (wwwRedirect?.source !== "/:path*" || wwwRedirect.destination !== "https://agenciasnacionales.com/:path*" || wwwRedirect.permanent !== true) {
  throw new Error("www must redirect permanently to the canonical host while preserving the path.");
}
if (config.trailingSlash !== true) {
  console.error("vercel.json must enforce canonical trailing slashes.");
  process.exit(1);
}
const required = new Map([
  ["/articulos-del-blog", "/articulos/"],
  ["/pol%C3%ADtica-de-privacidad", "/politica_privacidad/"],
  ["/dotacion-empresarial-medellin", "/dotaciones-medellin/"],
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
  ["/camisa-m-c-dril-caqui", "/producto/camisa-dril-caqui-manga-corta/"],
  ["/index.php", "/"],
  ["/hospitalaria.php", "/categoria/hospitalaria/"],
]);

// Vercel normalizes extensionless URLs before matching redirect sources strictly.
for (const redirect of config.redirects) {
  if (redirect === wwwRedirect) continue;
  if (!path.extname(redirect.source) && !redirect.source.endsWith("/")) {
    throw new Error(`Redirect will miss the normalized URL: ${redirect.source}/`);
  }
  const destinationPath = new URL(redirect.destination, "https://agenciasnacionales.com").pathname;
  await readFile(path.join(process.cwd(), "dist", destinationPath, "index.html"));
}

for (const [source, destination] of required) {
  const redirect = redirects.get(source);
  if (!redirect || redirect.destination !== destination || redirect.permanent !== true) {
    console.error(`Missing permanent redirect: ${source} -> ${destination}`);
    process.exit(1);
  }
}

console.log(`Permanent redirect checks passed: ${required.size}`);
