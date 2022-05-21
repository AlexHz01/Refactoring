const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./ExplorerController");

class botController {

static botGetExplorer() {

    const token = "5385471124:AAEn7tyGyhEs841LQZA9UqFTe21Z28zwV7c";
    const bot = new TelegramBot(token, { polling: true });

    bot.onText(/\/echo (.+)/, (msg, match) => {

        const chatId = msg.chat.id;
        const resp = match[1];

        bot.sendMessage(chatId, resp);
    });

    bot.on("message", (msg) => {
        const chatId = msg.chat.id;
        const numberToApplyFb = parseInt(msg.text);
        const mission = msg.text;
        const stack = msg.text;

        if (!isNaN(numberToApplyFb)) {
            const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
            const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
            bot.sendMessage(chatId, responseBot);
        }

        else if (mission === "node" || mission === "java") {
            const explorers = ExplorerController.getExplorersUsernamesByMission(mission);
            const respuesta = `Name user de los Explorers en ${mission} son ${explorers.length}. ${explorers}`
            bot.sendMessage(chatId, respuesta);
        }
        else if (stack){
            const ExplorersByStack = ExplorerController.getStackByExplorer(stack);
            const respuestas = `Name de los Explorers con stacks ${stack} son  ${ExplorersByStack}`
            bot.sendMessage(chatId, respuestas);
        }

        else {
            bot.sendMessage(chatId, "Dato inválido");
            // const mission = msg.text;
            // console.log(mission);
            // if (mission === NaN) {
            //     console.log("No es un numero");
            // }
        }
    });
}}

module.exports = botController;