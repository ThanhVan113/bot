module.exports.info = {
	name: "feedback",
	version: "1.0.0",
	permissions: 1,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Gửi báo cáo lỗi hoặc yêu cầu, gợi ý tính năng của bạn cho ADMIN của Cherry",
        short: "Gửi, yêu cầu, gợi ý tính năng"
    },
	group: "System",
	guide: [
		'',
	],
	countdown: 5
};

module.exports.handleMessageReply = async function({ api, event, Reply }) {
    var { threadID, messageID, senderID, body } = event;
    var { author } = Reply;
    if (senderID != author || !body) return;
    var axios = require("axios");
    var data = { ID: author, noidung: body, type: "feedback" };
    var { data: checkData } = await axios.post("https://cherry-sever.glitch.me/feedback", data);
    api.unsendMessage(Reply.messageID);
    if (checkData.status == true) return api.sendMessage("Feedback của bạn đã được gửi thành công, một lần nữa cảm ơn bạn vì điều tốt đẹp này.\nChúc bạn có một ngày tốt lành ^^", threadID, messageID);
    else return api.sendMessage("Đã xảy ra lỗi khi gửi Feedback của bạn, vui lòng kiểm tra và thử lại.\nRất xin lỗi vì sự cố không đáng có này :<", threadID, messageID);
}

module.exports.run = function({ api, event, multiple }) {
    var { threadID, messageID, senderID } = event;
    return api.sendMessage(`Cảm ơn bạn đã có ý định gửi Feedback.\nVui lòng Reply tin nhắn này kèm nội dung mà bạn muốn gửi đi.`, threadID, (error, info) => multiple.handleMessageReply.push({ name: this.info.name, messageID: info.messageID, author: senderID }), messageID);
}
