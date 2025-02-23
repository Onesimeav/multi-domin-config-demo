import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import subdomainRouter from "@/router/subdomain.ts";
import dashboardRouter from "@/router";

const app = createApp(App)

const host = window.location.host;
const subdomain = host.split('.');

const route = ()=>{
  let routes;
  if (subdomain[0]==='www'){
    if (subdomain[1]===import.meta.env.VITE_DOMAIN_NAME){
      routes= dashboardRouter;
    }else{
      routes=subdomainRouter;
    }
  }else if(subdomain[0]===import.meta.env.VITE_DOMAIN_NAME){
    routes =  dashboardRouter;
  }else {
    routes= subdomainRouter;
  }
  return routes;
}

app.use(createPinia())
app.use(route())

app.mount('#app')
