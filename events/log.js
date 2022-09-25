module.exports.info = {
	name: "log",
	eventType: ["log:unsubscribe", 'log:thread-name', 'log:subscribe'],
	version: "1.0.0",
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: "Thông báo bot hoặc người vào nhóm"
};

module.exports.run = async function({ api, event, Cherry, multiple, Users, Threads }) {
    var { threadID, author, logMessageData, logMessageType } = event;
    var { ADMIN, botSystem } = Cherry.configs;
    var sendTo = botSystem ? botSystem : ADMIN[0];
    if (logMessageType == 'log:thread-name') {
        var info = await Threads.getData(threadID);
        var { name } = await Users.getData(author);
        var msg = `==== Đổi Tên Nhóm ====\n\n` +
        `ID Nhóm: ${threadID}\n` + 
        `Người Đổi: ${name}\n` +
        `ID: ${author}\n` +
        `Tên Cũ: ${info.name}\n` +
        `Tên Mới: ${logMessageData.name}\n` +
        `Thời Gian: ${Cherry.getTime('fullTime')}`
        return api.sendMessage(msg, sendTo, async function() {
            await Threads.setData(threadID, { name: logMessageData.name });
        });
    }
    if (logMessageType == 'log:unsubscribe' && logMessageData.leftParticipantFbId == api.getCurrentUserID()) {
        var info = await Threads.getData(threadID);
        var { name } = await Users.getData(author);
        var msg = `==== Bot Bị Kick ====\n\n` +
        `Người Kick: ${name}\n` +
        `ID: ${author}\n` +
        `Kick Khỏi Nhóm: ${info.name}\n` +
        `Thời Gian: ${Cherry.getTime('fullTime')}`
        return api.sendMessage(msg, sendTo);
    }
    if (logMessageType == 'log:subscribe' && logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID())) {
        var info = await Threads.getData(threadID);
        var { name } = await Users.getData(author);
        var msg = `==== Thêm Nhóm Mới ====\n\n` +
        `Người Thêm: ${name}\n` +
        `ID: ${author}\n` +
        `Tên Nhóm: ${info.name}\n` +
        `Thời Gian: ${Cherry.getTime('fullTime')}`
        return api.sendMessage(msg, sendTo);
    }
}