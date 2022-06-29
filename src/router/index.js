import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index";
const routes = [
  {
    path: "/",
    redirect: { name: "Home" },
    name: "Dashboard",
    component: () =>
      import(
        /* webpackChunkName: "Dashboard" */ "../views/layouts/Dashboard.vue"
      ),
    children: [
      {
        path: "/",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "Home" */ "../views/pages/Home.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "account",
        name: "Account",
        component: () =>
          import(
            /* webpackChunkName: "Account" */ "../views/pages/Account.vue"
          ),
        meta: { requiresAuth: true },
      },
      {
        path: "settings",
        name: "Settings",
        component: () =>
          import(
            /* webpackChunkName: "Settings" */ "../views/pages/Settings.vue"
          ),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/layouts/Login.vue"),
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "active",
});

router.beforeEach((to, _, next) => {
  const _isAuthenticated = store.getters["user/getUser"];

  if (!to.meta.requiresAuth && _isAuthenticated) {
    next({ name: "Home" });
    return;
  }

  if (to.meta.requiresAuth) {
    if (_isAuthenticated) next();
    else next({ name: "Login" });
  } else {
    next();
  }
});
export default router;
