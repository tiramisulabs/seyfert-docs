import { typeDocSidebarGroup } from './src/libs/startlight-typedoc';

export default [{
	label: 'Guide',
	items: [
		{
			label: 'Introduction',
			link: '/',
		},
		{
			label: 'Getting Started',
			collapsed: true,
			items: [
				{
					label: 'Setup seyfert project',
					link: '/guides/setup-project'
				},
				{
					label: 'Start from example',
					link: '/guides/start-from-example'
				},
				{
					label: 'First Command',
					link: '/guides/first-command'
				},
				{
					label: 'Listening discord events',
					link: '/guides/listening-events'
				},
				{
					label: 'Understanding declare module',
					link: '/guides/declare-module'
				},
				{
					label: 'Music library',
					link: '/guides/music'
				}
			]
		},
		{
			label: "Commands",
			collapsed: true,
			items: [
				{
					label: 'Command Options',
					link: '/commands/options'
				},
				{
					label: 'Command Decorators',
					link: '/commands/decorators'
				},
				{
					label: 'Command Middlewares',
					link: '/commands/middlewares'
				},
				{
					label: 'Sub-Zero (Sub Commands)',
					link: '/commands/subcommands'
				},
				{
					label: 'Extending Commands',
					link: '/commands/command-class'
				}
			]
		}
	]
},
	typeDocSidebarGroup
]