// ===== 🎯 УМЕНИЯ =====

// 31. Удари слузите
A.add({id:'whack',cat:'skill',icon:'🔨',name:'Удари слузите',desc:'Халосай ги, преди да се скрият',help:'Кликай слузите, щом изскочат (или клавиши 1–9 като на цифровата клавиатура). Не удряй динамита! 30 секунди.',
  start(g){g.time=30;g.h=Array(9).fill(null);g.sp=0;g.hits=[];},
  hitAt(g,i){const m=g.h[i];if(!m||m.up<=0)return;if(m.bomb){g.score=Math.max(0,g.score-3);A.beep(90,.3,'sawtooth');}else{g.score++;A.beep(700,.05);}g.hits.push({i,t:.3});g.h[i]=null;},
  click(g,mx,my){const x=Math.floor((mx-90)/100),y=Math.floor((my-30)/100);if(x>=0&&y>=0&&x<3&&y<3)this.hitAt(g,y*3+x);},
  key(g,k,ch){const n=+ch;if(n>=1&&n<=9){const map=[6,7,8,3,4,5,0,1,2];this.hitAt(g,map[n-1]);}},
  update(g,dt){g.time-=dt;if(g.time<=0)return A.over(g,'Времето изтече!');g.sp-=dt;
    if(g.sp<=0){g.sp=Math.max(.3,.9-g.t*.02);const free=[...Array(9).keys()].filter(i=>!g.h[i]);if(free.length)g.h[A.pick(free)]={up:A.rnd(.7,1.3)-g.t*.01,bomb:Math.random()<.15};}
    g.h.forEach((m,i)=>{if(m){m.up-=dt;if(m.up<=-.2)g.h[i]=null;}});g.hits.forEach(h=>h.t-=dt);g.hits=g.hits.filter(h=>h.t>0);},
  draw(g){A.bg('#3d7a2a');for(let i=0;i<9;i++){const x=90+(i%3)*100,y=30+Math.floor(i/3)*100;c.fillStyle='#2a1a10';c.fillRect(x+10,y+60,80,26);
      const m=g.h[i];if(m&&m.up>0){if(m.bomb){A.block(x+25,y+20,50,'#c62828',46);c.fillStyle='#fff';c.fillRect(x+30,y+38,40,8);}else{A.block(x+22,y+16,56,'#7cb342',50);c.fillStyle='#000';c.fillRect(x+34,y+30,8,8);c.fillRect(x+58,y+30,8,8);}}
      c.fillStyle=C.dirt;c.fillRect(x+6,y+76,88,14);}
    for(const h of g.hits)A.txt('💥',90+(h.i%3)*100+50,30+Math.floor(h.i/3)*100+40,30,'#fff','center');A.txt('⏱ '+Math.ceil(g.time),10,14,14);}
});

// 32. Кулостроител
A.add({id:'stacker',cat:'skill',icon:'🏗️',name:'Кулостроител',desc:'Строй колкото можеш по-високо',help:'Space / клик — пусни движещия се блок. Каквото стърчи, се отрязва. Точно попадение не го смалява!',
  start(g){g.st=[{x:170,w:140}];g.cur={x:0,w:140,d:1};g.cam=0;g.cuts=[];},
  key(g,k){if(k!=='Space')return;const top=g.st[g.st.length-1],cur=g.cur;let l=Math.max(top.x,cur.x),r=Math.min(top.x+top.w,cur.x+cur.w);
    if(r-l<=0)return A.over(g,'Пропусна!');
    if(Math.abs(cur.x-top.x)<4){l=top.x;r=top.x+top.w;A.tune([880,1100]);}else{A.beep(400,.06);g.cuts.push({x:cur.x<top.x?cur.x:r,w:cur.w-(r-l),y:g.st.length,v:0,yy:0});}
    g.st.push({x:l,w:r-l});g.score=g.st.length-1;g.cur={x:Math.random()<.5?-r+l:480,w:r-l,d:Math.random()<.5?1:-1};if(g.cur.x>=480)g.cur.d=-1;else g.cur.d=1;},
  update(g,dt){const sp=150+g.score*12;g.cur.x+=g.cur.d*sp*dt;if(g.cur.x+g.cur.w>480){g.cur.d=-1;}if(g.cur.x<0){g.cur.d=1;}
    g.cam+=((Math.max(0,g.st.length-10))*24-g.cam)*Math.min(1,dt*5);for(const k of g.cuts){k.v+=600*dt;k.yy+=k.v*dt;}g.cuts=g.cuts.filter(k=>k.yy<400);},
  draw(g){A.bg('#87ceeb');const Y=i=>340-i*24+g.cam;const cols=[C.stone,C.wood,C.dirt,C.gold,C.grass,C.water,C.purple];
    g.st.forEach((b,i)=>A.block(b.x,Y(i),b.w,cols[i%cols.length],24));for(const k of g.cuts)A.block(k.x,Y(k.y)+k.yy,k.w,'#999',24);
    A.block(g.cur.x,Y(g.st.length),g.cur.w,cols[g.st.length%cols.length],24);}
});

// 33. Ритъм
A.add({id:'rhythm',cat:'skill',icon:'🎶',name:'Ритъм',desc:'Удряй нотите в такт',help:'Клавиши D F J K (или 1 2 3 4) за 4-те линии. Натисни, когато нотата е на бялата линия. 10 пропуска и край.',
  start(g){g.notes=[];g.sp=0;g.miss=0;g.combo=0;g.fx=[0,0,0,0];g.beat=0;},
  key(g,k){const L={KeyD:0,KeyF:1,KeyJ:2,KeyK:3,Digit1:0,Digit2:1,Digit3:2,Digit4:3}[k];if(L===undefined)return;g.fx[L]=.15;
    const n=g.notes.filter(n=>n.l===L&&!n.hit).sort((a,b)=>Math.abs(a.y-300)-Math.abs(b.y-300))[0];
    if(n&&Math.abs(n.y-300)<28){n.hit=1;g.combo++;g.score+=10+Math.min(40,g.combo);A.beep([523,587,659,784][L],.1,'triangle');}else{g.combo=0;g.miss++;A.beep(110,.08);if(g.miss>=10)A.over(g,'Изпусна ритъма');}},
  update(g,dt){const sp=170+g.t*2;g.beat-=dt;
    if(g.beat<=0){g.beat=Math.max(.22,.55-g.t*.004);g.notes.push({l:A.ri(0,3),y:-20});if(Math.random()<.15)g.notes.push({l:A.ri(0,3),y:-20});}
    for(const n of g.notes){n.y+=sp*dt;if(!n.hit&&n.y>330){n.hit=2;g.miss++;g.combo=0;if(g.miss>=10)return A.over(g,'Изпусна ритъма');}}
    g.notes=g.notes.filter(n=>n.y<380&&n.hit!==1);g.fx=g.fx.map(v=>Math.max(0,v-dt));},
  draw(g){A.bg('#140f22');const cols=[C.red,C.gold,C.grass,C.water];for(let l=0;l<4;l++){c.fillStyle=g.fx[l]?'#3a2f5a':'#1e1733';c.fillRect(120+l*60,0,56,360);A.txt('DFJK'[l],148+l*60,340,16,'#bbb','center');}
    c.fillStyle='#fff';c.fillRect(116,298,244,4);for(const n of g.notes)if(n.hit!==2)A.block(124+n.l*60,n.y-10,48,cols[n.l],20);
    A.txt('Комбо '+g.combo,380,40,16,'#ffd54f');A.txt('Пропуски '+g.miss+'/10',380,70,14,'#f88');}
});

// 34. Щит
A.add({id:'shield',cat:'skill',icon:'🛡️',name:'Щит',desc:'Пази кристала от стрелите',help:'← → (или мишка) върти щита около кристала. Спирай стрелите. 3 удара и край.',
  start(g){g.a=0;g.ar=[];g.sp=0;g.lives=3;},
  move(g,x,y){g.a=Math.atan2(y-180,x-240);},
  update(g,dt){if(A.keys.ArrowLeft||A.keys.KeyA)g.a-=4.5*dt;if(A.keys.ArrowRight||A.keys.KeyD)g.a+=4.5*dt;
    g.sp-=dt;if(g.sp<=0){g.sp=Math.max(.35,1.1-g.t*.015);const a=A.rnd(0,6.283);g.ar.push({a,r:260,v:90+g.t*2.2});}
    for(const r of g.ar){r.r-=r.v*dt;if(!r.done&&r.r<62&&r.r>48){let d=Math.abs(((r.a-g.a)%6.283+9.425)%6.283-3.1416);if(d<.55){r.done=1;g.score++;A.beep(900,.05);}}
      if(!r.done&&r.r<24){r.done=1;g.lives--;A.beep(100,.3,'sawtooth');if(!g.lives)return A.over(g,'Кристалът се счупи!');}}
    g.ar=g.ar.filter(r=>!r.done);},
  draw(g){A.bg('#101a26');c.fillStyle='#e040fb';c.fillRect(226,166,28,28);c.fillStyle='rgba(255,255,255,.6)';c.fillRect(232,172,6,10);
    c.strokeStyle='#ffd54f';c.lineWidth=10;c.beginPath();c.arc(240,180,55,g.a-.5,g.a+.5);c.stroke();
    for(const r of g.ar){const x=240+Math.cos(r.a)*r.r,y=180+Math.sin(r.a)*r.r;c.save();c.translate(x,y);c.rotate(r.a);c.fillStyle='#ddd';c.fillRect(-2,-1,16,3);c.fillStyle='#f55';c.fillRect(-6,-3,5,7);c.restore();}
    A.txt('❤'.repeat(g.lives),10,14,14,'#f55');}
});

// 35. Мини голф
A.add({id:'golf',cat:'skill',icon:'⛳',name:'Мини голф',desc:'9 дупки, малко удари',low:true,unit:' удара',help:'Натисни и дръпни мишката назад от топката, после пусни — както с прашка. 9 дупки, колкото по-малко удари, толкова по-добре.',
  start(g){g.hole=0;g.strokes=0;this.next(g);},
  next(g){g.hole++;if(g.hole>9){g.score=g.strokes;return A.over(g,'🏁 '+g.strokes+' удара за 9 дупки');}
    g.bx=60;g.by=A.ri(60,300);g.vx=g.vy=0;g.hx=A.ri(330,430);g.hy=A.ri(50,310);g.walls=[];
    for(let i=0;i<Math.min(5,1+g.hole/2);i++){const w={x:A.ri(120,320),y:A.ri(20,300),w:A.ri(16,30),h:A.ri(50,140)};if(Math.random()<.4){[w.w,w.h]=[w.h,w.w];}g.walls.push(w);}
    g.walls=g.walls.filter(w=>!A.hit({x:g.hx-20,y:g.hy-20,w:40,h:40},w)&&!A.hit({x:g.bx-15,y:g.by-15,w:30,h:30},w));},
  click(g,mx,my){if(Math.hypot(g.vx,g.vy)<5)g.aim={x:mx,y:my};},
  release(g,mx,my){if(!g.aim)return;const dx=g.aim.x-mx,dy=g.aim.y-my;const p=Math.min(1,Math.hypot(dx,dy)/120);
    if(p>.05){const a=Math.atan2(dy,dx);g.vx=Math.cos(a)*p*520;g.vy=Math.sin(a)*p*520;g.strokes++;g.score=g.strokes;A.beep(300,.06);}g.aim=null;},
  update(g,dt){const steps=4;for(let s=0;s<steps;s++){const d=dt/steps;g.bx+=g.vx*d;g.by+=g.vy*d;
      if(g.bx<15||g.bx>465){g.vx*=-1;g.bx=A.clamp(g.bx,15,465);}if(g.by<15||g.by>345){g.vy*=-1;g.by=A.clamp(g.by,15,345);}
      for(const w of g.walls)if(g.bx+6>w.x&&g.bx-6<w.x+w.w&&g.by+6>w.y&&g.by-6<w.y+w.h){const ox=Math.min(g.bx+6-w.x,w.x+w.w-g.bx+6),oy=Math.min(g.by+6-w.y,w.y+w.h-g.by+6);
        if(ox<oy){g.vx*=-1;g.bx+=g.bx<w.x+w.w/2?-ox:ox;}else{g.vy*=-1;g.by+=g.by<w.y+w.h/2?-oy:oy;}A.beep(200,.03);}}
    const f=Math.pow(.35,dt);g.vx*=f;g.vy*=f;if(Math.hypot(g.vx,g.vy)<6){g.vx=g.vy=0;}
    const dh=Math.hypot(g.bx-g.hx,g.by-g.hy);if(dh<12&&Math.hypot(g.vx,g.vy)<260){A.tune([660,880,1100]);this.next(g);}},
  draw(g){A.bg('#3d8a2a');for(let x=0;x<480;x+=20)for(let y=0;y<360;y+=20)if((x+y)%40){c.fillStyle='#449530';c.fillRect(x,y,20,20);}
    c.fillStyle=C.wood;c.fillRect(0,0,480,10);c.fillRect(0,350,480,10);c.fillRect(0,0,10,360);c.fillRect(470,0,10,360);
    for(const w of g.walls)A.block(w.x,w.y,w.w,C.stone,w.h);c.fillStyle='#111';c.beginPath();c.arc(g.hx,g.hy,11,0,7);c.fill();c.fillStyle='#e33';c.fillRect(g.hx,g.hy-40,3,40);c.fillRect(g.hx+3,g.hy-40,14,9);
    c.fillStyle='#fff';c.fillRect(g.bx-6,g.by-6,12,12);
    if(g.aim){const dx=g.aim.x-A.mouse.x,dy=g.aim.y-A.mouse.y;c.strokeStyle='rgba(255,255,255,.8)';c.lineWidth=3;c.beginPath();c.moveTo(g.bx,g.by);c.lineTo(g.bx+dx,g.by+dy);c.stroke();}
    A.txt('Дупка '+Math.min(9,g.hole)+'/9   Удари: '+g.strokes,240,20,14,'#fff','center');}
});

// 36. Катапулт
A.add({id:'catapult',cat:'skill',icon:'🎯',name:'Катапулт',desc:'Уцели целта с правилния ъгъл',help:'↑ ↓ — ъгъл, ← → — сила, Space — стреляй. Внимавай с вятъра! 10 изстрела.',
  start(g){g.ang=45;g.pow=60;g.shots=10;this.place(g);},
  place(g){g.tx=A.ri(270,440);g.wall=A.ri(40,150);g.wind=A.ri(-40,40);g.b=null;g.trail=[];},
  key(g,k){if(g.b)return;if(k==='Space'){const a=g.ang*Math.PI/180,v=g.pow*6.5;g.b={x:50,y:300,vx:Math.cos(a)*v,vy:-Math.sin(a)*v};g.shots--;g.trail=[];A.beep(200,.1);}},
  update(g,dt){if(A.keys.ArrowUp||A.keys.KeyW)g.ang=Math.min(85,g.ang+40*dt);if(A.keys.ArrowDown||A.keys.KeyS)g.ang=Math.max(5,g.ang-40*dt);
    if(A.keys.ArrowRight||A.keys.KeyD)g.pow=Math.min(100,g.pow+40*dt);if(A.keys.ArrowLeft||A.keys.KeyA)g.pow=Math.max(10,g.pow-40*dt);
    const b=g.b;if(!b)return;b.vx+=g.wind*dt;b.vy+=400*dt;b.x+=b.vx*dt;b.y+=b.vy*dt;g.trail.push([b.x,b.y]);
    const hitWall=b.x>220&&b.x<240&&b.y>320-g.wall;const hitT=b.x>g.tx&&b.x<g.tx+30&&b.y>290&&b.y<320;
    if(hitT){g.score++;A.tune([660,880,1100]);g.b=null;if(!g.shots)return A.over(g,'Уцели '+g.score+' от 10');this.place(g);return;}
    if(hitWall||b.y>320||b.x>500||b.x<-20){A.beep(120,.1);g.b=null;if(!g.shots)A.over(g,'Уцели '+g.score+' от 10');}},
  draw(g){A.bg('#87ceeb');for(let x=0;x<480;x+=20)A.block(x,320,20,C.grass,40);for(let y=320-g.wall;y<320;y+=20)A.block(220,y,20,C.stone,Math.min(20,320-y));
    A.block(g.tx,290,30,C.red,30);c.fillStyle='#fff';c.fillRect(g.tx+10,300,10,10);
    c.save();c.translate(50,305);c.rotate(-g.ang*Math.PI/180);c.fillStyle=C.wood;c.fillRect(0,-4,40,8);c.restore();A.block(35,300,30,C.wood,20);
    c.fillStyle='rgba(255,255,255,.6)';for(const[x,y]of g.trail)c.fillRect(x-1,y-1,2,2);if(g.b)A.block(g.b.x-6,g.b.y-6,12,'#555');
    A.txt('Ъгъл '+Math.round(g.ang)+'°  Сила '+Math.round(g.pow)+'  Изстрели '+g.shots,10,16,13);A.txt('Вятър '+(g.wind>0?'→':'←')+' '+Math.abs(g.wind),470,16,13,'#fff','right');}
});

// 37. Ски спускане
A.add({id:'ski',cat:'skill',icon:'⛷️',name:'Ски спускане',desc:'Мини през вратичките',help:'← → — завивай. Минавай между двете знаменца за +10. Не удряй елхите!',
  start(g){g.x=240;g.obj=[];g.sp=0;g.dist=0;g.bonus=0;},
  update(g,dt){const v=160+g.t*4;if(A.keys.ArrowLeft||A.keys.KeyA)g.x-=220*dt;if(A.keys.ArrowRight||A.keys.KeyD)g.x+=220*dt;g.x=A.clamp(g.x,10,470);
    g.dist+=v*dt;g.score=Math.floor(g.dist/50)+g.bonus;g.sp-=v*dt;
    if(g.sp<=0){g.sp=70;if(Math.random()<.35){const x=A.ri(40,360);g.obj.push({k:'gate',x,y:380,w:A.ri(70,110)});}else for(let i=0;i<A.ri(1,3);i++)g.obj.push({k:'tree',x:A.ri(0,460),y:380+A.ri(0,40)});}
    for(const o of g.obj){o.y-=v*dt;if(o.k==='tree'&&Math.abs(o.x+10-g.x)<14&&o.y<92&&o.y>56)return A.over(g,'Удари елха!');
      if(o.k==='gate'&&!o.done&&o.y<80){o.done=1;if(g.x>o.x&&g.x<o.x+o.w){g.bonus+=10;A.beep(900,.06);}else A.beep(200,.06);}}
    g.obj=g.obj.filter(o=>o.y>-40);},
  draw(g){A.bg(C.snow);for(const o of g.obj){if(o.k==='tree'){c.fillStyle='#2e6b1e';c.fillRect(o.x,o.y,20,24);c.fillRect(o.x+4,o.y-10,12,12);c.fillStyle='#6b4a2a';c.fillRect(o.x+8,o.y+24,4,8);}
      else{c.fillStyle=o.done?'#9e9e9e':'#e33';c.fillRect(o.x-3,o.y-20,4,24);c.fillRect(o.x+o.w,o.y-20,4,24);c.fillRect(o.x+1,o.y-20,10,8);c.fillRect(o.x+o.w-10,o.y-20,10,8);}}
    const tilt=(A.keys.ArrowLeft||A.keys.KeyA)?-3:(A.keys.ArrowRight||A.keys.KeyD)?3:0;A.block(g.x-8,60,16,'#3b7bd6',20);c.fillStyle='#f1c27d';c.fillRect(g.x-5,52,10,9);c.fillStyle='#333';c.fillRect(g.x-12+tilt,80,10,3);c.fillRect(g.x+2+tilt,80,10,3);}
});

// 38. Риболов
A.add({id:'fishing',cat:'skill',icon:'🎣',name:'Риболов',desc:'Закачи и издърпай рибата',help:'Чакай плувката да потъне (!), натисни Space. После ДРЪЖ Space, за да държиш зелената зона върху рибата, докато лентата се напълни. 90 секунди.',
  fish:[['Шаран',5,'#8d6e3f',.6],['Пъстърва',10,'#ff8a80',1],['Сьомга',20,'#ff7043',1.4],['Златна рибка',50,C.gold,2]],
  start(g){g.time=90;this.cast(g);},
  cast(g){g.st='wait';g.w=A.rnd(1.5,4);},
  key(g,k){if(k!=='Space')return;if(g.st==='bite'){g.st='reel';g.f=A.pick(this.fish);g.fy=150;g.fv=0;g.zy=150;g.zv=0;g.prog=.3;A.beep(600,.05);}else if(g.st==='wait'){A.beep(150,.05);this.cast(g);}},
  update(g,dt){g.time-=dt;if(g.time<=0)return A.over(g,'Край на риболова!');
    if(g.st==='wait'){g.w-=dt;if(g.w<=0){g.st='bite';g.bt=.8;A.beep(1000,.1);}}
    else if(g.st==='bite'){g.bt-=dt;if(g.bt<=0)this.cast(g);}
    else if(g.st==='reel'){const f=g.f;if(Math.random()<dt*2*f[3])g.fv=A.rnd(-160,160)*f[3];g.fy=A.clamp(g.fy+g.fv*dt,20,280);if(g.fy<=20||g.fy>=280)g.fv*=-1;
      g.zv+=(A.keys.Space||A.mouse.down?-500:400)*dt;g.zv=A.clamp(g.zv,-250,250);g.zy=A.clamp(g.zy+g.zv*dt,10,250);if(g.zy<=10||g.zy>=250)g.zv=0;
      const inside=g.fy>g.zy&&g.fy<g.zy+60;g.prog+=(inside?.35:-.25)*dt;
      if(g.prog>=1){g.score+=f[1];g.last=f[0]+' +'+f[1];A.tune([660,880]);this.cast(g);}else if(g.prog<=0){g.last='Избяга!';A.beep(150,.2);this.cast(g);}}},
  draw(g){A.bg('#87ceeb');c.fillStyle=C.water;c.fillRect(0,160,480,200);A.block(0,140,140,C.wood,24);c.fillStyle='#e67e22';c.fillRect(60,100,20,40);c.fillStyle='#f1c27d';c.fillRect(62,86,16,16);
    c.strokeStyle='#5e4428';c.lineWidth=3;c.beginPath();c.moveTo(80,110);c.lineTo(200,60);c.stroke();c.strokeStyle='#fff';c.lineWidth=1;c.beginPath();c.moveTo(200,60);c.lineTo(260,165);c.stroke();
    const dip=g.st==='bite'?8:Math.sin(g.t*3)*2;c.fillStyle='#e33';c.fillRect(254,160+dip,12,8);c.fillStyle='#fff';c.fillRect(254,156+dip,12,4);if(g.st==='bite')A.txt('!',260,130,30,'#ffd54f','center');
    if(g.st==='reel'){c.fillStyle='#163a5a';c.fillRect(380,10,40,320);c.fillStyle='rgba(100,255,100,.5)';c.fillRect(380,10+g.zy,40,60);A.block(388,10+g.fy-8,24,g.f[2],16);
      c.fillStyle='#333';c.fillRect(430,10,12,320);c.fillStyle='#9ccc65';c.fillRect(430,330-320*g.prog,12,320*g.prog);}
    A.txt('⏱ '+Math.ceil(g.time),10,14,14);if(g.last)A.txt(g.last,240,340,16,'#fff','center');}
});

// 39. Пчеличка
A.add({id:'bee',cat:'skill',icon:'🐝',name:'Пчеличка',desc:'Събирай цветен прашец',help:'Мишка или стрелки — лети. Събирай цветята, пази се от осите!',
  start(g){g.x=240;g.y=180;g.fl=[];g.w=[{x:40,y:40,vx:120,vy:90}];for(let i=0;i<4;i++)this.flower(g);},
  flower(g){g.fl.push({x:A.ri(20,450),y:A.ri(30,330),k:A.pick(['#ff6b8a','#ffd23f','#b388ff','#fff'])});},
  move(g,x,y){g.tx=x;g.ty=y;},
  update(g,dt){let dx=0,dy=0;if(A.keys.ArrowLeft||A.keys.KeyA)dx--;if(A.keys.ArrowRight||A.keys.KeyD)dx++;if(A.keys.ArrowUp||A.keys.KeyW)dy--;if(A.keys.ArrowDown||A.keys.KeyS)dy++;
    if(dx||dy){g.tx=undefined;g.x+=dx*240*dt;g.y+=dy*240*dt;}else if(g.tx!==undefined){g.x+=(g.tx-g.x)*Math.min(1,dt*6);g.y+=(g.ty-g.y)*Math.min(1,dt*6);}
    g.x=A.clamp(g.x,8,472);g.y=A.clamp(g.y,8,352);
    for(let i=g.fl.length-1;i>=0;i--){const f=g.fl[i];if(Math.abs(f.x+10-g.x)<18&&Math.abs(f.y+10-g.y)<18){g.fl.splice(i,1);g.score++;A.beep(800,.05);this.flower(g);if(g.score%5===0)g.w.push({x:A.pick([10,460]),y:A.pick([10,340]),vx:A.rnd(80,160)*A.pick([-1,1]),vy:A.rnd(80,160)*A.pick([-1,1])});}}
    for(const w of g.w){w.x+=w.vx*dt;w.y+=w.vy*dt;if(w.x<0||w.x>464)w.vx*=-1;if(w.y<0||w.y>344)w.vy*=-1;if(Math.abs(w.x+8-g.x)<14&&Math.abs(w.y+8-g.y)<14)return A.over(g,'Ужили те!');}},
  draw(g){A.bg('#6cbf47');for(const f of g.fl){c.fillStyle='#2e6b1e';c.fillRect(f.x+8,f.y+12,4,10);c.fillStyle=f.k;c.fillRect(f.x,f.y,20,14);c.fillStyle='#ffb300';c.fillRect(f.x+7,f.y+4,6,6);}
    for(const w of g.w){c.fillStyle='#ffb300';c.fillRect(w.x,w.y,16,12);c.fillStyle='#000';c.fillRect(w.x+4,w.y,3,12);c.fillRect(w.x+10,w.y,3,12);c.fillStyle='#e33';c.fillRect(w.x+16,w.y+5,4,2);}
    const f=Math.sin(g.t*30)>0;c.fillStyle='#ffd23f';c.fillRect(g.x-9,g.y-7,18,14);c.fillStyle='#000';c.fillRect(g.x-3,g.y-7,3,14);c.fillRect(g.x+4,g.y-7,3,14);
    c.fillStyle='rgba(255,255,255,.8)';c.fillRect(g.x-6,g.y-(f?16:12),8,8);c.fillRect(g.x+1,g.y-(f?16:12),8,8);}
});

// 40. Снежна битка
A.add({id:'snowball',cat:'skill',icon:'⛄',name:'Снежна битка',desc:'Уцели снежните човеци',help:'Кликай, за да хвърляш снежни топки. Имаш 6 топки, после се презареждаш автоматично. Не уцелвай кученцето! 40 секунди.',
  start(g){g.time=40;g.t2=[];g.sp=0;g.ammo=6;g.rel=0;g.balls=[];},
  click(g,mx,my){if(g.rel>0||g.ammo<=0)return;g.ammo--;if(!g.ammo)g.rel=1.2;g.balls.push({x:240,y:360,tx:mx,ty:my,t:0});A.beep(300,.04);},
  update(g,dt){g.time-=dt;if(g.time<=0)return A.over(g,'Времето изтече!');if(g.rel>0){g.rel-=dt;if(g.rel<=0)g.ammo=6;}
    g.sp-=dt;if(g.sp<=0){g.sp=A.rnd(.5,1.1);const slots=[60,150,240,330,420].filter(x=>!g.t2.some(t=>t.x===x));if(slots.length)g.t2.push({x:A.pick(slots),up:0,life:A.rnd(1.2,2.2),dog:Math.random()<.18});}
    for(const t of g.t2){t.life-=dt;t.up=A.clamp(t.up+(t.life>0?4:-4)*dt,0,1);}g.t2=g.t2.filter(t=>t.life>0||t.up>0);
    for(const b of g.balls){b.t+=dt*3.5;if(b.t>=1&&!b.done){b.done=1;for(const t of g.t2)if(t.up>.5&&Math.abs(b.tx-t.x)<24&&b.ty>200-t.up*60&&b.ty<230){t.life=0;if(t.dog){g.score=Math.max(0,g.score-3);A.beep(120,.2);}else{g.score++;A.beep(900,.05);}}}}
    g.balls=g.balls.filter(b=>b.t<1.2);},
  draw(g){A.bg('#a8c8e8');c.fillStyle='#fff';c.fillRect(0,230,480,130);
    for(const t of g.t2){const y=230-t.up*60;if(t.dog){A.block(t.x-18,y+10,36,'#a1887f',24);c.fillStyle='#000';c.fillRect(t.x-10,y+16,4,4);c.fillRect(t.x+6,y+16,4,4);c.fillStyle='#6d4c41';c.fillRect(t.x-20,y+6,8,10);c.fillRect(t.x+12,y+6,8,10);}
      else{A.block(t.x-18,y+20,36,'#fff',30);A.block(t.x-13,y,26,'#fff',22);c.fillStyle='#000';c.fillRect(t.x-7,y+6,4,4);c.fillRect(t.x+3,y+6,4,4);c.fillStyle='#ff8c1a';c.fillRect(t.x-2,y+11,8,3);}}
    for(let i=0;i<5;i++)A.block(30+i*90,226,60,'#dfe9f5',30);
    for(const b of g.balls){const t=Math.min(1,b.t),x=b.x+(b.tx-b.x)*t,y=b.y+(b.ty-b.y)*t-Math.sin(t*Math.PI)*60,s=14-t*6;c.fillStyle='#fff';c.fillRect(x-s/2,y-s/2,s,s);c.strokeStyle='#99b';c.strokeRect(x-s/2,y-s/2,s,s);}
    A.txt('⏱ '+Math.ceil(g.time)+'   Топки: '+(g.rel>0?'презареждане...':'⚪'.repeat(g.ammo)),10,14,14,'#123');}
});
