module.exports = {
    data: {
      name: "ticketclose",
    },
    async execute(interaction) {
      const channel = interaction.channel;
      if (interaction.channel.topic === `${interaction.user.id}`) {
        await interaction.reply({
          content: `Closing Ticket in a few seconds...`,
          ephemeral: true,
        });
        await channel.permissionOverwrites.delete(interaction.user.id);
        await interaction.channel.send({
          content: `This ticket was closed by <@${interaction.user.id}>`,
        });
      } else if (interaction.channel.name !== `${interaction.user.id}`) {
        await interaction.reply({
          content: `Only the Ticket Owner can close this ticket!`,
          ephemeral: true,
        });
      }
    },
  };
  