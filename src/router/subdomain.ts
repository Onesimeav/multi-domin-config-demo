import {createRouter, createWebHistory} from "vue-router";
import SubdomainHomeView from "@/views/subdomain/SubdomainHomeView.vue";


const subdomainRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path:'/',
      name:'home',
      component:SubdomainHomeView
    }
  ]
  }
)

export default subdomainRouter
