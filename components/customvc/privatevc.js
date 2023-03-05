const { PermissionFlagsBits } = require("discord.js");
const { verifiedRoleId } = require("../../jsonFiles/config.json");
const buttonCooldown = new Set();

module.exports = {
    data: {
        name: "privatevc",
    },
    async execute(interaction) {
        if (buttonCooldown.has(interaction.user.id)) {
            await interaction.reply({
                content: "Please wait 1 minute before using this button again.",
                ephemeral: true,
            });
        } else {
            if (interaction.channel.permissionsFor(verifiedRoleId).has(PermissionFlagsBits.ViewChannel)) {
                await interaction.channel.permissionOverwrites.set([{
                    id: verifiedRoleId,
                    deny: [
                        PermissionFlagsBits.ViewChannel,
                    ],
                }])
                await interaction.reply({
                    content: `<@${interaction.user.id}> sets the Channel Visibility to: Private`,
                    allowedMentions: {
                        parse: [],
                    },
                })
            } else {
                await interaction.channel.permissionOverwrites.set([{
                    id: verifiedRoleId,
                    allow: [
                        PermissionFlagsBits.ViewChannel,
                    ],
                }])
                await interaction.reply({
                    content: `<@${interaction.user.id}> sets the Channel Visibility to: Visible`,
                    allowedMentions: {
                        parse: [],
                    },
                })
            }
            buttonCooldown.add(interaction.user.id);
            setTimeout(() => {
                buttonCooldown.delete(interaction.user.id);
            }, 60000);
        }
    },
};
