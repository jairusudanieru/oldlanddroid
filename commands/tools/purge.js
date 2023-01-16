const {
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("purge")
        .setDescription("Purge up to 99 messages.")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .setDMPermission(false)
        .addIntegerOption((option) => option
            .setName("amount")
            .setDescription("Number of messages to purge")
            .setRequired(true)),
    async execute(interaction) {
        const amount = interaction.options.getInteger("amount");

        try {
            await interaction.channel.bulkDelete(amount, true)
            await interaction.reply({
                content: `Successfully purged ${amount} messages.`,
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
