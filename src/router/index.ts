import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '../pages/home/index.vue'
import Todos from '../pages/todo/index.vue'
import About from '../pages/about/index.vue'
import LandingPage from '../pages/landingpage/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: LandingPage
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/todos',
        component: Todos
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/landing-page',
        component: LandingPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router