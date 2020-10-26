const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  //Ignore Messages that don't start with prefix or are from bots
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  //Split message into command and arguments
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  const classes = ['class-1','class-2'];
  //add class-1 role
  if (command === 'join') {
    if (!classes.includes(args[0])){
      message.channel.send(args[0] + " is not a class.");
      return;
    }
    const role = message.guild.roles.cache.find(role=>role.name===args[0]);
    const member = message.member;
    member.roles.add(role).catch(console.error);
	  message.channel.send('done');
	}
});

client.login(token);
