const { Client, Message } = require("discord.js");
const client = new Client();
const { keyword, token } = require("./config");

/**
 * Function stolen from @ljosberinn a.k.a Gerrit
 * @param {Message} msg
 */
const msgHandler = msg => {
  const content = msg.content.toLowerCase();
  if (!content.startsWith(keyword)) helpResponse.call(msg);
};

const helpResponse = () => {
  this.reply("Usage: `!mdn <search term, e.g. express>`)");
};

client.on("message", msgHandler);

client.login(token);
