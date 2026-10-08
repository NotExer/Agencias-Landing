# Investigación de palabras clave con datos reales — Agencias Nacionales

Fecha: 8 de octubre de 2026. Complementa `reports/seo-2026-10-05/estrategia-crecimiento-organico-ia.md` y el seguimiento semanal del mismo día.

La estrategia del 5 de octubre infería la demanda a partir de impresiones de Search Console y del autocompletado, porque no había herramienta de volumen. Este informe llena ese vacío con datos de DataForSEO obtenidos a través de Monid:

| Fuente (Monid → DataForSEO) | Qué aporta | Alcance | Costo |
|---|---|---|---:|
| `/keywords/google-ads-search-volume` | Volumen mensual promedio, CPC y competencia en Google Ads | 137 palabras clave, Colombia, español | $0,09 |
| `/labs/keyword-suggestions` | Variantes long-tail con volumen, dificultad e intención | 7 semillas × 80 resultados | ≈ $0,15 |
| `/serp/google-organic` | Resultados reales de Google, top 20, móvil, ubicación Medellín | 12 búsquedas comerciales (4 fallaron con HTTP 502) | ≈ $0,05 |
| `/labs/ranked-keywords` | Palabras por las que ya rankea un dominio | agenciasnacionales.com y somosdotaciones.com.co | ≈ $0,05 |
| **Total** | | | **≈ $0,34** (saldo Monid: $0,66) |

Datos crudos: `volumenes-palabras-clave-monid.csv` en esta misma carpeta.

**Cómo leer los volúmenes.** Google Ads redondea en tramos (10, 20, 30, 50, 70, 90, 110, 140, 170, 210, 260, 320, 390, 480, 590, 720…) y agrupa variantes cercanas. Por eso `dotaciones medellin` y `dotaciones en medellin` muestran ambas 720: son la misma demanda, no 1.440. "n/a" significa que Google Ads no devolvió dato, no que la demanda sea cero. La SERP es una sola foto del 8 de octubre desde Medellín en móvil.

## 1. Lo que cambia respecto a la estrategia del 5 de octubre

1. **Uniformes antifluidos es la oportunidad más grande que tiene el sitio y hoy no aparece en Google.** `uniforme antifluido` suma 8.100 búsquedas mensuales en Colombia, `uniforme antifluido mujer` 1.000, `uniforme antifluido cerca de mi` 880, `bata antifluido` 720, `uniforme antifluido medellin` 480 y `uniforme antifluido hombre` 480. El catálogo tiene 9 conjuntos antifluidos y batas propias, pero el sitio **no está en el top 20** de `uniformes antifluidos medellin`. Ganan publicarlo.com.co, ideaspracticas.com.co, mevecol.com, Instagram y TikTok, en general con fichas de producto, no con contenido mejor. La estrategia la tenía en prioridad "Alta"; con estos datos pasa a ser **la primera prioridad después de Medellín**.
2. **`/dotaciones-medellin/` está en la posición 11** en la SERP real de Medellín para `dotaciones medellin` (720/mes). Coincide con Search Console (11,35). Arriba del primer resultado orgánico hay un **paquete local de 3 Perfiles de Empresa**, ninguno de Agencias Nacionales. En 10 de las 12 SERP consultadas aparece paquete local: el Perfil de Empresa compite tanto como la página.
3. **La landing de calzado apunta a búsquedas con poco volumen.** `calzado de dotacion` tiene 30 búsquedas/mes, `tenis de dotacion` 50 y `tenis de dotacion medellin` no devuelve dato. En cambio `zapatos de dotacion` tiene 210, `zapatos de dotacion mujer` 140, `zapatos antideslizantes` 1.300, `zapatos antideslizantes para cocina` 390, `zapatos tipo crocs` 170 y `zapatos para enfermeras` 110. La página es correcta y ya está indexada; lo que hay que ajustar es el vocabulario: **"zapatos" busca 7 veces más que "calzado"**.
4. **EPP en Medellín casi no tiene demanda propia.** `epp medellin` y `elementos de proteccion personal medellin` tienen 10 búsquedas/mes cada una, y `venta de epp medellin` 20. Confirma lo que decía la estrategia: vender EPP como complemento de la dotación y no invertir más esfuerzo en `/epp-medellin/`.
5. **`dotaciones empresariales colombia` tiene apenas 10/mes**, aunque la landing rankea entre las posiciones 4 y 8. El término amplio `dotaciones empresariales` tiene 480/mes y el sitio no está en el top 20. Defender la página actual es barato; no es donde está el volumen.
6. **Las prendas de dotación son un patrón que el competidor ya explota.** somosdotaciones.com.co rankea con páginas tipo `/camisas-para-dotacion-en-medellin/` y `/pantalones-para-dotacion-en-medellin/`. La demanda: `camisas de dotacion` 320 (+210 de la variante singular), `jean de dotacion` 210, `pantalon de dotacion` 210, `chaqueta dotacion` 210, `chaleco dotacion` 170 y `uniformes de cocina` 720. Agencias Nacionales vende casi todas esas prendas (camisa dril, jean dama/hombre, pantalón dril, overol, chaleco), pero solo tiene una categoría genérica, "Uniformes de Trabajo".
7. **El grupo informativo sobre la ley de dotación tiene más demanda de la que se suponía.** `dotacion empleados` 880, `bono de dotacion` 480 (CPC US$3,24, el más alto de todo el estudio), `formato de entrega de dotacion` 390, `que es dotacion` 390, `dotacion codigo sustantivo del trabajo` 390, `fecha de entrega de dotacion en colombia` 320, `quien tiene derecho a dotacion` 140. Lo buscan las personas de compras y gestión humana, es decir, los compradores. La guía "Ley de dotación en Colombia 2026" de la estrategia queda validada.

## 2. Volumen por grupo de la estrategia

Volumen mensual en Colombia. "Pos." es la posición orgánica de agenciasnacionales.com en la SERP móvil de Medellín del 8 de octubre (top 20); "—" = no consultada.

### A. Dotación Medellín → `/dotaciones-medellin/`

| Palabra clave | Vol. | Pos. | Nota |
|---|---:|---:|---|
| dotaciones medellin / dotaciones en medellin | 720 | **11** | Mismo grupo de demanda. Paquete local arriba |
| dotaciones itagui | 90 | — | Mayor que Envigado (30) y Rionegro (30) |
| dotaciones empresariales medellin | 50 | — | |
| uniformes y dotaciones medellin | 50 | — | |
| dotaciones medellin economicas | 50 | — | |
| empresas de dotaciones en medellin | 30 | — | |
| dotaciones industriales medellin | 30 | — | |
| cotizacion dotaciones para empresas | 20 | — | CPC US$1,81: alta intención |
| proveedor de dotaciones (y variantes) | n/a | — | Sin dato en Google Ads |

### Antifluidos → `/categoria/hospitalaria/`

| Palabra clave | Vol. | Pos. |
|---|---:|---:|
| uniforme(s) antifluido(s) | 8.100 | fuera del top 20 (solo 3 orgánicos; dominan Shopping y productos) |
| uniformes medicos | 2.900 | — |
| uniforme antifluido mujer | 1.000 | fuera del top 20 |
| uniforme antifluido cerca de mi | 880 | — |
| bata antifluido | 720 | — |
| uniforme antifluido medellin | 480 | **fuera del top 20** |
| uniforme antifluido hombre | 480 | — |
| overol antifluido | 480 | — |
| uniformes quirurgicos | 390 | — |
| pantalon antifluido / delantal antifluido | 390 c/u | — |
| uniformes medicos medellin | 260 | — |
| gorro antifluido / conjunto antifluido | 170 c/u | — |
| uniformes antifluidos envigado / bello / itagui | 40 c/u | — |

### Calzado de dotación → `/calzado-de-dotacion/`

| Palabra clave | Vol. | Pos. |
|---|---:|---:|
| zapatos antideslizantes | 1.300 | — |
| zapatos antideslizantes para cocina | 390 | fuera del top 20 |
| zapatos de dotacion | 210 | fuera del top 20 |
| zapatos tipo crocs | 170 | — |
| zapatos antideslizantes mujer | 170 | — |
| zapatos de dotacion mujer | 140 | — |
| zapatos para enfermeras | 110 | — |
| tenis de dotacion | 50 | — |
| fabrica de calzado medellin | 40 | — |
| calzado de dotacion | 30 | fuera del top 20 |

En `zapatos de dotacion` y `calzado de dotacion` dominan evacol.com.co, calzadonuevamoda.com.co, calzatodo y mundoindustrial, con páginas de categoría que tienen precios. Además, `zapatos de dotacion` muestra un AI Overview.

### Prendas de dotación (sin página propia)

| Palabra clave | Vol. | Pos. | Quién gana |
|---|---:|---:|---|
| overoles | 9.900 | — | Genérico; el sitio rankea 36 en `overoles azules` (170) |
| uniformes de cocina | 720 | — | |
| camisas de dotacion (+ camisa dotacion) | 320 + 210 | fuera del top 20 | somosdotaciones `/camisas-para-dotacion-en-medellin/` (#1) |
| jean de dotacion | 210 | fuera del top 20 | dwork, tiendasepp, grupoechavarriarua |
| pantalon de dotacion | 210 | — | somosdotaciones (#18 nacional) |
| chaqueta dotacion | 210 | — | |
| chaleco dotacion | 170 | — | somosdotaciones |

### Calzado de seguridad → `/categoria/calzado-de-trabajo/`

`botas de seguridad` 14.800, `botas de seguridad para mujer` 4.400, `botas punta de acero` 3.600, `botas de caucho` 3.600, `botas croydon` 1.900, `botas de seguridad dielectricas` 590, `botas de dotacion` 390 (fuera del top 20; dotacionesmedellin.com es #1), `botas workman` 320, `botas de caucho blancas` 210, `botas blancas de seguridad` 140, `botas de seguridad medellin` 90. Mucho volumen, pero es un mercado de retail y marketplaces donde Agencias Nacionales distribuye y no fabrica. Prioridad media: la guía de botas para mujer ya existe y puede enlazar a la categoría.

### Informativo / ley de dotación (blog)

| Palabra clave | Vol. | Página |
|---|---:|---|
| dotacion empleados / dotacion a empleados | 880 | Nueva guía de ley de dotación |
| bono(s) de dotacion | 480 | Nueva guía: bono vs. dotación física (en la SERP: loggro, elempleo, Pluxee, Edenred; hay AI Overview) |
| formato(s) de entrega de dotacion | 390 | **Existe**: `acta-entrega-dotacion-epp-empresa`. El título dice "acta" (140) y no "formato" (390) |
| que es dotacion | 390 | Nueva guía de ley de dotación |
| dotacion codigo sustantivo del trabajo | 390 | Nueva guía de ley de dotación |
| fecha(s) de entrega de dotacion en colombia | 320 | Nueva guía de ley de dotación |
| quien tiene derecho a dotacion | 140 | Nueva guía de ley de dotación |
| que son servicios generales | 590 | El sitio ya rankea 30–35 con la guía de aseo y servicios generales |

## 3. Lo que Google ya le reconoce al sitio (DataForSEO, Colombia)

DataForSEO registra 27 palabras clave posicionadas para agenciasnacionales.com, frente a 46 de somosdotaciones.com.co. Casos útiles:

- `agencias nacionales` (480/mes): posición 1.
- `uniforme epm` / `uniformes epm` (110): posiciones 3 y 8, **con la URL antigua `/uniforme-epm-contratista/`, que devolvía 404**. Corregido (sección 5).
- `brazalete brigada` (480): posición 39 con `/brazaletes-brigadistas/`, **que también devolvía 404**. Corregido.
- `gorro de laboratorio` (210): **posición 11** con `/producto/gorro-quirurgico/`. Al borde de la primera página: conviene agregar "gorro de laboratorio" al título y la descripción de esa ficha.
- `reflectivo` (1.000): posición 47 con `/producto/chaleco-reflectivo/`.
- `que son servicios generales` (590): posiciones 30–35 con la guía de aseo y servicios generales.
- Varias URLs antiguas `/categorias/...` siguen rankeando. Redirigen bien (308 a la barra final y luego 301 a `/categoria/...`), pero en dos saltos. Funciona, y Google consolidará con el tiempo.

## 4. Qué compite realmente en la SERP de Medellín

- **Paquete local (Perfil de Empresa)**: aparece en 10 de 12 búsquedas comerciales. Para `dotaciones medellin` lo ocupan dotacionesmedellin.com, uniformesydotacionesmedellin.com y "Unydos". En antifluidos, Uniformes Elite, Lrus y Textimédicos.
- **Instagram**: suma 10 posiciones del top 10 entre las 12 SERP, con perfiles, reels y páginas `/popular/`. TikTok aparece en antifluidos. Para estas búsquedas, Instagram compite como si fuera un sitio web.
- **Fichas y categorías con precio** (Mercado Libre, tiendas Shopify o WooCommerce) dominan antifluidos, zapatos y prendas. Las búsquedas de producto se ganan con fichas y categorías bien tituladas, no con artículos.
- **AI Overview** en `dotaciones empresariales`, `zapatos de dotacion` y `bonos de dotacion`.

## 5. Cambio aplicado (local, sin commit ni despliegue)

`vercel.json`: dos redirecciones 301 nuevas, con el mismo patrón de las URLs antiguas ya recuperadas.

| Origen (devolvía 404) | Destino | Motivo |
|---|---|---|
| `/uniforme-epm-contratista/` | `/producto/camisa-epm/` | Rankea 3 en `uniforme epm`; hoy cae en un 404 |
| `/brazaletes-brigadistas/` | `/articulos-del-blog/dotacion-para-brigada-de-emergencias/` | No hay ficha de brazalete; la guía de brigada es lo más cercano |

`npm run verify` se ejecutó tras el cambio: 194 páginas generadas y comprobaciones de redirecciones y SEO/CRO aprobadas.

### Aplicado el 8 de octubre en la rama `seo/titulos-y-redirecciones` (puntos 1–7, pendiente de merge)

Redirecciones EPM y brazaletes (con control en `scripts/check-redirects.mjs`); título de la categoría hospitalaria; campo `seoTitle` en el catálogo (sin cambiar nombres ni slugs de producto) para las 9 fichas antifluidas, el gorro y el overol; landing de calzado retitulada a "Zapatos y calzado de dotación", con sección de zapatos tipo crocs (sin afirmar suela antideslizante, que no está confirmada) y FAQ para mujer; título y meta del artículo del acta con "formato". `npm run verify` pasa y los 136 slugs de producto no cambian.

## 6. Acciones recomendadas, por valor de negocio

Regla: no se reescriben páginas editadas en los últimos 60 días salvo título o meta (el 5 de octubre se editaron `/dotaciones-medellin/`, `/calzado-de-dotacion/`, hospitalaria y los 35 artículos). Las demás acciones son nuevas o de bajo riesgo.

1. **Antifluidos (máxima prioridad).** Título y H1 de `/categoria/hospitalaria/` orientados a "Uniformes antifluidos en Medellín | Fabricantes" (ya renombrada el 5 oct; verificar que el `<title>` lo diga en ese orden). Fichas de producto con "uniforme antifluido mujer/hombre" en el nombre visible; hoy dicen "Conjunto Antifluido Licrado Dalia Dama", y Google busca "uniforme antifluido mujer". Si se puede mostrar precio o "desde", las SERP de producto lo premian; si no, mantener la política de cotización y compensar con fotos y tallas.
2. **Perfil de Empresa en Google.** Es el bloque que está encima de todos los resultados orgánicos. Revisar categorías secundarias, siempre elegidas de la lista oficial y nunca inventadas, servicios (antifluidos, calzado de dotación, camisas, jeans, overoles, EPP), fotos y publicaciones semanales. Pedir reseñas que mencionen el producto y el lugar ("uniformes antifluidos para la clínica en Envigado").
3. **Ajustar el vocabulario de `/calzado-de-dotacion/`** sin rehacerla: el `<title>` debe empezar por "Zapatos y calzado de dotación…", y añadir H2 o secciones para "zapatos antideslizantes para cocina" y "zapatos tipo crocs para dotación" (hay 8 referencias). Esperar sus primeras impresiones antes de cambios de fondo.
4. **Patrón "[prenda] de dotación"**: 5 páginas de subcategoría (camisas, jeans, pantalones, chaquetas/chalecos y overoles de dotación) con las fichas existentes. Cada una necesita algo propio: tela, tallas, usos por cargo, bordado, fotos reales. Una plantilla donde solo cambia el nombre de la prenda sería contenido duplicado. Ritmo: una por semana, no las cinco de golpe.
5. **Guía "Ley de dotación en Colombia 2026"** que cubra quién tiene derecho, fechas de entrega, qué dice el Código Sustantivo del Trabajo y bono vs. dotación física. Unas 2.500 búsquedas/mes sumadas. Al final, CTA a cotizar y enlaces a `/dotaciones-medellin/` y a la de Colombia.
6. **Retitular el artículo de acta de entrega** para incluir "formato" ("Formato y acta de entrega de dotación y EPP…"). Solo título y meta: el artículo ya tiene citas de Copilot y no conviene tocar el cuerpo.
7. **Victorias rápidas en fichas**: "gorro de laboratorio" en `/producto/gorro-quirurgico/` (posición 11); "overol azul de dotación" en `/producto/overol-azul-oscuro/`.
8. **Instagram**: publicar cada referencia antifluida y de calzado con texto que use la búsqueda exacta ("uniforme antifluido mujer Medellín"). Ocupa espacios de la primera página que el sitio solo no puede ocupar.
9. **Desplegar las dos redirecciones** de la sección 5 (requiere commit y deploy autorizados).

## 7. Cómo sumar Monid a la automatización semanal

El seguimiento semanal (GSC, GA4 y Clarity vía Composio) queda igual: esos datos son gratis y propios. Monid solo cubre lo que esas fuentes no dan.

| Frecuencia | Paso | Endpoint | Costo aprox. |
|---|---|---|---:|
| Mensual (primer lunes) | Posición real en la SERP de Medellín (móvil, top 20) de las 12 búsquedas de la sección 2 | `dataforseo /serp/google-organic`, `location_code: 1003654`, `depth: 20` | ≈ $0,05 |
| Trimestral | Volumen de la lista completa (`volumenes-palabras-clave-monid.csv`) | `dataforseo /keywords/google-ads-search-volume`, Colombia, `es` | $0,09 |
| Antes de crear una página | Variantes long-tail de la semilla | `dataforseo /labs/keyword-suggestions`, `limit: 80` | ≈ $0,02 |
| Trimestral | Palabras ganadas o perdidas por el sitio y por somosdotaciones.com.co | `dataforseo /labs/ranked-keywords` | ≈ $0,05 |

Notas operativas: lanzar las consultas SERP de una en una o de a pocas. En paralelo, 10 de 16 dieron HTTP 502 al primer intento y no se cobraron. Con el saldo actual ($0,66) alcanza para unos 10 meses del paso mensual.

## Límites

- Los volúmenes de Google Ads son promedios de 12 meses, redondeados y agrupados; sirven para ordenar prioridades, no como pronóstico de tráfico.
- La SERP es una única consulta móvil desde Medellín; Google personaliza y rota resultados.
- Las 4 SERP que fallaron fueron: `dotacion cerca de mi`, `formato entrega de dotacion`, `fecha de entrega de dotacion en colombia` y `botas de caucho blancas`. Sus posiciones quedan sin medir.
- DataForSEO no devolvió métricas de dominio para dotacionesmedellin.com.
- No se inventó ningún volumen: "n/a" es ausencia de dato.
