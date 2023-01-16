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
        .setName("applicationform")
        .setDescription("The Pandesal Form Embed")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/1012234151769931817/1043127319121887252/minecraftform.png`)
            .setColor(`#2f3136`)
        const embed2 = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**PandesalSMP 2nd Season**\nA whitelisted semi-vanilla server. It is a typical Minecraft Survival Multiplayer server that is always online and not a pay to win server. Although our server is currently running Minecraft Java Edition 1.19.2, Bedrock and Pocket Edition players can still join thanks to the Geyser plugin, which makes the server crossplay compatible.\n\n<:emoji_dot:1044083172784218132>**Minecraft Application Form**\nBefore applying to join the server, you must read the Server Rules and complete the form accessible via the button below. You will be accepted based on your responses to the questions. Within a few days, if you have not heard back from us, your application may have been turned down.`)
            .setColor(`#2f3136`)

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("pandesalrules")
                .setLabel("Server Rules")
                .setEmoji("<:emoji_rules:1005004300763811862>")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("pandesalform")
                .setLabel("Application Form")
                .setEmoji("<:emoji_forms:1006209265008123914>")
                .setStyle(ButtonStyle.Secondary)
        );

        try {
            await interaction.channel.send({
                embeds: [embed, embed2],
                components: [row]
            });
            await interaction.reply({
                content: "Form Embed Sent!",
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
