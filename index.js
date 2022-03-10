const {Telegraf, Markup} = require('telegraf')
require('dotenv').config()

const text = require('./constants.js')

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => ctx.reply(`Привет ${ctx.message.from.username}`))

bot.help(ctx => ctx.reply(text.commands))

// Пишем обработчика

bot.command('course', async ctx => {
	try {
		await ctx.replyWithHTML('<b> Наши курсы </b>', Markup.inlineKeyboard([
		[
			Markup.button.callback('UX/UI', 'btn_ux'),
			Markup.button.callback('HTML', 'btn_html')
		],
		[
			Markup.button.callback('Fronted', 'btn_fronted'),
			Markup.button.callback('Backend', 'btn_backend')
		]
	]))
	}
	catch (e){
		console.error(e);
	}
})


// Start
bot.launch()