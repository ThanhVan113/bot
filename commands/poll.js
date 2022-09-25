module.exports.info = {
	name: "poll",
    version: "1.0.0",
    permissions: 1,
    author: {
        name: "Henry",
        facebook: "https://facebook.com/s2.henry"
    },
	description: {
        long: "Tạo cuộc thăm dò ý kiến trong box",
        short: "Cuộc thăm dò ý kiến"
    },
	group: "Dành Cho Thành Viên",
	guide: ['pollname: option, option, option...'],
	countdown: 5
};

module.exports.run = async function({ api, args, event, prefix }) {
    //Ví Dụ: <prefix>poll Ai là người yêu em nhất?: Anh, Vẫn là anh, Lại là anh :>, Ông hàng xóm :>
    var { threadID, body } = event;
    if (!body.includes(':')) return api.reply(`Bạn chưa đặt dấu ':' sau tên của cuộc thăm dò ý kiến`);
    var pollName = body.slice(prefix.length + this.info.name.length, body.indexOf(':'));
    var options = body.slice(body.indexOf(':') + 1).trim().split(', ');
    var Obj = {};
    for (const i of options) Obj[i] = false;
    api.createPoll(pollName, threadID, Obj, () => {
        api.send(`Đã tạo cuộc thăm dò ý kiến: ${pollName}\n\nMọi người nhanh tay tham gia bình chọn nào`)
    })
}
