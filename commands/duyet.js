module.exports.info = {
	name: "duyet",
	version: "1.0.1-beta",
	permissions: 2,
	author: {
		name: "Idol mới nổi - update by Henry",
		facebook: "https://www.facebook.com/minzquan07/"
	},
	description: {
        long: "Duyệt các nhóm và người dùng để họ có thể sử dụng Bot bình thường",
        short: "Duyệt nhóm và người dùng"
    },
	group: "System",
	guide: [],
	countdown: 5
};

module.exports.handleMessageReply = async function({ api, event, Reply, Users }) {
    var { body, threadID, messageID, senderID } = event;
    var { group, user, list, author, messageID: message } = Reply, botID = api.getCurrentUserID();
    if (author != senderID) return;
    api.unsendMessage(message);

    if (/^cancel/.test(body)) {
        var index = body.split(' ').filter(item => parseInt(item) && item <= list.length);
        if (index.length == 0) return api.sendMessage(`Các lựa chọn bạn đưa ra không hợp lệ hoặc không có trong danh sách.`, threadID, messageID);
        var error = 0, success = 0;
        for (var i of index) {
            api.removeUserFromGroup(botID, list[i - 1].threadID, (err) => {
                if (err) error++;
                else success++;
                if (error + success == index.length) return api.sendMessage(`Đã từ chối thành công ${success} người dùng và nhóm.\n\n${error > 0 ? `Đã xảy ra lỗi khi từ chối ${error} người dùng và nhóm` : ''}`, threadID);
            });
        }
    }
    var index = body.split(' ').filter(item => parseInt(item) && item <= list.length);
    if (index.length == 0) return api.sendMessage(`Các lựa chọn bạn đưa ra không hợp lệ hoặc không có trong danh sách.`, threadID, messageID);
    var error = 0, success = 0;
    var { name } = await Users.getData(author);
    for (var i of index) {
        if (i < group.length) var type = 'Nhóm này';
        else var type = 'Bạn';
        api.sendMessage(`» Thông Báo «\n\n${type} đã được ${name} phê duyệt để có thể sử dụng Bot.`, list[i - 1].threadID, (error) => {
            if (error) error++;
            else success++;
            if (error + success == index.length) return api.sendMessage(`Đã duyệt thành công ${success} nhóm và người dùng.\n\n${error > 0 ? `Đã xảy ra lỗi khi duyệt ${error} nhóm và người dùng` : ''}`, threadID);
        });
    }
}

module.exports.run = async function({ api, args, event, multiple }) {
    var { threadID, messageID, senderID } = event;
    try {
        var spamList = await api.getThreadList(100, null, ["OTHER"]);
        var pendingList = await api.getThreadList(100, null, ["PENDING"]);
        var group = spamList.concat(pendingList).filter(i => i.isSubscribed && i.isGroup);
        var user = spamList.concat(pendingList).filter(i => i.isSubscribed && !i.isGroup);
    } catch (error) {
        return api.sendMessage(`Đã xảy ra lỗi khi lấy danh sách cách spam và tin nhắn chờ. Lỗi: ${error}`, threadID, messageID);
    }
    var grouparr = [], userarr = [], index = 1;
    if (group.length + user.length == 0) return api.sendMessage(`Hiện tại không có nhóm hoặc người dùng nào trong hàng chờ.`, threadID, messageID);
    for (var i of group) grouparr.push(`${index++}. ${i.name}\n`);
    for (var i of user) userarr.push(`${index++}. ${i.name}\n`);
    var msg = "";
    if (grouparr.length > 0) msg += `Danh sách các nhóm chờ duyệt:\n\n${grouparr.join(' ')}\n`;
    if (userarr.length > 0) msg += `Danh sách người dùng chờ duyệt:\n\n${userarr.join(' ')}\n`;
    msg += `Reply tin nhắn này số tương ứng với nhóm hoặc người dùng bạn cần duyệt.`;
    return api.reply(msg, (error, info) => multiple.handleMessageReply.push({ name: this.info.name, messageID: info.messageID, author: senderID, group: group, user: user, list: group.concat(user) }));
}
