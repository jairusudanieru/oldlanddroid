const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
} = require("discord.js");

module.exports = {
    data: {
        name: "assign",
    },
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/1012234151769931817/1076904445490774186/assignroles.png`)
            .setColor("#2f3136");
        const embed2 = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Assign Ping Roles**\nTo make sure you are only notified for topics you want to know about. You can choose multiple roles if you want. Please kindly choose when or on what occasion you'd like to be pinged.\n\n<:emoji_dot:1044083172784218132>**Land Droid Note**\nIf you press one of the buttons and no message appears, the bot might be offline so please just try again later. Thank you!`)
            .setColor("#2f3136");

        const row = new ActionRowBuilder().setComponents(
            new ButtonBuilder()
                .setCustomId("newsrole")
                .setLabel("News Ping")
                .setEmoji("<:emoji_news:1005004305385926716>")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("contentrole")
                .setLabel("Content Ping")
                .setEmoji("<:emoji_contents:1005004303121010749>")
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId("allroles")
                .setLabel("All Pings")
                .setEmoji("<:emoji_bell:1005014186843193395>")
                .setStyle(ButtonStyle.Secondary)
        );

        await interaction.reply({
            embeds: [embed, embed2],
            components: [row],
            ephemeral: true
        });
    },
};
