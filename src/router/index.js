import vue from "vue";
import vueRouter from "vue-router";

const Home = () => import("views/home/Home.vue");
const category = () => import("components/content/Category.vue");
const shopCart = () => import("components/content/ShopCart.vue");
const personal = () => import("components/content/Personal.vue");

vue.use(vueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    name: "category",
    component: category,
  },
  {
    path: "/shopCart",
    name: "shopCart",
    component: shopCart,
  },
  {
    path: "/personal",
    name: "personal",
    component: personal,
  },
];

const router = new vueRouter({ routes, mode: "history" });

export default router;
