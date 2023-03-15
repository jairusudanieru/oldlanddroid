const { ChannelType } = require('discord.js');
const { ownerId, modRoleId } = require('../../jsonFiles/config.json');

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        const bot = message.author.bot;
        const dm = message.channel.type == ChannelType.DM;

        if (!bot && message.content.includes(`<@${client.user.id}>`)) {
            message.reply('You can use `/` to see the commands.');
        } else if (!bot && !dm && message.content.includes(`<@${ownerId}>`) && !message.member.roles.cache.has('973634677334224957')) {
            message.reply('Jairusu will reply in a moment, please give the reason why you mentioned him. If you did it already, great!')
        } else if (!bot && !dm && message.mentions.roles.has(modRoleId)) {
            message.reply('If you need help from the moderators, please create a ticket in the <#1006063058885550200> channel.')
        }
    }
}
