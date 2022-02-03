import { QuackJSUtils } from '@n-f9/quack.js';
export default (Quack) => {
    Quack.CreateEvent({
        name: 'ready',
        execute(client) {
            QuackJSUtils.Log('Bot Ready.');
        },
    });
};
