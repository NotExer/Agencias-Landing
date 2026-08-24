import type { ImageMetadata } from "astro";

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  "../img/*.{avif,jpg,jpeg,png,webp}",
  { eager: true }
);

/**
 * Uso: img("bota-soldador.avif") → ImageMetadata para <Image src={...} />
 * Devuelve el metadata (no la URL) para que astro:assets pueda generar
 * variantes responsive; pasar `.src` a un <img> crudo salta el optimizador
 * y sirve el archivo original a tamano completo.
 *
 * Los .jfif se renombraron a .jpg (son JPEG identicos byte a byte): Astro
 * decide por extension y no procesa .jfif, asi que devolvia un string y
 * rompia el tipo. Con .jpg entran todos por la misma ruta optimizada.
 */
function img(filename: string): ImageMetadata {
  const found = imageModules[`../img/${filename}`]?.default;
  if (!found) throw new Error(`Imagen no encontrada en src/img: ${filename}`);
  return found;
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
    name:     "Tenis Deportivo Bajo",
    category: "Calzado de Trabajo",
    images:   ["Tenis Deportivo Bajo.webp"],
    price:    189000,
    description: [
      "Tenis deportivo bajo en lona negra con cordones, diseñado para brindar comodidad y una presentación versátil durante la jornada.",
      "Su construcción ligera y su suela de caucho lo convierten en una opción práctica para dotaciones de uso cotidiano.",
    ],
    specs: "Lona textil negra · Diseño bajo · Cierre con cordones · Suela de caucho · Uso cotidiano",
  },

  {
    name:     "Tenis Deportivo Alto",
    category: "Calzado de Trabajo",
    images:   ["Tenis Deportivo Alto.webp"],
    price:    189000,
    description: [
      "Tenis deportivo alto en lona blanca con cordones, diseñado para brindar comodidad y mayor cobertura durante la jornada.",
      "Su construcción ligera y su suela de caucho ofrecen una opción versátil para dotaciones de uso cotidiano.",
    ],
    specs: "Lona textil blanca · Diseño alto · Cierre con cordones · Suela de caucho · Uso cotidiano",
  },

  {
    name:     "Tenis Royal Cut Bajo",
    category: "Calzado de Trabajo",
    images:   ["Tenis Royal Cut Bajo.webp"],
    price:    189000,
    description: [
      "Tenis Royal Cut de diseño bajo en lona negra con cordones blancos, pensado para ofrecer comodidad y una presentación moderna durante la jornada.",
      "Su suela de caucho incorpora detalles de color que complementan una construcción ligera y versátil para uso cotidiano.",
    ],
    specs: "Lona textil negra · Diseño bajo · Cierre con cordones · Suela de caucho · Detalles de color",
  },

  {
    name:     "Tenis Royal Cut Alto",
    category: "Calzado de Trabajo",
    images:   ["Tenis Royal Cut Alto.webp"],
    price:    189000,
    description: [
      "Tenis Royal Cut de diseño alto en lona negra con cordones blancos, pensado para ofrecer comodidad y mayor cobertura durante la jornada.",
      "Su suela de caucho con detalles de color complementa una construcción ligera y versátil para uso cotidiano.",
    ],
    specs: "Lona textil negra · Diseño alto · Cierre con cordones · Suela de caucho · Detalles de color",
  },

  {
    name:     "Tenis Clásico Zeus Alto (Lona)",
    category: "Calzado de Trabajo",
    images:   ["Tenis Clasico Zeus Alto Lona.webp"],
    price:    189000,
    description: [
      "Tenis clásico Zeus de diseño alto en lona negra con cordones, pensado para ofrecer comodidad y mayor cobertura durante la jornada.",
      "Su construcción monocromática y su suela de caucho brindan una presentación sobria y versátil para uso cotidiano.",
    ],
    specs: "Lona negra · Diseño alto · Cierre con cordones · Suela de caucho · Acabado monocromático",
  },

  {
    name:     "Tenis Clásico Zeus Bajo (Lona)",
    category: "Calzado de Trabajo",
    images:   ["Tenis Clasico Zeus Bajo Lona.webp"],
    price:    189000,
    description: [
      "Tenis clásico Zeus de diseño bajo en lona negra con cordones, pensado para brindar comodidad y libertad de movimiento durante la jornada.",
      "Su construcción monocromática y su suela de caucho ofrecen una presentación sobria y versátil para uso cotidiano.",
    ],
    specs: "Lona negra · Diseño bajo · Cierre con cordones · Suela de caucho · Acabado monocromático",
  },

  {
    name:     "Tenis Clásico Ares Alto (Lona)",
    category: "Calzado de Trabajo",
    images:   ["Tenis Clasico Ares Alto Lona.webp"],
    price:    189000,
    description: [
      "Tenis clásico Ares de diseño alto en lona negra con cordones blancos, pensado para brindar comodidad y mayor cobertura durante la jornada.",
      "Sus costuras en contraste y su suela de caucho blanca con detalles negros ofrecen una apariencia versátil para uso cotidiano.",
    ],
    specs: "Lona negra · Diseño alto · Cordones blancos · Suela de caucho · Costuras en contraste",
  },

  {
    name:     "Tenis Clásico Ares Bajo (Lona)",
    category: "Calzado de Trabajo",
    images:   ["Tenis Clasico Ares Bajo Lona.webp"],
    price:    189000,
    description: [
      "Tenis clásico Ares de diseño bajo en lona negra con cordones blancos, pensado para brindar comodidad y libertad de movimiento durante la jornada.",
      "Sus costuras en contraste y su suela de caucho blanca con detalles negros ofrecen una apariencia versátil para uso cotidiano.",
    ],
    specs: "Lona negra · Diseño bajo · Cordones blancos · Suela de caucho · Costuras en contraste",
  },

  {
    name:     "Tenis Nix Hombre",
    category: "Calzado de Trabajo",
    images:   ["Tenis Nix Hombre.webp"],
    price:    189000,
    description: [
      "Tenis Nix para hombre de diseño bajo en color negro, pensado para brindar comodidad y una presentación sobria durante la jornada.",
      "Su cierre con cordones, paneles con perforaciones y suela blanca ofrecen una combinación versátil para uso cotidiano.",
    ],
    specs: "Diseño masculino · Corte bajo · Cierre con cordones · Suela blanca · Paneles perforados",
  },

  {
    name:     "Tenis Terra Dama",
    category: "Calzado de Trabajo",
    images:   ["Tenis Terra Dama.webp"],
    price:    189000,
    description: [
      "Tenis Terra para dama de diseño bajo en color blanco, pensado para brindar comodidad y una presentación limpia durante la jornada.",
      "Su cierre con cordones, paneles con perforaciones y suela blanca ofrecen una combinación ligera y versátil para uso cotidiano.",
    ],
    specs: "Diseño femenino · Corte bajo · Cierre con cordones · Suela blanca · Paneles perforados",
  },

  {
    name:     "Tenis Clásico Tipo Reebok Prin",
    category: "Calzado de Trabajo",
    images:   ["Tenis Clasico Tipo Reebok Prin.webp"],
    price:    189000,
    description: [
      "Tenis clásico tipo Reebok Prin de diseño bajo en color negro, pensado para brindar comodidad y una presentación sobria durante la jornada.",
      "Su capellada sintética, cierre con cordones y suela moldeada ofrecen una combinación resistente y versátil para uso cotidiano.",
    ],
    specs: "Capellada sintética · Corte bajo · Cierre con cordones · Suela moldeada · Acabado negro",
  },

  {
    name:     "Mocasín Ámbar Cordón (Lona)",
    category: "Calzado de Trabajo",
    images:   ["Mocasin Ambar Cordon Lona.webp"],
    price:    189000,
    description: [
      "Mocasín Ámbar de diseño bajo en lona negra con cordones blancos, pensado para brindar comodidad y ligereza durante la jornada.",
      "Su construcción flexible y su suela blanca ofrecen una apariencia casual y versátil para uso cotidiano.",
    ],
    specs: "Lona negra · Corte bajo · Cordones blancos · Tres ojales · Suela blanca",
  },

  {
    name:     "Ámbar Mocasín (Lona)",
    category: "Calzado de Trabajo",
    images:   ["Ambar Mocasin Lona.webp"],
    price:    189000,
    description: [
      "Mocasín Ámbar tipo slip-on en lona negra, pensado para brindar comodidad y facilidad al calzar durante la jornada.",
      "Sus elásticos laterales, construcción flexible y suela blanca ofrecen una apariencia casual y versátil para uso cotidiano.",
    ],
    specs: "Lona negra · Diseño slip-on · Elásticos laterales · Corte bajo · Suela blanca",
  },

  {
    name:     "Rex Cordón Tipo Vans (Lona)",
    category: "Calzado de Trabajo",
    images:   ["Rex Cordon Tipo Vans Lona.webp"],
    price:    189000,
    description: [
      "Tenis Rex tipo Vans de diseño bajo en lona negra con cordones, pensado para brindar comodidad y resistencia durante la jornada.",
      "Su construcción monocromática y su suela de caucho texturizada ofrecen una apariencia casual y versátil para uso cotidiano.",
    ],
    specs: "Lona negra · Corte bajo · Cordones negros · Tres ojales · Suela de caucho negra",
  },

  {
    name:     "Rex Mocasín Tipo Vans (Lona)",
    category: "Calzado de Trabajo",
    images:   ["Rex Mocasin Tipo Vans Lona.webp"],
    price:    189000,
    description: [
      "Mocasín Rex tipo Vans en lona negra, pensado para brindar comodidad y facilidad al calzar durante la jornada.",
      "Sus elásticos laterales y su suela de caucho negra texturizada ofrecen una apariencia casual y resistente para uso cotidiano.",
    ],
    specs: "Lona negra · Diseño slip-on · Elásticos laterales · Corte bajo · Suela de caucho negra",
  },

  {
    name:     "Valeta Gracia Llano (Lona)",
    category: "Calzado de Trabajo",
    images:   ["Valeta Gracia Llano Lona.webp"],
    price:    189000,
    description: [
      "Valeta Gracia Llano en lona negra, diseñada para brindar comodidad y facilidad al calzar durante la jornada.",
      "Su silueta baja, interior liviano y suela de caucho negra ofrecen una presentación sobria y versátil para uso cotidiano.",
    ],
    specs: "Lona negra · Diseño plano · Corte bajo · Interior liviano · Suela de caucho negra",
  },

  {
    name:     "Valeta Lona Katty REF: 205",
    category: "Calzado de Trabajo",
    images:   ["Valeta Lona Katty Ref 205.webp"],
    price:    189000,
    description: [
      "Valeta en lona azul oscuro con diseño plano y corte bajo, pensada para brindar comodidad y practicidad durante la jornada.",
      "Su suela de caucho negra con acabado dentado ofrece una pisada estable y una presentación sobria para uso cotidiano.",
    ],
    specs: "Lona azul oscuro · Diseño plano · Corte bajo · Suela de caucho dentada · Interior liviano",
  },

  {
    name:     "Mocasín Lona REF: 206",
    category: "Calzado de Trabajo",
    images:   ["Mocasin Lona Ref 206.webp"],
    price:    189000,
    description: [
      "Mocasín en lona negra con diseño slip-on y elásticos laterales, pensado para un calce práctico y cómodo durante la jornada.",
      "Su suela de caucho negra con acabado dentado ofrece estabilidad y una presentación sobria para uso cotidiano.",
    ],
    specs: "Lona negra · Diseño slip-on · Elásticos laterales · Suela de caucho dentada · Corte bajo",
  },

  {
    name:     "Mocasín Lona Medio Tacón REF: 248",
    category: "Calzado de Trabajo",
    images:   ["Mocasin Lona Medio Tacon Ref 248.webp"],
    price:    189000,
    description: [
      "Mocasín en lona negra con diseño slip-on y elásticos laterales, pensado para un calce práctico y cómodo durante la jornada.",
      "Su suela negra de medio tacón con acabado dentado brinda una pisada estable y una presentación más elevada para uso cotidiano.",
    ],
    specs: "Lona negra · Diseño slip-on · Elásticos laterales · Medio tacón · Suela de caucho dentada",
  },

  {
    name:     "Mocasín Lona Gala, Medio Tacón REF: 292",
    category: "Calzado de Trabajo",
    images:   ["Mocasin Lona Gala Medio Tacon Ref 292.webp"],
    price:    189000,
    description: [
      "Mocasín Gala en lona negra con diseño slip-on y elásticos laterales, pensado para ofrecer un calce práctico y cómodo durante la jornada.",
      "Su tacón medio tipo cuña brinda estabilidad y una presentación más elevada sin perder comodidad para el uso cotidiano.",
    ],
    specs: "Lona negra · Diseño Gala slip-on · Elásticos laterales · Medio tacón tipo cuña · Corte bajo",
  },

  {
    name:     "Mocasín Lona Tacón 3½ REF: 217",
    category: "Calzado de Trabajo",
    images:   ["Mocasin Lona Tacon 3 5 Ref 217.webp"],
    price:    189000,
    description: [
      "Mocasín en lona azul oscuro con diseño slip-on, elásticos laterales y costura tipo moc-toe para un calce práctico y cómodo.",
      "Su tacón negro de 3½ cm ofrece una pisada estable y una presentación elevada para la jornada laboral o el uso cotidiano.",
    ],
    specs: "Lona azul oscuro · Diseño slip-on · Elásticos laterales · Tacón de 3½ cm · Suela negra",
  },

  {
    name:     "Mocasín Dama Cementado REF: Juanita",
    category: "Calzado de Trabajo",
    images:   ["Mocasin Dama Cementado Juanita.webp"],
    price:    189000,
    description: [
      "Mocasín para dama en material negro texturizado, con diseño slip-on y elásticos laterales para un calce cómodo y práctico.",
      "Su construcción cementada y suela baja de caucho ofrecen estabilidad y una presentación sobria para uso laboral o cotidiano.",
    ],
    specs: "Material negro texturizado · Diseño slip-on · Elásticos laterales · Construcción cementada · Suela baja",
  },

  {
    name:     "Mocasín Dama Cementado REF: 5050",
    category: "Calzado de Trabajo",
    images:   ["Mocasin Dama Cementado Ref 5050.webp"],
    price:    189000,
    description: [
      "Mocasín para dama en material negro liso, con diseño slip-on y elásticos laterales para un calce cómodo y práctico.",
      "Su construcción cementada y suela baja tipo cuña ofrecen estabilidad y una presentación sobria para uso laboral o cotidiano.",
    ],
    specs: "Material negro liso · Diseño slip-on · Elásticos laterales · Construcción cementada · Suela baja tipo cuña",
  },

  {
    name:     "Zapatilla Caballero Mocasín Negra REF: 5829",
    category: "Calzado de Trabajo",
    images:   ["Zapatilla Caballero Mocasin Negra Ref 5829.webp"],
    price:    189000,
    description: [
      "Zapatilla para caballero en material negro liso, con diseño slip-on, elásticos laterales y costura discreta tipo mocasín.",
      "Su suela negra de perfil bajo y tacón corto ofrece una presentación formal y cómoda para uso laboral o cotidiano.",
    ],
    specs: "Material negro liso · Diseño slip-on · Elásticos laterales · Costura tipo mocasín · Tacón corto",
  },

  {
    name:     "Zapato Tipo Crocs REF: 175",
    category: "Calzado de Trabajo",
    images:   ["Zapato Tipo Crocs Ref 175.webp"],
    price:    189000,
    description: [
      "Zapato blanco de material liviano con diseño cerrado tipo slip-on, pensado para un calce práctico y fácil limpieza.",
      "Su construcción moldeada y suela texturizada brindan comodidad y estabilidad para jornadas en ambientes laborales.",
    ],
    specs: "Material blanco moldeado · Diseño slip-on cerrado · Fácil limpieza · Suela texturizada · Perfil bajo",
  },

  {
    name:     "Zapato Tipo Crocs REF: 224",
    category: "Calzado de Trabajo",
    images:   ["Zapato Tipo Crocs Ref 224.webp"],
    price:    189000,
    description: [
      "Zapato negro de material moldeado con diseño cerrado, correa posterior ajustable y perfil robusto para un calce práctico.",
      "Su suela texturizada brinda estabilidad y facilidad de limpieza para jornadas en ambientes laborales.",
    ],
    specs: "Material negro moldeado · Diseño cerrado · Correa posterior ajustable · Fácil limpieza · Suela texturizada",
  },

  {
    name:     "Zapato Tipo Crocs REF: 201",
    category: "Calzado de Trabajo",
    images:   ["Zapato Tipo Crocs Ref 201.webp"],
    price:    189000,
    description: [
      "Zapato azul oscuro de material moldeado con diseño slip-on cerrado y elásticos laterales para un calce práctico.",
      "Su suela robusta con ranuras de flexión brinda estabilidad y comodidad durante jornadas en ambientes laborales.",
    ],
    specs: "Material azul oscuro moldeado · Diseño slip-on cerrado · Elásticos laterales · Suela con ranuras · Fácil limpieza",
  },

  {
    name:     "Zapato Tipo Crocs REF: 080",
    category: "Calzado de Trabajo",
    images:   ["Zapato Tipo Crocs Ref 080.webp"],
    price:    189000,
    description: [
      "Zapato blanco de material moldeado con diseño slip-on cerrado, paneles laterales esculpidos y punta protectora en azul oscuro.",
      "Su suela robusta y de fácil limpieza brinda comodidad y estabilidad para jornadas en ambientes laborales.",
    ],
    specs: "Material blanco moldeado · Diseño slip-on cerrado · Punta protectora azul oscuro · Suela robusta · Fácil limpieza",
  },

  {
    name:     "Zapato Tipo Crocs Kroky REF: 242",
    category: "Calzado de Trabajo",
    images:   ["Zapato Tipo Crocs Kroky Ref 242.webp"],
    price:    189000,
    description: [
      "Zapato negro de material moldeado con diseño slip-on cerrado, detalle de ranuras decorativas y perfil robusto.",
      "Su suela ligeramente elevada brinda estabilidad y comodidad para jornadas en ambientes laborales de fácil limpieza.",
    ],
    specs: "Material negro moldeado · Diseño slip-on cerrado · Detalle de ranuras · Suela robusta elevada · Fácil limpieza",
  },

  {
    name:     "Zapato Tipo Crocs Eva REF: 080",
    category: "Calzado de Trabajo",
    images:   ["Zapato Tipo Crocs Eva Ref 080.webp"],
    price:    189000,
    description: [
      "Zapato azul de EVA con diseño slip-on cerrado, detalle de ranuras decorativas y perfil robusto para un calce práctico.",
      "Su material liviano y suela ligeramente elevada brindan comodidad y facilidad de limpieza para jornadas laborales.",
    ],
    specs: "EVA azul · Diseño slip-on cerrado · Detalle de ranuras · Suela elevada · Fácil limpieza",
  },

  {
    name:     "Zapato Tipo Crocs REF: 196",
    category: "Calzado de Trabajo",
    images:   ["Zapato Tipo Crocs Ref 196.webp"],
    price:    189000,
    description: [
      "Zapato azul oscuro de material moldeado con diseño slip-on cerrado, puntera reforzada y panel lateral texturizado.",
      "Su suela de tracción con tacos profundos brinda estabilidad y comodidad en jornadas laborales exigentes.",
    ],
    specs: "Material azul oscuro moldeado · Diseño slip-on cerrado · Puntera reforzada · Suela de tracción · Fácil limpieza",
  },

  {
    name:     "Zapato Tipo Crocs REF: 219",
    category: "Calzado de Trabajo",
    images:   ["Zapato Tipo Crocs Ref 219.webp"],
    price:    189000,
    description: [
      "Zapato azul de material moldeado con diseño slip-on cerrado, detalle de ranuras decorativas y perfil robusto.",
      "Su suela ligeramente elevada brinda estabilidad, comodidad y facilidad de limpieza para jornadas laborales.",
    ],
    specs: "Material azul moldeado · Diseño slip-on cerrado · Detalle de ranuras · Suela elevada · Fácil limpieza",
  },

  {
    name:     "Bota de EVA P/Seg. REF: 226",
    category: "Calzado de Trabajo",
    images:   ["Bota EVA P Seg Ref 226.webp"],
    price:    189000,
    description: [
      "Bota blanca de EVA con caña media, diseño moldeado de una pieza y puntera redondeada para uso en ambientes de trabajo.",
      "Su suela con tacos profundos aporta tracción y su material de fácil limpieza ofrece practicidad durante la jornada.",
    ],
    specs: "EVA blanco · Caña media · Diseño moldeado de una pieza · Suela con tacos · Fácil limpieza",
  },

  {
    name:     "Tenis Mocasín Lona REF: 510",
    category: "Calzado de Trabajo",
    images:   ["Tenis Mocasin Lona Ref 510.webp"],
    price:    189000,
    description: [
      "Tenis mocasín en tejido negro con diseño slip-on, tiradores en talón y lengüeta para un calce práctico.",
      "Su suela negra esculpida y flexible ofrece comodidad y una presentación deportiva para jornadas de uso cotidiano.",
    ],
    specs: "Tejido negro · Diseño slip-on · Tiradores en talón y lengüeta · Suela negra flexible · Perfil deportivo",
  },

  {
    name:     "Tenis Mocasín Lona REF: 963",
    category: "Calzado de Trabajo",
    images:   ["Tenis Mocasin Lona Ref 963.webp"],
    price:    189000,
    description: [
      "Tenis mocasín en tejido negro con diseño slip-on, cuello elástico acanalado y tirador en el talón para un calce práctico.",
      "Su suela negra de perfil bajo y textura de agarre brinda comodidad y estabilidad durante jornadas de uso cotidiano.",
    ],
    specs: "Tejido negro · Diseño slip-on · Cuello elástico acanalado · Tirador trasero · Suela de agarre",
  },

  {
    name:     "Deportivo Casual REF: 964",
    category: "Calzado de Trabajo",
    images:   ["Deportivo Casual Ref 964.webp"],
    price:    189000,
    description: [
      "Tenis deportivo casual en negro con cordones, paneles sintéticos cosidos y cuello acolchado para un ajuste cómodo.",
      "Su suela negra texturizada brinda estabilidad y una presentación versátil para jornadas de uso cotidiano.",
    ],
    specs: "Sintético negro · Cordones negros · Paneles cosidos · Cuello acolchado · Suela deportiva texturizada",
  },

  {
    name:     "Tenis Mocasín Suela Flow",
    category: "Calzado de Trabajo",
    images:   ["Tenis Mocasin Suela Flow.webp"],
    price:    189000,
    description: [
      "Tenis mocasín en tejido negro con diseño slip-on, pensado para brindar comodidad, ajuste flexible y facilidad al calzar.",
      "Su suela Flow blanca de perfil alto aporta amortiguación y una apariencia moderna para jornadas de uso cotidiano.",
    ],
    specs: "Tejido negro · Diseño slip-on · Ajuste flexible · Suela Flow blanca · Perfil alto",
  },

  {
    name:     "Tenis Botín Suela Flow",
    category: "Calzado de Trabajo",
    images:   ["Tenis Botin Suela Flow.webp"],
    price:    189000,
    description: [
      "Tenis botín en tejido negro con caña tipo calcetín, diseñado para ofrecer un ajuste flexible y cómodo durante la jornada.",
      "Su suela Flow blanca de perfil alto aporta amortiguación y una apariencia moderna para uso cotidiano.",
    ],
    specs: "Tejido negro · Caña tipo calcetín · Ajuste flexible · Suela Flow blanca · Perfil alto",
  },

  {
    name:     "Tenis Mocasín Suela Jordan",
    category: "Calzado de Trabajo",
    images:   ["Tenis Mocasin Suela Jordan.webp"],
    price:    189000,
    description: [
      "Tenis mocasín en tejido negro con diseño slip-on, creado para un calce práctico, flexible y cómodo durante la jornada.",
      "Su suela Jordan blanca de perfil alto brinda una pisada estable y una presentación deportiva para uso cotidiano.",
    ],
    specs: "Tejido negro · Diseño slip-on · Ajuste flexible · Suela Jordan blanca · Perfil alto",
  },

  {
    name:     "Tenis Botín Suela Jordan",
    category: "Calzado de Trabajo",
    images:   ["Tenis Botin Suela Jordan.webp"],
    price:    189000,
    description: [
      "Tenis botín en tejido negro con caña tipo calcetín y diseño slip-on, pensado para brindar comodidad y ajuste flexible durante la jornada.",
      "Su suela Jordan blanca de perfil alto aporta estabilidad y una presentación deportiva para uso cotidiano.",
    ],
    specs: "Tejido negro · Caña tipo calcetín · Diseño slip-on · Suela Jordan blanca · Perfil alto",
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
    name:     "Blue Jean Dama",
    category: "Uniformes de Trabajo",
    images:   ["Blue jean dama 1.jpg", "Blue jean dama 2.jpg"],
    price:    149000,
    description: [
      "Blue jean para dama con un corte clásico y cómodo, pensado para dotaciones versátiles y resistentes.",
      "Es una prenda funcional para jornadas laborales donde se necesita libertad de movimiento y buena presentación.",
    ],
    specs: "Jean femenino · Corte clásico · Uso laboral · Resistente",
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
    name:     "Bolso Promocional Ref. 102",
    category: "Promocionales",
    images:   ["BOLSO REF 102.png"],
    price:    65000,
    description: [
      "Bolso promocional práctico y ligero, ideal para campañas de marca, regalos corporativos y uso diario.",
      "Su formato funcional permite llevar objetos personales con comodidad durante la jornada.",
    ],
    specs: "Bolso promocional · Correa ajustable · Uso diario · Ligero y resistente",
  },

  {
    name:     "Bolso Promocional Ref. 122",
    category: "Promocionales",
    images:   ["BOLSO REF 122.png"],
    price:    65000,
    description: [
      "Bolso promocional con diseño funcional para activaciones de marca, dotaciones y obsequios empresariales.",
      "Es una opción versátil para uso casual y material promocional.",
    ],
    specs: "Bolso promocional · Diseño práctico · Uso casual · Material resistente",
  },

  {
    name:     "Bolso Promocional Ref. 602",
    category: "Promocionales",
    images:   ["BOLSO REF 602.png"],
    price:    65000,
    description: [
      "Bolso promocional de formato compacto, pensado para campañas, eventos y distribución corporativa.",
      "Ofrece una solución cómoda para transportar elementos de uso personal.",
    ],
    specs: "Bolso promocional · Formato compacto · Uso diario · Ligero",
  },

  {
    name:     "Morral Promocional Ref. 029",
    category: "Promocionales",
    images:   ["MORRAL REF 029.png"],
    price:    72000,
    description: [
      "Morral promocional con diseño funcional para campañas de marca, uso estudiantil o dotaciones corporativas.",
      "Su formato permite transportar objetos con comodidad y buena presencia.",
    ],
    specs: "Morral promocional · Uso diario · Correas ajustables · Resistente",
  },

  {
    name:     "Morral Promocional Ref. 035",
    category: "Promocionales",
    images:   ["MORRAL REF 035.png"],
    price:    72000,
    description: [
      "Morral promocional ideal para obsequios empresariales, actividades de marca y uso cotidiano.",
      "Combina practicidad con una presentación sencilla y funcional.",
    ],
    specs: "Morral promocional · Bolsillos funcionales · Uso casual · Ligero",
  },

  {
    name:     "Morral Promocional Ref. 062",
    category: "Promocionales",
    images:   ["MORRAL REF 062.png"],
    price:    72000,
    description: [
      "Morral promocional pensado para campañas de marca y uso diario, con una estructura cómoda y resistente.",
      "Es una excelente opción para entregas corporativas y eventos.",
    ],
    specs: "Morral promocional · Estructura funcional · Uso diario · Resistente",
  },

  {
    name:     "Morral Promocional Ref. 080",
    category: "Promocionales",
    images:   ["MORRAL REF 080.png"],
    price:    72000,
    description: [
      "Morral promocional con formato versátil para dotaciones, activaciones y regalos empresariales.",
      "Su diseño permite un uso cómodo en el día a día.",
    ],
    specs: "Morral promocional · Uso corporativo · Correas ajustables · Cómodo",
  },

  {
    name:     "Morral Promocional Ref. 100",
    category: "Promocionales",
    images:   ["MORRAL REF 100.png"],
    price:    72000,
    description: [
      "Morral promocional de uso práctico para campañas, ferias y material de marca.",
      "Pensado para ofrecer funcionalidad y buena presentación en un solo producto.",
    ],
    specs: "Morral promocional · Uso promocional · Diseño funcional · Ligero",
  },

  {
    name:     "Morral Promocional Ref. 101",
    category: "Promocionales",
    images:   ["MORRAL REF 101.png"],
    price:    72000,
    description: [
      "Morral promocional con estilo funcional para actividades corporativas y uso diario.",
      "Una alternativa útil para obsequios empresariales y campañas de fidelización.",
    ],
    specs: "Morral promocional · Uso diario · Formato cómodo · Resistente",
  },

  {
    name:     "Morral Promocional Ref. 111",
    category: "Promocionales",
    images:   ["MORRAL REF 111.png"],
    price:    72000,
    description: [
      "Morral promocional pensado para acompañar actividades de marca y dotaciones casuales.",
      "Su formato práctico lo hace útil para diferentes necesidades.",
    ],
    specs: "Morral promocional · Versátil · Uso casual · Fácil de transportar",
  },

  {
    name:     "Morral Promocional Ref. 113",
    category: "Promocionales",
    images:   ["MORRAL REF 113.png"],
    price:    72000,
    description: [
      "Morral promocional con enfoque funcional para campañas publicitarias y uso cotidiano.",
      "Ideal para empresas que buscan una opción práctica y presentable.",
    ],
    specs: "Morral promocional · Presentación limpia · Uso diario · Resistente",
  },

  {
    name:     "Morral Promocional Ref. 116",
    category: "Promocionales",
    images:   ["MORRAL REF 116.png"],
    price:    72000,
    description: [
      "Morral promocional de alta utilidad para eventos, regalos empresariales y actividades de marca.",
      "Ofrece un equilibrio entre comodidad y capacidad de uso diario.",
    ],
    specs: "Morral promocional · Uso corporativo · Capacidad práctica · Ligero",
  },

  {
    name:     "Morral Promocional Ref. 121",
    category: "Promocionales",
    images:   ["MORRAL REF 121.png"],
    price:    72000,
    description: [
      "Morral promocional ideal para campañas de posicionamiento, obsequios y dotación casual.",
      "Es una pieza práctica para transportar artículos personales con comodidad.",
    ],
    specs: "Morral promocional · Uso promocional · Comodidad diaria · Resistente",
  },

  {
    name:     "Morral Promocional Ref. 804",
    category: "Promocionales",
    images:   ["MORRAL REF 804.png"],
    price:    72000,
    description: [
      "Morral promocional con un diseño útil para campañas de marca y uso regular.",
      "Pensado para ofrecer practicidad en ambientes empresariales y cotidianos.",
    ],
    specs: "Morral promocional · Uso diario · Diseño funcional · Correas ajustables",
  },

  {
    name:     "Riñonera Promocional Ref. 801",
    category: "Promocionales",
    images:   ["RIÑONERA REF 801.png"],
    price:    42000,
    description: [
      "Riñonera promocional práctica y cómoda para eventos, campañas publicitarias y uso diario.",
      "Su formato compacto la convierte en una opción funcional para llevar lo esencial.",
    ],
    specs: "Riñonera promocional · Formato compacto · Correa ajustable · Ligera",
  },

  {
    name:     "Riñonera Promocional Ref. 802",
    category: "Promocionales",
    images:   ["RIÑONERA REF 802.png"],
    price:    42000,
    description: [
      "Riñonera promocional de uso versátil para campañas de marca, obsequios y actividades al aire libre.",
      "Ofrece comodidad y practicidad en un formato liviano y fácil de llevar.",
    ],
    specs: "Riñonera promocional · Uso casual · Correa ajustable · Compacta",
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

  {
    name:     "Casco Ref. 1300E",
    category: "EPP",
    images:   ["Casco Ref-1300E.webp"],
    price:    109000,
    description: [
      "Casco de seguridad tipo industrial para labores de alto uso, con una estructura pensada para brindar protección y comodidad.",
      "Ideal para equipos de construcción, mantenimiento y operación en campo.",
    ],
    specs: "Protección craneal · Uso industrial · Ajuste seguro · Diseño resistente",
  },

  {
    name:     "Casco ECO",
    category: "EPP",
    images:   ["Casco ECO.jpg"],
    price:    89000,
    description: [
      "Casco de seguridad liviano para trabajos generales donde se necesita protección básica con buena comodidad.",
      "Es una opción práctica para dotaciones de uso diario.",
    ],
    specs: "Protección básica · Material liviano · Uso general · Ajuste cómodo",
  },

  {
    name:     "Casco Dieléctrico",
    category: "EPP",
    images:   ["Casco Dieléctrico.webp"],
    price:    119000,
    description: [
      "Casco dieléctrico diseñado para entornos donde se requiere protección adicional frente a riesgos eléctricos.",
      "Su construcción ayuda a complementar protocolos de seguridad industrial.",
    ],
    specs: "Protección dieléctrica · Uso eléctrico · Material resistente · Seguridad industrial",
  },

  {
    name:     "Casco Mountain",
    category: "EPP",
    images:   ["Casco Mountain.jpg"],
    price:    99000,
    description: [
      "Casco de seguridad para tareas generales de protección, con una presentación robusta y funcional.",
      "Adecuado para actividades operativas y de inspección.",
    ],
    specs: "Uso general · Diseño funcional · Protección básica · Resistente",
  },

  {
    name:     "Careta para Esmeril",
    category: "EPP",
    images:   ["Careta para Esmeril.webp"],
    price:    129000,
    description: [
      "Careta de protección facial pensada para trabajos con esmeril y labores donde puedan generarse partículas o chispas.",
      "Ayuda a resguardar el rostro durante tareas de corte y desbaste.",
    ],
    specs: "Protección facial · Uso con esmeril · Cobertura amplia · Material resistente",
  },

  {
    name:     "Respirador KN95",
    category: "EPP",
    images:   ["Respirador KN95.jpeg"],
    price:    69000,
    description: [
      "Respirador de alta filtración para protección respiratoria en ambientes con exposición a partículas.",
      "Diseñado para brindar un ajuste cómodo durante la jornada.",
    ],
    specs: "Protección respiratoria · Filtración KN95 · Ajuste ergonómico · Uso diario",
  },

  {
    name:     "Arnés H",
    category: "EPP",
    images:   ["Arnes-H-600x583.png"],
    price:    189000,
    description: [
      "Arnés tipo H para trabajos en altura, desarrollado para brindar sujeción y apoyo durante labores de riesgo.",
      "Es una pieza clave en sistemas de protección contra caídas.",
    ],
    specs: "Trabajo en altura · Tipo H · Sujeción segura · Uso profesional",
  },

  {
    name:     "Chaleco Reflectivo",
    category: "EPP",
    images:   ["Chaleco Reflectivos.png"],
    price:    59000,
    description: [
      "Chaleco reflectivo para mejorar la visibilidad en zonas de operación, tránsito interno o labores nocturnas.",
      "Ideal para dotaciones de señalización y seguridad preventiva.",
    ],
    specs: "Alta visibilidad · Uso operativo · Tiras reflectivas · Ajuste ligero",
  },

  {
    name:     "Delantal PVC",
    category: "EPP",
    images:   ["Delantal PVC.webp"],
    price:    79000,
    description: [
      "Delantal en PVC pensado para proteger la ropa en tareas con humedad, salpicaduras o manipulación de materiales.",
      "Muy útil en labores de limpieza, procesos industriales y manejo de insumos.",
    ],
    specs: "Protección frontal · Material PVC · Resistente a salpicaduras · Fácil de limpiar",
  },

  {
    name:     "Silla de Suspensión",
    category: "EPP",
    images:   ["Silla de Suspención.webp"],
    price:    229000,
    description: [
      "Silla de suspensión para maniobras de trabajo en altura y posicionamiento temporal en tareas específicas.",
      "Diseñada para aportar soporte y estabilidad en operaciones controladas.",
    ],
    specs: "Trabajo en altura · Soporte de suspensión · Uso profesional · Confección resistente",
  },

  {
    name:     "Tapón Auditivo Reutilizable",
    category: "EPP",
    images:   ["Tapón Auditivo Reutilizable.jpeg"],
    price:    19000,
    description: [
      "Tapón auditivo reutilizable para reducir la exposición al ruido en ambientes de trabajo exigentes.",
      "Su formato busca comodidad y uso prolongado.",
    ],
    specs: "Protección auditiva · Reutilizable · Reducción de ruido · Uso industrial",
  },

  {
    name:     "Tapón para Oídos Desechable sin Cordón",
    category: "EPP",
    images:   ["Tapon Para Oidos Desechable  sin Cordon.webp"],
    price:    12000,
    description: [
      "Tapón auditivo desechable para una solución práctica en ambientes con ruido constante.",
      "Es ideal para entregas rápidas y uso puntual.",
    ],
    specs: "Protección auditiva · Desechable · Sin cordón · Uso temporal",
  },

  {
    name:     "Guantex Multiflex Steelpro",
    category: "EPP",
    images:   ["Guantex Multiflex Steelpro.webp"],
    price:    29000,
    description: [
      "Guante de protección para tareas que requieren destreza y agarre durante la manipulación de materiales.",
      "Pensado para uso operativo y labores generales.",
    ],
    specs: "Protección manual · Agarre seguro · Uso operativo · Alta destreza",
  },

  {
    name:     "Guantes con Recubrimiento de Caucho",
    category: "EPP",
    images:   ["Guantes con Recubrimiento de Caucho.png"],
    price:    25000,
    description: [
      "Guantes con recubrimiento de caucho para labores donde se necesita mayor agarre y protección en el manejo de superficies.",
      "Una opción versátil para trabajos generales y de mantenimiento.",
    ],
    specs: "Agarre reforzado · Recubrimiento de caucho · Uso general · Resistente",
  },

  {
    name:     "Guantes en Caucho Calibre 25",
    category: "EPP",
    images:   ["Guantes en Caucho Calibre 25.webp"],
    price:    22000,
    description: [
      "Guantes en caucho calibre 25 para tareas de protección frente a humedad y manipulación de materiales.",
      "Funcionan bien en labores de limpieza y trabajo ligero.",
    ],
    specs: "Protección en caucho · Calibre 25 · Uso general · Resistente a humedad",
  },

  {
    name:     "Guantes en Cuero Reforzado",
    category: "EPP",
    images:   ["Guantes en Cuero Reforzado.webp"],
    price:    35000,
    description: [
      "Guantes en cuero reforzado para trabajos que demandan protección mecánica y durabilidad.",
      "Son útiles en actividades operativas y de manipulación de carga.",
    ],
    specs: "Protección mecánica · Cuero reforzado · Uso industrial · Alta durabilidad",
  },

  {
    name:     "Guantes en Cuero Tipo Ingeniero",
    category: "EPP",
    images:   ["Guantes en Cuero Tipo Ingeniero.webp"],
    price:    33000,
    description: [
      "Guantes de cuero tipo ingeniero para labores que requieren protección y resistencia al desgaste.",
      "Ideales para uso técnico y operativo.",
    ],
    specs: "Cuero reforzado · Uso técnico · Resistencia al desgaste · Agarre seguro",
  },

  {
    name:     "Guante de Tela Tipo Común",
    category: "EPP",
    images:   ["Guante Tela Tipo Comunión.webp"],
    price:    9000,
    description: [
      "Guante de tela para tareas livianas donde se necesita una barrera básica y comodidad.",
      "Es una alternativa práctica para trabajos sencillos o de apoyo.",
    ],
    specs: "Uso liviano · Tela cómoda · Protección básica · Económico",
  },

  {
    name:     "Guantes Kimberly Ref. G20P",
    category: "EPP",
    images:   ["Guantes Kimberly Ref-G20P.webp"],
    price:    27000,
    description: [
      "Guantes de protección para tareas generales con un diseño orientado al trabajo diario.",
      "Aportan comodidad y apoyo en labores de manipulación.",
    ],
    specs: "Protección general · Uso diario · Ajuste cómodo · Resistencia operativa",
  },

  {
    name:     "Gorro Tipo Médico Ref. 14",
    category: "Gorros y Redecillas",
    images:   ["Gorro Tipo Medico Ref-14.png"],
    price:    19000,
    description: [
      "Gorro tipo médico pensado para mantener el cabello contenido en entornos de higiene y manipulación controlada.",
      "Es una opción práctica para dotaciones de salud, alimentos y procesos limpios.",
    ],
    specs: "Uso sanitario · Cobertura cómoda · Ligero · Ideal para control de cabello",
  },

  {
    name:     "Gorro Redondo en Dacrón Ref. 13",
    category: "Gorros y Redecillas",
    images:   ["Gorro Redondo en Dacrón Ref-13.png"],
    price:    21000,
    description: [
      "Gorro redondo en dacrón con una confección ligera y funcional para mantener el cabello recogido.",
      "Adecuado para labores de producción, cocina o áreas de servicio.",
    ],
    specs: "Dacrón · Diseño redondo · Ligero · Uso industrial y alimentario",
  },

  {
    name:     "Gorro Corto en Dacrón Ref. 11",
    category: "Gorros y Redecillas",
    images:   ["Gorro Corto en Dacrón Ref-11.png"],
    price:    18000,
    description: [
      "Gorro corto en dacrón para mantener una presentación limpia y práctica durante la jornada.",
      "Es útil en ambientes donde se requiere orden e higiene.",
    ],
    specs: "Dacrón · Formato corto · Ligero · Uso diario",
  },

  {
    name:     "Gorro Largo en Dacrón Ref. 12",
    category: "Gorros y Redecillas",
    images:   ["Gorro Largo en Dacrón Ref-12.png"],
    price:    22000,
    description: [
      "Gorro largo en dacrón con mayor cobertura para contener mejor el cabello durante el trabajo.",
      "Ideal para procesos que requieren mayor control y presentación.",
    ],
    specs: "Dacrón · Mayor cobertura · Ligero · Uso sanitario e industrial",
  },

  {
    name:     "Redecilla Velillo Cristal Blanca Ref. 03",
    category: "Gorros y Redecillas",
    images:   ["Redecilla Velillo Cristal Blanca Ref-03.png"],
    price:    12000,
    description: [
      "Redecilla de velillo cristal en color blanco para recogido ligero y discreto del cabello.",
      "Muy usada en procesos de alimentos, salud y áreas limpias.",
    ],
    specs: "Velillo cristal · Color blanco · Ligera · Uso sanitario",
  },

  {
    name:     "Redecilla Velillo Cristal Negra Ref. 05",
    category: "Gorros y Redecillas",
    images:   ["Redecilla Velillo Cristal Negra Ref-05.png"],
    price:    12000,
    description: [
      "Redecilla de velillo cristal en color negro para una presentación sobria y práctica.",
      "Ayuda a contener el cabello sin perder comodidad.",
    ],
    specs: "Velillo cristal · Color negro · Discreta · Uso diario",
  },

  {
    name:     "Redecilla Tull Ref. 04",
    category: "Gorros y Redecillas",
    images:   ["Redecilla Tull Ref-04.png"],
    price:    11000,
    description: [
      "Redecilla en tull para control de cabello en ambientes de trabajo que requieren orden e higiene.",
      "Es ligera y cómoda para uso prolongado.",
    ],
    specs: "Tull · Ligera · Control de cabello · Uso industrial",
  },

  {
    name:     "Redecilla Suave Ref. 02",
    category: "Gorros y Redecillas",
    images:   ["Redecilla Suave Ref-02.jpg"],
    price:    10000,
    description: [
      "Redecilla suave para una sujeción cómoda del cabello durante la jornada.",
      "Pensada para labores donde la ligereza es importante.",
    ],
    specs: "Material suave · Ligera · Ajuste cómodo · Uso diario",
  },

  {
    name:     "Redecilla Larga en Lycra Ref. 25",
    category: "Gorros y Redecillas",
    images:   ["Redecilla Larga en Lycra Ref-25.png"],
    price:    13000,
    description: [
      "Redecilla larga en lycra con mayor cobertura para mantener el cabello bien contenido.",
      "Una opción flexible y práctica para uso continuo.",
    ],
    specs: "Lycra · Formato largo · Flexible · Mayor cobertura",
  },

  {
    name:     "Redecilla Larga 1 Velillo Cristal Ref. 07",
    category: "Gorros y Redecillas",
    images:   ["Redecilla Larga 1 Velillo Cristal Ref-07.png"],
    price:    13000,
    description: [
      "Redecilla larga de velillo cristal para recogido amplio y seguro del cabello.",
      "Adecuada para entornos que priorizan higiene y presentación.",
    ],
    specs: "Velillo cristal · Formato largo · Ligera · Uso sanitario",
  },

  {
    name:     "Redecilla Corta Velillo Cristal Ref. 06",
    category: "Gorros y Redecillas",
    images:   ["Redecilla Corta Velillo Cristal Ref-06.png"],
    price:    11000,
    description: [
      "Redecilla corta en velillo cristal para una solución simple y cómoda de control de cabello.",
      "Ideal para uso operativo diario.",
    ],
    specs: "Velillo cristal · Formato corto · Ligera · Uso diario",
  },

  {
    name:     "Redecilla Corta Lycra Ref. 06",
    category: "Gorros y Redecillas",
    images:   ["Redecilla Corta Lycra Ref-06.png"],
    price:    11000,
    description: [
      "Redecilla corta en lycra con ajuste cómodo y flexible para mantener el cabello recogido.",
      "Es una alternativa práctica para diferentes tipos de dotación.",
    ],
    specs: "Lycra · Formato corto · Flexible · Ajuste cómodo",
  },

  {
    name:     "Redecilla Corta Franela Ref. 06",
    category: "Gorros y Redecillas",
    images:   ["Redecilla Corta Franela Ref-06.png"],
    price:    11000,
    description: [
      "Redecilla corta en franela para un uso sencillo y cómodo durante la jornada.",
      "Pensada para dotaciones que buscan practicidad y suavidad.",
    ],
    specs: "Franela · Formato corto · Suave · Uso diario",
  },

  {
    name:     "Redecilla Balaca en Dacrón Ref. 09",
    category: "Gorros y Redecillas",
    images:   ["Redecilla Balaca en Dacrón Ref-09.png"],
    price:    14000,
    description: [
      "Redecilla tipo balaca en dacrón para mantener el cabello sujeto con una presentación limpia.",
      "Útil en ambientes donde se necesita control y comodidad al mismo tiempo.",
    ],
    specs: "Dacrón · Tipo balaca · Ligera · Control de cabello",
  },

  {
    name:     "Bata de Laboratorio Hospitalaria Manga Larga",
    category: "Hospitalaria",
    images:   ["Bata laboratorio hospitalaria manga larga 1.png", "Bata laboratorio hospitalaria manga larga 2.png"],
    price:    129000,
    description: [
      "Bata hospitalaria de manga larga pensada para entornos de laboratorio, consulta y atención clínica.",
      "Ofrece una presentación limpia y profesional para uso diario en instituciones de salud.",
    ],
    specs: "Manga larga · Uso hospitalario · Presentación profesional · Cómoda y funcional",
  },

  {
    name:     "Bata de Laboratorio Hospitalaria Manga Corta",
    category: "Hospitalaria",
    images:   ["Bata laboratorio hospitalaria manga corta 1.png", "Bata laboratorio hospitalaria manga corta 2.png"],
    price:    119000,
    description: [
      "Bata hospitalaria de manga corta para jornadas más frescas sin perder la imagen institucional.",
      "Ideal para laboratorios, clínicas y áreas de atención donde se necesita comodidad.",
    ],
    specs: "Manga corta · Uso hospitalario · Ligera · Presentación institucional",
  },

  {
    name:     "Gorro Quirúrgico",
    category: "Hospitalaria",
    images:   ["Gorro quirurgico.png"],
    price:    19000,
    description: [
      "Gorro quirúrgico diseñado para mantener el cabello contenido en ambientes clínicos y de procedimiento.",
      "Es una prenda práctica para garantizar orden e higiene en áreas hospitalarias.",
    ],
    specs: "Uso clínico · Control de cabello · Ligero · Ideal para procedimientos",
  },

  {
    name:     "Polainas Hospitalarias",
    category: "Hospitalaria",
    images:   ["Polainas Hospitalarias.jpg"],
    price:    25000,
    description: [
      "Polainas hospitalarias para apoyo en el control de ingreso de partículas y preservación de la higiene en áreas limpias.",
      "Ideales para uso en clínicas, laboratorios y zonas de atención médica.",
    ],
    specs: "Uso hospitalario · Protección ligera · Higiene · Ajuste cómodo",
  },

  {
    name:     "Conjunto Antifluido Cierre Lateral Cindy Dama",
    category: "Hospitalaria",
    images:   ["Conjunto antifluido cierre lateral cindy dama 1.png", "Conjunto antifluido cierre lateral cindy dama 2.png"],
    price:    149000,
    description: [
      "Conjunto antifluido para dama con cierre lateral, pensado para ambientes hospitalarios y de atención clínica.",
      "Ofrece una presentación limpia y protección ligera para la jornada diaria.",
    ],
    specs: "Antifluido · Cierre lateral · Uso hospitalario · Confort y presentación",
  },

  {
    name:     "Conjunto Antifluido Cierre Frontal Dama",
    category: "Hospitalaria",
    images:   ["Conjunto antifluido cierre frontal dama 1.png", "Conjunto antifluido cierre frontal dama 2.png"],
    price:    149000,
    description: [
      "Conjunto antifluido para dama con cierre frontal, ideal para clínicas, consultorios y áreas de cuidado.",
      "Su diseño busca facilidad de uso y una imagen institucional adecuada.",
    ],
    specs: "Antifluido · Cierre frontal · Uso hospitalario · Práctico y cómodo",
  },

  {
    name:     "Conjunto Antifluido Licrado Dalia Dama",
    category: "Hospitalaria",
    images:   ["Conjunto antifluido licrado dalia dama 1.png", "Conjunto antifluido licrado dalia dama 2.png"],
    price:    159000,
    description: [
      "Conjunto antifluido licrado para dama con una confección flexible y cómoda para uso hospitalario.",
      "Pensado para jornadas prolongadas donde se necesita movilidad y buena presentación.",
    ],
    specs: "Licrado · Uso hospitalario · Ajuste cómodo · Alta movilidad",
  },

  {
    name:     "Conjunto Antifluido Licrado Celeste Dama",
    category: "Hospitalaria",
    images:   ["Conjunto antifluido licrado celeste dama 1.png", "Conjunto antifluido licrado celeste dama 2.png"],
    price:    159000,
    description: [
      "Conjunto antifluido licrado en color celeste para una presentación limpia y profesional.",
      "Adecuado para entornos clínicos y de atención al paciente.",
    ],
    specs: "Licrado · Color celeste · Uso hospitalario · Presentación institucional",
  },

  {
    name:     "Conjunto Antifluido Licrado Cuello En V Larry Hombre",
    category: "Hospitalaria",
    images:   ["Conjunto antifluido licrado cuello en v larry hombre 1.png", "Conjunto antifluido licrado cuello en v larry hombre 2.png"],
    price:    159000,
    description: [
      "Conjunto antifluido licrado para hombre con cuello en V, orientado a dotación hospitalaria cómoda y funcional.",
      "Muy útil en áreas de atención, consulta y apoyo clínico.",
    ],
    specs: "Licrado · Cuello en V · Uso hospitalario · Funcional y cómodo",
  },

  {
    name:     "Conjunto Antifluido Licrado Cuello Redondo con Bolsillo Violet Dama",
    category: "Hospitalaria",
    images:   ["Conjunto antifluido licrado cuello redondo con bolsillo violet dama 1.png", "Conjunto antifluido licrado cuello redondo con bolsillo violet dama 2.png"],
    price:    159000,
    description: [
      "Conjunto antifluido licrado para dama con cuello redondo y bolsillo, pensado para uso hospitalario diario.",
      "Ofrece practicidad sin perder una presentación pulida.",
    ],
    specs: "Licrado · Cuello redondo · Bolsillo frontal · Uso clínico",
  },

  {
    name:     "Conjunto Antifluido Licrado Cuello V",
    category: "Hospitalaria",
    images:   ["Conjunto antifluido licrado cuello v 1.png", "Conjunto antifluido licrado cuello v 2.png"],
    price:    149000,
    description: [
      "Conjunto antifluido licrado con cuello en V para dotación hospitalaria y atención al público.",
      "Su confección busca comodidad y una imagen profesional.",
    ],
    specs: "Licrado · Cuello en V · Uso hospitalario · Cómodo y ligero",
  },

  {
    name:     "Conjunto Antifluido Cuello V CX Dama",
    category: "Hospitalaria",
    images:   ["Conjunto antifluido cuello v cx dama 1.png", "Conjunto antifluido cuello v cx dama 2.png"],
    price:    149000,
    description: [
      "Conjunto antifluido para dama con cuello en V CX, creado para entornos de salud y apoyo clínico.",
      "Es una opción funcional para jornadas de trabajo continuas.",
    ],
    specs: "Antifluido · Cuello V CX · Uso hospitalario · Confort diario",
  },

  {
    name:     "Conjunto Antifluido Cuello V CX Hombre",
    category: "Hospitalaria",
    images:   ["Conjunto antifluido cuello v cx hombre 1.png", "Conjunto antifluido cuello v cx hombre 2.png"],
    price:    149000,
    description: [
      "Conjunto antifluido para hombre con cuello V CX, diseñado para dotación hospitalaria y clínica.",
      "Aporta una presentación sobria y comodidad durante el uso continuo.",
    ],
    specs: "Antifluido · Cuello V CX · Uso hospitalario · Presentación profesional",
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
  return `/producto/${slugify(name)}/`;
}

export interface Product {
  slug:        string;
  name:        string;
  category:    string;
  price:       number; 
  images:      ImageMetadata[];
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
export interface CategoryItem { image: ImageMetadata; image2?: ImageMetadata; name: string }
export interface Category {
  label:    string;
  href:     string;
  featured: CategoryItem[];
  products: string[];
}

/** Convierte un label de categoría al slug usado en /categoria/[slug] y en ?categoria= */
export function categorySlug(label: string): string {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const CATEGORY_CONFIG: { label: CategoryName; href: string }[] = [
  { label: "Calzado de Trabajo",   href: `/categoria/${categorySlug("Calzado de Trabajo")}/`   },
  { label: "Uniformes de Trabajo", href: `/categoria/${categorySlug("Uniformes de Trabajo")}/` },
  { label: "EPP",                  href: `/categoria/${categorySlug("EPP")}/`                  },
  { label: "Hospitalaria",         href: `/categoria/${categorySlug("Hospitalaria")}/`         },
  { label: "Gorros y Redecillas",  href: `/categoria/${categorySlug("Gorros y Redecillas")}/`  },
  { label: "Promocionales",        href: `/categoria/${categorySlug("Promocionales")}/`        },
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
