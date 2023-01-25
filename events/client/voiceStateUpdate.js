const {
    ChannelType,
    PermissionFlagsBits,
} = require("discord.js");
const {
    verifiedRoleId,
    voiceCategory,
    createVoiceChannel
} = require("../../jsonFiles/config.json")
const fs = require("fs")

module.exports = {
    name: "voiceStateUpdate",
    async execute(oldState, newState, client) {
        const oldChannel = oldState.channel;
        const newChannel = newState.channel;

        if (newState.channelId == createVoiceChannel) {
            const vcChannel = await newState.guild.channels.create({
                name: `${newState.member.displayName}'s VC`,
                type: ChannelType.GuildVoice,
                parent: `${voiceCategory}`,
                permissionOverwrites: [
                    {
                        id: verifiedRoleId,
                        allow: [
                            PermissionFlagsBits.ViewChannel,
                            PermissionFlagsBits.SendMessages,
                            PermissionFlagsBits.EmbedLinks,
                            PermissionFlagsBits.AttachFiles,
                            PermissionFlagsBits.AddReactions,
                            PermissionFlagsBits.UseExternalEmojis,
                            PermissionFlagsBits.ReadMessageHistory,
                            PermissionFlagsBits.Connect,
                            PermissionFlagsBits.Speak,
                            PermissionFlagsBits.Stream,
                        ],
                    },
                    {
                        id: newState.member.user.id,
                        allow: [
                            PermissionFlagsBits.ManageChannels,
                            PermissionFlagsBits.MuteMembers,
                        ],
                    },
                ],
            });
            await newState.setChannel(vcChannel);
        }

        const values = fs.readFileSync(`${__dirname}/../../jsonFiles/config.json`);
        const list = JSON.parse(values);
        const voiceChannels = list.mainVoiceChannels;

        if (oldState.channel?.type == ChannelType.GuildStageVoice) return;

        if (!voiceChannels.includes(oldState.channelId)) {
            if (oldChannel != null && oldChannel.members.size < 1) {
                if (!newChannel || oldChannel.id != newChannel.id) {
                    await oldState.channel.delete();
                }
            }
        }
    },
};
