const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
} = require("discord.js");

module.exports = {
    data: {
        name: "pandesaladdress",
    },
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/1012234151769931817/1022113960058687488/serveraddress-min.png`)
            .setColor("#2f3136");
        const embed2 = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Minecraft Java Edition**\nServer Address: pandesalsmp.mcph.co\nCustom Address: play.pandesalsmp.tk:16399\n\n<:emoji_dot:1044083172784218132>**Minecraft Bedrock & PE**\nServer Address: play.pandesalsmp.tk\nServer Port: 23504\n\n<:emoji_dot:1044083172784218132>**Minecraft Server Hosting**\nIf you want to order a **Minecraft Server** in McProHosting, you can use the link https://mcprohosting.com/order?aff=497 and use the code **THUGDOG** for a 25% discount!`)
            .setColor("#2f3136");

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel("Server Hosting")
                .setEmoji("<:emoji_server:1043138698881019995>")
                .setStyle(ButtonStyle.Link)
                .setURL("https://mcprohosting.com/order?aff=497")
        );

        await interaction.reply({
            embeds: [embed, embed2],
            components: [row],
            ephemeral: true
        });
    },
};
