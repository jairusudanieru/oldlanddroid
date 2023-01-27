const {
    EmbedBuilder,
    PermissionFlagsBits,
    SlashCommandBuilder,
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Get help about my commands")
        .setDefaultMemberPermissions(PermissionFlagsBits.UseApplicationCommands)
        .addSubcommand(subcommand =>
            subcommand
                .setName('memberinfo')
                .setDescription('Help about /memberinfo'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('ping')
                .setDescription('Help about /ping'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('serverinfo')
                .setDescription('Help about /serverinfo'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('sourcecode')
                .setDescription('Help about /sourcecode'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('pandesalform')
                .setDescription('Help about /pandesalform')),
    async execute(interaction) {
        const help = interaction.options.getSubcommand()
        const memberinfo = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Member Info Command**\nThis command displays the Information for the selected member. This information includes the member's Username, ID, Creation Date, and Join Date.`)
            .setColor(`#2f3136`)
        const ping = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Ping Command**\nThis command displays Land Droid's Current Ping.`)
            .setColor(`#2f3136`)
        const serverinfo = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Server Info Command**\nThis command displays the Information about the server. This information includes the server's Name, Total Members, Nitro Boosts, Server Level, and Release Date.`)
            .setColor(`#2f3136`)
        const sourcecode = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Source Code Command**\nThis command displays the Github Repository Link for Land Droid's Source Code.`)
            .setColor(`#2f3136`)
        const pandesalform = new EmbedBuilder()
            .setDescription(`<:emoji_dot:1044083172784218132>**Pandesal Form Command**\nThis command displays the PandesalSMP Membership Application Form. The questions here must be answered correctly and truthfully.`)
            .setColor(`#2f3136`)

        try {
            switch (help) {
                case 'memberinfo':
                    await interaction.reply({
                        embeds: [memberinfo]
                    })
                    break;
                case 'ping':
                    await interaction.reply({
                        embeds: [ping]
                    })
                    break;
                case 'serverinfo':
                    await interaction.reply({
                        embeds: [serverinfo]
                    })
                    break;
                case 'sourcecode':
                    await interaction.reply({
                        embeds: [sourcecode]
                    })
                    break;
                case 'pandesalform':
                    await interaction.reply({
                        embeds: [pandesalform]
                    })
                    break;
                default:
                    break;
            }
        } catch (error) {
            await interaction.reply({
                content: "Something went wrong! Please report this to Developers.",
                ephemeral: true
            });
        }
    },
};
