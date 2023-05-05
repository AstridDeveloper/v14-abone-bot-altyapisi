const {EmbedBuilder} = require("discord.js");
const config = require("../config.js");


exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle(`${message.guild.name} **|** Yardım`)
    .setDescription("**KOMUTLAR**\n ```a!help, a!ping, a!sunucu-bilgi, a!abone-sorumlu, a!abone-rol, a!abone-log, a!abone-kanal ```")
    .setFooter({ text: `Asked by ${message.author.tag}.`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })
    .setTimestamp()  
    return message.reply({embeds : [embed]});

};
exports.conf = {
  aliases: ["help"]
};

exports.help = {
  name: "yardım"
};