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
git clone <https://github.com/NotExer/Agencias-Landing>
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

## Mantenimiento

Se recomienda mantener la lógica de negocio separada en las carpetas `data` y `scripts`, utilizar componentes reutilizables dentro de `components` y centralizar los estilos en `styles` para facilitar futuras modificaciones.
