client.once('ready', () => {
	console.log('Ready!');
});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.permissions.has(8)}`));
  client.user.setStatus("online");
  client.user.setActivity(` ${prefix}help-[${client.guilds.size}] servers`);
});
client.login('NzU0NzkyNTU4NDUzOTgxMzI1.X155WQ.zU-xfaOuDonM9y9BLVnj0qjGWCM');

const Discord = ('discord.js');
const client = new Discord.Client();
const client = new Discord.Client({ disableMentions: 'everyone' });
const { Client, MessageEmbed } = ("discord.js");
const { Util } = ("discord.js");
const { devs, devs1, prefix} = ("./config.js");
const ytdl = ("ytdl-core");
const canvas = ("canvas");
const convert = ("hh-mm-ss");
const fetchVideoInfo = ("youtube-info");
const botversion = ("./package.json").version;
const simpleytapi = ("simple-youtube-api");
const moment = ("moment");
const fs = ("fs");
const util = ("util");
const gif = ("gif-search");
const opus = ("node-opus");
const ms = ("ms");
const jimp = ("jimp");
const { get } = ("snekfetch");
const guild = ("guild");
const dateFormat = ("dateformat");
const YouTube = ("simple-youtube-api");
const hastebins = ("hastebin-gen");
const getYoutubeID = ("get-youtube-id");
const pretty = ("pretty-ms");
const queue = new Map();
const cd = ("countdown");
const totime = ("to-time");
const Enmap = ("enmap");
const dbg = new Enmap({ name: "Giveaway" });
const table = ("table").table;

require("events").EventEmitter.setMaxListeners = null;
const express = require("express");
const app = express();

////بكجات



//===========================================\\
///////////////كود تغيير الحالة
/*
const prefixes = ('../json/prefixes.json');
const globalPrefix = ('../bot.js');
client.on ("message", async (message, args) => {
		if (args.length) {
			prefixes.set(message.guild.id, args[0]);
			return message.channel.send(`Successfully set prefix to \`${args[0]}\``);
		}

		return message.channel.send(`Prefix is \`${prefixes.get(message.guild.id) || globalPrefix}\``);

	},
);
*/
//===========================================\\
//==================================================\\
//===================\\
//=====================\\
//=======================\\
//=========================\\
//===========================\\
//=============================\\
//===============================\\
//=================================\\
//===================================\\
//=====================================\\
//=======================================\\
//=========================================\\
//================Commands===================\\
const AvatarServerCommand = ("./commands/avatarserver.js");
const IdCommand = ("./commands/id.js");
const colorbox1 = ("./commands/colorbox1.js");
const colorbox2 = ("./commands/colorbox2.js");
const colorbox3 = ("./commands/colorbox3.js");
const colorbox4 = ("./commands/colorbox4.js");
//const botCommand = ("./commands/botcommand.js");
//const avatarCommand = ("./commands/avatar.js");
//const moveall = ("./commands/moveall.js");

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
client.on("message", IdCommand);
client.on("message", colorbox1);
client.on("message", colorbox2);
client.on("message", colorbox3);
client.on("message", colorbox4);
client.on("message", AvatarServerCommand);
//client.on("message", botCommand);
//client.on("message", avatarCommand);
//client.on("message", moveall);

///////////////////////////////////////////
////////////////كود افاتر
client.on("message", message => {
  const messageArray = message.content.split(" ");

  if (
    messageArray[0] === prefix + "avtar" ||
    messageArray[0] === prefix + "avt" ||
    messageArray[0] === prefix + "a"
  ) {
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
        let avtEmbed = new Discord.MessageEmbed()
          .setColor("#36393e")
          .setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL())
          .setImage(avt.avatarURL())
          .setFooter(`Avatar`, message.client.user.avatarURL()({ format: 'png', dynamic: true, size: 1024 }));
        message.channel.send(avtEmbed);
      })
      .catch(() => message.channel.send(`Please Type member ID`));
  }
});

///////////////////////////////////////////////////////
/////////////////////كود تيكت

const category = "category-id";
let tickets = true;
let tchannels = [];
let current = 0;

client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;

  if (args[0].toLowerCase() === `${prefix}new`) {
    if (tickets === false)
      return message.channel.send(
        `Tickets Is Closed By Admin :police_officer: **`
      );
    if (!message.guild.me.permissions.has("MANAGE_CHANNELS"))
      return message.channel.send(
        `I Don't Have Permissions To Edit Room :confounded: **`
      );
    console.log(current);
    let openReason = "";
    current++;
    message.guild.createChannel(`ticket-${current}`, "text").then(c => {
      tchannels.push(c.id);
      c.setParent(category);
      message.channel.send(`**Done opend Your Ticket :red_envelope: **`);
      c.overwritePermissions(message.guild.id, {
        READ_MESSAGES: false,
        SEND_MESSAGES: false
      });
      c.overwritePermissions(message.author.id, {
        READ_MESSAGES: true,
        SEND_MESSAGES: true
      });

      if (args[1])
        openReason = `\nReason: [ **__${args.slice(1).join(" ")}__** ]`;
      let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setColor("#36393e")
        .setDescription(`**Wait Admin Please try explain why you opened this ticket with as much
detail as possible. Our **Support Staff** will be here soon to help.To Answer You**${openReason}`);
      c.send(`${message.author}`);
      c.send(embed);
    });
  } else if (args[0].toLowerCase() === `${prefix}tickets`) {
    if (!message.member.permissions.has("MANAGE_GUILD"))
      return message.channel.send(
        ` **You Can't Use This Command :rolling_eyes: **`
      );
    if (args[1] && args[1].toLowerCase() === "enable") {
      tickets = true;
      message.channel.send(
        `**Ticket System Is Open Now :envelope_with_arrow:  **`
      );
    } else if (args[1] && args[1].toLowerCase() === "disable") {
      tickets = false;
      message.channel.send(
        `**Ticket System Is Closed Now :closed_lock_with_key:**`
      );
    } else if (!args[1]) {
      if (tickets === true) {
        tickets = false;
        message.channel.send(
          `**Ticket System Is Closed Now :closed_lock_with_key:**`
        );
      } else if (tickets === false) {
        tickets = true;
        message.channel.send(
          `**Ticket System Is Open Now :envelope_with_arrow:  **`
        );
      }
    }
  } else if (args[0].toLowerCase() === `${prefix}close`) {
    if (!message.member.permissions.has("MANAGE_GUILD"))
      return message.channel.send(
        `**You Can't Use This Command :rolling_eyes: **`
      );
    if (
      !message.channel.name.startsWith("ticket-") &&
      !tchannels.includes(message.channel.id)
    )
      return message.channel.send(`** Thats Not Ticket Room :yawning_face: **`);

    message.channel.send(`**Room will Closed Auto After 5  second :timer: **`);
    tchannels.splice(tchannels.indexOf(message.channel.id), 1);
    setTimeout(() => message.channel.delete(), 5000); //لحد هنا
  } else if (args[0].toLowerCase() === `${prefix}cleartickets`) {
    let iq = 0;
    for (let q = 0; q < tchannels.length; q++) {
      let c = message.guild.channels.get(tchannels[q]);
      if (c) {
        c.delete();
        tchannels.splice(tchannels[q], 1);
        iq++;
      }
      if (q === tchannels.length - 1 || q === tchannels.lengh + 1) {
        message.channel.send(
          `**Done Deleted\`${iq}\` From Tickets.**:closed_lock_with_key: `
        );
      }
    }
  }
});

//===========================================\\
///////////////////////////////////////////////////كود معلومات البوت

client.on("message", message => {
  if (message.content.startsWith(prefix + "bot")) {
    if (!message.channel.guild)
      return message.channel.send(` | This Command is used only in servers!`);
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    var embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL())
      .setThumbnail(
        "https://farm5.staticflickr.com/4836/39891228403_12f092a56a_o.gif"
      )
      .addField(":date:**Created On**", `**2020 / 09 / 2**`, true)
      .addField(
        ":high_brightness:**Sup Server **",
        " [Sup Server](https://discord.gg/EhsMZYn)",
        true
      )
      .addField(":infinity:**Invite bot**"," [Invite bot](https://discord.com/api/oauth2/authorize?client_id=754792558453981325&permissions=8&scope=bot)", true)
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
    message.channel.send(embed);
  }
});

//===========================================\\

//===========================================\\
//////////////////////// كود بيانات السيرفر
client.on("message", function(msg) {
  if (msg.content.startsWith(prefix + "server")) {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.guild.iconURL())
      .addField(
        ":globe_with_meridians: **Server Name : **",
        `**[ ${msg.guild.name} ]**`,
        true
      )
      .addField(
        ":earth_africa: ** Region :**",
        `**[ ${msg.guild.region} ]**`,
        true
      )
      .addField(
        ":military_medal:** Roles:**",
        `**[ ${msg.guild.roles.size} ]**`,
        true
      )
      .addField(
        ":bust_in_silhouette:** Members :**",
        `**[ ${msg.guild.memberCount} ]**`,
        true
      )
      .addField(
        ":white_check_mark:** Online :**",
        `**[ ${
          msg.guild.members.filter(m => m.presence.status == "online").size
        } ]**`,
        true
      )
      .addField(
        ":pencil:** Writen Chanels :**",
        `**[ ${msg.guild.channels.filter(m => m.type === "text").size} ]**`,
        true
      )
      .addField(
        ":loud_sound:** Voice Chanels :**",
        `**[ ${msg.guild.channels.filter(m => m.type === "voice").size} ]**`,
        true
      )
      .addField(
        ":crown:** Server Owner :**",
        `**[ ${msg.guild.owner} ]**`,
        true
      )
      .addField(":id:** Server ID :**", `**[ ${msg.guild.id} ]**`, true)
      .addField(
        ":date:** Sate Created : **",
        msg.guild.createdAt.toLocaleString()
      );
    msg.channel.send({ embed: embed });
  }
});

////////////////////////////////////////////////////////////
///////////////////////// كود سحب شخص لرومك الصوتي
client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith(prefix + "move")) {
    if (message.member.permissions.has("MOVE_MEMBERS")) {
      if (message.mentions.users.size === 0) {
        return message.channel.send("``Use : " + prefix + "move @User``");
      }
      if (message.member.voiceChannel != null) {
        if (message.mentions.members.first().voiceChannel != null) {
          var authorchannel = message.member.voiceChannelID;
          var usermentioned = message.mentions.members.first().id;
          var embed = new Discord.MessageEmbed()
            .setTitle("Succes!")
            .setColor("RANDOM")
            .setDescription(
              ` You Have Moved @${usermentioned} To Your Channel `
            );
          var embed = new Discord.MessageEmbed()
            .setTitle(`You are Moved in ${message.guild.name} `)
            .setColor("RANDOM")
            .setTitle(` **voice move**`)

            .setDescription(
              `**  Moved By : <@${message.author.id}> \nMoved You To His  Voice Channel!\nServer  ${message.guild.name} **`
            );
          message.guild.members
            .get(usermentioned)
            .setVoiceChannel(authorchannel)
            .then(m => message.channel.send(embed));
          message.guild.members.cache.get(usermentioned).send(embed);
        } else {
          message.channel.send(
            `<@${message.author.id}>You Cant Move  The User Should Be In channel To Move 😏`
          );
        }
      } else {
        message.channel.send(
          "**```  You Should Be In Room Voice To Move Someone ```**🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣"
        );
      }
    } else {
      message.react("❌");
    }
  }
});
//===========================================\\
////////// سحب الجميع لرومك الصوتي
client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "move all") {
    message.delete(4000);
    if (!message.channel.guild) return;
    if (!message.member.permissions.has("MOVE_MEMBERS")) return;
    if (!message.guild.member(client.user).permissions.has("MOVE_MEMBERS"))
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
});

//===========================================\\
//////////////////////////////////////////////////////////////
/////////////// كود الوان
client.on("message", message => {
  if (!message.guild || message.author.bot) return;
  if (message.content == prefix + "colors") {
    var fsn = require("fs-nextra");
    fs.readdir("./colors", async (err, files) => {
      var f = files[Math.floor(Math.random() * files.length)];
      var { Canvas } = require("canvas-constructor");
      var x = 0;
      var y = 0;
      if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0)
        return;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(() => {
          x += 100;
          if (x > 100 * 12) {
            x = 100;
            y += 80;
          }
        });
      var image = await fsn.readFile(`./colors/${f}`);
      var xd = new Canvas(100 * 11, y + 350)
        .addBeveledImage(image, 0, 0, 100 * 11, y + 350, 100)
        .setTextBaseline("middle")
        .setColor("red")
        .setTextSize(60)
        .addText(`Color List `, 375, 65);
      x = 0;
      y = 150;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(role => {
          x += 75;
          if (x > 100 * 10) {
            x = 75;
            y += 80;
          }
          xd.setTextBaseline("middle")
            .setTextAlign("center")
            .setColor(role.hexColor)
            .addBeveledRect(x, y, 60, 60, 15)
            .setColor("white");
          if (`${role.name}`.length > 2) {
            xd.setTextSize(30);
          } else if (`${role.name}`.length > 1) {
            xd.setTextSize(40);
          } else {
            xd.setTextSize(50);
          }
          xd.addText(role.name, x + 30, y + 30);
        });
      message.channel.send(xd.toBuffer());
    });
  }
});
//===========================================\\
/////////////////////////////////////////////////////////////
///////////////// كود اختيار لون

client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.split(" ")[0] == prefix + "color") {
    const embedd = new Discord.MessageEmbed()
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL()
      )
      .setDescription(`**There's No Color With This Number ** :x: `)
      .setColor(`ff0000`);
    if (!args[0]) return message.channel.send(embedd);
    if (isNaN(args[0]))
      return message.channel.send(
        embedd.setDescription("Please select a number :x:**sample : 0color 1**")
      );
    if (!message.guild.roles.find("name", `${args[0]}`))
      return message.channel.send(embedd);

    var a = message.guild.roles.find("name", `${args[0]}`);
    if (!a) return;
    if (a.permissions.has(8))
      return message.channel.send(
        embedd.setDescription(
          "This color has administrator:hugging:  iCan`t Give it Please ASk Admin "
        )
      );
    const embed = new Discord.MessageEmbed()

      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL()
      )
      .setDescription(`**Color Changed To Successfully** :cool:  `)

      .setColor(`${a.hexColor}`);
    message.channel.send(embed);
    if (!args[0]) return;
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < 201; x++) {
      message.member.removeRole(message.guild.roles.find("name", `${x}`));
    }
    message.member.roles.add(message.guild.roles.find("name", `${args[0]}`));
  }
});
//===========================================\\
/////كود سرعة البوت او البينق

client.on("message", message => {
  if (message.content === prefix + "ping") {
    let start = Date.now();
    message.channel.send("pong").then(message => {
      message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
    });
  }
});
//===========================================\\
/////////////////////////////////////////////////
////كود رابط السرفر
client.on("message", message => {
  if (message.content.split(" ")[0] === prefix + "link") {
    message.channel
      .createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
      })
      .then(invite => message.author.send(invite.url));
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        "** Done Send To Your Dm :mailbox_with_mail:  Please Check If Not Recived it Please Open Your Dm  **"
      )
      .setAuthor(client.user.username, client.user.avatarURL())
      .setAuthor(client.user.username, client.user.avatarURL())
      .setFooter("Request by: " + message.author.tag);

    message.channel.send(embed).then(message => {
      message.delete(10000);
    });
    const Embed11 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("**:information_source: Link information**")
      .setDescription(
        `**:cyclone: Link duration  : 1 Day 
 :100: Invitations available from the link  : 100 **`
      )
      .setFooter(`${client.user.username}bot`);

    message.author.send(Embed11);
  }
});
//===========================================\\
////////////////////////////////
////كود رابط البوت
client.on("message", message => {
  if (message.content.split(" ")[0] === prefix + "invite") {
    message.channel
      .createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 380265176
      })
      .then(invite => message.author.send(invite.url));
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(
        "** Done Send To Your Dm :mailbox_with_mail:  Please Check If Not Recived it Please Open Your Dm **"
      )
      .setAuthor(client.user.username, client.user.avatarURL())
      .setAuthor(client.user.username, client.user.avatarURL())
      .setFooter("Request by: " + message.author.tag);

    message.channel.send(embed).then(message => {
      message.delete(10000);
    });
    const Embed11 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("**:information_source: Link to invite Bot To your server**")
      .setDescription(
        "https://discord.com/api/oauth2/authorize?client_id=754792558453981325&permissions=8&scope=bot"
      )
      .setFooter(`${client.user.username}bot`);

    message.author.send(Embed11);
  }
});
//===========================================\\
/////////////////////////////////////////////////////
/////////////امر التقديم بروم التقديمات
client.on("message", message => {
  if (message.content.startsWith(prefix + "submit")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    let channel = message.guild.channels.find(
      gg => gg.name === "👮-administrative-submission"
    );
    if (!channel)
      return message.reply(`** Please Type This Command ${prefix}setroom1 **`);
    if (channel) {
      message.channel.send(message.member + ", **:timer:**").then(m => {
        m.edit(message.member + ", **Real Name  ✍**");
        m.channel
          .awaitMessages(m1 => m1.author == message.author, {
            maxMatches: 1,
            time: 60 * 1000
          })
          .then(m1 => {
            m1 = m1.first();
            var name = m1.content;
            m1.delete();
            m.edit(message.member + ", **:timer:**").then(m => {
              m.edit(message.member + ", **Your Age 🎓**");
              setTimeout(() => {
                m.delete();
              }, 10000);
              m.channel
                .awaitMessages(m2 => m2.author == message.author, {
                  maxMatches: 1,
                  time: 60 * 1000
                })
                .then(m2 => {
                  m2 = m2.first();
                  var age = m2.content;
                  m2.delete();
                  message.channel
                    .send(message.member + ", **:timer:**")
                    .then(m => {
                      m.edit(
                        message.member + ", **Do you interact in grade🎙**"
                      );
                      setTimeout(() => {
                        m.delete();
                      }, 10000);
                      m.channel
                        .awaitMessages(m1 => m1.author == message.author, {
                          maxMatches: 1,
                          time: 60 * 1000
                        })
                        .then(m3 => {
                          m3 = m3.first();
                          var ask = m3.content;
                          m3.delete();
                          message.channel
                            .send(message.member + ", **:timer:**")
                            .then(m => {
                              m.edit(
                                message.member +
                                  ", **Will you respect the laws? 📑**"
                              );
                              setTimeout(() => {
                                m.delete();
                              }, 10000);
                              m.channel
                                .awaitMessages(
                                  m1 => m1.author == message.author,
                                  { maxMatches: 1, time: 60 * 1000 }
                                )
                                .then(m4 => {
                                  m4 = m4.first();
                                  var ask2 = m4.content;
                                  m4.delete();
                                  message.channel
                                    .send(message.member + ", **:timer:**")
                                    .then(m => {
                                      m.edit(
                                        message.member +
                                          ", **Why should we accept? Any Role do you want? 🤔**"
                                      );
                                      m.channel
                                        .awaitMessages(
                                          m1 => m1.author == message.author,
                                          { maxMatches: 1, time: 60 * 1000 }
                                        )
                                        .then(m5 => {
                                          m5 = m5.first();
                                          var ask3 = m5.content;
                                          m5.delete();
                                          m.edit(
                                            message.member +
                                              ", **....Data collection is in progress:recycle: **"
                                          ).then(mtime => {
                                            setTimeout(() => {
                                              let embed = new Discord.MessageEmbed()
                                                .setColor("RANDOM")
                                                .setTitle(
                                                  `**New Administrative submission** \n[__**${message.guild.name}**__]server`
                                                )
                                                .setThumbnail(
                                                  "https://media.discordapp.net/attachments/686835795537035276/749268027060650114/2.gif"
                                                )
                                                .setImage(
                                                  "https://media.springernature.com/full/springer-cms/rest/v1/content/17957456/data/v3"
                                                )

                                                .addField(
                                                  "**`Name`**",
                                                  `${name}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`Age`**",
                                                  `${age}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`Will he interact?`**",
                                                  `${ask}`
                                                )
                                                .addField(
                                                  "**`Will he respect the laws?`**",
                                                  `${ask2}`
                                                )
                                                .addField(
                                                  "**`Why should we accept? Any Role do you want?`**",
                                                  `${ask3}`
                                                )
                                                .setFooter(
                                                  `Writer : ${message.author.username}\n User ID : ${message.author.id}`
                                                );
                                              channel.send(embed);
                                            }, 2500);
                                            setTimeout(() => {
                                              mtime.delete();
                                            }, 3000);
                                          });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
          });
      });
    }
  }
});
/////////////////////////////////////////////////////
/////////////امر ارسال اقتراح
client.on("message", message => {
  if (message.content.startsWith(prefix + "sugges")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    let channel = message.guild.channels.find(
      gg => gg.name === "🤔suggestions"
    );
    if (!channel)
      return message.reply(`** Please Type This Command ${prefix}setroom3 **`);
    if (channel) {
      message.channel.send(message.member + " **:timer:**").then(m => {
        m.edit(message.member + " **What do you suggest?  ✍**");
        m.channel
          .awaitMessages(m1 => m1.author == message.author, {
            maxMatches: 1,
            time: 60 * 1000
          })
          .then(m1 => {
            m1 = m1.first();
            var name = m1.content;
            m1.delete();
            m.edit(message.member + "**:timer:**").then(m => {
              m.edit(
                message.member + " **Regarding any part of the server 🎓**"
              );
              setTimeout(() => {
                m.delete();
              }, 10000);
              m.channel
                .awaitMessages(m2 => m2.author == message.author, {
                  maxMatches: 1,
                  time: 60 * 1000
                })
                .then(m2 => {
                  m2 = m2.first();
                  var age = m2.content;
                  m2.delete();
                  message.channel
                    .send(message.member + "**:timer:**")
                    .then(m => {
                      m.edit(
                        message.member + "**What will benefit the server?**"
                      );
                      setTimeout(() => {
                        m.delete();
                      }, 10000);
                      m.channel
                        .awaitMessages(m1 => m1.author == message.author, {
                          maxMatches: 1,
                          time: 60 * 1000
                        })
                        .then(m3 => {
                          m3 = m3.first();
                          var ask = m3.content;
                          m3.delete();
                          message.channel
                            .send(message.member + "**:timer:**")
                            .then(m => {
                              m.edit(
                                message.member +
                                  ", **Why do we accept your suggestion?**"
                              );
                              setTimeout(() => {
                                m.delete();
                              }, 10000);
                              m.channel
                                .awaitMessages(
                                  m1 => m1.author == message.author,
                                  { maxMatches: 1, time: 60 * 1000 }
                                )
                                .then(m4 => {
                                  m4 = m4.first();
                                  var ask2 = m4.content;
                                  m4.delete();
                                  message.channel
                                    .send(message.member + "**:timer:**")
                                    .then(m => {
                                      m.edit(
                                        message.member +
                                          "**Any other additions?**"
                                      );
                                      m.channel
                                        .awaitMessages(
                                          m1 => m1.author == message.author,
                                          { maxMatches: 1, time: 60 * 1000 }
                                        )
                                        .then(m5 => {
                                          m5 = m5.first();
                                          var ask3 = m5.content;
                                          m5.delete();
                                          m.edit(
                                            message.member +
                                              "**....Data collection is in progress:recycle: **"
                                          ).then(mtime => {
                                            setTimeout(() => {
                                              let embed = new Discord.MessageEmbed()
                                                .setColor("RANDOM")
                                                .setTitle(
                                                  `**New Suggestion** \n[__**${message.guild.name}**__]server`
                                                )
                                                .setThumbnail(
                                                  "https://previews.123rf.com/images/bankrx/bankrx1703/bankrx170300012/73008857-grunge-red-suggestion-with-star-icon-round-rubber-seal-stamp.jpg"
                                                )
                                                .setImage(
                                                  "https://cdn.glitch.com/c2934d02-e613-45cb-bde4-bf7d1fd70f4f%2F30f7909a-8fce-4ec4-9f98-8420395db922.image.png?v=1601068907155"
                                                )

                                                .addField(
                                                  "**What do you suggest?**",
                                                  `${name}`
                                                )
                                                .addField(
                                                  "**Regarding any part of the server**",
                                                  `${age}`
                                                )
                                                .addField(
                                                  "**What will benefit the server?**",
                                                  `${ask}`
                                                )
                                                .addField(
                                                  "**Why do we accept your suggestion?**",
                                                  `${ask2}`
                                                )
                                                .addField(
                                                  "**Any other additions?**",
                                                  `${ask3}`
                                                )
                                                .setFooter(
                                                  `Writer : ${message.author.username}\n User ID : ${message.author.id}`
                                                );
                                              channel.send(embed);
                                            }, 2500);
                                            setTimeout(() => {
                                              mtime.delete();
                                            }, 3000);
                                          });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
          });
      });
    }
  }
});
//===========================================\\
//////////////////////////////
//////كود رد البوت بالخاص علي الاوامر
client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;

  let args = msg.content.split(" ");

  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);

  if (command === `avatar`) {
    if (msg.channel.type === "dm")
      return msg.channel.send("Nope Nope u can't use avatar command in DMs ");
    let mentions = msg.mentions.members.first();
    if (!mentions) {
      let sicon = msg.author.avatarURL();
      let embed = new Discord.MessageEmbed()
        .setImage(msg.author.avatarURL())
        .setColor("#5074b3");
      msg.channel.send({ embed });
    } else {
      let sicon = mentions.user.avatarURL()();
      let embed = new Discord.MessageEmbed().setColor("#5074b3").setImage(sicon);
      msg.channel.send({ embed });
    }
  }
});
//===========================================\\
/////////////////////////////كود ابلاغ
client.on("message", function(message) {
  let roleembed = new Discord.MessageEmbed()
    .setDescription(
      `
EX :
 @virgel 
`
    )
    .setFooter(
      "Requested by " + message.author.username,
      message.author.avatarURL()
    );
  if (message.content.startsWith(prefix + "report")) {
    let messageArgs = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messageReason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!messageReason)
      return message.reply(
        (roleembed = new Discord.MessageEmbed()
          .setTitle(`How To Use Command `)
          .setThumbnail(
            "https://www.tashlee7sa.com/tashlee7admin/img/category_images/53_2018-05-26_biz-problem-1020.png"
          )
          .setDescription(
            `
Exampels :
${prefix}report @virgel Reason `
          )
          .setFooter(
            "Requested by " + message.author.username,
            message.author.avatarURL()
          ))
      );
    let mUser = message.mentions.users.first();
    if (!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.MessageEmbed()
      .setTitle("`New Report!`")
      .setThumbnail(message.author.avatarURL())
      .addField("**# - Reported User:**", mUser, true)
      .addField("**# - Reported User ID:**", mUser.id, true)
      .addField("**# - Reason:**", messageReason, true)
      .addField("**# - Channel:**", message.channel, true)
      .addField("**# - Time:**", message.createdAt, true)
      .setFooter("If The Report Is A Joke - Report Member Gonna Banned");
    message.channel.send(Rembed);
    message.channel
      .send("__Are you sure you want to send this to the Server owner??__")
      .then(msg => {
        msg.react("✅");
        msg
          .react("❌")
          .then(() => msg.react("❌"))
          .then(() => msg.react("✅"));
        let reaction1Filter = (reaction, user) =>
          reaction.emoji.name === "✅" && user.id === message.author.id;
        let reaction2Filter = (reaction, user) =>
          reaction.emoji.name === "❌" && user.id === message.author.id;

        let reaction1 = msg.createReactionCollector(reaction1Filter, {
          time: 12000
        });
        let reaction2 = msg.createReactionCollector(reaction2Filter, {
          time: 12000
        });
        reaction1.on("collect", r => {
          message.guild.owner.send(Rembed);
          message.reply("**# - Done! 🎇**");
        });
        reaction2.on("collect", r => {
          message.reply("**# - Canceled!**");
        });
      });
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////الاوامر الادارية
///////////////////////////////////////////
//////////////////////////كود بان
client.on("message", message => {
  let roleembed = new Discord.MessageEmbed()
    .setDescription(
      `
`
    )
    .setFooter(
      "Requested by " + message.author.username,
      message.author.avatarURL()
    );
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply("** This command only for servers staff:alien: **");

    if (!message.guild.member(message.author).permissions.has("BAN_MEMBERS"))
      return message.reply("**you don`t have premissions**:yawning_face:");
    if (!message.guild.member(client.user).permissions.has("BAN_MEMBERS"))
      return message.reply("**I Don't Have  Permission**:cry:");
    let user = message.mentions.users.first();

    if (message.mentions.users.size < 1)
      return message.reply(
        (roleembed = new Discord.MessageEmbed()
          .setTitle(`How To Use Command `)
          .setThumbnail(
            "https://www.tashlee7sa.com/tashlee7admin/img/category_images/53_2018-05-26_biz-problem-1020.png"
          )
          .setDescription(
            `
Exampel :
${prefix}ban @virgel `
          )

          .setFooter(
            "Requested by " + message.author.username,
            message.author.avatarURL()
          ))
      );
    if (
      message.mentions.members.first().roles.highest.position >=
      message.member.roles.highest.position
    )
      return message.channel.send("you can`t ban higher ranks:yawning_face:");
    if (!message.guild.member(user).bannable)
      return message.reply("**i can`t ban rank higher than me sorry:cry: **");

    message.guild.member(user).ban(7, user);

    message.channel.send(
      `**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `
    );
  }
});
//===========================================\\
////////////////////////////////
////// كود فك البان
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.permissions.has("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(Saad => {
          message.guild.members.unban(Saad);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args) return message.channel.send("**Please Type the member ID**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(
          (message = new Discord.MessageEmbed()
            .setThumbnail(message.author.avatarURL())
            .setColor("FF0000")
            .setTitle("**●Unban** !")
            .addField("**●User Unban :** ", `${args}`, true)
            .addField("**●By :**", ` <@${message.author.id}> `, true)
            .setAuthor(message.guild.name))
        );
      })
      .catch(stry => {
        message.channel.send(
          `:woozy_face:  **-** **I can't find \`${args}\` in the ban list**`
        );
      });
  }
});
//////////==============================================================///////////
/////////////كود تغيير اسم الشخص
client.on("message", message => {
  let roleembed = new Discord.MessageEmbed()
    .setDescription(
      `
`
    )
    .setFooter(
      "Requested by " + message.author.username,
      message.author.avatarURL()
    );
  if (message.content.startsWith(prefix + "nick")) {
    if (
      message.author.bot ||
      message.channel.type == "dm" ||
      !message.member.permissions.has("MANAGE_NICKNAMES") ||
      !message.guild.member(client.user).permissions.has("MANAGE_NICKNAMES")
    )
      return;
    var user = message.mentions.members.first();
    var args = message.content.split(" ").slice(2);
    var nick = args.join(" ");
    if (!user || !args)
      return message.channel.send(
        (roleembed = new Discord.MessageEmbed()
          .setTitle(`How To Use Command `)
          .setThumbnail(
            "https://www.tashlee7sa.com/tashlee7admin/img/category_images/53_2018-05-26_biz-problem-1020.png"
          )
          .setDescription(
            `
Exampel :
${prefix}nick <@713429811434881093> new nickname`
          )

          .setFooter(
            "Requested by " + message.author.username,
            message.author.avatarURL()
          ))
      );
    if (
      message.guild.member(user.user).roles.highest.position >=
      message.guild.member(client.user).roles.highest.position
    )
      return message.channel.send(
        `I couldn't update that user. Please check my permissions and role position :weary: `
      );
    message.guild
      .member(user.user)
      .setNickname(`${nick}`)
      .then(() => {
        message.channel.send(
          (roleembed = new Discord.MessageEmbed()
            .setTitle(`Done  `)
            .setThumbnail(
              "https://media1.tenor.com/images/83198d1571622bf5bbc0e38206b75e8d/tenor.gif"
            )
            .setDescription(
              ` Done changed : **${user.user.username}** nickname \n to : **${nick}**`
            )

            .setFooter(
              "Changed by " + message.author.username,
              message.author.avatarURL()
            ))
        );
      })
      .catch(console.error);
  }
});
//////////==============================================================///////////
////////////////////////////////////////////كود الطرد
client.on("message", message => {
  let roleembed = new Discord.MessageEmbed()
    .setDescription(
      `
EX :
 @virgel 
`
    )
    .setFooter(
      "Requested by " + message.author.username,
      message.author.avatarURL()
    );
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).permissions.has("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).permissions.has("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1)
      return message.reply(
        (roleembed = new Discord.MessageEmbed()
          .setTitle(`How To Use Command `)
          .setThumbnail(
            "https://www.tashlee7sa.com/tashlee7admin/img/category_images/53_2018-05-26_biz-problem-1020.png"
          )
          .setDescription(
            `
Exampel :
${prefix}kick @virgel `
          )

          .setFooter(
            "Requested by " + message.author.username,
            message.author.avatarURL()
          ))
      );
    if (!reason) return message.reply("**kick reason**");
    if (!message.guild.member(user).kickable)
      return message.reply("**i can`t kick ranks higher than me sorry:cry: **");
    if (
      message.mentions.members.first().roles.highest.position >=
      message.member.roles.highest.position
    )
      return message.channel.send(
        "you can`t kick ranks higher than you :yawning_face: "
      );

    message.guild.member(user).kick();

    const kickembed = new Discord.MessageEmbed()
      .setAuthor(`KICKED!`, user.displayavatarURL())
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**", "**[ " + `${user.tag}` + " ]**")
      .addField("**By:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**Reason:**", "**[ " + `${reason}` + " ]**");
    message.channel.send({
      embed: kickembed
    });
  }
});
///////////////////////////////////////////////
const SQLite = ("sqlite"); // SQLpackage
const path = ("path"); // PATHpackage
const invites = {};
//////////==============================================================///////////
////////////////////////////////////////////////////////////////////
////كود ميوت
const ms = ("ms");
client.on("message", async message => {
  let roleembed = new Discord.MessageEmbed()
    .setDescription(
      `
EX :
 @virgel 
`
    )
    .setFooter(
      "Requested by " + message.author.username,
      message.author.avatarURL()
    );
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.channel.guild)
    return message.channel
      .send(" **This command only for servers**:unamused: ")
      .then(m => m.delete(5000));
  if (!message.member.permissions.has("MANAGE_ROLES")) return;
  if (!message.guild.member(message.author).permissions.has("MANAGE_ROLES"))
    return message.channel.send(
      "  **You Don't Have ` MANAGE_ROLES ` Permission**:unamused: "
    );
  if (!message.guild.member(client.user).permissions.has("MANAGE_ROLES"))
    return message.channel
      .send(" **I Don't Have ` MANAGE_ROLES ` Permission**:pensive: ")
      .then(msg => msg.delete(6000));
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "mute") {
    let tomute = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );
    let embed = new Discord.MessageEmbed()
      .setTitle(`How To Use Command `)
      .setThumbnail(
        "https://www.tashlee7sa.com/tashlee7admin/img/category_images/53_2018-05-26_biz-problem-1020.png"
      )
      .setDescription(
        `
Exampels :
${prefix}mute @virgel `
      )
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL()
      );
    if (!tomute) return message.channel.send(embed);
    if (tomute.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(
        " **Sorry I Don't Have ` MANAGE_MESSAGE ` Permission:pensive: "
      );
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    //end of create role
    await tomute.roles.add(muterole.id);
    message.channel.send(`Member** has been muted !** :zipper_mouth:"
   `);
  }
  if (command === `unmute`) {
    if (!message.member.permissions.has("MANAGE_ROLES"))
      return message.channel
        .send(
          " **-** **You Don't Have Permission For Unmute This User.:confused: "
        )
        .then(m => m.delete(5000));
    if (!message.guild.member(client.user).permissions.has("MANAGE_ROLES"))
      return message
        .reply(" ** **I Don't Have `MANAGE_ROLES` Permission:pensive:**")
        .then(msg => msg.delete(6000));

    let toMute =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.cache.get(args[0]);
    if (!toMute)
      return message.channel.send(
        (roleembed = new Discord.MessageEmbed()
          .setTitle(`How To Use Command `)
          .setThumbnail(
            "https://www.tashlee7sa.com/tashlee7admin/img/category_images/53_2018-05-26_biz-problem-1020.png"
          )
          .setDescription(
            `
Exampels :
${prefix}unmute @virgel `
          )
          .setFooter(
            "Requested by " + message.author.username,
            message.author.avatarURL()
          ))
      );

    let role = message.guild.roles.find(r => r.name === "muted");

    if (!role || !toMute.roles.has(role.id))
      return message.channel.send(
        " **This Member not muted :upside_down: **"
      );

    await toMute.removeRole(role);
    message.channel.send("Member **Has been unmuted.😬**");

    return;
  }
});
//////////==============================================================///////////
//// كود فتح واغلاق الشات
client.on("message", message => {
  if (message.content === prefix + "lock") {
    if (!message.channel.guild)
      return message.reply(" you didn`t Have Perimissions :pensive: ");

    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.reply(" you didn`t Have Perimissions :pensive: ");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.reply("**Chat Locked :no_entry: **");
      });
  }
  if (message.content === prefix + "unlock") {
    if (!message.channel.guild)
      return message.reply(" you didn`t Have Perimissions :pensive: ");

    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.reply("you didn`t Have Perimissions :pensive: ");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.reply("**chat Unlocked :writing_hand:**");
      });
  }
});

client.on("error", err => {
  console.log(err);
});

client.on("messageCreate", async message => {
  let args = message.cleanContent.split(" ");
  if (args[0] == `${prefix}roles`) {
    let space = "                         ";
    let roles = message.guild.roles
      .map(r => r)
      .sort((a, b) => b.position - a.position);
    let rr = roles
      .map(
        r =>
          `${r.name +
            space.substring(r.name.length) +
            message.guild.members.filter(m => m.roles.includes(r.id))
              .length} members`
      )
      .join("\n");
    await message.channel.send(`\`\`\`${rr}\`\`\``);
  }
});
//////////==============================================================///////////
//////////////////كود حذف الرسائل من الشات
client.on("message", function(message) {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (message.member.permissions.has(0x2000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .send(
                " " +
                  "**```Yaml\n" +
                  messagesDeleted +
                  " " +
                  ": Messages Cleared " +
                  "```**"
              )
              .then(m => m.delete(5000));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then(messages => message.channel.bulkDelete(messages));
          message.channel
            .send(
              " " +
                "**```Yaml\n" +
                args[1] +
                " " +
                ": Messages Cleared" +
                "```**"
            )
            .then(m => m.delete(1000));
          message.delete(3000);
        }
      } else {
        var manage = new Discord.MessageEmbed()
          .setDescription("You Do Not Have Permission MANAGE_MESSAGES :(")
          .setColor("RANDOM");
        message.channel.send(manage);
        message.delete();
        return;
      }
  }
});
//////////==============================================================///////////
///////////////////////////////////////////////////

//////////==============================================================///////////
/////////////////////////////////////////////////////////
////كود انشاء الوان

client.on("message", ra3d => {
  let args = ra3d.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (ra3d.content.startsWith(prefix + "ccolors")) {
    if (!args)
      return ra3d.channel.send(
        "Please Type **how many** Colors you need To make After Command :unamused: "
      );
    if (!ra3d.member.permissions.has("MANGE_ROLES"))
      return ra3d.chanel.send(
        "`**⚠️ | `[MANGE_ROLES]`Sorry You Did`t Have Permissions**`"
      );

    let count = 0;
    let ecount = 0;
    for (let x = 1; x < parseInt(args) + 1; x++) {
      ra3d.guild.createRole({ name: x, color: "RANDOM" });
    }
    return ra3d.channel.send(
      "  Created " +
        args +
        " Colors ||https://tenor.com/view/%e0%a4%b0%e0%a4%be%e0%a4%a7%e0%a4%be%e0%a4%b8%e0%a5%8d%e0%a4%b5%e0%a4%be%e0%a4%ae%e0%a5%80-fire-works-celebrate-gif-12772532 ||"
    );
  }
});

//////////==============================================================///////////
/////////////////////////////////////////////////////////////
//////////////////////كود انشاء رومات التقديم والقبول والرفض باقي الكود ال فوقه
/////////// روم التقديمات
client.on("message", message => {
  if (message.content.startsWith(prefix + "setroom1")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.permissions.has("`MANAGE_CHANNELS"))
      return message.reply("**You need `MANAGE_CHANNELS`**Permissions");
    message.guild
      .createChannel("👮 |Administrative submission", "text")
      .then(c => {
        c.overwritePermissions(message.guild.id, {
          SEND_MESSAGES: true
        });
      });
    message.channel.send(
      ":busts_in_silhouette: **Submissions Room has been created successfully **"
    );
  }
});
///////////////////// روم القبول والرفض
client.on("message", message => {
  if (message.content.startsWith(prefix + "setroom2")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.permissions.has("MANAGE_CHANNELS"))
      return message.reply("**You Need `MANAGE_CHANNELS`**Perimissions");
    message.guild.createChannel("accept✅reject❎", "text").then(c => {
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send(
      "** The acceptance and rejection room was created successfully✅**"
    );
  }
});
/////////// روم الاقتراحات
client.on("message", message => {
  if (message.content.startsWith(prefix + "setroom3")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.permissions.has("`MANAGE_CHANNELS"))
      return message.reply("**You need `MANAGE_CHANNELS`**Permissions");
    message.guild.createChannel("🤔suggestions", "text").then(c => {
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      });
    });
    message.channel.send(
      ":busts_in_silhouette: **Suggestions Room has been created successfully ✅**"
    );
  }
});

//////////==============================================================///////////
////////////////////////////////////////
/////////////////////////// اكواد القبول والرفض
///////////////كود القبول
client.on("message", async message => {
  if (!message.guild) return;
  let mention = message.mentions.members.first();
  let role = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  let Support = message.guild.roles.find(gg => gg.name === role);
  if (message.content.startsWith(prefix + "accept")) {
    let acRoom = message.guild.channels.find(
      gg => gg.name === "accept✅reject❎"
    );
    if (!acRoom)
      return message.reply(`Please Type This Command ${prefix}room2`);
    if (acRoom) {
      if (!message.guild.member(message.author).permissions.has("MANAGE_ROLES"))
        return;
      if (!mention) return message.reply("mention Person");
      if (!role) return message.reply("Type Role Name");
      if (!Support)
        return message.reply("There is no Role with this name :rolling_eyes: ");
      if (mention.roles.has(Support))
        return message.reply("This Person Already Have This Role ");
      if (Support.position >= message.member.roles.highest.position)
        return message.channel.send(
          "You didn`t Have Perimissins :rolling_eyes:"
        );

      mention.roles.add(Support).then(() => {
        acRoom.send(
          `** You Are Accepted${mention} And Added role[ ${Support} ]**`
        );
      });
    }
  }
});
//////////==============================================================///////////
//////////////////////////////////////////////////////
//////////////////كود الرفض
client.on("message", async message => {
  if (message.content.startsWith(prefix + "reject")) {
    if (!message.channel.guild) return;

    let mention = message.mentions.members.first();
    let acRoom = message.guild.channels.find("name", "accept✅reject❎");
    let rrrr = message.content.split(/ +/).slice(2);
    let reason = rrrr.join(" ");
    if (!acRoom)
      return message.reply(`Please Type This Command ${prefix}room2 `);
    if (!message.guild.member(message.author).permissions.has("MANAGE_ROLES"))
      return;
    if (!mention) return message.reply("Mention Person");
    message.react("✅");
    acRoom
      .send(
        `**${mention} sorry You Are Rejected **
reason : \`${reason}\``
      )
      .then(m => m.react("✅"));
  }
});
//////////==============================================================///////////
//////////////////////////////////////////////////
//////////////////// كود تعريف كام رتبة في سيرفرك
client.on("message", message => {
  if (message.content.startsWith(prefix + "ranks")) {
    const Rank = message.guild.roles.map(e => e.toString()).join("\n");

    const RankList = new Discord.MessageEmbed()
      .setTitle("➠ Roles.")
      .setAuthor(message.guild.name, message.guild.iconURL())
      .setColor("RANDOM")
      .setDescription(Rank)
      .setFooter(message.guild.name);
    message.channel.send(RankList);
  }
});
//////////==============================================================///////////
////////////////////////////
/////////كود ارسال رسالة بالروم المكتوب فيها الامر
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ssay") {
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        "**This Command For ADMINISTRATORs  :rolling_eyes:**"
      );

    message.channel.send(" " + args.join("  "));
    message.delete();
  }
});
//////////==============================================================///////////
////////////////////////////////////////////////////////
////////////////////////////كود ارسال رسالة بروم معين
client.on("message", message => {
  if (message.channel.type == "dm") return;
  if (message.content.startsWith(prefix + "say")) {
    var attentions = {};
    attentions[message.guild.id] = {};
    message.channel.send(message.author + ", **Wait , PuP System**").then(m => {
      m.edit(message.author + ", **Please Send Room ID :id: **");
      m.channel
        .awaitMessages(m1 => m1.author == message.author, {
          maxMatches: 1,
          time: 600000
        })
        .then(m1 => {
          m1 = m1.first();
          attentions[message.guild.id]["id"] = m1.content;
          m1.delete();
          m1 = message.guild.channels.get(
            `${attentions[message.guild.id]["id"]}`
          );
          if (!m1)
            return message.reply(
              `**This ID Is Incorrect 😑 \`${
                attentions[message.guild.id]["id"]
              }\`**`
            );

          m.edit(message.author + "**Please Type Your Message**");
          m.channel
            .awaitMessages(m2 => m2.author == message.author, {
              maxMatches: 1,
              time: 600000
            })
            .then(m2 => {
              m2 = m2.first();
              attentions[message.guild.id]["msg"] = m2.content;
              m2.delete();
              m.delete();
              message.channel
                .send(
                  `**Do You Wana Send**   \n\n **This Message : **__${
                    attentions[message.guild.id]["msg"]
                  }__**\n\n In Room : **<#${
                    attentions[message.guild.id]["id"]
                  }>\n\n**Please React With✅ Or ❌ **`
                )
                .then(msge => {
                  msge.react("✅").then(r => {
                    msge.react("❌");
                    const oneFilterBB = (reaction, user) =>
                      reaction.emoji.name === "✅" &&
                      user.id === message.author.id;
                    const threeFilterBB = (reaction, user) =>
                      reaction.emoji.name === "❌" &&
                      user.id === message.author.id;
                    const oneBY = msge.createReactionCollector(oneFilterBB, {
                      maxMatches: 1,
                      time: 400000
                    });
                    const threeBY = msge.createReactionCollector(
                      threeFilterBB,
                      { maxMatches: 1, time: 400000 }
                    );
                    oneBY
                      .on("collect", r => {
                        msge.delete();
                        message.guild.channels
                          .get(`${attentions[message.guild.id]["id"]}`)
                          .send(`${attentions[message.guild.id]["msg"]}`);
                      })
                      .catch(RebeL => {
                        console.log("`Error`: " + RebeL);
                      });
                    threeBY.on("collect", r => {
                      msge.delete();
                    });
                  });
                });
            });
        });
    });
  }
});
//////////==============================================================///////////
////////////////////////////كود ارسال ايمبد بالشات
client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "embed") {
    if (!message.channel.guild)
      return message.channel
        .send(
          "Sorry This Command Is Allowed For Humans With **MANAGE_MESSAGES**Permissions"
        )
        .then(m => m.delete(5000));
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(
        "Sorry You Didn`t Have** MANAGE_MESSAGES** Permissions"
      );
    let say = new Discord.MessageEmbed()
      .setTitle(message.guild.name)
      .setThumbnail(message.guild.iconURL())
      .setDescription(args.join("  "))
      .setColor(0x23b2d6)
      .setImage(message.guild.iconURL())
      .setFooter(message.guild.name);
    message.channel.send(say);
    message.delete();
  }
});
//////////==============================================================///////////
////////////////////////////كود ارسال كت تويت بالشات
client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "tweet") {
    if (!message.channel.guild)
      return message.channel
        .send(
          "Sorry This Command Is Allowed For Humans With **MANAGE_MESSAGES**Permissions"
        )
        .then(m => m.delete(5000));
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send(
        "Sorry You Didn`t Have** MANAGE_MESSAGES** Permissions"
      );
    let say = new Discord.MessageEmbed()
      .setTitle(`كت تويت`)
      .setDescription(args.join("  "))
      .setColor(0x23b2d6)
      .setImage(message.guild.iconURL())
      .setFooter(message.guild.name);
    message.channel.send(say);
    message.delete();
  }
});
//////////==============================================================///////////
////////////////////////////////
////////////////كود انشاء رتبة سريع
client.on("message", async message => {
  if (!message.guild || message.author.bot) return;
  let args = message.content.split(" ");
  if (args[0] == prefix + "crole") {
    if (
      !message.guild.me.permissions.has("MANAGE_ROLES") ||
      !message.member.permissions.has("MANAGE_ROLES")
    )
      return;
    if (!args[1] || !args[2])
      return message.reply(
        `Usage: ${args[0]} [role color] [role name]\nExample: ${
          args[0]
        } blue Admin`
      );
    try {
      let role = await message.guild.createRole({
        name: args.slice(2).join(" ") || "new role",
        color: args[1].toUpperCase() || null
      });
      await message.reply(`Done, Created **${role.name}** role!`);
    } catch (e) {
      message.reply(`Error! ${e.message || e}`);
    }
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////// اضافة ربتة لشخص معين او الجميع
client.on("message", message => {
  let roleembed = new Discord.MessageEmbed();
  var args = message.content.split(" ").slice(1);
  var msg = message.content.toLowerCase();
  if (!message.guild) return;
  if (!msg.startsWith(prefix + "role")) return;
  if (!message.member.permissions.has("MANAGE_ROLES"))
    return message.channel.send(" **__You Did`nt Have Perimissions__☹️**");
  if (msg.toLowerCase().startsWith(prefix + "roleembed")) {
    if (!args[0]) return message.channel.send(roleembed);
    if (!args[1]) return message.channel.send(roleembed);
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply(
        (roleembed = new Discord.MessageEmbed()
          .setTitle(`How To Use Command `)
          .setThumbnail(
            "https://www.tashlee7sa.com/tashlee7admin/img/category_images/53_2018-05-26_biz-problem-1020.png"
          )
          .setDescription(
            `
Exampels :
${prefix}role @virgel rolename 
${prefix}role all rolename 
${prefix}role humans rolename 
${prefix}role bots rolename `
          )
          .setFooter(
            "Requested by " + message.author.username,
            message.author.avatarURL()
          ))
      );
    if (message.mentions.members.first()) {
      message.mentions.members.first().roles.add(role1);
      return message.reply(
        "**:white_check_mark: Done Aded To [ " +
          args[0] +
          " ] Role [ " +
          role1.name +
          " ]  **"
      );
    }
    if (args[0] == "all0000000000000000000000000000000000000000") {
      message.guild.members.forEach(m => m.roles.add(role1));
      return message.reply(
        "**:white_check_mark: Done Aded To All [ " + role1.name + " ] **"
      );
    } else if (
      args[0] == "b00000000000000000000000000000000000000000000000000000"
    ) {
      message.guild.members
        .filter(m => m.user.bot)
        .forEach(m => m.roles.add(role1));
      return message.reply(
        "**:white_check_mark: Done Aded To Bots [ " + role1.name + " ]**"
      );
    } else if (args[0] == "h000000000000000000000000000000000000000000") {
      message.guild.members
        .filter(m => !m.user.bot)
        .forEach(m => m.roles.add(role1));
      return message.reply(
        "**:white_check_mark: Done Aded To Humens [ " + role1.name + " ] **"
      );
    }
  } else {
    if (!args[0])
      return message.reply(
        (roleembed = new Discord.MessageEmbed()
          .setTitle(`How To Use Command `)
          .setThumbnail(
            "https://www.tashlee7sa.com/tashlee7admin/img/category_images/53_2018-05-26_biz-problem-1020.png"
          )
          .setDescription(
            `
Exampels :
${prefix}role @virgel rolename 
${prefix}role all rolename 
${prefix}role h rolename 
${prefix}role b rolename `
          )
          .setFooter(
            "Requested by " + message.author.username,
            message.author.avatarURL()
          ))
      );
    if (!args[1])
      return message.reply(
        (roleembed = new Discord.MessageEmbed()
          .setTitle(`How To Use Command `)
          .setThumbnail(
            "https://www.tashlee7sa.com/tashlee7admin/img/category_images/53_2018-05-26_biz-problem-1020.png"
          )
          .setDescription(
            `
Exampels :
${prefix}role @virgel rolename 
${prefix}role all rolename 
${prefix}role humans rolename 
${prefix}role bots rolename `
          )
          .setFooter(
            "Requested by " + message.author.username,
            message.author.avatarURL()
          ))
      );
    var role = msg
      .split(" ")
      .slice(2)
      .join(" ")
      .toLowerCase();
    var role1 = message.guild.roles
      .filter(r => r.name.toLowerCase().indexOf(role) > -1)
      .first();
    if (!role1)
      return message.reply(
        (roleembed = new Discord.MessageEmbed()
          .setTitle(`How To Use Command `)
          .setThumbnail(
            "https://www.tashlee7sa.com/tashlee7admin/img/category_images/53_2018-05-26_biz-problem-1020.png"
          )
          .setDescription(
            `
Exampels :
${prefix}role @virgel rolename 
${prefix}role all rolename 
${prefix}role humans rolename 
${prefix}role bots rolename `
          )
          .setFooter(
            "Requested by " + message.author.username,
            message.author.avatarURL()
          ))
      );
    if (message.mentions.members.first()) {
      message.mentions.members.first().roles.add(role1);
      return message.reply(
        "**:white_check_mark:Done Added Role[ " +
          role1.name +
          " ] To [ " +
          args[0] +
          " ] **"
      );
    }
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// اوامر ترفيهية
////////////////////////// اكواد للترفيه
///////////////// killكود
client.on("message", message => {
  if (message.content.startsWith(prefix + "kill")) {
    let user = message.mentions.users.first();
    if (!user) {
      return message.emit("commandUsage", message, this.help);
    }
    let kill = [
      "https://images-ext-2.discordapp.net/external/4nztNvTnX0WDlvW0n71rLjgLbQt-yHY-kD4nrBoPB0I/https/cdn.weeb.sh/images/HyXTiyKw-.gif",
      "https://media1.tenor.com/images/03f685d9d3295ffaa82bc6daae9800b5/tenor.gif?itemid=15281682",
      "https://thumbs.gfycat.com/PhysicalKindHypacrosaurus-size_restricted.gif",
      "https://i.gifer.com/UuWD.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} 🗡️ 🔪 killed You 🗡️ 🔪  ${user.username}!`,
          image: {
            url: kill[Math.floor(Math.random() * kill.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
///////////////// Dance كود
client.on("message", message => {
  if (message.content.startsWith(prefix + "dance")) {
    let user = message.mentions.users.first();
    if (!user) {
      return message.emit("commandUsage", message, this.help);
    }
    let dance = [
      "https://media1.giphy.com/media/z3E9CtyzgPxxIW7Yk6/giphy.gif",
      "https://global-uploads.webflow.com/5e2b8863ba7fff8df8949888/5eab38e80c6c922b50b51f00_FIGURE_8_SWAYS.gif",
      "https://media.tenor.com/images/7d342463f9c759d0bbedc13c64a0b2ba/tenor.gif",
      "https://i.pinimg.com/originals/e4/eb/e1/e4ebe1eac96dda0534094a9cdca80e65.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} 💃 👯 Dancing With You 👯 💃   ${user.username}!`,
          image: {
            url: dance[Math.floor(Math.random() * dance.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

///////////////// kiss كود
client.on("message", message => {
  if (message.content.startsWith(prefix + "kiss")) {
    let user = message.mentions.users.first();
    if (!user) {
      return message.emit("commandUsage", message, this.help);
    }
    let kiss = [
      "https://media.giphy.com/media/dP8ONh1mN8YWQ/giphy.gif",
      "https://media.giphy.com/media/CzCi6itPr3yBa/giphy.gif",
      "https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif",
      "https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
      "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
      "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
      "https://media.giphy.com/media/BaEE3QOfm2rf2/giphy.gif",
      "https://media.giphy.com/media/OSq9souL3j5zW/giphy.gif",
      "https://media.giphy.com/media/ll5leTSPh4ocE/giphy.gif",
      "https://media.giphy.com/media/10r6oEoT6dk7E4/giphy.gif",
      "https://media.giphy.com/media/YC4QEtFmz64sE/giphy.gif",
      "https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif",
      "https://media.giphy.com/media/flmwfIpFVrSKI/giphy.gif",
      "https://media.giphy.com/media/Z21HJj2kz9uBG/giphy.gif",
      "https://media.giphy.com/media/mGAzm47irxEpG/giphy.gif",
      "https://media.giphy.com/media/JynbO9pnGxPrO/giphy.gif",
      "https://media.giphy.com/media/7z1xs4Fl9Kb8A/giphy.gif",
      "https://media.giphy.com/media/EP9YxsbmbplIs/giphy.gif",
      "https://media.giphy.com/media/q7MxQyarcDHDW/giphy.gif",
      "https://media.giphy.com/media/uSHX6qYv1M7pC/giphy.gif",
      "https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif",
      "https://media.giphy.com/media/EVODaJHSXZGta/giphy.gif",
      "https://media.giphy.com/media/fHtb1JPbfph72/giphy.gif",
      "https://media.giphy.com/media/pwZ2TLSTouCQw/giphy.gif",
      "https://media.giphy.com/media/DfzHC09hY64Gk/giphy.gif",
      "https://media.giphy.com/media/l0MYB8Ory7Hqefo9a/giphy.gif",
      "https://media.giphy.com/media/Y9iiZdUaNRF2U/giphy.gif",
      "https://media.giphy.com/media/CTo4IKRN4l4SA/giphy.gif",
      "https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif",
      "https://media.giphy.com/media/pFg4Ko6pXqQVy/giphy.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} 😍😍Kissed You 😍😍  ${user.username}!`,
          image: {
            url: kiss[Math.floor(Math.random() * kiss.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

/////////////////////////////////////// boom كود
client.on("message", message => {
  if (message.content.startsWith(prefix + "boom")) {
    let user = message.mentions.users.first();
    if (!user) {
      return message.emit("commandUsage", message, this.help);
    }
    let bombs = [
      "https://media.giphy.com/media/Xp98Vi5OBvhXpwA0Zp/giphy.gif",
      "https://media.giphy.com/media/POnwee2RZBWmWWCeiX/giphy.gif",
      "https://media.giphy.com/media/oywQ7OhnYupINQa0L4/giphy.gif",
      "https://media.giphy.com/media/5aLrlDiJPMPFS/giphy.gif",
      "https://media.giphy.com/media/l1BgS9aNtdCdjgkaQ/giphy.gif",
      "https://media.giphy.com/media/d0NnEG1WnnXqg/giphy.gif",
      "https://media.giphy.com/media/NmrqUdwGXPOog/giphy.gif",
      "https://media.giphy.com/media/dpnfPvaCIHBrW/giphy.gif",
      "https://media.giphy.com/media/mks5DcSGjhQ1a/giphy.gif",
      "https://media.giphy.com/media/8wfoaIjVc0FBaLu5xH/giphy.gif",
      "https://media.giphy.com/media/xThtanBNixj1O1m5oY/giphy.gif",
      "https://media.giphy.com/media/fdGkCOiM0oOqI/giphy.gif",
      "https://media.giphy.com/media/c862b2dAhJXYA/giphy.gif",
      "https://media.giphy.com/media/CepTYjGRbV1ba/giphy.gif",
      "https://media.giphy.com/media/sRGCQ7INgSD0qbTqB5/giphy.gif",
      "https://media.giphy.com/media/ZJYOwl8SbFsic/giphy.gif",
      "https://media.giphy.com/media/3oEhmKspQX9EN48HNm/giphy.gif",
      "https://media.giphy.com/media/l1KVcAP6jvP9r4MaA/giphy.gif",
      "https://media.giphy.com/media/j2mY6orBJqAdG/giphy.gif",
      "https://media.giphy.com/media/3oz8xEqn8AGAQbR0yY/giphy.gif",
      "https://media.giphy.com/media/l4lQW9KfRQscU0ds4/giphy.gif",
      "https://media.giphy.com/media/XathaB5ILqSME/giphy.gif",
      "https://media.giphy.com/media/26AHvF2p5pridaSf6/giphy.gif",
      "https://media.giphy.com/media/Nlur5uO8GkjC0/giphy.gif",
      "https://media.giphy.com/media/l1J3preURPiwjRPvG/giphy.gif",
      "https://media.giphy.com/media/8cdZit2ZcjTri/giphy.gif",
      "https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif",
      "https://media.giphy.com/media/V88pTEefkoOFG/giphy.gif",
      "https://media.giphy.com/media/rfWAomOTPeOo8/giphy.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} 💣💣boombed You💣💣  ${user.username}!`,
          image: {
            url: bombs[Math.floor(Math.random() * bombs.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////////////////////////////////////// hug كود

client.on("message", message => {
  if (message.content.startsWith(prefix + "hug")) {
    let user = message.mentions.users.first();
    if (!user) {
      return message.emit("commandUsage", message, this.help);
    }
    let hugs = [
      "https://tenor.com/view/virtual-hug-ddlc-monica-anime-hug-loading-gif-15502340",
      "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
      "https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif",
      "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
      "https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
      "https://media.giphy.com/media/hi0VuTUqLrmuc/giphy.gif",
      "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif",
      "https://media.giphy.com/media/7WQQXPg6o3YNa/giphy.gif",
      "https://media.giphy.com/media/LWTxLvp8G6gzm/giphy.gif",
      "https://media.giphy.com/media/xZshtXrSgsRHy/giphy.gif",
      "https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif",
      "https://media.giphy.com/media/10BcGXjbHOctZC/giphy.gif",
      "https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif",
      "https://media.giphy.com/media/xUPGcgtKxm4PADy3Cw/giphy.gif",
      "https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif",
      "https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif",
      "https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif",
      "https://media.giphy.com/media/ddGxYkb7Fp2QRuTTGO/giphy.gif",
      "https://media.giphy.com/media/pXQhWw2oHoPIs/giphy.gif",
      "https://media.giphy.com/media/ZRI1k4BNvKX1S/giphy.gif",
      "https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif",
      "https://media.giphy.com/media/s31WaGPAmTP1e/giphy.gif",
      "https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif",
      "https://media.giphy.com/media/aVmEsdMmCTqSs/giphy.gif",
      "https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif",
      "https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif",
      "https://media.giphy.com/media/kFTKQfjK4ysZq/giphy.gif",
      "https://media.giphy.com/media/vVA8U5NnXpMXK/giphy.gif",
      "https://media.giphy.com/media/2q2qHJu838EyQ/giphy.gif",
      "https://media.giphy.com/media/q3kYEKHyiU4kU/giphy.gif",
      "https://media.giphy.com/media/3ZnBrkqoaI2hq/giphy.gif",
      "https://media.giphy.com/media/ExQqjagJBoECY/giphy.gif",
      "https://media.giphy.com/media/3o6Yg5fZCGeFArIcbm/giphy.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} 😻😻huged you 😻😻 ${user.username}!`,
          image: {
            url: hugs[Math.floor(Math.random() * hugs.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
/////////////////////////////////////// slap  كود
client.on("message", message => {
  if (message.content.startsWith(prefix + "slap")) {
    let user = message.mentions.users.first();
    if (!user) {
      return message.emit("commandUsage", message, this.help);
    }
    let slaps = [
      "https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif",
      "https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif",
      "https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif",
      "https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif",
      "https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif",
      "https://media.giphy.com/media/81kHQ5v9zbqzC/giphy.gif",
      "https://media.giphy.com/media/QYT2VEOXVyVmE/giphy.gif",
      "https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif",
      "https://media.giphy.com/media/xXRDuvEcMA2JO/giphy.gif",
      "https://media.giphy.com/media/zRlGxKCCkatIQ/giphy.gif",
      "https://media.giphy.com/media/9U5J7JpaYBr68/giphy.gif",
      "https://media.giphy.com/media/q0uYk5uwJVFug/giphy.gif",
      "https://media.giphy.com/media/iREUC7qrjN4vC/giphy.gif",
      "https://media.giphy.com/media/AkKEOnHxc4IU0/giphy.gif",
      "https://media.giphy.com/media/6Fad0loHc6Cbe/giphy.gif",
      "https://media.giphy.com/media/prKt29rL7zAbe/giphy.gif",
      "https://media.giphy.com/media/LeTDEozJwatvW/giphy.gif",
      "https://media.giphy.com/media/6UTkJXBd26qiI/giphy.gif",
      "https://media.giphy.com/media/VEmm8ngZxwJ9K/giphy.gif",
      "https://media.giphy.com/media/EtdEOL3MbPbmE/giphy.gif",
      "https://media.giphy.com/media/CIvfqJqBbvliU/giphy.gif",
      "https://media.giphy.com/media/3pSKnxaDzl9Oo/giphy.gif",
      "https://media.giphy.com/media/1iw7RG8JbOmpq/giphy.gif",
      "https://media.giphy.com/media/m0VwgrO5yXxQY/giphy.gif",
      "https://media.giphy.com/media/2o855hr1xVotO/giphy.gif",
      "https://media.giphy.com/media/URBigLkgWoYzS/giphy.gif",
      "https://media.giphy.com/media/pGOdXNi6J7ML6/giphy.gif",
      "https://media.giphy.com/media/HHUd5nOFbSYtG/giphy.gif",
      "https://media.giphy.com/media/TZp6XSDusOnXG/giphy.gif",
      "https://media.giphy.com/media/wqP5TOFnOMwqQ/giphy.gif",
      "https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} slapped you ${user.username}!`,
          image: {
            url: slaps[Math.floor(Math.random() * slaps.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});

/////////////////////////////////////////////
/////////////////////////love

client.on("message", message => {
  if (message.content.startsWith(prefix + "love")) {
    let user = message.mentions.users.first();
    if (!user) {
      return message.emit("commandUsage", message, this.help);
    }
    let loves = [
      "https://media.giphy.com/media/YDB4EF3U6i6IM/giphy.gif",
      "https://media.giphy.com/media/l41JWw65TcBGjPpRK/giphy.gif",
      "https://media.giphy.com/media/3o6gDZ9unSrDk3EuR2/giphy.gif",
      "https://media.giphy.com/media/ymkLJAxVz2la/giphy.gif",
      "https://media.giphy.com/media/ZOln4JxCoZay4/giphy.gif",
      "https://media.giphy.com/media/l0K4kWJir91VEoa1W/giphy.gif",
      "https://media.giphy.com/media/X3FmqQ7ehoCBy/giphy.gif",
      "https://media.giphy.com/media/VlzUkJJzvz0UU/giphy.gif",
      "https://media.giphy.com/media/NbPJFUS6Vkx7q/giphy.gif",
      "https://media.giphy.com/media/wDEWXcisSjrQQ/giphy.gif",
      "https://media.giphy.com/media/xT8qBuhwq0OyL7UkdW/giphy.gif",
      "https://media.giphy.com/media/gfvxlwRKH1y5q/giphy.gif",
      "https://media.giphy.com/media/PuTSgeacS3Z7i/giphy.gif",
      "https://media.giphy.com/media/l49JBwneyflgjm5zO/giphy.gif",
      "https://media.giphy.com/media/QKUA2bIAgjFgk/giphy.gif",
      "https://media.giphy.com/media/T3Uzzre7Ap0mk/giphy.gif",
      "https://media.giphy.com/media/3oeSB6pawq6G99xCXS/giphy.gif",
      "https://media.giphy.com/media/iKIgD5j0I3hMQ/giphy.gif",
      "https://media.giphy.com/media/hhHcFH0xAduCs/giphy.gif",
      "https://media.giphy.com/media/3o7qDJKIO5rSeyHhvO/giphy.gif",
      "https://media.giphy.com/media/92bGINsmjAuUE/giphy.gif",
      "https://media.giphy.com/media/bErElGdAHUmoE/giphy.gif",
      "https://media.giphy.com/media/jQqU9dCKUOdri/giphy.gif",
      "https://media.giphy.com/media/10uJ0IFxlCA06I/giphy.gif",
      "https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif",
      "https://media.giphy.com/media/3osxYcry2fDfqyhOQ8/giphy.gif",
      "https://media.giphy.com/media/3ohs84a6AyArTscVsk/giphy.gif",
      "https://media.giphy.com/media/3o6Zt6D0wctP0kpuwg/giphy.gif",
      "https://media.giphy.com/media/4zmFt0xpke8AU/giphy.gif",
      "https://media.giphy.com/media/l3vR9O3vpOCDRo8rC/giphy.gif",
      "https://media.giphy.com/media/13sgibUDaaaEU0/giphy.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} :heart:  Love You   ${user.username}!`,
          image: {
            url: loves[Math.floor(Math.random() * loves.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
////////////////////// اكواد حيوانات وطيور
/////////////////كود قطة
client.on("message", message => {
  if (message.content.startsWith(prefix + "cat")) {
    let cat = [
      "https://i.pinimg.com/564x/03/2f/fe/032ffe5d4e498656f1649f7fa0db9641.jpg",
      "https://pic.i7lm.com/wp-content/uploads/2020/04/%D8%B5%D9%88%D8%B1-%D9%82%D8%B7%D8%B7-images-cats-23.jpg",
      "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
      "https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
      "http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
      "https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
      "https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
      "https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4QV7gESmIMwP8fNw4rYJnszNfmbTIQAA1YQ&usqp=CAU",
      "http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg",
      "https://i2.wp.com/rjeem.com/wp-content/uploads/2018/09/2015_1412123047_285-1.jpg?fit=1000%2C800&ssl=1&is-pending-load=1",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4ZktBnwxm8San5aC3J5IQ6hbp6Mv6G-yH2A&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWSOfVKWeUXO1igbOj5_JZ0ZehxDhk0DL2xw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2qTJ61y-_4pty-HmDKfpLdw6kCCvwOPgdRA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBlutwrVwXYiJ4WIbDdGjxM16KJ8PGiRfTCg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6fH4WcqPLntpPILC1Ag-_D7dkrljytz9iNg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0mrch-c34yz4QN-eQoEkPaxwSRlEb3eZJRQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReLDHsAIhgLgFpupyZg0CtevFcI2NY9WkoOQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSy2ExnGjx0SMxR0GJUrlASUhjWcgYoSdhSCA&usqp=CAU",
      "https://i.pinimg.com/564x/03/2f/fe/032ffe5d4e498656f1649f7fa0db9641.jpg",
      "https://i.pinimg.com/564x/03/2f/fe/032ffe5d4e498656f1649f7fa0db9641.jpg",
      "https://i.pinimg.com/564x/b1/f5/10/b1f51099a6957a1692a44d736ae290ba.jpg",
      "https://i.pinimg.com/564x/eb/e6/58/ebe658ca08a36ad44740d3fd90dd800d.jpg",
      "https://i.pinimg.com/236x/d9/87/27/d987270fa1a22472714dcadcb3254b06.jpg"
    ];

    message.channel.send({
      embed: {
        description: `cat \nby: ${message.author.username}`,
        image: {
          url: cat[Math.floor(Math.random() * cat.length)]
        }
      }
    });
  }
});
///////////////////////////////////////
////////////////كود كلب
client.on("message", message => {
  if (message.content.startsWith(prefix + "dog")) {
    let dog = [
      "https://vid.alarabiya.net/images/2018/08/15/97ae1729-b284-4695-b399-632ffc4afada/97ae1729-b284-4695-b399-632ffc4afada_16x9_1200x676.jpg?format=jpeg&width=960",
      "https://vid.alarabiya.net/images/2019/09/29/026e7184-5257-41a3-8ad1-9d014f02d828/026e7184-5257-41a3-8ad1-9d014f02d828_16x9_600x338.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYunLbtauPOT_luYPlY5rcgLdSIy25UEIFdQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVPsEovzDkwlVvleE-LIP9RbU35xoLC_O0fw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSU5iou8ZwBs_H6uMq_i9NkqfRSRT0obntyWQ&usqp=CAU",
      "https://iadsb.tmgrup.com.tr/eb07fd/645/344/0/593/1915/1616?u=https://idsb.tmgrup.com.tr/ar/2019/01/20/--1548009993854.jpg",
      "https://cdnarabic1.img.sputniknews.com/img/103839/73/1038397392_0:120:1920:1159_1000x541_80_0_0_4009476318c0543d035e47f6743a3a34.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR44OM2NCc8miE5btIsXQ0rOZc4cDdYpSP2A&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb8pb2V8GmZ5XTwvhFPXjqL-KeYoSmumdNag&usqp=CAU",
      "https://ra2ej.awicdn.com/site-images/sites/default/files/ra2ej-prod/album/e/8/348259/29e3b199880f9cf945902272b3bd8922de1c2d9a-210220175628.jpg?preset=v3.0_970XDYN&save-png=1",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXXIodUcikily5hPaBKgp6d4nKsUuOJ5HgbQ&usqp=CAU",
      "https://watanimg.elwatannews.com/image_archive/648x316/20615030371575657495.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTeldEG8IcGMxO-2EC32ybN87ZKxyImspmnQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQw0XuCRR9-FZ77Ox0KvPeHUeowf3ylDQMB_A&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsQ1WEruoi72qsK-o7wP_XNzFJfKfx64zltA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZvdVoHRY2VD40wRUouwzCNpLF2KmGJrQTRg&usqp=CAU",
      "https://tenor.com/view/dog-monkey-bff-cute-run-gif-7988209",
      "https://tenor.com/view/dog-dawg-wut-what-wtf-gif-9118700",
      "https://tenor.com/view/dog-eyebrow-funny-eyebrow-raise-gif-13185653",
      "https://tenor.com/view/funny-animals-dog-dance-cute-smile-gif-12759384",
      "https://tenor.com/view/funny-dogs-cute-smile-gif-10222299"
    ];

    message.channel.send({
      embed: {
        description: `dog \nby: ${message.author.username}`,
        image: {
          url: dog[Math.floor(Math.random() * dog.length)]
        }
      }
    });
  }
});

////////////////////////////////////////////////////////////
////////////////اكواد العاب صراحة وحكم
const kingmas = [
  "*** منشن الجميع وقل انا اكرهكم. ***",
  "*** اتصل على امك و قول لها انك تحبها :heart:. ***",
  "*** تصل على الوالده  و تقول لها  احب وحده.***",
  "*** تتصل على شرطي تقول له عندكم مطافي.***",
  "*** صور اي شيء يطلبه منك الاعبين.***",
  "*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***",
  "*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***",
  "*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***",
  "***  تروح عند شخص تقول له احبك. ***",
  "***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***",
  "*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***",
  "*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***",
  "*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***",
  "*** ذي المرة لك لا تعيدها.***",
  "*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***",
  "*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***",
  "*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***",
  "***سو مشهد تمثيلي عن مصرية بتولد.***",
  "*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***",
  "*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***",
  "*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***",
  "*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***",
  "*** تتصل على الوالده  و تقول لها خطفت شخص. ***",
  "*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***"
];
client.on("message", message => {
  var prefix = "0";
  if (message.content.startsWith(prefix + "chalng")) {
    var mariam = new Discord.MessageEmbed()
      .setTitle("Chalnge Game ..")
      .setColor("RANDOM")
      .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
      .setImage(
        "https://wikiyat.com/wp-content/uploads/2019/09/%D8%A7%D9%84%D9%86%D8%A7%D8%B3-%D8%A8%D9%88%D8%AC%D9%87%D9%8A%D9%86-780x405.png"
      )
      .setThumbnail("https://2img.net/u/2911/19/08/00/smiles/465893.gif")
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL()
      );

    message.channel.send(mariam);
    message.react("😏");
  }
});
///// لعبت الصراحة
const صراحة = [
  "صراحه  |  صوتك حلوة؟",
  "صراحه  |  التقيت الناس مع وجوهين؟",
  "صراحه  |  شيء وكنت تحقق اللسان؟",
  "صراحه  |  أنا شخص ضعيف عندما؟",
  "صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟",
  "صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟",
  "صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟",
  "صراحه  |  كيفية الكشف عن من يكمن عليك؟",
  "صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟",
  "صراحه  |  أشجع شيء حلو في حياتك؟",
  'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
  "صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟",
  "صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟",
  "صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟",
  "صراحه  |  نظرة و يفسد الصداقة؟",
  "صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟",
  "صراحه  |  شخص معك بالحلوه والمُره؟",
  "صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟",
  "صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟",
  "صراحه  |  وش تتمنى الناس تعرف عليك؟",
  "صراحه  |  ابيع المجرة عشان؟",
  "صراحه  |  أحيانا احس ان الناس ، كمل؟",
  "صراحه  |  مع مين ودك تنام اليوم؟",
  "صراحه  |  صدفة العمر الحلوة هي اني؟",
  'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
  "صراحه  |  صفة تحبها في نفسك؟",
  'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
  "صراحه  |  تصلي صلواتك الخمس كلها؟",
  "صراحه  |  ‏تجامل أحد على راحتك؟",
  "صراحه  |  انت بتحب اي بنت؟",
  "صراحه  |  اشجع شيء سويتة بحياتك؟",
  "صراحه  |  وش ناوي تسوي اليوم؟",
  "صراحه  |  وش شعورك لما تشوف المطر؟",
  "صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟",
  "صراحه  |  ما اكثر شي ندمن عليه؟",
  "صراحه  |  اي الدول تتمنى ان تزورها؟",
  "صراحه  |  متى اخر مره بكيت؟",
  "صراحه  |  تقيم حظك ؟ من عشره؟",
  "صراحه  |  هل تعتقد ان حظك سيئ؟",
  "صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟",
  "صراحه  |  كلمة تود سماعها كل يوم؟",
  "صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟",
  "صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟",
  "صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟",
  "صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟",
  "‏صراحه | هل جرحت شخص تحبه من قبل ؟",
  "صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟",
  "‏صراحه | هل تحب عائلتك ام تكرههم؟",
  "‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟",
  "‏صراحه  |  هل خجلت من نفسك من قبل؟",
  "‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟",
  "‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟",
  "‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟",
  "‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟",
  "‏صراحه  |  ماذا تختار حبيبك أم صديقك؟",
  "‏صراحه  | هل حياتك سعيدة أم حزينة؟",
  "صراحه  |  ما هي أجمل سنة عشتها بحياتك؟",
  "‏صراحه  |  ما هو عمرك الحقيقي؟",
  "‏صراحه  |  ما اكثر شي ندمن عليه؟",
  "صراحه  |  ما هي أمنياتك المُستقبلية؟‏",
  "صراحه | نفسك فـ ايه ؟",
  "صراحه | هل تحب فتاه او احببت من قبل ؟",
  "صراحه | هل شكلك حلو او جيد او متوسط او سئ ؟",
  "صراحه | ما هي الماده الدراسيه التي تحبها اكثر وتفضلها؟",
  "صراحه | هل تحب مدرستك ؟",
  "صراحه | ما الشئ الذي تتمني ان يحصل ؟",
  "صراحه | هل تحب عائلتك ؟"
];
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "sara7a")) {
    if (!message.channel.guild)
      return message.reply("** This command only for servers **");
    var client = new Discord.MessageEmbed()
      .setTitle("Sara7a Game ..")
      .setColor("RANDOM")
      .setDescription(`**${صراحة[Math.floor(Math.random() * صراحة.length)]}**`)
      .setImage(
        "https://pa1.narvii.com/6798/8de66d17a61106610dd7c781f34c4fda74fccf4d_00.gif"
      )
      .setThumbnail("https://2img.net/u/2911/19/08/00/smiles/465893.gif")
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL()
      );
    message.channel.send(client);
    message.react("🧐");
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////كود معلومات المتصلين بالسرفر//////////////////////////////////
client.on("message", message => {
  if (message.content == prefix + "members") {
    const embed = new Discord.MessageEmbed().setDescription(`**Members Status 🔋
:green_circle: |  Online   ${
      message.guild.members.filter(m => m.presence.status == "online").size
    }
:red_circle: | Busy       ${
      message.guild.members.filter(m => m.presence.status == "dnd").size
    }
:yellow_circle: |  Idle      ${
      message.guild.members.filter(m => m.presence.status == "idle").size
    }   
:purple_circle: |  Offline   ${
      message.guild.members.filter(m => m.presence.status == "offline").size
    } 
:radio_button: |   All  ${message.guild.memberCount}**`);
    message.channel.send({ embed });
  }
});
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////كود معلومات الصلاحيات////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "myperms")) {
    if (!message.channel.guild) return;
    var perms = JSON.stringify(
      message.channel.permissionsFor(message.author).serialize(),
      null,
      4
    );
    var virgel = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(":tools: Permissions")
      .setDescription(`**treu: Yes | false: No**`)
      .setThumbnail(message.author.avatarURL())
      .addField("Your Permissions:", perms)
      .setAuthor(message.guild.name)
      .setImage(
        "https://static.dribbble.com/users/2206859/screenshots/4945757/d2.gif"
      );
    message.channel.send({ embed: virgel });
  }
});
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////اظهار واخفاء الروم////////////////////////////////////////////
client.on("message", message => {
  if (message.content === prefix + "hide") {
    if (!message.channel.guild) return;
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.reply("You Dont Have Permission 🤥");
    message.channel.overwritePermissions(message.guild.id, {
      READ_MESSAGES: false
    });
    message.channel.send("**everyone Now Can`t Show Room 🚫**");
  }
});
client.on("message", message => {
  if (message.content === prefix + "show") {
    if (!message.channel.guild) return;
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.reply("You Dont Have Permission🤥");
    message.channel.overwritePermissions(message.guild.id, {
      READ_MESSAGES: true
    });
    message.channel.send("**everyone Now Can Show Room 👀**");
  }
});
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
////////////////////////////وقت اتصال البوت////////////////////////////////////////////
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {
      if (uptime >= 8.64e7) {
        days++;
        uptime -= 8.64e7;
      } else if (uptime >= 3.6e6) {
        hours++;
        uptime -= 3.6e6;
      } else if (uptime >= 60000) {
        minutes++;
        uptime -= 60000;
      } else if (uptime >= 1000) {
        seconds++;
        uptime -= 1000;
      }

      if (uptime < 1000) notCompleted = false;
    }

    message.channel.send(
      "🕰️" +
        `\`Bot Online For  [${days}] day   [${hours}] hour   [${minutes}] min  [${seconds}] sec\`` +
        "🕰️"
    );
  }
});

///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////كود منع البوتات//////////////////////////////////////
client.antibots = new Enmap({ name: "antibot" });
var antibots = client.antibots;
client.on("message", codes => {
  if (codes.content == prefix + "antibots on") {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "On"
    });

    codes.channel.send("**:shield:  | Bots  Can`t Join Server Now!**");
  }
  if (codes.content == prefix + "antibots off") {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "Off"
    });
    codes.channel.send("**:detective:  | Bots Can Join Server Now !**");
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots.get(`${member.guild.id}`)) {
    antibots.set(`${member.guild.id}`, {
      onoff: "Off"
    });
  }
  if (antibots.get(`${member.guild.id}`).onoff == "Off") return;
  if (member.user.bot) return member.kick();
});
///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////كود منع الهاك//////////////////////////////////////

let antihack = JSON.parse(fs.readFileSync("../json/antihack.json", "utf8"));
client.on("message", message => {
  if (message.content.startsWith(prefix + "antihack")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.permissions.has("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!antihack[message.guild.id])
      antihack[message.guild.id] = {
        onoff: "Off"
      };
    if (antihack[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**✅ The AntiHack Is __𝐎𝐍__ !**`),
        (antihack[message.guild.id].onoff = "On")
      ];
    if (antihack[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**⛔ The AntiHack Is __𝐎𝐅𝐅__ !**`),
        (antihack[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("../json/antihack.json", JSON.stringify(antihack), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

let spread = JSON.parse(fs.readFileSync("../json/spread.json", "utf8"));
client.on("message", message => {
  if (message.content.startsWith(prefix + "antilink off")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.permissions.has("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    spread[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**⛔ The AntiLink Is __𝐎𝐅𝐅__ !**`);
    fs.writeFile("../json/spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "antilink on")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.permissions.has("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    spread[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**✅ The AntiLink Is __𝐎𝐍__ !**`);
    fs.writeFile("../json/spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("https://")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**⛔ The Antilink ON ! So You Cant send links Here !**`
    );
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("www.")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**⛔ The Antilink ON ! So You Cant send links Here !**`
    );
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("discord")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.reply(
      `**⛔ The Antilink ON ! So You Cant send links Here !**`
    );
  }
});

////////////////////////////////
// كود منع نشر سيرفرات
client.on("message", async message => {
  if (message.content.includes("discord.gg")) {
    if (message.member.permissions.has("MANAGE_GUILD")) return;
    if (!message.channel.guild) return;
    message.delete();
    var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "muted");
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");
    message.member.roles.add(muterole);
    const embed500 = new Discord.MessageEmbed()
      .setTitle("Muted Ads")
      .addField(
        `**  You Have Been Muted **`,
        `**Reason : Sharing Another Discord Link**`
      )
      .setColor("c91616")
      .setThumbnail(`${message.author.avatarURL()}`)
      .setAuthor(message.author.username, message.author.avatarURL())
      .setFooter(`${message.guild.name} `);
    message.channel.send(embed500);
    message.author.send(
      "` You Have Been Muted if you Muted By Rong Please tell Admin `"
    );
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == prefix + "allbots") {
    if (message.author.bot) return;
    let i = 1;
    const botssize = message.guild.members
      .filter(m => m.user.bot)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setDescription(
        `**Found ${
          message.guild.members.filter(m => m.user.bot).size
        } bots in this Server**
${botssize.join("\n")}`
      )
      .setFooter(client.user.username, client.user.avatarURL()({ format: 'png', dynamic: true, size: 1024 }))
      .setTimestamp();
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.guild) return message.reply("**This Command Just In Servers**");
  if (message.content === prefix + "top-servers") {
    const top = client.guilds
      .sort((a, b) => a.memberCount - b.memberCount)
      .array()
      .reverse();
    message.channel.send(
      `**⇏ Top 15 Servers: **\n~~-------------------------------------------~~\n1. **${top[0].name}**: ${top[0].memberCount} \n2. **${top[1].name}**: ${top[1].memberCount}.\n3. **${top[2].name}**: ${top[2].memberCount}.\n4. **${top[3].name}**: ${top[3].memberCount}.\n5. **${top[4].name}**: ${top[4].memberCount}.\n6. **${top[5].name}**: ${top[5].memberCount}.\n7. **${top[6].name}**: ${top[6].memberCount}.\n8. **${top[7].name}**: ${top[7].memberCount}.\n9. **${top[8].name}**: ${top[8].memberCount}.\n10. **${top[9].name}**: ${top[9].memberCount} .\n11. **${top[10].name}**: ${top[10].memberCount} .\n12. **${top[11].name}**: ${top[11].memberCount} .\n13. **${top[12].name}**: ${top[12].memberCount} .\n14. **${top[13].name}**: ${top[13].memberCount} .\n15. **${top[14].name}**: ${top[14].memberCount} .\n~~-------------------------------------------~~`
    );
  }
});

///////////////////
const adminprefix = ".";
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!devs.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + "setname")) {
    client.user.setUsername(argresult).then;
    message.channel.send(`**${argresult}** : تم تغيير أسم البوت إلى`);
  } else if (message.content.startsWith(adminprefix + "setavatar")) {
    client.user.setAvatar(argresult);
    message.channel.send(`**${argresult}** : تم تغير صورة البوت`);
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == prefix + "allusers") {
    if (message.author.bot) return;
    let i = 1;
    const rolessize = message.guild.members
      .filter(m => m.guild.roles)
      .map(m => `${i++} - <@${m.id}>`);
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL())
      .setDescription(
        `**Found ${
          message.guild.members.filter(m => m.guild.roles).size
        } users in this Server**
${rolessize.join("\n")}`
      )
      .setFooter(client.user.username, client.user.avatarURL())
      .setTimestamp();
    message.channel.send(embed);
  }
});

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////admin help/////////////////////////////////////////

const Enmap1 = ("enmap");
const db = new Enmap1({ name: "Taxes" });
client.on("message", async message => {
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
    let errorembed3 = new Discord.MessageEmbed()
      .setTitle(`**:information_source: Error**`)
      .setColor("#f04747")
      .setDescription(`**It Must be a number**`)
      .setFooter(`${client.user.username}`);
    if (!args2) return message.channel.send(errorembed3);
    let errorembed2 = new Discord.MessageEmbed()
      .setTitle(`**:information_source: Error**`)
      .setColor("#f04747")
      .setDescription(`**Must Be A Number**`)
      .setFooter(`${client.user.username}`);
    if (isNaN(args2)) return message.channel.send(errorembed2);
    let errorembed = new Discord.MessageEmbed()
      .setTitle(`**:information_source: Error**`)
      .setColor("#f04747")
      .setDescription(`**Must The Number Larger 1**`)
      .setFooter(`${client.user.username}`);
    if (args2 < 1) return message.channel.send(errorembed);
    let embed3 = new Discord.MessageEmbed()
      .setTitle(`**:credit_card:  The Final Cost Is :**`)
      .setColor("#43b581")
      .setDescription(`1`)
      .setFooter(`${client.user.username}`);
    if (args2 == 1) return message.channel.send(embed3);
    let embed = new Discord.MessageEmbed()
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
    message.channel.send(embed);
  }

  if (message.content.startsWith(prefix + "tax")) {
    let args2 = parseInt(args);
    let tax = Math.floor((args2 * 20) / 19 + 1);
    let tax2 = Math.floor((args2 * 20) / 19 + 1 - args2);
    let tax3 = Math.floor((tax2 * 20) / 19 + 1);
    let tax4 = Math.floor(tax2 + tax3 + args2);
    let errorembed3 = new Discord.MessageEmbed()
      .setTitle(`**:information_source: Error**`)
      .setColor("#f04747")
      .setDescription(`**It Must be a number**`)
      .setFooter(`${client.user.username}`);
    if (!args2) return message.channel.send(errorembed3);
    let errorembed2 = new Discord.MessageEmbed()
      .setTitle(`**:information_source: Error**`)
      .setColor("#f04747")
      .setDescription(`**Must Be A Number**`)
      .setFooter(`${client.user.username}`);
    if (isNaN(args2)) return message.channel.send(errorembed2);
    let errorembed = new Discord.MessageEmbed()
      .setTitle(`**:information_source: Error**`)
      .setColor("#f04747")
      .setDescription(`**Must The Number Larger 1**`)
      .setFooter(`${client.user.username}`);
    if (args2 < 1) return message.channel.send(errorembed);
    let embed3 = new Discord.MessageEmbed()
      .setTitle(`**:credit_card:  The Final Cost Is :**`)
      .setColor("#43b581")
      .setDescription(`1`)
      .setFooter(`${client.user.username}`);
    if (args2 == 1) return message.channel.send(embed3);
    let embed = new Discord.MessageEmbed()
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
    message.channel.send(embed);
  }
  let ac = ["listening", "watching", "playing", "streaming", "default"];
  let ac2 = ["online", "idle", "invisible", "dnd", "default"];

  let args0 = message.content.split(" ");
  if (
    args0[0] ===
    prefix + "settings99999999999999999999999999999999999999999999999999999999"
  ) {
    if (!devs.includes(message.author.id)) return;
    if (
      args0[1] === "setname00000000000000000000000000000000000000000000000000"
    ) {
      if (!args0[2])
        return message.channel.send("**:x: Please input a new name.**");
      await client.user.setUsername(args0.slice(2).join(" "));
      let changedname = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("GREEN")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(message.guild.iconURL())
        .setDescription(
          `**✅ Done , The bot name changed to : ${args0.slice(2).join(" ")}**`
        );
      message.channel.send(changedname);
    } else if (
      args0[1] ===
      "setavatar0000000000000000000000000000000000000000000000000000000000"
    ) {
      if (!args0[2])
        return message.channel.send(
          "**:x: Please input an avatar URL.**"
        );
      await client.user.setAvatar(args0.slice(2).join(" "));
      let changedavatar = new Discord.MessageEmbed()
        .setTimestamp()
        .setImage(args0.slice(2).join(" "))
        .setColor("GREEN")
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(message.guild.iconURL())
        .setDescription(`**✅ The bot avatar was changed to :**`);
      message.channel.send(changedavatar);
    } else if (
      args0[1] === "setgame0000000000000000000000000000000000000000000000"
    ) {
      var ssss = message.content.split(" ").slice(1);
      var result = ssss.slice(2).join(" ");

      if (!ssss || !result)
        return message.channel.send(
          "**:x: Error : Usage **" +
            prefix +
            "**settings setgame [type] [game]**"
        );
      if (!ac.includes(ssss[1].toLowerCase()))
        return message.channel.send(
          "**:x: Unknown type.**\n\n> **Available Type(s) :**\n> [ `Listening` | `Watching` | `Playing` | `Streaming` | `Default` ]**"
        );
      await db.set(client.user.id, ssss[1].toUpperCase(), "type");
      await db.set(
        client.user.id,
        result.replace("default", `Taxs Bot.`),
        "game"
      );
      await client.user.setActivity(db.get(client.user.id, "game"), {
        type: db.get(client.user.id, "type"),
        url: "https://twitch.tv/idk"
      });
      message.channel.send(
        `**✅ Done , The bot game was changed into : ${result}**`
      );
    } else if (
      args0[1] === "setstatus00000000000000000000000000000000000000000000000"
    ) {
      if (!args0[2])
        return message.channel.send(
          "**:x: Error : Usage **" +
            "**" +
            prefix +
            "**" +
            "**settings setstatus [status]**"
        );
      if (!ac2.includes(args0[2].toLowerCase()))
        return message.channel.send(
          "**:x: Unknown Status.**\n\n> **Available Status(s) :**\n> [ `Online` | `Offline` | `Dnd` | `Idle` | `Default` ]**"
        );
      await db.set(
        client.user.id,
        args
          .slice(2)
          .join(" ")
          .replace("default", `online`),
        "status"
      );
      await client.user.setStatus(db.get(client.user.id, "status"));
      message.channel.send(
        `**✅ Done , The bot game was changed into : ${args0[2]}**`
      );
    } else {
      message.channel.send(
        `> **:bulb: Usage**: ${prefix}settings [ \`setname\` - \`setavatar\` - \`setgame\` - \`setstatus\` ]`
      );
      message.react("ℹ️");
    }
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  let embed = new Discord.MessageEmbed();
  if (message.author.bot) return;
  if (message.getUserFromMention(client.user)) {
    message.reply(
      (embed = new Discord.MessageEmbed()
        .setTitle(`Hello`)
        .setThumbnail(
          "https://www.tashlee7sa.com/tashlee7admin/img/category_images/53_2018-05-26_biz-problem-1020.png"
        )
        .setDescription(
          `
My Prefix Is : [${prefix}]
Type : ${prefix}help : To Give You My Commands
`
        )
        .addField(
          "Add Bot",
          " [Click here](https://discord.com/api/oauth2/authorize?client_id=754792558453981325&permissions=8&scope=bot)",
          true
        )
        .addField(
          "Support Server",
          " [Click here](https://discord.gg/EhsMZYn)",
          true
        )
        .setFooter(
          "Requested by " + message.author.username,
          message.author.avatarURL()
        ))
    );
  }
});

const help = client.on("message", function(message) {
  if (message.content.startsWith(prefix + "help")) {
    let url = "hello.com";
    let messageArgs = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messagehelp = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    let arrayhelp = ["**# - admin1**", "**# - admin2**", "**# - genral**"];
    let result = `${arrayhelp[Math.floor(Math.random() * arrayhelp.length)]}`;
    var helpEmbed = new Discord.MessageEmbed()
      .setAuthor(`Zila-Bot`, client.user.avatarURL())
      .setTitle("React with emoji to send you help ")
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL())
      .addField("genral            ", "👥", true)
      .addField("admin1            ", "⚒️", true)
      .addField("admin2            ", "⚙️", true)
      .addField("ticket            ", "🎫", true)
      .addField("funny             ", "🌝", true)
      .addField("tax               ", "🔢", true)
      .addField(
        "Add Bot",
        " [Click here](https://discord.com/api/oauth2/authorize?client_id=754792558453981325&permissions=8&scope=bot)",
        true
      )
      .addField(
        "Support Server",
        " [Click here](https://discord.gg/EhsMZYn)",
        true
      );

    message.channel.send(helpEmbed).then(msg => {
      msg.react("👥");
      msg.react("⚒️");
      msg.react("⚙️");
      msg.react("🎫");
      msg.react("🌝");
      msg
        .react("🔢")
        .then(() => msg.react("👥"))
        .then(() => msg.react("⚒️"))
        .then(() => msg.react("⚙️"))
        .then(() => msg.react("🎫"))
        .then(() => msg.react("🌝"))
        .then(() => msg.react("🔢"));
      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "👥" && user.id === message.author.id; //glopal
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "⚒️" && user.id === message.author.id; //admin1
      let reaction3Filter = (reaction, user) =>
        reaction.emoji.name === "⚙️" && user.id === message.author.id; //admin2
      let reaction4Filter = (reaction, user) =>
        reaction.emoji.name === "🎫" && user.id === message.author.id; //ticket
      let reaction5Filter = (reaction, user) =>
        reaction.emoji.name === "🌝" && user.id === message.author.id; //funny
      let reaction6Filter = (reaction, user) =>
        reaction.emoji.name === "🔢" && user.id === message.author.id; //tax
      let reaction1 = msg.createReactionCollector(reaction1Filter, {
        time: null
      }); //glopal
      let reaction2 = msg.createReactionCollector(reaction2Filter, {
        time: null
      }); //admin1
      let reaction3 = msg.createReactionCollector(reaction3Filter, {
        time: null
      }); //admin2
      let reaction4 = msg.createReactionCollector(reaction4Filter, {
        time: null
      }); //ticket
      let reaction5 = msg.createReactionCollector(reaction5Filter, {
        time: null
      }); //fummy
      let reaction6 = msg.createReactionCollector(reaction6Filter, {
        time: null
      }); //tax
      //////////////////////////////////////////////////////////////////////////////////////////////////////////
      reaction1.on("collect", r => {
        const embed = new Discord.MessageEmbed()
          .setTitle(`Genral Commands `)
          .setColor("RANDOM")
          .setThumbnail(
            "https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png"
          ).setDescription(`> \`${prefix}id\` : shows you user information
||==============================================||
> \`${prefix}bot\` : shows you bot informations
||==============================================||
> \`${prefix}server\` : shows you servr information
||==============================================||
> \`${prefix}colors\` : shows you colors list
||==============================================||
> \`${prefix}color\` : to change your color  
||==============================================||
> \`${prefix}ping\` :shows you conection information
||==============================================||
> \`${prefix}allbots\` : shows you bots list
||==============================================||
> \`${prefix}allusers\` : shows you all users on server
||==============================================|| 
> \`${prefix}link\` : create invition link [24h] expired
||==============================================||
> \`${prefix}invite\` : gives you bot invite link
||==============================================||
> \`${prefix}members\` : shows you members Stats
||==============================================||
> \`${prefix}avatar\` : shows you user avatar
||==============================================||
> \`${prefix}avatarserver\` : shows you server avatar
||==============================================||
> \`${prefix}myprems\` :shows you your premissions
||==============================================||
> \`${prefix}uptime\` : shows you bots conctions time
||==============================================||
> \`${prefix}ranks\` : shows you all roles in server
||==============================================||
> \`${prefix}submit\` : To send an administrative submission
||==============================================||
> \`${prefix}sugges\` : To send an Suggestion 
||==============================================||
> \`${prefix}report\` : To report a member or mod To Owner `);

        message.delete(1000);
        let e = " Sending .. :envelope_with_arrow: ";
        message.reply(e).then(m => m.delete(1000));
        message.author
          .send(embed)
          .catch(error =>
            message.reply(" I can`t Send To you Please Open Your Dm :x:")
          );
      });

      reaction2.on("collect", r => {
        const embed = new Discord.MessageEmbed()
          .setTitle(`Admin1 Commands `)
          .setColor("RANDOM")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/553862087382925313/556036868492230667/logo-admin-png-4.png"
          ).setDescription(`
||==============================================||
> \`${prefix}ban\` : to ban member from server
||==============================================||
> \`${prefix}unban\` : to unban member 
||==============================================||
> \`${prefix}mute\` : to mute member 
||==============================================||
> \`${prefix}unmute\` : to unmute member who has been muted
||==============================================||
> \`${prefix}kick\` : kick member from server 
||==============================================||
> \`${prefix}lock\` :to lock chat channel
||==============================================||
> \`${prefix}unlock\` : to unlock chat channels
||==============================================|| 
> \`${prefix}clear\` : to clear messages from text channels
||==============================================||
> \`${prefix}setlog\` : to chose logs channel
||==============================================||
> \`${prefix}loging\` :to enable and disable log channel
||==============================================||
> \`${prefix}ccolors\` : To create Random colors
||==============================================||
> \`${prefix}ssay\` : The bot keeps repeating your words at same channel 
||==============================================||
> \`${prefix}say\` :The bot keeps repeating your words at your choice channel 
||==============================================||
> \`${prefix}embed\` :The bot keeps repeating your words at same channel in embed
||==============================================||
  `);

        message.delete(1000);
        let e = " Sending .. :envelope_with_arrow: ";
        message.reply(e).then(m => m.delete(1000));
        message.author
          .send(embed)
          .catch(error =>
            message.reply(" I can`t Send To you Please Open Your Dm :x:")
          );
      });
      reaction3.on("collect", r => {
        const embed = new Discord.MessageEmbed()
          .setTitle(`Admin2 Commands `)
          .setColor("RANDOM")
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/553862087382925313/556036868492230667/logo-admin-png-4.png"
          ).setDescription(`
||==============================================||
> \`${prefix}ban\` : to ban member from server
||==============================================||
> \`${prefix}unban\` : to unban member 
||==============================================||
> \`${prefix}mute\` : to mute member 
||==============================================||
> \`${prefix}unmute\` : to unmute member who has been muted
||==============================================||
> \`${prefix}kick\` : kick member from server 
||==============================================||
> \`${prefix}lock\` :to lock chat channel
||==============================================||
> \`${prefix}unlock\` : to unlock chat channels
||==============================================|| 
> \`${prefix}clear\` : to clear messages from text channels
||==============================================|| 
> \`${prefix}setlog\` : to chose logs channel
||==============================================||
> \`${prefix}loging\` :to enable and disable log channel
||==============================================|| 
> \`${prefix}submissions\` : to Create submissions channels
||==============================================||
> \`${prefix}ccolors\` : To create Random colors
||==============================================||
> \`${prefix}ssay\` : The bot keeps repeating your words at same channel 
||==============================================||
> \`${prefix}say\` :The bot keeps repeating your words at your choice channel 
||==============================================||
> \`${prefix}embed\` :The bot keeps repeating your words at same channel in embed
||==============================================||
  `);

        message.delete(1000);
        let e = " Sending  .. :envelope_with_arrow: ";
        message.reply(e).then(m => m.delete(1000));
        message.author
          .send(embed)
          .catch(error =>
            message.reply(" I can`t Send To you Please Open Your Dm :x:")
          );
      });
      reaction4.on("collect", r => {
        const embed = new Discord.MessageEmbed()
          .setTitle(`Ticket Commands `)
          .setColor("RANDOM")
          .setThumbnail(
            "https://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/512/Tickets-icon.png"
          ).setDescription(`
||==============================================||
> BOT Prefix : \`${prefix}\` 
||==============================================||
> \`${prefix}new\` : To Open New Ticket
||==============================================||
> \`${prefix}close\` : To Close Ticket (Moderators Only) 
||==============================================||
> \`${prefix}cleartickets\` : To Close All Tickets**
||==============================================||
> \`${prefix}tickets\` : To Enable Tickets System And Disable It
||==============================================||
> \`devloped by\` : <@463486141912449035>,<@713429811434881093>
||==============================================||
||<@${message.author.id}>||
`);

        message.delete(1000);
        let e = " Sending .. :envelope_with_arrow: ";
        message.reply(e).then(m => m.delete(1000));
        message.author
          .send(embed)
          .catch(error =>
            message.reply(" I can`t Send To you Please Open Your Dm :x:")
          );
      });

      reaction5.on("collect", r => {
        const embed = new Discord.MessageEmbed()
          .setTitle(`Funny Commands `)
          .setColor("RANDOM")
          .setThumbnail(
            "https://cdn.glitch.com/50aafec4-897f-48dc-9ce5-ef09b9cd399b%2Ficon-games.png?v=1599395673850"
          ).setDescription(` 
||==============================================||
> BOT Prefix : \`${prefix}\` 
||==============================================||
> \`${prefix}slap\` : To Slap Amember who has mentions
||==============================================||
> \`${prefix}hug\` : To hug Amember who has mentions
||==============================================||
> \`${prefix}kiss\` : To kiss Amember who has mentions
||==============================================||
> \`${prefix}boom\` : To lugh with Amember who has mentions
||==============================================||
> \`${prefix}dance\` : To dancce with Amember who has mentions
||==============================================||
> \`${prefix}cat\` : Gives You a cute Cat Pic
||==============================================||
> \`${prefix}dog\` :Gives You a Cute dog Pic :rolling_eyes:
||==============================================||
> \`${prefix}sara7a\` : now its for Arabic only :sweat_smile:
||==============================================||
> \`${prefix}chalng\` :now its for Arabic only :sweat_smile:
||==============================================|| 
> \`devloped by\` : <@463486141912449035>,<@713429811434881093>
||==============================================||
  `);

        message.delete(1000);
        let e = " Sending .. :envelope_with_arrow: ";
        message.reply(e).then(m => m.delete(1000));
        message.author
          .send(embed)
          .catch(error =>
            message.reply(" I can`t Send To you Please Open Your Dm :x:")
          );
      });
      reaction6.on("collect", r => {
        const embed = new Discord.MessageEmbed()
          .setTitle(`Tax Commands `)
          .setColor("RANDOM")
          .setThumbnail(
            "https://images.assetsdelivery.com/compings_v2/anatolir/anatolir1806/anatolir180600523.jpg"
          ).setDescription(` 
||==============================================||
> BOT Prefix : \`${prefix}\` 
||==============================================||
> \`${prefix}tax\` : To tax bot count and got final coant to transfer
||==============================================||
> \`${prefix}wa\` : To tax bot+broker count and got final coant to transfer
||==============================================||
> \`devloped by\` : <@463486141912449035>,<@713429811434881093>
||==============================================||
  `);

        message.delete(1000);
        let e = " Sending .. :envelope_with_arrow: ";
        message.reply(e).then(m => m.delete(1000));
        message.author
          .send(embed)
          .catch(error =>
            message.reply(" I can`t Send To you Please Open Your Dm :x:")
          );
      });
    });
  }
});

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////ارسال رسالة شكر بالسرفر ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
client.on("guildCreate", guild => {
  const embed = new Discord.MessageEmbed()
    .setTitle("**Thanks for adding me to your server! :blush:**")
    .setColor("#f04747")
    .setDescription(
      `Welcome as a new user of our bot. The bot was officially launched on 9/28/2020 
       and soon our new bot will be created to connect all the servers with each other, 
       so follow us on the support server always to find out everything new.
       Our bot starts with one thing only, which is ${prefix}help , 
       And work is currently underway on the control panel of our bot`
    )
    .addField(
      "Support Server",
      " [Click here](https://discord.gg/EhsMZYn)",
      true
    )
    .addField(`Devlopers : ᵀ𝒱ℯ𝓇ℊ𝒾𝓁ᴳ#3226 | FhD#9999 `);
  let virgel = guild.channels.filter(c => c.type === "text").random();
  virgel.send(embed);
});

//------------------------------------------------------------------------------------\\

////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "allservers")) {
    let msg = client.guilds
      .map(guild => `**${guild.name}** :  Members: ${guild.memberCount}`)
      .join("\n");
    let embed = new Discord.MessageEmbed()
      .setTitle(`**My servers :** ${client.guilds.size} `)
      .setDescription(`${msg}`)
      .setColor("#ebf442");
    message.channel.send(embed);
  }
});
///////////////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "contact")) {
    if (!message.channel.guild) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    client.users
      .get("713429811434881093")
      .send(
        "\n" +
          "**" +
          "● Server :" +
          "**" +
          "\n" +
          "**" +
          " " +
          message.guild.name +
          "**" +
          "\n" +
          "**" +
          " ● Sender : " +
          "**" +
          "\n" +
          "**" +
          " " +
          message.author.tag +
          "**" +
          "\n" +
          "**" +
          " ● Message : " +
          "**" +
          "\n" +
          "**" +
          args +
          "**"
      );
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setDescription("📬 Done Send Message To Devloper Thanks For Report")
      .setThumbnail(message.author.avatarURL())
      .setFooter("Zila-Bot | ᵀ𝒱ℯ𝓇ℊ𝒾𝓁ᴳ#3226");
    message.channel.send(embed);
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if (message.content.startsWith(prefix + "submissions")) {
    if (
      message.guild.channels.find(channel => channel.name === "Bot Kullanımı")
    )
      return message.channel.send(" تم بالفعل إعداد لوحة البوت.");
    if (!message.member.permissions.has("MANAGE_GUILD"))
      return message.channel.send("This Command Only For Admins.");
    message.channel
      .send(`Edaiting Submissions Rooms..`)

      .then(collected => {
        message.guild.createChannel("👮-administrative-submission", "text", [
          {
            id: message.guild.id,
            allow: ["SEND_MESSAGES"]
          }
        ]);

        message.guild
          .createChannel("accept✅reject❎", "text", [
            {
              id: message.guild.id,
              deny: ["SEND_MESSAGES", "READ_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "submissions"
              )
            )
          );
        message.guild
          .createChannel("🤔suggestions", "text", [
            {
              id: message.guild.id,
              allow: ["SEND_MESSAGES"]
            }
          ])
          .then(channel =>
            channel.setParent(
              message.guild.channels.find(
                channel => channel.name === "submissions"
              )
            )
          );
        message.guild.createChannel("log", "text", [
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES", "READ_MESSAGES"]
          }
        ]);
      });
  }
});

//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
//====================================================================================================================\\
