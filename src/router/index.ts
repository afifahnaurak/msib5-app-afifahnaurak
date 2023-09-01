import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '../components/Home.vue'
import Todos from '../components/Todos.vue'
import About from '../components/About.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/todos',
        component: Todos
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router