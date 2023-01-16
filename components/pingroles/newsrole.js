const {
    newsPingRoleId,
    verifiedRoleId,
} = require("../../jsonFiles/config.json");

module.exports = {
    data: {
        name: "newsrole",
    },
    async execute(interaction) {
        const haveNewsRole = interaction.member.roles.cache.has(newsPingRoleId);
        const haveVerifiedRole = interaction.member.roles.cache.has(verifiedRoleId);

        if (!haveNewsRole && haveVerifiedRole) {
            await interaction.member.roles.add(newsPingRoleId);
            await interaction.reply({
                content: `Gave you the <@&${newsPingRoleId}> role!`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        } else if (haveNewsRole && haveVerifiedRole) {
            await interaction.member.roles.remove(newsPingRoleId);
            await interaction.reply({
                content: `Removed the <@&${newsPingRoleId}> role from you!`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        } else {
            await interaction.reply({
                content: `You need to have the <@&${verifiedRoleId}>`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        }
    },
};
