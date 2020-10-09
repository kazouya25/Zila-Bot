const Discord = require('discord.js');
const { prefix, devs, devs1 } = require("./config");
const { Client, RichEmbed } = require("discord.js");
const client = new Client({ disableEveryone: true });


const moveall =  ( message) => {
  if (message.content.toLowerCase() === prefix + "move all") {
    message.delete(4000);
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MOVE_MEMBERS")) return;
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return;
    if (message.member.voiceChannel == null) return;
    var author = message.member.voiceChannelID;
    var m = message.guild.members.filter(m => m.voiceChannel);
    message.guild.members
      .filter(m => m.voiceChannel)
      .forEach(m => {
        m.setVoiceChannel(author);
      });
    message.channel
      .send("`Moved All Voice Members To Your Channel`")
      .then(m => m.delete(4000));
  }
};

module.exports = moveall;