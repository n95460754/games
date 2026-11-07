// ================= ДВИГАТЕЛ НА БЛОКОВАТА АРКАДА =================
// Общ код за всички мини-игри: канава, клавиатура, мишка, плъзгане с пръст,
// звук, рекорди и екран "Край на играта". Всяка игра е отделен .html файл,
// който зарежда този файл и извиква A.add({...}).
const A={games:[],W:480,H:360,keys:{},mouse:{x:0,y:0,down:false},def:null,g:null,state:'menu'};
A.add=d=>{A.games.push(d);};
A.C={grass:'#5aa13a',dirt:'#7a5233',stone:'#7d7d7d',wood:'#9a6a3a',gold:'#ffd23f',gem:'#4de8f5',ruby:'#ff2e55',lava:'#ff6a00',
  water:'#3b7bd6',leaf:'#3f8a24',sand:'#e0c068',snow:'#eef4ff',coal:'#2a2a2a',purple:'#8e24aa',sky:'#6fb3e8',iron:'#d8a07a',red:'#d84a3a',white:'#e8e8e8'};
const C=A.C;
A.rnd=(a,b)=>a+Math.random()*(b-a);
A.ri=(a,b)=>Math.floor(a+Math.random()*(b-a+1));
A.pick=a=>a[Math.floor(Math.random()*a.length)];
A.clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
A.shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
A.hit=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
const cv=document.getElementById('cv'),c=cv.getContext('2d');
A.c=c;
// блок с пикселна сянка
A.block=(x,y,s,col,h)=>{
  c.fillStyle=col;c.fillRect(x,y,s,h||s);const H=h||s,e=Math.max(1,Math.round(s/8));
  c.fillStyle='rgba(255,255,255,.22)';c.fillRect(x,y,s,e);c.fillRect(x,y,e,H);
  c.fillStyle='rgba(0,0,0,.28)';c.fillRect(x,y+H-e,s,e);c.fillRect(x+s-e,y,e,H);
};
A.txt=(s,x,y,size,col,al)=>{c.font='bold '+(size||16)+'px Consolas,monospace';c.textAlign=al||'left';c.textBaseline='middle';
  c.fillStyle='#000';c.fillText(s,x+2,y+2);c.fillStyle=col||'#fff';c.fillText(s,x,y);};
A.bg=col=>{c.fillStyle=col;c.fillRect(0,0,A.W,A.H);};
let ac=null;
A.beep=(f,d,type,vol)=>{try{if(!ac)ac=new (window.AudioContext||window.webkitAudioContext)();
  const o=ac.createOscillator(),g=ac.createGain();o.type=type||'square';o.frequency.value=f;
  g.gain.setValueAtTime(vol||0.04,ac.currentTime);g.gain.exponentialRampToValueAtTime(0.0001,ac.currentTime+(d||.08));
  o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+(d||.08));}catch(e){}};
A.tune=fs=>fs.forEach((f,i)=>setTimeout(()=>A.beep(f,.12,'triangle'),i*100));
function load(k,d){try{const v=localStorage.getItem(k);return v===null?d:JSON.parse(v);}catch(e){return d;}}
function save(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
A.best=d=>load('arc_'+d.id,null);
A.fmt=(d,v)=>v===null||v===undefined?'-':(d.unit?(+v).toFixed(d.dec||0)+d.unit:Math.floor(v));

// край на играта
A.over=(g,msg)=>{
  if(A.state!=='play')return;
  A.state='over';A.overMsg=msg||'Край на играта!';A.overAt=performance.now();
  const d=A.def,b=A.best(d),s=g.score;
  A.newBest=false;
  if(!d.noScore&&s!==undefined&&s>0&&(d.low?(b===null||s<b):(b===null||s>b))){save('arc_'+d.id,s);A.newBest=true;}
  A.beep(A.newBest?880:220,.25,'triangle',.06);
  updTop();
};

// помощници за игрите с въвеждане на число (Ум и математика)
function typeNum(g,k,ch){
  if(ch>='0'&&ch<='9'&&g.inp.length<6){g.inp+=ch;A.beep(700,.02);}
  else if(k==='Backspace')g.inp=g.inp.slice(0,-1);
  else if((k==='Minus'||k==='NumpadSubtract')&&!g.inp)g.inp='-';
  return k==='Enter'||k==='NumpadEnter'||k==='Space';
}
function inputBox(g,y){c.fillStyle='#000';c.fillRect(170,y-22,140,44);c.strokeStyle='#ffd54f';c.lineWidth=3;c.strokeRect(170,y-22,140,44);
  A.txt(g.inp+(Math.sin(g.t*8)>0?'_':''),240,y,26,'#fff','center');}
function flash(g,ok){g.fl={ok,t:.35};A.beep(ok?880:150,ok?.08:.2,ok?'triangle':'sawtooth');}
function drawFlash(g){if(g.fl&&g.fl.t>0){c.fillStyle=g.fl.ok?'rgba(80,200,80,.25)':'rgba(220,60,60,.3)';c.fillRect(0,0,480,360);}}
function tick(g,dt){if(g.fl)g.fl.t-=dt;g.time-=dt;if(g.time<=0)A.over(g,'Времето изтече!');}

// шаблони за игри с въпроси (числов отговор или избор от 4)
function numGame(o){return Object.assign({
  start(g){g.time=o.time||60;g.inp='';g.lives=3;this.next(g);},
  key(g,k,ch){if(typeNum(g,k,ch)&&g.inp){const ok=+g.inp===g.ans;flash(g,ok);if(ok)g.score++;else{g.why=g.q.replace('?',g.ans);if(o.lives){g.lives--;if(!g.lives)return A.over(g,g.why);}}g.inp='';this.next(g);}},
  update(g,dt){if(o.lives){if(g.fl)g.fl.t-=dt;}else tick(g,dt);},
  draw(g){A.bg(o.bg||'#1d2b3a');if(this.pic)this.pic(g);A.txt(g.q,240,this.pic?60:120,this.pic?26:34,'#fff','center');inputBox(g,this.pic?310:220);
    A.txt(o.lives?'❤'.repeat(g.lives):'⏱ '+Math.ceil(g.time),10,14,14,o.lives?'#f55':'#fff');if(g.why)A.txt(g.why,470,14,12,'#bbb','right');drawFlash(g);}
},o);}
// общ шаблон: избор от 4 отговора
function choiceGame(o){return Object.assign({
  start(g){g.time=o.time||60;this.next(g);},
  pick2(g,i){const ok=g.opts[i]===g.ans;flash(g,ok);if(ok)g.score++;else g.why='Беше '+g.ans;this.next(g);},
  key(g,k,ch){const n=+ch;if(n>=1&&n<=4)this.pick2(g,n-1);},
  click(g,mx,my){if(my>250&&my<350){const i=Math.floor(mx/120);if(i>=0&&i<4)this.pick2(g,i);}},
  update(g,dt){tick(g,dt);},
  draw(g){A.bg(o.bg||'#1d2b3a');this.pic(g);g.opts.forEach((v,i)=>{A.block(i*120+8,262,104,'#5a6b8c',60);const t=(i+1)+') '+v;A.txt(t,i*120+60,292,t.length>13?11:t.length>9?14:17,'#fff','center');});
    A.txt('⏱ '+Math.ceil(g.time),10,14,14);if(g.why)A.txt(g.why,470,14,12,'#bbb','right');drawFlash(g);}
},o);}
// тест с 4 широки отговора: o.Q = [[въпрос, верен, грешен, грешен, грешен], ...]
function quizGame(o){return Object.assign({
  start(g){g.time=o.time||90;g.deck=A.shuffle(o.Q.map((q,i)=>i));this.next(g);},
  next(g){if(!g.deck.length)g.deck=A.shuffle(o.Q.map((q,i)=>i));const q=o.Q[g.deck.pop()];g.q=q[0];g.ans=q[1];g.opts=A.shuffle(q.slice(1,5));},
  pick2(g,i){if(g.opts[i]===undefined)return;const ok=g.opts[i]===g.ans;flash(g,ok);if(ok)g.score++;else g.why='Беше: '+g.ans;this.next(g);},
  key(g,k,ch){const n=+ch;if(n>=1&&n<=4)this.pick2(g,n-1);},
  click(g,mx,my){if(my>170&&my<330){const i=(mx<240?0:1)+(my>250?2:0);this.pick2(g,i);}},
  update(g,dt){tick(g,dt);},
  draw(g){A.bg(o.bg||'#1d2b3a');if(this.pic)this.pic(g);else{const w=g.q.length>26?18:24;A.txt(g.q,240,95,w,'#fff','center');}
    g.opts.forEach((v,i)=>{const x=(i%2)*236+8,y=175+(i>1?80:0);A.block(x,y,228,'#5a6b8c',70);A.txt((i+1)+') '+v,x+114,y+35,v.length>16?13:16,'#fff','center');});
    A.txt('⏱ '+Math.ceil(g.time),10,14,14);if(g.why)A.txt(g.why,470,14,12,'#bbb','right');drawFlash(g);}
},o);}
function opts4(ans,gen){const s=new Set([ans]);let n=0;while(s.size<4&&n++<200)s.add(gen());return A.shuffle([...s]);}


// ================= ИГРА =================
function updTop(){
  const d=A.def;if(!d)return;
  document.getElementById('gscore').textContent=d.noScore?'-':A.fmt(d,A.g.score);
  document.getElementById('gbest').textContent=d.noScore?'-':A.fmt(d,A.best(d));
}
A.play=d=>{
  A.def=d;A.g={score:0,t:0};A.keys={};A.state='play';
  document.title=d.name+' — Блокова аркада';
  document.getElementById('gname').textContent=d.icon+' '+d.name;
  document.getElementById('help').textContent=d.help;
  d.start(A.g);fit();updTop();
};
A.exit=()=>{location.href='../arcade.html';};
document.getElementById('exit').onclick=A.exit;
document.getElementById('restart').onclick=()=>A.play(A.def);
function fit(){const s=Math.min((innerWidth-16)/A.W,(innerHeight-110)/A.H);cv.style.width=Math.floor(A.W*s)+'px';cv.style.height=Math.floor(A.H*s)+'px';}
addEventListener('resize',fit);

// ---------- вход ----------
addEventListener('keydown',e=>{
  if(!A.def)return;
  if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault();
  if(e.code==='Escape'){A.exit();return;}
  if(A.state==='over'){if((e.code==='Space'||e.code==='Enter')&&performance.now()-A.overAt>400)A.play(A.def);return;}
  const first=!A.keys[e.code];A.keys[e.code]=true;
  if(A.def.key&&(first||A.def.repeat))A.def.key(A.g,e.code,e.key);
});
addEventListener('keyup',e=>{A.keys[e.code]=false;});
function pos(e){const r=cv.getBoundingClientRect();return [(e.clientX-r.left)/r.width*A.W,(e.clientY-r.top)/r.height*A.H];}
cv.addEventListener('contextmenu',e=>e.preventDefault());
cv.addEventListener('pointermove',e=>{[A.mouse.x,A.mouse.y]=pos(e);if(A.state==='play'&&A.def.move)A.def.move(A.g,A.mouse.x,A.mouse.y);});
let downAt=null;
cv.addEventListener('pointerdown',e=>{
  [A.mouse.x,A.mouse.y]=pos(e);A.mouse.down=true;downAt={x:e.clientX,y:e.clientY,touch:e.pointerType==='touch'};
  if(A.state==='over'){if(performance.now()-A.overAt>400)A.play(A.def);downAt=null;return;}
  if(A.state!=='play')return;
  if(A.def.click)A.def.click(A.g,A.mouse.x,A.mouse.y,e.button);
  else if(A.def.key&&e.pointerType!=='touch')A.def.key(A.g,'Space',' ');
});
addEventListener('pointerup',e=>{
  A.mouse.down=false;
  if(A.state==='play'&&A.def&&A.def.release)A.def.release(A.g,A.mouse.x,A.mouse.y);
  if(!downAt||A.state!=='play')return;
  const dx=e.clientX-downAt.x,dy=e.clientY-downAt.y,touch=downAt.touch;downAt=null;
  if(!touch||A.def.click)return;
  // плъзгане с пръст = стрелка, докосване = Space
  let code='Space';
  if(Math.max(Math.abs(dx),Math.abs(dy))>25)code=Math.abs(dx)>Math.abs(dy)?(dx<0?'ArrowLeft':'ArrowRight'):(dy<0?'ArrowUp':'ArrowDown');
  if(A.def.key)A.def.key(A.g,code,code==='Space'?' ':'');
  A.keys[code]=true;setTimeout(()=>{A.keys[code]=false;},180);
});

// ---------- цикъл ----------
let last=performance.now(),topT=0;
function loop(now){
  requestAnimationFrame(loop);
  const dt=Math.min(.05,(now-last)/1000);last=now;
  if(!A.def)return;
  if(A.state==='play'){A.g.t+=dt;A.def.update&&A.def.update(A.g,dt);}
  c.save();A.def.draw(A.g,c);c.restore();
  if(A.state==='over'){
    c.fillStyle='rgba(0,0,0,.6)';c.fillRect(0,0,A.W,A.H);
    A.txt(A.overMsg,A.W/2,A.H/2-40,26,'#ffd54f','center');
    if(!A.def.noScore)A.txt('Резултат: '+A.fmt(A.def,A.g.score)+(A.newBest?'  🏆 НОВ РЕКОРД!':''),A.W/2,A.H/2,18,'#fff','center');
    A.txt('Space / клик = пак · Esc = всички игри',A.W/2,A.H/2+40,14,'#b9c6d6','center');
  }
  topT+=dt;if(topT>.1){topT=0;updTop();}
}
requestAnimationFrame(loop);
// играта в тази страница се стартира, след като е добавена с A.add
addEventListener('load',()=>{if(A.games.length&&!A.def)A.play(A.games[0]);});
