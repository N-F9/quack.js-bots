import { QuackJS, QuackJSUtils } from '@n-f9/quack.js'
import * as DiscordJS from 'discord.js'

export default (Quack: QuackJS) => {
	Quack.CreateEvent({
		name: 'guildMemberAdd',
		execute(client: DiscordJS.Client, member: DiscordJS.GuildMember) {
			const channel = QuackJSUtils.Discord.GetChannel(member.guild, '937166955473944658') as DiscordJS.TextChannel
			channel.send(
				QuackJSUtils.Discord.Embed({
					embeds: [
						{
							color: '#FFD300',
							title: 'Welcome!',
							description: `Welcome ${member.toString()}, Quack.js is a Discord.js bot framework for any purpose.
										
										For more information check out <#936430981727019061>!`,
						},
					],
				}),
			)
			QuackJSUtils.Discord.GiveRole(member.guild, member, '936433336509935666')
		},
	})
}
