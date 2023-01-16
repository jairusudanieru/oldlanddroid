const {
    contentPingRoleId,
    verifiedRoleId,
} = require("../../jsonFiles/config.json");

module.exports = {
    data: {
        name: "contentrole",
    },
    async execute(interaction) {
        const haveContentRole = interaction.member.roles.cache.has(contentPingRoleId);
        const haveVerifiedRole = interaction.member.roles.cache.has(verifiedRoleId);

        if (!haveContentRole && haveVerifiedRole) {
            await interaction.member.roles.add(contentPingRoleId);
            await interaction.reply({
                content: `Gave you the <@&${contentPingRoleId}> role!`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        } else if (haveContentRole && haveVerifiedRole) {
            await interaction.member.roles.remove(contentPingRoleId);
            await interaction.reply({
                content: `Removed the <@&${contentPingRoleId}> role from you!`,
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
