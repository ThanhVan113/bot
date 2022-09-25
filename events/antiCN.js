module.exports.info = {
	name: "antiCN",
	eventType: ['log:user-nickname'],
	version: "1.0.0",
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: "Chống đổi biệt danh của Bot"
};

module.exports.run = async function({ api, event, Cherry, Users, Threads }) {
    var { logMessageData, threadID, author } = event;
    var botID = api.getCurrentUserID();
    var { BOTNAME, ADMIN } = Cherry.configs;
    var { bietdanh } = await Threads.getUser(threadID, botID) || BOTNAME;
    var nickname = bietdanh ? bietdanh : BOTNAME;
    if (logMessageData.participant_id == botID && author != botID && !ADMIN.includes(author) && logMessageData.nickname != nickname) {
        api.changeNickname(nickname, threadID, botID);
        var info = await Users.getData(author);
        if (!info.antiCN) info.antiCN = 1;
        else info.antiCN++;
        if (info.antiCN == 3) {
            if (info.banned && info.banned.status == true) {
                info.banned.lido.push(`Tự tiện đổi biệt danh của Bot.`);
                await Users.setData(author, info);
                multiple.allUsersBanned.set(author, info.banned);
            } else if (!info.banned) {
                info.banned = { status: true, lido: [`Tự tiện đổi biệt danh của Bot.`], author: `Cherry - Anti Change Nickname`, type: 'ban', time: Cherry.getTime('fullTime') };
                await Users.setData(author, info);
                multiple.allUsersBanned.set(author, info.banned);
            }
            return api.sendMessage({ body: `${info.name} - Bạn bị cấm sử dụng Bot vì đổi biệt danh của Bot 3 lần.`, mentions: [{ tag: info.name, id: author }] }, threadID);
        }
        return api.sendMessage({ body: `${info.name} - Vui lòng không đổi biệt danh của Bot, đây là cảnh cáo lần ${info.antiCN}.\n\nBạn sẽ bị cấm sử dụng Bot nếu đổi biệt danh của Bot 3 lần.`, mentions: [{ tag: info.name, id: author }] }, threadID);
    }
}