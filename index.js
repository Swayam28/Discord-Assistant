const dotenv = require("dotenv");
const express = require("express");
const app = express();
const {Client, GatewayIntentBits} = require('discord.js');

//express
app.get("/", (req, res) => {
    res.send("Assistant");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

//dotenv
dotenv.config();


const client =new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,

    ]
});

client.on("messageCreate", (message) => {
    // console.log(message.content);
    if(message.author.bot) return;
    if(message.content.startsWith("create")) {
        const url=message.content.split("create")[1];
        return message.reply({
            content: "Generating Short Id for"+url,
        });
    }
    message.reply({
        content:"Hello, I am Swayam Pati's Assistant! I am here to help you."});
});

client.on('interactionCreate',(interaction)=>{
    console.log(interaction);
    interaction.reply("Pong!!");
})


client.login(process.env.TOKEN);
