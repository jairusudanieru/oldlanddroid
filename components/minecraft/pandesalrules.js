const {
    EmbedBuilder,
} = require("discord.js");

module.exports = {
    data: {
        name: "pandesalrules",
    },
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/1012234151769931817/1022113959274356736/pandesalrules-min.png`)
            .setColor("#2f3136");
        const embed2 = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Rule #1 - No Cheating**\nOur Server is a Survival Server so modifications that would give an advantage over other players is not allowed. Like x-ray, Kill Aura, Fly Hacks, etc. Also no hacking of Minecraft and Discord accounts. Anyone caught cheating will be punished accordingly.\n\n<:emoji_dot:1044083172784218132>**Rule #2 - No Griefing**\nIf you destroy any builds without good reason, you will be punished. If you accidentally damaged the builds, fix it right away. If the accident is too serious, let the build owner know, help him/her fix it and apologize.\n\n<:emoji_dot:1044083172784218132>**Rule #3 - Respect Others**\nAvoid quarrels and chaos, respect each member whether younger or older. We are all friends on the server so let’s keep the peace and further develop our friendship.\n\n<:emoji_dot:1044083172784218132>**Rule #4 - No Lag Machines**\nAvoid very large Redstone machines and don’t make lag machines. If you have a Redstone machine, please turn it off when you are not using it.\n\n<:emoji_dot:1044083172784218132>**Rule #5 - Pranks**\nOnly prank those who are okay with it. If you prank someone, they have every right to return the favor. If you do something ridiculous and the victim needs some help sorting everything out afterwards, give them a hand. Any prank should still be fun for all involved (and maybe a bit annoying).`)
            .setColor("#2f3136");

        await interaction.reply({
            embeds: [embed, embed2],
            ephemeral: true
        });
    },
};
