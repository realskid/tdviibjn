
const fs = require("fs")
const axios = require("axios")

const readips = fs.readFileSync('./channels.txt', "utf8")
let mainfast = readips.replace("\r", "").split("\n")




var invite = "https://discord.gg/ycoihyfrc"

var messages = [`__**Fearless HoneyBadger SQUAD COLLECTION!**__ 

A total of **5,555 NFTs** will be available. Randomly generated using hand-drawn traits. homes
Controlling **floor sweep**
**Passive income**
**Awesome competitions** for anyone to join  
Mint price is **0.06 ETH for presale- 0,08 ETH for publicsale**
**50 ETH Raffle** pool for our investors 
**Lots of holder benefits,** events, giveaways etc. honey_pot 

**WHITELIST IS OPENED** AS OF NOW!  TAKE YOUR KEY TO JOIN EXCLUSIVE SQUAD!

Mint date: **7th of January** 

**LETS GROW TOGETHER “**

  - https://discord.gg/ChhTyBDtqW
  https://imgur.com/ZLxIAjL
  https://i.imgur.com/JbXOz4I.png`]


let tokens = [""];


const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

function insert(array, element) {
    array.push(element);

    setTimeout(() => {
        const index = array.indexOf(element);
        if (index >= 0) {
            array.splice(index, 1);
        }
    }, 45 * 60 * 1000);
}
var array = [];




async function dm1() {

    for (var v = 0; v < mainfast.length; v++) {

        setTimeout(function(v) {
var message = messages[Math.floor(Math.random() * messages.length)];
            //var randtoken = token[Math.floor(Math.random() * token.length)];

            axios(`https://discord.com/api/v9/channels/${mainfast[v]}/messages`, {
                    method: 'POST',
                    headers: {
                        "Authorization": tokens[0],
                        "Content-type": "application/json",
                    },
                    data: {
                        "content": message
                    },

                }).then(resp => {
                    console.log(resp.status)
                })
                .catch((e) => {
                    console.log(e.response.status)
                })

        }, 1000 * v, v);

    }
}






async function sendd(channel, author) {
	console.log(channel)
	await delay(72530)
	console.log("sent")
	await axios(`https://discord.com/api/v9/channels/${channel}/messages`, {
                    method: 'POST',
                    headers: {
                        "Authorization": tokens[0],
                        "Content-type": "application/json",
                    },
                    data: {
                        "content":  `Yes j4j 
Say hi in general chat
I join
${invite}`
                    },

                }).then(resp => {
                    console.log(resp.status)
                })
                .catch((e) => {
                    console.log(e.response.status)
                })
	}

const Quartz = require('@botsocket/quartz');


for(var i = 0; i<tokens.length; i++) {

let lient = Quartz.client('wss://gateway.discord.gg', {
    token: tokens[i],
});

lient.onDispatch = async function (event, data) {

    switch (event) {
        case 'READY':
            console.log("on")
            break;

        case 'MESSAGE_CREATE':
   
        if (!data.guild_id && data.author.id !== "909233027320795167" && !array.includes(data.channel_id)) {
        	console.log("Got Dm")
        insert(array, data.channel_id)        
sendd(data.channel_id, data.author.id)

    }

            break;
    }
};

lient.connect();
}




setInterval(dm1, 1.07 * 60 * 1000);



process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);

});