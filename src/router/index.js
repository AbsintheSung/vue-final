import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/home/index.vue"),
  },
  {
    path: "/products",
    name: "ProductPage",
    component: () => import("../views/products/index.vue"),
  },
  {
    path: "/detail/:productId",
    name: "DetailPage",
    component: () => import("../views/detail/index.vue"),
  },
  {
    path: "/cart",
    name: "CartPage",
    component: () => import("../views/cart/index.vue"),
  },
  {
    path: "/checkout",
    name: "CheckPage",
    component: () => import("../views/checkout/index.vue"),
  },
  {
    path: "/checkoutinfo",
    name: "CheckInfoPage",
    component: () => import("../views/checkoutinfo/index.vue"),
  },
  {
    path: "/success",
    name: "SuccessPage",
    component: () => import("../views/success/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  // eslint-disable-next-line
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
