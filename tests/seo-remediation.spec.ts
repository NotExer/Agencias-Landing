import {test,expect,type Page} from '@playwright/test';
const production='https://agenciasnacionales.com';
test.afterEach(async({page})=>{await page.unrouteAll({behavior:'wait'});});
async function productionFixture(page:Page){
 await page.route('https://agenciasnacionales.com/**',async route=>{const target=new URL(route.request().url());const response=await route.fetch({url:'http://127.0.0.1:4321'+target.pathname+target.search});await route.fulfill({response});});
 await page.route(/googletagmanager\.com|clarity\.ms|analytics\.google\.com|google-analytics\.com/,route=>route.fulfill({body:'',contentType:'application/javascript'}));
 await page.addInitScript(()=>{window.open=()=>null;document.addEventListener('click',e=>{const a=(e.target as Element)?.closest('a');if(a&&/^(https:\/\/(wa.me|api.whatsapp.com)|tel:|mailto:)/.test(a.href))e.preventDefault();},true);});
}
async function events(page:Page){return page.evaluate(()=>((window as any).dataLayer||[]).map((x:any)=>Array.from(x)).filter((x:any)=>x[0]==='event'));}
const routes=['/dotaciones-medellin/','/epp-medellin/','/dotaciones-empresariales-colombia/','/camisas-de-dotacion/'];
for(const width of [360,390,430,1280])for(const scale of [1,2])test(`Banners fit ${width}px at ${scale*100}% text`,async({page})=>{
 await page.setViewportSize({width,height:844});
 for(const route of routes){
  await page.goto(route);await page.evaluate(scale=>document.documentElement.style.fontSize=`${16*scale}px`,scale);
  await page.evaluate(()=>document.fonts.ready);
  const result=await page.locator('main section').first().evaluate(section=>{const box=section.getBoundingClientRect();const els=Array.from(section.querySelectorAll('h1,p,a'));return {overflow:document.documentElement.scrollWidth>innerWidth+1,items:els.map(el=>{const r=el.getBoundingClientRect();return {text:el.textContent,inside:r.top>=box.top-1&&r.bottom<=box.bottom+1&&r.left>=-1&&r.right<=innerWidth+1};})};});
  expect(result.overflow,route).toBe(false);expect(result.items.every(x=>x.inside),JSON.stringify(result)).toBe(true);
 }
});
test('Preview never initializes production analytics or Clarity',async({page})=>{
 const requests:string[]=[];page.on('request',r=>{if(/googletagmanager|clarity\.ms|analytics\.google|google-analytics/.test(r.url()))requests.push(r.url());});
 await page.goto('/dotaciones-medellin/');await page.locator('main a[href="/contacto/"]').first().click();await page.waitForURL('**/contacto/');
 expect(requests).toEqual([]);expect(await page.evaluate(()=>typeof (window as any).gtag)).toBe('undefined');
});
test('Each contact action has one lead; cart preserves method; URLs exclude messages',async({page})=>{
 await productionFixture(page);await page.goto(production+'/dotaciones-medellin/');
 await page.locator('main a[href*="wa.me"]').first().click();
 let ev=await events(page);expect(ev.filter(e=>e[1]==='generate_lead')).toHaveLength(1);expect(ev.filter(e=>e[1]==='whatsapp_click')[0][2]).toEqual({link_url:'https://wa.me/573042351036'});
 // Navigate through Astro before using the cart to detect duplicated listeners.
 await page.locator('main a[href="/contacto/"]').first().click();await page.waitForURL('**/contacto/');
 await page.evaluate(()=>localStorage.setItem('an_cart',JSON.stringify([{slug:'casco-de-seguridad',name:'Casco de Seguridad',image:'/Icon.avif'}])));
 await page.goto(production+'/carrito/');await page.locator('#cart-page-quote').click();ev=await events(page);
 expect(ev.filter(e=>e[1]==='generate_lead')).toHaveLength(1);expect(ev.find(e=>e[1]==='generate_lead')?.[2]).toEqual({method:'quote_cart_whatsapp'});expect(ev.filter(e=>e[1]==='begin_quote')).toHaveLength(1);
 expect(JSON.stringify(ev)).not.toContain('?text=');
});
test('Invalid form emits nothing; valid form emits a single intent without personal data',async({page})=>{
 await productionFixture(page);await page.goto(production+'/contacto/');
 await page.locator('#quote-form button[type="submit"]').click();expect((await events(page)).filter(e=>e[1]==='generate_lead')).toHaveLength(0);
 await page.locator('#quote-name').fill('Prueba QA');await page.locator('#quote-email').fill('qa@example.invalid');await page.locator('#quote-phone').fill('3000000000');await page.locator('#quote-message').fill('Prueba local sin envío');
 await page.locator('#quote-form button[type="submit"]').click();const ev=await events(page);
 expect(ev.filter(e=>e[1]==='generate_lead')).toHaveLength(1);expect(ev.find(e=>e[1]==='generate_lead')?.[2]).toEqual({method:'contact_form_whatsapp'});expect(JSON.stringify(ev)).not.toContain('qa@example');expect(JSON.stringify(ev)).not.toContain('3000000000');
});
test('Astro page views use the current title and previous URL once per navigation',async({page})=>{
 await productionFixture(page);await page.goto(production+'/');
 let pv=(await events(page)).filter(e=>e[1]==='page_view');expect(pv).toHaveLength(1);expect(pv[0][2].page_title).toBe(await page.title());
 await page.locator('main a[href="/dotaciones-medellin/"]').first().click();await page.waitForURL('**/dotaciones-medellin/');
 pv=(await events(page)).filter(e=>e[1]==='page_view');expect(pv).toHaveLength(2);expect(pv[1][2]).toMatchObject({page_location:production+'/dotaciones-medellin/',page_title:await page.title(),page_referrer:production+'/'});
 await page.goBack();await page.waitForURL(production+'/');await expect.poll(async()=> (await events(page)).filter(e=>e[1]==='page_view').length).toBe(3);pv=(await events(page)).filter(e=>e[1]==='page_view');expect(pv).toHaveLength(3);expect(pv[2][2]).toMatchObject({page_location:production+'/',page_title:await page.title(),page_referrer:production+'/dotaciones-medellin/'});
 await page.goForward();await page.waitForURL('**/dotaciones-medellin/');await expect.poll(async()=> (await events(page)).filter(e=>e[1]==='page_view').length).toBe(4);pv=(await events(page)).filter(e=>e[1]==='page_view');expect(pv).toHaveLength(4);expect(pv[3][2].page_title).toBe(await page.title());
 await page.reload();pv=(await events(page)).filter(e=>e[1]==='page_view');expect(pv).toHaveLength(1);
});
test('Gallery changes both responsive candidates and the displayed image',async({page})=>{
 await page.goto('/producto/bota-inyectada-p-p-ref-hibrida-100-libre-de-metal/');const main=page.locator('#product-main-image');const before=await main.getAttribute('srcset');await page.locator('.product-thumb').nth(1).click();expect(await main.getAttribute('srcset')).not.toBe(before);expect(await main.getAttribute('srcset')).toContain('320w');expect(await main.getAttribute('width')).toBe('960');
});
