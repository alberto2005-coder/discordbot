const Discord = require('discord.js');
const fs = require('fs');
const cooldown = new Set();


module.exports.run = async (client, msg, args, config) => {
    if(cooldown.has(msg.author.id)) {
        msg.reply(`You need to wait ${config.COOLDOWN} minutes to use this command again!`)
            .then((m) => {
                msg.delete();

                setTimeout(() => {
                    m.delete();
                }, 5000);
            });
    } else {
        fs.readFile('./accounts/hbo.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/hbo.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });

            let embed = new Discord.MessageEmbed()
              .addField("Hbo ",`\n**${account}**`)
              .setColor("#363940")
              .setFooter("STELLARGEN @2022-2023")
              .setTimestamp();

            msg.author.send(embed);

var xd = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("CHECK YOUR DM")
      
        .setThumbnail("https://logodownload.org/wp-content/uploads/2017/04/hbo-logo.png")
        .setFooter("STEALARGEN @2022-2023")
        .setTimestamp()
        .setDescription("I've sent you 1 hbo Account")

                
msg.reply(xd).then(m => {
                    setTimeout(() => {
                    }, 900000);
                });

	
            cooldown.add(msg.author.id);
            setTimeout(() => {
                cooldown.delete(msg.author.id);
            }, config.COOLDOWN * 60 * 1000);
		});
    }
};

module.exports.help = {
    name: `gen hbo`,
    description: `Sends you a hbo Account!`
};