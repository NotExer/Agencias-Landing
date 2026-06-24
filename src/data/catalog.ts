const imageModules = import.meta.glob<{ default: { src: string } }>(
  "../img/*.{avif,jpg,jpeg,png,webp}",
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
    name:     "Pantalón Dril Clásico Hombre Caqui",
    category: "Uniformes de Trabajo",
    images:   ["Producto 2.avif"],
    price:    189000, 
    description: [
      "Pantalón en dril de alta resistencia, corte clásico en color caqui. Ideal para empresas que buscan uniformes duraderos y con presencia profesional.",
      "Disponible para personalización con bordados o estampados corporativos.",
    ],
    specs: "Tela: Dril 100% algodón · Corte clásico · Tallas S–3XL · Personalizable con bordado",
  },



  {
    name:     "Blue Jean Clásico Dama Pretina Anatómica",
    category: "Uniformes de Trabajo",
    images:   ["Producto 3.avif", "Blue jean dama2.avif"],
    price:    189000, 
    description: [
      "Blue jean de corte anatómico para dama, diseñado para brindar comodidad y libertad de movimiento durante la jornada laboral.",
    ],
    specs: "Tela: Jean 100% algodón · Corte anatómico · Tallas 6–18",
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