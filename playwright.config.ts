import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests',fullyParallel:false,workers:1,reporter:'list',outputDir:'output/playwright/test-results',use:{channel:'chrome',baseURL:'http://127.0.0.1:4321',headless:true},webServer:{command:'npm run preview -- --host 127.0.0.1 --port 4321',url:'http://127.0.0.1:4321',reuseExistingServer:true}});
