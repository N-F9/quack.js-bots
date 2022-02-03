import { QuackJS, QuackJSUtils } from '@n-f9/quack.js'
import * as DiscordJS from 'discord.js'

export default (Quack: QuackJS) => {
	Quack.CreateCommand({
		name: 'search',
		description: 'Search a specific query.',
		guilds: ['936423188005531688'],
		permission: 'everyone',
		options: [
			{
				name: 'query',
				type: 'STRING',
				description: 'The query which will be search.',
				required: true,
			},
		],
		async execute(interation: DiscordJS.CommandInteraction) {
			const query = interation.options.getString('query')

			if (!query)
				return interation.reply(
					QuackJSUtils.Discord.Embed({
						embeds: [
							{
								title: 'An Error Occurred',
								color: '#FFD300',
							},
						],
					}),
				)

			interation.reply(
				QuackJSUtils.Discord.Embed({
					embeds: [
						{
							title: 'DuckDuckGo Search',
							color: '#FFD300',
							description: `[${query}](https://duckduckgo.com/?q=${encodeURIComponent(query)})`,
						},
					],
				}),
			)
		},
	})
}
