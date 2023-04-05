import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/pages/Layout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [
      { path: "index", component: () => import("@/pages/Index.vue") },
      { path: "user", component: () => import("@/pages/User.vue") },
    ],
  },
  {
    path: "/detail/:id",
    component: () => import("@/pages/goods/GoodsDetail.vue"),
  },
  { path: "/order/:id", component: () => import("@/pages/goods/Order.vue") },
  {
    path: "/order/state",
    component: () => import("@/pages/goods/OrderState.vue"),
  },
  {
    path: "/user/rate",
    component: () => import("@/pages/mine/Rate.vue"),
  },
  {
    path: "/user/publish",
    component: () => import("@/pages/mine/Publish.vue"),
  },
  {
    path: "/user/order",
    component: () => import("@/pages/mine/Order.vue"),
  },
];
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
  sensitive: false,
});

export default router;
