export const UserBase = (quack) => async (member) => {
    const user = await quack.models.user.findOne({
        where: {
            discord: member.id,
        },
    });
    if (!user)
        await quack.models.user.create({
            discord: member.id,
            ducks: 100,
            points: 0,
            factories: {},
            cooldowns: {},
        });
};
