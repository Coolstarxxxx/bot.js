const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    owner: '270713061365645322'
});


const botconfig = require("botconfig.json");

const superagent = require("superagent")
bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('moderation', 'Moderation');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('team', 'Team');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.currentTeamMembers = [];
global.servers = {};

bot.on('message', function(message){
    if(message.content =="hello")
    {
        message.channel.sendMessage("Hey!");
    }

});
bot.on('ready',function(){
    console.log("The bot is online");
    
    bot.user.setActivity('!list |  Contact Mat#0002 for help', {type: 'WATCHING'});

});

bot.login(process.env.token);
