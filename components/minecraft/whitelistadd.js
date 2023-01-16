const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require("discord.js");
const {
    smpRoleId,
    minecraftChannel,
} = require("../../jsonFiles/config.json");

module.exports = {
    data: {
        name: "whitelistadd",
    },
    async execute(interaction, client) {
        const userId = interaction.message.embeds[0].footer.text;
        const channel = client.channels.cache.get(minecraftChannel);
        const member = await interaction.guild.members.fetch(userId);

        const row = new ActionRowBuilder().setComponents(
            new ButtonBuilder()
                .setCustomId("whitelistadd")
                .setLabel("Added to Whitelist")
                .setEmoji("<:emoji_circleplus:1012348409769902080>")
                .setStyle(ButtonStyle.Secondary)
                .setDisabled(true)
        );

        try {
            await interaction.update({
                components: [row]
            })
            await interaction.followUp({
                content: `Adding to Whitelist...`,
                ephemeral: true
            });
            member.roles.add(smpRoleId);
            await interaction.followUp({
                content: `Added <@${userId}> to the Whitelist!`,
                ephemeral: true
            });
            await channel.send({
                content: `Welcome to PandesalSMP, <@${userId}>!`
            })
        } catch (error) {
            await interaction.reply({
                content: "Something went wrong!",
                ephemeral: true
            });
        }
    },
};
