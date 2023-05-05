const { Telegraf } = require('telegraf');
/**
 * how  to  get secret token for creating bot?
 * link of bot ==> http://t.me/algo_js_bot
 * 
 */

 let binarysearch = `function binarySearch(arr, target){
    
        let  left = 0; 
        let right = arr.length -1 ;
    
        while( left <= right){
    
            let mid  = Math.floor( ((left + right)/2));
            
            if ( arr[mid] === target ) return true;
             if ( arr[mid] < target) left = mid + 1;
            else right = mid - 1;
       
        }
        return  false;
    
    }`;


// console.log( binarySearch([12,34,4],34));
const bot = new Telegraf('token to access the HTTP API');
bot.start((ctx) => ctx.reply('Welcome to new bot of algo js by Vaibhav'));

//commands
bot.command('binarySearch', (ctx) => ctx.reply(binarysearch));
bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.launch();

