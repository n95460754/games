// ===== ⚡ ЕКШЪН ИГРИ =====
const C=A.C;

// 1. Блокова змия
A.add({id:'snake',cat:'action',icon:'🐍',name:'Блокова змия',desc:'Яж ябълки и расти',help:'Стрелки / WASD — посока. Златната ябълка дава 5 точки. Не удряй стена и себе си!',
  start(g){g.s=[[12,9],[11,9],[10,9]];g.d=[1,0];g.nd=[1,0];g.step=0;g.food=this.place(g);g.gold=null;},
  place(g){let p;do{p=[A.ri(0,23),A.ri(0,17)];}while(g.s.some(q=>q[0]===p[0]&&q[1]===p[1]));return p;},
  key(g,k){const m={ArrowUp:[0,-1],KeyW:[0,-1],ArrowDown:[0,1],KeyS:[0,1],ArrowLeft:[-1,0],KeyA:[-1,0],ArrowRight:[1,0],KeyD:[1,0]}[k];
    if(m&&!(m[0]===-g.d[0]&&m[1]===-g.d[1]))g.nd=m;},
  update(g,dt){
    g.step+=dt;const sp=Math.max(.055,.13-g.score*.002);if(g.step<sp)return;g.step=0;g.d=g.nd;
    const h=[g.s[0][0]+g.d[0],g.s[0][1]+g.d[1]];
    if(h[0]<0||h[1]<0||h[0]>23||h[1]>17||g.s.some(q=>q[0]===h[0]&&q[1]===h[1]))return A.over(g,'Блъсна се!');
    g.s.unshift(h);
    if(h[0]===g.food[0]&&h[1]===g.food[1]){g.score++;g.food=this.place(g);A.beep(660);if(Math.random()<.2)g.gold={p:this.place(g),t:6};}
    else if(g.gold&&h[0]===g.gold.p[0]&&h[1]===g.gold.p[1]){g.score+=5;g.gold=null;A.tune([880,1100]);g.s.push(g.s[g.s.length-1]);}
    else g.s.pop();
    if(g.gold){g.gold.t-=sp;if(g.gold.t<=0)g.gold=null;}
  },
  draw(g){A.bg('#3d7a2a');for(let x=0;x<24;x++)for(let y=0;y<18;y++)if((x+y)%2){c.fillStyle='#438530';c.fillRect(x*20,y*20,20,20);}
    A.block(g.food[0]*20+2,g.food[1]*20+2,16,C.red);c.fillStyle='#3f8a24';c.fillRect(g.food[0]*20+9,g.food[1]*20,3,4);
    if(g.gold)A.block(g.gold.p[0]*20+2,g.gold.p[1]*20+2,16,C.gold);
    g.s.forEach((p,i)=>A.block(p[0]*20,p[1]*20,20,i?(i%2?'#2e7dd1':'#3b8be0'):'#1f5fa8'));
    const h=g.s[0];c.fillStyle='#fff';c.fillRect(h[0]*20+5,h[1]*20+5,4,4);c.fillRect(h[0]*20+11,h[1]*20+5,4,4);}
});

// 2. Рудотрошач
A.add({id:'breaker',cat:'action',icon:'🧱',name:'Рудотрошач',desc:'Чупи рудите с топче',help:'Мишка или ← → — движи платформата. Space пуска топчето. Златото иска 3 удара, желязото 2.',
  start(g){g.lives=3;g.lv=1;this.level(g);},
  level(g){g.bricks=[];const types=[[C.stone,1],[C.iron,2],[C.gold,3]];
    for(let r=0;r<5+Math.min(3,g.lv-1);r++)for(let i=0;i<10;i++){const t=r<g.lv-1?types[2]:r<2?types[1]:types[0];if(Math.random()<.08)continue;g.bricks.push({x:i*46+10,y:30+r*20,w:44,h:18,col:t[0],hp:t[1]});}
    g.px=205;this.reset(g);},
  reset(g){g.stuck=true;g.bx=240;g.by=320;const s=220+g.lv*25;g.vx=s*.6;g.vy=-s*.8;},
  move(g,x){g.px=A.clamp(x-35,0,410);},
  key(g,k){if(k==='Space')g.stuck=false;},
  click(g){g.stuck=false;},
  update(g,dt){
    if(A.keys.ArrowLeft||A.keys.KeyA)g.px-=420*dt;if(A.keys.ArrowRight||A.keys.KeyD)g.px+=420*dt;g.px=A.clamp(g.px,0,410);
    if(g.stuck){g.bx=g.px+35;g.by=322;return;}
    g.bx+=g.vx*dt;g.by+=g.vy*dt;
    if(g.bx<5){g.bx=5;g.vx*=-1;}if(g.bx>475){g.bx=475;g.vx*=-1;}if(g.by<5){g.by=5;g.vy*=-1;}
    if(g.vy>0&&g.by>325&&g.by<340&&g.bx>g.px-4&&g.bx<g.px+74){const o=(g.bx-g.px-35)/35,s=Math.hypot(g.vx,g.vy)*1.01;g.vx=s*o*.85;g.vy=-Math.sqrt(s*s-g.vx*g.vx);A.beep(300);}
    if(g.by>370){g.lives--;A.beep(120,.3,'sawtooth');if(!g.lives)return A.over(g);this.reset(g);}
    for(const b of g.bricks){if(b.hp>0&&g.bx>b.x-4&&g.bx<b.x+b.w+4&&g.by>b.y-4&&g.by<b.y+b.h+4){
      const ox=Math.min(g.bx-b.x+4,b.x+b.w+4-g.bx),oy=Math.min(g.by-b.y+4,b.y+b.h+4-g.by);if(ox<oy)g.vx*=-1;else g.vy*=-1;
      b.hp--;g.score+=b.hp?1:5;A.beep(500+b.hp*200);break;}}
    if(g.bricks.every(b=>b.hp<=0)){g.lv++;A.tune([523,659,784]);this.level(g);}
  },
  draw(g){A.bg('#1d1a24');for(const b of g.bricks)if(b.hp>0){A.block(b.x,b.y,b.w,b.col,b.h);if(b.hp>1)A.txt(b.hp,b.x+22,b.y+9,12,'#000','center');}
    A.block(g.px,330,70,C.wood,10);c.fillStyle='#fff';c.fillRect(g.bx-5,g.by-5,10,10);
    A.txt('❤'.repeat(g.lives),8,350,14,'#f55');A.txt('Ниво '+g.lv,472,350,14,'#fff','right');
    if(g.stuck)A.txt('Space / клик за старт',240,250,16,'#ffd54f','center');}
});

// 3. Ловец на руди
A.add({id:'catcher',cat:'action',icon:'🛒',name:'Ловец на руди',desc:'Хващай рудите, не бомбите',help:'← → или мишка — движи количката. Хващай руди, избягвай бомбите 💣 (имаш 3 живота).',
  start(g){g.x=210;g.items=[];g.sp=0;g.lives=3;},
  move(g,x){g.x=A.clamp(x-30,0,420);},
  update(g,dt){
    if(A.keys.ArrowLeft||A.keys.KeyA)g.x-=380*dt;if(A.keys.ArrowRight||A.keys.KeyD)g.x+=380*dt;g.x=A.clamp(g.x,0,420);
    g.sp-=dt;if(g.sp<=0){g.sp=Math.max(.25,.8-g.t*.01);const r=Math.random();
      g.items.push({x:A.rnd(10,450),y:-20,v:A.rnd(110,170)+g.t*2,k:r<.22?'bomb':r<.5?'coal':r<.75?'iron':r<.92?'gold':'gem'});}
    for(let i=g.items.length-1;i>=0;i--){const it=g.items[i];it.y+=it.v*dt;
      if(it.y>310&&it.y<340&&it.x+20>g.x&&it.x<g.x+60){g.items.splice(i,1);
        if(it.k==='bomb'){g.lives--;A.beep(90,.3,'sawtooth');if(!g.lives)return A.over(g,'Бум!');}
        else{g.score+={coal:1,iron:2,gold:5,gem:10}[it.k];A.beep(700);}continue;}
      if(it.y>370)g.items.splice(i,1);}
  },
  draw(g){A.bg('#2a1f17');for(const it of g.items){if(it.k==='bomb'){A.block(it.x,it.y,20,'#c62828');c.fillStyle='#fff';c.fillRect(it.x+3,it.y+8,14,4);}
      else{A.block(it.x,it.y,20,C.stone);c.fillStyle={coal:C.coal,iron:C.iron,gold:C.gold,gem:C.gem}[it.k];c.fillRect(it.x+4,it.y+4,5,5);c.fillRect(it.x+11,it.y+10,5,5);}}
    A.block(g.x,320,60,'#7d7d85',22);c.fillStyle='#222';c.fillRect(g.x+8,340,10,8);c.fillRect(g.x+42,340,10,8);
    A.txt('❤'.repeat(g.lives),8,14,14,'#f55');}
});

// 4. Прилепче в пещерата
A.add({id:'bat',cat:'action',icon:'🦇',name:'Прилепче',desc:'Лети през пещерата',help:'Space / клик — размахай криле. Мини през дупките между сталактитите.',
  start(g){g.y=180;g.v=0;g.cols=[];g.sp=0;},
  key(g,k){if(k==='Space'||k==='ArrowUp'||k==='KeyW'){g.v=-260;A.beep(500,.04);}},
  update(g,dt){g.v+=800*dt;g.y+=g.v*dt;g.sp-=dt;
    if(g.sp<=0){g.sp=1.5;g.cols.push({x:500,gap:A.ri(70,250),pass:false});}
    for(const p of g.cols){p.x-=150*dt;if(!p.pass&&p.x<80){p.pass=true;g.score++;A.beep(900);}
      if(p.x<112&&p.x+40>88&&(g.y-10<p.gap-55||g.y+10>p.gap+55))return A.over(g,'Удари скалата!');}
    g.cols=g.cols.filter(p=>p.x>-50);if(g.y>360||g.y<0)return A.over(g,'Падна!');},
  draw(g){A.bg('#16121c');for(const p of g.cols){for(let y=0;y<p.gap-55;y+=20)A.block(p.x,y,40,C.stone,Math.min(20,p.gap-55-y));for(let y=p.gap+55;y<360;y+=20)A.block(p.x,y,40,C.stone);}
    const f=Math.sin(g.t*25)>0;c.fillStyle='#3a2b4a';c.fillRect(90,g.y-6,20,12);c.fillRect(78,g.y+(f?-10:0),12,8);c.fillRect(110,g.y+(f?-10:0),12,8);c.fillStyle='#f33';c.fillRect(102,g.y-3,3,3);}
});

// 5. Лавов дъжд
A.add({id:'lavarain',cat:'action',icon:'🌋',name:'Лавов дъжд',desc:'Оцелей колкото можеш',unit:' с',dec:1,help:'← → или A D — бягай от падащата лава. Резултатът е времето, през което оцеляваш.',
  start(g){g.x=230;g.drops=[];g.sp=0;},
  update(g,dt){g.score=g.t;
    if(A.keys.ArrowLeft||A.keys.KeyA)g.x-=300*dt;if(A.keys.ArrowRight||A.keys.KeyD)g.x+=300*dt;g.x=A.clamp(g.x,0,460);
    g.sp-=dt;if(g.sp<=0){g.sp=Math.max(.08,.5-g.t*.012);g.drops.push({x:A.rnd(0,460),y:-20,v:A.rnd(150,260)+g.t*4});}
    for(const d of g.drops){d.y+=d.v*dt;if(d.y+20>320&&d.y<340&&d.x+20>g.x+2&&d.x<g.x+18)return A.over(g,'Изгоря!');}
    g.drops=g.drops.filter(d=>d.y<380);},
  draw(g){A.bg('#2b0f08');for(let x=0;x<480;x+=20)A.block(x,340,20,C.stone);
    for(const d of g.drops){A.block(d.x,d.y,20,C.lava);c.fillStyle='#ffb300';c.fillRect(d.x+5,d.y+5,6,4);}
    A.block(g.x,320,20,'#3b7bd6');c.fillStyle='#f1c27d';c.fillRect(g.x+4,322,12,8);}
});

// 6. Нашествие на слузите
A.add({id:'invaders',cat:'action',icon:'👾',name:'Нашествие',desc:'Стреляй по слузите',help:'← → — движи се. Space — стреляй. Не ги оставяй да стигнат долу!',
  start(g){g.x=230;g.shots=[];g.bombs=[];g.wave=0;g.cd=0;g.lives=3;this.wave(g);},
  wave(g){g.wave++;g.en=[];for(let r=0;r<4;r++)for(let i=0;i<8;i++)g.en.push({x:60+i*44,y:30+r*30,a:1,col:[C.leaf,'#7cb342',C.purple,C.ruby][r]});g.dir=1;g.esp=30+g.wave*10;},
  key(g,k){if(k==='Space'&&g.cd<=0){g.shots.push({x:g.x+9,y:320});g.cd=.35;A.beep(900,.05);}},
  update(g,dt){g.cd-=dt;if(A.keys.ArrowLeft||A.keys.KeyA)g.x-=260*dt;if(A.keys.ArrowRight||A.keys.KeyD)g.x+=260*dt;g.x=A.clamp(g.x,0,460);
    const alive=g.en.filter(e=>e.a);let edge=false;for(const e of alive){e.x+=g.dir*g.esp*dt*(1+(32-alive.length)/12);if(e.x<5||e.x>455)edge=true;}
    if(edge){g.dir*=-1;for(const e of alive){e.y+=14;if(e.y>300)return A.over(g,'Нахлуха!');}}
    if(alive.length&&Math.random()<dt*(.8+g.wave*.3)){const e=A.pick(alive);g.bombs.push({x:e.x+10,y:e.y+20});}
    for(const s of g.shots){s.y-=420*dt;for(const e of alive)if(e.a&&s.x>e.x&&s.x<e.x+24&&s.y>e.y&&s.y<e.y+20){e.a=0;s.y=-99;g.score+=10;A.beep(300);}}
    for(const b of g.bombs){b.y+=170*dt;if(b.y>320&&b.y<340&&b.x>g.x&&b.x<g.x+20){b.y=999;g.lives--;A.beep(100,.3,'sawtooth');if(!g.lives)return A.over(g);}}
    g.shots=g.shots.filter(s=>s.y>0);g.bombs=g.bombs.filter(b=>b.y<370);
    if(!alive.length){g.score+=50;A.tune([523,784]);this.wave(g);}},
  draw(g){A.bg('#0b0f1e');for(const e of g.en)if(e.a){A.block(e.x,e.y,24,e.col,20);c.fillStyle='#000';const o=Math.sin(g.t*6)>0?2:0;c.fillRect(e.x+5+o,e.y+6,4,4);c.fillRect(e.x+14+o,e.y+6,4,4);}
    c.fillStyle='#fff';for(const s of g.shots)c.fillRect(s.x,s.y,3,10);c.fillStyle='#f66';for(const b of g.bombs)c.fillRect(b.x,b.y,5,8);
    A.block(g.x,325,20,'#3b7bd6',15);c.fillStyle='#ccc';c.fillRect(g.x+8,318,4,8);A.txt('❤'.repeat(g.lives)+'  Вълна '+g.wave,8,350,14,'#f88');}
});

// 7. Пресечи релсите
A.add({id:'crossing',cat:'action',icon:'🐔',name:'Пресечи релсите',desc:'Стигни отсреща жив',help:'Стрелки / WASD — скачай по едно поле. Пази се от вагонетките, по реката стъпвай само на дънерите.',
  start(g){g.lvl=0;this.level(g);},
  level(g){g.lvl++;g.px=6;g.py=8;g.rows=[];
    for(let r=0;r<9;r++){let k=r===0||r===8||r===4?'grass':r<4?'water':'rail';
      const dir=r%2?1:-1,sp=(40+g.lvl*10+A.ri(0,40))*dir,objs=[];const n=k==='water'?3:A.ri(1,2+Math.min(2,g.lvl));const len=k==='water'?A.ri(2,3):A.ri(1,2);
      for(let i=0;i<n;i++)objs.push({x:i*(480/n)+A.ri(0,60),w:len*40});g.rows.push({k,sp,objs});}},
  key(g,k){const m={ArrowUp:[0,-1],KeyW:[0,-1],ArrowDown:[0,1],KeyS:[0,1],ArrowLeft:[-1,0],KeyA:[-1,0],ArrowRight:[1,0],KeyD:[1,0]}[k];if(!m)return;
    g.px=A.clamp(g.px+m[0],0,11.99);g.py=A.clamp(g.py+m[1],0,8);A.beep(400,.03);
    if(g.py===0){g.score+=10;A.tune([660,880]);this.level(g);}},
  update(g,dt){const row=g.rows[g.py];
    for(const r of g.rows)for(const o of r.objs){o.x+=r.sp*dt;if(o.x>480)o.x-=480+o.w;if(o.x<-o.w)o.x+=480+o.w;}
    const cx=g.px*40+20;
    if(row.k==='rail'&&row.objs.some(o=>cx>o.x+4&&cx<o.x+o.w-4))return A.over(g,'Блъсна те вагонетка!');
    if(row.k==='water'){const log=row.objs.find(o=>cx>o.x&&cx<o.x+o.w);if(!log)return A.over(g,'Цоп! Падна във водата');g.px+=row.sp*dt/40;if(g.px<0||g.px>11.99)return A.over(g,'Отнесе те реката!');}},
  draw(g){g.rows.forEach((r,i)=>{const y=i*40;
      if(r.k==='grass')for(let x=0;x<480;x+=40)A.block(x,y,40,C.grass);
      if(r.k==='water'){c.fillStyle=C.water;c.fillRect(0,y,480,40);for(const o of r.objs)A.block(o.x,y+6,o.w,'#6b4a2a',28);}
      if(r.k==='rail'){c.fillStyle='#55493d';c.fillRect(0,y,480,40);c.fillStyle='#9a9aa2';c.fillRect(0,y+10,480,3);c.fillRect(0,y+27,480,3);
        for(const o of r.objs){A.block(o.x+2,y+4,o.w-4,'#7d7d85',30);c.fillStyle='#ffd23f';c.fillRect(o.x+8,y+10,o.w-16,8);}}});
    const x=g.px*40+8,y=g.py*40+6;A.block(x,y+8,24,'#fff',18);c.fillStyle='#f33';c.fillRect(x+16,y+2,6,6);c.fillStyle='#fa0';c.fillRect(x+24,y+12,6,4);
    A.txt('Ниво '+g.lvl,472,350,14,'#fff','right');}
});

// 8. Блоков тенис
A.add({id:'pong',cat:'action',icon:'🏓',name:'Блоков тенис',desc:'Победи робота до 7',help:'W/S, ↑/↓ или мишка — движи лявата ракета. Първият до 7 точки печели.',
  start(g){g.py=150;g.ay=150;g.me=0;g.ai=0;this.serve(g,1);},
  serve(g,d){g.bx=240;g.by=180;const a=A.rnd(-.5,.5);g.vx=Math.cos(a)*260*d;g.vy=Math.sin(a)*260;},
  move(g,x,y){g.py=A.clamp(y-35,0,290);},
  update(g,dt){if(A.keys.KeyW||A.keys.ArrowUp)g.py-=330*dt;if(A.keys.KeyS||A.keys.ArrowDown)g.py+=330*dt;g.py=A.clamp(g.py,0,290);
    const aim=g.by-35;g.ay+=A.clamp(aim-g.ay,-230*dt,230*dt);g.ay=A.clamp(g.ay,0,290);
    g.bx+=g.vx*dt;g.by+=g.vy*dt;if(g.by<6||g.by>354){g.vy*=-1;g.by=A.clamp(g.by,6,354);}
    const pad=(px,dir)=>{const o=(g.by-px-35)/35,s=Math.min(560,Math.hypot(g.vx,g.vy)*1.06);g.vx=Math.cos(o*.9)*s*dir;g.vy=Math.sin(o*.9)*s;A.beep(400);};
    if(g.vx<0&&g.bx<30&&g.bx>14&&g.by>g.py-6&&g.by<g.py+76)pad(g.py,1);
    if(g.vx>0&&g.bx>450&&g.bx<466&&g.by>g.ay-6&&g.by<g.ay+76)pad(g.ay,-1);
    if(g.bx<-10){g.ai++;A.beep(150,.2);this.serve(g,1);}if(g.bx>490){g.me++;g.score=g.me;A.beep(900,.2);this.serve(g,-1);}
    if(g.me>=7)A.over(g,'🏆 Победа '+g.me+':'+g.ai+'!');else if(g.ai>=7)A.over(g,'Загуба '+g.me+':'+g.ai);},
  draw(g){A.bg('#14301e');for(let y=0;y<360;y+=24){c.fillStyle='rgba(255,255,255,.2)';c.fillRect(238,y,4,12);}
    A.block(14,g.py,14,'#3b7bd6',70);A.block(452,g.ay,14,C.red,70);c.fillStyle='#fff';c.fillRect(g.bx-6,g.by-6,12,12);
    A.txt(g.me,200,30,30,'#fff','center');A.txt(g.ai,280,30,30,'#fff','center');}
});

// 9. Метеоритен миньор
A.add({id:'meteors',cat:'action',icon:'☄️',name:'Метеоритен миньор',desc:'Разбивай каменните блокове',help:'← → — завъртане, ↑ — газ, Space — стреляй. Големите камъни се разпадат на по-малки.',
  start(g){g.x=240;g.y=180;g.a=-Math.PI/2;g.vx=0;g.vy=0;g.sh=[];g.rocks=[];g.cd=0;g.lives=3;g.inv=2;g.lv=0;this.wave(g);},
  wave(g){g.lv++;for(let i=0;i<2+g.lv;i++){const a=A.rnd(0,6.28);g.rocks.push({x:240+Math.cos(a)*220,y:180+Math.sin(a)*200,vx:A.rnd(-50,50),vy:A.rnd(-50,50),s:40});}},
  key(g,k){if(k==='Space'&&g.cd<=0){g.sh.push({x:g.x,y:g.y,vx:Math.cos(g.a)*400,vy:Math.sin(g.a)*400,t:.9});g.cd=.2;A.beep(800,.04);}},
  update(g,dt){g.cd-=dt;g.inv-=dt;const W=(o)=>{o.x=(o.x+480)%480;o.y=(o.y+360)%360;};
    if(A.keys.ArrowLeft||A.keys.KeyA)g.a-=4*dt;if(A.keys.ArrowRight||A.keys.KeyD)g.a+=4*dt;
    if(A.keys.ArrowUp||A.keys.KeyW){g.vx+=Math.cos(g.a)*260*dt;g.vy+=Math.sin(g.a)*260*dt;}
    g.vx*=.99;g.vy*=.99;g.x+=g.vx*dt;g.y+=g.vy*dt;W(g);
    for(const s of g.sh){s.x+=s.vx*dt;s.y+=s.vy*dt;s.t-=dt;W(s);}
    for(const r of g.rocks){r.x+=r.vx*dt;r.y+=r.vy*dt;W(r);}
    for(const s of g.sh)for(const r of g.rocks)if(s.t>0&&!r.dead&&Math.abs(s.x-r.x)<r.s/2&&Math.abs(s.y-r.y)<r.s/2){s.t=0;r.dead=1;g.score+=r.s===40?5:r.s===20?10:20;A.beep(200,.08);
      if(r.s>10)for(let i=0;i<2;i++)g.rocks.push({x:r.x,y:r.y,vx:A.rnd(-90,90),vy:A.rnd(-90,90),s:r.s/2});}
    g.sh=g.sh.filter(s=>s.t>0);g.rocks=g.rocks.filter(r=>!r.dead);
    if(g.inv<=0)for(const r of g.rocks)if(Math.abs(g.x-r.x)<r.s/2+6&&Math.abs(g.y-r.y)<r.s/2+6){g.lives--;g.inv=2;g.x=240;g.y=180;g.vx=g.vy=0;A.beep(90,.3,'sawtooth');if(!g.lives)return A.over(g);}
    if(!g.rocks.length)this.wave(g);},
  draw(g){A.bg('#05060f');c.fillStyle='#fff';for(let i=0;i<40;i++)c.fillRect((i*97)%480,(i*61)%360,1,1);
    for(const r of g.rocks){A.block(r.x-r.s/2,r.y-r.s/2,r.s,C.stone);if(r.s>10){c.fillStyle=C.gold;c.fillRect(r.x-r.s/6,r.y-r.s/6,r.s/5,r.s/5);}}
    c.fillStyle='#ff0';for(const s of g.sh)c.fillRect(s.x-2,s.y-2,4,4);
    if(g.inv<=0||Math.sin(g.t*20)>0){c.save();c.translate(g.x,g.y);c.rotate(g.a);c.fillStyle='#ddd';c.fillRect(-8,-7,16,14);c.fillStyle='#3b7bd6';c.fillRect(4,-3,8,6);c.restore();}
    A.txt('❤'.repeat(g.lives)+'  Вълна '+g.lv,8,350,14,'#f88');}
});

// 10. Блоков бегач
A.add({id:'runner',cat:'action',icon:'🏃',name:'Блоков бегач',desc:'Прескачай кактусите',help:'Space / ↑ / клик — скок. ↓ — наведи се под прилепите.',
  start(g){g.y=0;g.v=0;g.obs=[];g.sp=0;g.speed=260;g.duck=false;},
  key(g,k){if((k==='Space'||k==='ArrowUp'||k==='KeyW')&&g.y===0){g.v=520;A.beep(500,.05);}},
  update(g,dt){g.speed=260+g.t*8;g.score=Math.floor(g.t*10);g.duck=!!(A.keys.ArrowDown||A.keys.KeyS);
    g.v-=1500*dt;g.y+=g.v*dt;if(g.y<0){g.y=0;g.v=0;}
    g.sp-=dt;if(g.sp<=0){g.sp=A.rnd(.7,1.5)*260/g.speed*1.4;g.obs.push(Math.random()<.25&&g.t>8?{x:500,y:250,w:28,h:16,bat:1}:{x:500,y:300-A.ri(1,2)*20,w:20*A.ri(1,2),h:0});const o=g.obs[g.obs.length-1];if(!o.bat)o.h=300-o.y;}
    for(const o of g.obs){o.x-=g.speed*dt;const p={x:60,y:300-g.y-(g.duck?22:40),w:22,h:g.duck?22:40};if(A.hit(p,o))return A.over(g,'Ох!');}
    g.obs=g.obs.filter(o=>o.x>-40);},
  draw(g){A.bg(C.sky);for(let x=-(g.t*g.speed%20);x<480;x+=20){A.block(x,300,20,C.grass);A.block(x,320,20,C.dirt);A.block(x,340,20,C.dirt);}
    for(const o of g.obs){if(o.bat){c.fillStyle='#3a2b4a';c.fillRect(o.x,o.y+4,o.w,8);c.fillRect(o.x+(Math.sin(g.t*20)>0?0:8),o.y,10,6);}else for(let y=o.y;y<300;y+=20)for(let x=o.x;x<o.x+o.w;x+=20)A.block(x,y,20,'#2e8b2e');}
    const h=g.duck?22:40,y=300-g.y-h;A.block(60,y,22,'#e67e22',h);A.block(62,y-(g.duck?0:0),18,'#f1c27d',12);c.fillStyle='#000';c.fillRect(74,y+3,3,3);}
});
