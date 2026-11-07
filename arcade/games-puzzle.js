// ===== 🧩 ПЪЗЕЛИ =====

// 11. Тримино — падащи фигури от по 3 блока
A.add({id:'trimino',cat:'puzzle',icon:'🟫',name:'Тримино',desc:'Нареди падащите тройки',help:'← → местене, ↑ завъртане, ↓ по-бързо, Space — пусни. Пълен ред изчезва.',
  start(g){g.b=[];for(let y=0;y<16;y++)g.b.push(Array(8).fill(null));g.next=this.rnd();this.spawn(g);g.fall=0;g.lines=0;},
  rnd(){const sh=A.pick([[[0,0],[1,0],[2,0]],[[0,0],[1,0],[0,1]],[[0,0],[1,1],[1,0]],[[0,0],[0,1],[1,1]]]);return {s:sh.map(p=>p.slice()),col:A.pick([C.red,C.gold,C.grass,C.water,C.purple,C.iron])};},
  spawn(g){g.p=g.next;g.next=this.rnd();g.px=3;g.py=0;if(!this.fits(g,g.p.s,g.px,g.py))A.over(g,'Няма място!');},
  fits(g,s,px,py){return s.every(([x,y])=>{const X=px+x,Y=py+y;return X>=0&&X<8&&Y<16&&(Y<0||!g.b[Y][X]);});},
  key(g,k){const p=g.p;if(!p)return;
    if(k==='ArrowLeft'||k==='KeyA'){if(this.fits(g,p.s,g.px-1,g.py))g.px--;}
    if(k==='ArrowRight'||k==='KeyD'){if(this.fits(g,p.s,g.px+1,g.py))g.px++;}
    if(k==='ArrowUp'||k==='KeyW'){const r=p.s.map(([x,y])=>[1-y,x]);const mx=Math.min(...r.map(q=>q[0])),my=Math.min(...r.map(q=>q[1]));const n=r.map(([x,y])=>[x-mx,y-my]);
      for(const dx of[0,-1,1])if(this.fits(g,n,g.px+dx,g.py)){p.s=n;g.px+=dx;A.beep(500,.03);break;}}
    if(k==='Space'){while(this.fits(g,p.s,g.px,g.py+1))g.py++;this.lock(g);}},
  repeat:true,
  lock(g){for(const[x,y]of g.p.s)if(g.py+y>=0)g.b[g.py+y][g.px+x]=g.p.col;
    let n=0;for(let y=15;y>=0;y--)if(g.b[y].every(v=>v)){g.b.splice(y,1);g.b.unshift(Array(8).fill(null));n++;y++;}
    if(n){g.score+=10*n*n;g.lines+=n;A.tune([660,880,1100].slice(0,n));}else A.beep(200,.04);this.spawn(g);},
  update(g,dt){g.fall+=dt*(A.keys.ArrowDown||A.keys.KeyS?12:1);if(g.fall>Math.max(.12,.6-g.lines*.02)){g.fall=0;if(this.fits(g,g.p.s,g.px,g.py+1))g.py++;else this.lock(g);}},
  draw(g){A.bg('#1d1a24');c.fillStyle='#000';c.fillRect(156,16,168,328);
    for(let y=0;y<16;y++)for(let x=0;x<8;x++){if(g.b[y][x])A.block(160+x*20,20+y*20,20,g.b[y][x]);else{c.fillStyle='#24202c';c.fillRect(161+x*20,21+y*20,18,18);}}
    if(g.p)for(const[x,y]of g.p.s)A.block(160+(g.px+x)*20,20+(g.py+y)*20,20,g.p.col);
    A.txt('Следваща:',340,40,14);for(const[x,y]of g.next.s)A.block(350+x*20,60+y*20,20,g.next.col);A.txt('Редове: '+g.lines,340,140,14);}
});

// 12. Три в ред
A.add({id:'match3',cat:'puzzle',icon:'💎',name:'Три в ред',desc:'Размествай скъпоценности',unit:'',help:'Кликни камък, после съседен — разменят се. Направи 3+ еднакви в ред. Имаш 90 секунди.',
  start(g){g.N=8;g.sel=null;do{g.b=[];for(let i=0;i<64;i++)g.b.push(A.ri(0,5));}while(this.find(g).size);g.time=90;g.anim=0;},
  cols:[C.red,C.gold,C.grass,C.water,C.purple,C.white],
  find(g){const m=new Set();for(let y=0;y<8;y++)for(let x=0;x<8;x++){const v=g.b[y*8+x];if(v<0)continue;
    if(x<6&&g.b[y*8+x+1]===v&&g.b[y*8+x+2]===v)[0,1,2].forEach(i=>m.add(y*8+x+i));
    if(y<6&&g.b[(y+1)*8+x]===v&&g.b[(y+2)*8+x]===v)[0,1,2].forEach(i=>m.add((y+i)*8+x));}return m;},
  resolve(g){let combo=0;for(;;){const m=this.find(g);if(!m.size)break;combo++;g.score+=m.size*10*combo;A.beep(500+combo*150,.06);
    for(const i of m)g.b[i]=-1;
    for(let x=0;x<8;x++){const col=[];for(let y=7;y>=0;y--)if(g.b[y*8+x]>=0)col.push(g.b[y*8+x]);for(let y=7;y>=0;y--){const v=col[7-y];g.b[y*8+x]=v===undefined?A.ri(0,5):v;}}}},
  click(g,mx,my){const x=Math.floor((mx-80)/40),y=Math.floor((my-20)/40);if(x<0||y<0||x>7||y>7)return;const i=y*8+x;
    if(g.sel===null){g.sel=i;return;}
    const s=g.sel,sx=s%8,sy=Math.floor(s/8);g.sel=null;if(Math.abs(sx-x)+Math.abs(sy-y)!==1){g.sel=i;return;}
    [g.b[s],g.b[i]]=[g.b[i],g.b[s]];if(!this.find(g).size){[g.b[s],g.b[i]]=[g.b[i],g.b[s]];A.beep(150,.08);return;}this.resolve(g);},
  update(g,dt){g.time-=dt;if(g.time<=0)A.over(g,'Времето изтече!');},
  draw(g){A.bg('#20182c');for(let i=0;i<64;i++){const x=80+(i%8)*40,y=20+Math.floor(i/8)*40;c.fillStyle=(i+Math.floor(i/8))%2?'#2b2238':'#30263f';c.fillRect(x,y,40,40);
      const col=this.cols[g.b[i]];c.fillStyle=col;c.beginPath();c.moveTo(x+20,y+5);c.lineTo(x+35,y+20);c.lineTo(x+20,y+35);c.lineTo(x+5,y+20);c.fill();c.fillStyle='rgba(255,255,255,.5)';c.fillRect(x+15,y+13,5,5);
      if(g.sel===i){c.strokeStyle='#fff';c.lineWidth=3;c.strokeRect(x+2,y+2,36,36);}}
    A.txt('⏱ '+Math.ceil(g.time),410,40,18,g.time<10?'#f66':'#fff');}
});

// 13. Сапьор с динамит
A.add({id:'sapper',cat:'puzzle',icon:'💣',name:'Сапьор',desc:'Намери всички безопасни блокове',low:true,unit:' с',help:'Ляв клик — разкопай. Десен клик — флагче. Числото показва колко динамита има около блока.',
  start(g){g.W=12;g.H=9;g.cells=[];for(let i=0;i<108;i++)g.cells.push({m:0,o:0,f:0,n:0});g.first=true;g.done=false;},
  idx(x,y){return y*12+x;},
  nb(x,y,f){for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const X=x+dx,Y=y+dy;if((dx||dy)&&X>=0&&Y>=0&&X<12&&Y<9)f(X,Y);}},
  click(g,mx,my,b){const x=Math.floor((mx-24)/36),y=Math.floor((my-30)/36);if(x<0||y<0||x>11||y>8)return;const cell=g.cells[this.idx(x,y)];
    if(b===2){if(!cell.o){cell.f^=1;A.beep(300,.03);}return;}
    if(cell.f||cell.o)return;
    if(g.first){g.first=false;let n=0;while(n<16){const X=A.ri(0,11),Y=A.ri(0,8);if(Math.abs(X-x)<=1&&Math.abs(Y-y)<=1)continue;const q=g.cells[this.idx(X,Y)];if(!q.m){q.m=1;n++;}}
      for(let Y=0;Y<9;Y++)for(let X=0;X<12;X++){let n=0;this.nb(X,Y,(a,b)=>{n+=g.cells[this.idx(a,b)].m;});g.cells[this.idx(X,Y)].n=n;}}
    if(cell.m){cell.o=1;g.cells.forEach(q=>{if(q.m)q.o=1;});g.score=0;A.beep(80,.4,'sawtooth');return A.over(g,'БУМ! 💥');}
    const open=(X,Y)=>{const q=g.cells[this.idx(X,Y)];if(q.o||q.f)return;q.o=1;if(!q.n)this.nb(X,Y,open);};open(x,y);A.beep(600,.03);
    if(g.cells.every(q=>q.m||q.o)){g.score=g.t;A.tune([523,659,784,1046]);A.over(g,'🏆 Разчисти всичко!');}},
  update(g){if(!g.first)g.score=g.t;},
  draw(g){A.bg('#2a3a20');g.cells.forEach((q,i)=>{const x=24+(i%12)*36,y=30+Math.floor(i/12)*36;
      if(!q.o){A.block(x,y,36,C.grass);if(q.f){c.fillStyle='#e33';c.fillRect(x+14,y+8,12,9);c.fillStyle='#222';c.fillRect(x+12,y+8,3,20);}}
      else{A.block(x,y,36,q.m?'#c62828':C.dirt);if(q.m){c.fillStyle='#fff';c.fillRect(x+8,y+15,20,6);}
        else if(q.n)A.txt(q.n,x+18,y+19,18,['','#4fc3f7','#9ccc65','#ffb74d','#e57373','#ba68c8','#ff8a65','#fff','#fff'][q.n],'center');}});
    A.txt('💣 16   ⏱ '+(g.first?0:g.t).toFixed(0),24,15,14);}
});

// 14. Памет
A.add({id:'memory',cat:'puzzle',icon:'🃏',name:'Памет',desc:'Намери двойките блокове',low:true,unit:' хода',help:'Обръщай по 2 карти. Ако са еднакви — остават. Намери всичките 8 двойки с възможно най-малко ходове.',
  start(g){const t=['grass','dirt','stone','wood','gold','gem','ruby','water'];g.cards=A.shuffle(t.concat(t)).map(k=>({k,o:0,d:0}));g.open=[];g.wait=0;g.moves=0;},
  click(g,mx,my){if(g.wait>0)return;const x=Math.floor((mx-90)/76),y=Math.floor((my-20)/82);if(x<0||y<0||x>3||y>3)return;const cd=g.cards[y*4+x];if(cd.o||cd.d)return;
    cd.o=1;g.open.push(cd);A.beep(500,.04);if(g.open.length===2){g.moves++;g.score=g.moves;
      if(g.open[0].k===g.open[1].k){g.open.forEach(q=>q.d=1);g.open=[];A.beep(900,.1);if(g.cards.every(q=>q.d))A.over(g,'🏆 Всички двойки!');}else g.wait=.8;}},
  update(g,dt){if(g.wait>0){g.wait-=dt;if(g.wait<=0){g.open.forEach(q=>q.o=0);g.open=[];}}},
  draw(g){A.bg('#1f2a3d');g.cards.forEach((q,i)=>{const x=90+(i%4)*76,y=20+Math.floor(i/4)*82;
      if(q.o||q.d){c.fillStyle='#dbe6f5';c.fillRect(x,y,70,76);A.block(x+15,y+18,40,C[q.k]);if(q.d){c.strokeStyle='#9ccc65';c.lineWidth=3;c.strokeRect(x+2,y+2,66,72);}}
      else{A.block(x,y,70,'#5a6b8c',76);A.txt('?',x+35,y+38,28,'#dbe6f5','center');}});
    A.txt('Ходове: '+g.moves,420,30,14,'#fff');}
});

// 15. Плъзгащ пъзел
A.add({id:'slide15',cat:'puzzle',icon:'🔢',name:'Плъзгащ пъзел',desc:'Подреди от 1 до 15',low:true,unit:' хода',help:'Кликни плочка до празното място или ползвай стрелките. Подреди числата 1–15.',
  start(g){g.t15=[...Array(15).keys()].map(i=>i+1).concat(0);g.moves=0;for(let i=0;i<300;i++)this.mv(g,A.pick([[1,0],[-1,0],[0,1],[0,-1]]),true);},
  mv(g,[dx,dy],silent){const e=g.t15.indexOf(0),ex=e%4,ey=Math.floor(e/4),x=ex-dx,y=ey-dy;if(x<0||y<0||x>3||y>3)return;
    const j=y*4+x;g.t15[e]=g.t15[j];g.t15[j]=0;if(!silent){g.moves++;g.score=g.moves;A.beep(400,.03);if(g.t15.every((v,i)=>v===(i+1)%16))A.over(g,'🏆 Подредено!');}},
  key(g,k){const m={ArrowLeft:[-1,0],KeyA:[-1,0],ArrowRight:[1,0],KeyD:[1,0],ArrowUp:[0,-1],KeyW:[0,-1],ArrowDown:[0,1],KeyS:[0,1]}[k];if(m)this.mv(g,m);},
  click(g,mx,my){const x=Math.floor((mx-100)/70),y=Math.floor((my-40)/70);if(x<0||y<0||x>3||y>3)return;const e=g.t15.indexOf(0),ex=e%4,ey=Math.floor(e/4);
    if(Math.abs(ex-x)+Math.abs(ey-y)===1)this.mv(g,[x-ex,y-ey]);},
  draw(g){A.bg('#2a2018');g.t15.forEach((v,i)=>{if(!v)return;const x=100+(i%4)*70,y=40+Math.floor(i/4)*70;A.block(x+2,y+2,66,v===i+1?C.grass:C.wood);A.txt(v,x+35,y+36,26,'#fff','center');});
    A.txt('Ходове: '+g.moves,400,60,14);}
});

// 16. Изгаси факлите
A.add({id:'lightsout',cat:'puzzle',icon:'🔦',name:'Изгаси факлите',desc:'Загаси всички факли',help:'Клик върху блок превключва него и 4-те му съседа. Загаси всичко! Имаш 3 минути за колкото може повече нива.',
  start(g){g.lv=0;g.time=180;this.level(g);},
  level(g){g.lv++;g.L=Array(25).fill(0);for(let i=0;i<2+g.lv;i++)this.tog(g,A.ri(0,4),A.ri(0,4));if(g.L.every(v=>!v))this.tog(g,2,2);},
  tog(g,x,y){for(const[dx,dy]of[[0,0],[1,0],[-1,0],[0,1],[0,-1]]){const X=x+dx,Y=y+dy;if(X>=0&&Y>=0&&X<5&&Y<5)g.L[Y*5+X]^=1;}},
  click(g,mx,my){const x=Math.floor((mx-115)/50),y=Math.floor((my-50)/50);if(x<0||y<0||x>4||y>4)return;this.tog(g,x,y);A.beep(400,.03);
    if(g.L.every(v=>!v)){g.score++;A.tune([660,880]);this.level(g);}},
  update(g,dt){g.time-=dt;if(g.time<=0)A.over(g,'Времето изтече!');},
  draw(g){A.bg('#14101c');g.L.forEach((v,i)=>{const x=115+(i%5)*50,y=50+Math.floor(i/5)*50;A.block(x+2,y+2,46,v?'#ffb300':'#3a3344');if(v){c.fillStyle='#fff8b0';c.fillRect(x+20,y+12,8,14);}});
    A.txt('Ниво '+g.lv+'   ⏱ '+Math.ceil(g.time),240,25,16,'#fff','center');}
});

// 17. Бутай сандъците
A.add({id:'pushbox',cat:'puzzle',icon:'📦',name:'Бутай сандъците',desc:'Сложи сандъците на местата им',help:'Стрелки — движи се и бутай. Сложи всеки сандък на жълто поле. R — започни нивото отначало.',
  levels:[
    ['#####','#@ .#','# $ #','#   #','#####'],
    ['######','#    #','# $$ #','#.@ .#','######'],
    ['#######','#.  $ #','# #   #','#. @$ #','#######'],
    ['########','#  .   #','# #$#  #','#  @ $.#','# .$ # #','#      #','########'],
    ['  ####','###  #','#.$  #','#.$@ #','#.$  #','######'],
    ['  #####','###   #','#.@$  #','### $.#','#.##$ #','# # . ##','#$ *$$.#','#   .  #','########']
  ],
  start(g){g.lv=0;this.load(g);},
  load(g){const L=this.levels[g.lv];g.w=[];g.goal=[];g.box=[];L.forEach((row,y)=>[...row].forEach((ch,x)=>{
      if(ch==='#')g.w.push(x+','+y);if('.*+'.includes(ch))g.goal.push(x+','+y);if('$*'.includes(ch))g.box.push(x+','+y);if('@+'.includes(ch)){g.px=x;g.py=y;}}));
    g.H=L.length;g.Wd=Math.max(...L.map(r=>r.length));g.T=Math.min(40,Math.floor(Math.min(440/g.Wd,320/g.H)));},
  key(g,k){if(k==='KeyR'){this.load(g);return;}
    const m={ArrowLeft:[-1,0],KeyA:[-1,0],ArrowRight:[1,0],KeyD:[1,0],ArrowUp:[0,-1],KeyW:[0,-1],ArrowDown:[0,1],KeyS:[0,1]}[k];if(!m)return;
    const nx=g.px+m[0],ny=g.py+m[1],K=nx+','+ny;if(g.w.includes(K))return;
    const bi=g.box.indexOf(K);if(bi>=0){const K2=(nx+m[0])+','+(ny+m[1]);if(g.w.includes(K2)||g.box.includes(K2))return;g.box[bi]=K2;A.beep(200,.05);}
    g.px=nx;g.py=ny;
    if(g.box.every(b=>g.goal.includes(b))){g.score++;A.tune([523,659,784]);g.lv++;if(g.lv>=this.levels.length)return A.over(g,'🏆 Всички нива!');this.load(g);}},
  draw(g){A.bg('#2a2420');const T=g.T,ox=(480-g.Wd*T)/2,oy=(360-g.H*T)/2+10;
    for(let y=0;y<g.H;y++)for(let x=0;x<g.Wd;x++){const K=x+','+y;if(g.w.includes(K))A.block(ox+x*T,oy+y*T,T,C.stone);else{c.fillStyle='#3a322b';c.fillRect(ox+x*T,oy+y*T,T,T);}
      if(g.goal.includes(K)){c.fillStyle=C.gold;c.fillRect(ox+x*T+T*.3,oy+y*T+T*.3,T*.4,T*.4);}}
    for(const b of g.box){const[x,y]=b.split(',').map(Number);A.block(ox+x*T+2,oy+y*T+2,T-4,g.goal.includes(b)?'#c9a64a':C.wood);c.fillStyle='rgba(0,0,0,.35)';c.fillRect(ox+x*T+T/2-2,oy+y*T+2,4,T-4);}
    A.block(ox+g.px*T+T*.2,oy+g.py*T+T*.15,T*.6,'#3b7bd6',T*.7);c.fillStyle='#f1c27d';c.fillRect(ox+g.px*T+T*.25,oy+g.py*T+T*.15,T*.5,T*.25);
    A.txt('Ниво '+(g.lv+1)+'/'+this.levels.length+'  ·  R = отначало',240,14,14,'#fff','center');}
});

// 18. Лабиринт
A.add({id:'maze',cat:'puzzle',icon:'🌀',name:'Лабиринт',desc:'Бягай от лабиринтите',help:'Стрелки / WASD — движи се до зеления изход. Всеки решен лабиринт дава +10 секунди.',
  start(g){g.lv=0;g.time=45;this.level(g);},
  level(g){g.lv++;const n=Math.min(17,5+g.lv*2);g.n=n;g.walls=[];for(let i=0;i<n*n;i++)g.walls.push([1,1,1,1]);// горе,дясно,долу,ляво
    const vis=new Set([0]),st=[0];while(st.length){const cur=st[st.length-1],x=cur%n,y=Math.floor(cur/n);
      const opts=[[0,-1,0,2],[1,0,1,3],[0,1,2,0],[-1,0,3,1]].filter(([dx,dy])=>{const X=x+dx,Y=y+dy;return X>=0&&Y>=0&&X<n&&Y<n&&!vis.has(Y*n+X);});
      if(!opts.length){st.pop();continue;}const[dx,dy,w1,w2]=A.pick(opts),nx=(y+dy)*n+x+dx;g.walls[cur][w1]=0;g.walls[nx][w2]=0;vis.add(nx);st.push(nx);}
    g.px=0;g.py=0;g.T=Math.floor(330/n);},
  key(g,k){const m={ArrowUp:[0,-1,0],KeyW:[0,-1,0],ArrowRight:[1,0,1],KeyD:[1,0,1],ArrowDown:[0,1,2],KeyS:[0,1,2],ArrowLeft:[-1,0,3],KeyA:[-1,0,3]}[k];if(!m)return;
    if(g.walls[g.py*g.n+g.px][m[2]])return;g.px+=m[0];g.py+=m[1];
    if(g.px===g.n-1&&g.py===g.n-1){g.score++;g.time+=10;A.tune([660,880]);this.level(g);}},
  repeat:true,
  update(g,dt){g.time-=dt;if(g.time<=0)A.over(g,'Времето изтече!');},
  draw(g){A.bg('#1b1b1b');const T=g.T,ox=(480-g.n*T)/2,oy=(360-g.n*T)/2+8;c.fillStyle='#3a5a2a';c.fillRect(ox,oy,g.n*T,g.n*T);
    c.fillStyle=C.grass;c.fillRect(ox+(g.n-1)*T+2,oy+(g.n-1)*T+2,T-4,T-4);c.fillStyle='#ddd';
    g.walls.forEach((w,i)=>{const x=ox+(i%g.n)*T,y=oy+Math.floor(i/g.n)*T;if(w[0])c.fillRect(x,y,T+2,2);if(w[1])c.fillRect(x+T,y,2,T+2);if(w[2])c.fillRect(x,y+T,T+2,2);if(w[3])c.fillRect(x,y,2,T+2);});
    A.block(ox+g.px*T+T*.2,oy+g.py*T+T*.2,T*.6,'#3b7bd6');A.txt('Ниво '+g.lv+'  ⏱ '+Math.ceil(g.time),240,10,14,'#fff','center');}
});

// 19. Наводнение
A.add({id:'flood',cat:'puzzle',icon:'🌊',name:'Наводнение',desc:'Залей всичко с един цвят',help:'Избери цвят отдолу (или клавиши 1–6). Водата от горния ляв ъгъл поглъща съседите със същия цвят. Залей всичко за най-много 22 хода!',
  cols:[C.red,C.gold,C.grass,C.water,C.purple,C.white],
  start(g){g.b=[];for(let i=0;i<144;i++)g.b.push(A.ri(0,5));g.moves=0;},
  pickc(g,col){if(col===g.b[0])return;const old=g.b[0],st=[0],seen=new Set([0]);
    while(st.length){const i=st.pop();g.b[i]=col;const x=i%12,y=Math.floor(i/12);for(const[dx,dy]of[[1,0],[-1,0],[0,1],[0,-1]]){const X=x+dx,Y=y+dy,j=Y*12+X;if(X>=0&&Y>=0&&X<12&&Y<12&&!seen.has(j)&&g.b[j]===old){seen.add(j);st.push(j);}}}
    g.moves++;A.beep(300+col*80,.05);
    if(g.b.every(v=>v===col)){g.score=(23-g.moves)*10;A.tune([523,659,784,1046]);A.over(g,'🏆 Готово за '+g.moves+' хода!');}else if(g.moves>=22){g.score=0;A.over(g,'Свършиха ходовете');}},
  key(g,k,ch){const n=+ch;if(n>=1&&n<=6)this.pickc(g,n-1);},
  click(g,mx,my){if(my>320&&my<352){const i=Math.floor((mx-90)/50);if(i>=0&&i<6)this.pickc(g,i);}},
  draw(g){A.bg('#14202c');g.b.forEach((v,i)=>{c.fillStyle=this.cols[v];c.fillRect(130+(i%12)*25,8+Math.floor(i/12)*25,25,25);});
    this.cols.forEach((col,i)=>{A.block(90+i*50+5,322,40,col,28);A.txt(i+1,110+i*50,336,12,'#000','center');});A.txt('Ходове: '+g.moves+'/22',20,20,14);}
});

// 20. Сборни блокове
A.add({id:'collapse',cat:'puzzle',icon:'🧊',name:'Сборни блокове',desc:'Махай групи еднакви блокове',help:'Кликни група от 2+ еднакви съседни блока. По-големите групи дават много повече точки (n-1)². Играта свършва, когато няма ходове.',
  start(g){g.b=[];for(let x=0;x<15;x++){const col=[];for(let y=0;y<10;y++)col.push(A.ri(0,3));g.b.push(col);}},
  cols:[C.red,C.gold,C.grass,C.water],
  group(g,x,y){const v=g.b[x]&&g.b[x][y];if(v===undefined||v===null)return[];const out=[],seen=new Set([x+','+y]),st=[[x,y]];
    while(st.length){const[a,b]=st.pop();out.push([a,b]);for(const[dx,dy]of[[1,0],[-1,0],[0,1],[0,-1]]){const X=a+dx,Y=b+dy,K=X+','+Y;if(!seen.has(K)&&g.b[X]&&g.b[X][Y]===v){seen.add(K);st.push([X,Y]);}}}return out;},
  click(g,mx,my){const x=Math.floor(mx/32),y=Math.floor((340-my)/32);const gr=this.group(g,x,y);if(gr.length<2)return;
    for(const[a,b]of gr)g.b[a][b]=null;g.b=g.b.map(col=>col.filter(v=>v!==null)).filter(col=>col.length);
    g.score+=(gr.length-1)**2;A.beep(300+gr.length*30,.06);
    let any=false;for(let x=0;x<g.b.length&&!any;x++)for(let y=0;y<g.b[x].length&&!any;y++)if(this.group(g,x,y).length>1)any=true;
    if(!any){if(!g.b.length){g.score+=500;A.over(g,'🏆 Изчисти всичко! +500');}else A.over(g,'Няма повече ходове');}},
  draw(g){A.bg('#181d26');g.b.forEach((col,x)=>col.forEach((v,y)=>A.block(x*32,340-(y+1)*32,32,this.cols[v])));A.txt('Блокове: '+g.b.reduce((a,c)=>a+c.length,0),8,14,14);}
});
