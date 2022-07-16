const Discord = require("discord.js")
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
})

const config = require("./config.json")
const token = config.token;
const prefix = config.prefix;

Client.on("ready", () => {
    console.log ("Ya estoy listo")
})

Client.on("messageCreate", async message => {
    
    if(message.content === prefix + "hola"){
        message.reply("hola! como estas")
        message.channel.send("q tal")
    }

})

Client.login(token)