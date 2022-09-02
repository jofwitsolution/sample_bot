const dotenv = require("dotenv");
const telegramBot = require("node-telegram-bot-api");

dotenv.config();

const TOKEN = process.env.TOKEN;

const bot = new telegramBot(TOKEN, { polling: true });

// bot.on("message", (message) => {
//   console.log(message);

//   let chatId = message.from.id;

//   bot.sendMessage(
//     chatId,
//     `
//     Welcome ${message.chat.username} \n\nWe are glad to have you here.
//     `
//   );
// });

bot.on("message", (msg) => {
  var hi = "hi";
  if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
    bot.sendMessage(msg.chat.id, "Hello dear user");
  }

  var bye = "bye";
  if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
  }
});

// Commands

// bot.onText(/\/start/, (msg) => {
//   bot.sendMessage(msg.chat.id, "Welcome");
// });

bot.onText(/\/sendpic/, (msg) => {
  const url = "http://somesite.com/image.jpg";

  bot
    .sendPhoto(msg.chat.id, url, {
      caption: "Here we go ! \nThis is just a caption ",
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.response.body);
    });
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome");
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome", {
    reply_markup: {
      keyboard: [["Sample text", "Second sample"], ["Keyboard"], ["I'm robot"]],
    },
  });
});

bot.on("message", (msg) => {
  var Bot = "bot";
  const type = msg.chat.type;

  console.log(msg);
  if (type === "supergroup") {
    if (msg.text.toString().toLowerCase().indexOf(Bot) === 0) {
      bot.sendMessage(
        msg.chat.id,
        '<b>bold</b> \n <i>italic</i> \n <em>italic with em</em> \n <a href="http://www.example.com/">inline URL</a> \n <code>inline fixed-width code</code> \n <pre>pre-formatted fixed-width code block</pre>',
        { parse_mode: "HTML" }
      );
    }
  }
});

bot.on("message", (msg) => {
  var location = "location";
  if (msg.text.indexOf(location) === 0) {
    bot.sendLocation(msg.chat.id, 44.97108, -104.27719);
    bot.sendMessage(msg.chat.id, "Here is the point");
  }
});
