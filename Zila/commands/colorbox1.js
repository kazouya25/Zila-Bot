///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//////////==============================///////////
//////////=============================///////////
//////////============================///////////
//////////===========================///////////
//////////==========================///////////
//////////=========================///////////
//////////========================///////////
//////////=======================///////////
//////////======================///////////
//////////=====================///////////
//////////====================///////////
//////////===================///////////
//////////==================///////////
//////////=================///////////
//////////================///////////
//////////===============///////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// علبة الوان رقم 1////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
const Discord = require('discord.js');
const moment = require('moment');
const { prefix } = require("../config");


const colorbox1 = (message) => {
  if (message.content === prefix + "colorbox1") {
    if (!message.channel.guild)
      return message.channel.send("**This Commnad only For Servers !**");

    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel
        .send("**You Dont Have** `ADMINISTRATOR` **premission**")
        .then(msg => msg.delete(6000));
    message.guild.createRole({
      name: "1",
      color: "#FFFFFF",
      permissions: []
    });
    message.guild.createRole({
      name: "2",
      color: "#FFFAE8",
      permissions: []
    });
    message.guild.createRole({
      name: "3",
      color: "#FFF6D1",
      permissions: []
    });
    message.guild.createRole({
      name: "4",
      color: "#FFF1B9",
      permissions: []
    });
    message.guild.createRole({
      name: "5",
      color: "#FFECA2",
      permissions: []
    });
    message.guild.createRole({
      name: "6",
      color: "#FFE88B",
      permissions: []
    });
    message.guild.createRole({
      name: "7",
      color: "#FFE374",
      permissions: []
    });
    message.guild.createRole({
      name: "8",
      color: "#FFDF5D",
      permissions: []
    });
    message.guild.createRole({
      name: "9",
      color: "#FFDA46",
      permissions: []
    });
    message.guild.createRole({
      name: "10",
      color: "#FFD52E",
      permissions: []
    });
    message.guild.createRole({
      name: "11",
      color: "#FFD117",
      permissions: []
    });
        message.guild.createRole({
      name: "12",
      color: "#FFCC00",
      permissions: []
    });
    message.guild.createRole({
      name: "13",
      color: "#FF99FF",
      permissions: []
    });
    message.guild.createRole({
      name: "14",
      color: "#FF94E8",
      permissions: []
    });
    message.guild.createRole({
      name: "15",
      color: "#FF90D1",
      permissions: []
    });
    message.guild.createRole({
      name: "16",
      color: "#FF8BB9",
      permissions: []
    });
    message.guild.createRole({
      name: "17",
      color: "#FF86A2",
      permissions: []
    });
    message.guild.createRole({
      name: "18",
      color: "#FF828B",
      permissions: []
    });
    message.guild.createRole({
      name: "19",
      color: "#FF7D74",
      permissions: []
    });
    message.guild.createRole({
      name: "20",
      color: "#FF795D",
      permissions: []
    });
    message.guild.createRole({
      name: "21",
      color: "#FF7446",
      permissions: []
    });
    message.guild.createRole({
      name: "22",
      color: "#FF6F2E",
      permissions: []
    });
        message.guild.createRole({
      name: "23",
      color: "#FF6B17",
      permissions: []
    });
    message.guild.createRole({
      name: "24",
      color: "#FF6600",
      permissions: []
    });
    message.guild.createRole({
      name: "25",
      color: "#FF00FF",
      permissions: []
    });
    message.guild.createRole({
      name: "26",
      color: "#FF00E8",
      permissions: []
    });
    message.guild.createRole({
      name: "27",
      color: "#FF00D1",
      permissions: []
    });
    message.guild.createRole({
      name: "28",
      color: "#FF00B9",
      permissions: []
    });
    message.guild.createRole({
      name: "29",
      color: "#FF00A2",
      permissions: []
    });
    message.guild.createRole({
      name: "30",
      color: "#FF008B",
      permissions: []
    });
    message.guild.createRole({
      name: "31",
      color: "#FF0074",
      permissions: []
    });
    message.guild.createRole({
      name: "32",
      color: "#FF005D",
      permissions: []
    });
    message.guild.createRole({
      name: "33",
      color: "#FF0046",
      permissions: []
    });
        message.guild.createRole({
      name: "34",
      color: "#FF002E",
      permissions: []
    });
    message.guild.createRole({
      name: "35",
      color: "#FF0017",
      permissions: []
    });
    message.guild.createRole({
      name: "36",
      color: "#FF0000",
      permissions: []
    });
    message.guild.createRole({
      name: "37",
      color: "#CCFFFF",
      permissions: []
    });
    message.guild.createRole({
      name: "38",
      color: "#CCFAE8",
      permissions: []
    });
    message.guild.createRole({
      name: "39",
      color: "#CCF6D1",
      permissions: []
    });
    message.guild.createRole({
      name: "40",
      color: "#CCF1B9",
      permissions: []
    });
    message.guild.createRole({
      name: "41",
      color: "#CCECA2",
      permissions: []
    });
    message.guild.createRole({
      name: "42",
      color: "#CCE88B",
      permissions: []
    });
    message.guild.createRole({
      name: "43",
      color: "#CCE374",
      permissions: []
    });
    message.guild.createRole({
      name: "44",
      color: "#CCDF5D",
      permissions: []
    });
    message.guild.createRole({
      name: "45",
      color: "#CCDA46",
      permissions: []
    });
    message.guild.createRole({
      name: "46",
      color: "#CCD52E",
      permissions: []
    });
    message.guild.createRole({
      name: "47",
      color: "#CCD117",
      permissions: []
    });
    message.guild.createRole({
      name: "48",
      color: "#CCCC00",
      permissions: []
    });
    message.guild.createRole({
      name: "49",
      color: "#CC99FF",
      permissions: []
    });
    message.guild.createRole({
      name: "50",
      color: "#CC99F1",
      permissions: []
    });

    message.channel.sendMessage({
      embed: new Discord.RichEmbed()
        .setColor("#502faf")
        .setAuthor(`${message.author.username}'`, message.author.avatarURL)
        .setDescription("``ُEdaiting Now ....``")
    });
  }
};

module.exports = colorbox1;