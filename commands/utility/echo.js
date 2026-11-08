const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Posts a message to the chat')
        .addStringOption((option) => option.setName('message').setDescription('The message to post to the chat').setRequired(true)),

    async execute(interaction) {
        const message = interaction.options.getString('message');
        await interaction.reply({ content: 'Sent!', flags: MessageFlags.Ephemeral });
        await interaction.channel.send(`${message}`);
    }
}