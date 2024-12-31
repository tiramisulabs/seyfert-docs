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
						label: 'Setup Seyfert',
						translations: {
							es: 'Configurando Seyfert',
						},
						link: '/getting-started/setup-project',
					},
					{
						label: 'Your first command',
						translations: {
							es: 'Tu primer comando',
						},
						link: '/getting-started/first-command',
					},
					{
						label: 'Listening to events',
						translations: {
							es: 'Escuchando eventos',
						},
						link: '/getting-started/listening-events',
					},
					{
						label: 'Understanding declare module',
						translations: {
							es: 'Entendiendo el declare module',
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
						label: 'Introduction',
						translations: {
							es: 'Introducción',
						},
						link: '/commands/intro',
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
							es: 'Extendiendo el CommandContext',
						},
						link: '/commands/extend-commandcontext',
					},
				],
			},
			{
				label: 'i18n',
				collapsed: true,
				items: [
					{
						label: 'Setting Up',
						translations: {
							es: 'Gestión de idiomas',
						},
						link: '/i18n/languages',
					},
					{
						label: 'Locales Usage',
						translations: {
							es: 'Uso de locales',
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
						link: '/components/modals',
					},
					{
						label: 'Collectors',
						link: '/components/collectors',
					},
					{
						label: 'Polls',
						translations: {
							es: 'Encuestas',
						},
						link: '/components/polls',
					},
				],
			},
			{
				label: 'Recipes',
				collapsed: true,
				items: [
					{
						label: 'Sending messages',
						translations: {
							es: 'Enviando mensajes',
						},
						link: '/recipes/sending-messages',
					},
					{
						label: 'Cache',
						translations: {
							es: 'Caché',
						},
						link: '/recipes/cache',
					},
					{
						label: 'Transformers',
						link: '/recipes/transformers',
					},
					{
						label: 'Sharding',
						link: '/recipes/sharding',
					},
					{
						label: 'Monetization',
						translations: {
							es: 'Monetización',
						},
						link: '/recipes/monetization',
					},
					{
						label: 'Playing audio',
						translations: {
							es: 'Reproducir audio',
						},
						link: '/recipes/music',
					},
					{
						label: 'Cloudflare Workers',
						link: '/recipes/cloudflare-workers',
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
						link: '/recipes/using-docker',
					},
					{
						label: 'Cooldown',
						link: '/recipes/cooldown',
					},
					{
						label: 'Custom events',
						translations: {
							es: 'Eventos personalizables',
						},
						link: '/recipes/custom-events',
					},
					{
						label: 'Extending the config',
						translations: {
							es: 'Extendiendo la configuración',
						},
						link: '/recipes/extending-config',
					},
				],
			},
			{
				label: 'Tips & Miscellaneous',
				collapsed: true,
				items: [
					{
						label: 'Introduction',
						translations: {
							es: 'Introducción',
						},
						link: '/tips-misc/intro',
					},
					{
						label: 'Setting Custom Activity and Presence',
						translations: {
							es: 'Configurar Actividad y Presencia Personalizada'
						},
						link: '/tips-misc/presence',
					}
				],
			},

			{
				label: 'Changelog',
				translations: {
					es: 'Changelog',
				},
				link: '/changelog',
			}
		],
	},
];
