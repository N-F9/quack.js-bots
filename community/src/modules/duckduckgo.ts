import { QuackJS, QuackJSUtils } from '@n-f9/quack.js'
import * as DiscordJS from 'discord.js'

export default (Quack: QuackJS) => {
	Quack.CreateCommand({
		name: 'search',
		description: 'Search a specific query.',
		guilds: ['936423188005531688'],
		permission: 'everyone',
		defaultPermission: true,
		options: [
			{
				name: 'query',
				type: 'STRING',
				description: 'The query which will be search.',
				required: true,
			},
		],
		async execute(interaction: DiscordJS.CommandInteraction) {
			const query = interaction.options.getString('query')

			if (!query)
				return interaction.reply(
					QuackJSUtils.Discord.Embed({
						embeds: [
							{
								title: 'An Error Occurred',
								color: '#FFD300',
							},
						],
					}) as DiscordJS.InteractionReplyOptions,
				)

			interaction.reply(
				QuackJSUtils.Discord.Embed({
					embeds: [
						{
							title: 'DuckDuckGo Search',
							color: '#FFD300',
							description: `[${query}](https://duckduckgo.com/?q=${encodeURIComponent(query)})`,
						},
					],
				}) as DiscordJS.InteractionReplyOptions,
			)
		},
	})
}
