const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("news")
        .setDescription("The News Embed")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setDescription(`**<:emoji_dot:1044083172784218132>New Support Tickets!**\nYooo... I made a Simple Ticket System that you can use if you want to report a member, ask a question, or say something else to the Moderators. It's not as advanced as other Discord Ticket Bots but it works HAHAHA`)
            .setImage(`https://cdn.discordapp.com/attachments/960438729636466688/1010927856110538822/tickets.png`)
            .setColor(`#b9babf`);

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel("Ticket Channel")
                .setEmoji("<:emoji_launch:1009862603733991474>")
                .setURL("https://discord.com/channels/922903824631472160/1006063058885550200")
                .setStyle(ButtonStyle.Link)
        );

        try {
            await interaction.channel.send({
                content: `<@&923041723419086878>`,
                embeds: [embed],
                components: [row],
            });
            await interaction.reply({
                content: "News Embed Sent!",
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
