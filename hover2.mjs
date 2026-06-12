const wsUrl = "ws://localhost:9222/devtools/page/7359059F8AE98AB6C62B0FA62C27CF78";
const ws = new WebSocket(wsUrl);
let id = 0; const pending = new Map();
const send = (m,p={}) => new Promise(r=>{const x=++id;pending.set(x,r);ws.send(JSON.stringify({id:x,method:m,params:p}));});
ws.onmessage = e => { const m=JSON.parse(e.data); if(m.id&&pending.has(m.id)){pending.get(m.id)(m.result);pending.delete(m.id);} };
const ev = async (x)=> (await send("Runtime.evaluate",{expression:x,returnByValue:true})).result.value;
const sleep = ms=>new Promise(r=>setTimeout(r,ms));
const state = `(()=>{
  const d=document.querySelector('.mega-drop');
  const cs=getComputedStyle(d);
  const inner=d.querySelector('.mega-drop-inner');
  return JSON.stringify({gridRows:cs.gridTemplateRows,opacity:Number(cs.opacity).toFixed(2),innerH:Math.round(inner.getBoundingClientRect().height),isOpen:d.classList.contains('is-open')});
})()`;
ws.onopen = async () => {
  await send("Runtime.enable");
  console.log("CLOSED   :", await ev(state));
  // directly add is-open
  await ev(`document.querySelector('.mega-drop').classList.add('is-open')`);
  await sleep(120); console.log("OPEN 120 :", await ev(state));
  await sleep(180); console.log("OPEN 300 :", await ev(state));
  await sleep(500); console.log("OPEN DONE:", await ev(state));
  await ev(`document.querySelector('.mega-drop').classList.remove('is-open')`);
  await sleep(600); console.log("CLOSED2  :", await ev(state));
  // now test the real handler via mouseenter
  await ev(`(()=>{const it=[...document.querySelectorAll('.mega-item')].filter(i=>i.querySelector('.mega-drop'))[0];it.dispatchEvent(new Event('mouseenter'));return 1;})()`);
  await sleep(50); console.log("HANDLER  :", await ev(state));
  ws.close(); process.exit(0);
};
ws.onerror = e => { console.error(e.message); process.exit(1); };
