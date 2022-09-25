var log = require("./settings/support/log");
log("CARROT BOT", "Đang khởi tạo các biến...");

var carrot = {
    configs: [],
    log: log,
    superban: new Map(),
    host: []
};

var multiple = {
    commands: new Map(),
    events: new Map(),
    commandsHide: [],
    handleEvents: [],
    handleMessageReply: [],
    handleReactionMessage: [],
    commandsCountDown: new Map(),
    allThreadsInfo: new Map(),
    allUsersInfo: new Map(),
    allThreadsBanned: new Map(),
    allUsersBanned: new Map(),
    workPlace: process.cwd(),
    timeStart: {
        timeStamp: Date.now(),
        fullTime: ''
    }
}

////////////////////////////////////////////
//  Xóa comments để treo Bot trên replit  //
//   Không sửa bất cứ dòng nào bên dưới   //
////////////////////////////////////////////

// var express = require('express');
// var app = express();
// var port = Math.floor(Math.random() * (9999-1000) + 1000);
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.get('/', (req, res) => {
//         res.send({ status: 'working' });
// })
// app.listen(port);
// Carrot.host.push(port);

log("CARROT BOT", "Đang kiểm tra thông tin và các cài đặt cần thiết...");
require("./settings/handle/loadAll") ({ carrot, multiple });
require('./settings/system/login') ({ Carrot, multiple });
