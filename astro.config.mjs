// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDoc, { typeDocSidebarGroup } from './src/libs/startlight-typedoc';
import react from '@astrojs/react';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    plugins: [
      starlightTypeDoc({
        entryPoints: ['./seyfert/src/index.ts'],
        tsconfig: './seyfert/tsconfig.json',
        typeDoc: {
          useCodeBlocks: true,
          parametersFormat: "table",
          "propertiesFormat": "table",
          "enumMembersFormat": "table",
          "typeDeclarationFormat": "table",
          "indexFormat": "table",
          "expandParameters": true
        }
      })
    ],
    expressiveCode: {
      plugins: [pluginLineNumbers()],
      styleOverrides: {
        codeFontFamily: "JetBrains Mono Variable",
        uiFontFamily: "JetBrains Mono Variable",
      }
    },
    title: 'Seyfert',
    customCss: [
      './src/tailwind.css',
      '@fontsource-variable/jetbrains-mono/wght.css',
      '@fontsource-variable/open-sans/wght.css',
    ],
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Guide',
      items: [
        {
          label: 'Introduction',
          link: '/',
        },
        {
          label: 'Getting Started',
          collapsed: true,
          autogenerate: {
            directory: '/guides',
          }
        },
        {
          label: "Commands",
          collapsed: true,
          autogenerate: {
            directory: "/commands",
          }
        }
      ]
    },
      typeDocSidebarGroup
    ]
  }), react(), tailwind({
    applyBaseStyles: false,
    nesting: true
  })]
});