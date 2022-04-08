const yargs = require('yargs');
const ytdl = require('ytdl-core');
const fs = require('fs');
const request = require('request');
const readline = require('linebyline')
var { sleep } = require('s1eep');

const options = yargs
    .usage(`Usage: --link <https://www.youtube.com/watch?v=2YxEGe/i0wE>`)
    .options('link',{alias:'link', describe:'link to download video', demandOption:true})
    .argv;

let getYoutubeId = ytdl.getVideoID(options.link)
//2YxEGe7i0wE
console.log(getYoutubeId)

let info = ytdl.getInfo(getYoutubeId);

info.then(response=>{
    console.log(response.formats[0])
    console.log(response.videoDetails.title)
    //info.pipe(fs.createrWriteStream(`${response.videoDetails.title}.mp4`))
    request
        .get(response.formats[0].url)
        .pipe(fs.createWriteStream(`${response.videoDetails.title}.mp4`));
});



// var rl = readline(`./${options.link}`);
// rl.on('line', function(line){
//     sleep(1000)//add delay
//     console.log(line)
//     let getYoutubeId = ytdl.getVideoID(line) //get youtube id
//         let info = ytdl.getInfo(getYoutubeId); //retrieve info of video
//     info.then(response=>{
        

//         request.get(response.formats[0].url).pipe(fs.createWriteStream(`${response.videoDetails.title}.mp4`))
//     })
// })

//     .on('error', function (e){
//         something went wrong
//     });