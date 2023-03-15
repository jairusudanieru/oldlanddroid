const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: {
    name: "page5",
  },
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1076904446598053938/hooray.png")
      .setColor("#2f3136");
    const embed2 = new EmbedBuilder()
      .setDescription("<:emoji_dot:1044083172784218132>**Hooray... you made it!**\nAgain, welcome to Jairusu's Land!. You can now send message in <#923053506410209381> and introduce yourself. If you don't see this channel, you may not be verified yet. So go to the <#962981980553764894> channel first to verify.")
      .setColor("#2f3136");

    const row = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId("page4")
        .setLabel("Previous Page")
        .setEmoji("<:emoji_previous:1005026535394250782>")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("disabled")
        .setLabel("Previous Page")
        .setEmoji("<:emoji_next:1005026537789202452>")
        .setDisabled(true)
        .setStyle(ButtonStyle.Secondary)
    );

    await interaction.update({
      content: "",
      embeds: [embed, embed2],
      components: [row],
      ephemeral: true,
    });
  },
};
