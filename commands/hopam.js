module.exports.info = {
	name: "hopam",
    version: "1.0.0",
    permissions: 1,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Tìm hợp âm guitar từ hợp âm chuẩn",
        short: "Hợp Âm Guitar"
    },
	group: "Tools",
	guide: [
		'[tên bài hát]'
	],
	countdown: 5,
    require: {
        "axios": ""
    }
};

module.exports.handleMessageReply = async function({ api, event, Reply }) {
    var { threadID, messageID, body } = event;
    var { data: list } = Reply;
    if (!body || !parseInt(body)) return api.sendMessage(`Lựa chọn của bạn phải là một số và là số nguyên dương lớn hơn 0.`, threadID, messageID);
    if (list.length < body) return api.sendMessage(`Lựa chọn của bạn không nằm trong danh sách.`, threadID, messageID);
    var axios = require('axios');
    var change = list[body - 1];
    var { data } = await axios.get(`https://cherry-sever.glitch.me/api/guitar/hopam=${change.ID}`);
    return api.sendMessage(`Bài Hát: ${change.title}\nCa Sĩ: ${change.singer}\n\n${data.chord}`, threadID, messageID);
}

module.exports.run = async function({ api, event, args, multiple }) {
    var { threadID, messageID } = event;
    var axios = require('axios');
    if (!args[0]) return api.sendMessage('Bạn cần nhập tên bài hát cần tìm hợp âm.', threadID, messageID);
    var { data } = await axios.get(`https://cherry-sever.glitch.me/api/guitar/search=${encodeURIComponent(args.join(' '))}`);
    if (data.success == false) return api.sendMessage('Đã xảy ra lỗi khi lấy danh sách bài hát cho bạn, vui lòng thử lại sau.', threadID, messageID);
    if (data.data.length == 0) return api.sendMessage(`Không tìm được bài hát nào dựa trên từ khóa mà bạn tìm kiếm.`, threadID, messageID)
    var msg = `Dưới đây là danh sách những bài hát có hợp âm dựa trên từ khóa bạn đã tìm:\n\n`, number = 1;
    for (var i of data.data) msg += `${number++}. Tên Bài Hát: ${i.title}\nCa Sĩ: ${i.singer}\n\n`;
    msg += `Vui lòng trả lời tin nhắn này kèm số tương ứng với bài hát mà bạn muốn lấy hợp âm.`;
    return api.sendMessage(msg, threadID, (error, info) => multiple.handleMessageReply.push({ name: this.info.name, messageID: info.messageID, data: data.data }), messageID)
}