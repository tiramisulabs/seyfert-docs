import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { ExpressiveCodeTheme } from 'astro-expressive-code';
import { defineConfig } from 'astro/config';
import ecTwoSlash from 'expressive-code-twoslash';
import dacezuThemeJSON from './public/dacezu.json';
import sidebar from './sidebar.items';

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
      expressiveCode: {
        plugins: [ecTwoSlash()],
        themes: [ExpressiveCodeTheme.fromJSONString(JSON.stringify(dacezuThemeJSON)), 'github-light'],
        styleOverrides: {
          codeFontFamily: 'JetBrains Mono Variable',
          uiFontFamily: 'JetBrains Mono Variable',
          //@ts-expect-error
          'twoSlash.cursorColor': 'red',
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
        Sidebar: './src/components/starlight/newSidebar.astro',
        PageFrame: './src/components/starlight/pageFrame.astro',
        PageTitle: './src/components/starlight/pageTitle.astro',
        Header: './src/components/starlight/header.astro',
        MobileTableOfContents: './src/components/starlight/mobileTableOfContents.astro',
        TableOfContents: './src/components/starlight/tableOfContents.astro',
      },
    }),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
  ],
});
