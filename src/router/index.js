import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Button from '../views/Button.vue'
import Typography from '../views/Typography.vue'
import Checkbox from '../views/Checkbox.vue'

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
    {
      path: '/checkbox',
      name: 'checkbox',
      component: Checkbox
    },
  ]
})

export default router
