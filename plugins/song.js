const { syt , youtube , getBuffer , command }  = require("../lib");

command({
pattern: "song",
fromMe: false
},
async(message,match, m)=>{
if(!match) return message.client.sendMessage(message.jid , {text: "i need a query"}, {quoted: m})


let { url } = await syt(match);
let  { song } = await youtube.download(url);
let buff = await getBuffer(song);



try{
return await message.client.sendMessage(message.jid, {audio: buff , mimetype: "audio/mpeg"}, {quoted: m})
}catch(e){
 await message.client.sendMessage(message.jid, {text: 
`failed , please wait the bot is expanding the search`}, {quoted: m})
return await message.client.sendMessage(message.jid, {audio: buff , mimetype: "audio/mpeg"}, {quoted: m})
}

})
