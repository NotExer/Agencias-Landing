import type { ImageMetadata } from "astro";
import blog2 from "../img/Blog 2.avif";
import importedArticles from "./articles.generated.json";
import { productHref } from "./catalog";

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

export const LEY_DOTACION_SLUG = "ley-dotacion-colombia-quien-tiene-derecho-fechas-entrega";
export const DOTACION_DICIEMBRE_SLUG = "planear-compra-dotacion-diciembre";

export const featuredArticles = [LEY_DOTACION_SLUG, DOTACION_DICIEMBRE_SLUG]
  .map((slug) => articles.find((article) => article.slug === slug))
  .filter((article): article is Article => Boolean(article))
  .concat(listedArticles)
  .slice(0, 4);

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
  camisas: {
    lead: "Para definir telas y personalización de las prendas, consulta nuestras",
    anchor: "camisas de dotación en dril, oxford e índigo",
    href: "/camisas-de-dotacion/",
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
  "ley-dotacion-colombia-quien-tiene-derecho-fechas-entrega": "compras",
  "planear-compra-dotacion-diciembre": "compras",
  "como-armar-pliego-dotacion-epp-licitacion-privada": "compras",
  "como-crear-ficha-tecnica-dotacion-por-cargo": "compras",
  "como-estandarizar-dotaciones-por-cargo-y-area": "camisas",
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

export interface ArticleLink {
  label: string;
  href: string;
}

const category = (label: string, slug: string): ArticleLink => ({ label, href: `/categoria/${slug}/` });
const product = (name: string): ArticleLink => ({ label: name, href: productHref(name) });

const CLUSTER_PRODUCT_LINKS: Record<keyof typeof CLUSTERS, ArticleLink[]> = {
  compras: [
    category("Uniformes de trabajo", "uniformes-de-trabajo"),
    { label: "Calzado de dotación", href: "/calzado-de-dotacion/" },
    category("Elementos de protección personal", "epp"),
  ],
  multisede: [
    category("Uniformes de trabajo", "uniformes-de-trabajo"),
    category("Calzado de trabajo y seguridad", "calzado-de-trabajo"),
    category("Elementos de protección personal", "epp"),
  ],
  calzado: [
    category("Calzado de trabajo y seguridad", "calzado-de-trabajo"),
    { label: "Calzado de dotación", href: "/calzado-de-dotacion/" },
  ],
  calzadoDotacion: [
    { label: "Calzado de dotación", href: "/calzado-de-dotacion/" },
    category("Calzado de trabajo y seguridad", "calzado-de-trabajo"),
  ],
  epp: [
    category("Elementos de protección personal", "epp"),
    category("Calzado de trabajo y seguridad", "calzado-de-trabajo"),
  ],
  camisas: [
    { label: "Camisas de dotación", href: "/camisas-de-dotacion/" },
    category("Uniformes de trabajo", "uniformes-de-trabajo"),
  ],
  hospitalaria: [
    category("Uniformes hospitalarios y antifluidos", "hospitalaria"),
    category("Gorros y redecillas", "gorros-y-redecillas"),
  ],
};

const ARTICLE_PRODUCT_LINKS: Record<string, ArticleLink[]> = {
  "casco-de-seguridad-guia-compra": [product("Casco Dieléctrico"), product("Casco Ref. 1300E"), category("Elementos de protección personal", "epp")],
  "guantes-de-seguridad-guia-compra": [product("Guantes en Cuero Tipo Ingeniero"), product("Guantex Multiflex Steelpro"), category("Elementos de protección personal", "epp")],
  "protector-auditivo-guia-compra": [product("Tapón Auditivo Reutilizable"), product("Tapón para Oídos Desechable sin Cordón"), category("Elementos de protección personal", "epp")],
  "gafas-de-seguridad-guia-compra": [product("Careta para Esmeril"), category("Elementos de protección personal", "epp")],
  "trabajo-en-alturas-guia-epp": [product("Arnés H"), product("Silla de Suspensión"), category("Elementos de protección personal", "epp")],
  "dotacion-para-brigada-de-emergencias": [product("Chaleco Reflectivo"), product("Casco de Seguridad"), category("Elementos de protección personal", "epp")],
  "botas-de-seguridad-para-mujer": [product("Bota Workman Super Safety P/Seg + Plantilla en Acero"), category("Calzado de trabajo y seguridad", "calzado-de-trabajo")],
  "como-elegir-dotacion-hospitalaria-antifluido-clinicas-laboratorios": [product("Conjunto Antifluido Cierre Frontal Dama"), product("Bata de Laboratorio Hospitalaria Manga Larga"), category("Uniformes hospitalarios y antifluidos", "hospitalaria")],
  "dotacion-para-empresas-de-alimentos-uniformes-calzado-epp": [product("Bota Workman Food Industry Blanca"), category("Gorros y redecillas", "gorros-y-redecillas"), category("Uniformes de trabajo", "uniformes-de-trabajo")],
  "dotacion-para-empresas-logistica-bodegas-por-cargo": [product("Chaleco Reflectivo"), category("Calzado de trabajo y seguridad", "calzado-de-trabajo"), category("Uniformes de trabajo", "uniformes-de-trabajo")],
  "dotacion-personal-aseo-servicios-generales": [product("Guantes en Caucho Calibre 25"), { label: "Calzado de dotación", href: "/calzado-de-dotacion/" }, category("Uniformes de trabajo", "uniformes-de-trabajo")],
  "dotacion-personal-mantenimiento-facility-management": [product("Overol Azul Oscuro"), product("Guantes en Cuero Tipo Ingeniero"), category("Calzado de trabajo y seguridad", "calzado-de-trabajo")],
  "como-estandarizar-dotaciones-por-cargo-y-area": [{ label: "Camisas de dotación", href: "/camisas-de-dotacion/" }, product("Camiseta Tipo Polo Manga Corta"), product("Pantalón Dril Azul Oscuro")],
};

const RELATED_ARTICLES: Record<string, string[]> = {
  [LEY_DOTACION_SLUG]: [DOTACION_DICIEMBRE_SLUG, "acta-entrega-dotacion-epp-empresa", "checklist-dotacion-nuevos-ingresos-empresa", "cada-cuanto-renovar-uniformes-calzado-epp-empresa"],
  [DOTACION_DICIEMBRE_SLUG]: [LEY_DOTACION_SLUG, "acta-entrega-dotacion-epp-empresa", "como-cotizar-dotaciones-empresariales-sin-errores"],
  "acta-entrega-dotacion-epp-empresa": [LEY_DOTACION_SLUG, DOTACION_DICIEMBRE_SLUG, "checklist-dotacion-nuevos-ingresos-empresa", "control-dotacion-contratistas-personal-temporal"],
  "cada-cuanto-renovar-uniformes-calzado-epp-empresa": [LEY_DOTACION_SLUG, DOTACION_DICIEMBRE_SLUG, "como-crear-matriz-reposicion-epp-por-cargo-consumo", "politica-interna-dotacion-reposicion-empresas-multisede"],
  "checklist-dotacion-nuevos-ingresos-empresa": [LEY_DOTACION_SLUG, DOTACION_DICIEMBRE_SLUG, "acta-entrega-dotacion-epp-empresa", "como-consolidar-tallas-dotacion-por-sede-sin-errores"],
  "como-cotizar-dotaciones-empresariales-sin-errores": [DOTACION_DICIEMBRE_SLUG, "como-evaluar-proveedores-dotaciones-empresariales-colombia", "como-crear-ficha-tecnica-dotacion-por-cargo"],
  "como-evaluar-proveedores-dotaciones-empresariales-colombia": ["como-cotizar-dotaciones-empresariales-sin-errores", "control-calidad-dotaciones-empresariales-checklist-compras-sst", "como-hacer-prueba-piloto-dotaciones-empresariales"],
  "como-planear-presupuesto-anual-dotaciones-empresariales": [LEY_DOTACION_SLUG, "cada-cuanto-renovar-uniformes-calzado-epp-empresa", "como-definir-stock-minimo-dotaciones-por-sede"],
  "como-hacer-prueba-piloto-dotaciones-empresariales": ["como-evaluar-proveedores-dotaciones-empresariales-colombia", "reducir-cambios-devoluciones-talla-dotaciones-empresariales", "control-calidad-dotaciones-empresariales-checklist-compras-sst"],
  "control-calidad-dotaciones-empresariales-checklist-compras-sst": ["acta-entrega-dotacion-epp-empresa", "como-evaluar-proveedores-dotaciones-empresariales-colombia", "como-armar-pliego-dotacion-epp-licitacion-privada"],
  "como-armar-pliego-dotacion-epp-licitacion-privada": ["como-crear-ficha-tecnica-dotacion-por-cargo", "como-evaluar-proveedores-dotaciones-empresariales-colombia", "como-cotizar-dotaciones-empresariales-sin-errores"],
  "como-crear-ficha-tecnica-dotacion-por-cargo": ["como-estandarizar-dotaciones-por-cargo-y-area", "como-armar-pliego-dotacion-epp-licitacion-privada", "como-cotizar-dotaciones-empresariales-sin-errores"],
  "como-estandarizar-dotaciones-por-cargo-y-area": ["como-crear-ficha-tecnica-dotacion-por-cargo", "politica-interna-dotacion-reposicion-empresas-multisede", "como-planear-presupuesto-anual-dotaciones-empresariales"],
  "dotacion-para-empresas-de-alimentos-uniformes-calzado-epp": ["como-elegir-calzado-de-trabajo-segun-riesgo-operacion", "como-crear-ficha-tecnica-dotacion-por-cargo", "como-estandarizar-dotaciones-por-cargo-y-area"],
  "dotacion-para-empresas-logistica-bodegas-por-cargo": ["como-elegir-calzado-de-trabajo-segun-riesgo-operacion", "entregas-escalonadas-dotacion-por-sede-y-turno", "como-crear-matriz-reposicion-epp-por-cargo-consumo"],
  "dotacion-personal-aseo-servicios-generales": ["dotacion-personal-mantenimiento-facility-management", "como-elegir-calzado-de-trabajo-comodo-jornadas-largas", LEY_DOTACION_SLUG],
  "dotacion-personal-mantenimiento-facility-management": ["dotacion-personal-aseo-servicios-generales", "como-elegir-calzado-de-trabajo-segun-riesgo-operacion", "como-crear-matriz-reposicion-epp-por-cargo-consumo"],
  "getting-started": ["best-practices", "como-cotizar-dotaciones-empresariales-sin-errores", LEY_DOTACION_SLUG],
  "best-practices": ["getting-started", "como-evaluar-proveedores-dotaciones-empresariales-colombia", "como-cotizar-dotaciones-empresariales-sin-errores"],
  "politica-interna-dotacion-reposicion-empresas-multisede": ["como-definir-stock-minimo-dotaciones-por-sede", "entregas-escalonadas-dotacion-por-sede-y-turno", "cada-cuanto-renovar-uniformes-calzado-epp-empresa"],
  "entregas-escalonadas-dotacion-por-sede-y-turno": ["como-consolidar-tallas-dotacion-por-sede-sin-errores", "politica-interna-dotacion-reposicion-empresas-multisede", DOTACION_DICIEMBRE_SLUG],
  "como-definir-stock-minimo-dotaciones-por-sede": ["como-definir-stock-minimo-epp-dotacion-por-sede", "politica-interna-dotacion-reposicion-empresas-multisede", "como-planear-presupuesto-anual-dotaciones-empresariales"],
  "como-definir-stock-minimo-epp-dotacion-por-sede": ["como-definir-stock-minimo-dotaciones-por-sede", "como-crear-matriz-reposicion-epp-por-cargo-consumo", "entregas-escalonadas-dotacion-por-sede-y-turno"],
  "como-consolidar-tallas-dotacion-por-sede-sin-errores": ["reducir-cambios-devoluciones-talla-dotaciones-empresariales", "entregas-escalonadas-dotacion-por-sede-y-turno", "checklist-dotacion-nuevos-ingresos-empresa"],
  "control-dotacion-contratistas-personal-temporal": ["acta-entrega-dotacion-epp-empresa", "checklist-dotacion-nuevos-ingresos-empresa", "politica-interna-dotacion-reposicion-empresas-multisede"],
  "reducir-cambios-devoluciones-talla-dotaciones-empresariales": ["como-consolidar-tallas-dotacion-por-sede-sin-errores", "como-hacer-prueba-piloto-dotaciones-empresariales", "checklist-dotacion-nuevos-ingresos-empresa"],
  "como-elegir-calzado-de-trabajo-comodo-jornadas-largas": ["como-elegir-calzado-de-trabajo-segun-riesgo-operacion", "botas-de-seguridad-para-mujer", "cada-cuanto-renovar-uniformes-calzado-epp-empresa"],
  "como-elegir-calzado-de-trabajo-segun-riesgo-operacion": ["como-elegir-calzado-de-trabajo-comodo-jornadas-largas", "botas-de-seguridad-para-mujer", "dotacion-para-empresas-de-alimentos-uniformes-calzado-epp"],
  "botas-de-seguridad-para-mujer": ["como-elegir-calzado-de-trabajo-segun-riesgo-operacion", "como-elegir-calzado-de-trabajo-comodo-jornadas-largas", "cada-cuanto-renovar-uniformes-calzado-epp-empresa"],
  "protector-auditivo-guia-compra": ["gafas-de-seguridad-guia-compra", "casco-de-seguridad-guia-compra", "como-crear-matriz-reposicion-epp-por-cargo-consumo"],
  "gafas-de-seguridad-guia-compra": ["protector-auditivo-guia-compra", "casco-de-seguridad-guia-compra", "guantes-de-seguridad-guia-compra"],
  "casco-de-seguridad-guia-compra": ["trabajo-en-alturas-guia-epp", "gafas-de-seguridad-guia-compra", "dotacion-para-brigada-de-emergencias"],
  "guantes-de-seguridad-guia-compra": ["como-crear-matriz-reposicion-epp-por-cargo-consumo", "gafas-de-seguridad-guia-compra", "casco-de-seguridad-guia-compra"],
  "trabajo-en-alturas-guia-epp": ["casco-de-seguridad-guia-compra", "guantes-de-seguridad-guia-compra", "dotacion-para-brigada-de-emergencias"],
  "como-crear-matriz-reposicion-epp-por-cargo-consumo": ["como-definir-stock-minimo-epp-dotacion-por-sede", "cada-cuanto-renovar-uniformes-calzado-epp-empresa", "guantes-de-seguridad-guia-compra"],
  "dotacion-para-brigada-de-emergencias": ["casco-de-seguridad-guia-compra", "trabajo-en-alturas-guia-epp", "acta-entrega-dotacion-epp-empresa"],
  "como-elegir-dotacion-hospitalaria-antifluido-clinicas-laboratorios": ["como-crear-ficha-tecnica-dotacion-por-cargo", "como-consolidar-tallas-dotacion-por-sede-sin-errores", "control-calidad-dotaciones-empresariales-checklist-compras-sst"],
};

/**
 * Related reading for the block after each article: curated articles (falling
 * back to the same topic cluster) plus products and categories of the cluster.
 */
export function getArticleLinks(slug: string) {
  const clusterKey = ARTICLE_CLUSTER[slug] ?? "compras";
  const relatedSlugs =
    RELATED_ARTICLES[slug] ??
    articles
      .filter((article) => article.slug !== slug && (ARTICLE_CLUSTER[article.slug] ?? "compras") === clusterKey)
      .slice(0, 3)
      .map((article) => article.slug);

  return {
    articles: relatedSlugs
      .map((relatedSlug) => articles.find((article) => article.slug === relatedSlug))
      .filter((article): article is Article => Boolean(article)),
    products: ARTICLE_PRODUCT_LINKS[slug] ?? CLUSTER_PRODUCT_LINKS[clusterKey],
  };
}
