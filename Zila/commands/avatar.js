const Enmap1 = require("enmap");
const db = new Enmap1({name: "Taxes"});
const Discord = require('discord.js');
const moment = require('moment');
const { prefix} = require("./config");
const { Client, RichEmbed } = require("discord.js");
const client = new Client({ disableEveryone: true });




const avatarCommand = (message) => {
  const messageArray = message.content.split(" ");

  if (
    messageArray[0] === prefix + "avtar" ||
    messageArray[0] === prefix + "avt" ||
    messageArray[0] === prefix + "a"
  ) {
    // rest here
    if (message.author.bot || message.channel.type == "dm") return;
    var args = message.content.split(" ")[1];
    if (args && args.startsWith("<@") && args.endsWith(">")) {
      args = args.slice(2, -1);

      if (args.startsWith("!")) {
        args = args.slice(1);
      }
    }
    var avt = args || message.author.id;
    client
      .fetchUser(avt)
      .then(user => {
        avt = user;
        let avtEmbed = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
          .setImage(avt.avatarURL)
          .setFooter(`Avatar`, message.client.user.avatarURL);
        message.channel.send(avtEmbed);
      })
      .catch(() => message.channel.send(`Please Type member ID`));
  }
};


module.exports = avatarCommand;