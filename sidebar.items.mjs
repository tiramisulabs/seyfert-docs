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
            label: 'Setup seyfert project',
            translations: {
              es: 'Configuración de Seyfert',
            },
            link: '/getting-started/setup-project',
          },
          {
            label: 'First Command',
            translations: {
              es: 'Creando tu primer comando',
            },
            link: '/getting-started/first-command',
          },
          {
            label: 'Listening discord events',
            translations: {
              es: 'Escuchando los eventos de Discord',
            },
            link: '/getting-started/listening-events',
          },
          {
            label: 'Language support',
            link: '/getting-started/languages',
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
            label: 'Command Decorators',
            translations: {
              es: 'Decoradores para el Comando',
            },
            link: '/commands/decorators',
          },
          {
            label: 'Command Options',
            translations: {
              es: 'Opciones de un Comando',
            },
            link: '/commands/options',
          },
          {
            label: 'Command Middlewares',
            translations: {
              es: 'Middlewares de Comandos',
            },
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
            label: 'Handling errors',
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
        label: 'Components',
        translations: {
          es: 'Componentes',
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
        ],
      },
      {
        label: 'Recipes',
        translations: {
          es: 'Recetas'
        },
        collapsed: true,
        items: [
          {
            label: 'Playing audio',
            translations: {
              es: 'Reproduciendo audio'
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
            label: 'Creating Polls',
            translations: {
              es: 'Creando Encuestas'
            },
            link: '/recipes/polls'
          },
        ]
      },
      {
        label: 'Tips and Tricks',
        translations: {
          es: 'Consejos y Trucos',
        },
        collapsed: true,
        items: [
          {
            label: 'API Access',
            translations: {
              es: 'Acceso a la API',
            },
            link: '/tips-and-tricks/api-access',
          },
        ],
      },
    ],
  },
];
