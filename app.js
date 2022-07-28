require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("Your bot is online!");
});

client.on("messageCreate", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong!");
  }
});

client.login(process.env.BOT_TOKEN);
