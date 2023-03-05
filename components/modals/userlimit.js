const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: {
      name: `userlimit`,
    },
    async execute(interaction, client) {
      const ans1 = `${interaction.fields.getTextInputValue("1")}`
  
      try {
        await interaction.channel.setUserLimit(ans1)
        await interaction.reply({
          content: `<@${interaction.user.id}> sets the User Limit to: ${ans1}`
        })
      } catch (error) {
        await interaction.reply({
          content: "Something went wrong! Please Enter a valid number and try again Later.",
          ephemeral: true
        });
      }
    },
  };
  