const imageModules = import.meta.glob<{ default: { src: string } }>(
  "../img/*.{avif,jpg,jpeg,jfif,png,webp}",
  { eager: true }
);

/** Uso: img("bota-soldador.avif") → URL lista para usar en <img src> */
function img(filename: string): string {
  return imageModules[`../img/${filename}`]?.default?.src ?? "";
}

// ── TIPOS (no tocar) ─────────────────────────────────────────

export type HighlightIcon = "durabilidad" | "comodidad" | "personalizable";
export type CategoryName =
  | "Calzado de Trabajo"
  | "Uniformes de Trabajo"
  | "EPP"
  | "Hospitalaria"
  | "Gorros y Redecillas"
  | "Promocionales";



const DEFAULT_HIGHLIGHTS = [
  { icon: "durabilidad"    as HighlightIcon, label: "Durabilidad Garantizada" },
  { icon: "comodidad"      as HighlightIcon, label: "Máxima Comodidad"        },
  { icon: "personalizable" as HighlightIcon, label: "Personalizable"          },
];


interface CatalogEntry {
  name:        string;
  category:    CategoryName;
  images:      string[];
  description: string[];
  price:        number;
  inStock?:    boolean;
  highlights?: typeof DEFAULT_HIGHLIGHTS;
  specs?:      string;
}


const CATALOG: CatalogEntry[] = [
  {
    name:"Bota Inyectada p/p Ref: Hibrida / 100% Libre de Metal",
    category: "Calzado de Trabajo",
    images:   ["Hibrida 1.avif", "Hibrida 2.avif"],
    price:    96500, 
    description: [
      "Botas en cuero y lona de 6 pulgadas de altura, con suelas de poliuretano bicolor, diseñadas para ofrecer ligereza y seguridad. Ideales para condiciones donde se requiere resistencia a hidrocarburos y propiedades dieléctricas",
    ],
    specs: "Puntera de policarbonato no metálica · Corte en cuero · Suela bicolor PU resistente a hidrocarburos, abrasión y flexión · Dieléctrica",
  },
  

  {
    name:     "Bota Inyectada p/p Ref: Gazella / 100% Libre de Metal",
    category: "Calzado de Trabajo",
    images:   ["Gazella 1.avif", "Gazella 2.avif"],
    price:    99500, 
    description: [
      "Botas Gazella en cuero de 6.0” de altura, con suelas de poliuretano bicolor, diseñadas para ofrecer ligereza y seguridad. Ideales para condiciones donde se requiere resistencia a hidrocarburos y propiedades dieléctricas"
    ],  
    specs: "Color blanco · Resistente a agua y aceites · Suela antideslizante · Cumple normas higiene alimentaria",
    },

    {
    name:"Bota Soldador Inyectada",  
    category: "Calzado de Trabajo",
    images:   ["Soldador 1.avif", "Soldador 2.avif"],
    price:    189000, 
    description: [
      "La Bota Soldador Inyectada está diseñada para brindar protección, confort y resistencia en trabajos de soldadura y operaciones industriales. Cuenta con puntera de policarbonato no metálica, corte en cuero mocasín, plantilla transpirable en EVA y suela bicolor en poliuretano.",
      "100% libre de metal y con propiedades dieléctricas, es la opción ideal para empresas que priorizan la protección técnica sin sacrificar comodidad en jornadas prolongadas.",
    ],  
    specs: "Puntera de policarbonato no metálica · Corte en cuero mocasín · Plantilla EVA transpirable · Suela bicolor PU resistente a hidrocarburos, abrasión y flexión · Dieléctrica",
  },  
  
  
  {
    name:     "Bota Plástica Caña Alta (Agrícola)",
    category: "Calzado de Trabajo",
    images:   ["Bota Plastica Caña Alta.avif"],
    price:    189000, 
    description: [
      "Bota de caña alta fabricada en PVC para uso agrícola y trabajos en campo. Protege contra humedad, barro y contacto con productos químicos del campo.",
    ],  
    specs: "Material: PVC · Caña alta · Resistente a humedad y abrasión · Suela antideslizante",
  },  
  
  {
    name:     "Bota Workman Food Industry Blanca",
    category: "Calzado de Trabajo",
    images:   ["Bota Workman Food Industry Blanca.avif"],
    price:    189000, 
    description: [
      "Bota inyectada en P.V.C 100% impermeable, resistente a ácidos grasos, ideales para industrias de alimentos.",
    ],  
    specs: "Material: PVC · Caña alta · Resistente a humedad y abrasión · Suela antideslizante",
  },  

  
    {
      name:     "Bota Lisa Vulcanizada",
      category: "Calzado de Trabajo",
      images:   ["Bota Lisa Vulcanizada.avif"],
      price:    189000, 
      description: [
        "Bota Lisa Vulcanizada, diseñada para brindar protección, confort y resistencia en trabajos de soldadura y operaciones industriales. Cuenta con puntera de policarbonato no metálica, corte en cuero mocasín, plantilla transpirable en EVA y suela bicolor en poliuretano.",
        "100% libre de metal y con propiedades dieléctricas, es la opción ideal para empresas que priorizan la protección técnica sin sacrificar comodidad en jornadas prolongadas.",
      ],
      specs: "Tela: Dril 100% algodón · Corte clásico · Tallas S–3XL · Personalizable con bordado",
    },
  
  
    {
      name:     "Bota Lisa Nobuck Vulcanizada",
      category: "Calzado de Trabajo",
      images:   ["Bota Lisa Nobuck Vulcanizada.avif"],
      price:    189000, 
      description: [
        "Bota Lisa Nobuck Vulcanizada, diseñada para brindar protección, confort y resistencia en trabajos de soldadura y operaciones industriales. Cuenta con puntera de policarbonato no metálica, corte en cuero mocasín, plantilla transpirable en EVA y suela bicolor en poliuretano.",
        "100% libre de metal y con propiedades dieléctricas, es la opción ideal para empresas que priorizan la protección técnica sin sacrificar comodidad en jornadas prolongadas.",
      ],
      specs: "Tela: Dril 100% algodón · Corte clásico · Tallas S–3XL · Personalizable con bordado",
    },


  
  {
    name:     "Bota Macha Alta Negra",
    category: "Calzado de Trabajo",
    images:   ["Bota Macha Alta Negra.jpg"],
    price:    189000, 
    description: [
      "Botas La Macha Alta Negra, con doble inyección en PVC, caña negra y suela crepé, diseñadas para brindar mayor confort al caminar y un excelente agarre. Ideales para condiciones donde se requiere resistencia a hidrocarburos y propiedades dieléctricas.",
    ],  
    specs: "Material: PVC · Caña alta · Resistente a humedad y abrasión · Suela antideslizante",
  },  

  {
    name:     "Zapaton Plastico Machita Dama",
    category: "Calzado de Trabajo",
    images:   ["Zapaton Plastico Machita Dama.jpg"],
    price:    189000, 
    description: [
      "Este zapato de protección Machita está fabricado con un corte en cuero bovino de alta calidad y cuenta con una puntera de fibras sintéticas que le dan firmeza. Su suela de caucho vulcanizado proporciona un excelente agarre y resistencia a la abrasión.",
    ],  
    specs: "Material: PVC · Caña alta · Resistente a humedad y abrasión · Suela antideslizante",
  },  



    {
    name:     "Bota Workman Super Safety P/Seg + Plantilla en Acero",  
    category: "Calzado de Trabajo",
    images:   ["Bota Workman Super Safety.avif"],
    price:    189000, 
    description: [
      "Este zapato de protección Machita está fabricado con un corte en cuero bovino de alta calidad y cuenta con una puntera de fibras sintéticas que le dan firmeza. Su suela de caucho vulcanizado proporciona un excelente agarre y resistencia a la abrasión.",
    ],  
    specs: "Material: PVC · Caña alta · Resistente a humedad y abrasión · Suela antideslizante",
  },  

  

    {
    name:     "Bota Workman Safety Food Industry Blanca",
    category: "Calzado de Trabajo",
    images:   ["Bota Workman Safety Food Industry Blanca.avif"],
    price:    189000, 
    description: [
      "Este zapato de protección Machita está fabricado con un corte en cuero bovino de alta calidad y cuenta con una puntera de fibras sintéticas que le dan firmeza. Su suela de caucho vulcanizado proporciona un excelente agarre y resistencia a la abrasión.",
    ],
    specs: "Material: PVC · Caña alta · Resistente a humedad y abrasión · Suela antideslizante",
  },

  
    {
    name:     "Bota Workman Safety Waterproof P/Seg Negra",
    category: "Calzado de Trabajo",
    images:   ["Bota Workman Safety Waterproof.avif"],
    price:    189000, 
    description: [
      "Este zapato de protección Machita está fabricado con un corte en cuero bovino de alta calidad y cuenta con una puntera de fibras sintéticas que le dan firmeza. Su suela de caucho vulcanizado proporciona un excelente agarre y resistencia a la abrasión.",
    ],
    specs: "Material: PVC · Caña alta · Resistente a humedad y abrasión · Suela antideslizante",
  },
  

  {
    name:     "Camisa Oxford Hombre",
    category: "Uniformes de Trabajo",
    images:   ["Camisa oxford hombre.jpg"],
    price:    119000,
    description: [
      "Camisa oxford para hombre con una imagen formal y profesional, ideal para dotaciones de oficina y atención al cliente.",
      "Su estilo clásico la hace perfecta para uniformes corporativos elegantes.",
    ],
    specs: "Oxford masculino · Uso corporativo · Presentación formal · Corte clásico",
  },

  {
    name:     "Camisa Índigo",
    category: "Uniformes de Trabajo",
    images:   ["Camisa indigo.jpg"],
    price:    119000,
    description: [
      "Camisa en tono índigo para dotaciones con una apariencia moderna y resistente.",
      "Diseñada para jornadas laborales donde se necesita buena presencia y durabilidad.",
    ],
    specs: "Tela índigo · Uso laboral · Resistente · Imagen moderna",
  },

  {
    name:     "Camisa EPM",
    category: "Uniformes de Trabajo",
    images:   ["Camisa EPM.jpg"],
    price:    119000,
    description: [
      "Camisa institucional para dotaciones empresariales con una presentación limpia y uniforme.",
      "Pensada para equipos que necesitan identidad corporativa y comodidad en el día a día.",
    ],
    specs: "Camisa institucional · Uso corporativo · Presentación uniforme · Cómoda",
  },

  {
    name:     "Camisa Dril Caqui Manga Larga",
    category: "Uniformes de Trabajo",
    images:   ["Camisa drill caqui manga larga 1.jpg", "Camisa drill caqui manga larga 2.jpg"],
    price:    129000,
    description: [
      "Camisa en dril caqui de manga larga, ideal para dotaciones operativas, empresariales y de campo.",
      "Su tela resistente y su color sobrio la convierten en una excelente opción para uniformes de trabajo.",
    ],
    specs: "Dril caqui · Manga larga · Uso operativo · Alta resistencia",
  },

  {
    name:     "Camisa Dril Caqui Manga Corta",
    category: "Uniformes de Trabajo",
    images:   ["Camisa drill caqui manga corta 1.jpg", "Camisa drill caqui manga corta 2.jpg"],
    price:    119000,
    description: [
      "Camisa en dril caqui de manga corta para dotaciones más frescas sin perder resistencia ni presentación.",
      "Una prenda práctica para equipos de trabajo que necesitan comodidad durante la jornada.",
    ],
    specs: "Dril caqui · Manga corta · Uso corporativo · Cómoda y resistente",
  },

  {
    name:     "Camisa Dril Azul Oscuro Manga Larga",
    category: "Uniformes de Trabajo",
    images:   ["Camisa drill azul oscuro manga larga 1.jpg", "Camisa drill azul oscuro manga larga 2.jpg"],
    price:    129000,
    description: [
      "Camisa en dril azul oscuro de manga larga para uniformes de trabajo con una imagen sobria y profesional.",
      "Su confección está pensada para jornadas exigentes y dotaciones institucionales.",
    ],
    specs: "Dril azul oscuro · Manga larga · Uso laboral · Acabado profesional",
  },

  {
    name:     "Camisa Dril Azul Oscuro Manga Corta",
    category: "Uniformes de Trabajo",
    images:   ["Camisa drill azul oscuro manga corta 1.jpg", "Camisa drill azul oscuro manga corta 2.png"],
    price:    119000,
    description: [
      "Camisa en dril azul oscuro de manga corta, ideal para dotaciones cómodas y resistentes para uso diario.",
      "Es una prenda funcional para equipos que buscan una presentación uniforme y fresca.",
    ],
    specs: "Dril azul oscuro · Manga corta · Uso corporativo · Dotación funcional",
  },

  {
    name:     "Camiseta Tipo Polo Manga Corta",
    category: "Uniformes de Trabajo",
    images:   ["Camiseta tipo polo manga corta 1.jpg", "Camiseta tipo polo manga corta 2.jpg"],
    price:    69000,
    description: [
      "Camiseta tipo polo de manga corta para dotaciones casuales y corporativas, con una imagen limpia y profesional.",
      "Perfecta para equipos que requieren comodidad y buena presentación durante toda la jornada.",
    ],
    specs: "Polo manga corta · Uso corporativo · Tejido cómodo · Presentación profesional",
  },

  {
    name:     "Camiseta Tipo Polo Manga Larga",
    category: "Uniformes de Trabajo",
    images:   ["Camiseta tipo polo manga larga 1.jpg", "Camiseta tipo polo manga larga 2.jpg"],
    price:    79000,
    description: [
      "Camiseta tipo polo de manga larga para dotación, ideal cuando se requiere mayor cobertura sin perder una imagen corporativa.",
      "Es una opción versátil para diferentes áreas operativas y de servicio.",
    ],
    specs: "Polo manga larga · Uso corporativo · Cobertura adicional · Confort diario",
  },

  {
    name:     "Camiseta T-Shirt Manga Corta",
    category: "Uniformes de Trabajo",
    images:   ["Camiseta t-shirt manga corta 1.jpg", "Camiseta t-shirt manga corta 2.jpg"],
    price:    59000,
    description: [
      "Camiseta t-shirt de manga corta para dotaciones ligeras, promociones internas o uso diario de personal.",
      "Su corte sencillo permite una personalización fácil para empresas y equipos de trabajo.",
    ],
    specs: "T-shirt manga corta · Uso diario · Personalizable · Ligera y cómoda",
  },

  {
    name:     "Camiseta T-Shirt Manga Larga",
    category: "Uniformes de Trabajo",
    images:   ["Camiseta t-shirt manga larga 1.jpg", "Camiseta t-shirt manga larga 2.jpg"],
    price:    69000,
    description: [
      "Camiseta t-shirt de manga larga para quienes buscan una dotación cómoda con mayor cobertura.",
      "Funciona bien en ambientes de trabajo que requieren una prenda ligera y resistente.",
    ],
    specs: "T-shirt manga larga · Uso corporativo · Ligera · Cómoda y resistente",
  },

  {
    name:     "Pantalón EPM",
    category: "Uniformes de Trabajo",
    images:   ["Pantalon EPM.jpg"],
    price:    139000,
    description: [
      "Pantalón de dotación con acabado profesional, ideal para uniformes institucionales y corporativos.",
      "Su diseño busca comodidad, resistencia y una silueta limpia para jornadas laborales prolongadas.",
    ],
    specs: "Uniforme institucional · Corte clásico · Uso diario · Alta resistencia al desgaste",
  },

  {
    name:     "Pantalón Dril Caqui",
    category: "Uniformes de Trabajo",
    images:   ["Pantalon Drill caqui 1.png", "Pantalon Drill caqui 2.png"],
    price:    139000,
    description: [
      "Pantalón en dril color caqui, pensado para dotaciones funcionales que necesitan resistencia y una apariencia sobria.",
      "Es una prenda versátil para empresas que buscan uniformes durables y cómodos para uso diario.",
    ],
    specs: "Dril caqui · Corte clásico · Uso corporativo · Resistente y cómodo",
  },

  {
    name:     "Pantalón Dril Azul Oscuro",
    category: "Uniformes de Trabajo",
    images:   ["Pantalon Drill azul oscuro 1.png", "Pantalon Drill azul oscuro 2.jpg", "Pantalon drill azul oscuro.jpg"],
    price:    139000,
    description: [
      "Pantalón en dril azul oscuro para dotaciones corporativas, con una presentación sobria y un acabado resistente.",
      "Sus diferentes ángulos permiten apreciar mejor el ajuste y la confección de la prenda.",
    ],
    specs: "Dril azul oscuro · Corte clásico · Dotación empresarial · Alta durabilidad",
  },

  {
    name:     "Overol Azul Oscuro",
    category: "Uniformes de Trabajo",
    images:   ["Overol azul oscuro.jpg"],
    price:    159000,
    description: [
      "Overol en color azul oscuro pensado para labores operativas donde se necesita una prenda integral, resistente y cómoda.",
      "Ideal para equipos de mantenimiento, industria y operaciones generales.",
    ],
    specs: "Overol de dotación · Color azul oscuro · Uso operativo · Diseño funcional",
  },

  {
    name:     "Pava EPM",
    category: "Uniformes de Trabajo",
    images:   ["Pava EPM 1.avif", "Pava EPM 2.jpg"],
    price:    99000,
    description: [
      "Pava en dril desarrollada para dotaciones institucionales y de operación, con una confección resistente y cómoda para uso diario.",
      "Su diseño se adapta a labores de campo, mantenimiento y operación donde se requiere protección ligera y buena presentación.",
    ],
    specs: "Dril resistente · Uso institucional · Ajuste cómodo · Ideal para labores operativas",
  },

  {
    name:     "Pava en Dril con Solapa",
    category: "Uniformes de Trabajo",
    images:   ["Pava en drill con solapa.jpg"],
    price:    99000,
    description: [
      "Pava elaborada en dril con solapa, pensada para brindar cobertura y una presentación uniforme para equipos de trabajo.",
      "Es una prenda práctica para dotaciones empresariales que necesitan comodidad y durabilidad en el uso cotidiano.",
    ],
    specs: "Dril de alta resistencia · Solapa frontal · Uso operativo · Confección para dotación",
  },

  {
    name:     "Saco Blanco Clásico",
    category: "Uniformes de Trabajo",
    images:   ["Saco blanco 1.jpg", "Saco blanco 2.jpg"],
    price:    129000,
    description: [
      "Saco clásico en color blanco, diseñado para presentaciones limpias y uniformes de trabajo que requieren una imagen impecable y profesional.",
      "Su corte cómodo facilita el movimiento durante la jornada y funciona muy bien para dotaciones corporativas y administrativas.",
    ],
    specs: "Tela ligera de uso corporativo · Corte clásico · Presentación formal · Ideal para dotación empresarial",
  },

  {
    name:     "Blue Jean Hombre",
    category: "Uniformes de Trabajo",
    images:   ["Blue jean hombre.jpg"],
    price:    149000,
    description: [
      "Blue jean para hombre con un corte clásico, pensado para dotaciones versátiles y cómodas.",
      "Funciona bien como prenda de uniforme para trabajos donde se necesita resistencia y facilidad de movimiento.",
    ],
    specs: "Jean masculino · Corte clásico · Uso laboral · Resistente",
  },

  {
    name:     "Casco de Seguridad",
    category: "EPP",
    images:   ["Casco blanco.avif"],
    price:    99000, 
    description: [
      "Casco de seguridad industrial certificado, diseñado para proteger la cabeza de impactos y objetos en caída en entornos de construcción e industria.",
    ],
    specs: "Certificación: NTC 1523 · Material: polietileno de alta densidad · Suspensión de 4 puntos · Ranura para accesorios",
  },
  
];


export function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function productHref(name: string): string {
  return `/producto/${slugify(name)}`;
}

export interface Product {
  slug:        string;
  name:        string;
  category:    string;
  price:       number; 
  images:      string[];
  highlights:  typeof DEFAULT_HIGHLIGHTS;
  description: string[];
  inStock:     boolean;
  info:        { title: string; content: string };
}

export const products: Product[] = CATALOG.map((entry) => ({
  slug:        slugify(entry.name),
  name:        entry.name,
  category:    entry.category,
  price:       entry.price,
  images:      entry.images.map(img),
  highlights:  entry.highlights ?? DEFAULT_HIGHLIGHTS,
  description: entry.description,
  inStock:     entry.inStock ?? true,
  info: {
    title:   "Información",
    content: entry.specs ?? "Especificaciones técnicas próximamente.",
  },
}));

// Auto-construye las categorías del megamenú desde el catálogo
export interface CategoryItem { image: string; image2?: string; name: string }
export interface Category {
  label:    string;
  href:     string;
  featured: CategoryItem[];
  products: string[];
}

/** Convierte un label de categoría al slug usado en ?categoria= */
export function categorySlug(label: string): string {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const CATEGORY_CONFIG: { label: CategoryName; href: string }[] = [
  { label: "Calzado de Trabajo",   href: `/producto?categoria=${categorySlug("Calzado de Trabajo")}`   },
  { label: "Uniformes de Trabajo", href: `/producto?categoria=${categorySlug("Uniformes de Trabajo")}` },
  { label: "EPP",                  href: `/producto?categoria=${categorySlug("EPP")}`                  },
  { label: "Hospitalaria",         href: `/producto?categoria=${categorySlug("Hospitalaria")}`         },
  { label: "Gorros y Redecillas",  href: `/producto?categoria=${categorySlug("Gorros y Redecillas")}`  },
  { label: "Promocionales",        href: `/producto?categoria=${categorySlug("Promocionales")}`        },
];

export const categories: Category[] = CATEGORY_CONFIG.map(({ label, href }) => {
  const catProducts = products.filter((p) => p.category === label);
  return {
    label,
    href,
    featured:  catProducts.slice(0, 3).map((p) => ({ image: p.images[0], image2: p.images[1], name: p.name })),
    products:  catProducts.map((p) => p.name),
  };
});
