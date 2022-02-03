import { QuackJSUtils } from '@n-f9/quack.js';
export default (Quack) => {
    Quack.CreateCommand({
        name: 'help',
        description: 'Provides the user with helpful information and links.',
        guilds: ['936423188005531688'],
        permission: 'everyone',
        async execute(interation) {
            interation.reply(QuackJSUtils.Discord.Embed({
                embeds: [
                    {
                        title: 'Quack.js Help Menu',
                        color: '#FFD300',
                        description: `Quack.js is a Discord.js bot framework for any purpose.`,
                        fields: [
                            {
                                name: 'Useful Links',
                                value: `[Documentation/Wiki](https://n-f9.gitbook.io/quack.js/)
									[NPM](https://www.npmjs.com/package/@n-f9/quack.js)
									[Github](https://www.npmjs.com/package/@n-f9/quack.js)
									[Website](https://quack.nickf.me/)
									[Issues](https://github.com/N-F9/quack.js/issues)`,
                            },
                            {
                                name: 'Commands',
                                value: 'For the list of commands, type `/` for the available commands.',
                            },
                        ],
                    },
                ],
            }));
        },
    });
};
