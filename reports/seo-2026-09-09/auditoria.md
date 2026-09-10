# Auditoría SEO — Agencias Nacionales

Inspección: 9 de septiembre de 2026. Cierre: 10 de septiembre de 2026.

## Diagnóstico

La base técnica de las URLs actuales está bien, pero la visibilidad comercial en Medellín es baja. La sede real en Envigado explica parte de la asociación local; no explica por sí sola todo el problema. Hay una migración incompleta de URLs, enlaces externos que aún apuntan a páginas retiradas y poca evidencia comercial específica de Medellín. La página dedicada a Medellín YA está indexada: crear otra o cambiar la dirección física no es la solución.

## Evidencia de Google Search Console

Rendimiento web, 7 junio–6 septiembre de 2026: 247 clics, 9,81 mil impresiones, CTR 2,5%, posición media global 10,7. La posición global mezcla marca, productos y consultas informativas; no representa la posición para dotaciones Medellín.

| Consulta | Clics | Impresiones | Posición media |
|---|---:|---:|---:|
| agencias nacionales | 72 | 203 | 2,3 |
| agencias nacionales sas | 8 | 29 | 1,1 |
| dotaciones medellin | 1 | 7 | 27,1 |
| dotaciones en medellin | 0 | 5 | 58,6 |
| dotaciones empresariales medellin | 0 | 5 | 56,6 |
| venta de epp medellin | 0 | 83 | 64,3 |
| elementos de proteccion personal en medellin | 0 | 52 | 53,1 |
| epp medellin | 0 | 5 | 59,0 |
| dotaciones industriales medellin | 0 | 2 | 50,5 |
| uniformes envigado | 0 | 5 | 30,2 |
| dotaciones envigado | 0 | 1 | 3,0 |

El filtro medell[ií]n|envigado registra 166 impresiones y 1 clic. Las muestras pequeñas no permiten declarar posiciones estables ni estimar demanda de mercado. Search Console omite algunas consultas por privacidad.

Inspección de /dotaciones-medellin/: indexada; último rastreo 24 agosto 2026 por Googlebot smartphone; rastreo e indexación permitidos; canonical declarado y elegido por Google coinciden. No había sitemap de referencia detectado en esa inspección.

Indexación, actualización 3 septiembre: 243 indexadas y 408 excluidas. Desglose: 93 errores 404, 129 rastreadas sin indexar, 105 alternativas con canonical adecuado, 57 redirecciones, 17 con canonical distinto elegido por Google, 3 errores 403, 2 noindex, 1 otro 4xx y 1 duplicada sin canonical. Las exclusiones por redirección, canonical y noindex pueden ser correctas: no son 408 errores que haya que eliminar.

## Analytics y Clarity

GA4, 12 agosto–8 septiembre: 204 sesiones; Organic Search aporta 121 (59,31%), 76 sesiones con interacción, 62,81% de interacción, 41 segundos de interacción media y 7 de los 10 eventos clave. Tasa de evento clave de sesión orgánica: 4,96%. En la semana 2–8 septiembre: 55 usuarios activos, 74 sesiones y 7 eventos generate_lead. La página 404 figura con 6 vistas.

El código dispara generate_lead al abrir WhatsApp y al preparar el mensaje del formulario. Esto mide intención de contacto, no mensajes recibidos, cotizaciones calificadas ni ventas. No interpretar ingresos de GA4 en cero como ausencia de ventas.

Clarity, selector últimos 30 días: 150 sesiones, 97 usuarios únicos, 106 sesiones de bot excluidas, 3,24 páginas/sesión, 51,99% de profundidad y 1,1 minutos activos. El tag se añadió el 25 de agosto: el selector de 30 días no implica 30 días completos de instrumentación. No comparar sus totales directamente con GA4.

Clarity detectó clics fallidos en 21 sesiones (la interfaz mostraba 12,96% al cierre), retrocesos rápidos y clics continuos. La revisión de una sesión móvil en /dotaciones-medellin/ mostró clics repetidos sobre la lista de datos para cotizar: sus tarjetas parecían campos interactivos. Se reemplazaron por una lista semántica y un CTA claro hacia contacto. La muestra incluye al menos una sesión de localhost, por lo que estos porcentajes no deben tratarse como medición limpia. El evento automático “Finalización de la compra”, 17 sesiones, requiere revisión: el sitio es de cotización y no demuestra 17 ventas.

Rendimiento Clarity: 84/100 sobre solo 31 vistas; LCP 3,2 s (mejorable), INP 160 ms y CLS 0,094. Search Console no tenía datos suficientes de Core Web Vitals. No se ejecutó Lighthouse; no se certifica aprobación de CWV con esta muestra.

La landing Medellín recibió 5 sesiones en Clarity; Colombia 13 y la portada 71. Estos son visitantes de cualquier canal, no posiciones ni clics orgánicos exclusivos.

## Hallazgos priorizados

| Prioridad | Hallazgo y evidencia | Acción |
|---|---|---|
| Alta | URLs antiguas de categorías terminan en 404: /categorias/epp y /categorias/seguridad. También /articulos-del-blog/ y /política-de-privacidad. | Corregir redirecciones permanentes y recuperar equivalencias reales. |
| Alta | Las 18 reglas existentes no incluyen barra final; Vercel añade la barra antes de que coincidan las fuentes estrictas. | Corregidas y verificadas por HTTP en producción con y sin barra. |
| Alta | Solo constaban dos sitemaps HTTP enviados en 2014. | Enviado https://agenciasnacionales.com/sitemap-index.xml. Google confirmó envío y después “El índice del sitemap se ha procesado correctamente”; aún mostraba 0 páginas descubiertas. |
| Alta | Débil visibilidad comercial en Medellín pese a landing indexada y schema local. | Reforzar enlaces contextuales, cobertura explícita y pruebas reales de servicio en Medellín. |
| Media | Dirección de contacto “Cl. 20 Sur, Zona 2” distinta de footer/schema. | Preparada dirección consistente: Carrera 47 #20 Sur-7, Bosques de Zúñiga, Envigado. |
| Media | 129 rastreadas sin indexar y 17 con canonical alternativo. | Cruce completado: 14 recursos AVIF, 22 aliases recuperados y 93 rutas sin equivalencia confirmada. |
| Media | Fichas Workman compartían descripción de zapato Machita. | Corregidas cinco fichas con datos de fabricante/proveedor y marca Croydon. El marcado Product inválido ya no estaba en la versión activa. |
| Media | Search Console muestra 24 productos no válidos. La plantilla Product no incluye offers, review ni aggregateRating. | Sin precios o reseñas reales, no inventar datos para obtener resultados enriquecidos. No es un bloqueo automático de indexación ordinaria. |
| Media | LCP 3,2 s y señales de fricción. | Medir portada/categorías/landing en móvil, identificar recurso LCP y revisar grabaciones de clics fallidos. |
| Baja | www devuelve 200 en lugar de redirigir, aunque canonical apunta al dominio sin www. | Pendiente en Vercel Settings → Domains: la sesión disponible no pertenece al equipo propietario del proyecto. |
| Baja | “Conócenos más” enlaza al mismo bloque de portada. | Preparado enlace a /nosotros/. |

Rastreo HTTP de las 191 URLs del sitemap publicado: todas devuelven 200, tienen title y H1 único por página, canonical autorreferente y no presentan noindex. Sin titles duplicados. Todas las referencias internas de página encontradas están en el sitemap salvo el carrito, que es una exclusión intencional. Se encontraron dos grupos de descripciones repetidas: dos artículos heredados y cuatro fichas de producto. El inventario está en crawl-publico.csv.

Schema verificado en el DOM renderizado de la landing: Organization/LocalBusiness, Service y FAQPage presentes. La dirección es Envigado y areaServed incluye Medellín: esto YA estaba bien. No atribuir una mejora futura a haber añadido schema local desde cero.

## Medellín, Envigado y modelos de IA

Google distingue relevancia, distancia y prominencia en resultados locales. Una sede en Envigado puede atender y posicionarse orgánicamente para Medellín, pero el área de servicio no equivale a tener una sede física allí ni garantiza vencer la distancia en Maps. Conservar dirección real y nombre comercial real.

Las fuentes externas encontradas refuerzan Envigado: LinkedIn indica sede Envigado y eldirectorio.co incluye la empresa bajo dotaciones en Envigado, todavía con denominación LTDA. Esto apoya la hipótesis de asociación geográfica; no demuestra cómo decidió una respuesta concreta de Gemini, ChatGPT o Claude.

Clarity, pestaña IA con selector propio de últimos 7 días: 61 citas, 0 sesiones referidas por IA. Fuente explícita: Microsoft Copilot y socios. Consultas principales: “acta de entrega dotacion” (24), “acta de entrega de dotacion” (8), “entrega de indumentaria” (7), “entrega de dotacion” (7). Algunas tarjetas devolvieron error de red, por lo que no se atribuyen páginas ni cuota global de autoridad no disponibles. Sí existe visibilidad informativa en IA; falta convertir esa asociación en visibilidad comercial local. Esta medición no cubre de forma exhaustiva Gemini, ChatGPT ni Claude, y no se hicieron pruebas directas en esos tres productos.

Google indica que no hace falta llms.txt ni marcado especial para sus funciones generativas. El sitio ya tiene llms.txt; añadir más instrucciones allí no es la prioridad. La versión inglesa afirma fundación en Medellín: verificar ese dato histórico antes de reutilizarlo. La base propuesta es contenido público claro, rastreable, consistente y respaldado por terceros.

## Plan comercial y local

1. Publicar las correcciones sobre la versión actual de producción, comprobar cada redirección y conservar los artículos recientes.
2. Mantener /dotaciones-medellin/ como URL principal para dotaciones Medellín; /epp-medellin/ para EPP Medellín; categoría de calzado para calzado y botas. No crear páginas duplicadas cambiando solo el municipio.
3. Añadir a Medellín dos o tres casos reales: sector, necesidad, productos entregados, municipio, fotos autorizadas y resultado verificable. Documentar cantidades mínimas, personalización, logística y plazos que el negocio pueda cumplir. No se inventaron clientes ni promesas en esta auditoría.
4. Revisar Google Business Profile: categoría principal y secundarias fieles al negocio, productos, horarios y cobertura Medellín/Valle de Aburrá. No se inspeccionó ni modificó el perfil en esta sesión. Obtener reseñas auténticas de compradores sin incentivos ni guiones con palabras clave obligatorias.
5. Actualizar descripciones públicas de LinkedIn, directorios y asociaciones con una formulación consistente: “Dotaciones empresariales, uniformes de trabajo, calzado de seguridad y EPP para empresas de Medellín y Colombia. Sede en Envigado, Antioquia”. Mantener la sede real en campos de dirección. Conseguir menciones legítimas de clientes/proveedores y organizaciones locales, sin comprar enlaces.
6. Conectar guías con páginas comerciales relevantes mediante enlaces útiles dentro del contenido. Priorizar evidencia práctica sobre aumentar el volumen de artículos genéricos.
7. Medir mensualmente consultas Medellín frente a Envigado, impresiones y clics por landing, sesiones orgánicas con contacto y cotizaciones calificadas confirmadas por ventas. Para IA registrar el mismo conjunto de consultas, fecha, modelo, modo con búsqueda, menciones y fuentes; la presencia varía entre ejecuciones.

Horizonte de evaluación propuesto: revisar rastreo y rutas tras publicar; observar consultas en ventanas comparables de 28 días durante 8–12 semanas. Es un periodo de evaluación, no una promesa de posicionamiento.

## Cambios preparados y límites

Publicadas 72 redirecciones permanentes de ruta. De las 93 URLs 404 exportadas de Search Console, 36 tienen sustituto confirmado y 57 quedan como retiradas sin sustituto. El cruce adicional de 129 URLs rastreadas sin indexar recuperó 22 aliases exactos. No se redirigió todo a portada ni se asumió que un producto diferente fuera sustituto.

Publicados: enlace contextual a Medellín desde portada, descripción de portada, cobertura y dirección en contacto, pregunta local en landing con el mismo texto en FAQ schema, referencia al identificador del negocio y mejora del CTA detectado en Clarity. `npm run verify` construyó 193 páginas y aprobó carrito, imágenes, catálogo, redirecciones y SEO.

El parche partió del commit activo `d4f69a9`, conservó los seis artículos recientes y la exclusión de carrito del sitemap, y se publicó mediante el PR #9 y el merge `1411bcc`. En producción se comprobaron 72 rutas y 142 variantes: todas terminan en su equivalente con HTTP 200 mediante redirecciones permanentes y conservan parámetros. Los seis artículos responden 200; el sitemap excluye carrito e incluye /dotaciones-medellin/.

Además del sitemap, se solicitaron en Search Console rastreos prioritarios de portada, /dotaciones-medellin/ y /contacto/. No se reinició la validación global de 404 porque 57 retiradas definitivas deben seguir respondiendo 404. La consolidación `www` sigue pendiente en la configuración de dominios de Vercel; el usuario autenticado disponible no tiene acceso al equipo propietario. Los resultados de posicionamiento se evaluarán durante 8–12 semanas.

## Fuentes

- [Search Console](https://search.google.com/search-console?resource_id=sc-domain%3Aagenciasnacionales.com)
- [GA4](https://analytics.google.com/analytics/web/?authuser=5#/a386740469p527357451/reports/intelligenthome)
- [Clarity](https://clarity.microsoft.com/projects/view/y8116zylkc/dashboard)
- [Landing Medellín](https://agenciasnacionales.com/dotaciones-medellin/)
- [Google: posicionamiento local](https://support.google.com/business/answer/7091?hl=es)
- [Google: optimización para experiencias generativas](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google: requisitos de fragmentos de producto](https://developers.google.com/search/docs/appearance/structured-data/product-snippet?hl=es)
- [Vercel: trailingSlash](https://vercel.com/docs/project-configuration/vercel-json)
- [Vercel: redirecciones de dominio](https://vercel.com/docs/domains/working-with-domains/deploying-and-redirecting)
- [Código de Vercel: coincidencia estricta de rutas](https://github.com/vercel/vercel/blob/main/packages/routing-utils/src/superstatic.ts)
- [Croydon: Workman Food Industry](https://croydon.com.co/products/botas-seguridad-workman-saf-food-ind-blanco-croydon-para-hombre)
- [Croydon: Workman Super Safety](https://croydon.com.co/products/botas-seguridad-workman-supersafety-oil-resistant-amarillo-croydon-para-hombre)
- [Croydon: Machita](https://croydon.com.co/products/botas-agricolas-machita-blanco-croydon-para-mujer)
- [LinkedIn de la empresa](https://co.linkedin.com/company/agencias-nacionales)
- [Directorio: dotaciones Envigado](https://eldirectorio.co/empresas/envigado/dotaciones)
