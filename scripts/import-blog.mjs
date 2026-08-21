import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const siteUrl = "https://agenciasnacionales.com";
const outputPath = resolve("src/data/articles.generated.json");
const datePattern = /^\d{1,2} [a-z]{3} \d{4}$/i;
const monthNumbers = {
  ene: "01",
  feb: "02",
  mar: "03",
  abr: "04",
  may: "05",
  jun: "06",
  jul: "07",
  ago: "08",
  sep: "09",
  oct: "10",
  nov: "11",
  dic: "12",
};

function decodeEntities(value) {
  const namedEntities = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };

  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (entity, name) => namedEntities[name.toLowerCase()] ?? entity);
}

function cleanText(value) {
  return decodeEntities(value.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

function parseDate(date) {
  const [day, month, year] = date.split(" ");
  return `${year}-${monthNumbers[month.toLowerCase()]}-${day.padStart(2, "0")}`;
}

function extractBlocks(html) {
  return [...html.matchAll(/<(h[2-3]|p|li)\b[^>]*>([\s\S]*?)<\/\1>/gi)]
    .map((match) => ({ type: match[1].toLowerCase(), text: cleanText(match[2]) }))
    .filter((block) => block.text);
}

function cleanTitle(title) {
  return title
    .replace(/\s+- My Framer Site$/i, "")
    .replace(/\s+\| Agencias Nacionales(?:\s+\| Agencias Nacionales)?$/i, "")
    .trim();
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`No se pudo descargar ${url}: ${response.status}`);
  }
  return response.text();
}

const sitemap = await fetchText(`${siteUrl}/sitemap.xml`);
const articleUrls = [...sitemap.matchAll(/<loc>([^<]+\/articulos-del-blog\/[^<]+)<\/loc>/g)].map(
  (match) => match[1],
);

const sampleHtml = await fetchText(articleUrls[0]);
const searchIndexUrl = sampleHtml.match(/<meta name="framer-search-index" content="([^"]+)"/i)?.[1];
if (!searchIndexUrl) {
  throw new Error("No se encontro el indice de contenido de Framer.");
}

const searchIndex = JSON.parse(await fetchText(searchIndexUrl));
const articles = await Promise.all(
  articleUrls.map(async (url) => {
    const slug = url.split("/").pop();
    const html = await fetchText(url);
    const blocks = extractBlocks(html);
    const dateIndex = blocks.findIndex(
      (block) => block.type === "p" && datePattern.test(block.text),
    );
    const endIndex = blocks.findIndex(
      (block, index) =>
        index > dateIndex && block.type === "p" && block.text === "Recibe las mejores ofertas y novedades antes que nadie",
    );
    const indexedArticle = searchIndex[`/articulos-del-blog/${slug}`] ?? {};
    const date = dateIndex >= 0 ? blocks[dateIndex].text : "";
    const preamble = blocks.slice(0, dateIndex);
    const tagIndex = preamble.findLastIndex(
      (block) => block.text === "Tips" || block.text === "Noticias",
    );
    const tag = tagIndex >= 0 ? preamble[tagIndex].text : "Tips";
    const titleIndex = preamble.findIndex(
      (block, index) => index > tagIndex && block.type === "p",
    );
    const pageTitle = titleIndex >= 0 ? preamble[titleIndex].text : "";
    const author = preamble
      .slice(titleIndex + 1)
      .find((block) => block.type === "p")?.text ?? "";
    const content = blocks.slice(dateIndex + 1, endIndex >= 0 ? endIndex : undefined);
    const firstParagraph = content.find((block) => block.type === "p")?.text ?? "";

    return {
      slug,
      title: pageTitle || cleanTitle(indexedArticle.title ?? ""),
      description: indexedArticle.description || firstParagraph,
      excerpt: firstParagraph,
      date,
      dateISO: parseDate(date),
      tag,
      author,
      image: `${slug}.webp`,
      blocks: content,
    };
  }),
);

articles.sort((left, right) => right.dateISO.localeCompare(left.dateISO));

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(articles, null, 2)}\n`, "utf8");
console.log(`Importados ${articles.length} articulos en ${outputPath}`);
