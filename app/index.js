const { Client } = require("discord.js");
const client = new Client();
const { keyword, token } = require("./config");
const caller = require("./caller");
const handler = require("./handler");

const msgHandler = msg => {
  const content = msg.content.toLowerCase();
  // Stop the bot from replying to itself.
  if (!msg.author.bot) {
    if (!content.startsWith(keyword)) {
      return;
    } else {
      // Strip the keyword from the message
      const stripped = msg.toString().replace(`${keyword} `, "");
      // Handle the API call and scraper
      caller(stripped, (err, data) => msg.reply(callerCallback(err, data)));
    }
  }
};

const callerCallback = (err, data) => {
  if (err) return "Invalid package name.";
  if (!data) return "No package found.";
  if (data) return handler(data);
};

client.on("ready", () => {
  console.log(`Logged in: ${client.user.tag}`);
  client.user.setActivity("the coding mindgames.");
});

client.on("message", msgHandler);

client.login(token);
