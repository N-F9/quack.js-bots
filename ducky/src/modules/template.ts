import { QuackJS } from '@n-f9/quack.js'
import { UserBase } from '../utils/user.js'
import DiscordJS from 'discord.js'

export default (Quack: QuackJS) => {
	const User = UserBase(Quack)

	Quack.CreateEvent({
		name: 'messageCreate',
		async execute(client: DiscordJS.Client, message: DiscordJS.Message) {
			if (message.member) await User(message.member)
		},
	})
}
