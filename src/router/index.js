import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue';
import auth from '@/models/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      beforeEnter: (to,from,next)=>auth.middleware(to,from,next),
    },
    {
      path: '/login',
      name: 'Login',
      beforeEnter: (to,from,next)=>auth.middleware(to,from,next),
      component: LoginView,
      
    },
    {
      path: '/home',
      name: 'Home',
      beforeEnter: (to,from,next)=>auth.middleware(to,from,next),
      component: HomeView,
    }
  ]
})

export default router
