
const fs = require('fs');
const Discord = require('discord.js');

// Create resources

const client = new Discord.Client();

// Set event handlers

client.on('ready', function () {
    console.log('Started IntroMusicBot');
});

// Start bot

fs.readFile('token.txt', 'utf8', function (err, token) {
    if (err) {
        console.error('Unable to open token.txt');
        client.destroy();
    } else {
        client.login(token);
    }
});

