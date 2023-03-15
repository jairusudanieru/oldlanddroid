const {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
} = require("discord.js");
const {
    modRoleId,
} = require("../../jsonFiles/config.json");

module.exports = {
    data: {
        name: "rules",
    },
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setImage(`https://cdn.discordapp.com/attachments/1012234151769931817/1076904447575343315/serverrules.png`)
            .setColor("#2f3136");

        const embed2 = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**1. Respect Every Member**\nRespect all members on this server, treat them equally respectively regardless of your religious faith, and oppose liking and disliking. Always treat others with respect you want to have in return.\n\n<:emoji_dot:1044083172784218132>**2. Avoid Spamming**\nYou must not spam anything on the server, whether it’s a message, emojis, pictures, or anything necessary or unnecessary. You’re prohibited, not even mistakenly, to perform such acts. Give other members a chance.\n\n<:emoji_dot:1044083172784218132>**3. Avoid Sexual Content**\nThis Discord server is for all ages of people. Sexual content is strictly prohibited. Help us Grow a family community.\n\n<:emoji_dot:1044083172784218132>**4. Use Appropriate Profile Pictures and Nicknames**\nWe don’t allow members to use offensive nicknames, inappropriate profile pictures, e.g., sexual or offensive to religious, political, etc. Further, if our Moderators catch any person having this, they have the right to change nicknames and kick out if you don’t listen to the warning.\n\n<:emoji_dot:1044083172784218132>**5. Follow the Official Discord ToS & Guidelines**\nApart from the rules of this server, take a look at the Official Discord's Terms of Service & Discord Community Guidelines.\n\n<:emoji_dot:1044083172784218132>**★ Important Notes** \nYour presence in this server implies accepting these and all other rules, including all further changes. These changes might be done at any time without notice, it is your responsibility to check for them. Use common sense and refrain from complaining when the <@&${modRoleId}> attempts to maintain a calm and safe environment in the server.`)
            .setColor("#2f3136");

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel("Discord's Terms of Service")
                .setEmoji("<:emoji_launch:1009862603733991474>")
                .setURL("https://discord.com/terms")
                .setStyle(ButtonStyle.Link),

            new ButtonBuilder()
                .setLabel("Discord Community Guidelines")
                .setEmoji("<:emoji_launch:1009862603733991474>")
                .setURL("https://discord.com/guidelines")
                .setStyle(ButtonStyle.Link)
        );

        await interaction.reply({
            embeds: [embed, embed2],
            components: [row],
            ephemeral: true,
        });
    },
};
