const Discord = require('discord.js');
const moment = require('moment');
const { prefix } = require("../config");

const idCommand = (sabry) => {
  const IdCommand = sabry.content.split(" ");

if (IdCommand[0] === prefix + "id" || IdCommand[0] === prefix + "id" || IdCommand[0] === prefix + "i") {
    var args = sabry.content.split(" ")[1];
    if (args && args.startsWith('<@') && args.endsWith('>')) {
      args = args.slice(2, -1);

      if (args.startsWith('!')) {
        args = args.slice(1);
      }
    }
    var avt = args || sabry.author.id;
    if (sabry.author.bot) return;
    if (!sabry.guild)
      return sabry.reply("**:x: - This Command is only done on Servers**");

    const member = sabry.guild.members.find((member) => member.id === avt);

    if (!member) {
      return sabry.reply('The user does not exist.');
    }

    sabry.guild.fetchInvites().then(invites => {
      let personalInvites = invites.filter(
        i => i.inviter.id === member.user.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = sabry.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `); 
      let userEmbed = new Discord.RichEmbed()
        .setColor("#00000")
        .setTitle(" :man_gesturing_no:   User Info")
        .setThumbnail(member.user.avatarURL)
        .setAuthor(member.user.username, member.user.avatarURL)
        .setImage(member.user.avatarURL)
        .addField(
          "**:regional_indicator_n:  Name :**   ",
          member.user.username,
          true
        )
        .addField("**:1234:  Tag :**   ", member.user.discriminator, true)
        .addField("**:id: ID :** ", member.user.id, true)
        .addField(
          "**:beginner: Joined At :**   ",
          moment(sabry.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**:regional_indicator_c: Created At :**    ",
          moment(member.user.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**:regional_indicator_t:  Total invites :**    ",
          inviteCount,
          true
        )
        .setTimestamp();
      sabry.channel.sendEmbed(userEmbed).then(c => {});
    });
  }
};


  

module.exports = idCommand;
