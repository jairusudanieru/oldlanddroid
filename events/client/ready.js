const { ActivityType } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        client.user.setPresence({
            activities: [{
                name: 'Land Citizens',
                type: ActivityType.Listening
            }],
            status: 'online'
        });
        console.log(`Ready! logged in as ${client.user.tag}`)

        setTimeout(client.checkVideo, 60 * 1000);
    }
}