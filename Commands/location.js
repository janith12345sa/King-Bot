/* 

King Bot Whatsapp Bot                      

Telegram: https://t.me/Janith_sadanuwan
Licensed under the  GPL-3.0 License;


Coded By Janith Sadanuwan

*/   
let DataPack = require('sew-queen-pro');
let SewQueen = require('sew-queen-pro/sources/dc/handler');
let Details = require('sew-queen-pro/sources/dc/Details');
let { MessageType, MessageOptions, Mimetype, GroupSettingChange, ChatModification } = require('@ravindu01manoj/sew-queen-web');
let fs = require('fs');
let os = require('os');
let ffmpeg = require('fluent-ffmpeg');
let exec = require('child_process').exec;
let axios = require('axios');
let got = require('got');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let DataHelp = DataPack.constdata
let WorkType = Details.WORKTYPE == 'public' ? false : true

let DATA = DataHelp.dataGet('locate');
SewQueen['IntroduceCMD']({pattern: 'locate', fromMe: true, desc: DATA.L_DESC, warn: DATA.L_WARN}, (async (message, input) => {
        var r_text = new Array ();
        r_text[0] = "degreesLatitude: 24.121231, degreesLongitude: 55.1121221";
        r_text[1] = "degreesLatitude: 8.838637, degreesLongitude: -13.721434"; 
        var i = Math.floor(2*Math.random())
        await message.sendMessage(`My Location! ${r_text[i]}`, MessageType.location); 
}));
