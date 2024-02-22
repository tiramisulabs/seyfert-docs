import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: "Seyfert",
  tagline: "Making Discord API more fun",
  favicon: "img/logo.jpg",
  url: "https://seyfert-docs.vercel.app/",
  baseUrl: "/",
  organizationName: "seyfert",
  projectName: "seyfert",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    format: "detect",
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/FreeAoi/seyfert-docs",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Seyfert",
      logo: {
        alt: "Seyfert Logo",
        src: "img/logo.jpg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "guideSidebar",
          label: "Guide",
          position: "left",
        },
        {
          to: 'api',
          label: 'API',
          position: 'left',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Seyfert, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ["bash", "json"],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    ['docusaurus-plugin-typedoc-api',
      {
        projectRoot: process.cwd(),
        packages: ["seyfert/"],
      }],
    tailwindPlugin,
  ],
};

export default config;
