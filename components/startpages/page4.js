const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: {
    name: "page4",
  },
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1022113935031275520/createtickets-min.png")
      .setColor("#2f3136");
    const embed2 = new EmbedBuilder()
      .setDescription("<:emoji_dot:1044083172784218132>**Create Support Ticket**\nIf you have a problem and need help, just go to <#1006063058885550200> and create a ticket so the moderators can help you. If you create a ticket for no reason, you will be warned.\n\n<:emoji_dot:1044083172784218132>**You can create a ticket...**\n<:reply_continue_1:1005018627797434449> To report a Member\n<:reply_continue_2:1005018625725452299> To report Server Bugs\n<:reply_continue_2:1005018625725452299> To claim your Server Role\n<:reply_continue_3:1005018623716372520> To ask something Important")
      .setColor("#2f3136");

    const row = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId("page3")
        .setLabel("Previous Page")
        .setEmoji("<:emoji_previous:1005026535394250782>")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("page5")
        .setLabel("Next Page")
        .setEmoji("<:emoji_next:1005026537789202452>")
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
