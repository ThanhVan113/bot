module.exports.info = {
	name: "weather",
	version: "1.0.0",
	permissions: 0,
	author: {
		name: "Idol mới nổi - Recode by Henry",
		facebook: "https://www.facebook.com/minzquan07/"
	},
	description: {
        long: "xem thời tiết",
        short: "xem thời tiết"
    },
	group: "Tiện ích",
	guide: [
		'[Thành phố]',
	],
	countdown: 5,
    require: {
        "axios": "",
        "moment-timezone": "",
        "canvas": ""
    }
};

module.exports.run = async function ({ api, event, args }) {
    var { threadID, messageID } = event;
    const axios = require("axios");
    const apikey = "d7e795ae6a0d44aaa8abb1a0a7ac19e4";
    const moment = require("moment-timezone");
    const Canvas = require("canvas");
    const { existsSync, writeFileSync, createReadStream, unlinkSync } = require("fs-extra");
    if (args.length < 1) return api.sendMessage(`Vui lòng nhập địa điểm!`, threadID, messageID);
    if (!existsSync(__dirname + '/cache/bgweather.jpg')) {
        let { data: background } = await axios.get(`https://i.imgur.com/1Rx88Te.jpg`, { responseType: "arraybuffer" });
        writeFileSync(__dirname + "/cache/bgweather.jpg", Buffer.from(background, "utf-8"));
    }
    if (!existsSync(__dirname + "/cache/Play-Bold.ttf")) {
        let { data: font } = await axios.get("https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download", { responseType: "arraybuffer" });
        writeFileSync(__dirname + "/cache/Play-Bold.ttf", Buffer.from(font, "utf-8"));
    };
    try {
        const { data } = await axios.get(`https://api.accuweather.com/locations/v1/cities/search.json?q=${encodeURIComponent(args.join(' '))}&apikey=${apikey}&language=vi-vn`);
        if (data.length == 0) return api.sendMessage(`Không tìm thấy địa điểm này!`, threadID, messageID);
        var areaKey = data[0].Key;
    } catch (err) {
        return api.sendMessage(`Đã có lỗi xảy ra!!`, threadID, messageID)
    }
    try {
        var { data: dataWeather } = await axios.get(`http://api.accuweather.com/forecasts/v1/daily/10day/${areaKey}?apikey=${apikey}&details=true&language=vi`);
    } catch (err) {
        return api.sendMessage(`Đã có lỗi xảy ra!!`, threadID, messageID);
    }

    function convertFtoC(F) { return Math.floor((F - 32) / 1.8); }
    function formatHours(hours) { return moment(hours).tz("Asia/Ho_Chi_Minh").format("HH[h]mm[p]"); }
    const dataWeatherToday = dataWeather.DailyForecasts[0];
    let msg = `Thời tiết hôm nay:\n${dataWeather.Headline.Text}` +
        `\n🌡 Nhiệt độ thấp nhất - cao nhất: ${convertFtoC(dataWeatherToday.Temperature.Minimum.Value)}°C - ${convertFtoC(dataWeatherToday.Temperature.Maximum.Value)}°C` +
        `\n🌡 Nhiệt độ cảm nhận được: ${convertFtoC(dataWeatherToday.RealFeelTemperature.Minimum.Value)}°C - ${convertFtoC(dataWeatherToday.RealFeelTemperature.Maximum.Value)}°C` +
        `\n🌅 Mặt trời mọc: ${formatHours(dataWeatherToday.Sun.Rise)}` +
        `\n🌄 Mặt trời lặn ${formatHours(dataWeatherToday.Sun.Set)}` +
        `\n🌃 Mặt trăng mọc: ${formatHours(dataWeatherToday.Moon.Rise)}` +
        `\n🏙️ Mặt trăng lặn: ${formatHours(dataWeatherToday.Moon.Set)}` +
        `\n🌞 Ban ngày: ${dataWeatherToday.Day.LongPhrase}` +
        `\n🌙 Ban đêm: ${dataWeatherToday.Night.LongPhrase}`;
    Canvas.registerFont(__dirname + "/cache/Play-Bold.ttf", { family: "Play-Bold" });
    const bg = await Canvas.loadImage(__dirname + "/cache/bgweather.jpg");
    const { width, height } = bg;
    const canvas = Canvas.createCanvas(width, height);
    const ctx = canvas.getContext(`2d`);
    ctx.drawImage(bg, 0, 0, width, height);
    let X = 100;
    ctx.fillStyle = "#ffffff";
    const data = dataWeather.DailyForecasts.slice(0, 7);
    for (let item of data) {
        const icon = await Canvas.loadImage("http://vortex.accuweather.com/adc2010/images/slate/icons/" + item.Day.Icon + ".svg");
        ctx.drawImage(icon, X, 210, 80, 80);
        ctx.font = "22px Play-Bold";
        const maxC = `${convertFtoC(item.Temperature.Maximum.Value)}°C `;
        ctx.fillText(maxC, X, 366);
        ctx.font = "22px Play-Bold";
        const minC = String(`${convertFtoC(item.Temperature.Minimum.Value)}°C`);
        const day = moment(item.Date).format("DD");
        ctx.fillText(minC, X, 445);
        ctx.fillText(day, X + 20, 140);
        X += 135;
    }
    const pathSaveImg = __dirname + "/cache/weather.jpg";
    writeFileSync(pathSaveImg, canvas.toBuffer());
    return api.sendMessage({ body: `${msg}`, attachment: createReadStream(pathSaveImg) }, threadID, () => unlinkSync(pathSaveImg), messageID);
}