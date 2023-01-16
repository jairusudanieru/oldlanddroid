const { token } = require("./jsonFiles/config.json");
const {
    Client,
    Collection,
    GatewayIntentBits,
    Partials,
} = require("discord.js");
const fs = require("fs");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates
    ],
    allowedMentions: {
        parse: ["users", "roles"],
    },
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

client.commandArray = [];
client.modals = new Collection();
client.buttons = new Collection();
client.commands = new Collection();
client.selectMenus = new Collection();

const functionFolders = fs.readdirSync(`./functions`);
for (const folder of functionFolders) {
    const functionFiles = fs
        .readdirSync(`./functions/${folder}`)
        .filter((file) => file.endsWith(".js"));
    for (const file of functionFiles)
        require(`./functions/${folder}/${file}`)(client);
}

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(token);
