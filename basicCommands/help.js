const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'اغاني',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'انا هنا للمساعدة!',
        iconURL: 'https://cdn.discordapp.com/attachments/1136249134882492506/1244312786918445199/4bd3271a276fe6293ceaf5e748a40dd6.jpg?ex=6654a816&is=66535696&hm=07e560f9af8e6f7898b4c8bd5574dc0922ca8444d537bef8b820ff9d869f47c0&&', 
        url: 'https://discord.gg/B2zTsRv5'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [لوكس](https://www.youtube.com/@SxbKick)**\n\n__**COMMANDS :**__ `)
      .addFields(
        // Basic commands category
        {
          name: '▶️  عام',
          value: '`افتار`, `الاونر`, `الدعم`, `دعوة`, `معلومات`',
          inline: true,
        },
        // Music commands category
        {
          name: '▶️  أوامر الأغاني',
          value: '`شغل`, `.انهاء`, `.السجل`,`.الصوت`,`.توقف`,`.تشغيل`,`.247`',
          inline: true,
        },
        //fun category
        {
          name: '▶️  Fun',
          value: ' `ascii`, `joke`, `meme`, `roll`',
          inline: true,
        },
        //image category
        {
          name: '▶️  Image',
          value: '`cat`, `dog`',
          inline: true,
        },
        //anime category
        {
          name: '▶️  Anime',
          value: '`<prefix>animecommands for more info`',
          inline: true,
        },
        // Utility commands category
        {
          name: '▶️  Utility',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1136249134882492506/1244312786918445199/4bd3271a276fe6293ceaf5e748a40dd6.jpg?ex=6654a816&is=66535696&hm=07e560f9af8e6f7898b4c8bd5574dc0922ca8444d537bef8b820ff9d869f47c0&&`);

    const button1 = new ButtonBuilder()
      .setLabel('قناة البثوث')
      .setURL('https://www.youtube.com/@ylb_u')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/B2zTsRv5')
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel('قناة المقاطع')
      .setURL('https://www.youtube.com/@ylb__u')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
