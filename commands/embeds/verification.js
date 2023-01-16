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
        .setName("verification")
        .setDescription("The Verification Embed")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/1012234151769931817/1022113961258258442/verification-min.png`)
            .setColor("#2f3136");
        const embed2 = new EmbedBuilder()
            .setDescription(`**<:emoji_dot:1044083172784218132>Please Verify Yourself**\nThis server requires you to verify yourself to see other channels, you can simply verify by clicking the "Verify Me" button below. If that didn't worked, Direct Message an active Staff member for help.`)
            .setColor("#2f3136");
            
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("verifiedrole")
                .setLabel("Verify Me")
                .setEmoji("<:mcommands:1033288697975689266>")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("rules")
                .setLabel("Server Rules")
                .setEmoji("<:emoji_rules:1005004300763811862>")
                .setStyle(ButtonStyle.Secondary)
        );

        try {
            await interaction.channel.send({
                embeds: [embed, embed2],
                components: [row]
            });
            await interaction.reply({
                content: "Verification Embed Sent!",
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
