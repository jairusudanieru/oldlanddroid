const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: {
    name: "page2",
  },
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1022113959635075212/rolesinfo-min.png")
      .setColor("#2f3136");
    const embed2 = new EmbedBuilder()
      .setDescription("<@&972887345697284227>\nThey are the supporters on Jairusu's Facebook page. You can get this role if you buy a supporter badge. If Jairusu's YouTube Channel has a membership, you can also get it there when you join.\n\n<@&925997885957500928>\nThey are the richest and coolest people on the entire server. Because of their Boost the server can unlock various perks. Discord will also give them a Boost Icon next to their name on this server. This role can be obtained by boosting the server.\n\n<@&923042163808407622>\nThey are the members who play on the Minecraft Server called PandesalSMP. They have access to PandesalSMP Channels and the Minecraft Server. This role can be obtained by filling out the Minecraft form.\n\n<@&922918899748577281>\nMember with this role have access to all channels on the server (Excluding private channels). This role can only be obtained through verification.")
      .setColor("#2f3136");

    const row = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId("page1")
        .setLabel("Previous Page")
        .setEmoji("<:emoji_previous:1005026535394250782>")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("page3")
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
