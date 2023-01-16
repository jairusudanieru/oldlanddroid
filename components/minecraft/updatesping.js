const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
} = require("discord.js");

module.exports = {
    data: {
        name: "updatesping",
    },
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage("https://cdn.discordapp.com/attachments/1012234151769931817/1022113960847229029/updatesping-min.png")
            .setColor("#2f3136");
        const embed2 = new EmbedBuilder()
            .setDescription("<:emoji_dot:1044083172784218132>**Updates Ping Role**\nIf you want to be notified whenever there are updates to the server, please click the button to be given the <@&988710464768860191> Role. Just press the button again if you want to remove the role.")
            .setColor("#2f3136");

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId("updatesrole")
                .setLabel("Updates Role")
                .setEmoji("<:emoji_analytics:1043140083462717490>")
                .setStyle(ButtonStyle.Secondary)
        );
        await interaction.reply({
            embeds: [embed, embed2],
            components: [row],
            ephemeral: true
        });
    },
};
