import type { ImageMetadata } from "astro";
import heroUniforme from "../img/Categoria uniforme apple.png";

export interface PrendaLandingData {
  route: string;
  title: string;
  description: string;
  heading: string;
  heroAlt: string;
  heroDescription: string;
  heroImage: ImageMetadata;
  /** Catalog product names (exact) shown in the grid. */
  productNames: string[];
  statsLabel: string;
  usesEyebrow: string;
  usesHeading: string;
  usesIntro: string;
  uses: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  quoteMessage: string;
  serviceType: string;
  siblings: { href: string; label: string }[];
}

const COMMON_FAQ = {
  minimo: {
    question: "¿Hay pedido mínimo?",
    answer: "No hay pedido mínimo por producto. Para envíos, la compra mínima es de $500.000 sumando todos los productos del pedido.",
  },
  precios: {
    question: "¿Publican lista de precios?",
    answer: "No. Cada pedido se cotiza según referencia, cantidad, tallas, personalización y ciudad de entrega. Envíanos la solicitud y te enviamos una cotización formal para tu empresa.",
  },
};

export const prendas: Record<string, PrendaLandingData> = {
  "camisas-de-dotacion": {
    route: "camisas-de-dotacion",
    title: "Camisas de Dotación en Medellín | Dril, Oxford e Índigo",
    description: "Camisas de dotación para empresas en Medellín: dril azul y caqui, oxford e índigo, en manga corta y larga. Con bordado o serigrafía. Sin pedido mínimo por producto.",
    heading: "Camisas de dotación para empresas en Medellín",
    heroAlt: "Camisas de dotación para empresas",
    heroDescription: "Camisas en dril, oxford e índigo para equipos operativos, administrativos y de atención al cliente. Cotiza por referencia, talla y personalización.",
    heroImage: heroUniforme,
    productNames: [
      "Camisa Dril Azul Oscuro Manga Larga",
      "Camisa Dril Azul Oscuro Manga Corta",
      "Camisa Dril Caqui Manga Larga",
      "Camisa Dril Caqui Manga Corta",
      "Camisa Oxford Hombre",
      "Camisa Índigo",
      "Camisa EPM",
    ],
    statsLabel: "referencias de camisas de dotación en dril, oxford e índigo.",
    usesEyebrow: "Según el cargo",
    usesHeading: "Qué camisa de dotación elegir para cada equipo",
    usesIntro: "La camisa de dotación se elige por la tela, el clima de la operación y la imagen que debe proyectar el cargo. Estas son las tres familias del catálogo.",
    uses: [
      {
        title: "Dril: operación, campo y mantenimiento",
        text: "Camisa en dril azul oscuro o caqui, en manga larga o corta. Es la opción para dotaciones operativas y de campo: tela resistente y colores sobrios. La manga corta es más fresca para jornadas con calor; la larga cubre más el brazo.",
      },
      {
        title: "Oxford: oficina y atención al cliente",
        text: "Camisa oxford para hombre, de estilo clásico y presentación formal. Sirve para uniformes corporativos de oficina, recepción y atención al público.",
      },
      {
        title: "Índigo e institucional",
        text: "La camisa índigo da una apariencia moderna y resistente para jornadas donde importa la presencia. La camisa institucional es una prenda de presentación uniforme para equipos con identidad corporativa.",
      },
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre una camisa de dril y una oxford?",
        answer: "La camisa de dril es de tela resistente y se usa en dotaciones operativas, de campo y de mantenimiento. La oxford tiene una imagen más formal y se usa en oficina y atención al cliente. Si tienes ambos tipos de cargo, puedes cotizar las dos en una sola solicitud.",
      },
      {
        question: "¿Se pueden marcar las camisas con el logo de la empresa?",
        answer: "Sí. Se pueden personalizar con bordado, serigrafía o vinilo textil según el diseño. Los pedidos con personalización tienen un plazo de hasta 45 días; el plazo exacto se confirma en la cotización.",
      },
      {
        question: "¿Cuánto tarda la entrega?",
        answer: "Las camisas de línea y las referencias en inventario pueden entregarse de inmediato, según disponibilidad de tallas y colores. Los pedidos especiales, con confección o personalización, tardan hasta 45 días.",
      },
      {
        question: "¿Cómo envío las tallas?",
        answer: "Puedes enviar una lista con nombre, cargo y talla de cada persona, o pedirnos apoyo para organizarla por sede. Tomar las tallas con tiempo reduce los cambios y las devoluciones.",
      },
      COMMON_FAQ.minimo,
      COMMON_FAQ.precios,
      {
        question: "¿Atienden empresas fuera de Medellín?",
        answer: "Sí. Atendemos Medellín y el Valle de Aburrá y despachamos a otras ciudades de Colombia con una compra mínima de $500.000.",
      },
    ],
    quoteMessage: "Hola, quiero cotizar camisas de dotación para una empresa. Necesito información sobre referencias, tallas y cantidades.",
    serviceType: "Suministro de camisas de dotación en dril, oxford e índigo para empresas",
    siblings: [],
  },
};
