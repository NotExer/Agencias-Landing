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
    images:   ["Tapón Auditivo Reutilizable.jpeg"],
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
    images:   ["Redecilla Suave Ref-02.jfif"],
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
