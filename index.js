const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '514547430:AAE1Kiqr6YTbbyC7PwWja-w1Rg5cLN4SSqs'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
     bot.sendMessage(msg.chat.id, `Hello`)
})