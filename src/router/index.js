import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Button from '../views/Button.vue'
import Typography from '../views/Typography.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    },
    {
      path: '/typography',
      name: 'typography',
      component: Typography
    },
  ]
})

export default router
