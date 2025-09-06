const Discord = require('discord.js');

module.exports.run = async (client, msg, args, config) => {
    const latency = Math.round(client.ws.ping);

    const embed = new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setTitle("🏓 Pong!")
        .setDescription(`Mi ping actual es: **${latency}ms**`)
        .setFooter("STELLARGEN @2022-2023")
        .setTimestamp();

    // En v12, enviar el embed directamente
    msg.channel.send(embed);
};

module.exports.help = {
    name: "ping",
    description: "Muestra el ping actual del bot."
};
