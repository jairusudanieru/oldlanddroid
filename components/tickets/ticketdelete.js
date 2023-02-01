const { EmbedBuilder } = require("discord.js");
const { deletedTicketChannel, modRoleId } = require('../../jsonFiles/config.json');

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
        const haveModRole = interaction.member.roles.cache.has(modRoleId);

        try {
            if(haveModRole) {
            await interaction.reply({
                content: `Deleting Ticket in a few seconds.`,
                ephemeral: true,
            });
            await channel.send({
                embeds: [embed],
            });
            await ticket.delete();
        } else {
            await interaction.reply({
                content: "Sorry, only Moderators can Delete Tickets!",
                ephemeral: true
            });
        }
        } catch (error) {
            await interaction.reply({
                content: "Something went wrong! Please report this to Developers.",
                ephemeral: true
            });
        }
    },
};
