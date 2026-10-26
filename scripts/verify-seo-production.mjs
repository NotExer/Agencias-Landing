import {chromium} from '@playwright/test';
import {writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const origin='https://agenciasnacionales.com';const out='reports/remediacion-2026-10-26/datos/';
const browser=await chromium.launch({channel:'chrome',headless:true});const context=await browser.newContext({viewport:{width:390,height:844}});const page=await context.newPage();const collected=[];
await context.route(/(?:google-analytics\.com|analytics\.google\.com)\/g\/collect/,async r=>{collected.push({url:r.request().url(),post:r.request().postData()});await r.fulfill({status:204});});
await context.route(/clarity\.ms/,r=>r.fulfill({body:'',contentType:'application/javascript'}));
await page.addInitScript(()=>{window.open=()=>null;document.addEventListener('click',e=>{const a=e.target?.closest?.('a');if(a&&/^(https:\/\/(wa.me|api.whatsapp.com)|tel:|mailto:)/.test(a.href))e.preventDefault();},true);});
const checks=[];
for(const path of ['/','/dotaciones-medellin/','/epp-medellin/','/dotaciones-empresariales-colombia/','/calzado-de-dotacion/','/camisas-de-dotacion/']){
 const response=await page.goto(origin+path,{waitUntil:'networkidle'});assert.equal(response.status(),200);const record=await page.evaluate(()=>({url:location.href,title:document.title,h1:document.querySelectorAll('h1').length,canonical:document.querySelector('link[rel=canonical]')?.href,noindex:document.querySelector('meta[name=robots]')?.content,schemas:[...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>JSON.parse(s.textContent)['@type'])}));assert.equal(record.h1,1);assert.equal(record.canonical,origin+path);assert(!record.noindex?.includes('noindex'));checks.push(record);
}
await page.goto(origin+'/dotaciones-medellin/',{waitUntil:'networkidle'});await page.screenshot({path:out+'medellin-movil-despues.png'});
const dimensions=await page.locator('main section').first().evaluate(s=>{const b=s.getBoundingClientRect();return [...s.querySelectorAll('a,h1,p')].map(e=>({text:e.textContent.trim(),bottom:e.getBoundingClientRect().bottom,containerBottom:b.bottom,inside:e.getBoundingClientRect().bottom<=b.bottom+1}));});assert(dimensions.every(x=>x.inside));
// Reset the document so the expected navigation sequence is unambiguous.
await page.goto(origin+'/',{waitUntil:'networkidle'});await page.locator('main a[href="/dotaciones-medellin/"]').first().click();await page.waitForURL('**/dotaciones-medellin/');await page.waitForTimeout(1000);await page.goBack();await page.waitForTimeout(1000);await page.goForward();await page.waitForTimeout(1000);
const sequence=await page.evaluate(()=>window.dataLayer.filter(x=>x[0]==='event'&&x[1]==='page_view').map(x=>x[2]));assert.equal(sequence.length,4);assert.equal(sequence[2].page_title,checks[0].title);assert.equal(sequence[2].page_location,origin+'/');assert.equal(sequence[3].page_title,checks[1].title);
await page.locator('main a[href*="wa.me"]').first().click();const contact=await page.evaluate(()=>window.dataLayer.filter(x=>x[0]==='event'&&x[1]==='generate_lead').map(x=>x[2]));assert.deepEqual(contact,[{method:'whatsapp'}]);
await page.reload({waitUntil:'networkidle'});const reload=await page.evaluate(()=>window.dataLayer.filter(x=>x[0]==='event'&&x[1]==='page_view').map(x=>x[2]));assert.equal(reload.length,1);await page.waitForTimeout(25000);
// Expand GA4 batches. Common URL parameters apply to each POST line.
const actual=collected.flatMap(r=>{const base=Object.fromEntries(new URL(r.url).searchParams);return (r.post?r.post.split(/\r?\n/):['']).filter((s,i)=>s||i===0).map(line=>({...base,...Object.fromEntries(new URLSearchParams(line))}));}).filter(e=>e.en==='page_view').map(e=>({event:e.en,url:e.dl,title:e.dt,referrer:e.dr}));
const expected=[...sequence,...reload].map(e=>({event:'page_view',url:e.page_location,title:e.page_title,referrer:e.page_referrer}));assert.deepEqual(actual.slice(-5),expected);
writeFileSync(out+'produccion-navegacion.json',JSON.stringify({checkedAt:new Date().toISOString(),checks,dimensions,sequence,reload,contact,networkPageViews:actual},null,2));console.log('Production: six pages, mobile geometry, 4 history views + reload, 1 contact intent; captured page_views',actual.length);
await context.unrouteAll({behavior:'wait'});await browser.close();
