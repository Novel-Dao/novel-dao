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

  {
    path: "/writer",
    redirect: "/writer/login",
    component: () => import("@/pages/writer/Index.vue"),
    children: [
      {
        path: "login",
        component: () => import("@/pages/writer/Login.vue"),
      },
      {
        path: "novel",
        component: () => import("@/pages/writer/Novel.vue"),
        children: [
          {
            path: "dashboard",
            component: () => import("@/pages/writer/Dashboard.vue"),
          },
          {
            path: "list",
            component: () => import("@/pages/writer/novel/List.vue"),
          },
          {
            path: "chapter/list/:id",
            component: () => import("@/pages/writer/chapter/List.vue"),
          },
          {
            path: "add",
            component: () => import("@/pages/writer/novel/Add.vue"),
          },
        ],
      },
      {
        name: "statistics",
        path: "statistics",
        component: () => import("@/pages/writer/Statistics.vue"),
      },
    ],
  },
];
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
  sensitive: false,
});

export default router;
