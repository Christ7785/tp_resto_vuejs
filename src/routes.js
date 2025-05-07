import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import MenuPage from './pages/MenuPage.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/menu',
        name: 'menu',
        component: MenuPage
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 