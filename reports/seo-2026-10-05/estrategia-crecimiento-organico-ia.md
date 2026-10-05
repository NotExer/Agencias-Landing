# Estrategia de crecimiento orgánico y en IA — Agencias Nacionales

Fecha: 5 de octubre de 2026. Base: artículo "God-Mode 2027 AI SEO Setup" (Borja, 14 sep 2026), auditorías del 9, 14 y 21 de septiembre, GA4 (propiedad 527357451), Clarity, SERP de Google Colombia observadas hoy (ubicación detectada: Envigado), autocompletado de Google Colombia y revisión del código del sitio.

Límites de los datos: no hay herramienta de volumen de búsqueda conectada (Semrush, Ahrefs y DataForSEO están sin enlazar en Composio) y Search Console tampoco está conectado a Composio. La demanda se infiere de tres señales reales: impresiones de Search Console de septiembre, autocompletado de Google Colombia (solo muestra búsquedas con demanda recurrente) y la competencia que aparece en la SERP. No se inventaron volúmenes.

## 1. Diagnóstico en una página

1. **El sitio no está en el top 10 orgánico de ninguna búsqueda comercial de Medellín.** Hoy no aparece en las primeras posiciones de `dotaciones medellin`, `dotaciones empresariales`, `dotaciones industriales medellin`, `elementos de proteccion personal medellin`, `epp medellin`, `botas de seguridad medellin`, `calzado de trabajo`, `uniformes empresariales medellín` ni `proveedor de dotaciones para empresas`. La única entrada en el top 10 es `dotaciones empresariales colombia` (posición 4, `/dotaciones-empresariales-colombia/`). `/dotaciones-medellin/` está en la posición media 11,5, justo al borde de la primera página.
2. **Las 35 guías del blog no empujan a las páginas que venden.** Ningún artículo enlaza dentro del texto a `/dotaciones-medellin/` ni a `/epp-medellin/`. La plantilla solo agrega tres enlaces genéricos al final. El artículo de acta de entrega recibió 154 citas de Copilot en una semana, y toda esa autoridad termina en una página sin camino hacia la cotización local.
3. **Los competidores que ganan no son mejores; están más alineados.** `dotacionesmedellin.com`, `somosdotaciones.com.co`, `dotacionescorporativas.com` y `santigo.com.co` ocupan el top 4. Ninguno publica pedido mínimo, tiempos de entrega, casos, certificaciones, normas ni preguntas frecuentes. Ganan por dominio de coincidencia exacta, unas 2.400 palabras de contenido y muchos años de señales locales. La forma de superarlos es la que propone el artículo: **ser la respuesta**, con datos que ellos no tienen.
4. **Hay un activo diferencial sin explotar: Agencias Nacionales fabrica calzado de dotación.** El catálogo tiene 52 referencias de calzado, y la mayoría son tenis, mocasines, valetas y zapatos tipo crocs de dotación, no botas de seguridad. Google Colombia muestra demanda propia para `tenis de dotacion medellin`, `calzado de dotación medellin`, `zapatos de dotacion antideslizantes`, `zapatos de dotación mujer`, `tenis dotacion antifluido` y `fabrica de calzado medellin`. Ninguna página del sitio apunta a esa intención: la categoría se titula "Calzado de Seguridad Industrial".
5. **La IA ya conoce la marca, pero por contenido informativo.** En las pruebas directas del 14 de septiembre, Gemini y Claude la pusieron primera y ChatGPT segunda. Copilot la cita casi solo por guías como el acta de entrega. Las fuentes que la IA usa para las listas de proveedores son directorios (Páginas Amarillas, infoisinfo con sus "10 mejores", empresite, eldirectorio) y páginas de competidores. Varios de esos directorios todavía muestran "Agencias Nacionales LTDA".
6. **Hay datos inconsistentes sobre la empresa.** El sitio dice 55 años en unas páginas y 56 en otras. El widget de reseñas dice 4,5 con 25 reseñas y el Perfil de Empresa 4,6 con 27. La versión inglesa de `llms.txt` dice "founded in Medellín", pero la sede registrada está en Envigado y la sociedad actual se constituyó en 1994. Para un buscador o un modelo, los datos contradictorios restan confianza.

Conclusión: no hace falta más volumen de contenido. Hacen falta cuatro cosas, en este orden: (a) convertir las landings en la mejor respuesta comercial del mercado, (b) conectar el blog con esas landings, (c) abrir el grupo de calzado de dotación, donde Agencias Nacionales es fabricante, y (d) poner datos consistentes y verificables en las fuentes que la IA consulta.

## 2. El artículo aplicado a Agencias Nacionales

| Paso del artículo | Qué significa aquí | Estado actual | Acción |
|---|---|---|---|
| 1. Palabras clave con intención de compra | Búsquedas de quien va a cotizar: "dotaciones medellin", "proveedor de dotaciones", "tenis de dotacion medellin", "precio botas dotacion", "fabrica de uniformes antifluidos medellin" | Las landings existen, pero son delgadas (≈500 palabras propias) y no están en el top 10 | Reforzar antes de crear. Solo crear donde no hay página: calzado de dotación y uniformes antifluidos |
| 2. Enlaces internos por grupos temáticos | Guía → respuesta de apoyo → landing → producto | 0 de 35 artículos enlazan en el texto a las landings de Medellín | Mapa de enlaces de la sección 5 |
| 3. Ganancia de información | Publicar lo que el top 10 no dice | Ningún competidor publica mínimos, plazos, normas, casos ni datos propios | Estudio con datos propios de pedidos (sección 6) |
| 4. Ser la respuesta, no solo responder | Mostrar para quién es, cómo trabaja, cuánto cuesta y en qué es distinto | La landing explica qué pedir, pero no muestra pruebas | Bloques de evidencia en las landings (sección 4) |
| 5. Backlinks de calidad, no cantidad | Menciones donde leen compradores de SST y compras | Directorios con datos viejos (LTDA) y sin enlaces relevantes | Lista de objetivos de la sección 8 |
| 6. Publicar donde la IA aprende | Directorios, listados, Instagram, Facebook, YouTube y LinkedIn que aparecen como fuentes | Instagram y Facebook de competidores salen en la página 1 de Google; Agencias Nacionales sale en Facebook para Envigado | Sección 7 |

Una advertencia sobre el artículo: es contenido de una herramienta (Distribb) que vende automatización, y la cifra de "269,5%" es de sus propios clientes, sin verificar. El marco de seis pasos es sólido y coincide con la guía pública de Google. Lo que no conviene copiar es el envío automatizado y masivo a directorios con bots: genera enlaces de baja calidad y puede dejar datos inconsistentes de la empresa.

## 3. Investigación de palabras clave

Prioridad = intención de compra × cercanía a la primera página × ventaja propia. "Señal" indica de dónde sale la evidencia de demanda: GSC = Search Console de septiembre; AC = autocompletado de Google Colombia.

### Grupo A — Dotación empresarial Medellín (página principal: `/dotaciones-medellin/`)

| Palabra clave | Señal | Situación | Prioridad |
|---|---|---|---|
| dotaciones medellin | GSC 22 impresiones/semana, pos. 14; AC #1 | Fuera del top 9 hoy, pos. media 11,5 | Máxima |
| dotaciones en medellin | GSC 17 impr., pos. 19,7 | Igual URL | Máxima |
| dotaciones empresariales medellin | AC | Fuera del top 9 | Máxima |
| dotaciones industriales medellin | GSC 14 impr., pos. 23,9; AC | Fuera del top 9 | Alta |
| dotaciones y uniformes medellín | AC | — | Alta |
| dotaciones para empresas medellin | AC | — | Alta |
| dotaciones medellín económicas | AC, GSC pos. 11 | Requiere hablar de precio o rango | Media |
| proveedor de dotaciones / proveedor de dotaciones para empresas | AC | Fuera del top 9 | Alta (intención de compra pura) |
| cotizacion dotaciones para empresas | AC | — | Alta |
| dotaciones envigado, dotaciones itagui | AC; GSC pos. 3 para Envigado | Facebook rankea, el sitio no | Media (sección sobre Valle de Aburrá dentro de la misma landing, no landings por municipio) |

### Grupo B — Dotación empresarial Colombia (página principal: `/dotaciones-empresariales-colombia/`)

| Palabra clave | Señal | Situación | Prioridad |
|---|---|---|---|
| dotaciones empresariales colombia | AC | **Posición 4** | Defender: título y CTR |
| dotaciones empresariales | AC | Fuera del top 9 | Alta |
| dotaciones para empresas | AC | — | Alta |
| uniformes empresariales | AC | — | Media |
| dotaciones empresariales para oficina | AC | — | Media (sección dentro de la landing) |

### Grupo C — Calzado de dotación (página nueva: `/calzado-de-dotacion/`; aquí está la ventaja de fabricante)

| Palabra clave | Señal | Prioridad |
|---|---|---|
| calzado de dotación / calzado de dotación medellin | AC | Máxima |
| tenis de dotacion / tenis de dotacion medellin | AC | Máxima |
| zapatos de dotacion / zapatos de dotación mujer / zapatos de dotacion hombre | AC | Alta |
| zapatos de dotacion antideslizantes | AC | Alta (cocinas, aseo, salud) |
| zapatos de dotacion para oficina / calzado dotacion oficina | AC | Alta |
| calzado dotacion servicios generales | AC | Alta (ya existe una guía sobre aseo y servicios generales para enlazar) |
| tenis dotacion antifluido, tenis blancos de dotacion, tenis negros de dotacion | AC | Media (subsecciones) |
| fabrica de calzado medellin / fábrica de calzado en medellín | AC | Alta (refuerza la entidad "fabricante") |

### Grupo D — Calzado de seguridad (página principal: `/categoria/calzado-de-trabajo/`)

| Palabra clave | Señal | Prioridad |
|---|---|---|
| botas de seguridad medellín, calzado de seguridad medellin | AC | Alta |
| botas de dotacion / botas de dotacion medellin / punta de acero | AC | Alta |
| botas workman precio / botas workman precio colombia / botas workman croydon | AC | Alta si se pueden publicar precios o rangos |
| precio botas dotacion | AC | Alta (igual) |
| botas de seguridad dielectricas, calzado de seguridad antideslizante | AC | Media (secciones con referencias concretas) |
| botas de seguridad para mujer | AC; ya hay guía | Media (enlazar la guía a la categoría) |
| mejores marcas de botas de seguridad en colombia | AC | Media (guía comparativa honesta: Croydon vs. fabricación propia) |

### Grupo E — EPP (páginas principales: `/epp-medellin/` y `/epp-colombia/`)

| Palabra clave | Señal | Situación | Prioridad |
|---|---|---|---|
| elementos de proteccion personal medellin | GSC 4–52 impr., pos. 28–53; AC | Fuera del top 9 | Alta |
| venta de epp medellin | GSC 83 impr. trimestrales, pos. 38–64 | Lejos | Media |
| epp medellin | AC | Fuera del top 9; dominan almacenpanamericano y siseguridad | Media |
| proveedores de epp en colombia | AC | — | Media |
| epp seguridad industrial | AC | — | Baja (genérico, muy competido) |

Lectura honesta: en EPP compiten distribuidores grandes, ferreterías, Homecenter y Sonepar. Agencias Nacionales no fabrica EPP. Lo más rentable es vender EPP como complemento de la dotación ("dotación completa en una sola orden") y no pelear "epp" en solitario.

### Grupo F — Uniformes antifluidos y hospitalarios (página principal: `/categoria/hospitalaria/`)

| Palabra clave | Señal | Prioridad |
|---|---|---|
| uniformes antifluidos medellin / envigado / bello / rionegro | AC | Alta |
| uniformes antifluidos medellín precios | AC | Alta |
| fabrica de uniformes antifluidos medellin, fabrica de uniformes medicos medellin | AC | Alta (fabricante) |
| uniformes antifluidos para mujer | AC | Media |

Acción: retitular la categoría ("Uniformes antifluidos y dotación hospitalaria en Medellín | Fabricantes") y ampliarla. No crear otra página.

### Grupo G — Informativo que alimenta la IA y el embudo

| Palabra clave | Señal | Página |
|---|---|---|
| ley de dotacion para empleados en colombia / ley de dotaciones en colombia / ley entrega de dotacion | AC, la primera sugerencia | Nueva guía: "Ley de dotación en Colombia 2026" |
| acta de entrega de dotacion | 154 citas de Copilot | Existe: añadir enlaces y CTA |
| dotación para restaurantes (medellin) | AC | La guía de alimentos ya existe: añadir sección y enlace |
| bonos de dotación | Pluxee compra anuncios en "dotaciones medellin" | Guía comparativa: bono vs. dotación física |

## 4. "Ser la respuesta": qué agregar a las páginas comerciales

Esto aplica a `/dotaciones-medellin/` primero, y luego se replica en Colombia, EPP, calzado y hospitalaria. Cada punto necesita un dato real del negocio; no se debe publicar nada inventado.

1. **Ficha rápida del proveedor** (bloque visible y en schema): fabricante desde [año verificado], sede en Envigado, pedido mínimo por línea, plazo típico de producción por línea, cobertura de despacho, formas de pago, personalización disponible (bordado, sublimación, DTF, serigrafía) y marcas que distribuye (Croydon).
2. **Fabricante vs. distribuidor vs. bono de dotación**: una tabla honesta con la diferencia en tallas, tiempos, personalización, reposición y costo total. Es el contenido que una IA cita cuando alguien pregunta "¿qué proveedor me conviene?".
3. **Precios: descartado por decisión del negocio (5 oct).** Todo se vende bajo cotización. Para las búsquedas con "precio" se responde en las FAQ por qué no hay lista de precios, qué determina el valor y cómo pedir la cotización formal.
4. **Dos o tres casos reales** con este formato: sector, número de trabajadores, qué se entregó, plazo, problema que resolvió y foto autorizada. Es lo que pedía la auditoría de septiembre y sigue pendiente.
5. **Prueba social consistente**: reseñas reales de Google con fecha, la distinción finalista Gacela misiónpyme 2024 (Banco de Bogotá) con enlace a la fuente, logos de clientes con permiso y certificaciones o normas reales del calzado (por ejemplo, la norma que cumple cada bota Croydon según su ficha).
6. **Catálogo dentro de la landing**: 6–9 productos destacados con foto y enlace a la ficha. Hoy la landing solo enlaza tres categorías.
7. **Preguntas frecuentes de compra**: pedido mínimo, cuánto tarda, si entregan en la empresa, si se pueden mezclar tallas, factura electrónica, crédito para empresas, cambios por talla. Mantener el schema FAQPage.

Objetivo de extensión: unas 1.200–1.800 palabras útiles por landing, sin relleno. La extensión no es el factor; la cubren solos los datos de arriba.

## 5. Grupos temáticos y enlaces internos

Hoy cada artículo cierra con los mismos tres enlaces genéricos. Hay que añadir 2–3 enlaces contextuales dentro del texto, con un ancla descriptiva, hacia la landing del grupo.

| Grupo | Página comercial principal | Artículos existentes que deben enlazarla |
|---|---|---|
| Compras de dotación (Medellín) | `/dotaciones-medellin/` | cómo cotizar dotaciones sin errores · cómo evaluar proveedores · presupuesto anual · prueba piloto · checklist de nuevos ingresos · control de calidad de la entrega · acta de entrega · pliego para licitación privada · ficha técnica por cargo |
| Operación multisede (Colombia) | `/dotaciones-empresariales-colombia/` | política de reposición multisede · entregas escalonadas por sede y turno · stock mínimo por sede (x2) · consolidar tallas por sede · contratistas y temporales · reducir cambios por talla |
| Calzado | `/categoria/calzado-de-trabajo/` + nueva `/calzado-de-dotacion/` | calzado cómodo para jornadas largas · calzado según riesgo y superficie · botas de seguridad para mujer · cada cuánto renovar |
| EPP | `/epp-medellin/` y `/epp-colombia/` | protector auditivo · gafas · casco · guantes · trabajo en alturas · matriz de reposición de EPP · brigada de emergencias |
| Hospitalaria | `/categoria/hospitalaria/` | dotación hospitalaria antifluido |
| Sectores | Landing de Medellín (sección de sectores) | alimentos · logística y bodegas · aseo y servicios generales · mantenimiento y facility |

También: la portada y `/nosotros/` deben enlazar a `/calzado-de-dotacion/` cuando exista, y cada ficha de producto debe enlazar a su landing local.

## 6. Ganancia de información: el estudio que nadie más puede publicar

El artículo propone medir lo que el top 10 no dice. Agencias Nacionales tiene una fuente que ningún competidor publica: **su propio historial de pedidos y cotizaciones**. Una sola pieza anual, por ejemplo "Informe de dotación empresarial en Antioquia 2026", podría incluir:

- Distribución real de tallas por género y sector (dato muy útil para compras; reduce devoluciones).
- Porcentaje de cambios por talla y cómo se redujo con toma de tallas previa.
- Composición típica de una dotación por cargo (operario de planta, aseo, cocina, bodega, oficina) y costo promedio por trabajador.
- Plazos reales de entrega por tipo de pedido.
- Errores más comunes en las solicitudes de cotización.

Hay que publicarlo con el método (cuántos pedidos, qué periodo) y enlazarlo desde las landings. Es justo lo que citan los medios, las universidades con programas de SST y los asistentes de IA. **Requiere datos internos anonimizados.**

## 7. Visibilidad en IA: dónde publicar y qué corregir

Fuentes observadas cuando se pregunta por proveedores (búsqueda web y SERP):

- Directorios: Páginas Amarillas (dotaciones para empresas en Medellín), infoisinfo ("Los 10 mejores servicios de dotaciones para empresas en Colombia"), empresite y eldirectorio.co. **Acción:** reclamar o actualizar cada ficha con el mismo nombre (Agencias Nacionales S.A.S.), la misma dirección, el mismo teléfono, la misma descripción y el mismo enlace. Corregir "LTDA" donde se pueda.
- Redes: Instagram (`@dotacionesplurall`, `@dotacionescorporativas`) aparece en la página 1 de Google para búsquedas de dotación. El Facebook de Agencias Nacionales aparece para Envigado. **Acción:** bio de Instagram y Facebook con la frase canónica ("Fabricantes de dotaciones empresariales, calzado de dotación y EPP para empresas de Medellín y Colombia. Sede en Envigado") y enlace a la landing de Medellín, no a la portada.
- LinkedIn de empresa: publicar los casos y el estudio de la sección 6.
- YouTube: videos cortos del proceso de fabricación de calzado y de toma de tallas. Es la prueba visual de "fabricante" que no se puede copiar.

Correcciones de consistencia:

1. Unificar los años de experiencia en todo el sitio: 55 en unas páginas, 56 en otras.
2. `public/llms.txt`: la versión inglesa dice "founded in Medellín". Dejar Envigado (o el dato histórico verificado) y añadir la línea de calzado de dotación.
3. Widget de reseñas: 4,5/25 en el sitio frente a 4,6/27 en Google. Actualizarlo o quitar el número fijo.
4. Añadir al schema de Organization: `foundingDate` verificado, `sameAs` (LinkedIn, Facebook, Instagram), `award` (Gacela 2024, si es verificable) y `makesOffer` por línea.

Medición semanal: hacer las mismas 5 preguntas en ChatGPT, Gemini, Claude, Perplexity y AI Mode de Google, y anotar fecha, posición, si hay enlace y qué fuentes se citan. Ejemplos de preguntas: "¿Qué empresas venden dotaciones en Medellín?", "Proveedor de tenis de dotación en Medellín", "¿Dónde compro botas de seguridad para empresa en Medellín?", "Fábrica de uniformes antifluidos en Medellín" y "¿Qué proveedor de dotación recomiendas para una empresa de alimentos en Antioquia?".

## 8. Backlinks de calidad (lista de objetivos, sin compras)

1. **Croydon**: aparecer como distribuidor en su localizador o página de puntos de venta, si existe programa de distribuidores.
2. **Banco de Bogotá / premio Gacela**: nota o página de finalistas 2024 con enlace.
3. **Cámara de Comercio Aburrá Sur, ANDI seccional Antioquia, Consejo Colombiano de Seguridad**: directorios de afiliados o proveedores.
4. **Clientes actuales**: casos en sus blogs o en sus páginas de proveedores, con enlace a cambio de que se mencione el caso en el sitio de Agencias Nacionales.
5. **Universidades e instituciones con programas de SST** en Medellín: ofrecer el estudio de tallas o la plantilla de acta de entrega como recurso.
6. **Menciones sin enlace**: buscar "Agencias Nacionales" + dotación en medios y directorios y pedir el enlace.

## 9. Plan de 90 días

### Semanas 1–2 (sin datos nuevos del negocio; se puede hacer ya)

- Enlaces contextuales desde los 35 artículos hacia sus landings (sección 5), empezando por acta de entrega, cómo cotizar y cómo evaluar proveedores.
- Corregir las inconsistencias (55/56 años, `llms.txt`, widget de reseñas).
- Retitular `/categoria/hospitalaria/` hacia "uniformes antifluidos Medellín".
- Añadir productos destacados a `/dotaciones-medellin/` y `/epp-medellin/`.
- Conectar Search Console a Composio (`composio link google_search_console`) para medir sin depender del navegador.

### Semanas 2–4 (requiere datos del negocio)

- Ficha rápida del proveedor, tabla fabricante vs. distribuidor vs. bono y FAQ de compra en `/dotaciones-medellin/`.
- Crear `/calzado-de-dotacion/` con las referencias propias de tenis, mocasines, valetas y antideslizantes, fotos, tallas, colores, pedido mínimo y uso recomendado por cargo.
- Guía "Ley de dotación en Colombia 2026" con CTA a cotizar.

### Semanas 4–8

- 2–3 casos reales publicados.
- Directorios y redes actualizados con la frase canónica.
- ~~Rangos de precio~~: descartado; todo es bajo cotización.

### Semanas 8–12

- Estudio de datos propios (sección 6) y difusión: LinkedIn, universidades, gremios.
- Revisar el grupo de EPP con los datos de Search Console de 8 semanas.

## 10. Cómo saber si funciona

| Indicador | Hoy | Meta a 90 días (orientativa, no garantizada) |
|---|---|---|
| Posición media de `/dotaciones-medellin/` | 11,5 | ≤ 8 (primera página estable) |
| Búsquedas de Medellín con clics | 2 consultas con clics/semana | ≥ 6 |
| Sesiones orgánicas (GA4, 28 días) | 168 | +50% |
| `generate_lead` desde orgánico (28 días) | 22 eventos clave orgánicos | +50% |
| **Cotizaciones calificadas y ventas (CRM o registro manual)** | No se mide | Medir desde la semana 1 |
| Menciones en las 5 preguntas de IA | Recomendado en 3 de 3 asistentes (14 sep) | Mantener en 5 asistentes + enlace a una landing, no al blog |

El indicador que importa es el penúltimo. `generate_lead` cuenta clics en WhatsApp, no clientes. Sin un registro simple de "llegó por Google / IA → cotizó → compró", no se puede saber si el crecimiento trae clientes calificados.

## 11. Lo que se necesita del negocio

1. ~~Plazo~~ (confirmado el 5 oct: uniformes de línea inmediatos según disponibilidad; uniformes especiales hasta 45 días). Falta el pedido mínimo por línea.
2. ~~Precios~~: no se publican; todo es bajo cotización.
3. 2–3 clientes que acepten aparecer como caso, con fotos.
4. ~~Años~~: 57 años (confirmado el 5 oct; en el schema queda 1969 como `foundingDate`). Falta confirmar si la historia empezó en Medellín o en Envigado.
5. Normas o certificaciones reales del calzado propio y de las referencias Croydon.
6. Acceso a datos anonimizados de pedidos para el estudio.
7. Confirmar si Agencias Nacionales es proveedor de EPM (en el catálogo aparece una "Pava EPM"); sería una prueba de confianza muy fuerte si se puede mencionar.

## Fuentes

- Artículo: "God-Mode 2027 AI SEO Setup", @borjafat, 14 sep 2026.
- [Google: optimización para experiencias de IA en la Búsqueda](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Páginas Amarillas: dotaciones para empresas en Medellín](https://www.paginasamarillas.com.co/medellin/servicios/dotaciones-para-empresas)
- [infoisinfo: servicios de dotaciones para empresas en Colombia](https://www.infoisinfo.com.co/busqueda/dotaciones_para_empresas)
- [empresite: empresas de dotaciones](https://empresite.eleconomistaamerica.co/Actividad/DOTACIONES/)
- [einforma: Agencias Nacionales (aún como LTDA en la URL)](https://directorio-empresas.einforma.co/informacion-empresa/agencias-nacionales-ltda)
- [dotacionesmedellin.com](https://dotacionesmedellin.com/) y [somosdotaciones.com.co](https://somosdotaciones.com.co/): revisión de contenido del 5 oct 2026
- Auditorías internas: `reports/seo-2026-09-09/auditoria.md`, `reports/seo-2026-09-14/seguimiento-semanal.md`, `reports/seo-2026-09-21/seguimiento-semanal.md`

## Cambios aplicados el 5 de octubre de 2026 (rama `seo/estrategia-octubre`)

- Años de experiencia unificados con un único valor calculado (`YEARS_IN_BUSINESS` en `src/data/contact.ts`, 57 en 2026) en la portada, Nosotros y las landings. `llms.txt` y las descripciones importadas quedaron en 57. Schema: `foundingDate: 1969` y "Calzado de dotación" en `knowsAbout`.
- `llms.txt`: "founded in Medellín" pasó a "based in Envigado, in the Medellín metropolitan area".
- Reseñas: el widget pasó a 4,6 de 27 (dato del Perfil de Empresa del 9 de septiembre).
- `/dotaciones-medellin/` y `/dotaciones-empresariales-colombia/`: el plazo se ve en la franja superior y hay dos FAQ nuevas, con schema FAQPage: plazo de entrega y por qué no hay lista de precios.
- `/dotaciones-medellin/`: 8 referencias destacadas de uniformes, calzado de dotación, calzado de seguridad y EPP. `/epp-medellin/` y `/epp-colombia/`: 8 referencias de EPP.
- Los 35 artículos tienen un enlace contextual, después del primer párrafo, a la página comercial de su grupo (mapa en `src/data/articles.ts`). El cierre de los artículos ahora incluye "Dotaciones en Medellín" y "EPP en Medellín".
- La categoría hospitalaria pasó a llamarse "Uniformes Antifluidos y Ropa Hospitalaria", con fabricación en Envigado, cobertura de Medellín y Colombia, y plazos.
- `npm run verify`: 193 páginas generadas; carrito, imágenes, redirecciones y controles SEO/CRO aprobados.
- Nueva landing `/calzado-de-dotacion/` (grupo C): 39 referencias que no son botas, uso recomendado por tipo de cargo, enlace al calzado de seguridad, 6 FAQ con schema y Service para Medellín y Colombia. Está enlazada desde el footer, `/dotaciones-medellin/` (cuarta tarjeta), la guía de calzado cómodo y `llms.txt`.
- Condición comercial confirmada el 5 de octubre: no hay pedido mínimo por producto; los envíos requieren una compra mínima de $500.000 sumando todo el pedido. Se agregó como FAQ en las landings de dotación (Medellín y Colombia), EPP (Medellín y Colombia) y calzado de dotación.
