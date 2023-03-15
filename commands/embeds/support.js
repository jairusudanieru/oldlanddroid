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
        .setName("support")
        .setDescription("The Support Embed")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/1012234151769931817/1076904446052810813/createtickets.png`)
            .setColor("#2f3136");
        const embed2 = new EmbedBuilder()
            .setDescription(`**<:emoji_dot:1044083172784218132>Create Support Ticket**\nIf you have a problem and need help, just create a ticket so the moderators can help you. If you create a ticket for no reason, you will be warned.\n\n**<:emoji_dot:1044083172784218132>You can create a ticket...**\n<:reply_continue_1:1005018627797434449> To report a Member\n<:reply_continue_2:1005018625725452299> To report Server Bugs\n<:reply_continue_2:1005018625725452299> To claim your Server Role\n<:reply_continue_3:1005018623716372520> To ask something Important`)
            .setColor("#2f3136");
            
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel("Ask Questions")
                .setCustomId("ticketquestion")
                .setEmoji("<:emoji_personheadphones:1012423827499778209>")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setLabel("Report Users")
                .setCustomId("ticketreport")
                .setEmoji("<:emoji_personmessage:1012423829152346143>")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setLabel("Other Concerns")
                .setCustomId("ticketothers")
                .setEmoji("<:emoji_mail:1010906227007574046>")
                .setStyle(ButtonStyle.Secondary)
        );

        try {
            await interaction.channel.send({
                embeds: [embed, embed2],
                components: [row],
            });
            await interaction.reply({
                content: "Support Embed Sent!",
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
