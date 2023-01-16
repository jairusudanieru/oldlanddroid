const { readdirSync } = require("fs");

module.exports = (client) => {
    client.handleComponents = async () => {
        const componentFolders = readdirSync(`./components`);
        for (const folder of componentFolders) {
            const componentFiles = readdirSync(`./components/${folder}`).filter(
                (file) => file.endsWith(".js")
            );

            const { buttons, selectMenus, modals } = client;

            switch (folder) {
                case "buttons":
                    for (const file of componentFiles) {
                        const button = require(`../../components/${folder}/${file}`)
                        buttons.set(button.data.name, button);
                    }
                    break;

                /*case "selectMenus":
                    for (const file of componentFiles) {
                        const menu = require(`../../components/${folder}/${file}`);
                        selectMenus.set(menu.data.name, menu);
                    }
                    break;*/

                case "modals":
                    for (const file of componentFiles) {
                        const modal = require(`../../components/${folder}/${file}`);
                        modals.set(modal.data.name, modal);
                    }
                    break;

                case "tickets":
                    for (const file of componentFiles) {
                        const ticket = require(`../../components/${folder}/${file}`)
                        buttons.set(ticket.data.name, ticket);
                    }
                    break;

                case "minecraft":
                    for (const file of componentFiles) {
                        const pan = require(`../../components/${folder}/${file}`)
                        buttons.set(pan.data.name, pan);
                    }
                    break;

                case "pingroles":
                    for (const file of componentFiles) {
                        const ping = require(`../../components/${folder}/${file}`)
                        buttons.set(ping.data.name, ping);
                    }
                    break;

                case "startpages":
                    for (const file of componentFiles) {
                        const str = require(`../../components/${folder}/${file}`)
                        buttons.set(str.data.name, str);
                    }
                    break;

                default:
                    break;
            }
        }
    };
};