const {
    verifiedRoleId,
} = require("../../jsonFiles/config.json");

module.exports = {
    data: {
        name: "verifiedrole",
    },
    async execute(interaction) {
        const haveVerifiedRole = interaction.member.roles.cache.has(verifiedRoleId);

        if (!haveVerifiedRole) {
            await interaction.member.roles.add(verifiedRoleId);
            await interaction.reply({
                content: `You are now Verified and got the <@&${verifiedRoleId}> role.`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        } else {
            await interaction.reply({
                content: `You are already Verified!`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        }
    },
};
