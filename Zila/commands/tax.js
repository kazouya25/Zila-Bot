const Enmap1 = require("enmap");
const db = new Enmap1({name: "Taxes"});
const Discord = require('discord.js');
const moment = require('moment');
const { prefix, devs, devs1 } = require("./config");
const { Client, RichEmbed } = require("discord.js");
const client = new Client({ disableEveryone: true });

const taxcommand = ( message ) => {
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
   if (message.content.startsWith(prefix + "wa")) {
    let args2 = parseInt(args);
    let tax = Math.floor((args2 * 20) / 19 + 1);
    let tax2 = Math.floor((args2 * 20) / 19 + 1 - args2);
    let tax3 = Math.floor((tax2 * 20) / 19 + 1);
    let tax4 = Math.floor(tax2 + tax3 + args2);
    let errorembed3 = new Discord.RichEmbed()
      .setTitle(`**:information_source: Error**`)
      .setColor("#f04747")
      .setDescription(`**It Must be a number**`)
      .setFooter(`${client.user.username}`);
    if (!args2) return message.channel.sendEmbed(errorembed3);
    let errorembed2 = new Discord.RichEmbed()
      .setTitle(`**:information_source: Error**`)
      .setColor("#f04747")
      .setDescription(`**Must Be A Number**`)
      .setFooter(`${client.user.username}`);
    if (isNaN(args2)) return message.channel.sendEmbed(errorembed2);
    let errorembed = new Discord.RichEmbed()
      .setTitle(`**:information_source: Error**`)
      .setColor("#f04747")
      .setDescription(`**Must The Number Larger 1**`)
      .setFooter(`${client.user.username}`);
    if (args2 < 1) return message.channel.sendEmbed(errorembed);
    let embed3 = new Discord.RichEmbed()
      .setTitle(`**:credit_card:  The Final Cost Is :**`)
      .setColor("#43b581")
      .setDescription(`1`)
      .setFooter(`${client.user.username}`);
    if (args2 == 1) return message.channel.sendEmbed(embed3);
    let embed = new Discord.RichEmbed()
      .setTitle(`**:credit_card:  The Final Cost Is :**`)
      .setThumbnail(
        "https://sgp1.digitaloceanspaces.com/cosmosgroup/news/4875831_New%20Project.jpg"
      )
      .setImage(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7vYOFm7Chgwg3VGCMMJohUcmFxNCfhna1_A&usqp=CAU"
      )
      .setColor("#43b581")
      .setDescription(
        `||----------------------------------------||\n
**:handshake: Broker tax** : **${tax2}**\n
||----------------------------------------||\n
                      **:robot: bot tax** : **${tax3}**\n
||----------------------------------------||\n
                      **:ballot_box: amount transferred to broker** : **${tax4}**\n
||----------------------------------------||\n
                      **:airplane_arriving: arrived to user** : **${args2}**\n
||----------------------------------------||`
      )
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
  }

  if (message.content.startsWith(prefix + "tax")) {
    let args2 = parseInt(args);
    let tax = Math.floor((args2 * 20) / 19 + 1);
    let tax2 = Math.floor((args2 * 20) / 19 + 1 - args2);
    let tax3 = Math.floor((tax2 * 20) / 19 + 1);
    let tax4 = Math.floor(tax2 + tax3 + args2);
    let errorembed3 = new Discord.RichEmbed()
      .setTitle(`**:information_source: Error**`)
      .setColor("#f04747")
      .setDescription(`**It Must be a number**`)
      .setFooter(`${client.user.username}`);
    if (!args2) return message.channel.sendEmbed(errorembed3);
    let errorembed2 = new Discord.RichEmbed()
      .setTitle(`**:information_source: Error**`)
      .setColor("#f04747")
      .setDescription(`**Must Be A Number**`)
      .setFooter(`${client.user.username}`);
    if (isNaN(args2)) return message.channel.sendEmbed(errorembed2);
    let errorembed = new Discord.RichEmbed()
      .setTitle(`**:information_source: Error**`)
      .setColor("#f04747")
      .setDescription(`**Must The Number Larger 1**`)
      .setFooter(`${client.user.username}`);
    if (args2 < 1) return message.channel.sendEmbed(errorembed);
    let embed3 = new Discord.RichEmbed()
      .setTitle(`**:credit_card:  The Final Cost Is :**`)
      .setColor("#43b581")
      .setDescription(`1`)
      .setFooter(`${client.user.username}`);
    if (args2 == 1) return message.channel.sesendEmbednd(embed3);
    let embed = new Discord.RichEmbed()
      .setTitle(`**:credit_card: The Final Cost Is :**`)
      .setColor("#43b581")
      .setThumbnail(
        "https://sgp1.digitaloceanspaces.com/cosmosgroup/news/4875831_New%20Project.jpg"
      )
      .setImage(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7vYOFm7Chgwg3VGCMMJohUcmFxNCfhna1_A&usqp=CAU"
      )
      .setDescription(
        `||----------------------------------------||\n
 **:robot: bot tax** : **${tax3}**\n
||----------------------------------------||\n
**:airplane_departure:    transfer** : **${tax}**\n
||----------------------------------------||\n
**:airplane_arriving:     arrived to user ** : **${args2}**\n
||----------------------------------------||`
      )
      .setFooter(`${client.user.username}`);
    message.channel.sendEmbed(embed);
  }
  
    };

module.exports = taxcommand;
