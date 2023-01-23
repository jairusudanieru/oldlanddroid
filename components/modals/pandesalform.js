const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
const {
  applicationChannel
} = require("../../jsonFiles/config.json");

module.exports = {
  data: {
    name: `pandesalform`,
  },
  async execute(interaction, client) {
    const channel = client.channels.cache.get(applicationChannel);
    const ans1 = `${interaction.fields.getTextInputValue("1")}`
    const ans2 = `${interaction.fields.getTextInputValue("2")}`
    const ans3 = `${interaction.fields.getTextInputValue("3")}`
    const ans4 = `${interaction.fields.getTextInputValue("4")}`
    const ans5 = `${interaction.fields.getTextInputValue("5")}`

    const embed = new EmbedBuilder()
      .setDescription(`**Minecraft Application Form**\nForm submitted by "<@${interaction.user.id}>"\n\n**Main Information**\nNickname or Name: "${ans1}"\nMinecraft Username: "${ans2}"\nMinecraft Edtion: "${ans3}"\nPremium or Cracked: "${ans4}"\n\n**Reason for Joining**\n"${ans5}"`)
      .setThumbnail(`https://cdn.discordapp.com/attachments/1012234151769931817/1022113962801758258/wumpus-min.png`)
      .setTimestamp()
      .setFooter({ text: `${interaction.user.id} ` })
      .setColor("#2f3136");

    const row = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId("whitelistadd")
        .setLabel("Add to Whitelist")
        .setEmoji("<:emoji_circleplus:1012348409769902080>")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("whitelistdeny")
        .setLabel("Reject Application")
        .setEmoji("<:emoji_circlecross:1067128052615753748>")
        .setStyle(ButtonStyle.Secondary)
    );

    try {
      await channel.send({
        embeds: [embed],
        components: [row]
      });
      await interaction.reply({
        content: `Application Form has been submitted!`,
        ephemeral: true,
      });
    } catch (error) {
      await interaction.reply({
        content: "Something went wrong! Please Try again Later.",
        ephemeral: true
      });
    }
  },
};
