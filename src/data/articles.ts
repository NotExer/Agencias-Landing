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

interface ArticleCluster {
  lead: string;
  anchor: string;
  href: string;
}

const CLUSTERS = {
  compras: {
    lead: "Si estás preparando la compra para una empresa en Medellín o el Valle de Aburrá, revisa cómo trabajamos las",
    anchor: "dotaciones empresariales en Medellín",
    href: "/dotaciones-medellin/",
  },
  multisede: {
    lead: "Si tu operación tiene varias sedes o ciudades, consulta cómo organizamos las",
    anchor: "dotaciones empresariales para empresas en Colombia",
    href: "/dotaciones-empresariales-colombia/",
  },
  calzado: {
    lead: "Puedes comparar nuestras referencias de",
    anchor: "calzado de seguridad y calzado de dotación para empresas",
    href: "/categoria/calzado-de-trabajo/",
  },
  calzadoDotacion: {
    lead: "Si buscas tenis, mocasines o zapatos de fácil limpieza para tu equipo, revisa nuestro",
    anchor: "calzado de dotación para empresas",
    href: "/calzado-de-dotacion/",
  },
  epp: {
    lead: "Si necesitas cotizar estos elementos para tu equipo, revisa los",
    anchor: "elementos de protección personal en Medellín",
    href: "/epp-medellin/",
  },
  hospitalaria: {
    lead: "Puedes ver nuestras referencias de",
    anchor: "uniformes antifluidos y ropa hospitalaria",
    href: "/categoria/hospitalaria/",
  },
} satisfies Record<string, ArticleCluster>;

const ARTICLE_CLUSTER: Record<string, keyof typeof CLUSTERS> = {
  "como-cotizar-dotaciones-empresariales-sin-errores": "compras",
  "como-evaluar-proveedores-dotaciones-empresariales-colombia": "compras",
  "como-planear-presupuesto-anual-dotaciones-empresariales": "compras",
  "como-hacer-prueba-piloto-dotaciones-empresariales": "compras",
  "checklist-dotacion-nuevos-ingresos-empresa": "compras",
  "control-calidad-dotaciones-empresariales-checklist-compras-sst": "compras",
  "acta-entrega-dotacion-epp-empresa": "compras",
  "como-armar-pliego-dotacion-epp-licitacion-privada": "compras",
  "como-crear-ficha-tecnica-dotacion-por-cargo": "compras",
  "como-estandarizar-dotaciones-por-cargo-y-area": "compras",
  "dotacion-para-empresas-de-alimentos-uniformes-calzado-epp": "compras",
  "dotacion-para-empresas-logistica-bodegas-por-cargo": "compras",
  "dotacion-personal-aseo-servicios-generales": "compras",
  "dotacion-personal-mantenimiento-facility-management": "compras",
  "getting-started": "compras",
  "best-practices": "compras",
  "politica-interna-dotacion-reposicion-empresas-multisede": "multisede",
  "entregas-escalonadas-dotacion-por-sede-y-turno": "multisede",
  "como-definir-stock-minimo-dotaciones-por-sede": "multisede",
  "como-definir-stock-minimo-epp-dotacion-por-sede": "multisede",
  "como-consolidar-tallas-dotacion-por-sede-sin-errores": "multisede",
  "control-dotacion-contratistas-personal-temporal": "multisede",
  "reducir-cambios-devoluciones-talla-dotaciones-empresariales": "multisede",
  "como-elegir-calzado-de-trabajo-comodo-jornadas-largas": "calzadoDotacion",
  "como-elegir-calzado-de-trabajo-segun-riesgo-operacion": "calzado",
  "botas-de-seguridad-para-mujer": "calzado",
  "cada-cuanto-renovar-uniformes-calzado-epp-empresa": "calzado",
  "protector-auditivo-guia-compra": "epp",
  "gafas-de-seguridad-guia-compra": "epp",
  "casco-de-seguridad-guia-compra": "epp",
  "guantes-de-seguridad-guia-compra": "epp",
  "trabajo-en-alturas-guia-epp": "epp",
  "como-crear-matriz-reposicion-epp-por-cargo-consumo": "epp",
  "dotacion-para-brigada-de-emergencias": "epp",
  "como-elegir-dotacion-hospitalaria-antifluido-clinicas-laboratorios": "hospitalaria",
};

/** Contextual link from a guide to the commercial page of its topic cluster. */
export function getArticleCluster(slug: string): ArticleCluster {
  return CLUSTERS[ARTICLE_CLUSTER[slug] ?? "compras"];
}
