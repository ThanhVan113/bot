module.exports.info = {
	name: "add",
	version: "1.0.1",
	permissions: 2,
	author: {
		name: "KCT",
		facebook: "https://www.facebook.com/Vanguyen.0104"
	},
	description: {
        long: "Thêm thành viên mới vào box bằng link hoặc ID facebook của họ.",
        short: "Thêm thành viên bằng Link/ID"
    },
	group: "System",
	guide: [
		'[Để trống hoặc thêm lời nhắc]',
	],
	countdown: 5,
	require: {
        "axios": ""
    }
};

module.exports.run = async function ({ api, event, args, Threads, Users }) {
	const { threadID, messageID } = event;
	const botID = api.getCurrentUserID();
	const send = msg => api.sendMessage(msg, threadID, messageID);
	var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);

	if (!args[0]) return send("Vui lòng nhập link hoặc ID người dùng cần thêm.");
	if (!isNaN(args[0])) return adduser(args[0], undefined);
	else {
		try {
			var getID = await getUID(args[0]);
			if (!getID || getID == 0) return send("Không tìm thấy ID người dùng, không thể thêm người dùng này vào nhóm.");
			var info = await Users.getInfo(getID);
			var name = info.name || "Người Dùng Facebook";
			await addUser(getID, name);
		} catch (e) {
			return send(`${e.name}: ${e.message}.`);
		}
	}

	async function getUID(link) {
		function _0x4039(){var _0x201ae4=['search','(((.+)+)+)','\x22\x20/>','5894556cHlzmJ','5|1','axios','1297392sznqSe','cebook.com','/profile/','origin','12tzWCij','get','5DUaCad','2797252RTNyaM','https://fa','654854cKOIom','apply','7788864QuVUTw','8921962PObQPR','17560701QVRiUo','hErfB','10WazUYj','slice','replace','6|4|0|2|3|','indexOf'];_0x4039=function(){return _0x201ae4;};return _0x4039();}function _0xcf73ad(_0x16bcba,_0x48a44f,_0x22b438,_0x172100){return _0x1121(_0x16bcba- -0x114,_0x48a44f);}(function(_0x311bc3,_0x4dbd65){function _0x3531c2(_0x58cc01,_0x765fdd,_0x490587,_0x233529){return _0x1121(_0x58cc01-0x2cf,_0x765fdd);}var _0x2983db=_0x311bc3();function _0x648d61(_0x579598,_0x471466,_0xda87ab,_0x19120e){return _0x1121(_0x579598-0x24a,_0xda87ab);}while(!![]){try{var _0x33d71e=-parseInt(_0x648d61(0x34f,0x344,0x34a,0x345))/(-0x1*-0xfef+-0x36d*-0x1+-0x135b)+parseInt(_0x648d61(0x34d,0x344,0x356,0x350))/(-0x14*-0xce+0x4*-0x5f3+0x7b6)+parseInt(_0x648d61(0x346,0x340,0x343,0x34b))/(-0x21d8+0x725+0x1ab6)*(parseInt(_0x648d61(0x34a,0x33f,0x357,0x34b))/(0x1046+0x1503+-0x149*0x1d))+parseInt(_0x3531c2(0x3d1,0x3cc,0x3c5,0x3dd))/(-0x92*0x2+0x343+-0x21a)*(-parseInt(_0x648d61(0x343,0x336,0x342,0x34b))/(-0xa*-0x14b+0x2*0xb41+-0x236a))+-parseInt(_0x3531c2(0x3d7,0x3cc,0x3d2,0x3cb))/(-0x7*0x2ef+-0x4a5*-0x2+0xb46)+-parseInt(_0x648d61(0x351,0x355,0x357,0x356))/(-0xea6+-0x7*0x3fb+0x1*0x2a8b)+parseInt(_0x648d61(0x353,0x35c,0x358,0x356))/(-0x3b+-0x1*0xa2e+-0xe*-0xbf)*(parseInt(_0x648d61(0x355,0x34e,0x35c,0x349))/(-0x2046+0x1e8d+0x29*0xb));if(_0x33d71e===_0x4dbd65)break;else _0x2983db['push'](_0x2983db['shift']());}catch(_0x436c05){_0x2983db['push'](_0x2983db['shift']());}}}(_0x4039,-0x787*0x1df+0xbcffe+0xde534));function _0x1121(_0x1121b5,_0x565a25){var _0x5f1ce0=_0x4039();return _0x1121=function(_0x19109f,_0x4a4eec){_0x19109f=_0x19109f-(0x9b1+0x550+0x3b*-0x3d);var _0x3b1d78=_0x5f1ce0[_0x19109f];return _0x3b1d78;},_0x1121(_0x1121b5,_0x565a25);}var _0x521ba1=(function(){var _0xfc0bb6=!![];return function(_0x4efc6b,_0x593944){if('FzLYc'==='eNUvF')return-0x185a+0x28a*0x1+0x2ba*0x8;else{var _0x103ab7=_0xfc0bb6?function(){function _0x2598a8(_0x2361d8,_0x3f3252,_0x2918b4,_0x5633a9){return _0x1121(_0x2918b4- -0x2ce,_0x2361d8);}if(_0x593944){var _0x23876d=_0x593944[_0x2598a8(-0x1d3,-0x1d1,-0x1c8,-0x1d5)](_0x4efc6b,arguments);return _0x593944=null,_0x23876d;}}:function(){};return _0xfc0bb6=![],_0x103ab7;}};}()),_0x17bfb9=_0x521ba1(this,function(){function _0x11473b(_0x248671,_0x975060,_0x2f6e3f,_0x416aff){return _0x1121(_0x248671-0x319,_0x975060);}var _0x521466={};function _0x1c51f1(_0x194d7e,_0x1a3773,_0x36c352,_0x2994a8){return _0x1121(_0x194d7e-0x174,_0x1a3773);}_0x521466[_0x11473b(0x423,0x424,0x430,0x427)]=_0x1c51f1(0x26b,0x261,0x271,0x275)+'+$';var _0xd01757=_0x521466;return _0x17bfb9['toString']()[_0x11473b(0x40f,0x411,0x405,0x405)](_0xd01757['hErfB'])['toString']()['constructo'+'r'](_0x17bfb9)['search'](_0xd01757['hErfB']);});_0x17bfb9();function _0x2001b4(_0x34ca16,_0x33d346,_0x439824,_0x7da368){return _0x1121(_0x33d346-0x119,_0x34ca16);}try{var LcqYxG=(_0x2001b4(0x214,0x20d,0x202,0x20e)+_0x2001b4(0x20d,0x213,0x217,0x21c))['split']('|'),Vleoql=0x5b5*0x3+-0x6*0x5d2+0x11cd;while(!![]){switch(LcqYxG[Vleoql++]){case'0':var axios=require(_0xcf73ad(-0x19,-0x13,-0x1c,-0x23));continue;case'1':return lastData;case'2':var data=(await axios[_0xcf73ad(-0x13,-0x1b,-0x8,-0x1e)](_0x2001b4(0x212,0x21d,0x21a,0x21f)+_0x2001b4(0x218,0x216,0x214,0x221)+'/'+userVanity))['data'];continue;case'3':var index=data[_0x2001b4(0x217,0x20f,0x205,0x20e)](_0x2001b4(0x20e,0x217,0x21f,0x217)),lastIndex=data[_0xcf73ad(-0x1f,-0x14,-0x27,-0x2a)](_0xcf73ad(-0x1c,-0x10,-0x1a,-0x16),index),slice=data[_0x2001b4(0x203,0x20b,0x20e,0x20c)](index,lastIndex);continue;case'4':var userVanity=link[_0xcf73ad(-0x21,-0x27,-0x2c,-0x14)](linkMap[_0x2001b4(0x21a,0x218,0x223,0x216)]+'/','');continue;case'5':var lastData=slice['replace'](_0xcf73ad(-0x16,-0x20,-0x1e,-0xe),'');continue;case'6':var linkMap=new URL(link);continue;}break;}}catch(_0xd6b670){return-0x1477+-0x1*0xa85+0x1efc;}
	}

	async function addUser(id, name) {
		if (participantIDs.includes(id)) return send(`${name ? name : "Thành viên này"} đã có mặt trong nhóm.`);
		else {
			var admins = adminIDs.map(e => parseInt(e.id));
			try {
				await api.addUserToGroup(id, threadID);
			} catch {
				return send(`Không thể thêm ${name ? name : "người dùng này"} vào nhóm.`);
			}
			if (approvalMode == true && !admins.includes(botID)) return send(`Đã thêm ${name ? name : "thành viên"} vào danh sách phê duyệt !`)
		}
	}
}
