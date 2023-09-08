import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Todos from "../pages/todo/index.vue";
import About from "../pages/about/index.vue";
import LandingPage from "../pages/landingpage/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/home",
    component: LandingPage,
  },
  {
    path: "/todos",
    component: Todos,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/landing-page",
    component: LandingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
