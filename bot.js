const Discord = require('discord.js')
const { prefix, token } = require('./config.json')
const client = new Discord.Client()

client.once('ready', () => {
  console.log('Ready!')
})

client.on('message', message => {
  //Ignore Messages that don't start with prefix or are from bots
  if (!message.content.startsWith(prefix) || message.author.bot) return

  //Split message into command and arguments
  const args = message.content.slice(prefix.length).trim().split(/ +/)
  const command = args.shift().toLowerCase()
  const classes = ['me-254','me-402','me-405','me-406','me-409','me-414','me-416','me-431','me-440','me-443','me-451','me-452','me-453','me-464','ce-326','ce-405','ce-422','ce-424','ce-433','ce-434','ce-435','ce-442','ce-443','ce-445','ce-451','ce-463','math-251','me-458','me-450','es-101','chem-105','math-252','es-201','chem-106','math-253','phys-211','es-209','me-321','math-302','phys-212','es-210','es-346','es-301','es-331','me-302','es-341','es-307','me-308','me-334','me-313','me-408','me-486','me-441','esm-450','me-487','me-403','me-415','ge-261','ce-112','ce-334','ce-341','ce-344','ce-432','ce-331','ce-302','esm-422','ce-470','ce-437','ce-438','ce-471']
  //add class roles
  function begins(str)
  {
    return str.startsWith(args[0])
  }
  if (command === 'join')
  {
    if (!classes.includes(args[0]))
    {
      message.channel.send(args[0] + " is not currently a class channel.")
      return
    }
    const role = message.guild.roles.cache.find(role=>role.name===args[0])
    const member = message.member
    member.roles.add(role).catch(console.error)
    message.channel.send('You have joined ' + args[0])
	}
  else if (command === 'leave')
  {
    if(!classes.includes(args[0]))
    {
      message.channel.send(args[0] + " is not currently a class channel.")
      return
    }
    const role = message.guild.roles.cache.find(role=>role.name===args[0])
    const member = message.member
    member.roles.remove(role).catch(console.error)
    message.channel.send('You have left ' + args[0])
  }
  else if (command === 'help')
  {
    message.channel.send('!join CLASS-CODE')
    message.channel.send('!leave CLASS-CODE')
    message.channel.send('!help')
  }
  else if (command === 'classes')
  {
    if(typeof args[0] !== 'undefined')
    {
      message.channel.send(classes.sort().filter(begins))
    }
    else
    {
      message.channel.send(classes.sort())
    }
  }
  else
  {
    message.channel.send(command + ' is not an acceptable command')
  }
})

client.login(token)
