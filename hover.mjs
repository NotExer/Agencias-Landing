const wsUrl = "ws://localhost:9222/devtools/page/7359059F8AE98AB6C62B0FA62C27CF78";
const ws = new WebSocket(wsUrl);
let id = 0; const pending = new Map();
const send = (m,p={}) => new Promise(r=>{const x=++id;pending.set(x,r);ws.send(JSON.stringify({id:x,method:m,params:p}));});
ws.onmessage = e => { const m=JSON.parse(e.data); if(m.id&&pending.has(m.id)){pending.get(m.id)(m.result);pending.delete(m.id);} };
const ev = async (x)=> (await send("Runtime.evaluate",{expression:x,returnByValue:true})).result.value;
const sleep = ms=>new Promise(r=>setTimeout(r,ms));
// dispatch a real mouseenter on first mega-item that has a drop
const trigger = (open) => `(()=>{
  const items=[...document.querySelectorAll('.mega-item')].filter(i=>i.querySelector('.mega-drop'));
  const item=items[0];
  item.dispatchEvent(new MouseEvent('mouseenter',{bubbles:false}));
  return 'ok';
})()`;
const leave = `(()=>{document.getElementById('categories-nav').dispatchEvent(new MouseEvent('mouseleave',{bubbles:false}));return 'ok';})()`;
const state = `(()=>{
  const d=document.querySelector('.mega-drop');
  const cs=getComputedStyle(d);
  const inner=d.querySelector('.mega-drop-inner');
  const r=inner.getBoundingClientRect();
  return JSON.stringify({position:cs.position,gridRows:cs.gridTemplateRows,opacity:Number(cs.opacity).toFixed(2),innerHeight:Math.round(r.height),isOpen:d.classList.contains('is-open')});
})()`;
const bodyH = `Math.round(document.body.getBoundingClientRect().height)`;
ws.onopen = async () => {
  await send("Runtime.enable");
  const h0 = await ev(bodyH);
  console.log("body height (closed):", h0);
  console.log("BEFORE :", await ev(state));
  await ev(trigger(true));
  await sleep(120); console.log("HOVER 120:", await ev(state));
  await sleep(180); console.log("HOVER 300:", await ev(state));
  await sleep(450); console.log("HOVER DONE:", await ev(state));
  const h1 = await ev(bodyH);
  console.log("body height (open) :", h1, h1===h0 ? "-> SAME (overlay, no empuja)" : "-> CHANGED (empuja body!)");
  await ev(leave);
  await sleep(600); console.log("AFTER LEAVE:", await ev(state));
  ws.close(); process.exit(0);
};
ws.onerror = e => { console.error(e.message); process.exit(1); };
