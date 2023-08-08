import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/discord',
      name: 'Discord',
      // Lazy loads the route.
      component: () => import('../views/discord.vue')
    }
  ]
})

export default router