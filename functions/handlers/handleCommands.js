const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const { token, clientId } = require("../../jsonFiles/config.json")

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs
            .readdirSync(`./commands`);
        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`./commands/${folder}`)
                .filter((file) => file.endsWith(".js"));

            const { commands, commandArray } = client;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                console.log(`The command "${command.data.name}" has been successfully reloaded`);
            }
        }

        const rest = new REST({ version: '9' }).setToken(token);
        try {
            console.log('Started refreshing app commands.')
            await rest.put(
                Routes.applicationCommands(clientId), {
                body: client.commandArray,
            });
            console.log('Successfully reloaded app commands.')
        } catch (error) {
            console.error(error);
        }
    };
};