// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import articles from './src/data/articles.generated.json' with { type: 'json' };
import { ARTICLE_EXTRAS } from './src/data/article-extras.ts';

const SITE = 'https://agenciasnacionales.com';

/** Last substantive change per article URL, the same date published as dateModified. */
const articleLastmod = new Map(
  articles.map((article) => [
    `${SITE}/articulos-del-blog/${article.slug}/`,
    ARTICLE_EXTRAS[article.slug]?.updatedISO ?? article.dateISO,
  ]),
);
articleLastmod.set(`${SITE}/articulos/`, [...articleLastmod.values()].sort().at(-1));

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      filter: (page) => page !== `${SITE}/carrito/`,
      serialize: (item) => {
        const lastmod = articleLastmod.get(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
});
