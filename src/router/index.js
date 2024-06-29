import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ValidateView from '../views/ValidateView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/validate',
    name: 'validate',
    component: ValidateView
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('../views/SuccessView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
