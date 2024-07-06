import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/home/index.vue"),
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
  {
    path: "/checkoutinfo",
    name: "CheckInfoPage",
    component: () => import("../views/CheckInfoPage/index.vue"),
  },
  {
    path: "/success",
    name: "SuccessPage",
    component: () => import("../views/SuccessPage/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
