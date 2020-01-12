const Discord = require('discord.js');
const logger = require('./logger');
const auth = require('./auth.json');

const bot = new Discord.Client();

bot.on('ready', () => {
  logger.info('Connected');
  logger.info(`Logged in as: ${bot.user.tag}`);
});

bot.on('message', async (message) => {
  logger.info(message);
});

bot.on('error', (e) => {
  logger.error(`Discord error: ${e.message}`);
  logger.error(e.stack);
});

bot.login(auth.token);
