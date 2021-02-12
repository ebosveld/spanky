require('dotenv').config();

const Discord = require("discord.js");
const client = new Discord.Client();

const greeting = [
    "Hey",
    "Hiya",
    "Hello",
    "Bonjour",
    "Hej",
    "Yassou"
];

const welcome = [
    "Good to have you here",
    "Awesome to see you here",
    "Nice to meet you",
    "Welcome aboard",
    "I'm happy you're here",
    "Welcome in this community"
];

const emojis = [
    ":grin:",
    ":heart_eyes:",
    ":kissing_heart:",
    ":tada:"
];

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
    if (message.author.bot) return; 
    if (!message.mentions.has(client.user.id)) return;

    message.channel.send("Sorry, I'm a bit shy and don't respond to messages. I will keep welcoming new users though.");
});

client.on("guildMemberAdd", (member) => {
    if(member.bot) return; 
    console.log(`New member added to server ${member.user.tag}`);

    const channel = member.guild.channels.cache.find(ch => ch.name.startsWith('general'));
    const introChannel = member.guild.channels.cache.find(ch => ch.name.startsWith('intros'));
    const rulesChannel = member.guild.channels.cache.find(ch => ch.name.startsWith('the-rules'));

    const randomGreeting = greeting[Math.floor(Math.random() * greeting.length)];
    const randomWelcome = welcome[Math.floor(Math.random() * welcome.length)];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    //const emoji = client.emojis.cache.find(emoji => emoji.name === randomEmoji);

    channel.send(`${randomGreeting} ${member.user}! ${randomWelcome}. Please tell us a bit about yourself in ${introChannel} and have a read through the ${rulesChannel}. Above all, have fun. Our staff are here to help you! ${randomEmoji}`);
});

client.login();