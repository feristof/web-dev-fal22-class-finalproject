import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/allWorkouts',
      name: 'allWorkouts',
      component: () => import('../views/allWorkouts.vue')
    },
    {
      path: '/userPage',
      name: 'userPage',
      component: () => import('../components/userPage.vue')
    },
    {
      path: '/newtoApp',
      name: 'newtoApp',
      component: () => import('../views/newtoApp.vue')
    },

    {
      path: '/myWorkouts',
      name: 'myWorkouts',
      component: () => import('../views/myWorkouts.vue')
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: () => import('../views/logIn.vue')
    },

    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/signUp.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/users.vue')
    }

  ]
})

export default router
