const {
    updatesRoleId,
    smpRoleId,
} = require("../../jsonFiles/config.json");


module.exports = {
    data: {
        name: "updatesrole",
    },
    async execute(interaction) {
        const haveUpdatesRole = interaction.member.roles.cache.has(updatesRoleId);
        const haveSMPRole = interaction.member.roles.cache.has(smpRoleId);

        if (!haveUpdatesRole && haveSMPRole) {
            interaction.member.roles.add(updatesRoleId);
            interaction.reply({
                content: `Gave you the <@&${updatesRoleId}> role!`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },

            });
        } else if (haveUpdatesRole && haveSMPRole) {
            interaction.member.roles.remove(updatesRoleId);
            interaction.reply({
                content: `Removed the <@&${updatesRoleId}> role from you!`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        } else {
            interaction.reply({
                content: `You need to have the <@&${smpRoleId}>`,
                ephemeral: true,
                allowedMentions: {
                    parse: [],
                },
            });
        }
    },
};
