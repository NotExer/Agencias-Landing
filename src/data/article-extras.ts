/**
 * Optional extras for specific blog articles: a short answer shown above the
 * body (for search snippets and AI answers), visible FAQs mirrored as FAQPage
 * structured data, and a seasonal quote CTA.
 */
export interface ArticleFaq {
  question: string;
  answer: string;
}

export interface ArticleExtras {
  /** ISO date of the last substantive review; used for dateModified. */
  updatedISO?: string;
  /** Visible label for the review date. */
  updatedLabel?: string;
  summaryHeading?: string;
  summary?: string[];
  faqs?: ArticleFaq[];
  cta?: {
    heading: string;
    text: string;
    whatsappMessage: string;
    label: string;
    secondaryHref?: string;
    secondaryLabel?: string;
  };
}

export const ARTICLE_EXTRAS: Record<string, ArticleExtras> = {
  "ley-dotacion-colombia-quien-tiene-derecho-fechas-entrega": {
    updatedISO: "2026-11-06",
    updatedLabel: "6 nov 2026",
    summaryHeading: "Respuesta corta",
    summary: [
      "Tiene derecho a la dotación el trabajador que lleva más de tres meses en la empresa y gana hasta dos salarios mínimos (artículo 230 del CST).",
      "Se entrega tres veces al año: el 30 de abril, el 31 de agosto y el 20 de diciembre (artículo 232).",
      "No se puede pagar en dinero (artículo 234). El Ministerio del Trabajo acepta el bono de dotación si es intransferible, no se cambia por dinero y solo sirve para comprar calzado y vestido de labor.",
    ],
    faqs: [
      {
        question: "¿Quién tiene derecho a la dotación en Colombia?",
        answer:
          "El trabajador de un empleador con uno o más trabajadores permanentes que, en la fecha de entrega, lleva más de tres meses de servicio y gana hasta dos salarios mínimos legales mensuales vigentes. Así lo establece el artículo 230 del Código Sustantivo del Trabajo.",
      },
      {
        question: "¿Cuáles son las fechas de entrega de la dotación?",
        answer:
          "El artículo 232 del CST fija tres fechas al año: 30 de abril, 31 de agosto y 20 de diciembre.",
      },
      {
        question: "¿Un trabajador que entró en septiembre recibe la dotación del 20 de diciembre?",
        answer:
          "Depende de la fecha de ingreso. La antigüedad se revisa en cada fecha de entrega: si el 20 de diciembre el trabajador ya cumple más de tres meses de servicio, le corresponde. Quien entró a finales de septiembre todavía no los cumple y recibe su primera dotación el 30 de abril.",
      },
      {
        question: "¿Se puede pagar la dotación en dinero?",
        answer:
          "No. El artículo 234 del CST prohíbe sustituir la dotación por dinero. Compensarla en efectivo no corrige el incumplimiento.",
      },
      {
        question: "¿Es legal entregar la dotación con bonos?",
        answer:
          "Según el Concepto 23920 de 2025 del Ministerio del Trabajo, el bono es un mecanismo válido si es intransferible, no representa un valor en dinero, no es negociable y solo sirve para que el trabajador compre calzado y vestido de labor. Los conceptos del Ministerio son orientadores; ante una controversia decide un juez.",
      },
      {
        question: "¿Con cuánto tiempo debo pedir la dotación de diciembre?",
        answer:
          "Las referencias de línea pueden entregarse de inmediato según el inventario. Las prendas especiales o con bordado tardan hasta 45 días, así que para llegar al 20 de diciembre conviene hacer el pedido en la primera semana de noviembre.",
      },
    ],
    cta: {
      heading: "Cotiza la dotación de diciembre",
      text: "La entrega del 20 de diciembre es la última del año. Envíanos cargos, cantidades y tallas y te decimos qué referencias llegan a tiempo.",
      whatsappMessage: "Hola, quiero cotizar la dotación de diciembre para mi empresa.",
      label: "Cotizar por WhatsApp",
      secondaryHref: "/articulos-del-blog/planear-compra-dotacion-diciembre/",
      secondaryLabel: "Cómo planear la compra de diciembre",
    },
  },
};

export function getArticleExtras(slug: string): ArticleExtras | undefined {
  return ARTICLE_EXTRAS[slug];
}
