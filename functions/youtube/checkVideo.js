const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
} = require("discord.js");
const Parser = require("rss-parser");
const parser = new Parser();
const fs = require("fs");
const {
    contentPingRoleId
} = require("../../jsonFiles/config.json")

module.exports = (client) => {
    client.checkVideo = async () => {
        const data = await parser
            .parseURL(`https://youtube.com/feeds/videos.xml?channel_id=UC8VdFEhDbqv0ZeWGz5tmV_g`)
            .catch(console.error);

        const rawData = fs.readFileSync(`${__dirname}/../../jsonFiles/youtube.json`);
        const jsonData = JSON.parse(rawData);

        if (jsonData.id !== data.items[0].id) {
            fs.writeFileSync(
                `${__dirname}/../../jsonFiles/youtube.json`,
                JSON.stringify({ id: data.items[0].id }, null, 2)
            );

            const channel = await client.channels
                .fetch("1043329677516877886")
                .catch(console.error);

            const { title, link, id } = data.items[0];
            const embed = new EmbedBuilder()
                .setDescription(`<:emoji_contents:1005004303121010749> **New Video: [${title}](${link})**`)
                .setThumbnail(`https://img.youtube.com/vi/${id.slice(9)}/maxresdefault.jpg`)
                .setColor("#2f3136");

            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setLabel("Watch Video")
                    .setStyle(ButtonStyle.Link)
                    .setEmoji("<:emoji_launch:1009862603733991474>")
                    .setURL(link)
            );

            await channel
                .send({
                    content: `Hey <@&${contentPingRoleId}>, Jairusu Uploaded a New Video!\n${link}`,
                    /*embeds: [embed],
                    components: [row],*/
                })
                .catch(console.error);
        }
    };
};
