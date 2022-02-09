import { QuackJSUtils } from '@n-f9/quack.js';
export default (Quack) => {
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
        async execute(interaction) {
            const query = interaction.options.getString('query');
            if (!query)
                return interaction.reply(QuackJSUtils.Discord.Embed({
                    embeds: [
                        {
                            title: 'An Error Occurred',
                            color: '#FFD300',
                        },
                    ],
                }));
            interaction.reply(QuackJSUtils.Discord.Embed({
                embeds: [
                    {
                        title: 'DuckDuckGo Search',
                        color: '#FFD300',
                        description: `[${query}](https://duckduckgo.com/?q=${encodeURIComponent(query)})`,
                    },
                ],
            }));
        },
    });
};
