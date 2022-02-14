import { QuackJS } from '@n-f9/quack.js'
import DiscordJS from 'discord.js'

export const UserBase = (quack: QuackJS) => async (member: DiscordJS.GuildMember) => {
	const user = await quack.models.user.findOne({
		where: {
			discord: member.id,
		},
	})

	if (!user)
		await quack.models.user.create({
			discord: member.id,
			ducks: 100,
			points: 0,
			factories: {},
			cooldowns: {},
		})
}
