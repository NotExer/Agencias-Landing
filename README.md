# Agencias

Sitio web desarrollado con Astro para la gestión y presentación de contenido relacionado con Agencias. El proyecto está organizado utilizando componentes reutilizables, layouts, estilos personalizados y scripts para facilitar el mantenimiento y la escalabilidad.

## Tecnologías utilizadas

- Astro
- TypeScript
- HTML
- CSS
- JavaScript

## Estructura del proyecto

```text
/
├── public/               # Archivos estáticos accesibles públicamente
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── data/             # Datos y configuraciones del proyecto
│   ├── img/              # Imágenes utilizadas por la aplicación
│   ├── layouts/          # Plantillas base de las páginas
│   ├── pages/            # Rutas y páginas del sitio
│   ├── scripts/          # Scripts personalizados
│   └── styles/           # Archivos de estilos globales y específicos
│
├── .astro/               # Archivos generados por Astro
├── dist/                 # Compilación para producción
├── astro.config.mjs      # Configuración de Astro
├── package.json          # Dependencias y scripts del proyecto
├── tsconfig.json         # Configuración de TypeScript
└── README.md
```

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/NotExer/Agencias-Landing
```

Instalar las dependencias:

```bash
npm install
```

## Ejecución en desarrollo

Iniciar el servidor local:

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:4321
```

## Compilación para producción

Generar la versión optimizada del proyecto:

```bash
npm run build
```

Los archivos generados se almacenarán en la carpeta:

```text
dist/
```

## Vista previa de producción

Para probar localmente la compilación generada:

```bash
npm run preview
```

## Scripts disponibles

| Comando | Descripción |
|----------|------------|
| `npm install` | Instala las dependencias del proyecto |
| `npm run dev` | Inicia el entorno de desarrollo |
| `npm run build` | Genera la versión de producción |
| `npm run preview` | Muestra una vista previa de la compilación |
| `npm run astro` | Ejecuta comandos de Astro CLI |
| `npm run check:cart` | Comprueba persistencia, duplicados y limpieza del carrito de cotizaciones |
| `npm run check:catalog` | Valida las referencias de imágenes del catálogo |
| `npm run check:redirects` | Verifica las redirecciones permanentes y URLs canónicas |
| `npm run check:seo` | Comprueba metadatos y páginas comerciales clave |
| `npm run verify` | Ejecuta todas las comprobaciones y la compilación de producción |
| `npm run indexnow -- <rutas>` | Avisa a IndexNow (Bing y otros) de URLs cambiadas en producción |

## IndexNow (Bing)

La clave pública de IndexNow está en `public/<clave>.txt` y se publica en la raíz del sitio. No es un secreto: IndexNow la valida leyendo ese archivo. El sitemap incluye `lastmod` en los artículos (fecha de `updatedISO` en `src/data/article-extras.ts` o, si no existe, la de publicación).

Cuando el deploy de producción en Vercel ya esté publicado, avisa de las URLs que cambiaron:

```bash
npm run indexnow -- /dotaciones-medellin/ /articulos-del-blog/planear-compra-dotacion-diciembre/
npm run indexnow -- --since 2026-11-27   # URLs del sitemap con lastmod desde esa fecha
npm run indexnow -- --all                # todo el sitemap (por ejemplo, la primera vez)
npm run indexnow -- --dry-run --all      # solo muestra la lista
```

El script comprueba que la clave responde en producción antes de enviar, así que falla si se ejecuta antes de que termine el deploy. No necesita tokens ni variables de entorno.

## Mantenimiento

Se recomienda mantener la lógica de negocio separada en las carpetas `data` y `scripts`, utilizar componentes reutilizables dentro de `components` y centralizar los estilos en `styles` para facilitar futuras modificaciones.
