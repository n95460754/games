// ===== ♟️ НАСТОЛНИ И ПЯСЪЧНИК =====

// 41. Морски шах
A.add({id:'tictactoe',cat:'board',icon:'❌',name:'Морски шах',desc:'Три в ред срещу робота',help:'Кликни празно поле (или 1–9). Ти си синият блок. Всяка победа = точка, загуба = край. Равенство — играете пак.',
  L:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
  start(g){g.b=Array(9).fill(0);g.msg='';g.wait=0;},
  win(b){for(const[a,c2,d]of this.L)if(b[a]&&b[a]===b[c2]&&b[a]===b[d])return b[a];return b.every(v=>v)?3:0;},
  mm(b,p){const w=this.win(b);if(w===2)return 10;if(w===1)return-10;if(w===3)return 0;let best=p===2?-99:99;
    for(let i=0;i<9;i++)if(!b[i]){b[i]=p;const s=this.mm(b,3-p);b[i]=0;best=p===2?Math.max(best,s):Math.min(best,s);}return best;},
  ai(g){const free=g.b.map((v,i)=>v?-1:i).filter(i=>i>=0);let mv;
    if(Math.random()<.25)mv=A.pick(free);else{let bs=-99;for(const i of free){g.b[i]=2;const s=this.mm(g.b,1);g.b[i]=0;if(s>bs){bs=s;mv=i;}}}
    g.b[mv]=2;A.beep(300,.05);this.check(g);},
  check(g){const w=this.win(g.b);if(!w)return false;
    if(w===1){g.score++;g.msg='Победа! 🎉';A.tune([660,880]);g.wait=1.2;}else if(w===2){A.over(g,'Роботът победи');}else{g.msg='Равенство';g.wait=1.2;}return true;},
  put(g,i){if(g.wait>0||g.b[i])return;g.b[i]=1;A.beep(600,.05);if(!this.check(g))this.ai(g);},
  click(g,mx,my){const x=Math.floor((mx-120)/80),y=Math.floor((my-60)/80);if(x>=0&&y>=0&&x<3&&y<3)this.put(g,y*3+x);},
  key(g,k,ch){const n=+ch;if(n>=1&&n<=9)this.put(g,n-1);},
  update(g,dt){if(g.wait>0){g.wait-=dt;if(g.wait<=0){g.b.fill(0);g.msg='';if(Math.random()<.5)this.ai(g);}}},
  draw(g){A.bg('#1f2a3d');for(let i=0;i<9;i++){const x=120+(i%3)*80,y=60+Math.floor(i/3)*80;c.fillStyle='#2b3646';c.fillRect(x+3,y+3,74,74);
      if(g.b[i])A.block(x+14,y+14,52,g.b[i]===1?'#3b7bd6':C.red);}A.txt(g.msg||'Ти си 🟦',240,30,18,'#ffd54f','center');}
});

// 42. Четири в ред
A.add({id:'connect4',cat:'board',icon:'🔴',name:'Четири в ред',desc:'Пусни 4 в линия',help:'Кликни колона (или 1–7), за да пуснеш блок. Наредѝ 4 в ред преди робота. Победа = точка.',
  start(g){g.b=[];for(let i=0;i<7;i++)g.b.push([]);g.msg='';g.wait=0;},
  won(b,p){const at=(x,y)=>b[x]&&b[x][y];for(let x=0;x<7;x++)for(let y=0;y<6;y++)if(at(x,y)===p)for(const[dx,dy]of[[1,0],[0,1],[1,1],[1,-1]]){let k=1;while(k<4&&at(x+dx*k,y+dy*k)===p)k++;if(k===4)return true;}return false;},
  drop(g,x,p){if(g.b[x].length>=6)return false;g.b[x].push(p);return true;},
  ai(g){const ok=[0,1,2,3,4,5,6].filter(x=>g.b[x].length<6);if(!ok.length)return;
    const tryW=p=>ok.find(x=>{g.b[x].push(p);const w=this.won(g.b,p);g.b[x].pop();return w;});
    let mv=tryW(2);if(mv===undefined)mv=tryW(1);
    if(mv===undefined){const safe=ok.filter(x=>{g.b[x].push(2);let bad=false;if(g.b[x].length<6){g.b[x].push(1);bad=this.won(g.b,1);g.b[x].pop();}g.b[x].pop();return!bad;});
      const pool=safe.length?safe:ok;mv=pool.sort((a,b)=>Math.abs(a-3)-Math.abs(b-3)+A.rnd(-1.5,1.5))[0];}
    this.drop(g,mv,2);A.beep(300,.05);if(this.won(g.b,2))A.over(g,'Роботът нареди 4!');else if(g.b.every(c2=>c2.length>=6)){g.msg='Равенство';g.wait=1.2;}},
  put(g,x){if(g.wait>0||A.state!=='play')return;if(!this.drop(g,x,1))return;A.beep(600,.05);
    if(this.won(g.b,1)){g.score++;g.msg='Победа! 🎉';A.tune([660,880]);g.wait=1.5;return;}this.ai(g);},
  click(g,mx){const x=Math.floor((mx-100)/40);if(x>=0&&x<7)this.put(g,x);},
  key(g,k,ch){const n=+ch;if(n>=1&&n<=7)this.put(g,n-1);},
  update(g,dt){if(g.wait>0){g.wait-=dt;if(g.wait<=0){g.b.forEach(c2=>c2.length=0);g.msg='';}}},
  draw(g){A.bg('#14202c');A.block(96,96,288,'#3b5bd6',248);for(let x=0;x<7;x++)for(let y=0;y<6;y++){const v=g.b[x][y],px=104+x*40,py=304-y*40;
      if(v)A.block(px,py,32,v===1?C.gold:C.red);else{c.fillStyle='#0b1220';c.fillRect(px+2,py+2,28,28);}}
    const hx=Math.floor((A.mouse.x-100)/40);if(hx>=0&&hx<7){c.fillStyle='rgba(255,213,79,.6)';c.fillRect(104+hx*40,70,32,16);}A.txt(g.msg||'Ти си 🟨',240,30,18,'#ffd54f','center');}
});

// 43. Ним
A.add({id:'nim',cat:'board',icon:'🪨',name:'Ним',desc:'Вземи последния блок',help:'Кликни блок — взимаш го заедно с всички над него в същата купчина. Който вземе ПОСЛЕДНИЯ блок, печели. Тайната е в двоичното XOR!',
  start(g){this.deal(g);},
  deal(g){g.p=[A.ri(1,4),A.ri(2,6),A.ri(3,7)];g.msg='Твой ход';g.wait=0;g.turn=1;},
  take(g,i,n){g.p[i]-=n;A.beep(g.turn===1?600:300,.05);
    if(g.p.every(v=>!v)){if(g.turn===1){g.score++;g.msg='Победа! 🎉';A.tune([660,880]);g.wait=1.5;g.turn=0;}else A.over(g,'Роботът взе последния');return;}
    g.turn=3-g.turn;if(g.turn===2){g.ai=.8;g.msg='Роботът мисли...';}else g.msg='Твой ход';},
  click(g,mx,my){if(g.turn!==1)return;const i=Math.floor((mx-90)/110);if(i<0||i>2)return;const h=Math.floor((330-my)/34);if(h<0||h>=g.p[i])return;this.take(g,i,g.p[i]-h);},
  update(g,dt){if(g.wait>0){g.wait-=dt;if(g.wait<=0)this.deal(g);return;}
    if(g.turn===2){g.ai-=dt;if(g.ai>0)return;const x=g.p[0]^g.p[1]^g.p[2];let mv=null;
      if(x&&Math.random()>.15)for(let i=0;i<3;i++){const t=g.p[i]^x;if(t<g.p[i]){mv=[i,g.p[i]-t];break;}}
      if(!mv){const nz=[0,1,2].filter(i=>g.p[i]);const i=A.pick(nz);mv=[i,A.ri(1,g.p[i])];}this.take(g,mv[0],mv[1]);}},
  draw(g){A.bg('#2a2018');g.p.forEach((n,i)=>{for(let h=0;h<n;h++){const hov=g.turn===1&&Math.floor((A.mouse.x-90)/110)===i&&Math.floor((330-A.mouse.y)/34)<=h;A.block(90+i*110+15,300-h*34,70,hov?'#ffb74d':C.stone,32);}A.txt(n,90+i*110+50,345,16,'#bbb','center');});
    A.txt(g.msg,240,24,18,'#ffd54f','center');A.txt('XOR = '+(g.p[0]^g.p[1]^g.p[2]),470,24,12,'#776','right');}
});

// 44. Обърни блоковете
A.add({id:'flipper',cat:'board',icon:'⚫',name:'Обърни блоковете',desc:'Обграждай и обръщай',help:'Сложи своя (бял) блок така, че да обградиш черни блокове в линия — те стават бели. Накрая печели който има повече.',
  start(g){g.b=Array(64).fill(0);g.b[27]=g.b[36]=1;g.b[28]=g.b[35]=2;g.turn=1;g.ai=0;},
  flips(g,i,p){if(g.b[i])return[];const x=i%8,y=Math.floor(i/8),out=[];
    for(const[dx,dy]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const line=[];let X=x+dx,Y=y+dy;
      while(X>=0&&Y>=0&&X<8&&Y<8&&g.b[Y*8+X]===3-p){line.push(Y*8+X);X+=dx;Y+=dy;}
      if(line.length&&X>=0&&Y>=0&&X<8&&Y<8&&g.b[Y*8+X]===p)out.push(...line);}return out;},
  moves(g,p){const m=[];for(let i=0;i<64;i++){const f=this.flips(g,i,p);if(f.length)m.push([i,f]);}return m;},
  play(g,i,f,p){g.b[i]=p;for(const j of f)g.b[j]=p;A.beep(p===1?600:300,.05);g.score=g.b.filter(v=>v===1).length;},
  next(g){const me=this.moves(g,1).length,ai=this.moves(g,2).length;if(!me&&!ai){const a=g.b.filter(v=>v===1).length,b=g.b.filter(v=>v===2).length;g.score=a;return A.over(g,a>b?'🏆 Победа '+a+':'+b:a<b?'Загуба '+a+':'+b:'Равенство '+a+':'+b);}
    if(g.turn===1&&!me)g.turn=2;else if(g.turn===2&&!ai)g.turn=1;if(g.turn===2)g.ai=.6;},
  click(g,mx,my){if(g.turn!==1)return;const x=Math.floor((mx-100)/35),y=Math.floor((my-40)/35);if(x<0||y<0||x>7||y>7)return;const f=this.flips(g,y*8+x,1);if(!f.length)return;this.play(g,y*8+x,f,1);g.turn=2;this.next(g);},
  update(g,dt){if(g.turn!==2)return;g.ai-=dt;if(g.ai>0)return;const m=this.moves(g,2);if(m.length){const corner=i=>[0,7,56,63].includes(i)?10:0,edge=i=>(i%8===0||i%8===7||i<8||i>55)?2:0;
      m.sort((a,b)=>(b[1].length+corner(b[0])+edge(b[0]))-(a[1].length+corner(a[0])+edge(a[0]))+A.rnd(-1,1));this.play(g,m[0][0],m[0][1],2);}g.turn=1;this.next(g);},
  draw(g){A.bg('#14301e');const hint=g.turn===1?new Set(this.moves(g,1).map(m=>m[0])):new Set();
    for(let i=0;i<64;i++){const x=100+(i%8)*35,y=40+Math.floor(i/8)*35;c.fillStyle='#2e7d32';c.fillRect(x+1,y+1,33,33);if(g.b[i])A.block(x+5,y+5,25,g.b[i]===1?'#eee':'#222');else if(hint.has(i)){c.fillStyle='rgba(255,255,255,.25)';c.fillRect(x+13,y+13,9,9);}}
    A.txt('⬜ '+g.b.filter(v=>v===1).length+'   ⬛ '+g.b.filter(v=>v===2).length+'   '+(g.turn===1?'Твой ход':'Роботът...'),240,20,15,'#fff','center');}
});

// 45. Пикселно платно
A.add({id:'paint',cat:'board',icon:'🎨',name:'Пикселно платно',desc:'Рисувай с блокчета',noScore:true,help:'Рисувай с мишката (влачи). Десен бутон трие. Избери цвят отдолу или 1–9. C изчиства.',
  pal:['#000','#fff','#d84a3a','#ff8c1a','#ffd23f','#5aa13a','#3b7bd6','#8e24aa','#7a5233','#7d7d7d','#4de8f5','#f1c27d'],
  start(g){g.px=Array(24*16).fill(null);g.col=2;},
  paint(g,x,y,b){if(y>=320){if(b===0){const i=Math.floor((x-6)/39);if(i>=0&&i<this.pal.length)g.col=i;}return;}const X=Math.floor(x/20),Y=Math.floor(y/20);if(X<0||Y<0||X>23||Y>15)return;g.px[Y*24+X]=b===2?null:this.pal[g.col];},
  click(g,x,y,b){g.btn=b;this.paint(g,x,y,b);},
  move(g,x,y){if(A.mouse.down)this.paint(g,x,y,g.btn||0);},
  key(g,k,ch){if(k==='KeyC')g.px.fill(null);const n=+ch;if(n>=1&&n<=9)g.col=n-1;},
  draw(g){A.bg('#ddd');for(let i=0;i<g.px.length;i++){const x=(i%24)*20,y=Math.floor(i/24)*20;if(g.px[i]){c.fillStyle=g.px[i];c.fillRect(x,y,20,20);}else{c.fillStyle=((i%24)+Math.floor(i/24))%2?'#eee':'#e4e4e4';c.fillRect(x,y,20,20);}}
    c.fillStyle='#333';c.fillRect(0,320,480,40);this.pal.forEach((p,i)=>{c.fillStyle=p;c.fillRect(6+i*39,326,33,28);if(i===g.col){c.strokeStyle='#ffd54f';c.lineWidth=3;c.strokeRect(5+i*39,325,35,30);}});}
});

// 46. Нонограм
A.add({id:'nonogram',cat:'board',icon:'🖼️',name:'Нонограм',desc:'Разкрий скритата картинка',help:'Числата показват колко поредни запълнени блока има в реда/колоната. Ляв клик — запълни, десен — сложи X. 4 минути за колкото може повече картинки.',
  start(g){g.time=240;this.make(g);},
  make(g){g.N=5+(g.score>2?1:0)+(g.score>5?1:0);const N=g.N;g.sol=[];for(let i=0;i<N*N;i++)g.sol.push(Math.random()<.55?1:0);g.cur=Array(N*N).fill(0);
    const runs=a=>{const r=[];let k=0;for(const v of a){if(v)k++;else if(k){r.push(k);k=0;}}if(k)r.push(k);return r.length?r:[0];};
    g.rows=[];g.cols=[];for(let y=0;y<N;y++)g.rows.push(runs(g.sol.slice(y*N,y*N+N)));for(let x=0;x<N;x++){const col=[];for(let y=0;y<N;y++)col.push(g.sol[y*N+x]);g.cols.push(runs(col));}g.runs=runs;g.T=Math.floor(240/N);},
  click(g,mx,my,b){const T=g.T,x=Math.floor((mx-200)/T),y=Math.floor((my-100)/T);if(x<0||y<0||x>=g.N||y>=g.N)return;const i=y*g.N+x;
    g.cur[i]=b===2?(g.cur[i]===2?0:2):(g.cur[i]===1?0:1);A.beep(400,.03);
    const N=g.N,ok=[...Array(N).keys()].every(r=>g.runs(g.cur.slice(r*N,r*N+N).map(v=>v===1)).join()===g.rows[r].join()&&g.runs([...Array(N).keys()].map(q=>g.cur[q*N+r]===1)).join()===g.cols[r].join());
    if(ok){g.score++;A.tune([523,659,784]);this.make(g);}},
  update(g,dt){g.time-=dt;if(g.time<=0)A.over(g,'Времето изтече!');},
  draw(g){A.bg('#f0e6d2');const T=g.T,N=g.N;
    for(let y=0;y<N;y++)A.txt(g.rows[y].join(' '),190,100+y*T+T/2,14,'#333','right');
    for(let x=0;x<N;x++)g.cols[x].forEach((v,k)=>A.txt(v,200+x*T+T/2,90-(g.cols[x].length-1-k)*16,14,'#333','center'));
    for(let i=0;i<N*N;i++){const x=200+(i%N)*T,y=100+Math.floor(i/N)*T;c.fillStyle='#fff';c.fillRect(x+1,y+1,T-2,T-2);if(g.cur[i]===1)A.block(x+1,y+1,T-2,'#3a3a3a');if(g.cur[i]===2)A.txt('×',x+T/2,y+T/2,T*.6,'#c33','center');}
    A.txt('⏱ '+Math.ceil(g.time),10,14,14,'#333');}
});

// 47. Мини судоку
A.add({id:'sudoku',cat:'board',icon:'🔢',name:'Мини судоку',desc:'Судоку 4×4',help:'Кликни празно поле и напиши 1–4. Всеки ред, колона и квадрат 2×2 трябва да има 1, 2, 3 и 4. 3 минути за колкото може повече.',
  start(g){g.time=180;this.make(g);},
  make(g){const base=[[1,2,3,4],[3,4,1,2],[2,1,4,3],[4,3,2,1]];const p=A.shuffle([1,2,3,4]);let s=base.map(r=>r.map(v=>p[v-1]));
    if(Math.random()<.5)s=s[0].map((_,i)=>s.map(r=>r[i]));if(Math.random()<.5)s=[s[1],s[0],s[2],s[3]];if(Math.random()<.5)s=s.map(r=>[r[1],r[0],r[2],r[3]]);
    g.sol=s.flat();g.fix=g.sol.map(()=>true);const holes=A.shuffle([...Array(16).keys()]).slice(0,Math.min(11,7+g.score));for(const i of holes)g.fix[i]=false;
    g.cur=g.sol.map((v,i)=>g.fix[i]?v:0);g.sel=holes[0];},
  click(g,mx,my){const x=Math.floor((mx-140)/50),y=Math.floor((my-60)/50);if(x>=0&&y>=0&&x<4&&y<4&&!g.fix[y*4+x])g.sel=y*4+x;},
  key(g,k,ch){const n=+ch;if(n>=1&&n<=4&&!g.fix[g.sel]){g.cur[g.sel]=n;A.beep(500,.03);
      const okL=idx=>{const v=idx.map(i=>g.cur[i]);return v.every(Boolean)&&new Set(v).size===4;};
      let ok=true;for(let i=0;i<4;i++){ok=ok&&okL([0,1,2,3].map(j=>i*4+j))&&okL([0,1,2,3].map(j=>j*4+i));}
      for(const b of[0,2,8,10])ok=ok&&okL([b,b+1,b+4,b+5]);if(ok){g.score++;A.tune([523,659,784]);this.make(g);}}
    const m={ArrowLeft:-1,ArrowRight:1,ArrowUp:-4,ArrowDown:4}[k];if(m){const n2=g.sel+m;if(n2>=0&&n2<16)g.sel=n2;}
    if(k==='Backspace'&&!g.fix[g.sel])g.cur[g.sel]=0;},
  update(g,dt){g.time-=dt;if(g.time<=0)A.over(g,'Времето изтече!');},
  draw(g){A.bg('#1f2a3d');for(let i=0;i<16;i++){const x=140+(i%4)*50,y=60+Math.floor(i/4)*50;c.fillStyle=i===g.sel?'#5a6b8c':g.fix[i]?'#3a4a60':'#2b3646';c.fillRect(x+1,y+1,48,48);
      if(g.cur[i]){const dup=!g.fix[i]&&[...Array(16).keys()].some(j=>j!==i&&g.cur[j]===g.cur[i]&&(j%4===i%4||Math.floor(j/4)===Math.floor(i/4)||(Math.floor(j/8)===Math.floor(i/8)&&Math.floor(j%4/2)===Math.floor(i%4/2))));
        A.txt(g.cur[i],x+25,y+26,26,g.fix[i]?'#fff':dup?'#ff6b6b':'#9ecbff','center');}}
    c.fillStyle='#ffd54f';c.fillRect(239,60,3,200);c.fillRect(140,159,200,3);A.txt('⏱ '+Math.ceil(g.time),10,14,14);}
});

// 48. Пясъчник с материали
A.add({id:'sandbox',cat:'board',icon:'⏳',name:'Пясъчник',desc:'Пясък, вода, лава и камък',noScore:true,help:'Рисувай с мишката. 1 пясък · 2 вода · 3 камък · 4 лава · 5 дърво · 6 гума. Лава + вода = камък. Лавата пали дървото! C — изчисти.',
  W:160,H:110,
  start(g){g.m=new Uint8Array(this.W*this.H);g.sel=1;g.oc=document.createElement('canvas');g.oc.width=this.W;g.oc.height=this.H;g.ox=g.oc.getContext('2d');g.img=g.ox.createImageData(this.W,this.H);},
  // 0 празно,1 пясък,2 вода,3 камък,4 лава,5 дърво,6 огън
  cols:[[20,24,32],[224,192,104],[59,123,214],[125,125,125],[255,106,0],[154,106,58],[255,200,40]],
  key(g,k,ch){const n=+ch;if(n>=1&&n<=6)g.sel=n===6?0:n;if(k==='KeyC')g.m.fill(0);},
  paint(g){if(!A.mouse.down||A.mouse.y>330)return;const cx=Math.floor(A.mouse.x/3),cy=Math.floor(A.mouse.y/3);
    for(let dy=-2;dy<=2;dy++)for(let dx=-2;dx<=2;dx++){const x=cx+dx,y=cy+dy;if(x>=0&&y>=0&&x<this.W&&y<this.H&&(g.sel!==1&&g.sel!==2||Math.random()<.5))g.m[y*this.W+x]=g.sel;}},
  click(g,mx,my){if(my>330){const i=Math.floor((mx-10)/76);if(i>=0&&i<6)g.sel=[1,2,3,4,5,0][i];}},
  update(g){this.paint(g);const W=this.W,H=this.H,m=g.m;
    for(let y=H-2;y>=0;y--){const dir=Math.random()<.5?1:-1;for(let k=0;k<W;k++){const x=dir>0?k:W-1-k,i=y*W+x,v=m[i];if(!v||v===3||v===5)continue;
      const mv=(j)=>{m[j]=v;m[i]=0;};const can=(xx,yy,ok)=>xx>=0&&xx<W&&yy<H&&ok.includes(m[yy*W+xx]);
      if(v===6){for(const j of[i-1,i+1,i-W,i+W])if(j>=0&&j<W*H&&m[j]===5&&Math.random()<.03)m[j]=6;if(Math.random()<.08)m[i]=0;else if(y>0&&Math.random()<.3&&m[i-W]===0){m[i-W]=6;m[i]=0;}continue;}
      if(v===4){for(const j of[i-1,i+1,i-W,i+W])if(j>=0&&j<W*H){if(m[j]===2){m[j]=3;m[i]=3;}else if(m[j]===5&&Math.random()<.05)m[j]=6;}if(m[i]!==4)continue;}
      if(v===1){if(can(x,y+1,[0,2])){const j=i+W,t=m[j];m[j]=1;m[i]=t;}else{const d=Math.random()<.5?1:-1;if(can(x+d,y+1,[0,2])){const j=i+W+d,t=m[j];m[j]=1;m[i]=t;}}}
      else if(v===2||v===4){if(v===4&&Math.random()<.6)continue;if(can(x,y+1,[0]))mv(i+W);else{const d=Math.random()<.5?1:-1;if(can(x+d,y+1,[0]))mv(i+W+d);else if(can(x+d,y,[0]))mv(i+d);else if(can(x-d,y,[0]))mv(i-d);}}}}},
  draw(g){const d=g.img.data,m=g.m;for(let i=0;i<m.length;i++){const col=this.cols[m[i]],o=i*4,n=m[i]?((i*7)%5)*4:0;d[o]=col[0]+n;d[o+1]=col[1]+n;d[o+2]=col[2]+n;d[o+3]=255;}
    g.ox.putImageData(g.img,0,0);c.imageSmoothingEnabled=false;c.drawImage(g.oc,0,0,this.W*3,this.H*3);
    c.fillStyle='#111';c.fillRect(0,330,480,30);['Пясък','Вода','Камък','Лава','Дърво','Гума'].forEach((n,i)=>{const id=[1,2,3,4,5,0][i];const col=this.cols[id];c.fillStyle='rgb('+col+')';c.fillRect(10+i*76,334,70,22);
      if(g.sel===id){c.strokeStyle='#ffd54f';c.lineWidth=3;c.strokeRect(9+i*76,333,72,24);}A.txt((i+1)+' '+n,45+i*76,345,11,'#fff','center');});}
});

// 49. Водопровод
A.add({id:'pipes',cat:'board',icon:'🚰',name:'Водопровод',desc:'Свържи тръбите',help:'Кликни тръба, за да я завъртиш. Свържи извора отляво с кофата отдясно. 3 минути за колкото може повече нива.',
  // връзки: битове 1=горе 2=дясно 4=долу 8=ляво
  start(g){g.time=180;this.make(g);},
  rot(v){return((v<<1)|(v>>3))&15;},
  make(g){const N=6;g.N=N;g.sr=A.ri(0,N-1);g.er=A.ri(0,N-1);g.p=Array(N*N).fill(0);
    let x=0,y=g.sr,from=8;const seen=new Set();
    while(true){seen.add(x+','+y);let opts=[];if(x===N-1&&y===g.er){g.p[y*N+x]|=from|2;break;}
      for(const[dx,dy,b,ob]of[[1,0,2,8],[0,1,4,1],[0,-1,1,4]]){const X=x+dx,Y=y+dy;if(X<N&&Y>=0&&Y<N&&!seen.has(X+','+Y))opts.push([X,Y,b,ob]);}
      if(!opts.length){return this.make(g);}const right=opts.filter(o=>o[0]>x);const o=(Math.random()<.45&&right.length)?right[0]:A.pick(opts);
      g.p[y*N+x]|=from|o[2];x=o[0];y=o[1];from=o[3];}
    for(let i=0;i<N*N;i++){if(!g.p[i])g.p[i]=A.pick([5,10,3,6,12,9,7,11]);for(let r=A.ri(0,3);r>0;r--)g.p[i]=this.rot(g.p[i]);}
    this.flow(g);},
  flow(g){const N=g.N;g.wet=new Set();if(!(g.p[g.sr*N]&8))return false;const st=[[0,g.sr]];g.wet.add(g.sr*N);
    while(st.length){const[x,y]=st.pop(),v=g.p[y*N+x];for(const[dx,dy,b,ob]of[[0,-1,1,4],[1,0,2,8],[0,1,4,1],[-1,0,8,2]]){const X=x+dx,Y=y+dy;if(!(v&b)||X<0||Y<0||X>=N||Y>=N)continue;const j=Y*N+X;if(!g.wet.has(j)&&(g.p[j]&ob)){g.wet.add(j);st.push([X,Y]);}}}
    return g.wet.has(g.er*N+N-1)&&(g.p[g.er*N+N-1]&2);},
  click(g,mx,my){const T=50,x=Math.floor((mx-90)/T),y=Math.floor((my-30)/T);if(x<0||y<0||x>=g.N||y>=g.N)return;g.p[y*g.N+x]=this.rot(g.p[y*g.N+x]);A.beep(400,.03);
    if(this.flow(g)){g.score++;A.tune([523,659,784]);g.done=.8;}},
  update(g,dt){g.time-=dt;if(g.time<=0)return A.over(g,'Времето изтече!');if(g.done>0){g.done-=dt;if(g.done<=0)this.make(g);}},
  draw(g){A.bg('#2a2420');const T=50,N=g.N;for(let i=0;i<N*N;i++){const x=90+(i%N)*T,y=30+Math.floor(i/N)*T,v=g.p[i];c.fillStyle='#3a322b';c.fillRect(x+1,y+1,T-2,T-2);
      c.fillStyle=g.wet.has(i)?C.water:'#9a9aa2';const m=T/2,w=10;c.fillRect(x+m-w/2,y+m-w/2,w,w);if(v&1)c.fillRect(x+m-w/2,y,w,m);if(v&2)c.fillRect(x+m,y+m-w/2,m,w);if(v&4)c.fillRect(x+m-w/2,y+m,w,m);if(v&8)c.fillRect(x,y+m-w/2,m,w);}
    A.block(50,30+g.sr*T+10,36,C.water,30);A.block(395,30+g.er*T+10,36,C.wood,30);A.txt('⏱ '+Math.ceil(g.time),10,14,14);}
});

// 50. Пещерен изследовател
A.add({id:'dungeon',cat:'board',icon:'🗡️',name:'Пещерен изследовател',desc:'Кристали, чудовища и стълби',help:'Стрелки — ход (всеки твой ход = ход на чудовищата). Влез в чудовище, за да го удариш. Събирай 💎, пий 🧪, слизай по стълбите ⬇.',
  start(g){g.hp=6;g.depth=0;this.level(g);},
  level(g){g.depth++;const W=15,H=11;g.W=W;g.H=H;g.m=[];for(let i=0;i<W*H;i++)g.m.push(1);
    let x=1,y=1;const cells=[];for(let s=0;s<220+g.depth*10;s++){g.m[y*W+x]=0;cells.push([x,y]);const[dx,dy]=A.pick([[1,0],[-1,0],[0,1],[0,-1]]);x=A.clamp(x+dx,1,W-2);y=A.clamp(y+dy,1,H-2);}
    g.px=1;g.py=1;const free=()=>{let p;do{p=A.pick(cells);}while((p[0]===g.px&&p[1]===g.py)||g.items.some(q=>q.x===p[0]&&q.y===p[1])||g.mon.some(q=>q.x===p[0]&&q.y===p[1])||Math.abs(p[0]-1)+Math.abs(p[1]-1)<3);return p;};
    g.items=[];g.mon=[];let p=free();g.items.push({x:p[0],y:p[1],k:'stairs'});
    for(let i=0;i<4+g.depth;i++){p=free();g.items.push({x:p[0],y:p[1],k:'gem'});}
    if(Math.random()<.7){p=free();g.items.push({x:p[0],y:p[1],k:'potion'});}
    for(let i=0;i<1+g.depth;i++){p=free();g.mon.push({x:p[0],y:p[1],hp:1+Math.floor(g.depth/3)});}g.log='Ниво '+g.depth;},
  key(g,k){const m={ArrowLeft:[-1,0],KeyA:[-1,0],ArrowRight:[1,0],KeyD:[1,0],ArrowUp:[0,-1],KeyW:[0,-1],ArrowDown:[0,1],KeyS:[0,1]}[k];if(!m)return;
    const nx=g.px+m[0],ny=g.py+m[1];if(g.m[ny*g.W+nx])return;
    const mo=g.mon.find(q=>q.x===nx&&q.y===ny);
    if(mo){mo.hp--;A.beep(250,.06);if(mo.hp<=0){g.mon=g.mon.filter(q=>q!==mo);g.score+=5;g.log='Победи чудовище! +5';}}
    else{g.px=nx;g.py=ny;const it=g.items.find(q=>q.x===nx&&q.y===ny);
      if(it){if(it.k==='gem'){g.score++;A.beep(1000,.05);g.items=g.items.filter(q=>q!==it);g.log='💎 +1';}
        if(it.k==='potion'){g.hp=Math.min(6,g.hp+3);A.beep(700,.1,'sine');g.items=g.items.filter(q=>q!==it);g.log='🧪 +3 живот';}
        if(it.k==='stairs'){g.score+=10;A.tune([440,550,660]);return this.level(g);}}}
    for(const q of g.mon){const dx=Math.sign(g.px-q.x),dy=Math.sign(g.py-q.y);
      if(Math.abs(g.px-q.x)+Math.abs(g.py-q.y)===1){if(Math.random()<.7){g.hp--;g.log='Удариха те!';A.beep(100,.15,'sawtooth');if(g.hp<=0)return A.over(g,'Падна на ниво '+g.depth);}continue;}
      if(Math.abs(g.px-q.x)+Math.abs(g.py-q.y)>8&&Math.random()<.5)continue;
      const tries=Math.abs(g.px-q.x)>Math.abs(g.py-q.y)?[[dx,0],[0,dy]]:[[0,dy],[dx,0]];
      for(const[a,b]of tries){if(!a&&!b)continue;const X=q.x+a,Y=q.y+b;if(!g.m[Y*g.W+X]&&!g.mon.some(o=>o.x===X&&o.y===Y)&&!(X===g.px&&Y===g.py)){q.x=X;q.y=Y;break;}}}},
  draw(g){A.bg('#0b0b10');const T=30,ox=15,oy=15;for(let y=0;y<g.H;y++)for(let x=0;x<g.W;x++){const d=Math.hypot(x-g.px,y-g.py);if(d>5.5)continue;
      if(g.m[y*g.W+x])A.block(ox+x*T,oy+y*T,T,C.stone);else{c.fillStyle='#2a2420';c.fillRect(ox+x*T,oy+y*T,T,T);}
      if(d>3.5){c.fillStyle='rgba(0,0,0,.5)';c.fillRect(ox+x*T,oy+y*T,T,T);}}
    const vis=(q)=>Math.hypot(q.x-g.px,q.y-g.py)<=5.5;
    for(const it of g.items)if(vis(it))A.txt({gem:'💎',potion:'🧪',stairs:'⬇'}[it.k],ox+it.x*T+15,oy+it.y*T+16,18,'#fff','center');
    for(const q of g.mon)if(vis(q)){A.block(ox+q.x*T+4,oy+q.y*T+4,22,'#5a2b4a');c.fillStyle='#f33';c.fillRect(ox+q.x*T+8,oy+q.y*T+10,4,4);c.fillRect(ox+q.x*T+18,oy+q.y*T+10,4,4);}
    A.block(ox+g.px*T+5,oy+g.py*T+3,20,'#3b7bd6',24);c.fillStyle='#f1c27d';c.fillRect(ox+g.px*T+8,oy+g.py*T+3,14,9);
    A.txt('❤'.repeat(g.hp),470,345,14,'#f55','right');A.txt(g.log,15,345,13,'#ffd54f');}
});
