# Inventario de recuperación de URLs

Fuente: `urls-404-search-console.csv`, 93 URLs históricas exportadas de Search Console.

## Clasificación operativa

- **36 URLs con sustituto confirmado:** 22 ya registradas en el CSV y 14 equivalencias adicionales listadas abajo. Se publican como redirecciones permanentes.
- **57 URLs retiradas sin sustituto confirmado:** son todas las filas que conservan vacío el campo `Destino preparado` después de excluir las 14 equivalencias de esta página. Deben responder 404 hasta que el responsable del catálogo confirme que existe el mismo producto o contenido.
- **`/p1013327/`:** retirada sin sustituto confirmado. Se eliminó la redirección genérica a `/producto/` porque no preservaba la intención ni acreditaba equivalencia.

## Equivalencias adicionales confirmadas

| URL histórica | Destino |
|---|---|
| `/zapaton-machita-blanco/` | `/producto/zapaton-plastico-machita-dama/` |
| `/pantalón-dril-clasico-hombre-caqui/` | `/producto/pantalon-dril-caqui/` |
| `/redecilla-larga-1-velillo-cristal/` | `/producto/redecilla-larga-1-velillo-cristal-ref-07/` |
| `/zapato-tipo-crocs-ref-242/` | `/producto/zapato-tipo-crocs-kroky-ref-242/` |
| `/mocasín-medio-tacón-ref-248-(lona)/` | `/producto/mocasin-lona-medio-tacon-ref-248/` |
| `/bolso-ref-102/` | `/producto/bolso-promocional-ref-102/` |
| `/zapato-tipo-crocs-ref-175-2/` | `/producto/zapato-tipo-crocs-ref-175/` |
| `/tenis-royal-hi-cut-alto/` | `/producto/tenis-royal-cut-alto/` |
| `/gorro-corto-en-dacron/` | `/producto/gorro-corto-en-dacron-ref-11/` |
| `/camisa-oxford/` | `/producto/camisa-oxford-hombre/` |
| `/gorro-largo-en-dacron/` | `/producto/gorro-largo-en-dacron-ref-12/` |
| `/camisa-indigo-hombre-ml/` | `/producto/camisa-indigo/` |
| `/guantes-en-cuero-tipo-ingeniero-sencillo/` | `/producto/guantes-en-cuero-tipo-ingeniero/` |
| `/guantes-en-cuero-tipo-ingeniero-reforzado/` | `/producto/guantes-en-cuero-reforzado/` |

El archivo `vercel.json` contiene 72 redirecciones de ruta verificadas contra archivos construidos. Algunas no provienen del grupo actual de 93 errores, porque recuperan otras rutas heredadas conocidas. La consolidación de `www` debe configurarse como redirección de dominio en Vercel: la regla condicional de archivo no se ejecutó delante de las páginas estáticas y se retiró para no declarar una garantía falsa.
