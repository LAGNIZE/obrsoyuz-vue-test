import { createRouter, createWebHistory } from "vue-router";
import NewsPage from "@/pages/NewsPage";
import PostIdPage from "@/pages/PostIdPage";

const routes = [
  { path: "/", component: NewsPage },
  { path: "/posts/:id", component: PostIdPage, props: true },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
