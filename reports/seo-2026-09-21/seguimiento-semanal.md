# Seguimiento SEO — Agencias Nacionales

Consulta realizada el 21 de septiembre de 2026. Search Console compara 13–19 de septiembre con 6–12 de septiembre; GA4 compara 14–20 con 7–13; Clarity usa sus últimos siete días y se contrasta con el seguimiento del 14 de septiembre.

## Diagnóstico ejecutivo

La estrategia para Medellín está funcionando. La landing `/dotaciones-medellin/` pasó de 106 a 142 impresiones, de 0 a 4 clics, de 0% a 2,8% de CTR y de posición media 14,3 a 11,5. La consulta exacta `dotaciones medellin` mantuvo 22 impresiones pero pasó de 0 a 2 clics. La página está cerca de primera página; no conviene sustituirla ni crear otra landing competidora.

El sitio completo se mantuvo casi estable: 27 clics frente a 28, unas 1.000 impresiones frente a 1.100, CTR de 2,7% frente a 2,5% y posición media de 11,5 frente a 13,1. Hay menos exposición global, pero mejor posición y eficiencia.

GA4 registra 8 `generate_lead` y 8 `whatsapp_click`, ambos 60% por encima de la semana anterior (5 cada uno). Las sesiones crecieron de unas 78 a 91 (+16,7%), pero las vistas bajaron de unas 217 a 130 (-40,1%) y el tiempo medio de interacción por sesión cayó de aproximadamente 63 a 39 segundos (-38,2%). La intención de contacto mejoró, pero la navegación fue menos profunda.

Clarity registra 68 sesiones frente a 61 (+11,5%), 47 usuarios únicos frente a 45 (+4,4%), 1,94 páginas por sesión frente a 2,11 (-8,1%), 44,14% de scroll frente a 54,48% (-10,34 puntos), 2 contactos automáticos frente a 3 y 5 sesiones en la landing Medellín frente a 3. Hubo 7 sesiones con clics fallidos y 13 con retrocesos rápidos; deben revisarse por URL antes de cambiar la interfaz.

La visibilidad de IA de Clarity bajó de 193 a 40 citas y de 1 a 0 sesiones referidas, aunque la cuota de autoridad subió de 27,03% a 29,63%. Esta fuente solo cubre Microsoft Copilot y socios. Las citas siguen siendo casi totalmente informativas: el artículo de acta de entrega recibió 30 de 40; `/epp-medellin/` recibió 2. No hay evidencia de que las consultas comerciales de Medellín ya estén consolidadas en asistentes.

## Métricas principales

| Métrica | Actual | Anterior | Cambio |
|---|---:|---:|---:|
| Clics Google | 27 | 28 | -3,6% |
| Impresiones Google | 1,0 mil | 1,1 mil | -9,1% aprox. |
| CTR Google | 2,7% | 2,5% | +0,2 puntos |
| Posición media Google | 11,5 | 13,1 | +1,6 posiciones |
| Impresiones landing Medellín | 142 | 106 | +34,0% |
| Clics landing Medellín | 4 | 0 | +4 |
| Posición landing Medellín | 11,5 | 14,3 | +2,8 posiciones |
| Sesiones GA4 | 91 | 78 aprox. | +16,7% |
| `generate_lead` | 8 | 5 | +60% |
| `whatsapp_click` | 8 | 5 | +60% |
| Vistas GA4 | 130 | 217 aprox. | -40,1% |
| Tiempo medio por sesión | 39 s | 63 s aprox. | -38,2% |
| Sesiones Clarity | 68 | 61 | +11,5% |
| Usuarios únicos Clarity | 47 | 45 | +4,4% |
| Contactos Clarity | 2 | 3 | -33,3% |
| Citas IA Clarity | 40 | 193 | -79,3% |

## Medición y conversiones

GA4 recibe `page_view`, `session_start`, `user_engagement`, `first_visit`, `scroll`, `generate_lead` y `whatsapp_click`. También existen `add_to_quote` y `begin_quote`. Solo `generate_lead` aparece como evento clave con flujo activo. `purchase`, `qualify_lead` y `close_convert_lead` están marcados como eventos clave, pero sin flujo detectado en los últimos 28 días.

`generate_lead` se dispara al abrir WhatsApp, llamar o preparar el formulario. No equivale a mensaje recibido, cotización calificada ni venta. Mantenerlo como microconversión, pero medir fuera de GA4 tres etapas comerciales: contacto recibido, cotización calificada y venta cerrada. No marcar `purchase` como conversión mientras el sitio no procese compras.

La página 404 acumuló 12 vistas en la semana, el doble del periodo anterior. Conviene identificar las rutas concretas en GA4 o logs antes de añadir redirecciones; no redirigir 404 sin equivalencia real.

## Medellín y buscadores/IA

La sede debe seguir declarada en Envigado. Para Maps, la distancia física limita el paquete local de Medellín y el área de servicio no sustituye una sede. Para resultados orgánicos y asistentes, la página ya demuestra progreso real.

Prioridades:

1. Mantener estable `/dotaciones-medellin/` y reforzarla con dos casos reales de empresas atendidas en Medellín: sector, necesidad, productos, zona, fotos autorizadas y resultado.
2. Conseguir reseñas auténticas de clientes de Medellín y menciones coherentes en LinkedIn, directorios, clientes, proveedores y asociaciones; conservar siempre la sede real en Envigado.
3. Añadir productos vigentes al Perfil de Empresa y mantener las áreas de servicio Medellín y Envigado.
4. Enlazar la landing Medellín desde contenido comercial relacionado con uniformes, calzado y EPP; no crear otra landing para la misma intención.
5. Repetir la misma consulta comercial en ChatGPT, Gemini y Claude, con búsqueda web activa, y registrar fecha, orden y fuentes. Clarity no representa a esos tres asistentes.
6. Crear evidencia comercial citable. Hoy los asistentes citan guías informativas, no la propuesta local; casos reales, entregas documentadas y páginas de servicio con datos verificables son la brecha principal.

## Estado técnico

`npm run verify` terminó correctamente el 21 de septiembre: persistencia del carrito, 163 imágenes de catálogo, build estático de 193 páginas, redirecciones y controles SEO/CRO aprobados. La landing mantiene title, H1, canonical, schema `Service`/`LocalBusiness`/`FAQPage`, dirección real en Envigado y Medellín como área atendida.

No se hicieron cambios al sitio durante este seguimiento.

## Fuentes operativas

- [Search Console](https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain%3Aagenciasnacionales.com)
- [Google Analytics](https://analytics.google.com/analytics/web/?authuser=5#/a386740469p527357451/reports/reportinghub)
- [Microsoft Clarity](https://clarity.microsoft.com/projects/view/y8116zylkc/dashboard)
- [Landing Medellín](https://agenciasnacionales.com/dotaciones-medellin/)
