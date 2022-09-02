const dotenv = require("dotenv");
const telegramBot = require("node-telegram-bot-api");
const { containUrl } = require("./utils/linkDetector");

dotenv.config();

const TOKEN = process.env.TOKEN;

const bot = new telegramBot(TOKEN, { polling: true });

bot.on("message", (msg) => {
  const keyword = "jofwitsampledemo_bot";

  const text = msg.text?.toString().toLowerCase().trim();

  if (!text) return;

  const { id } = msg.chat;
  const { username } = msg.from;

  if (text.includes(keyword)) {
    bot
      .sendMessage(id, `Hello ${username}!\n How may I help you?`)
      .then((res) => console.log("success"))
      .catch((error) => console.log(error));
  }
});

bot.on("message", (msg) => {
  const keyword = "hi";

  const text = msg.text?.toString().toLowerCase().trim();

  if (!text) return;

  const { id } = msg.chat;
  const { username } = msg.from;

  if (text.startsWith(keyword) || text.indexOf(keyword) === 0) {
    bot
      .sendMessage(id, `Hello dear ${username}`)
      .then((res) => console.log("success"))
      .catch((error) => console.log(error));
  }
});

bot.on("message", (msg) => {
  const keyword = "thank you";

  const text = msg.text?.toString().toLowerCase().trim();

  if (!text) return;

  const { id } = msg.chat;
  const { username } = msg.from;

  if (
    text.startsWith(keyword) ||
    text.indexOf(keyword) === 0 ||
    text.endsWith(keyword)
  ) {
    bot
      .sendMessage(id, `Welcome dear ${username}`)
      .then((res) => console.log("success"))
      .catch((error) => console.log(error));
  }
});

bot.on("message", (msg) => {
  const keyword = "bye";
  //   console.log(msg);
  const text = msg.text?.toString().toLowerCase();

  if (!text) return;

  const { id } = msg.chat;
  const { username } = msg.from;

  if (text.startsWith(keyword) || text.includes(keyword)) {
    bot
      .sendMessage(id, `${username}, hope to see you around again, Bye.`)
      .then((res) => console.log("success"))
      .catch((error) => console.log(error));
  }
});

bot.on("message", (msg) => {
  const keyword = "fuck";
  const text = msg.text?.toString().toLowerCase();

  if (!text) return;

  const { id } = msg.chat;
  const message_id = msg.message_id;

  if (text.startsWith(keyword) || text.includes(keyword)) {
    // console.log(msg);
    bot
      .deleteMessage(id, message_id)
      .then((res) => console.log("success"))
      .catch((error) => console.log(error));
  }
});

bot.on("message", (msg) => {
  const text = msg.text?.toString();

  if (!text) return;

  const { id } = msg.chat;
  const message_id = msg.message_id;

  if (containUrl(text)) {
    // console.log(msg);
    bot
      .deleteMessage(id, message_id)
      .then((res) => console.log("success"))
      .catch((error) => console.log(error));
  }
});
