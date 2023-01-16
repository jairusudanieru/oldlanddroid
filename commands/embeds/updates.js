const {
    EmbedBuilder,
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("updates")
        .setDescription("The Updates Embed")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setDescription(`**<:icon_dot:973828580272402444>Pandesal End Dimension**\nI am happy to inform you that the End Dimension is now open! Since I'm on vacation, I won't be able to participate in the End Fight. But, when I come back from vacation, I will give a prize to the First player to kill the Ender Dragon.`)
            .setImage(`https://cdn.discordapp.com/attachments/846985611453005885/1056566090974638141/2022-12-25_21.35.56.png`)
            .setColor("#2f3136");

        try {
            await interaction.channel.send({
                content: `<@&988710464768860191>`,
                embeds: [embed],
            });
            await interaction.reply({
                content: "Updates Embed Sent!",
                ephemeral: true,
            });
        } catch (error) {
            await interaction.reply({
                content: "Something went wrong! Try Checking the bot's Permission.",
                ephemeral: true
            });
        }
    },
};
