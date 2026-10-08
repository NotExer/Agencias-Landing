# Seguimiento SEO — Agencias Nacionales

Consulta realizada el **8 de octubre de 2026**, zona America/Bogota. Search Console compara **29 de septiembre–5 de octubre** con **22–28 de septiembre**; GA4 compara las semanas lunes–domingo **28 de septiembre–4 de octubre** y **21–27 de septiembre**. Clarity muestra únicamente las **últimas 72 horas** al momento de consulta, aproximadamente 5–8 de octubre, sin comparación semanal.

## Diagnóstico ejecutivo

La nueva landing `/calzado-de-dotacion/` **ya figura indexada**. Google informa último rastreo el 5 de octubre, fecha de la solicitud de indexación, pero Search Console aún no devuelve filas de rendimiento para esa URL. Es un avance técnico; la meta de obtener impresiones sigue pendiente de evidencia.

`/dotaciones-medellin/` mantiene 1 clic y pasa de 50 a 54 impresiones (+8,0%); su posición ponderada empeora ligeramente de 10,94 a 11,35. Sigue cerca de primera página y lejos de la meta orientativa ≤8. La consulta exacta `dotaciones medellin` crece de 11 a 17 impresiones, sin clics, y pasa de posición 11,64 a 13,18.

En las filas disponibles de Google, los clics bajan de 11 a 8 (−27,3%), mientras las impresiones crecen de 255 a 365 (+43,1%). La marca pierde 6 clics; no marca pasa de 1 a 4. Parte del deterioro de posición global coincide con mayor exposición de la categoría EPP, que pasa de 14 a 74 impresiones a posiciones superiores a 50; esto no demuestra una caída uniforme de todas las consultas.

GA4 registra **34 sesiones orgánicas frente a 28 (+21,4%)**, pero `generate_lead` orgánico baja de 7 a 6. Son intenciones de contacto, no ventas. La intranet continúa visible con **15 impresiones frente a 13**: todavía no se cumple el objetivo de desaparecer de Google.

Las muestras son pequeñas. El periodo GSC solo incluye el día de los cambios del 5 de octubre y la semana GA4 termina antes de ellos: no permiten atribuir resultados a esas mejoras.

## Métricas principales

Actual/anterior corresponden a los periodos de cada fuente definidos arriba. Los indicadores Google son sumas de filas `date/query/page`, **no el total completo de la propiedad**.

| Métrica | Actual | Anterior | Cambio |
|---|---:|---:|---:|
| Clics Google: filas reportadas | 8 | 11 | -27,3% |
| Impresiones Google: filas reportadas | 365 | 255 | +43,1% |
| CTR Google: filas reportadas | 2,19% | 4,31% | −2,12 pp |
| Posición Google: filas reportadas | 23,42 | 10,69 | −12,73 posiciones (empeora) |
| Clics Marca | 4 | 10 | -60,0% |
| Impresiones Marca | 75 | 95 | -21,1% |
| CTR Marca | 5,33% | 10,53% | −5,19 pp |
| Posición Marca | 2,84 | 1,60 | −1,24 posiciones (empeora) |
| Clics No marca | 4 | 1 | +300,0% |
| Impresiones No marca | 290 | 160 | +81,3% |
| CTR No marca | 1,38% | 0,63% | +0,75 pp |
| Posición No marca | 28,74 | 16,09 | −12,66 posiciones (empeora) |
| Impresiones landing Medellín | 54 | 50 | +8,0% |
| Clics landing Medellín | 1 | 1 | Sin cambio |
| CTR landing Medellín | 1,85% | 2,00% | −0,15 pp |
| Posición landing Medellín | 11,35 | 10,94 | −0,41 posiciones (empeora) |
| Sesiones GA4, todos los canales | 53 | 54 | −1,9% |
| Sesiones Organic Search | 34 | 28 | +21,4% |
| Sesiones orgánicas con interacción | 21 | 20 | +5,0% |
| `generate_lead`, todos los canales | 7 | 7 | Sin cambio |
| `whatsapp_click`, todos los canales | 7 | 6 | +16,7% |
| `generate_lead`, Organic Search | 6 | 7 | −14,3% |
| `whatsapp_click`, Organic Search | 6 | 6 | Sin cambio |

### Alcance y cálculo de Search Console

Todas las consultas usaron `site_url: sc-domain:agenciasnacionales.com`, `data_state: final`, `search_type: web` por defecto y dimensiones **date, query, page**, en ese orden. La prueba del 5–6 de octubre devolvió filas solo del 5; se tomó ese día como último con datos finales reportados, con rezago de tres días. Ambos periodos elegidos tienen filas en sus siete fechas.

Se obtuvieron **255 filas actuales y 159 anteriores**, ambas por debajo de `row_limit: 5000`; no se alcanzó el límite ni fue necesaria paginación. Clics e impresiones se sumaron; **CTR = clics / impresiones × 100**; **posición = Σ(posición de fila × impresiones de fila) / Σ impresiones**. No se promediaron posiciones ni CTR de forma simple.

Marca se define estrictamente como consulta que contiene `agencias nacionales`, mediante `dimension_filter_groups`, dimensión `query`, operador `contains`. Las consultas filtradas coinciden con el segmento de marca de la extracción general: 4 clics/75 impresiones actuales y 10/95 anteriores. No marca es el complemento entre las filas generales; otras grafías de marca pueden quedar en él.

La dimensión query excluye consultas anónimas y la API puede omitir filas de baja frecuencia. La agregación devuelta es `byPage`: una consulta puede registrar varias URLs y las sumas no equivalen a la agregación por propiedad. Estas diferencias explican por qué las cifras pueden ser menores o distintas del panel de Search Console; **no se puede cuantificar el faltante** con las consultas autorizadas. La propiedad de dominio incluye la intranet.

## Consultas Medellín, calzado y otras prioridades

Celdas: **clics / impresiones / posición ponderada**. **SF = sin fila reportada**, no cero confirmado. Un 0 junto a impresiones positivas sí representa cero clics registrado para esas filas. Las consultas exactas conservan su grafía; no se mezclan con variantes.

| Consulta exacta | Actual | Anterior |
|---|---:|---:|
| `dotaciones medellin` | 0 / 17 / 13,18 | 0 / 11 / 11,64 |
| `dotaciones en medellin` | 0 / 4 / 19,25 | 1 / 6 / 25,00 |
| `dotaciones empresariales medellin` | 0 / 4 / 27,25 | 0 / 1 / 20,00 |
| `dotaciones industriales medellin` | 0 / 10 / 13,60 | 0 / 2 / 15,50 |
| `elementos de proteccion personal medellin` | SF | SF |
| `epp medellin` | SF | SF |
| `venta de epp medellin` | 0 / 9 / 40,11 | SF |
| `calzado de dotacion` | SF | SF |
| `tenis de dotacion` | SF | SF |
| `zapatos de dotacion` | SF | SF |
| `uniformes antifluidos` | SF | SF |
| `dotaciones empresariales colombia` | SF | SF |

### Variantes observadas, separadas de las exactas

Estas son variantes que contienen la frase prioritaria al normalizar tildes; no constituyen un inventario exhaustivo de sinónimos.

| Variante literal devuelta | Actual: clics / impresiones / posición | Anterior: clics / impresiones / posición |
|---|---:|---:|
| `dotaciones medellin económicas` | SF | 0 / 3 / 11,67 |
| `dotaciones medellín` | SF | 0 / 1 / 7,00 |
| `dotaciones medellín centro` | 0 / 5 / 10,00 | 0 / 3 / 9,33 |
| `dotaciones medellín económicas` | 0 / 10 / 10,60 | 0 / 11 / 10,73 |
| `uniformes antifluidos itagui` | 0 / 2 / 8,00 | SF |
| `uniformes y dotaciones medellin` | SF | 0 / 1 / 22,00 |

No hubo filas para las consultas exactas de calzado, tenis o zapatos de dotación, ni variantes que contuvieran esas frases en esta extracción. No se puede afirmar que su demanda sea cero. `uniformes antifluidos itagui` tiene 2 impresiones y posición 8, pero no demuestra posicionamiento de la consulta exacta `uniformes antifluidos`.

## Páginas prioritarias

Celdas: **clics / impresiones / posición ponderada**. Se conserva cada URL exacta.

| Página | Actual | Anterior |
|---|---:|---:|
| `/dotaciones-medellin/` | 1 / 54 / 11,35 | 1 / 50 / 10,94 |
| `/calzado-de-dotacion/` | SF | SF |
| `/epp-medellin/` | 0 / 13 / 17,92 | 0 / 2 / 46,50 |
| `/dotaciones-empresariales-colombia/` | 1 / 9 / 7,67 | 0 / 13 / 8,38 |
| `/categoria/hospitalaria/` | 0 / 6 / 22,33 | 0 / 5 / 4,40 |
| `/categoria/calzado-de-trabajo/` | SF | SF |
| `/articulos-del-blog/acta-entrega-dotacion-epp-empresa/` | 0 / 5 / 9,60 | 0 / 3 / 10,33 |

La portada registra 4 clics/59 impresiones/posición 12,29, frente a 9/52/5,54. Medellín mantiene el clic, pero su CTR cae ligeramente; Colombia obtiene 1 clic con 9 impresiones frente a 0 con 13. EPP Medellín aumenta exposición de 2 a 13 impresiones y mejora de 46,50 a 17,92, aunque sin clics y con muestra insuficiente para concluir consolidación.

Las consultas adicionales con filtro `page contains /calzado-de-dotacion/` y `page contains /categoria/calzado-de-trabajo/` tampoco devolvieron filas en ninguno de los periodos. **Esto sigue siendo ausencia de filas, no una confirmación de cero impresiones.** Sí aparece la ruta distinta `/categorias/calzado-de-trabajo` con 0 clics, 1 impresión y posición 8 en el periodo actual; no se adjudicó a la categoría canónica. Conviene revisar esa ruta antigua cuando se autorice trabajo técnico.

Hospitalaria tiene solo 6 impresiones actuales, y la mezcla de consultas puede alterar mucho su posición media. El acta de entrega conserva exposición pequeña (5 frente a 3 impresiones); este dato no mide citas de asistentes de IA.

## Indexación

Inspecciones de las URLs completas bajo `https://agenciasnacionales.com`, propiedad `sc-domain:agenciasnacionales.com`. La solicitud de indexación se realizó el **5 de octubre de 2026**.

| URL inspeccionada | coverageState | lastCrawlTime (UTC) | Veredicto |
|---|---|---|---|
| `https://agenciasnacionales.com/calzado-de-dotacion/` | Submitted and indexed | 2026-10-05T15:48:00Z | PASS |
| `https://agenciasnacionales.com/dotaciones-medellin/` | Submitted and indexed | 2026-10-05T15:48:00Z | PASS |
| `https://agenciasnacionales.com/categoria/hospitalaria/` | Submitted and indexed | 2026-10-05T15:48:00Z | PASS |

En las tres, `indexingState: INDEXING_ALLOWED`, `robotsTxtState: ALLOWED`, `pageFetchState: SUCCESSFUL`; canonical de Google y del usuario coinciden con la URL inspeccionada. El rastreo corresponde a las 10:48 de Bogotá. La coincidencia de fecha con la solicitud no prueba que esta haya causado la indexación ni que Google ya refleje todos los cambios de contenido.

## GA4 y medición de contactos

Se utilizó únicamente **`properties/527357451`**. La respuesta confirma `America/Bogota`. Todos los `metricValues` se convirtieron de strings a números antes de sumar o calcular cambios.

### Sesiones por sessionDefaultChannelGroup

| Canal | Actual | Anterior | Cambio |
|---|---:|---:|---:|
| Organic Search | 34 | 28 | +21,4% |
| Direct | 14 | 25 | −44,0% |
| Organic Social | 2 | 1 | +100,0% |
| Unassigned | 2 | 0 | +2; base 0 |
| Referral | 1 | 0 | +1; base 0 |
| Total | 53 | 54 | −1,9% |

**AI Assistant no aparece como fila en ninguno de los periodos**; no permite concluir ausencia de visitas desde IA, pues pueden clasificarse en otros canales.

Organic Search acumula 21 `engagedSessions` frente a 20: tasa de interacción de **61,76% frente a 71,43% (−9,66 pp)**. Hay más sesiones orgánicas, pero la interacción no crece al mismo ritmo.

| Evento | Total actual / anterior | Organic Search actual / anterior | Referral actual / anterior |
|---|---:|---:|---:|
| `generate_lead` | 7 / 7 | 6 / 7 | 1 / 0 |
| `whatsapp_click` | 7 / 6 | 6 / 6 | 1 / 0 |

`generate_lead` representa **intención de contacto**, no mensaje recibido, cotización calificada ni venta. Son recuentos de eventos, no personas únicas. No deben sumarse ambos eventos para contar contactos: pueden describir la misma interacción.

### LandingPage de Organic Search

Rutas tal como las devuelve GA4, sin fusionar `/categoria/` con `/categorias/`. Celdas: **sesiones / sesiones con interacción**. SF mantiene el significado de ausencia de fila; los ceros mostrados provienen explícitamente de la respuesta.

| Landing | Actual | Anterior |
|---|---:|---:|
| `/` | 14 / 13 | 15 / 12 |
| `(not set)` | 4 / 0 | 0 / 0 |
| `/dotaciones-medellin` | 3 / 2 | 2 / 1 |
| `/articulos-del-blog/como-definir-stock-minimo-epp-dotacion-por-sede` | 2 / 1 | 0 / 0 |
| `/producto/zapato-tipo-crocs-kroky-ref-242` | 2 / 1 | 0 / 0 |
| `/dotaciones-empresariales-colombia` | 0 / 0 | 1 / 1 |
| `/epp-medellin` | 0 / 0 | 1 / 1 |
| `/articulos-del-blog/acta-entrega-dotacion-epp-empresa` | 0 / 0 | 1 / 1 |
| `/categorias/calzado-de-trabajo` | 0 / 0 | 2 / 2 |
| `/calzado-de-dotacion` | SF | SF |
| `/categoria/hospitalaria` | SF | SF |
| `/categoria/calzado-de-trabajo` | SF | SF |

La consulta completa suma las mismas 34/28 sesiones y 21/20 sesiones con interacción que el desglose de canales. Se muestran las entradas principales y prioritarias. Las 4 sesiones orgánicas con landing `(not set)` requieren revisar medición antes de atribuirlas a una página.

## Clarity — muestra de 72 horas

Se consultó `MICROSOFT_CLARITY_DATA_EXPORT` con **`numOfDays: 3`**, máximo permitido. Ventana móvil aproximada, no semana calendario. No se compara con informes anteriores ni se extrapola a siete días.

| Indicador devuelto | Valor |
|---|---:|
| Traffic.totalSessionCount | 61 |
| Traffic.totalBotSessionCount | 23 |
| Traffic.distinctUserCount | 58 |
| Traffic.pagesPerSessionPercentage (valor de páginas/sesión) | 1,75 |
| ErrorClickCount.subTotal | 0 |
| ErrorClickCount.sessionsWithMetricPercentage | 0% |
| QuickbackClick.subTotal | 9 |
| QuickbackClick.pagesViews | 9 |
| QuickbackClick.sessionsWithMetricPercentage | 9,84% |
| ScrollDepth.averageScrollDepth | 36,38% |
| DeadClickCount.subTotal | 4 |
| DeadClickCount.sessionsWithMetricPercentage | 4,92% |

Se informa `totalBotSessionCount` tal como llega; no se resta de `totalSessionCount` para inventar sesiones humanas. Los 9 retrocesos rápidos son el subtotal de la métrica, **no nueve sesiones únicas**. Scroll y clics son señales para revisar grabaciones; no bastan para atribuir un problema de interfaz.

### PopularPages

| URL | visitsCount |
|---|---:|
| `/` | 10 |
| `/articulos-del-blog/acta-entrega-dotacion-epp-empresa/` | 3 |
| `/articulos-del-blog/como-consolidar-tallas-dotacion-por-sede-sin-errores/` | 3 |
| `/articulos-del-blog/como-cotizar-dotaciones-empresariales-sin-errores/` | 3 |
| `/categoria/promocionales/` | 3 |
| `/articulos-del-blog/cada-cuanto-renovar-uniformes-calzado-epp-empresa/` | 2 |
| `/articulos-del-blog/como-definir-stock-minimo-epp-dotacion-por-sede/` | 2 |
| `/articulos-del-blog/como-evaluar-proveedores-dotaciones-empresariales-colombia/` | 2 |
| `/categoria/calzado-de-trabajo/` | 2 |
| `/categoria/epp/` | 2 |

`visitsCount` no se renombra como sesiones. La ausencia de Medellín o calzado de dotación en este listado popular no confirma cero visitas. Esta exportación no aporta citas de IA.

## Intranet en Google

Filtro explícito `page contains intranet.agenciasnacionales.com`, conservando dimensiones date/query/page y datos finales.

| Métrica | Actual | Anterior | Cambio |
|---|---:|---:|---:|
| Clics reportados | 0 | 0 | Sin cambio |
| Impresiones reportadas | 15 | 13 | +15,4% |
| Posición ponderada | 6,93 | 4,38 | −2,55 posiciones (empeora) |

La URL devuelta es `https://intranet.agenciasnacionales.com/`. Todavía tiene impresiones el **5 de octubre** (2), último día observado. **Debe desaparecer de Google**; menos clics o peor posición no equivalen a desindexación. No se inspeccionó su configuración ni se aplicó ninguna retirada durante esta ejecución.

## Referencia del 5 de octubre y metas a 90 días

La línea base facilitada es una referencia de aproximadamente 28 días; **no se compara directamente con estas semanas ni se divide para fabricar una base semanal**.

| Indicador | Referencia facilitada | Meta orientativa |
|---|---|---|
| `/dotaciones-medellin/`, GSC 4 sep–2 oct | 11 clics, 488 impresiones, posición 11,4 | Posición ≤8 |
| Portada, mismo intervalo | 33 clics, 478 impresiones, posición 10,1 | Referencia |
| `/dotaciones-empresariales-colombia/` | 3 clics, 96 impresiones, posición 13,4 | Referencia |
| Exacta `dotaciones medellin` | 2 clics, 71 impresiones, posición 13,1 | Referencia |
| Exacta `dotaciones en medellin` | 1 clic, 39 impresiones, posición 19,1 | Referencia |
| Intranet | 4 clics, 104 impresiones, posición 5,3 | Desaparecer de Google |
| GA4 7 sep–4 oct | 277 sesiones totales; Organic Search: 168 sesiones, 111 con interacción, 22 eventos clave | Sesiones y eventos clave orgánicos +50% en ventana equivalente |
| `/calzado-de-dotacion/` | Solicitud de indexación: 5 oct | Indexada y con impresiones |

La primera condición de calzado se verifica hoy; la segunda no tiene filas que la acrediten. Este informe mide los dos eventos solicitados, pero no una nueva serie de todos los eventos clave a 28 días; no se declara alcanzada la meta de +50%.

## Acciones prioritarias

1. **Resolver la visibilidad de la intranet.** Revisar en una tarea autorizada autenticación y directivas de indexación; verificar que Google pueda procesar la medida elegida y evaluar retirada temporal si procede. Confirmar después la desindexación, además de monitorizar impresiones hasta que no haya exposición reportada.
2. **Medir la nueva landing de calzado tras el siguiente corte final.** Mantener URL y canonical; revisar sus primeras consultas e impresiones y el paso desde productos hacia cotización. Ya está indexada: no hay evidencia para reconstruirla ni para repetir solicitudes de indexación.
3. **Reforzar Medellín con prueba comercial verificable.** Preparar dos casos reales con sector, productos, plazo y fotos autorizadas, y validar la ventaja de fabricante. Conservar la sede real en Envigado y las condiciones confirmadas: cotización, sin mínimo por producto, envío desde pedido total de $500.000. La estrategia documenta enlaces y productos añadidos el 5 de octubre; evaluar su efecto después de semanas completas posteriores.
4. **Separar intención de contacto de resultado comercial.** Registrar contactos recibidos, cotizaciones calificadas y ventas junto al origen; revisar las 4 landings orgánicas `(not set)`. No sumar `generate_lead` y `whatsapp_click` como clientes ni interpretar +21,4% de sesiones como aumento de ventas.
5. **Revisar grabaciones de retrocesos rápidos y rutas antiguas antes de cambiar el sitio.** En Clarity, localizar URLs de QuickbackClick; en otra tarea técnica, revisar `/categorias/calzado-de-trabajo` y su equivalencia canónica. Los 9 retrocesos y 1 impresión de la ruta antigua son señales pequeñas, no diagnósticos definitivos.

## Fuentes operativas y control de ejecución

Todos los datos nuevos se obtuvieron exclusivamente con `~/.local/bin/composio execute <SLUG> -d '<json>'`. Se consultó `--get-schema` para los cuatro slugs. Las respuestas utilizadas indicaron **`successful: true` y `error: null`**. En Clarity no se devolvieron `status_code` ni `http_error`; no apareció error HTTP. **No falló ninguna fuente**. Las respuestas extensas que Composio guardó automáticamente en archivos temporales se leyeron para calcular las sumas.

| Consulta | logId |
|---|---|
| GSC general actual / anterior | `log_TpVgoJSPzMAi` / `log_9uVR3IkIBAOe` |
| GSC marca actual / anterior | `log_CxIlWG4kKr1y` / `log_pbQHjb5aCWdh` |
| GSC intranet actual / anterior | `log_7zRsY67oi8FB` / `log_7B9F3tp_gMt0` |
| Inspección calzado / Medellín / hospitalaria | `log_xp5G81aV4Oro` / `log_RVIBfViLEjFc` / `log_4-8BZYI37o37` |
| GA4 canales / eventos / landings | `log_YMM5OgG9t9wJ` / `log_XQosMGElitvu` / `log_t6qVIg5cKll1` |
| Clarity 72 horas | `log_orKGUkhxjv8d` |

- [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Aagenciasnacionales.com)
- [Google Analytics, propiedad 527357451](https://analytics.google.com/analytics/web/#/p527357451/reports/reportinghub)
- [Microsoft Clarity](https://clarity.microsoft.com/projects/view/y8116zylkc/dashboard)

Se siguieron la estrategia del 5 de octubre y la estructura del seguimiento del 21 de septiembre. Este informe no incorpora comprobaciones nuevas de SERP, asistentes, código o despliegue. En el repositorio se creó únicamente este archivo; se preservaron los cambios previos de `.vercel/` y `reports/seo-2026-10-05/seguimiento-semanal.md`. No se realizaron commit, push, PR, despliegue ni mensajes externos.

