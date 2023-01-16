const {
    EmbedBuilder,
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Get the Bot's Ping")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setAuthor({
                name: `${client.user.tag}`,
                iconURL: `${client.user.displayAvatarURL()}`,
            })
            .setDescription(`<:emoji_dot:1044083172784218132>**Websocket heartbeat:** ${client.ws.ping}ms`)
            .setColor("#2f3136");

        try {
            await interaction.reply({
                embeds: [embed]
            });
        } catch (error) {
            await interaction.reply({
                content: "Something went wrong! Please report this to Developers.",
                ephemeral: true
            });
        }
    },
};
