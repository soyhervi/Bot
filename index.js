const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

app.use(express.static('public'));
app.listen(3000, () => console.log('Dashboard running on port 3000'));

bot.on('ready', () => console.log(`Logged in as ${bot.user.tag}`));
bot.login(process.env.DISCORD_TOKEN || 'your-bot-token');
