"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const bot = new grammy_1.Bot('6280464767:AAFJEwe4DD7USb8iMMajtTWEYsqn7r-mxU0');
bot.command('play', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gameUrl = 'https://startupism.ai/beef/';
        const gameShortName = 'beef_test_game';
        const keyboard = new grammy_1.InlineKeyboard().game(gameShortName);
        yield ctx.replyWithGame(gameShortName, { reply_markup: keyboard });
    }
    catch (err) {
        console.log(err);
    }
}));
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
