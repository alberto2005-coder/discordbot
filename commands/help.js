const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('STELLAR GEN HELP')
	.setAuthor('', 'https://cdn.discordapp.com/attachments/1176292096345395270/1177020115766747136/20231115_090229_0000.png?ex=6570fc67&is=655e8767&hm=568e3feee7d086b538fb169b&')
	.setDescription('Commands: \n $stock \n $gen-disney \n $gen-star+ \n $gen-paramount \n $gen-crunchyroll \n $gen-steam \n $gen-doulingo \n $gen-funimation \n $gen-hbo \n $gen-roblox ')
	.setThumbnail('https://cdn.discordapp.com/attachments/1176292096345395270/1177020115766747136/20231115_090229_0000.png?ex=6570fc67&is=655e8767&hm=568e3feee7d086b538fb169b&')
	.setTimestamp()
	.setFooter('STELLARGEN @2022-2023');

message.channel.send(embed);
}
module.exports.help = {
  name: 'help'
}
