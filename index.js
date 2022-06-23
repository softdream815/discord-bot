const { Client, Intents } = require('discord.js');
const { BOT_TOKEN } = require('./config.json');

const client = new Client({
    restRequestTimeout: 60000,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER','GUILD_MEMBER',
        //,'USER','GUILD_MEMBER','GUILD_SCHEDULED_EVENT'
        ],
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILD_MEMBERS,
                Intents.FLAGS.GUILD_PRESENCES
    ] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // to get all of the users of the server
    const SERVER_ID = "985737416834957352";
    const list = client.guilds.cache.get(SERVER_ID); 
    let array = [];
    list.members.cache.forEach(member => {
        console.log(member.user);
        const user_id = member.user.id;
        if (!member.user.bot)
            array.push(user_id);
    });

    for(var i = 0;i < array.length; i++){
        sendMessageToUser(array[i]);
    }
    // send message to special channel
    // const channel = client.channels.cache.get('986534235118665738');
    // channel.send('content');
    
    // send message to special user
    // client.users.fetch("979776835745353748").then((user) => {
    //     try {
    //         user.send("my message go.");        
    //     } catch (err){
    //         console.log("err")
    //     }
    // });

});

function sendMessageToUser(user_id){
    console.log(user_id);
    client.users.fetch(user_id).then((user) => {
        try {
            user.send("my message go111.");        
        } catch (err){
            console.log("err")
        }
    });
}

client.login(BOT_TOKEN);