import { typeDocSidebarGroup } from './src/lib/startlight-typedoc';

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
            link: '/guides/setup-project',
          },
          {
            label: 'Start from example',
            translations: {
              es: 'Empezar desde un ejemplo',
            },
            link: '/guides/start-from-example',
          },
          {
            label: 'First Command',
            translations: {
              es: 'Creando tu primer comando',
            },
            link: '/guides/first-command',
          },
          {
            label: 'Listening discord events',
            translations: {
              es: 'Escuchando los eventos de Discord',
            },
            link: '/guides/listening-events',
          },
          {
            label: 'Understanding declare module',
            translations: {
              es: 'Entendiendo declare module',
            },
            link: '/guides/declare-module',
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
            label: 'Command Options',
            translations: {
              es: 'Opciones de un Comando',
            },
            link: '/commands/options',
          },
          {
            label: 'Command Decorators',
            translations: {
              es: 'Decoradores para el Comando',
            },
            link: '/commands/decorators',
          },
          {
            label: 'Command Middlewares',
            translations: {
              es: 'Middlewares de Comandos',
            },
            link: '/commands/middlewares',
          },
          {
            label: 'Sub-Zero (Sub Commands)',
            translations: {
              es: 'Sub-Zero (Sub Comandos)',
            },
            link: '/commands/subcommands',
          },
          {
            label: 'Extending Commands',
            translations: {
              es: 'Extendiendo Comandos',
            },
            link: '/commands/command-class',
          },
          {
            label: 'Prefix Commands',
            translations: {
              es: 'Comandos de prefijo',
            },
            link: '/commands/prefix-commands',
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
            label: 'Introduction',
            translations: {
              es: 'Introducción',
            },
            link: '/components/introduction',
          },
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
        label: 'Miscellaneous',
        translations: {
          es: 'Misceláneos',
        },
        collapsed: true,
        items: [
          {
            label: 'Sending Messages',
            translations: {
              es: 'Enviando Mensajes',
            },
            link: '/misc/sending-messages',
          },
          {
            label: 'Music library',
            translations: {
              es: 'Librería de música',
            },
            link: '/misc/music',
          },
          {
            label: 'API Access',
            translations: {
              es: 'Acceso a la API',
            },
            link: '/misc/api-access',
          },
          {
            label: 'Extending CommandContext',
            translations: {
              es: 'Extendiendo el CommandContext'
            },
            link: '/misc/extendcontext'
          },
          {
            label: 'Creating Polls',
            translations: {
              es: 'Creando Encuestas'
            },
            link: '/misc/polls'
          },
          {
            label: 'Cloudfare Workers',
            translations: {
              es: 'Cloudfare Workers'
            },
            link: '/misc/cloudfare-workers'
          }
        ],
      },
    ],
  },
  typeDocSidebarGroup,
];
