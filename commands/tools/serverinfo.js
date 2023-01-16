const {
    EmbedBuilder,
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("serverinfo")
        .setDescription("Get the info of Jairusu's Land")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands)
        .setDMPermission(false),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Server Name:** ${interaction.guild.name} \n<:emoji_dot:1044083172784218132>**Total Members:** ${interaction.guild.memberCount} Members \n<:emoji_dot:1044083172784218132>**Nitro Boosts:** ${interaction.guild.premiumSubscriptionCount} Boosts \n<:emoji_dot:1044083172784218132>**Server Level:** Level ${interaction.guild.premiumTier} \n<:emoji_dot:1044083172784218132>**Date Released:** <t:${Math.floor(interaction.guild.createdTimestamp / 1000)}:D>`)
            .setThumbnail(`${interaction.guild.iconURL({ dynamic: true })}`)
            .setColor("#2f3136");

        try {
            await interaction.reply({
                embeds: [embed]
            });
        } catch (error) {
            await interaction.reply({
                content: "Something went wrong! Please report this to Developers.",
                ephemeral: true
            });
        }
    },
};
