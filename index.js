const { Client, Events, GatewayIntentBits } = require('discord.js');
const tunnelmole = require('tunnelmole/cjs');
const ngrok = require('ngrok');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, async c => {
    const url = await tunnelmole({
        port: 22
    });
    // await ngrok.authtoken('');
    // const url = await ngrok.connect({
    //     proto: 'tcp', // http|tcp|tls, defaults to http
    //     addr: 22, // port or network address, defaults to 80
    //     subdomain: 'ab', // reserved tunnel name https://alex.ngrok.io
    //     region: 'jp', // one of ngrok regions (us, eu, au, ap, sa, jp, in), defaults to us
    //   });
    const ch = await c.channels.fetch('1267109339936849920')
    console.log(`Ready! Logged in as ${c.user.tag}`);
    ch.send(`<@1261123091388563623> <@755007858294259734> New tunnel after restart the server\n\`\`\`${url}\`\`\``)
});

client.login('');