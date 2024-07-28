const { Client, Events, GatewayIntentBits } = require('discord.js');
const tunnelmole = require('tunnelmole/cjs');
const ngrok = require('ngrok');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, async c => {
    // const url = await tunnelmole({
    //     port: 80
    // });
    await ngrok.authtoken('25V1ZItZdBEWBloJ2MibIoHSfaB_HEqPXznKkSm6kCdL8c3c');
    const url = await ngrok.connect(80);
    const ch = await c.channels.fetch('1267109339936849920')
    console.log(`Ready! Logged in as ${c.user.tag}`);
    ch.send(`<@1261123091388563623> <@755007858294259734> New tunnel after restart the server\n\`\`\`${url}\`\`\``)
});

client.login('');