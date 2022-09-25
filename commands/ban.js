module.exports.info = {
	name: "ban",
	version: "1.1.2",
	permissions: 2,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Có thể cấm người dùng nào đó không thể sử dụng Bot cho đến khi được ân xá",
        short: "Cấm người dùng"
    },
	group: "Dành Cho Quản Lí",
	guide: [
		'[thread/user/list]\nList: [user/thread]',
	],
	countdown: 5
};

module.exports.handleMessageReply = async function({ api, event, multiple, Reply, Threads, Users, Cherry }) {
    var { type, ban, author } = Reply, { mentions, threadID, senderID, body, messageID } = event;
    if (author != senderID) return;
    api.unsendMessage(Reply.messageID);
    if (ban == 'threads') {
        var { threads } = Reply;
        if (type == 'ban') {
            if (!body) return api.sendMessage(`Bạn cần nhập lí do muốn cấm những nhóm này sử dụng Bot.`, threadID, messageID);
            var authorBan = await Users.getData(senderID);
            for (var i of threads) {
                var info = await Threads.getData(i.ID);
                info.banned = { status: true, lido: [body], author: authorBan.name, type: type, time: Cherry.getTime('fullTime') };
                await Threads.setData(i.ID, info)
            }
            return api.sendMessage(`Đã cấm ${threads.length} nhóm sử dụng Bot.`, threadID, messageID);
        }
        body = body.split(' ').filter(item => item <= threads.length);
        if (body.length < 1) return api.sendMessage(`Các lựa chọn bạn đưa ra không hợp lệ.`, threadID, messageID);
        var msg = `Bạn có chắc muốn cấm những nhóm này sử dụng Bot?\n\n`, number = 1, change = [];
        for (var i of body) {
            var thread = threads[i - 1];
            msg += `${number++}. ${thread.name}\n`;
            change.push(thread);
        }
        msg += `\nReply tin nhắn này kèm lí do mà bạn cấm những nhóm này sử dụng Bot.`;
        return api.sendMessage(msg, threadID, (error, info) => multiple.handleMessageReply.push({ name : this.info.name, messageID: info.messageID, threads: change, type: 'ban', ban: 'threads', author: senderID }), messageID);
    }
    if (ban == 'users') {
        var { users } = Reply;
        if (!body) return api.sendMessage(`Bạn cần nhập lí do muốn cấm những nhóm này sử dụng Bot.`, threadID, messageID);
        var authorBan = await Users.getData(senderID);
        for (var i of users) {
            var info = await Users.getData(i.ID);
            info.banned = { status: true, lido: [body], author: authorBan.name, type: type, time: Cherry.getTime('fullTime') };
            await Users.setData(i.ID, info)
        }
        return api.sendMessage(`Đã cấm ${threads.length} nhóm sử dụng Bot.`, threadID, messageID);
    }
}

module.exports.run = async function({ api, event, multiple, args, Users, Threads, permission }) {
    var { mentions, threadID, messageID, senderID } = event;
    if (args[0] == 'thread' && permission == 3) {
        var allThreads = await Threads.getAll(['ID', 'name', 'banned']);
        var msg = `Dưới đây là những nhóm mà bạn có thể cấm sử dụng Bot:\n\n`, threads = [], number = 1;
        for (var i of allThreads) {
            if (!i.banned) {
                msg += `${number++}. ${i.name}\n`;
                threads.push(i);
            }
        }
        msg += `\nReply tin nhắn này kèm số tương ứng với nhóm mà bạn muốn cấm sử dụng Bot.\nVí Dụ: 1 2 3 11 14`;
        return api.sendMessage(msg, threadID, (error, info) => multiple.handleMessageReply.push({ name : this.info.name, messageID: info.messageID, threads: threads, type: 'change', ban: 'threads', author: senderID }), messageID);
    }
    if (args[0] == 'user') {
        if (Object.keys(mentions).length == 0) return api.sendMessage(`Bạn phải tag những người cần ban.`, threadID, messageID);
        var mention = Object.keys(mentions), users = [], msg = `Bạn có chắc muốn cấm những thành viên dưới đây sử dụng Bot?\n\n`, number = 1;
        for (var i of mention) {
            var info = await Users.getData(i);
            if (!info.banned || info.banned && info.banned.status == false) {
                users.push({ ID: i, name: info.name });
                msg += `${number++}. ${info.name}\n`;
            }
        }
        msg += `Reply tin nhắn này với lí do bạn muốn cấm những thành viên này sử dụng Bot.`;
        return api.sendMessage(msg, threadID, (error, info) => multiple.handleMessageReply.push({ name : this.info.name, messageID: info.messageID, users: users, type: 'ban', ban: 'users', author: senderID }), messageID);
    }
    if (args[0] == 'list') {
        if (args[1] == 'user') {
            var allUsers = await Users.getAll(['ID', 'name', 'banned']);
            var msg = `Dưới đây là danh sách các thành viên bị cấm sử dụng Bot:\n\n`, number = 1, users = [];
            for (var i of allUsers) {
                if (i.banned && i.banned.status == true) {
                    msg += `${number++}. ${i.name}\n`;
                    users.push(i);
                }
            }
            if (users.length == 0) return api.sendMessage(`Hiện tại chưa có thành viên nào bị cấm sử dụng Bot cả.`, threadID, messageID);
            return api.sendMessage(msg, threadID, messageID);
        }
        if (args[1] == 'thread') {
            var allThreads = await Threads.getAll(['ID', 'name', 'banned']);
            var msg = `Dưới đây là danh sách các nhóm bị cấm sử dụng Bot:\n\n`, number = 1, threads = [];
            for (var i of allThreads) {
                if (i.banned && i.banned.status == true) {
                    msg += `${number++}. ${i.name}\n`;
                    threads.push(i);
                }
            }
            if (threads.length == 0) return api.sendMessage(`Hiện tại chưa có nhóm nào bị cấm sử dụng Bot cả.`, threadID, messageID);
            return api.sendMessage(msg, threadID, messageID);
        }
    }
}