import { UserBase } from '../utils/user.js';
export default (Quack) => {
    const User = UserBase(Quack);
    Quack.CreateEvent({
        name: 'messageCreate',
        async execute(client, message) {
            if (message.member)
                await User(message.member);
        },
    });
};
