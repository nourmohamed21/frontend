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
      props: () => ({
        toApp: null,
        toModule: null,
        toRun: null
      })
    },
    {
      path: '/:app/:module/:run',
      name: 'Run',
      beforeEnter: (to, from, next) => auth.middleware(to, from, next),
      component: HomeView,
      props: route => ({
        toApp: route.params.app,
        toModule: route.params.module,
        toRun: route.params.run
      })
    }
  ]
})

export default router
