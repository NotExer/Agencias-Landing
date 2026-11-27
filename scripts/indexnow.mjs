#!/usr/bin/env node
// Notifica a IndexNow (Bing, Yandex, Seznam, Naver…) las URLs que cambiaron en producción.
// Ejecutar después de que el deploy de Vercel esté publicado; ver README, sección IndexNow.
//
//   node scripts/indexnow.mjs /dotaciones-medellin/ /articulos-del-blog/<slug>/
//   node scripts/indexnow.mjs --since 2026-11-20      # URLs del sitemap con lastmod >= fecha
//   node scripts/indexnow.mjs --all                   # todas las URLs del sitemap
//   node scripts/indexnow.mjs --dry-run --all         # muestra lo que enviaría, sin enviar
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const SITE = new URL("https://agenciasnacionales.com/");
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH_SIZE = 10_000;

let dryRun = false;
let all = false;
let since;
const explicit = [];
const args = process.argv.slice(2);
for (let index = 0; index < args.length; index += 1) {
  const arg = args[index];
  if (arg === "--dry-run") dryRun = true;
  else if (arg === "--all") all = true;
  else if (arg === "--since") since = args[(index += 1)] ?? "";
  else if (arg.startsWith("--")) fail(`Opción desconocida: ${arg}`);
  else explicit.push(arg);
}

if (since !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(since)) fail("--since necesita una fecha YYYY-MM-DD.");
if (!all && since === undefined && explicit.length === 0) {
  fail("Indica URLs o rutas, --since YYYY-MM-DD o --all. Ejemplo: node scripts/indexnow.mjs /dotaciones-medellin/");
}

const publicDir = path.join(process.cwd(), "public");
const keyFile = (await readdir(publicDir)).find((name) => /^[a-f0-9]{32}\.txt$/.test(name));
if (!keyFile) fail("No hay archivo de clave IndexNow (<32 hex>.txt) en public/.");
const key = (await readFile(path.join(publicDir, keyFile), "utf8")).trim();
if (`${key}.txt` !== keyFile) fail(`El contenido de public/${keyFile} no coincide con su nombre.`);
const keyLocation = new URL(keyFile, SITE).href;

const urls = new Set(explicit.map(toSiteUrl));
if (all || since !== undefined) {
  for (const entry of await readSitemap()) {
    if (all || (entry.lastmod && entry.lastmod.slice(0, 10) >= since)) urls.add(entry.loc);
  }
}
if (urls.size === 0) fail("No hay URLs para enviar.");

console.log(`${urls.size} URL(s) para IndexNow:`);
for (const url of urls) console.log(`  ${url}`);
if (dryRun) process.exit(0);

const liveKey = await fetch(keyLocation).then((response) => (response.ok ? response.text() : ""));
if (liveKey.trim() !== key) fail(`${keyLocation} no devuelve la clave. ¿Ya se publicó el deploy?`);

const list = [...urls];
for (let start = 0; start < list.length; start += BATCH_SIZE) {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: SITE.host, key, keyLocation, urlList: list.slice(start, start + BATCH_SIZE) }),
  });
  if (response.status !== 200 && response.status !== 202) {
    fail(`IndexNow respondió ${response.status}: ${await response.text()}`);
  }
  console.log(`IndexNow aceptó ${Math.min(BATCH_SIZE, list.length - start)} URL(s) (HTTP ${response.status}).`);
}

function toSiteUrl(value) {
  const url = new URL(value, SITE);
  if (url.host !== SITE.host) fail(`${value} no pertenece a ${SITE.host}.`);
  return url.href;
}

async function readSitemap() {
  const index = await fetchText(new URL("sitemap-index.xml", SITE));
  const entries = [];
  for (const sitemapUrl of matchAll(index, "loc")) {
    const xml = await fetchText(new URL(sitemapUrl));
    for (const block of xml.match(/<url>.*?<\/url>/gs) ?? []) {
      entries.push({ loc: matchAll(block, "loc")[0], lastmod: matchAll(block, "lastmod")[0] });
    }
  }
  return entries;
}

function matchAll(xml, tag) {
  return [...xml.matchAll(new RegExp(`<${tag}>(.*?)</${tag}>`, "g"))].map((match) => match[1]);
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) fail(`${url} respondió ${response.status}.`);
  return response.text();
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
