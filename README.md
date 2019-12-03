# NPM Discord Bot

> Scrapes the content from npmjs.org/package/YOUR_PACKAGE_NAME and spits it out to the user

[Invite](https://discordapp.com/oauth2/authorize?client_id=651235796459716651&scope=bot) the bot to your server!

### Running the bot in your local environment:

First of all, run all the usual jazz, such as installing your Node dependencies using `npm install`. After that, you want to go ahead and head over to the [Discord Developer Portal](https://discordapp.com/developers/applications/) and create your bot. Then, acquire the bot token and application client ID. After you've done that, create a `.env` file in the root directory of the file structure, and add the token.

`.env`
```env
TOKEN=<YOUR_TOKEN>
```

Then, invite the bot to your server by using the link below. This is where you will need the client ID.

`https://discordapp.com/oauth2/authorize?client_id=<YOUR_CLIENT_ID&scope=bot`
