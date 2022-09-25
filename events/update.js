module.exports.info = {
	name: "update",
	eventType: ["change_thread_admins"],
	version: "1.0.0",
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: "Thông báo bot hoặc người vào nhóm"
};

module.exports.run = async function({ api, event, Threads }) {
    var { logMessageData, threadID } = event;
    var threadInfo = await Threads.getData(threadID);
    if (logMessageData.ADMIN_EVENT == 'add_admin') {
        threadInfo.adminIDs.push({ id: logMessageData.TARGET_ID });
        await Threads.setData(threadID, threadInfo);
    }
    if (logMessageData.ADMIN_EVENT == 'remove_admin') {
        threadInfo.adminIDs = threadInfo.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
        await Threads.setData(threadID, threadInfo);
    }
    return api.sendMessage(`Dữ liệu nhóm đã được làm mới.`, threadID);
}
