module.exports.info = {
	name: "lyric",
	version: "1.0.1",
	permissions: 0,
	author: {
		name: "Idol mới nổi",
		facebook: "https://www.facebook.com/minzquan07"
	},
	description: {
        long: "công cụ tìm lời bài hát vjp",
        short: "tìm lời bài hát"
    },
	group: "Music",
	guide: [
		'[tên bài hát]',
	],
	countdown: 5,
    require: {
        "genius-lyrics": ""
    }
};

module.exports.handleMessageReply = async function({ api, event, Reply }) {
  var { threadID, messageID, body, senderID } = event;
  var { list, author } = Reply;
  if (author != senderID) return api.sendMessage(`Bạn không phải người tìm kiếm.`, threadID, messageID);
  if (!parseInt(body)) return api.sendMessage(`Bạn phải nhập một số và là số nguyên dương lớn hơn 0`, threadID, messageID)
  if (list.length < body) return api.sendMessage(`Lựa chọn của bạn không nằm trong danh sách.`, threadID, messageID)
  var lyrics = await list[body - 1].lyrics();
 api.sendMessage(lyrics, threadID, messageID)
}

module.exports.run = async function({ api, args, event, multiple }) {
   const { threadID, messageID, senderID } = event;
  const Genius = require("genius-lyrics");
  const Api = new Genius.Client("RMpz_RR3nvYJJD3EBK6V8lAoA-txgS4U7XJySXmw3V7lEzttO3zbE5Jw_SMHo1x7");
  if (!args[0]) return api.sendMessage("Vui lòng nhập tên bài hát hoặc từ khóa để tìm kiếm lời bài hát mà bạn muốn xem.", threadID, messageID);
  let result = await Api.songs.search(args.join(" "));
  var msg = `Dưới đây là danh sách những bài hát có thể bạn đang tìm:\n\n`, number = 1;
  for (var i of result) msg += `${number++}. ${i.title} - ${i.artist.name}\n`;
  msg += `\nVui lòng reply tin nhắn này với số tương ứng với bài hát mà bạn muốn xem lời.`;
  return api.sendMessage(msg, threadID, (error, info) => {
    multiple.handleMessageReply.push({
      name: this.info.name,
      messageID: info.messageID,
      author: senderID,
      list: result
    })
  }, messageID);
}
