import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/livros",
      name: "livros",
      component: () => import("../views/LivrosView.vue"),
    },

    {
      path: "/editoras",
      name: "editoras",
      component: () => import("../views/EditorasView.vue"),
    },
  ],
});

export default router;
