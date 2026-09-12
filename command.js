const commands = new Map();

function command(name, handler) {
  commands.set(name, handler);
}

command("ping", async (sock, msg) => {
  await sock.sendMessage(msg.key.remoteJid, {
    text: "🏓 Pong ! Elias CK est actif 😎"
  });
});

command("menu", async (sock, msg) => {
  await sock.sendMessage(msg.key.remoteJid, {
    text: `╭━━━〔 🤖 ELIAS CK 〕━━━╮
┃
┃ 🧠 AI
┃ 🛠️ Tools
┃ 📥 Download
┃ 👥 Group
┃ 😂 Fun
┃ ❤️ Couple
┃ 👑 Owner
┃
╰━━━━━━━━━━━━━━━━━━╯

Tape .ping pour tester le bot.`
  });
});

export { commands };
