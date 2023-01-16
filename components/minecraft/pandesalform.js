const {
    ActionRowBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
} = require("discord.js");
const buttonCooldown = new Set();

module.exports = {
    data: {
        name: "pandesalform",
    },
    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId(`pandesalform`)
            .setTitle(`MineraftSMP Application Form`);

        const a1 = new TextInputBuilder()
            .setCustomId("1")
            .setLabel("What is your Name?")
            .setPlaceholder("Write text here")
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const a2 = new TextInputBuilder()
            .setCustomId("2")
            .setLabel("What is your Minecraft Username?")
            .setPlaceholder("Write text here")
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const a3 = new TextInputBuilder()
            .setCustomId("3")
            .setLabel("What Edition are you Using?")
            .setPlaceholder("Minecraft Java | Bedrock | PE")
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const a4 = new TextInputBuilder()
            .setCustomId("4")
            .setLabel("If using Minecraft Java, Premium or Cracked?")
            .setPlaceholder("Minecraft Premium | Cracked | Bedrock")
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        const a5 = new TextInputBuilder()
            .setCustomId("5")
            .setLabel("Why do you want to Join our Minecraft SMP?")
            .setPlaceholder("Write text here")
            .setRequired(true)
            .setStyle(TextInputStyle.Paragraph);

        const ar1 = new ActionRowBuilder().addComponents(a1);
        const ar2 = new ActionRowBuilder().addComponents(a2);
        const ar3 = new ActionRowBuilder().addComponents(a3);
        const ar4 = new ActionRowBuilder().addComponents(a4);
        const ar5 = new ActionRowBuilder().addComponents(a5);

        modal.addComponents(ar1, ar2, ar3, ar4, ar5);

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
            }, 60000);
        }
    },
};  