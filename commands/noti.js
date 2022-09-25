module.exports.info = {
	name: "noti",
    version: "1.0.2",
    permissions: 2,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Gửi thông báo tới tất cả các box có ID trong Database",
        short: "Gửi thông báo"
    },
	group: "Dành Cho Quản Lí",
	guide: [
		'[text]',
	],
	countdown: 5
};

module.exports.run = async({ api, event, args, Threads, Users, Cherry }) => {
    var { threadID, messageID, senderID, type, messageReply } = event;
	var allThread = await Threads.getAll(['ID']);
    allThread = allThread.filter(item => item.ID != threadID);
	var count = 0, err = 0, { name } = await Users.getData(senderID), path = [], attachment = [];
    var { createReadStream, unlinkSync } = require('fs-extra');
    if (args.length == 0) return api.sendMessage("Bạn cần nhập thông báo.", threadID, messageID);
    if (type == 'message_reply' && messageReply.attachments.length > 0) {
        for (var i of messageReply.attachments) {
            var fileType, number = 1;
            if (i.type == 'photo') fileType = '.png';
            if (i.type == 'audio') fileType = '.mp3';
            if (i.type == 'video') fileType = '.mp4';
            if (!fileType) continue;
            var filePath = `${__dirname}/cache/noti_${number++}${fileType}`;
            await Cherry.downloadFile(`${i.url}`, filePath);
            attachment.push(createReadStream(filePath));
            path.push(filePath);
        }
    }
    for (var thread of allThread) {
        var { participantIDs } = await Threads.getInfo(thread.ID), mention = [];
        participantIDs.filter(item => item != api.getCurrentUserID() && item != senderID);
        for (var i of participantIDs) mention.push({ id: i, tag: '» Thông Báo «' });
        var msg = { body: `» Thông Báo «\n\n${args.join(' ')}\n\n${name == "Chử Xuân Hòa" ? "" : "Gửi Từ: " + name}`, mentions: mention, attachment: attachment };
        api.sendMessage(msg, thread.ID, (error) => {
            if (error) err++;
            else count++;
            if (count + err == allThread.length) {
                if (path.length > 0) for (var i of path) unlinkSync(i);
                return api.sendMessage(`Đã gửi thông báo đến ${count} nhóm thành công.\n\nKhông thể gửi đến ${err} nhóm.`, threadID);
            }
        });
    }
}
