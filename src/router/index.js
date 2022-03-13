import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('@/views/HomeView.vue')
    }
  },
  {
    path: '/settings',
    name: 'settings',
    component: function () {
      return import('@/views/SettingsView.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('@/views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
