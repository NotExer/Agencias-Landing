# Remediación SEO y medición web — 26 octubre 2026

## Alcance y cambios

Intranet excluida. Solo medición web; no se afirma recepción de contactos, ventas ni crecimiento causal. Base de código actualizada al commit publicado `3b6c16f`, preservando la guía de diciembre y todos los cambios locales ajenos.

- Banner compartido con altura mínima y crecimiento según texto; padding vertical y botones que permiten varias líneas. Navegación y correo del footer adaptados a texto ampliado. ResizeObserver conserva la separación respecto al header.
- Producción es exclusivamente `agenciasnacionales.com`. GA4 y Clarity no se inicializan en localhost, previews o el hostname alternativo de Vercel.
- Una sola emisión de generate_lead por acción; se conserva el método del carrito. Parámetros WhatsApp sin mensaje; teléfono/correo sin datos de contacto en parámetros de diagnóstico.
- Vistas de página centralizadas en astro:page-load. La captura previa de GA4 muestra que la navegación atrás enviaba la URL de portada con el título anterior de Medellín, heredado del lote. Se requiere desactivar pageChangesEnabled antes de publicar esta modalidad y mantener send_page_view:false.
- Galería de producto con candidatos WebP 320/640/960, prioridad de la imagen principal, dimensiones reservadas y actualización de srcset al cambiar miniatura. Banner principal con prioridad alta; imágenes de portada más pequeñas; logo del footer transformado a WebP responsive.
- Dos redirecciones permanentes nuevas: slug truncado de Híbrida y preguntas frecuentes hacia /faq/, equivalencia confirmada en el código. Matriz de las once rutas en matriz-rutas.csv; retiradas sin equivalente conservan 404.
- 71 entradas de metadatos revisadas, cubriendo los 65 títulos largos, las nueve descripciones largas y páginas prioritarias. 46 overrides editoriales específicos; nombres de productos y titulares visibles se conservan. Inventario antes/después en metadatos.csv.

## Mapa de intención

| Página | Intención principal | Acción |
| --- | --- | --- |
| Portada | Proveedor de dotaciones, uniformes, calzado y EPP | Conservar title y H1; revisar entrada orgánica y recorrido |
| Medellín | Cotización empresarial local de dotaciones | Title y descripción específicos; sede real Envigado |
| EPP Medellín | Cotización de elementos de protección para empresas locales | Title y descripción específicos, sin nuevas certificaciones o promesas |
| Colombia | Compra consolidada para empresas y sedes en Colombia | Title y descripción de consolidación y despacho condicionado |
| Calzado de dotación | Tenis, mocasines y zapatos de dotación | Conservar URL e intención; descripción más clara |
| Camisas | Prendas en dril, oxford e índigo y personalización | Descripción específica y enlace desde la guía de estandarización |

Los enlaces existentes por clúster ya dirigen compras hacia Medellín, multisede a Colombia, EPP a Medellín y calzado de dotación a su landing. Se añade un clúster específico para camisas. No se duplican enlaces idénticos ni se crean nuevas páginas de ciudades.

Revisión de búsqueda realizada el 26/10 para dotaciones Medellín, EPP y dotaciones Colombia: resultados comerciales de [Dotaciones Medellín](https://dotaciones-medellin.com/), [Unitexco](https://www.unitexco.com.co/shop/) y [SYD Orión](https://sydorion.com/). Se priorizan intención empresarial, producto y cotización; no se copian sus afirmaciones ni se presenta el orden observado como ranking estable. No se inventaron casos o testimonios.

## Contrato de eventos

| Evento | Cuándo | Parámetros |
| --- | --- | --- |
| page_view | Una vez tras astro:page-load, inicial y cada navegación completa | page_location, page_title, page_referrer |
| generate_lead | Una intención de contacto por clic o envío válido del formulario | method: whatsapp, quote_cart_whatsapp, contact_form_whatsapp, phone, email |
| whatsapp_click | Clic en enlace de WhatsApp | link_url: origen y ruta, sin query |
| phone_click / email_click | Clic en canal correspondiente | Sin dirección o teléfono en parámetros |
| contact_form_submit | Formulario válido prepara salida a WhatsApp | method: whatsapp |
| begin_quote | Clic en cotización del carrito | item_count |

No sumar eventos específicos con generate_lead. Mantener sesiones con evento clave como métrica distinta del número de eventos. GA4 enumera generate_lead con ONCE_PER_EVENT, además de purchase, qualify_lead y close_convert_lead. No se eliminan configuraciones históricas; el reporte del embudo filtra generate_lead.

El formulario no registra contenido, correo ni teléfono en sus eventos. Las pruebas interceptan window.open y salidas externas; no se enviaron mensajes de prueba.

## Cuentas y tráfico

Sitemaps anteriores y posteriores en datos/. Se retiraron únicamente los dos registros HTTP de 2014 mediante Composio proxy y el endpoint oficial de sitemaps; la lista posterior conserva solo el índice HTTPS, sin errores ni advertencias. No se eliminó ninguna propiedad.

Direct: 6/10, 37 sesiones desktop de Estados Unidos sin interacción; 20/10, diez del mismo segmento sin interacción. Fuente `(direct) / (none)`, hostname de producción. Hay otras sesiones de Colombia y otros países. No existe una campaña identificable que permita inventar UTMs retrospectivos ni evidencia suficiente para declarar todos esos visitantes bots. No se aplican exclusiones de países ni de baja interacción. Se separan pruebas de producción hacia adelante y se preserva el histórico.

## Clarity

Acceso al proyecto verificado con Microsoft dcossios@eafit.edu.co. Se revisa la muestra reciente disponible, sin asumir que el selector de tres días de la interfaz coincida exactamente con las 72 horas móviles del export. La revisión visual no justifica cambios funcionales a partir del contador agregado; los hallazgos y límites se completan al cerrar la verificación.

## Pruebas y rendimiento

`npm run verify`: carrito, catálogo/imágenes, compilación, redirecciones y SEO. `npm run check:browser`: geometría a 360/390/430/1280 px con texto 100/200%; aislamiento de previews; eventos de contacto/formulario/carrito; vistas inicial, navegación, atrás, adelante y recarga; galería responsive.

Lighthouse: tres ejecuciones secuenciales por URL, móvil con CPU/red simuladas y caché fría. Se usa el binario oficial de Google Chrome; el binario que seleccionó Lighthouse inicialmente produjo un interstitial y ese intento no se usó como medición. Raw de cada ejecución en output/seo-remediation/; resúmenes en datos/lighthouse-antes.json y su equivalente posterior. Los datos de laboratorio no certifican CWV ni sustituyen el percentil 75 de campo.

## Publicación y seguimiento

La comprobación de preview, el cambio coordinado de GA4 y la publicación se registrarán en el cierre local de este informe. No dar el despliegue por finalizado solo por crear el PR.

Seguimiento mediante Composio CLI con hostname de producción y separación de subdominios de GSC. `extraer-seguimiento.ts` permite fechas explícitas por variables SEO_START/SEO_END y SEO_GSC_START/SEO_GSC_END; las consultas por página son byPage y no se comparan con el antiguo total byProperty. Si una respuesta alcanza el límite solicitado debe paginarse antes de reportar totales. No convertir falta de fila en cero confirmado.

Revisiones: 48–72 h (eventos y rutas), siete días (atribución, errores, Clarity), 28 y 56 días (ventanas comparables y tendencias). La fecha real de publicación define los hitos. Notificar resultados de hitos y fallos accionables; permanecer en silencio fuera de ellos. No interpretar la eliminación de duplicados como caída comercial.

## Cierre de la primera publicación

PR [#17](https://github.com/NotExer/Agencias-Landing/pull/17), merge `8b88d105e4480501739a672b8c4f1b664c2b806f`, 26/10/2026 16:18:38 UTC (11:18:38 Bogotá). Vercel compiló las previews de los dos equipos conectados. La preview del equipo Agencias Nacionales está protegida por SSO; la sesión dcossios no tiene acceso y no se debilitó esa protección. Se verificó el mismo código localmente y, tras publicar, en el dominio público.

La actualización de pageChangesEnabled por Composio devolvió un 403 explícito por scopes insuficientes, sin modificar datos. Se realizó el cambio autorizado desde la interfaz de GA4 y se volvió a leer mediante Composio. La respuesta posterior omite pageChangesEnabled porque su valor por defecto es false; los otros campos siguen activos. No se alteraron eventos clave ni históricos. Las vistas iniciales quedan controladas por send_page_view:false y astro:page-load.

Pruebas aprobadas: `npm run verify` (197 páginas generadas), 13 pruebas de navegador, seis URLs prioritarias con 200/H1/canonical/schema, 15 variantes HTTP de las once rutas y el recorrido real de portada → Medellín → atrás → adelante → recarga. La última secuencia de cinco page_view capturada en red coincide con URL, título y referente esperados; un clic de WhatsApp produce una sola intención, con salidas interceptadas. Evidencia en produccion-navegacion.json, rutas-produccion.json y medellin-movil-despues.png.

### Revisión Clarity

Cuenta Microsoft correcta verificada. Se examinaron dos recorridos recientes: uno de 14:52 con diez clics y ocho páginas (portada, categoría, Híbrida y Gazella), y otro de EPP con dos cargas, sin clics y largos periodos de página oculta. No se cuentan como diez sesiones por página: la muestra fue menor y se documenta como tal.

En el recorrido de calzado, los clics inactivos se ubican a 00:18 sobre el contenedor de categoría/breadcrumb y a 01:35 sobre la sección de otros productos de Gazella. Los enlaces de las fichas sí navegan; los retrocesos se observan al comparar referencias y al volver desde un bolso. Eso no demuestra por sí solo una avería de los enlaces ni justifica cambiar el catálogo. Se reproducen los controles de galería/carrito en las pruebas; no se añadió una interacción ficticia a textos informativos.

Los mapas PC de portada muestran dos elementos de navegación con un clic cada uno; el de categoría muestra cinco elementos con un clic cada uno; el de Gazella muestra un clic en una ficha y otro en el contenedor de más productos. EPP tiene una muestra sin clics en el recorrido revisado. El mapa del Deportivo Casual Ref. 964 no devuelve clics en PC ni móvil para el selector de tres días. No se extrapola a ausencia histórica de fricción ni se hace coincidir este selector con el export móvil de 72 horas. Se conserva el seguimiento por nuevas muestras, sin atribuirles causas inventadas.

### Rendimiento y datos de campo

La primera repetición posterior mejora la mediana LCP de portada de 6,22 a 3,37 s y producto de 6,14 a 2,33 s; Medellín y EPP empeoran en esa muestra. La cadena crítica confirma descubrimiento tardío de la fuente Inter, por lo que se añade su precarga y se repetirá la medición final. No se presenta esta primera repetición como mejora universal ni aprobación de CWV.

PageSpeed API devolvió 429 por cuota del proyecto público. No se obtuvo evidencia nueva de campo; se mantiene este límite explícito. Los ensayos Lighthouse usan tres corridas secuenciales por URL con el mismo Chrome y configuración móvil; aun así reflejan variabilidad de red/CPU y no demuestran causalidad.

### Seguimiento configurado

Automatización activa `verificar-remediaci-n-seo-agencias-nacionales`, ligada a este chat: hitos 29/10, 02/11, 23/11 y 21/12 de 2026. Verifica hitos pendientes a diario y permanece en silencio entre ellos salvo un cambio accionable. Debe desactivarse tras el último hito. La automatización semanal anterior permanece pausada.
