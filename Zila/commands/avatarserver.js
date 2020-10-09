const Discord = require('discord.js');
const { prefix } = require("../config");

const AvatarServerCommand = (message) => {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.content === prefix + "avatarserver") {
    const embed = new Discord.RichEmbed()

      .setTitle(`Server Avatar `)
      .setAuthor(`Hosted By : ${message.author.username}`)
      .setColor("RANDOM")
      .setImage(message.guild.iconURL)
      .setFooter(message.guild.name)
      .setURL(message.guild.iconrURL)

      .setTimestamp();

    message.channel.send({ embed });
  }
}

module.exports = AvatarServerCommand;
