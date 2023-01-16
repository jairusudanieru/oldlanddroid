const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: {
    name: "page3",
  },
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1022113934431502367/contentrole-min.png")
      .setColor("#2f3136");
    const embed2 = new EmbedBuilder()
      .setDescription("<:emoji_dot:1044083172784218132>**Content Creators Role**\n<@&972432001179222036> actively make different contents for their followers. They are Youtubers, Facebook Streamers, Twitch Streamers, and so on. This role can be obtained if you meet the requirements for Content Creators.\n\n<:emoji_dot:1044083172784218132> **How to get the Content Creator Role?**\nYou must be actively streaming, uploading videos or posting on your page or channel. Share the link of your page or channel in the <#923129486596272140> channel if possible.")
      .addFields(
        {
          name: "**YouTubers:**",
          value:
            "⇀ 1,000+ Subscribers\n⇀ 10,000+ Total Views\n⇀ Account Connected to Discord Account",
          inline: true,
        },
        {
          name: "**Twitch Streamers:**",
          value:
            "⇀ Twitch Affiliate\n⇀ 100+ Followers\n⇀ Account Connected to Discord Account",
          inline: true,
        },
        {
          name: "**Facebook Streamers:**",
          value:
            "⇀ Level Up Streamer\n⇀ 100+ Followers\n⇀ If Possible, have Page link in Discord Bio",
          inline: true,
        }
      )
      .setColor("#2f3136");
      
    const row = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId("page2")
        .setLabel("Previous Page")
        .setEmoji("<:emoji_previous:1005026535394250782>")
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId("page4")
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
