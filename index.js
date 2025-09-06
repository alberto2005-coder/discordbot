const Discord = require('discord.js');
const express = require('express');

const client = new Discord.Client({ disableEveryone: true });

const config = require('./config.json');

const chalk = require('chalk');

const fs = require('fs');

client.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
  if (err) throw err;

  let file = files.filter((f) => f.endsWith('.js'));
  if (file.length <= 0) return console.log('There are no js files in the commands folder');

  file.forEach((f) => {
    let props = require(`./commands/${f}`);
    console.log(chalk.yellow(`Attempting to load ${f}`));

    client.commands.set(props.help.name, props);
  });
  console.log(chalk.bold.bgGreen('STELLARGEN Ready!'));
});

process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection:', error);
});

client.on('error', () => console.error);

client.on('warn', () => console.warn);

client.on('ready', async () => {
  console.log(`${client.user.username} is online.`);



  client.user.setActivity('STELLARGEN - $help', { type: 'PLAYING' });

  console.log(`Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);


  // Mantener el servidor web en vivo
  keepAlive();
});

client.on('message', async (msg) => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.PREFIX)) return;
  if (msg.content.indexOf(config.PREFIX) != 0) return;
  if (msg.channel.type == 'dm') return;

  const args = msg.content.slice(config.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let commandFile = require(`./commands/${command}.js`);
  commandFile.run(client, msg, args, config);
});

const server = express();

server.all('/', (req, res) => {
  res.send('<h3><i>El bot está online!</i></h3>');
});

const keepAlive = () => {
  server.listen(6969, () => console.log('El servidor está bastante bien.'));
};

module.exports = keepAlive;
const TOKEN = '';

client.login(TOKEN);