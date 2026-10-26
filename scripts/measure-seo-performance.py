"""Sequential Lighthouse mobile runs; retain raw evidence outside Git and commit summaries."""
import subprocess,json,statistics,sys
from pathlib import Path
phase=sys.argv[1];base=sys.argv[2].rstrip('/')
output=Path('output/seo-remediation')/phase;output.mkdir(parents=True,exist_ok=True)
routes={'portada':'/','medellin':'/dotaciones-medellin/','epp':'/epp-medellin/','producto':'/producto/bota-inyectada-p-p-ref-hibrida-100-libre-de-metal/'}
summary={}
for name,route in routes.items():
 runs=[]
 for number in range(1,4):
  path=output/f'{name}-{number}.json'
  proc=subprocess.run(['lighthouse',base+route,'--quiet','--chrome-flags=--headless=new --no-sandbox','--only-categories=performance','--output=json',f'--output-path={path}','--throttling-method=simulate'],capture_output=True,text=True)
  if proc.returncode:print(proc.stderr,flush=True);raise SystemExit(proc.returncode)
  doc=json.loads(path.read_text());a=doc['audits']
  runs.append({'lcp':a['largest-contentful-paint']['numericValue'],'cls':a['cumulative-layout-shift']['numericValue'],'tbt':a['total-blocking-time']['numericValue'],'score':doc['categories']['performance']['score'],'details':{k:a[k].get('details') for k in ['lcp-breakdown-insight','lcp-discovery-insight','network-requests','render-blocking-insight','image-delivery-insight','third-parties-insight'] if k in a}})
  print(phase,name,number,'LCP',round(runs[-1]['lcp']),'CLS',runs[-1]['cls'],flush=True)
 summary[name]={'url':base+route,'median':{key:statistics.median(r[key] for r in runs) for key in ['lcp','cls','tbt','score']},'runs':runs}
 Path(f'reports/remediacion-2026-10-26/datos/lighthouse-{phase}.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2))
