import { QuackJSUtils } from '@n-f9/quack.js';
import got from 'got';
export default (Quack) => {
    Quack.CreateCommand({
        name: 'embed',
        description: 'Create an embed.',
        guilds: ['936423188005531688'],
        permission: '936433734415159326',
        defaultPermission: false,
        options: [
            {
                name: 'title',
                type: 'STRING',
                description: 'The title of the embed.',
                required: true,
            },
            {
                name: 'link',
                type: 'STRING',
                description: 'The github gist link for the description',
                required: true,
            },
            {
                name: 'channel',
                type: 'CHANNEL',
                description: 'The channel that the embed will be posted to.',
                required: true,
            },
            {
                name: 'role',
                type: 'ROLE',
                description: 'The role that will be mentioned.',
                required: false,
            },
        ],
        async execute(interaction) {
            const link = interaction.options.getString('link');
            const title = interaction.options.getString('title');
            const channel = interaction.options.getChannel('channel');
            const role = interaction.options.getRole('role') || null;
            const content = await got.get(link || '').text();
            await channel.send(QuackJSUtils.Discord.Embed({
                ...(role != null ? { content: role.toString() } : {}),
                embeds: [
                    {
                        title: title || '',
                        description: content,
                        color: '#FFD300',
                    },
                ],
            }));
            await interaction.reply(QuackJSUtils.Discord.Embed({
                embeds: [
                    {
                        title: 'Successfully sent the embed!',
                        color: '#FFD300',
                    },
                ],
            }));
        },
    });
};
