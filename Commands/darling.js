/* 
King Bot Whatsapp Bot      

Telegram: https://t.me/Janith_sadanuwan
Licensed under the  GPL-3.0 License;

Coded By Janth Sadanuwan


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

let SEW = "* ඔබේ පෙම්වතිය හෝ පෙම්වතා වෙත සොදුරු ඇමතුමක්.\n💻Usage: *.msglv*"
SewQueen['IntroduceCMD']({pattern: 'msglv', fromMe: WorkType, desc: SEW }, (async (message, input) => {

}));

*/
