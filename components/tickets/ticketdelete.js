const { EmbedBuilder } = require("discord.js");
const { deletedTicketChannel } = require('../../jsonFiles/config.json');

module.exports = {
    data: {
        name: "ticketdelete",
    },
    async execute(interaction, client) {
        const channel = client.channels.cache.get(deletedTicketChannel);
        const ticket = interaction.channel;
        const embed = new EmbedBuilder()
            .setDescription(`<@${interaction.user.id}> deleted the \`#${interaction.channel.name}\` channel.`)
            .setColor("#b9babf");

        try {
            await interaction.reply({
                content: `Deleting Ticket in a few seconds.`,
                ephemeral: true,
            });
            await channel.send({
                embeds: [embed],
            });
            await ticket.delete();
        } catch (error) {
            await interaction.reply({
                content: "Something went wrong! Please report this to Developers.",
                ephemeral: true
            });
        }
    },
};
