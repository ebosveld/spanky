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

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
    const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    if (!message.content.match(prefixMention) || message.author.bot) return; 

    message.channel.send("Sorry, I'm a bit shy and don't respond to messages. I will keep welcoming new users though.");
});

client.on("guildMemberAdd", (member) => {
    if(member.bot) return; 

    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    const introChannel = member.guild.channels.cache.find(ch => ch.name.startsWith('intros'));
    const rulesChannel = member.guild.channels.cache.find(ch => ch.name.startsWith('the-rules'));

    const randomGreeting = greeting[Math.floor(Math.random() * greeting.length)];
    const randomWelcome = welcome[Math.floor(Math.random() * welcome.length)];

    channel.send(`${randomGreeting} ${member.user}! ${randomWelcome}. Please tell us a bit about yourself in ${introChannel} and have a read through the ${rulesChannel}. Above all, have fun. Our staff are here to help you! :grin:`);
});

client.login();