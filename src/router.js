import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signin",
      name: "signin",
      component: () => import("./views/SignIn.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("./views/SignUp.vue"),
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/create-story",
      name: "create-story",
      component: () => import("./views/CreateStory.vue"),
    },
    {
      path: "/my-stories",
      name: "my-stories",
      component: () => import("./views/MyStories.vue"),
    },
    {
      path: "/view-story/:id",
      name: "view-story",
      component: () => import("./views/ViewStory.vue"),
    },
    {
      path: "/edit-story/:id",
      name: "edit-story",
      component: () => import("./views/EditStory.vue"),
    },
    {
      path: "/manage-categories",
      name: "manage-categories",
      component: () => import("./views/Categories.vue"),
    },
    {
      path: "/manage-configurations",
      name: "manage-configurations",
      component: () => import("./views/Configurations.vue"),
    },

    {
      path: "/manage-languages",
      name: "manage-languages",
      component: () => import("./views/Languages.vue"),
    },
  ],
});

export default router;
