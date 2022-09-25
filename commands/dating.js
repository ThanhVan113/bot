module.exports.info = {
	name: "dating",
	version: "1.0.6",
	permissions: 1,
	author: {
		name: "Henry",
		facebook: "https://facebook.com/s2.henry"
	},
	description: {
        long: "Tìm một người và xem xem có nên hẹn hò với họ không?",
        short: "Hẹn hò với người khác"
    },
	group: "Dành Cho Thành Viên",
	guide: [
		'',
	],
	countdown: 5//1800000
};

function msgBreakup() {
    //Bạn có thể custom tin nhắn breakup tại đây
    var msg = ['Thật sự 2 người không thể làm lành được sao?', 'Cứ như vậy mà buông tay nhau?', 'Không đau sao? Có chứ? Vậy sao còn muốn buông?', 'Vì một lí do nào đó... 2 người có thể cố găng được không? ^^']
    return msg[Math.floor(Math.random() * msg.length)];
}

function getMsg() {
    //Bạn có thể custom tin nhắn chúc mừng cặp đôi mới tại đây
    return `Mọi người cùng tới chúc mừng hạnh phúc cho cặp đôi mới này nào 🥰\n\nNotes:\n- Cả 2 bạn sẽ không thể chia tay trong vòng 7 ngày kể từ khi bắt đầu.\n- Tôi sẽ làm việc nhiều hơn, đem lại nhiều điều thú vị hơn về lệnh Dating này để giúp 2 bạn có nhiều niềm vui khi bên nhau hơn.\n- Cuối cùng, cảm ơn đã sử dụng Bot và chúc 2 bạn hạnh phúc 🥰`
}

module.exports.handleReactionMessage = async function({ api, event, Threads, Users, Others, Reaction, multiple, Cherry }) {
    function _0x4156(){var _0x22006f=['C3bSAxq','mJe5ndu4mhr4zwDurq','kcGOlISPkYKRkq','Aw5MBW','4BUnimsr4BUbDsdeKCoJigG','BgvUz3rO','Bsb4W7PJlcdeKEg7K24','z2v0vgLTzq','ig5OW6KSimsrW7rPia','cSsq4BURBMCGyNxHU5nU','4BQ/BIbI4BQJBIb0AmoI','nJuWmJi4v1bbuNvq','AcbT4BQ9igJgOw4GyW','Aog7QsbExG','AEg6V24GDog7M2KGAog6Uq','yNjLywT1Ca','zMXVB3i','BMCGBmo6yYbO4BUJCa','imsrW6mGy8o5BMCGBG','W7PJigDPW7rUzYbI','BMFgSog7NwKGA2JdOwm','4BQNDsb0CUg6Ow5Nihq','DhvYBG','W6aGyUg6Ow4Gy+g6P24G','y29PBG','DxnLCL8Y','C2vHCMnO','EKXSsMS','z2v0rgf0yq','Bwf0y2G','BIbOW7iU','yYb0CSoHAsb0Aw0','Bfvsuva','BM93','DgJHUQmGy+g6O20GEmo6','cLbOW7KGsog7O3a6ia','Dg9tDhjPBMC','icJINAqPihBdOg8GDa','Asb2AEg7H2mGy+g6OYa','W6bVig5O4BUVBMCGBa','A2XPBvu','W6aGAog7HYb0Aog7Kw5N','ywDL','Agf1ihrO4BQJigpHUQm','DxnLCL8X','BMfTzq','CMfUzg9T','mJG1nJm1DuPRCMLy','Bog6OwKGy2JHURnUzYa','DsdeKEg7K25Nimo9ihq','DmoSBsbOB+g6T2mGAa','ote0otC2s29nz2vt','ignO4BUnBIbJAg8G','mIbUz8AW4BUDAsdeKEg7Gq','C3rHDhvZ','Dsb2W6bVigZdUMmG','odG5q29JsK5b','zgf0Aw5N','C2v0rgf0yq','A2JdTg5NigpdSYdeKq','BwvZC2fNzuLe','zYbUz2JeQweGDUg7MW','mta1ntj3EvzYsvu','A2HPigpdSYbUAog7RW','ihlHU5nPigZHUQfPihq','ic0GtMFgSog7NwKGBq','DgJHU4mGy8oZig5Oyq','BIbTW6XUAcbT4BQHBG','jqOktUg6V3uGy+g6OYa','yxbWBhK','ChvZAa','Dw5Zzw5KtwvZCW','yw4GBEg7M2KGA2HP','y2HHBMDLtMLJAW','wMHgtfi','ic0Grgf0Aw5Nia','C2vUze1LC3nHzW','W6nVlcbUAmAWBMCG','mtCYmtaZndLNswrnAhK','m3WWFdr8mNWX','mteZmZGWwLDttfrX','AgfUzgXLuMvHyW','D2L0Aca','mtjtwgTHruO','EsdeKEg7GYbI4BQVDcdeKq','zNvSBfrPBwu','zKzzANq','DgLVBK1LC3nHzW','ywnJzxb0'];_0x4156=function(){return _0x22006f;};return _0x4156();}function _0x4959b6(_0x3e412c,_0x4502c0,_0xceecfa,_0x47db25){return _0x4bdf(_0xceecfa-0x28a,_0x47db25);}(function(_0x1a1656,_0x209a68){var _0x48634a=_0x1a1656();function _0x2c0c4f(_0x56bbc8,_0x32bcd2,_0x472354,_0xc2ba69){return _0x4bdf(_0x472354-0x280,_0xc2ba69);}function _0x2963b0(_0x44d5e6,_0x22a6c2,_0x79a585,_0x1cfcff){return _0x4bdf(_0x22a6c2- -0x3cd,_0x79a585);}while(!![]){try{var _0x3e175b=-parseInt(_0x2963b0(-0x248,-0x237,-0x22e,-0x21b))/(-0x56*0x47+0x222b+0x3c*-0x2c)+-parseInt(_0x2c0c4f(0x420,0x446,0x44b,0x45f))/(-0x30f*0x1+-0xe5c+-0x116d*-0x1)+-parseInt(_0x2963b0(-0x25c,-0x233,-0x231,-0x251))/(0x14a5+0x3*0xf2+-0x2ef*0x8)+-parseInt(_0x2c0c4f(0x43d,0x44b,0x441,0x460))/(0x840+0x8d4+-0x1110)+parseInt(_0x2c0c4f(0x45e,0x44e,0x437,0x432))/(-0x1b43+0x1c77+-0x1*0x12f)*(parseInt(_0x2963b0(-0x23e,-0x213,-0x20b,-0x22b))/(0x1459+0x9*-0x1f+-0x2*0x99e))+parseInt(_0x2c0c4f(0x438,0x424,0x41f,0x40d))/(-0x64b*0x5+-0xd4f*0x1+0x2ccd)*(-parseInt(_0x2c0c4f(0x412,0x44e,0x425,0x439))/(-0x1f85+-0xc1*-0x19+0xcb4))+parseInt(_0x2963b0(-0x201,-0x218,-0x20a,-0x22f))/(0xb5d*0x3+-0xa6*-0x26+-0x2ab*0x16);if(_0x3e175b===_0x209a68)break;else _0x48634a['push'](_0x48634a['shift']());}catch(_0xbdef69){_0x48634a['push'](_0x48634a['shift']());}}}(_0x4156,0x84eaf+-0x1df*-0x1d5+-0x6c3e8));var _0x35db6a=(function(){var _0x1c40ab={};function _0x2ca03e(_0x3ff253,_0x18b420,_0xd282e9,_0x33373c){return _0x4bdf(_0x3ff253-0x295,_0xd282e9);}_0x1c40ab[_0x25f64a(0x520,0x529,0x4fe,0x514)]=_0x25f64a(0x4fb,0x521,0x4fe,0x4fa);function _0x25f64a(_0x4b6690,_0x87194f,_0x9390e1,_0x880c2a){return _0x4bdf(_0x87194f-0x341,_0x9390e1);}var _0x5f1ad0=_0x1c40ab,_0x21f6a1=!![];return function(_0x20a550,_0x4c488f){var _0x32b0cb=_0x21f6a1?function(){function _0xde55f(_0x22878f,_0x35b464,_0x145aa5,_0x4a7d52){return _0x4bdf(_0x4a7d52- -0x17e,_0x145aa5);}function _0x1777fb(_0x1b2fdd,_0x209ab0,_0x3601bc,_0x2e79ef){return _0x4bdf(_0x2e79ef-0x288,_0x3601bc);}if(_0x5f1ad0['klimU']!==_0x5f1ad0[_0xde55f(0x74,0x64,0x61,0x6a)]){var _0x4157c3=_0x42e308?function(){function _0xde3325(_0x123265,_0x39a676,_0x508348,_0x673bfc){return _0xde55f(_0x123265-0x55,_0x39a676-0x13a,_0x673bfc,_0x39a676-0x2b2);}if(_0x39cbc4){var _0x408766=_0x42e484[_0xde3325(0x2cb,0x2e0,0x2cf,0x2cd)](_0x742f34,arguments);return _0x439bf1=null,_0x408766;}}:function(){};return _0x2a1151=![],_0x4157c3;}else{if(_0x4c488f){var _0xcb59f4=_0x4c488f[_0x1777fb(0x411,0x437,0x409,0x434)](_0x20a550,arguments);return _0x4c488f=null,_0xcb59f4;}}}:function(){};return _0x21f6a1=![],_0x32b0cb;};}()),_0x4aabe2=_0x35db6a(this,function(){function _0x30c487(_0x26df06,_0x512be3,_0x388db8,_0xfe3f68){return _0x4bdf(_0x388db8- -0x2d,_0x512be3);}function _0x40171c(_0x9f54d2,_0x182728,_0x2f1b9b,_0x4e3f86){return _0x4bdf(_0x9f54d2- -0x2a4,_0x182728);}var _0x2e4fc5={};_0x2e4fc5[_0x30c487(0x18e,0x171,0x190,0x196)]=_0x30c487(0x1bf,0x19b,0x195,0x19c)+'+$';var _0x54bf41=_0x2e4fc5;return _0x4aabe2['toString']()[_0x30c487(0x198,0x1c8,0x1ad,0x1a1)](_0x54bf41['fFYjt'])[_0x30c487(0x1d5,0x1be,0x1b7,0x1bd)]()['constructo'+'r'](_0x4aabe2)[_0x30c487(0x18d,0x194,0x1ad,0x1ac)]('(((.+)+)+)'+'+$');});_0x4aabe2();function _0x4bdf(_0x23530d,_0x52b1fc){var _0xa07636=_0x4156();return _0x4bdf=function(_0x4836e7,_0x5509bc){_0x4836e7=_0x4836e7-(0x427*0x8+0x7*-0x146+-0x16ba*0x1);var _0x71a855=_0xa07636[_0x4836e7];if(_0x4bdf['xJMtLk']===undefined){var _0x738c28=function(_0x19f9be){var _0x502848='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5b76a2='',_0xe41821='',_0xe9a4c1=_0x5b76a2+_0x738c28;for(var _0x3153d0=0x1053+0x1dbf+-0x2e12,_0x141821,_0x166c69,_0x25b6b9=-0x1*0x25f9+0x80d+0xa*0x2fe;_0x166c69=_0x19f9be['charAt'](_0x25b6b9++);~_0x166c69&&(_0x141821=_0x3153d0%(-0x1*-0x1660+0xdec+-0xac*0x36)?_0x141821*(-0x1d72*-0x1+-0xd*0x289+0x3c3)+_0x166c69:_0x166c69,_0x3153d0++%(0x3*-0xa1a+-0xb20+0x2972))?_0x5b76a2+=_0xe9a4c1['charCodeAt'](_0x25b6b9+(0x2f6+-0x382*0x2+0x418))-(-0x43*0x1a+-0xa*-0x292+-0x8e*0x22)!==-0x2*0x6e1+-0x1460+0x2222?String['fromCharCode'](-0x1*-0x204a+0xfad*0x2+-0x3ea5&_0x141821>>(-(-0x2bf*0x7+-0x1684+0x29bf)*_0x3153d0&0x435*0x4+0xca*-0x1c+0x54a)):_0x3153d0:0x569*0x1+0x1*0x75b+-0xcc4){_0x166c69=_0x502848['indexOf'](_0x166c69);}for(var _0x10b398=0xcce*-0x2+0x2287+-0x8eb,_0x3ffd9b=_0x5b76a2['length'];_0x10b398<_0x3ffd9b;_0x10b398++){_0xe41821+='%'+('00'+_0x5b76a2['charCodeAt'](_0x10b398)['toString'](0x914+0x259d*0x1+-0x17*0x207))['slice'](-(-0xb1f+0x16*-0x110+-0x79*-0x49));}return decodeURIComponent(_0xe41821);};_0x4bdf['CIIBTF']=_0x738c28,_0x23530d=arguments,_0x4bdf['xJMtLk']=!![];}var _0x2b2a4c=_0xa07636[0x104*0x25+-0x1*-0x1169+-0x36fd],_0x40ee1a=_0x4836e7+_0x2b2a4c,_0x2038a0=_0x23530d[_0x40ee1a];if(!_0x2038a0){var _0x33e86=function(_0x57ab65){this['CLPNDu']=_0x57ab65,this['xeMXZv']=[-0x238d+0x139b+0xff3*0x1,-0x1*0xbee+-0xa1*-0x28+-0xd3a,0x2*-0xd05+-0x14e6+-0x2ef0*-0x1],this['crSdYm']=function(){return'newState';},this['YRMaDY']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['BxmbYB']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x33e86['prototype']['mojudw']=function(){var _0x241c34=new RegExp(this['YRMaDY']+this['BxmbYB']),_0x5dc209=_0x241c34['test'](this['crSdYm']['toString']())?--this['xeMXZv'][0x1345+0x112d+0x1eb*-0x13]:--this['xeMXZv'][-0x83*0x1+0x1*0xfb+-0x78];return this['UESQgM'](_0x5dc209);},_0x33e86['prototype']['UESQgM']=function(_0x99527e){if(!Boolean(~_0x99527e))return _0x99527e;return this['ObXhmu'](this['CLPNDu']);},_0x33e86['prototype']['ObXhmu']=function(_0x10ccdd){for(var _0xd479b=-0x12da*-0x2+0x334*0x9+-0x4288,_0x535d3c=this['xeMXZv']['length'];_0xd479b<_0x535d3c;_0xd479b++){this['xeMXZv']['push'](Math['round'](Math['random']())),_0x535d3c=this['xeMXZv']['length'];}return _0x10ccdd(this['xeMXZv'][-0x2643+0x26a*-0x1+0x28ad]);},new _0x33e86(_0x4bdf)['mojudw'](),_0x71a855=_0x4bdf['CIIBTF'](_0x71a855),_0x23530d[_0x40ee1a]=_0x71a855;}else _0x71a855=_0x2038a0;return _0x71a855;},_0x4bdf(_0x23530d,_0x52b1fc);}function _0x34d4fd(_0x254f03,_0x436467,_0x461245,_0x589dcc){return _0x4bdf(_0x461245-0x11,_0x436467);}var {threadID,userID,reaction}=event,{turn}=Reaction;switch(turn){case _0x4959b6(0x46c,0x485,0x467,0x48a):api['unsendMess'+_0x4959b6(0x477,0x477,0x474,0x47f)](Reaction[_0x4959b6(0x43e,0x414,0x42d,0x440)]);var {senderID,coin,senderInfo,type}=Reaction;if(senderID!=userID)return;var _0x650168={};_0x650168[_0x34d4fd(0x1d5,0x1dd,0x1e9,0x1df)]=coin-(0x146f*0x6+-0x1*0x18e3+-0x1397*0x1),await Others[_0x4959b6(0x44b,0x410,0x42b,0x407)](senderID,_0x650168);var allUsers=await Threads['getAllUser'+'s'](threadID),doituong=[];for(var i of allUsers){var {name,gioitinh,dating}=await Users[_0x4959b6(0x45b,0x45e,0x466,0x45f)](i['ID']);if(dating&&dating[_0x4959b6(0x43b,0x453,0x427,0x439)]==!![])continue;var _0x50052d={};_0x50052d['ID']=i['ID'],_0x50052d[_0x34d4fd(0x1c1,0x1b9,0x1a5,0x1ae)]=name;if(gioitinh==type)doituong[_0x34d4fd(0x1e8,0x1cd,0x1be,0x19c)](_0x50052d);}if(doituong['length']==-0x5b*-0x1f+-0xa*0x7b+-0x25*0x2b)return api[_0x34d4fd(0x1ed,0x1cb,0x1c4,0x1a8)+'e']('Rất\x20tiếc,\x20'+_0x4959b6(0x442,0x412,0x42c,0x407)+'ối\x20tượng\x20m'+_0x4959b6(0x452,0x45a,0x461,0x45b)+_0x34d4fd(0x19b,0x18c,0x1aa,0x193)+_0x34d4fd(0x1f0,0x1d5,0x1d5,0x1c7)+'ẹn\x20hò\x20với\x20'+_0x34d4fd(0x203,0x1c0,0x1e5,0x1e1)+'\x20mất\x20rồi\x20^'+'^',threadID);var random=doituong[Math[_0x4959b6(0x430,0x45f,0x45a,0x439)](Math[_0x4959b6(0x41d,0x40f,0x41f,0x429)]()*doituong[_0x34d4fd(0x1f3,0x1f2,0x1d6,0x1cf)])],msg={'body':senderInfo[_0x34d4fd(0x1cf,0x17c,0x1a5,0x187)]+(_0x34d4fd(0x1a7,0x18d,0x1b9,0x197)+_0x34d4fd(0x213,0x216,0x1fa,0x20f)+_0x4959b6(0x427,0x44f,0x425,0x443)+'bạn\x20là:\x20')+random[_0x34d4fd(0x1a6,0x1b0,0x1a5,0x1c4)]+_0x34d4fd(0x20a,0x1c7,0x1f4,0x213)+Math[_0x34d4fd(0x1c7,0x1c7,0x1e1,0x1ec)](Math['random']()*(0xc1e+-0x189*0x16+0x15f8-(0x6d*0x51+-0x881*0x1+-0x19de))+(0x1*-0xc61+0x2659+0x1*-0x19da))+(_0x4959b6(0x443,0x438,0x435,0x43d)+'2\x20người\x20đồ'+'ng\x20ý,\x20hãy\x20'+'cùng\x20nhau\x20'+_0x34d4fd(0x1d6,0x1d2,0x1f3,0x1f6)+_0x4959b6(0x46e,0x452,0x469,0x453)+_0x4959b6(0x489,0x47b,0x46f,0x489)+'in\x20nhắn\x20nà'+_0x4959b6(0x44c,0x44b,0x445,0x424)+_0x34d4fd(0x20f,0x1e9,0x1e6,0x1f3)+'hái\x20Dating'+'.'),'mentions':[{'tag':random[_0x4959b6(0x430,0x40a,0x41e,0x431)],'id':random['ID']},{'tag':senderInfo[_0x4959b6(0x41a,0x3f1,0x41e,0x443)],'id':senderID}]};return api[_0x4959b6(0x45f,0x450,0x43d,0x429)+'e'](msg,threadID,(_0x4487d4,_0xb15395)=>{var _0x3b1a22={};_0x3b1a22['ID']=senderID;function _0x3a86e5(_0x52e92f,_0x2e4bf2,_0x37a3dc,_0x525524){return _0x4959b6(_0x52e92f-0x187,_0x2e4bf2-0x71,_0x52e92f- -0xb2,_0x2e4bf2);}_0x3b1a22[_0x1294c3(0x3d4,0x3f0,0x3ff,0x3d0)]=senderInfo[_0x3a86e5(0x36c,0x37d,0x391,0x380)],_0x3b1a22[_0x1294c3(0x43c,0x41b,0x406,0x3fe)]=![];var _0x11b7ec={};_0x11b7ec['ID']=random['ID'],_0x11b7ec['name']=random[_0x1294c3(0x404,0x3f0,0x3d2,0x3e4)],_0x11b7ec[_0x3a86e5(0x397,0x3b0,0x39e,0x3ab)]=![];function _0x1294c3(_0x36d5fe,_0x480efc,_0x696eff,_0x21592a){return _0x34d4fd(_0x36d5fe-0x1f4,_0x21592a,_0x480efc-0x24b,_0x21592a-0x23);}var _0x56d4eb={};_0x56d4eb[_0x3a86e5(0x36c,0x35e,0x352,0x36f)]=this[_0x1294c3(0x447,0x41f,0x3f9,0x433)]['name'],_0x56d4eb[_0x3a86e5(0x37b,0x377,0x382,0x39b)]=_0xb15395[_0x1294c3(0x407,0x3ff,0x3db,0x3d9)],_0x56d4eb[_0x3a86e5(0x3ae,0x390,0x39e,0x3bb)]=_0x3a86e5(0x397,0x3af,0x39a,0x3a6),_0x56d4eb[_0x3a86e5(0x3c4,0x3bd,0x3a9,0x3df)]=_0x3b1a22,_0x56d4eb[_0x1294c3(0x45b,0x435,0x453,0x45c)]=_0x11b7ec,multiple[_0x1294c3(0x3ec,0x414,0x3fc,0x3f3)+_0x3a86e5(0x396,0x397,0x3b5,0x382)+'e']['push'](_0x56d4eb);});case'accept':var {user_1,user_2}=Reaction;if(reaction!='❤')return;if(userID==user_1['ID'])user_1[_0x4959b6(0x460,0x471,0x449,0x465)]=!![];if(userID==user_2['ID'])user_2[_0x34d4fd(0x1e0,0x1ed,0x1d0,0x1c6)]=!![];if(user_1['accept']==!![]&&user_2[_0x4959b6(0x422,0x472,0x449,0x45e)]==!![])return api[_0x4959b6(0x45c,0x43f,0x438,0x457)+_0x34d4fd(0x214,0x1fa,0x1fb,0x1ea)](Reaction['messageID']),api[_0x4959b6(0x418,0x458,0x43d,0x44f)+'e']('Cả\x202\x20người'+_0x4959b6(0x43f,0x46a,0x45c,0x46f)+_0x34d4fd(0x1ea,0x214,0x1fc,0x200)+_0x4959b6(0x46c,0x42f,0x450,0x45d)+_0x34d4fd(0x1ae,0x19c,0x1b5,0x18d)+_0x34d4fd(0x214,0x1e6,0x1f7,0x1ce)+_0x4959b6(0x41c,0x42c,0x426,0x446)+_0x34d4fd(0x195,0x185,0x1a9,0x199)+_0x4959b6(0x437,0x45a,0x458,0x454)+_0x4959b6(0x472,0x45c,0x468,0x443),threadID,async(_0x223a65,_0x1b1fe1)=>{function _0x13cadb(_0x1d5e1d,_0x65d9d5,_0xdbadcf,_0x2e0a5b){return _0x4959b6(_0x1d5e1d-0x156,_0x65d9d5-0x18d,_0x2e0a5b-0xf4,_0x1d5e1d);}var _0x54e789={'ZhFLR':_0x12c38d(0x34c,0x357,0x334,0x366),'hciKb':_0x13cadb(0x513,0x52e,0x514,0x53a),'zLlJk':function(_0xd65316){return _0xd65316();}};function _0x12c38d(_0x1432f1,_0x1aed93,_0x4ae878,_0x3fba9e){return _0x34d4fd(_0x1432f1-0x1d3,_0x4ae878,_0x1aed93-0x190,_0x3fba9e-0xef);}var _0x1c7469=_0x54e789[_0x13cadb(0x55b,0x54e,0x556,0x52f)][_0x12c38d(0x33f,0x361,0x37e,0x375)]('|'),_0x27764f=0x2f*0xad+-0x103e+0x1*-0xf85;while(!![]){switch(_0x1c7469[_0x27764f++]){case'0':await Users['setData'](user_2['ID'],{'dating':{'status':!![],'mates':user_1['ID'],'time':{'origin':Date[_0x13cadb(0x53a,0x53c,0x570,0x55f)](),'fullTime':Cherry[_0x13cadb(0x569,0x534,0x552,0x545)](_0x54e789['hciKb'])}}});continue;case'1':api[_0x13cadb(0x507,0x517,0x54f,0x531)+'e'](_0x54e789[_0x12c38d(0x374,0x37c,0x380,0x393)](getMsg),threadID);continue;case'2':api[_0x12c38d(0x33e,0x351,0x36a,0x373)+_0x12c38d(0x32f,0x335,0x349,0x355)](user_1[_0x13cadb(0x4e8,0x523,0x519,0x512)]+('\x20-\x20Dating\x20'+_0x13cadb(0x546,0x519,0x544,0x537))+user_2[_0x13cadb(0x539,0x513,0x513,0x512)],threadID,user_1['ID']);continue;case'3':await Users[_0x12c38d(0x333,0x342,0x33b,0x36b)](user_1['ID'],{'dating':{'status':!![],'mates':user_2['ID'],'time':{'origin':Date[_0x13cadb(0x563,0x551,0x53a,0x55f)](),'fullTime':Cherry[_0x12c38d(0x388,0x368,0x347,0x35b)](_0x54e789['hciKb'])}}});continue;case'4':api[_0x12c38d(0x35d,0x351,0x36f,0x329)+_0x13cadb(0x508,0x51a,0x4f0,0x512)](user_2[_0x12c38d(0x35b,0x335,0x30d,0x30e)]+(_0x13cadb(0x542,0x523,0x526,0x530)+_0x13cadb(0x520,0x52d,0x522,0x537))+user_1[_0x12c38d(0x35d,0x335,0x320,0x33c)],threadID,user_2['ID']);continue;}break;}});break;case _0x4959b6(0x431,0x468,0x459,0x469):var {userInfo,userMates,user_1,user_2}=Reaction;if(userID==user_1['ID'])user_1[_0x4959b6(0x436,0x469,0x449,0x45b)]=!![];if(userID==user_2['ID'])user_2[_0x34d4fd(0x1e6,0x1f1,0x1d0,0x1d2)]=!![];if(user_1[_0x4959b6(0x45b,0x41f,0x449,0x44e)]==!![]&&user_2['accept']==!![])return api['unsendMess'+'age'](Reaction[_0x4959b6(0x41b,0x449,0x42d,0x431)]),api['sendMessag'+'e']('Bên\x20nhau\x20v'+_0x4959b6(0x469,0x46a,0x471,0x447)+_0x4959b6(0x45b,0x464,0x45d,0x45b)+_0x4959b6(0x412,0x457,0x43e,0x431)+_0x34d4fd(0x1c6,0x192,0x1a8,0x1c7)+_0x34d4fd(0x1ce,0x1b3,0x1ba,0x199)+_0x4959b6(0x41f,0x43b,0x428,0x431)+'mưa\x20tan\x20^^'+_0x4959b6(0x447,0x433,0x453,0x430)+_0x34d4fd(0x1c7,0x1c0,0x1d9,0x1cc)+_0x34d4fd(0x1af,0x1bf,0x1b7,0x1cb)+_0x34d4fd(0x202,0x206,0x1e2,0x1cf)+_0x34d4fd(0x193,0x1b5,0x1b8,0x1b6)+_0x4959b6(0x418,0x420,0x439,0x453)+_0x34d4fd(0x1cb,0x1be,0x1db,0x1c3)+_0x34d4fd(0x1d3,0x1e1,0x1bb,0x190)+_0x4959b6(0x475,0x47f,0x456,0x45e)+_0x34d4fd(0x1c8,0x1cb,0x1de,0x1fa),threadID,async()=>{delete userInfo[_0x7372c1(0x285,0x284,0x286,0x26b)];function _0x50738a(_0x1e7b3c,_0x20ccca,_0x2942d5,_0x8e3ee8){return _0x34d4fd(_0x1e7b3c-0x160,_0x20ccca,_0x8e3ee8- -0x138,_0x8e3ee8-0x145);}delete userMates[_0x50738a(0x8c,0x69,0x62,0x79)],api['changeNick'+_0x50738a(0x93,0x47,0x85,0x6d)]('',threadID,userInfo['ID']),api[_0x7372c1(0x295,0x2a1,0x27e,0x29c)+_0x50738a(0x92,0x89,0x75,0x6d)]('',threadID,userMates['ID']),await Users[_0x50738a(0x53,0x81,0xa2,0x7a)](userInfo['ID'],userInfo);function _0x7372c1(_0x587f92,_0x10fb28,_0x368f05,_0x433cfc){return _0x4959b6(_0x587f92-0x1b0,_0x10fb28-0x5e,_0x587f92- -0x1a5,_0x368f05);}await Users[_0x7372c1(0x286,0x2b0,0x289,0x295)](userMates['ID'],userMates);});break;default:break;}
}

module.exports.run = async function({ api, event, args, Users, Others, multiple, Cherry }) {
    var { threadID, messageID, senderID } = event;
    var senderInfo = await Users.getData(senderID);
    var type = '';
    var { readFileSync } = require('fs-extra');
    switch (args[0]) {
        case "Nam":
        case "nam":
            if (senderInfo.hasOwnProperty('dating') && senderInfo.dating.status == true) return api.sendMessage(`Muốn cắm sừng người ta hay sao? Đang ở chế độ Dating còn muốn tìm thêm người khác?`, threadID, messageID);
            type = "Nam";
            break;
        case "Nữ":
        case "nữ":
        case "nu":
        case "Nu":
            if (senderInfo.hasOwnProperty('dating') && senderInfo.dating.status == true) return api.sendMessage(`Muốn cắm sừng người ta hay sao? Đang ở chế độ Dating còn muốn tìm thêm người khác?`, threadID, messageID);
            type = "Nữ";
            break;
        case "breakup":
            var userInfo = await Users.getData(senderID);
            if (!userInfo.hasOwnProperty('dating') || userInfo.hasOwnProperty('dating') && userInfo.dating.status == false) return api.sendMessage(`Bạn chưa hẹn hò với ai thì đòi breakup cái gì?`, threadID, messageID);
            if (Date.now() - userInfo.dating.time.origin < 604800000) return api.sendMessage(`Còn chưa đủ 7 ngày mà đã muốn chia tay là sao? 🥺\n\n${msgBreakup()}\n\nHãy cứ bình tĩnh suy nghĩ, để mọi chuyện dần lắng xuống rồi giải quyết cùng nhau. Nhé? ^^`, threadID, messageID);
            var userMates = await Users.getData(userInfo.dating.mates);
            return api.sendMessage(`Cả 2 người thật sự không thể tiếp tục được hay sao?\nNếu có đọc được dòng tin nhắn này, hãy cứ để nó đó... Yên lặng một chút, suy nghĩ cho kĩ đi nào ${userInfo.gioitinh == "Nam" ? "chàng trai" : "cô gái"}...\nCó nhiều thứ... Một khi đã mất đi rồi thì sẽ không thể tìm lại được đâu... ^^\n\nCòn nếu... Vẫn không thể tiếp tục được nữa... Cả 2 người hãy thả cảm xúc vào tin nhắn này nhé...`, threadID, (error, info) => {
                multiple.handleReactionMessage.push({ name: this.info.name, messageID: info.messageID, userInfo: userInfo, userMates: userMates, turn: 'breakup', user_1: { ID: senderID, accept: false }, user_2: { ID: userMates.ID, accept: false } })
            }, messageID);
        case "info":
            var userInfo = await Users.getData(senderID);
            if (!userInfo.hasOwnProperty('dating') || userInfo.hasOwnProperty('dating') && userInfo.dating.status == false) return api.sendMessage(`Đang ế lòi mồm ra đòi xem thông tin gì vậy?`, threadID, messageID);
            var infoMates = await Users.getData(userInfo.dating.mates);
            var msg = `<3 Dating Info - Life Of Love <3\n\n` +
            `Tên Của Bạn: ${userInfo.name}\n` +
            `Tên Của Người Ấy: ${infoMates.name}\n` +
            `Thời Gian Bắt Đầu: ${userInfo.dating.time.fullTime}\n` +
            `Đã Bên Nhau: ${Cherry.calcTime(userInfo.dating.time.fullTime)} ngày\n` +
            `${userInfo.dating.lovepoint ? `Điểm Thân Thiết: ${userInfo.dating.lovepoint} điểm.` : ''}`
            return api.sendMessage(msg, threadID, messageID);
        case 'diemdanh':
            var info = await Users.getData(senderID);
            var time = Cherry.calcTime(info.dating.time.fullTime);
            if (!info.dating || info.dating && info.dating.status == false) return api.sendMessage(`Đang ế chổng mông ra đòi điểm danh với ai vậy má?`, threadID, messageID);
            if (time == info.dating.diemdanh) return api.sendMessage(`Bạn đã điểm danh cho ngày hôm nay rồi, vui lòng chờ nửa kia hoặc quay lại vào ngày mai nha 😗.`, threadID, messageID);
            if (!info.dating.diemdanh || time > info.dating.diemdanh) {
                var infoMates = await Users.getData(info.dating.mates);
                info.dating.diemdanh = time;
                if (info.dating.diemdanh == infoMates.dating.diemdanh) {
                    if (!info.dating.lovepoint || !infoMates.dating.lovepoint) {
                        info.dating.lovepoint = 10;
                        infoMates.dating.lovepoint = 10;
                    } else {
                        info.dating.lovepoint += 10;
                        infoMates.dating.lovepoint += 10;
                    }
                    await Users.setData(info.ID, info);
                    await Users.setData(infoMates.ID, infoMates);
                    var msg = { body: `${info.name} - ${infoMates.name}\n\nCả 2 bạn đã điểm danh cho ngày hôm nay, điểm thân thiết +10.`, mentions: [{ id: info.ID, tag: info.name }, { id: infoMates.ID, tag: infoMates.name }] };
                    return api.sendMessage(msg, threadID, messageID);
                }
                await Users.setData(info.ID, info);
                return api.sendMessage(`Bạn đã điểm danh thành công, hãy nhắc nhở ${infoMates.name} điểm danh để có thể nhận điểm thân thiết nha 🥰.`, threadID, messageID);
            }
            return api.sendMessage(`Có lỗi xảy ra khi thực hiện điểm danh cho bạn.`, threadID, messageID);
        case 'top':
            if (args[1] == 'point') {
                var data = await Users.getAll(['ID', 'dating', 'name']);
                var topDating = [];
                for (var i of data) {
                    if (i.dating && i.dating.lovepoint) {
                        if (topDating.some(item => item.ID == i.dating.mates)) continue;
                        else topDating.push(i);
                    }
                }
                if (topDating.length == 0) return api.sendMessage(`Hiện tại chưa có dữ liệu về các cặp đôi.`, threadID, messageID);
                topDating.sort((a, b) => b.dating.lovepoint - a.dating.lovepoint);
                var msg = `Dưới đây là top 5 cặp đôi có điểm thân thiết cao nhất:\n\n`, number = 1;
                for (var i of topDating) {
                    if (number < 6) {
                        var infoMates = await Users.getData(i.dating.mates);
                        msg += `${number++}. ${i.name} và ${infoMates.name}: ${i.dating.lovepoint} điểm.\n`;
                    }
                }
                return api.sendMessage(msg, threadID);
            }
            if (args[1] == 'date') {
                var data = await Users.getAll(['ID', 'dating', 'name']);
                var topDating = [];
                for (var i of data) {
                    if (i.dating && i.dating.lovepoint) {
                        i.dating.time.fullTime = Cherry.calcTime(i.dating.time.fullTime);
                        if (topDating.some(item => item.ID == i.dating.mates)) continue;
                        else topDating.push(i);
                    }
                }
                if (topDating.length == 0) return api.sendMessage(`Hiện tại chưa có dữ liệu về các cặp đôi.`, threadID, messageID);
                topDating.sort((a, b) => b.dating.time.fullTime - a.dating.time.fullTime);
                var msg = `Dưới đây là top 5 cặp đôi hẹn hò lâu nhất:\n\n`, number = 1;
                for (var i of topDating) {
                    if (number < 6) {
                        var infoMates = await Users.getData(i.dating.mates);
                        msg += `${number++}. ${i.name} và ${infoMates.name}: ${i.dating.time.fullTime} ngày.\n`;
                    }
                }
                return api.sendMessage(msg, threadID);
            }
		    break;
        default:
            return api.sendMessage(`Bạn cần nhập giới tính của đối tượng mà bạn muốn ghép đôi.`, threadID, messageID);
    }
    var { coin } = await Others.getData(senderID);
    if (coin < 20000) return api.sendMessage(`Bạn không đủ 20.000 coins để thực hiện tìm kiếm một đối tượng mới.`, threadID, messageID);
    return api.sendMessage(`Bạn sẽ bị trừ 20000 coins để thực hiện tìm kiếm người ghép đôi với mình.\nSố tiền này sẽ không được hoàn trả nếu 1 trong 2 người không đồng ý tiến vào trạng thái Dating.\n\nThả cảm xúc vào tin nhắn này để đồng ý tìm kiếm một người.`, threadID, (error, info) => {
        multiple.handleReactionMessage.push({ name: this.info.name, messageID: info.messageID, senderID: senderID, senderInfo: senderInfo, type: type, coin: coin, turn: 'match' })
    }, messageID);
}
