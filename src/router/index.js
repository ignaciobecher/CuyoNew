import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    component:()=>import ('../pages/homePage.vue')
   },
   {
    path:'/nosotros',
    component:()=>import ('../pages/aboutPage.vue')
   },
   {
    path:'/servicios',
    component:()=>import ('../pages/servicesPage.vue')
   },
   {
    path:'/sistemas',
    component:()=>import ('../pages/sistemsPage.vue')
   }
  ]
})

export default router
