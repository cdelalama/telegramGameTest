import { Bot, Context, InlineKeyboard } from 'grammy';

const bot = new Bot('6280464767:AAFJEwe4DD7USb8iMMajtTWEYsqn7r-mxU0');


bot.command('play', async (ctx: Context) => {
    try {
      const gameUrl = 'https://startupism.ai/beef/';
      const gameShortName = 'beef_test_game';
  
      const keyboard = new InlineKeyboard().game(gameShortName);


      await ctx.replyWithGame(gameShortName, { reply_markup: keyboard });
    } catch (err) {
      console.log(err);
    }
  });
  
  bot.start();




/*
import { Bot, InlineKeyboard } from 'grammy';
import dotenv from 'dotenv';
import { MyContext, SessionData } from '../types/types';

dotenv.config();
const bot = new Bot<MyContext>(process.env.TelegramToken!);


// Define the game URL
const gameUrl = 'https://startupism.ai/beef/index.html';

// Define the inline keyboard
//const inlineKeyboard = new InlineKeyboard().text('Play again', 'play_again');
const inlineKeyboard = new InlineKeyboard().url('Play Game', gameUrl);


// Handle the /play command
bot.command('play', async (ctx) => {
  // Define the game options
  const gameOptions = {
    disable_notification: true,
    reply_markup: inlineKeyboard,
  };

  // Send the game
  await ctx.api.sendGame(ctx.chat.id, gameUrl, gameOptions);
});

// Handle the callback query
bot.on('callback_query:data', async (ctx) => {
  if (ctx.callbackQuery?.data === 'play_again') {
    await ctx.answerCallbackQuery('Playing again...');
  }
});

// Start the bot
bot.start();
*/