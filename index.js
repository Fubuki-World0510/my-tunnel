const { Client, Events, GatewayIntentBits } = require('discord.js');
const tunnelmole = require('tunnelmole/cjs');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, async c => {
    const url = await tunnelmole({
        port: 80
    });
    const ch = await c.channels.fetch('1267109339936849920')
    console.log(`Ready! Logged in as ${c.user.tag}`);
    ch.send(`<@1261123091388563623> <@755007858294259734> New tunnel after restart the server\n\`\`\`${url}\`\`\``)
});

client.login('');