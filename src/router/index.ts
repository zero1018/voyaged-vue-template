import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { routes } from './router.config'
const router = createRouter({
	history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
	routes,
})


export default router
