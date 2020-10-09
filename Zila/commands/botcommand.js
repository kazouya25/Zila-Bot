const Enmap1 = require("enmap");
const db = new Enmap1({name: "Taxes"});
const Discord = require('discord.js');
const moment = require('moment');
const { prefix, devs, devs1 } = require("../config");
const { Client, RichEmbed } = require("discord.js");
const client = new Client({ disableEveryone: true });

const botCommand = (message) => {
  if (message.content.startsWith(prefix + "bot")) {
    if (!message.channel.guild)
      return message.channel.send(` | This Command is used only in servers!`);
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setThumbnail(
        "https://farm5.staticflickr.com/4836/39891228403_12f092a56a_o.gif"
      )
      .addField(":date:**Created On**", `**2020 / 09 / 2**`, true)
      .addField(
        ":high_brightness:**Sup Server **",
        `**https://cutt.us/supser**`,
        true
      )
      .addField(":infinity:**Invite bot**", `**https://cutt.us/invbot**`, true)
      .addField(":sparkle:**Servers**", `**${client.guilds.size}**`, true)
      .addField(
        ":signal_strength: **Bot Ping**  ",
        ` ${Math.round(client.ping)}` + " ms",
        true
      )
      .addField(
        " :regional_indicator_s: **Servers**                  ",
        ` ${client.guilds.size}`,
        true
      )
      .addField(":abacus: **Channels**  ", ` ${client.channels.size} `, true)
      .addField(" :family_mwgg: **Users**   ", ` ${client.users.size} `, true)
      .addField(":robot: **Bot Name**   ", ` ${client.user.tag} `, true)
      .addField(
        "RAM Usage",
        `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`,
        true
      )
      .addField("My Prefix : ", `[ ${prefix} ]`, true)
      .addField(
        ":man_technologist: **Bot dev**   ",
        ` <@${devs}>\n <@${devs1}> `,
        true
      )
      .setImage(
        "https://media1.tenor.com/images/83198d1571622bf5bbc0e38206b75e8d/tenor.gif?itemid=13343470"
      )

      .setColor("RANDOM");
    message.channel.sendEmbed(embed);
  }
};

module.exports = botCommand;