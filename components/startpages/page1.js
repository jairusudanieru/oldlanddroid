const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: {
    name: "page1",
  },
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1022113959635075212/rolesinfo-min.png")
      .setColor("#2f3136");
    const embed2 = new EmbedBuilder()
      .setDescription("<:icon_dot:973828580272402444>**Server Roles Information**\nWhat are the roles on the server, what do they do and how do you get them?\n\n<@&937810197123072060>\nThe Custom Discord bots Jairusu made specifically for this server. This role cannot be obtained.\n\n<@&923040228657209364>\nThey keep the peace in the whole server and help the members if they have a problem. They are not perfect so they can make mistakes too. This role is only given to people trusted by Administrators.\n\n<@&923042525407752202>\nThey are helpful artificial intelligence that can perform several useful tasks on our server automatically. That includes banning troublemakers, moderating the discussion, playing music to our server and etc.")
      .setColor("#2f3136");

    const row = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId("disabled")
        .setLabel("Previous Page")
        .setEmoji("<:emoji_previous:1005026535394250782>")
        .setDisabled(true)
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("page2")
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
