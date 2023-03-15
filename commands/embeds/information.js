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
        .setName("information")
        .setDescription("The Information Embed")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/1012234151769931817/1076904446832951336/information.png`)
            .setColor(`#2f3136`);
        const embed2 = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Welcome to Jairusu's Official Discord Server!**\nThank you so much for joining. This server is completely based around Jairusu to allow his followers and friends to communicate with each other.\n\n<:emoji_dot:1044083172784218132>**Server Information**\n<:reply_continue_1:1005018627797434449> Owned by: <@846982740377075763>\n<:reply_continue_3:1005018623716372520> Release Date: <t:${Math.floor(interaction.guild.createdTimestamp / 1000)}:D>`)
            .setColor(`#2f3136`);
            
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("rules")
                .setLabel("Server Rules")
                .setEmoji("<:emoji_rules:1005004300763811862>")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("assign")
                .setLabel("Assign Roles")
                .setEmoji("<:emoji_paint:1009852243610194021>")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("start")
                .setLabel("Get Started")
                .setEmoji("<:emoji_backpack:1005010361570820096>")
                .setStyle(ButtonStyle.Secondary)
        );

        try {
            await interaction.channel.send({
                embeds: [embed, embed2],
                components: [row]
            });
            await interaction.reply({
                content: "Welcome Embed Sent!",
                ephemeral: true
            });
        } catch (error) {
            await interaction.reply({
                content: "Something went wrong! Try Checking the bot's Permission.",
                ephemeral: true
            });
        }
    },
};
