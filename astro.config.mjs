// @ts-check
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { defineConfig } from 'astro/config';
import sidebar from './sidebar.items.mjs';
import starlightTypeDoc from './src/lib/startlight-typedoc';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      defaultLocale: 'root',
      locales: {
        // src/content/docs/
        root: {
          label: 'English',
          lang: 'en',
        },
        // src/content/docs/es/
        es: {
          label: 'Español',
        },
      },
      plugins: [
        starlightTypeDoc({
          entryPoints: ['./seyfert/src/index.ts'],
          tsconfig: './seyfert/tsconfig.json',
          typeDoc: {
            useCodeBlocks: true,
            parametersFormat: 'table',
            propertiesFormat: 'table',
            enumMembersFormat: 'table',
            typeDeclarationFormat: 'table',
            indexFormat: 'table',
            expandParameters: true,
          },
        }),
      ],
      expressiveCode: {
        plugins: [pluginLineNumbers()],
        styleOverrides: {
          codeFontFamily: 'JetBrains Mono Variable',
          uiFontFamily: 'JetBrains Mono Variable',
        },
      },
      favicon: '/icon.svg',
      logo: {
        src: './public/icon.svg',
      },
      title: 'Seyfert',
      customCss: [
        './src/tailwind.css',
        '@fontsource-variable/jetbrains-mono/wght.css',
        '@fontsource-variable/open-sans/wght.css',
        '@fontsource-variable/inter/wght.css',
      ],
      social: {
        github: 'https://github.com/tiramisulabs/seyfert',
        discord: 'https://discord.com/invite/XNw2RZFzaP',
      },
      sidebar,
      components: {
        Sidebar: './src/components/customSidebar.astro',
      },
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
  ],
});
