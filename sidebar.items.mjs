import { typeDocSidebarGroup } from './src/lib/startlight-typedoc';

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
		},
		{
			label: 'Components',
			collapsed: true,
			items: [
				{
					label: 'Introduction',
					link: '/components/introduction'
				},
				{
					label: 'Building Components',
					link: '/components/building-components'
				},
				{
					label: 'Handling Components',
					link: '/components/handling-components'
				},
				{
					label: 'Modals',
					link: '/components/modals'
				},
				{
					label: 'Collectors',
					link: '/components/collectors'
				}
			]
		},
		{
			label: 'Miscellaneous',
			collapsed: true,
			items: [
				{
					label: 'Sending Messages',
					link: '/misc/sending-messages'
				},
				{
					label: 'Music library',
					link: '/misc/music'
				}
			]
		}
	]
},
	typeDocSidebarGroup
]