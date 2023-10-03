import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'add-event',
        component: () => import('@/views/add-event.vue')
      },
      {
        path: 'search',
        component: () => import('@/views/search.vue')
      },
      {
        path: 'home',
        component: () => import('@/views/home.vue')
      },
      {
        path: 'message',
        component: () => import('@/views/message.vue')
      },
      {
        path: 'account',
        component: () => import('@/views/account.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
