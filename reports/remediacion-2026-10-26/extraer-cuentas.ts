import {writeFileSync} from 'node:fs';
const out='reports/remediacion-2026-10-26/datos/';
async function call(name,slug,args){const result=await execute(slug,args);writeFileSync(out+name+'.json',JSON.stringify({at:new Date().toISOString(),slug,args,result},null,2));console.log(name,result.successful,result.logId);}
await Promise.all([
call('eventos-clave-antes','GOOGLE_ANALYTICS_LIST_KEY_EVENTS',{parent:'properties/527357451'}),
call('sitemaps-antes','GOOGLE_SEARCH_CONSOLE_LIST_SITEMAPS',{site_url:'sc-domain:agenciasnacionales.com'}),
call('direct-detalle','GOOGLE_ANALYTICS_RUN_REPORT',{property:'properties/527357451',dateRanges:[{startDate:'2026-09-28',endDate:'2026-10-25'}],dimensions:['date','sessionSourceMedium','deviceCategory','country','hostName'].map(name=>({name})),metrics:['sessions','engagedSessions'].map(name=>({name})),dimensionFilter:{filter:{fieldName:'sessionDefaultChannelGroup',stringFilter:{matchType:'EXACT',value:'Direct'}}},limit:10000})
]);
