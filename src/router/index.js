import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
      meta: { title: 'Login' }
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem('token');
        if (token) {
          console.log(token);
          next({ name: 'Login' }); // Redirect to login if token is found
        } else {
          next();
        }
      }
    }
  ]
})

export default router
