const { PermissionFlagsBits } = require("discord.js");
const { verifiedRoleId } = require("../../jsonFiles/config.json");
const buttonCooldown = new Set();

module.exports = {
    data: {
        name: "privatevc",
    },
    async execute(interaction) {
        const channel = await interaction.guild.channels.fetch(interaction.member.voice.channelId);
        const members = [...channel.members].map((player) => player[1].user.id);

        if (buttonCooldown.has(interaction.user.id)) {
            await interaction.reply({
                content: "Please wait 1 minute before using this button again.",
                ephemeral: true,
            });
        } else {
            if (interaction.channel.permissionsFor(verifiedRoleId).has(PermissionFlagsBits.ViewChannel)) {
                await interaction.channel.permissionOverwrites.edit(verifiedRoleId, {
                    ViewChannel: false,
                    SendMessages: true,
                    EmbedLinks: true,
                    AttachFiles: true,
                    AddReactions: true,
                    UseExternalEmojis: true,
                    ReadMessageHistory: true,
                    Connect: true,
                    Speak: true,
                    Stream: true,
                    UseVAD: true,
                })
                await interaction.reply({
                    content: `<@${interaction.user.id}> sets the Channel Visibility to: Private`,
                    allowedMentions: {
                        parse: [],
                    },
                })
            } else {
                await interaction.channel.permissionOverwrites.edit(verifiedRoleId, {
                    ViewChannel: true,
                })
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