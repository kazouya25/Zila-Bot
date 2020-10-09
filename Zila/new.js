require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

////بكجات
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAxuW-XuWowX5Q0jEQt7P5BXMD-Y4ZOkck"); // اي بي اي يوتيوب
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyAxuW-XuWowX5Q0jEQt7P5BXMD-Y4ZOkck"; ///اي بي اي يوتيوب
const pretty = require("pretty-ms");
client.login(process.env.TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
const Canvas = require("canvas");
  let points = {}
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
////////////////////////////////////////
///////////////كود تغيير الحالة

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.hasPermission(8)}`));
  client.user.setStatus("online");
  client.user.setActivity(
    ` ${prefix}help-${prefix}invite-${client.guilds.size} servers-${client.users.size} users`
  );
});

/////////////////////////////////////////كود هيلب
client.on("message1", message => {
  if (message.content.split(" ")[0] === prefix + "help") {
    message.channel;
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(
        "** Done Send To Your Dm :mailbox_with_mail:  Please Check If Not Recived it Please Open Your Dm **"
      )
      .setAuthor(client.user.username, client.user.avatarURL)
      .setAuthor(client.user.username, client.user.avatarURL)
      .setFooter("Request by: " + message.author.tag);

    message.channel.sendEmbed(embed).then(message => {
      message.delete(10000);
    });
    const Embed = new Discord.RichEmbed()
      .setThumbnail(
        "https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png"
      )
      .setColor("RANDOM")
      .setTitle("**:busts_in_silhouette: Help Comannds**")
      .setDescription(
        `**Help Comannds**\n\n\n
**👨‍👩‍👦‍👦| Help General Type:**\n**\`${prefix}genralHelp\`**\n\n
**👮‍♂️| Help Administrative type :**\n**\`${prefix}adminHelp\`**\n\n
**🤣| Help Funny Type:**\n**\`${prefix}funnyHelp\`**\n\n
**🎮| Help Games type :**\n**\`${prefix}gamesHelp\`**
\n\n**💠| Help Protection type :**\n**\`${prefix}protectionHelp\`
**\n\n\n\n**💠| Help Tickets type :**\n**\`${prefix}ticetHelp\`**\n\n`
      )
      .setFooter(`${client.user.username}bot🛂`);

    message.author.sendEmbed(Embed);
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content.split(" ")[0] === prefix + "avt") {
    if (message.author.bot || message.channel.type == "dm") return;
    var args = message.content.split(" ")[1];
    if (args && args.startsWith('<@') && args.endsWith('>')) {
      args = args.slice(2, -1);

      if (args.startsWith('!')) {
        args = args.slice(1);
      }
    }
    var avt = args || message.author.id;
    client.fetchUser(avt)
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
});
///////////////////////////////////////

client.on('message', (message) => {
  const args = message.content.toLowerCase().split(' ');
  const wasBotMentioned = args.some((word) => word === `<@${client.user.id}>`);
  
  if (wasBotMentioned) {
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(
        "** Done Send To Your Dm :mailbox_with_mail:  Please Check If Not Recived it Please Open Your Dm **"
      )
      .setAuthor(client.user.username, client.user.avatarURL)
      .setFooter("Request by: " + message.author.tag);

    message.channel.sendEmbed(embed).then(message => {
      message.delete(10000);
    });
    // the message contains at least one mention anywhere
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message1', message => {
	if (!message.content.startsWith(prefix)) return;

	const withoutPrefix = message.content.slice(prefix.length);
	const split = withoutPrefix.split(/ +/);
	const command = split[0];
	const args = split.slice(1);

function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}
    if (command === 'avatar') {
	if (args[0]) {
		const user = getUserFromMention(args[0]);
		if (!user) {
			return message.reply('Please use a proper mention if you want to see someone else\'s avatar.');
		}

		return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
	}

	return message.channel.send(`${message.author.username}, your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
}

		return client.users.cache.get(mention);
    
	}
}

});






///////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg",
            "https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png",
            "https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png",
            "https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg",
            "http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png",
            "https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'hl')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
/*
//// [    2   ] ////
var spee={};
let pointsfox= {}
const foxt = [
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055751447773195/bandicam_2019-07-16_14-38-25-841.jpg",
        "answers": ["brazil"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055755080302593/bandicam_2019-07-17_17-14-28-589.jpg",
        "answers": ["belgium"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055760180576276/bandicam_2019-07-17_17-15-04-686.jpg",
        "answers": ["france"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055761467965452/bandicam_2019-07-17_17-15-42-926.jpg",
        "answers": ["croatia"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055764542390287/bandicam_2019-07-17_17-16-28-291.jpg",
        "answers": ["portugal"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055766576889863/bandicam_2019-07-17_17-16-42-901.jpg",
        "answers": ["senegal"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055769399525394/bandicam_2019-07-17_17-16-57-102.jpg",
        "answers": ["saudi"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055772377350165/bandicam_2019-07-17_17-17-17-663.jpg",
        "answers": ["germany"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055773421862913/bandicam_2019-07-17_17-17-37-828.jpg",
        "answers": ["mexico"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055773761732619/bandicam_2019-07-17_17-17-52-326.jpg",
        "answers": ["uruguay"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055830451683359/bandicam_2019-07-17_17-18-00-272.jpg",
        "answers": ["serbia"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/576512197275156502/601055832704155658/bandicam_2019-07-17_17-18-20-074.jpg",
        "answers": ["egypt"]
       
    }
];
 
client.on('message', foxm => {
if (!pointsfox[foxm.author.id]) pointsfox[foxm.author.id] = { 
    points: 0,
  };
  if(!foxm.guild) return;
    let id = foxm.author.id
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    foxm.channel.send(`**Sorry, Please Wait ${pretty(r, {verbose:true})}...**`).then(m => m.delete(5000));
    return;
    }
    if ( foxm.content == prefix +'e7'){
       
        try{
}catch(e){ 
 
}
 
    if(!foxm.channel.guild) return;
 
 
const foxitem = foxt[Math.floor(Math.random() * foxt.length)];
const foxfilter = response => {  
    return foxitem.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
foxm.channel.send('| **Game Starts**').then(msg => {
 
 const embeda7zr = new Discord.RichEmbed()
 .setColor("RANDOM")
     .setAuthor(`لـديـك 15 ثـانـيـة`)
          .setImage(`${foxitem.type}`)
 .setFooter(`${foxm.author.tag}`, foxm.author.avatarURL) ///By KillerFox and MEDSPORT
 
 
         
foxm.channel.send(embeda7zr).then(() => {
        foxm.channel.awaitMessages(foxfilter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const foxyembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(' **Good You Got Point!**') ///By KillerFox and MEDSPORT
   .setFooter(`${collected.first().author}`)
  foxm.channel.sendEmbed(foxyembed);
            let won = collected.first().author;
            pointsfox[won.id].points++; ///By KillerFox and MEDSPORT
          })
          .catch(collected => {
            foxm.channel.send(`| **خـلـص الـوقـت**`);
          })
        })
    })
    spee[id] = (new Date).getTime()
   
   
    }
  });

*/














///////////////////////////////////////////////////////////////////////////////////////


//////////////////كود رد البوت بالخاص
/*
client.on("message", async message => {
    let roleembed = new Discord.RichEmbed()
    .setDescription(
      `
أمثله على الأوامر :
-role @mention rolename : لأعطاء رتبة لعضو معين
-role all rolename : لأعطاء رتبة للجميع
-role humans rolename : لأعطاء رتبة للاشخاص فقط
-role bots rolename : لأعطاء رتبة لجميع البوتات`
    )
    .setFooter(
      "Requested by " + message.author.username,
      message.author.avatarURL
    );
  if (message.author.bot) return undefined;
  if (!message.content.startsWith(prefix)) return undefined;

  let args = message.content.split(" ");

  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);

  if (command === `help`) {
    if (message.channel.type === "dm") 
      return message.channel.send(  (roleembed = new Discord.RichEmbed()
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
            message.author.avatarURL
          ))
      );
  
    let mentions = message.mentions.members.first();
    if (!mentions) {
      let sicon = message.author.avatarURL;
      let embed = new Discord.RichEmbed()
        .setImage(message.author.avatarURL)
        .setColor("#5074b3");
      message.channel.send({ embed });
    } else {
      let sicon = mentions.user.avatarURL;
      let embed = new Discord.RichEmbed().setColor("#5074b3").setImage(sicon);
      message.channel.send({ embed });
    }
  }
});
*/



///////////////////////////////////////////


const cd = require('countdown');
const Enmap = require('enmap');
const totime = require('to-time');
const dbg = new Enmap({ name: 'Giveaway' });
  const embed = new Discord.RichEmbed();

///////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if(message.author.bot) return;
if (!message.guild) return message.reply('') 
  if (true) {
if (message.content === prefix+'Giveaway') {
      message.author.send('**<a:x3:712913420835356682> | Giveaway Menu\n----------------------------\n<a:x8:712913394532876335> | ``%start`` ⇏ لـبـدا قـيـفـاواي\n<a:x8:712913394532876335> | ``%reroll`` ⇏ لاعـادة اخـتـيـار فـائـز اخـر\n<a:x8:712913394532876335> | ``%gend`` ⇏ لأنـهـاء الـقـيفـاواي\n----------------------------**').catch(e => console.log(e.stack));
 
    }
   }
  });
///////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
/*
const cool = [];

client.on('message',async message => {

  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
 
  const args = message.content.split(' ');
  const credits = require('./credits.json');
  const path = './credits.json';
  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
  const author = message.author.id;
  const balance = args[2];
  const daily = Math.floor(Math.random() * 350) + 10;
 
  if(!credits[author]) credits[author] = {credits: 50};
  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
 
  if(message.content.startsWith(prefix + "credit")) {
  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits`) return;
 
  if(args[2]) {
    if(isNaN(args[2])) return message.channel.send('**:heavy_multiplication_x:This title should be numbers only**');
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:Bots Didnt Have Credits ${message.content.split(' ')[1]} **`);
    if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:You Can`t Transfer Credits To your Self**');
    if(credits[author].credits < balance) return message.channel.send('**:heavy_multiplication_x: You Didn`t Have This Amount**');
    var one = Math.floor(Math.random() * 9) + 1;
    var two = Math.floor(Math.random() * 9) + 1;
    var three = Math.floor(Math.random() * 9) + 1;
    var four = Math.floor(Math.random() * 9) + 1;
 
    var number = `${one}${two}${three}${four}`;
   
    message.channel.send(`**:heavy_dollar_sign: Type Number To transfer \`${number}\`**`).then(m => {
      message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
        if(c.first().content === number) {
          m.delete();
          message.channel.send(`**:atm:| ${message.author.username}, Transfered \`${balance}\` To ${mention}**`);
          credits[author].credits += (-balance);
          credits[mention.id].credits += (+balance);
          fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
        } else if(c.first().content !== number) {
          m.delete();
          message.channel.send(`** :money_with_wings: Rong Number**`);
        }
      });
    });
  }
  if(!args[2]) {
    if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:|Bots Dont Have Credits ${message.content.split(' ')[1]} **`);
    message.channel.send(`**${mention.username}, your :credit_card: balance is **${credits[mention.id].credits}`);
  }
 
  }
  if(message.content.startsWith(prefix + "daily")) {
    if(cool.includes(message.author.id)) return message.channel.send(`**:heavy_dollar_sign: your daily credits refreshes in 5 hours, 4 minutes, 20 seconds. **`);
    if(mentionn) {
      var one = Math.floor(Math.random() * 9) + 1;
      var two = Math.floor(Math.random() * 9) + 1;
      var three = Math.floor(Math.random() * 9) + 1;
      var four = Math.floor(Math.random() * 9) + 1;
 
      var number = `${one}${two}${three}${four}`;
 
      message.channel.send(`**:atm: Please Write Number \`${number}\`, **`).then(async m => {
        message.channel.awaitMessages(msg => msg.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(collected => {
          if(collected.first().content === number) {
            m.delete();
            collected.first().delete();
            credits[mentionn.id].credits += (+daily);
            fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
          message.channel.send(`**:atm: You Got Daily \`${daily}\` **`);  
          }
          if(collected.first().content !== number) {
            return m.delete();
          }
        });
      });
    } else if(!mentionn) {
      credits[author].credits += (+daily);
      fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
 
      message.channel.send(`**:atm: You Got Daily \`${daily}\`**`);
    }
    cool.unshift(message.author.id);
 
    setTimeout(() => {
      cool.shift(message.author.id);
      message.author.send("**:atm: You Can Ask Free Daily Credits \`Daily\`**").catch();
    }, ms(1`d`));
  }
});
😂😂😂😂😂👍🎉💋🐱‍🐉🎁👧👩‍🦱👨‍🦳👼💂‍♂️💂‍♀️✔✔🤢✔🐱‍🚀✈🪂🛩💕❣❣❣
*/