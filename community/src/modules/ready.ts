import { QuackJS, QuackJSUtils } from '@n-f9/quack.js'
import * as DiscordJS from 'discord.js'

export default (Quack: QuackJS) => {
	Quack.CreateEvent({
		name: 'ready',
		execute(client: DiscordJS.Client) {
			QuackJSUtils.Log('Bot Ready.')
		},
	})
}
