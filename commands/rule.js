module.exports.info = {
	name: "rule",
	version: "1.0.0",
	permissions: 2,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Xem luật riêng của từng nhóm",
        short: "Luật nhóm"
    },
	group: "Khác",
	guide: [],
	countdown: 5
};

module.exports.onLoad = function() {
    var { existsSync, mkdirSync, writeFileSync } = require('fs-extra');
    var path = __dirname + '/cache';
    if (!existsSync(path)) mkdirSync(path, { recursive: true });
    if (!existsSync(path + '/rule.json')) writeFileSync(path + '/rule.json', '{}', { flag: 'a+' });
}

module.exports.run = async function({ api, event, args, Threads }) {
    var { threadID, messsageID } = event;
    var { readFileSync, writeFileSync } = require('fs-extra');
    var rule = JSON.parse(readFileSync(__dirname + '/cache/rule.json', 'utf8'));
    switch (args[0]) {
        case 'add':
            args.shift();
            var newRule = args.join(' ');
            if (rule.hasOwnProperty(threadID)) rule[threadID].push(newRule);
            else rule = Object.assign(rule, { [threadID]: [`${newRule}`] });
            writeFileSync(__dirname + '/cache/rule.json', JSON.stringify(rule, null, 4));
            return api.sendMessage(`Đã thêm 1 rule mới cho nhóm này. Dưới đây là danh sách các rule hiện tại của nhóm:`, threadID, () => {
                var msg = ``, number = 1;
                for (var i of rule[threadID]) msg += `${number++}. ${i}\n`;
                return api.sendMessage(msg, threadID);
            }, messsageID);
        case 'delete':
            if (!rule.hasOwnProperty(threadID) || rule[threadID].length == 0) return api.sendMessage(`Nhóm này chưa có rule nào cả.`, threadID, messsageID);
            if (!args[1] || !parseInt(args[1])) return api.sendMessage(`Bạn phải nhập một số.`, threadID, messsageID);
            if (!rule[threadID].length < args[1] - 1) return api.sendMessage(`Lựa chọn của bạn vượt quá số lượng rule nhóm này đang có.`, threadID, messsageID);
            var DRL = rule[threadID][args[1] - 1];
            rule[threadID] = rule[threadID].filter(i => i != DRL);
            writeFileSync(__dirname + '/cache/rule.json', JSON.stringify(rule, null, 4));
            return api.sendMessage(`Đã xóa thành công 1 rule của nhóm này. ${rule[threadID].length > 0 ? `Dưới đây là các rule còn lại sau khi xóa:` : 'Hiện tại nhóm này không còn rule nào cả.'}`, threadID, () => {
                if (rule[threadID].length > 0) {
                    var msg = ``, number = 1;
                    for (var i of rule[threadID]) msg += `${number++}. ${i}\n`;
                    return api.sendMessage(msg, threadID);
                }
            }, messsageID);
        default:
            if (!rule.hasOwnProperty(threadID) || rule[threadID].length == 0) return api.sendMessage(`Nhóm này chưa có rule nào cả.`, threadID, messsageID);
            var ROT = rule[threadID], { name } = await Threads.getData(threadID);
            var msg = `Dưới đây là nội quy của nhóm ${name}:\n\n`, number = 1;
            for (var i of ROT) msg += `${number++}. ${i}\n`;
            return api.sendMessage(msg, threadID, messsageID);
    }
}