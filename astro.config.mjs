// @ts-check
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { defineConfig } from 'astro/config';
import sidebar from './sidebar.items.mjs';
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
      editLink: {
        baseUrl: 'https://github.com/tiramisulabs/seyfert-docs/edit/main/',
      },
      plugins: [],
      expressiveCode: {
        plugins: [pluginLineNumbers],
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
        './src/custom.css',
        '@fontsource-variable/jetbrains-mono/wght.css',
        '@fontsource-variable/inter/wght.css',
      ],
      social: {
        github: 'https://github.com/tiramisulabs/seyfert',
        discord: 'https://discord.com/invite/XNw2RZFzaP',
      },
      sidebar,
      components: {
        Sidebar: './src/components/newSidebar.astro',
        PageFrame: './src/components/pageFrame.astro',
        PageTitle: './src/components/pageTitle.astro',
        Header: './src/components/header.astro',
        MobileTableOfContents: './src/components/mobileTableOfContents.astro',
      },
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
  ],
});
