module.exports.info = {
	name: "switch",
	version: "1.0.0",
	permissions: 2,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Bật & tắt những thứ mà bạn (có thể) chưa từng thấy.",
        short: "Bạn có quên điều gì không?"
    },
	group: "tools",
	guide: [''],
	countdown: 5
};

module.exports.handleMessageReply = async function({ api, event, Reply, Cherry }) {
    var { switchConfig } = Reply, { body } = event;
    body = body.split(' ').filter(item => parseInt(item) && item <= switchConfig.length);
    if (body.length == 0) return api.reply(`Các lựa chọn bạn đưa ra không hợp lệ hoặc không có trong danh sách.`);
    api.unsendMessage(Reply.messageID);
    var msg = 'Đã chuyển đổi trạng thái của các lệnh bạn chọn như sau:\n\n', cmds = [];
    for (var i of body) {
        var commands = switchConfig[i - 1];
        var { name } = commands.info;
        if (Cherry.configs[name]) {
            Cherry.configs[name].status = Cherry.configs[name].status == false ? true : false;
            cmds.push(`${i}. ${name}: ${Cherry.configs[name].status == false ? 'bật => tắt' : 'tắt => bật'}\n`);
        } else {
            Cherry.configs[name].status = commands.info.configs.status || false;
            cmds.push(`${i}. ${name}: ${Cherry.configs[name].status == false ? 'bật => tắt' : 'tắt => bật'}\n`);
        }
    }
    return api.reply(msg + cmds.join(' '));
}

module.exports.run = async function({ api, multiple, Cherry }) {
    var { commands } = multiple, switchConfig = [], msg = '', number = 1, reg = /true|false/g;
    for (var [key, value] of commands) {
        if (value.info.configs && reg.test(value.info.configs.status)) {
            if (Cherry.configs[key] && Cherry.configs[key].status != value.info.configs.status) {
                value.info.configs.status = Cherry.configs[key].status;
                switchConfig.push(value);
            } else switchConfig.push(value);
        }
    }
    if (switchConfig.length == 0) return api.reply(`Hiện tại không có lệnh nào sử dụng công tắc cả.`);
    msg += `Dưới đây là danh sách các lệnh sử dụng công tắc:\n\n`;
    for (var i of switchConfig) msg += `${number++}. ${i.info.name}: ${i.info.configs.status == true ? 'Đang bật' : 'Đang tắt'}\n`;
    msg += `\nReply tin nhắn này số tương ứng với số các lệnh mà bạn muốn bật/tắt nó.`;
    return api.reply(msg, (error, info) => {
        multiple.handleMessageReply.push({
            name: this.info.name,
            messageID: info.messageID,
            switchConfig: switchConfig
        })
    });
}
