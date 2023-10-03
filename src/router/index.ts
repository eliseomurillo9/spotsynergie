import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab3'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab3'
      },
      {
        path: 'tab1',
        component: () => import('@/views/addevent.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/search.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/home.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/message.vue')
      },
      {
        path: 'tab5',
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
