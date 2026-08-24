import type { ImageMetadata } from "astro";
import blog2 from "../img/Blog 2.avif";
import importedArticles from "./articles.generated.json";

export type ArticleBlockType = "h2" | "h3" | "p" | "li";

export interface ArticleBlock {
  type: ArticleBlockType;
  text: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  dateISO: string;
  tag: string;
  author: string;
  image: string;
  blocks: ArticleBlock[];
}

export const articles = importedArticles as Article[];

const originalArticleSlugs = [
  "como-elegir-calzado-de-trabajo-comodo-jornadas-largas",
  "como-cotizar-dotaciones-empresariales-sin-errores",
  "best-practices",
  "getting-started",
  "cada-cuanto-renovar-uniformes-calzado-epp-empresa",
  "como-elegir-calzado-de-trabajo-segun-riesgo-operacion",
  "como-estandarizar-dotaciones-por-cargo-y-area",
];

export const listedArticles = originalArticleSlugs
  .map((slug) => articles.find((article) => article.slug === slug))
  .filter((article): article is Article => Boolean(article));

export const featuredArticles = listedArticles.slice(0, 4);

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  "../img/blog/*.webp",
  { eager: true },
);

export function getArticleImage(slug: string) {
  if (slug === "best-practices") return blog2;

  return imageModules[`../img/blog/${slug}.webp`]?.default;
}

export function getArticlePath(slug: string) {
  return `/articulos-del-blog/${slug}/`;
}

export function getRelatedArticles(article: Article, amount = 3) {
  return articles.filter(({ slug }) => slug !== article.slug).slice(0, amount);
}
