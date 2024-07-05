import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/HomePage/index.vue"),
  },
  {
    path: "/product",
    name: "ProductPage",
    component: () => import("../views/ProductPage/index.vue"),
  },
  {
    path: "/detail",
    name: "DetailPage",
    component: () => import("../views/DetailPage/index.vue"),
  },
  {
    path: "/cart",
    name: "CartPage",
    component: () => import("../views/CartPage/index.vue"),
  },
  {
    path: "/checkout",
    name: "CheckPage",
    component: () => import("../views/CheckPage/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
