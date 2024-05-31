const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = 'https://discord.gg/FUEHs7RCqz';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle('Support server')
            .setDescription(`Click [here](${supportServerLink}) to join our server.\nWe will be there for you anytime ❤️`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/1136249134882492506/1244312786918445199/4bd3271a276fe6293ceaf5e748a40dd6.jpg?ex=6654a816&is=66535696&hm=07e560f9af8e6f7898b4c8bd5574dc0922ca8444d537bef8b820ff9d869f47c0&`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};


/*

   MADE BY LUX!!

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   FOR EMOJIS EITHER YOU CAN EDIT OR JOIN OUR DISCORD SERVER 
   SO WE ADD BOT TO OUR SERVER SO YOU GET ANIMATED EMOJIS.

   DISCORD SERVER : https://discord.gg/B2zTsRv5
   YOUTUBE : https://www.youtube.com/@ylb_u

   FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/B2zTsRv5 ]
*/