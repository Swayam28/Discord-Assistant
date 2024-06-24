const {REST, Routes}=require("discord.js")
const commands=[
    
    {
        name:"ping",
        description:"Replies with Pong!"
    },
    
    {
        name:"create",
        description:"This is a create command"
    }
]


const rest= new REST({version: '10'}).setToken(process.env.TOKEN);
(async()=> {
try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands(process.env.CLIENT), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();