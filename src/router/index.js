import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    component:()=>import ('../pages/homePage.vue')
   }
  ]
})

export default router
