import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/dashboard/HomeView.vue";


const dashboardRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

  ],
})

export default dashboardRouter
