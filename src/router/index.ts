import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes/index.ts'
import { useAuthStore } from '@/stores/Auth/index.ts';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isLogedIn) {
    return { name: 'login' };
  }

  if (authStore.isLogedIn && to.meta.requiresAuth === false) {
    return { name: 'home' };
  }
})

export default router
