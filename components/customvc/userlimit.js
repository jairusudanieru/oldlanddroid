const {
    ActionRowBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
} = require("discord.js");
const buttonCooldown = new Set();

module.exports = {
    data: {
        name: "userlimit",
    },
    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId(`userlimit`)
            .setTitle(`Set Voice Channel User Limit`);

        const a1 = new TextInputBuilder()
            .setCustomId("1")
            .setLabel("Enter a value 1 to 99")
            .setPlaceholder("Write Value here")
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const ar1 = new ActionRowBuilder().addComponents(a1);

        modal.addComponents(ar1);

        if (buttonCooldown.has(interaction.user.id)) {
            await interaction.reply({
                content: "Please wait 1 minute before using this button again.",
                ephemeral: true,
            });
        } else {
            await interaction.showModal(modal);
            buttonCooldown.add(interaction.user.id);
            setTimeout(() => {
                buttonCooldown.delete(interaction.user.id);
            }, 10000);
        }
    },
};  