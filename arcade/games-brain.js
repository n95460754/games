// ===== 🧠 УМ И МАТЕМАТИКА =====
// общо: въвеждане на число с клавиатурата
function typeNum(g,k,ch){
  if(ch>='0'&&ch<='9'&&g.inp.length<6){g.inp+=ch;A.beep(700,.02);}
  else if(k==='Backspace')g.inp=g.inp.slice(0,-1);
  else if((k==='Minus'||k==='NumpadSubtract')&&!g.inp)g.inp='-';
  return k==='Enter'||k==='NumpadEnter'||k==='Space';
}
function inputBox(g,y){c.fillStyle='#000';c.fillRect(170,y-22,140,44);c.strokeStyle='#ffd54f';c.lineWidth=3;c.strokeRect(170,y-22,140,44);
  A.txt(g.inp+(Math.sin(g.t*8)>0?'_':''),240,y,26,'#fff','center');}
function flash(g,ok){g.fl={ok,t:.35};A.beep(ok?880:150,ok?.08:.2,ok?'triangle':'sawtooth');}
function drawFlash(g,dt){if(g.fl&&g.fl.t>0){c.fillStyle=g.fl.ok?'rgba(80,200,80,.25)':'rgba(220,60,60,.3)';c.fillRect(0,0,480,360);}}
function tick(g,dt){if(g.fl)g.fl.t-=dt;g.time-=dt;if(g.time<=0)A.over(g,'Времето изтече!');}

// 21. Бърза сметка
A.add({id:'quickmath',cat:'brain',icon:'➕',name:'Бърза сметка',desc:'Колко сметки за 60 секунди?',help:'Напиши отговора с цифрите и натисни Enter. Сметките стават по-трудни с всеки верен отговор.',
  start(g){g.time=60;g.inp='';this.next(g);},
  next(g){const s=g.score,op=A.pick(s<5?['+','-']:s<12?['+','-','×']:['+','-','×','÷']);let a,b,r;
    if(op==='+'){a=A.ri(2,20+s*4);b=A.ri(2,20+s*4);r=a+b;}if(op==='-'){a=A.ri(5,30+s*4);b=A.ri(1,a);r=a-b;}
    if(op==='×'){a=A.ri(2,9+Math.floor(s/5));b=A.ri(2,9);r=a*b;}if(op==='÷'){b=A.ri(2,9);r=A.ri(2,9+Math.floor(s/6));a=b*r;}
    g.q=a+' '+op+' '+b+' = ?';g.ans=r;},
  key(g,k,ch){if(typeNum(g,k,ch)&&g.inp){const ok=+g.inp===g.ans;flash(g,ok);if(ok){g.score++;this.next(g);}g.inp='';}},
  update(g,dt){tick(g,dt);},
  draw(g){A.bg('#1d2b3a');A.txt(g.q,240,130,38,'#fff','center');inputBox(g,220);A.txt('⏱ '+Math.ceil(g.time),20,20,18,g.time<10?'#f66':'#fff');drawFlash(g);}
});

// 22. По-голямо или по-малко
A.add({id:'compare',cat:'brain',icon:'⚖️',name:'Везни',desc:'Коя страна тежи повече?',help:'← ако лявата сметка е по-голяма, → ако дясната, ↓ ако са равни. 45 секунди. Грешка = -1 точка.',
  start(g){g.time=45;this.next(g);},
  ex(lvl){const t=A.ri(0,lvl>6?3:2);const a=A.ri(2,12),b=A.ri(2,12);
    if(t===0)return[a+' + '+b,a+b];if(t===1)return[a+' × '+b,a*b];if(t===2){const x=Math.max(a,b),y=Math.min(a,b);return[x+' − '+y,x-y];}return[a*b+' ÷ '+b,a];},
  next(g){g.L=this.ex(g.score);g.R=Math.random()<.2?[g.L[1]+'',g.L[1]]:this.ex(g.score);},
  key(g,k){const want=g.L[1]>g.R[1]?'L':g.L[1]<g.R[1]?'R':'E';const got={ArrowLeft:'L',KeyA:'L',ArrowRight:'R',KeyD:'R',ArrowDown:'E',KeyS:'E'}[k];if(!got)return;
    const ok=got===want;flash(g,ok);g.score=Math.max(0,g.score+(ok?1:-1));this.next(g);},
  update(g,dt){tick(g,dt);},
  draw(g){A.bg('#2a2018');const tilt=0;c.fillStyle='#8d6a3f';c.fillRect(236,150,8,150);c.fillRect(80,140,320,10);
    A.block(70,170,150,'#5a6b8c',70);A.block(260,170,150,'#5a6b8c',70);A.txt(g.L[0],145,205,24,'#fff','center');A.txt(g.R[0],335,205,24,'#fff','center');
    A.txt('←  по-голямо   ↓ равно   по-голямо  →',240,320,14,'#ffd54f','center');A.txt('⏱ '+Math.ceil(g.time),20,20,18);drawFlash(g);}
});

// 23. Преброй блоковете
A.add({id:'countblocks',cat:'brain',icon:'👀',name:'Бърз поглед',desc:'Преброй блоковете за миг',help:'Блоковете се показват за кратко. Напиши колко са и натисни Enter. 3 грешки и край.',
  start(g){g.lives=3;g.inp='';this.next(g);},
  next(g){const n=A.ri(3,6+g.score);g.n=n;g.bl=[];const used=new Set();while(g.bl.length<n){const x=A.ri(0,11),y=A.ri(0,6);if(used.has(x+','+y))continue;used.add(x+','+y);g.bl.push([x,y,A.pick([C.grass,C.stone,C.wood,C.gold,C.gem])]);}
    g.show=Math.max(.6,1.8-g.score*.08);},
  key(g,k,ch){if(g.show>0)return;if(typeNum(g,k,ch)&&g.inp){const ok=+g.inp===g.n;flash(g,ok);if(ok)g.score++;else{g.lives--;g.reveal=1.2;if(!g.lives)return A.over(g,'Бяха '+g.n);}g.inp='';if(ok)this.next(g);}},
  update(g,dt){if(g.fl)g.fl.t-=dt;if(g.show>0)g.show-=dt;if(g.reveal>0){g.reveal-=dt;if(g.reveal<=0)this.next(g);}},
  draw(g){A.bg('#1d2b3a');if(g.show>0||g.reveal>0)for(const[x,y,col]of g.bl)A.block(24+x*36,30+y*36,32,col);
    else{A.txt('Колко бяха?',240,120,26,'#fff','center');inputBox(g,190);}
    A.txt('❤'.repeat(g.lives),20,340,16,'#f55');drawFlash(g);}
});

// 24. Повтори мелодията
A.add({id:'simon',cat:'brain',icon:'🎵',name:'Повтори',desc:'Запомни реда на светлините',help:'Гледай кои блокове светват, после ги повтори с клик или клавиши 1–4. Всеки рунд добавя по още един.',
  pads:[[60,40,C.red,330],[250,40,C.grass,440],[60,200,C.water,550],[250,200,C.gold,660]],
  start(g){g.seq=[];g.add=true;g.light=-1;g.wait=.6;},
  press(g,i){if(g.play||g.add)return;this.lit(g,i);if(g.seq[g.pos]!==i)return A.over(g,'Грешка! Беше '+(g.seq[g.pos]+1));g.pos++;
    if(g.pos===g.seq.length){g.score=g.seq.length;g.add=true;g.wait=.8;}},
  lit(g,i){g.light=i;g.lt=.3;A.beep(this.pads[i][3],.25,'triangle',.07);},
  key(g,k,ch){const n=+ch;if(n>=1&&n<=4)this.press(g,n-1);},
  click(g,mx,my){this.pads.forEach((p,i)=>{if(mx>p[0]&&mx<p[0]+170&&my>p[1]&&my<p[1]+140)this.press(g,i);});},
  update(g,dt){if(g.lt>0){g.lt-=dt;if(g.lt<=0)g.light=-1;}
    if(g.add){g.wait-=dt;if(g.wait<=0){g.add=false;g.seq.push(A.ri(0,3));g.play=true;g.pi=0;g.pt=.3;}}
    else if(g.play){g.pt-=dt;if(g.pt<=0){if(g.pi<g.seq.length){this.lit(g,g.seq[g.pi]);g.pi++;g.pt=Math.max(.3,.6-g.seq.length*.02);}else{g.play=false;g.pos=0;}}}},
  draw(g){A.bg('#14101c');this.pads.forEach((p,i)=>{A.block(p[0],p[1],170,p[2],140);if(g.light!==i){c.fillStyle='rgba(0,0,0,.55)';c.fillRect(p[0],p[1],170,140);}A.txt(i+1,p[0]+85,p[1]+70,24,'#fff','center');});
    A.txt(g.play||g.add?'Гледай...':'Твой ред!',240,20,16,'#ffd54f','center');}
});

// 25. Реакция
A.add({id:'reaction',cat:'brain',icon:'⚡',name:'Реакция',desc:'Колко бърз си?',low:true,unit:' мс',help:'Чакай блокът да стане ЗЕЛЕН и тогава натисни Space или кликни. 5 опита — резултатът е средното време.',
  start(g){g.res=[];this.arm(g);},
  arm(g){g.st='wait';g.w=A.rnd(1.2,3.5);},
  key(g,k){if(k==='Space')this.hitIt(g);},click(g){this.hitIt(g);},
  hitIt(g){if(g.st==='wait'){g.st='early';g.et=1;A.beep(150,.2,'sawtooth');return;}
    if(g.st==='go'){const ms=(performance.now()-g.go);g.res.push(ms);A.beep(900,.08);g.last=ms;
      if(g.res.length>=5){g.score=g.res.reduce((a,b)=>a+b)/5;return A.over(g,'Средно: '+Math.round(g.score)+' мс');}g.st='show';g.et=1;}},
  update(g,dt){if(g.st==='wait'){g.w-=dt;if(g.w<=0){g.st='go';g.go=performance.now();}}else if(g.st==='early'||g.st==='show'){g.et-=dt;if(g.et<=0)this.arm(g);}},
  draw(g){A.bg('#1d1d1d');const col=g.st==='go'?'#2ecc40':g.st==='early'?'#c62828':'#7a1f1f';A.block(140,80,200,col,200);
    A.txt(g.st==='go'?'СЕГА!':g.st==='early'?'Твърде рано!':g.st==='show'?Math.round(g.last)+' мс':'Чакай зелено...',240,180,22,'#fff','center');
    A.txt('Опит '+Math.min(5,g.res.length+1)+'/5',240,320,16,'#bbb','center');}
});

// 26. Мерник
A.add({id:'aim',cat:'brain',icon:'🎯',name:'Мерник',desc:'Уцели блоковете с мишката',help:'Кликай бързо върху появяващите се блокове, преди да изчезнат. 30 секунди. Пропуск = -1 точка.',
  start(g){g.time=30;g.tg=[];g.sp=0;},
  click(g,mx,my){for(let i=g.tg.length-1;i>=0;i--){const t=g.tg[i],s=t.s*t.life/t.max;if(Math.abs(mx-t.x)<s/2+3&&Math.abs(my-t.y)<s/2+3){g.tg.splice(i,1);g.score+=t.gold?3:1;A.beep(t.gold?1200:800,.05);return;}}
    g.score=Math.max(0,g.score-1);A.beep(150,.05);},
  update(g,dt){g.time-=dt;if(g.time<=0)return A.over(g,'Времето изтече!');g.sp-=dt;
    if(g.sp<=0){g.sp=Math.max(.35,.8-g.t*.015);const max=A.rnd(1.2,2);g.tg.push({x:A.rnd(30,450),y:A.rnd(40,330),s:A.rnd(28,46),life:max,max,gold:Math.random()<.12});}
    for(const t of g.tg)t.life-=dt;g.tg=g.tg.filter(t=>t.life>0);},
  draw(g){A.bg('#20302a');for(const t of g.tg){const s=t.s*t.life/t.max;A.block(t.x-s/2,t.y-s/2,s,t.gold?C.gold:C.ruby);}
    c.strokeStyle='#fff';c.lineWidth=2;c.beginPath();c.arc(A.mouse.x,A.mouse.y,10,0,7);c.stroke();A.txt('⏱ '+Math.ceil(g.time),20,20,16);}
});

// 27. Двоичен код
A.add({id:'binary',cat:'brain',icon:'💾',name:'Двоичен код',desc:'Състави числото от битове',help:'Включи битовете (клик или клавиши 1–8), чийто сбор е равен на числото горе. 128+64+…+1. 60 секунди.',
  start(g){g.time=60;g.bits=Array(8).fill(0);this.next(g);},
  next(g){g.target=A.ri(1,Math.min(255,15+g.score*20));g.bits.fill(0);},
  val(g){return g.bits.reduce((a,b,i)=>a+(b?128>>i:0),0);},
  flip(g,i){g.bits[i]^=1;A.beep(400+i*60,.03);if(this.val(g)===g.target){g.score++;flash(g,true);this.next(g);}},
  key(g,k,ch){const n=+ch;if(n>=1&&n<=8)this.flip(g,n-1);},
  click(g,mx,my){if(my>150&&my<210){const i=Math.floor((mx-24)/56);if(i>=0&&i<8)this.flip(g,i);}},
  update(g,dt){tick(g,dt);},
  draw(g){A.bg('#0f1d14');A.txt('Направи: '+g.target,240,70,32,'#9ccc65','center');
    g.bits.forEach((b,i)=>{A.block(24+i*56+4,150,48,b?'#2ecc40':'#2a3a2a',60);A.txt(b,24+i*56+28,180,22,'#fff','center');A.txt(128>>i,24+i*56+28,230,14,'#bbb','center');});
    A.txt('Сега: '+this.val(g),240,280,20,'#fff','center');A.txt('⏱ '+Math.ceil(g.time),20,20,16);drawFlash(g);}
});

// 28. Просто или съставно
A.add({id:'primes',cat:'brain',icon:'🔢',name:'Просто ли е?',desc:'Прости числа на скорост',help:'← ако числото е ПРОСТО, → ако е СЪСТАВНО. 3 грешки и край. Числата растат!',
  start(g){g.lives=3;this.next(g);},
  isP(n){if(n<2)return false;for(let i=2;i*i<=n;i++)if(n%i===0)return false;return true;},
  next(g){const max=20+g.score*8;let n;do{n=A.ri(2,max);}while(n===g.n);if(Math.random()<.45){while(!this.isP(n))n++;}g.n=n;},
  key(g,k){const ans={ArrowLeft:true,KeyA:true,ArrowRight:false,KeyD:false}[k];if(ans===undefined)return;
    const ok=ans===this.isP(g.n);flash(g,ok);if(ok)g.score++;else{g.lives--;g.why=g.n+(this.isP(g.n)?' е просто':' = '+this.fac(g.n));if(!g.lives)return A.over(g,g.why);}this.next(g);},
  fac(n){const f=[];for(let p=2;n>1;p++)while(n%p===0){f.push(p);n/=p;}return f.join('·');},
  update(g,dt){if(g.fl)g.fl.t-=dt;},
  draw(g){A.bg('#2a1f30');A.block(170,90,140,C.stone,120);A.txt(g.n,240,150,46,'#fff','center');
    A.txt('← ПРОСТО',90,300,18,'#9ccc65','center');A.txt('СЪСТАВНО →',390,300,18,'#ffb74d','center');A.txt('❤'.repeat(g.lives),20,20,16,'#f55');
    if(g.why)A.txt('Последна грешка: '+g.why,240,340,13,'#bbb','center');drawFlash(g);}
});

// 29. Дроби
A.add({id:'fractions',cat:'brain',icon:'🍕',name:'Дроби',desc:'Коя дроб е по-голяма?',help:'← ако лявата дроб е по-голяма, → ако дясната, ↓ ако са равни. 45 секунди.',
  start(g){g.time=45;this.next(g);},
  next(g){const mk=()=>{const d=A.ri(2,12);return[A.ri(1,d-1),d];};g.a=mk();if(Math.random()<.2){const k=A.ri(2,3);g.b=[g.a[0]*k,g.a[1]*k];}else g.b=mk();},
  key(g,k){const x=g.a[0]*g.b[1],y=g.b[0]*g.a[1];const want=x>y?'L':x<y?'R':'E';const got={ArrowLeft:'L',KeyA:'L',ArrowRight:'R',KeyD:'R',ArrowDown:'E',KeyS:'E'}[k];if(!got)return;
    const ok=got===want;flash(g,ok);g.score=Math.max(0,g.score+(ok?1:-1));this.next(g);},
  update(g,dt){tick(g,dt);},
  frac(f,x){A.txt(f[0],x,120,34,'#fff','center');c.fillStyle='#fff';c.fillRect(x-30,145,60,4);A.txt(f[1],x,175,34,'#fff','center');
    for(let i=0;i<f[1];i++){const w=160/f[1];A.block(x-80+i*w,230,Math.max(2,w-1),i<f[0]?C.gold:'#444',26);}},
  draw(g){A.bg('#1d2b3a');this.frac(g.a,120);this.frac(g.b,360);A.txt('?',240,150,40,'#ffd54f','center');A.txt('⏱ '+Math.ceil(g.time),20,20,16);
    A.txt('← по-голяма   ↓ равни   по-голяма →',240,320,14,'#ffd54f','center');drawFlash(g);}
});

// 30. Редици
A.add({id:'sequence',cat:'brain',icon:'🔮',name:'Редици',desc:'Кое е следващото число?',help:'Открий правилото и напиши следващото число в редицата. Enter за проверка. 3 грешки и край.',
  start(g){g.lives=3;g.inp='';this.next(g);},
  next(g){const s=g.score,t=A.ri(0,Math.min(5,1+Math.floor(s/2)));let a=A.ri(1,9),d=A.ri(2,9),seq=[];
    if(t===0)for(let i=0;i<5;i++)seq.push(a+d*i);
    if(t===1)for(let i=0;i<5;i++)seq.push(a+40-d*i);
    if(t===2){d=A.ri(2,3);for(let i=0;i<5;i++)seq.push(a*d**i);}
    if(t===3)for(let i=0;i<5;i++)seq.push((i+a)**2);
    if(t===4){seq=[a,d];for(let i=2;i<5;i++)seq.push(seq[i-1]+seq[i-2]);}
    if(t===5){seq=[a];for(let i=1;i<5;i++)seq.push(seq[i-1]+i*d);}
    g.ans=seq.pop();g.seq=seq;},
  key(g,k,ch){if(typeNum(g,k,ch)&&g.inp){const ok=+g.inp===g.ans;flash(g,ok);if(ok)g.score++;else{g.lives--;g.why=g.seq.join(', ')+' → '+g.ans;if(!g.lives)return A.over(g,'Отговорът беше '+g.ans);}g.inp='';this.next(g);}},
  update(g,dt){if(g.fl)g.fl.t-=dt;},
  draw(g){A.bg('#20182c');g.seq.forEach((v,i)=>{A.block(30+i*90,90,80,C.purple,60);A.txt(v,70+i*90,120,20,'#fff','center');});A.block(390,90,80,'#444',60);A.txt('?',430,120,24,'#ffd54f','center');
    inputBox(g,230);A.txt('❤'.repeat(g.lives),20,20,16,'#f55');if(g.why)A.txt(g.why,240,330,13,'#bbb','center');drawFlash(g);}
});
