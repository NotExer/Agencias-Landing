import {writeFileSync,mkdirSync} from 'node:fs';
const now=new Date();const today=now.toISOString().slice(0,10);const out=`reports/remediacion-2026-10-26/seguimiento/${today}`;mkdirSync(out,{recursive:true});
const date=(days)=>{const d=new Date(now);d.setUTCDate(d.getUTCDate()-days);return d.toISOString().slice(0,10)};
const gaStart=process.env.SEO_START||date(28),gaEnd=process.env.SEO_END||date(1);
async function call(name,slug,args){
 const pages=[];let offset=0;
 while(true){
  const request={...args,...(offset?(slug.startsWith('GOOGLE_ANALYTICS')?{offset}:{start_row:offset}):{})};
  const result=await execute(slug,request);pages.push({request,result});
  const d=result.data;
  if(!result.successful||result.error||d?.http_error||(d?.status_code&&Number(d.status_code)>=300)){
   writeFileSync(`${out}/${name}.json`,JSON.stringify({at:now.toISOString(),slug,args,pages},null,2));throw new Error(`${name}: failed; log ${result.logId}`);
  }
  const limit=args.limit||args.row_limit;
  if(!limit||!d?.rows||d.rows.length<limit)break;
  offset+=d.rows.length;
 }
 writeFileSync(`${out}/${name}.json`,JSON.stringify({at:now.toISOString(),slug,args,pages},null,2));console.log(name,'pages',pages.length);
}

const hostname={filter:{fieldName:'hostName',stringFilter:{matchType:'EXACT',value:'agenciasnacionales.com'}}};
await Promise.all([
call('ga-canales','GOOGLE_ANALYTICS_RUN_REPORT',{property:'properties/527357451',dateRanges:[{startDate:gaStart,endDate:gaEnd}],dimensions:[{name:'sessionDefaultChannelGroup'}],metrics:['sessions','engagedSessions','keyEvents','sessionKeyEventRate'].map(name=>({name})),dimensionFilter:hostname,limit:10000}),
call('ga-contactos','GOOGLE_ANALYTICS_RUN_REPORT',{property:'properties/527357451',dateRanges:[{startDate:gaStart,endDate:gaEnd}],dimensions:['eventName','sessionDefaultChannelGroup'].map(name=>({name})),metrics:[{name:'eventCount'}],dimensionFilter:{andGroup:{expressions:[hostname,{filter:{fieldName:'eventName',inListFilter:{values:['generate_lead','whatsapp_click','contact_form_submit','begin_quote']}}}]}},limit:10000}),
call('ga-landings','GOOGLE_ANALYTICS_RUN_REPORT',{property:'properties/527357451',dateRanges:[{startDate:gaStart,endDate:gaEnd}],dimensions:[{name:'landingPage'}],metrics:['sessions','engagedSessions','keyEvents'].map(name=>({name})),dimensionFilter:{andGroup:{expressions:[hostname,{filter:{fieldName:'sessionDefaultChannelGroup',stringFilter:{matchType:'EXACT',value:'Organic Search'}}}]}},limit:10000}),
call('clarity-72h','MICROSOFT_CLARITY_DATA_EXPORT',{numOfDays:3,dimension1:'URL'})
]);
// Page-filtered GSC is byPage. Never label its sum as byProperty or compare it
// directly to the earlier domain-wide totals that included subdomains.
await call('gsc-produccion','GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY',{site_url:'sc-domain:agenciasnacionales.com',start_date:process.env.SEO_GSC_START||date(30),end_date:process.env.SEO_GSC_END||date(3),dimensions:['page'],dimension_filter_groups:[{filters:[{dimension:'page',operator:'includingRegex',expression:'^https://agenciasnacionales\\.com/'}]}],data_state:'final',row_limit:5000});
