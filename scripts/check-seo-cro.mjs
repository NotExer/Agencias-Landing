import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const homepage = await readFile(path.join(root, "dist/index.html"), "utf8");
const stripTags = (value) => value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

const expectedHeadline = "Uniformes, calzado de seguridad y EPP para empresas";
const headings = [...homepage.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gs)].map((match) => stripTags(match[1]));
if (headings.length !== 1 || headings[0] !== expectedHeadline) {
  console.error(`Homepage must have exactly one search-focused H1: ${expectedHeadline}`);
  process.exit(1);
}

const firstSlideStart = homepage.indexOf('data-slide="0"');
const secondSlideStart = homepage.indexOf('data-slide="1"', firstSlideStart);
const firstSlide = homepage.slice(firstSlideStart, secondSlideStart);
if (firstSlideStart === -1 || secondSlideStart === -1 || !firstSlide.includes("https://wa.me/573042351036")) {
  console.error("The visible first slide is missing a direct WhatsApp quote link.");
  process.exit(1);
}

if (!stripTags(firstSlide).includes("Cotizar por WhatsApp")) {
  console.error("The visible first slide is missing the primary conversion CTA.");
  process.exit(1);
}

const jsonLdBlocks = [...homepage.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
  .map((match) => JSON.parse(match[1]));
const localBusiness = jsonLdBlocks.find((item) =>
  Array.isArray(item["@type"])
    ? item["@type"].includes("LocalBusiness")
    : item["@type"] === "LocalBusiness",
);
if (!localBusiness) {
  console.error("Homepage is missing LocalBusiness structured data.");
  process.exit(1);
}
if (localBusiness.telephone !== "+573042351036") {
  console.error("LocalBusiness structured data has an invalid telephone number.");
  process.exit(1);
}
if (localBusiness.address?.addressLocality !== "Envigado" || localBusiness.address?.addressRegion !== "Antioquia") {
  console.error("LocalBusiness structured data is missing the local address.");
  process.exit(1);
}
if (!homepage.includes("<title>Dotaciones Empresariales, Calzado y EPP | Agencias Nacionales</title>")) {
  console.error("Homepage title is not aligned with the primary commercial intent.");
  process.exit(1);
}

const medellinLandingPath = path.join(root, "dist/dotaciones-medellin/index.html");
let medellinLanding;
try {
  medellinLanding = await readFile(medellinLandingPath, "utf8");
} catch {
  console.error("The dotaciones Medellín landing page was not built.");
  process.exit(1);
}
const medellinHeadings = [...medellinLanding.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gs)]
  .map((match) => stripTags(match[1]));
if (medellinHeadings.length !== 1 || medellinHeadings[0] !== "Dotaciones empresariales en Medellín") {
  console.error("The dotaciones Medellín page must have one intent-matched H1.");
  process.exit(1);
}
if (!medellinLanding.includes("<title>Dotaciones en Medellín | Uniformes, Calzado y EPP</title>")) {
  console.error("The dotaciones Medellín page has the wrong title.");
  process.exit(1);
}
if (!medellinLanding.includes('rel="canonical" href="https://agenciasnacionales.com/dotaciones-medellin/"')) {
  console.error("The dotaciones Medellín page has the wrong canonical URL.");
  process.exit(1);
}
if (!medellinLanding.includes("https://wa.me/573042351036")) {
  console.error("The dotaciones Medellín page is missing a WhatsApp quote CTA.");
  process.exit(1);
}
const medellinJsonLd = [...medellinLanding.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
  .map((match) => JSON.parse(match[1]));
if (!medellinJsonLd.some((item) => item["@type"] === "Service" && item.areaServed?.name === "Medellín")) {
  console.error("The dotaciones Medellín page is missing local Service structured data.");
  process.exit(1);
}

const colombiaLandingPath = path.join(root, "dist/dotaciones-empresariales-colombia/index.html");
let colombiaLanding;
try {
  colombiaLanding = await readFile(colombiaLandingPath, "utf8");
} catch {
  console.error("The dotaciones Colombia landing page was not built.");
  process.exit(1);
}
const colombiaHeadings = [...colombiaLanding.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gs)]
  .map((match) => stripTags(match[1]));
if (colombiaHeadings.length !== 1 || colombiaHeadings[0] !== "Dotaciones empresariales para compañías en Colombia") {
  console.error("The dotaciones Colombia page must have one intent-matched H1.");
  process.exit(1);
}
if (!colombiaLanding.includes("<title>Dotaciones Empresariales en Colombia | Agencias Nacionales</title>")) {
  console.error("The dotaciones Colombia page has the wrong title.");
  process.exit(1);
}
if (!colombiaLanding.includes('rel="canonical" href="https://agenciasnacionales.com/dotaciones-empresariales-colombia/"')) {
  console.error("The dotaciones Colombia page has the wrong canonical URL.");
  process.exit(1);
}
const colombiaJsonLd = [...colombiaLanding.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
  .map((match) => JSON.parse(match[1]));
if (!colombiaJsonLd.some((item) => item["@type"] === "Service" && item.areaServed?.name === "Colombia")) {
  console.error("The dotaciones Colombia page is missing national Service structured data.");
  process.exit(1);
}

async function checkEppLanding({ route, title, heading, area }) {
  let html;
  try {
    html = await readFile(path.join(root, `dist/${route}/index.html`), "utf8");
  } catch {
    console.error(`The ${route} landing page was not built.`);
    process.exit(1);
  }
  const headings = [...html.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gs)].map((match) => stripTags(match[1]));
  if (headings.length !== 1 || headings[0] !== heading) {
    console.error(`The ${route} page must have one intent-matched H1.`);
    process.exit(1);
  }
  if (!html.includes(`<title>${title}</title>`)) {
    console.error(`The ${route} page has the wrong title.`);
    process.exit(1);
  }
  if (!html.includes(`rel="canonical" href="https://agenciasnacionales.com/${route}/"`)) {
    console.error(`The ${route} page has the wrong canonical URL.`);
    process.exit(1);
  }
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
    .map((match) => JSON.parse(match[1]));
  if (!jsonLd.some((item) => item["@type"] === "Service" && item.areaServed?.name === area)) {
    console.error(`The ${route} page is missing Service structured data for ${area}.`);
    process.exit(1);
  }
  if (!html.includes("https://wa.me/573042351036")) {
    console.error(`The ${route} page is missing a WhatsApp quote CTA.`);
    process.exit(1);
  }
}

await checkEppLanding({
  route: "epp-colombia",
  title: "EPP Colombia | Elementos de Protección Personal para Empresas",
  heading: "Elementos de protección personal para empresas en Colombia",
  area: "Colombia",
});
await checkEppLanding({
  route: "epp-medellin",
  title: "EPP Medellín | Elementos de Protección Personal",
  heading: "Elementos de protección personal en Medellín",
  area: "Medellín",
});

for (const route of [
  "dotaciones-medellin",
  "dotaciones-empresariales-colombia",
  "epp-colombia",
  "epp-medellin",
]) {
  if (!homepage.includes(`href="/${route}/"`)) {
    console.error(`Homepage is missing an internal link to /${route}/.`);
    process.exit(1);
  }
}

const contactPage = await readFile(path.join(root, "dist/contacto/index.html"), "utf8");
for (const fieldName of ["name", "company", "email", "phone", "message"]) {
  if (!contactPage.includes(`name="${fieldName}"`)) {
    console.error(`The quote form is missing the ${fieldName} field name.`);
    process.exit(1);
  }
}
if (!contactPage.includes('id="quote-form"') || !contactPage.includes('data-quote-form')) {
  console.error("The contact page is missing the functional quote form hook.");
  process.exit(1);
}
for (const fieldId of ["quote-name", "quote-company", "quote-email", "quote-phone", "quote-message"]) {
  if (!contactPage.includes(`for="${fieldId}"`) || !contactPage.includes(`id="${fieldId}"`)) {
    console.error(`The quote form is missing an accessible label for ${fieldId}.`);
    process.exit(1);
  }
}
if (!contactPage.includes("contact_form_whatsapp")) {
  console.error("The quote form is missing the GA4 generate_lead event.");
  process.exit(1);
}
if (!contactPage.includes('"contact_form_submit"')) {
  console.error("The quote form is missing its dedicated GA4 contact_form_submit event.");
  process.exit(1);
}

const layoutSource = await readFile(path.join(root, "src/layouts/Layout.astro"), "utf8");
for (const eventName of ["whatsapp_click", "phone_click", "email_click"]) {
  if (!layoutSource.includes(`"${eventName}"`)) {
    console.error(`Global conversion tracking is missing the ${eventName} event.`);
    process.exit(1);
  }
}

const navbarSource = await readFile(path.join(root, "src/components/Navbar.astro"), "utf8");
if (!navbarSource.includes('"add_to_quote"')) {
  console.error("Quote-cart tracking is missing the add_to_quote event.");
  process.exit(1);
}

const cartSource = await readFile(path.join(root, "src/pages/carrito.astro"), "utf8");
if (!cartSource.includes('"begin_quote"')) {
  console.error("Quote-cart tracking is missing the begin_quote event.");
  process.exit(1);
}

const sitemap = await readFile(path.join(root, "dist/sitemap-0.xml"), "utf8");
if (sitemap.includes("https://agenciasnacionales.com/carrito/")) {
  console.error("The noindex cart page must not be included in the sitemap.");
  process.exit(1);
}

const sampleProduct = await readFile(
  path.join(root, "dist/producto/zapato-tipo-crocs-ref-219/index.html"),
  "utf8",
);
const sampleProductJsonLd = [...sampleProduct.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
  .map((match) => JSON.parse(match[1]));
if (sampleProductJsonLd.some((item) => item["@type"] === "Product")) {
  console.error("Product structured data without an Offer, Review, or AggregateRating must not be published.");
  process.exit(1);
}
if (!sampleProductJsonLd.some((item) => item["@type"] === "BreadcrumbList")) {
  console.error("Product pages must retain BreadcrumbList structured data.");
  process.exit(1);
}

const articlePage = await readFile(
  path.join(root, "dist/articulos-del-blog/como-elegir-calzado-de-trabajo-comodo-jornadas-largas/index.html"),
  "utf8",
);
const articleJsonLd = [...articlePage.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
  .map((match) => JSON.parse(match[1]));
if (!articleJsonLd.some((item) => item["@type"] === "BlogPosting")) {
  console.error("Article pages are missing BlogPosting structured data.");
  process.exit(1);
}
for (const href of ["/dotaciones-empresariales-colombia/", "/categoria/calzado-de-trabajo/", "/epp-colombia/"]) {
  if (!articlePage.includes(`href="${href}"`)) {
    console.error(`Article pages are missing the commercial internal link ${href}.`);
    process.exit(1);
  }
}

console.log("Homepage and landing-page SEO/CRO checks passed.");
