const Discord = require('discord.js');

module.exports.run = async (client, msg, args, config) => {
    // Calcula el ping del bot
    const latency = Math.round(client.ws.ping);

    // Crea el embed
    const embed = new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setTitle("🏓 Pong!")
        .setDescription(`Mi ping actual es: **${latency}ms**`)
        .setFooter("STELLARGEN @2022-2023")
        .setTimestamp();

    // Envía el embed al canal donde se ejecutó el comando
    msg.channel.send({ embeds: [embed] });
};

module.exports.help = {
    name: "ping",
    description: "Muestra el ping actual del bot."
};
