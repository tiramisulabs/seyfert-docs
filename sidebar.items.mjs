export default [
  {
    label: 'Guide',
    translations: {
      es: 'Guía',
    },
    items: [
      {
        label: 'Introduction',
        translations: {
          es: 'Introducción',
        },
        link: '/',
      },
      {
        label: 'Getting Started',
        translations: {
          es: 'Empezando',
        },
        collapsed: true,
        items: [
          {
            label: 'Setup Project',
            translations: {
              es: 'Configuración de Seyfert',
            },
            link: '/getting-started/setup-project',
          },
          {
            label: 'First Command',
            translations: {
              es: 'Primer Comando',
            },
            link: '/getting-started/first-command',
          },
          {
            label: 'Listening Events',
            translations: {
              es: 'Recibiendo Eventos',
            },
            link: '/getting-started/listening-events',
          },
          {
            label: 'Understanding declare module',
            translations: {
              es: 'Entendiendo declare module',
            },
            link: '/getting-started/declare-module',
          },
        ],
      },
      {
        label: 'Commands',
        translations: {
          es: 'Comandos',
        },
        collapsed: true,
        items: [
          {
            label: 'Decorators',
            translations: {
              es: 'Decoradores',
            },
            link: '/commands/decorators',
          },
          {
            label: 'Options',
            translations: {
              es: 'Opciones',
            },
            link: '/commands/options',
          },
          {
            label: 'Middlewares',
            link: '/commands/middlewares',
          },
          {
            label: 'Sub Commands',
            translations: {
              es: 'Sub Comandos',
            },
            link: '/commands/subcommands',
          },
          {
            label: 'Handling Errors',
            translations: {
              es: 'Manejando errores',
            },
            link: '/commands/handling-errors',
          },
          {
            label: 'Prefix Commands',
            translations: {
              es: 'Comandos de prefijo',
            },
            link: '/commands/prefix-commands',
          },
          {
            label: 'Extending CommandContext',
            translations: {
              es: 'Extendiendo el CommandContext'
            },
            link: '/commands/extend-commandcontext'
          },
        ],
      },
      {
        label: 'i18n',
        translations: {
          es: 'i18n',
        },
        collapsed: true,
        items: [
          {
            label: 'Setting Up',
            translations: {
              es: 'Gestión de idiomas'
            },
            link: '/i18n/languages',
          },
          {
            label: 'Locales Usage',
            translations: {
              es: 'Uso de locales'
            },
            link: '/i18n/usage',
          },
        ],
      },
      {
        label: 'Components and Interactions',
        translations: {
          es: 'Componentes e Interacciones',
        },
        collapsed: true,
        items: [
          {
            label: 'Building Components',
            translations: {
              es: 'Construyendo Componentes',
            },
            link: '/components/building-components',
          },
          {
            label: 'Handling Components',
            translations: {
              es: 'Manejando Componentes',
            },
            link: '/components/handling-components',
          },
          {
            label: 'Modals',
            translations: {
              es: 'Modals',
            },
            link: '/components/modals',
          },
          {
            label: 'Collectors',
            translations: {
              es: 'Collectors',
            },
            link: '/components/collectors',
          },
          {
            label: 'Polls',
            translations: {
              es: 'Encuestas'
            },
            link: '/components/polls'
          },
        ],
      },
      {
        label: 'Recipes',
        collapsed: true,
        items: [
          {
            label: 'Monetization',
            translations: {
              es: 'Monetizacion'
            },
            link: '/recipes/monetization'
          },
          {
            label: 'Playing audio',
            translations: {
              es: 'Reproducir audio'
            },
            link: '/recipes/music'
          },
          {
            label: 'Cloudflare Workers',
            translations: {
              es: 'Cloudflare Workers'
            },
            link: '/recipes/cloudflare-workers'
          },
          {
            label: 'API Access',
            translations: {
              es: 'Acceso a la API',
            },
            link: '/recipes/api-access',
          },
          {
            label: 'Docker',
            translations: {
              es: 'Docker'
            },
            link: '/recipes/using-docker'
          },
          {
            label: 'Transformers',
            translations: {
              es: 'Transformers'
            },
            link: '/recipes/transformers'
          }
        ]
      },
    ],
  },
];
