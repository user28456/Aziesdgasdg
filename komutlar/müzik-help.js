const Discord = require('discord.js');
const config = require("../config.json")
exports.run = function(client, message) {
 
 const help = new Discord.MessageEmbed()
  .setAuthor(`${message.client.user.username}`, message.client.user.avatarURL)
  .setColor('RANDOM')
  .addField('Macellan 💙 | Müzik Komutları',`

  **${config.prefix}play <müzikismi>**: İstenilen şarkıyı çalar.
  **${config.prefix}pause**: Şarkıyı durdurur.
  **${config.prefix}resume**: Durdurulan şarkıyı devam ettirir.
  **${config.prefix}loop**: Şarkıyı tekrardan oynatır.
  **${config.prefix}skip**: Varsa listedeki diğer şarkılara geçer.
  **${config.prefix}stop**: Şarkıyı durdurur. 
  **${config.prefix}np**: Çalan şarkıyı gösterir.
  **${config.prefix}list**: Şarkıları gösterir.
  **${config.prefix}mix**: Şarkıları karıştırır.
  **${config.prefix}ping**: Botun gecikme süresini gösterir.
  `)
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
  .setThumbnail("https://i.pinimg.com/originals/05/4a/a3/054aa3421c22e0c9e04ada3082066a8d.gif")
  .setImage("https://store.donanimhaber.com/82/a4/07/82a407694655485defae55c3367fa31e.gif") 
   return message.channel.send(help).catch(console.error);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','yardim'],
 permLevel: 0
};
 
exports.help = {
 name: 'help',
 description: 'botun gecikme süresini gösterir',
 usage: 'prefix+ping'
};