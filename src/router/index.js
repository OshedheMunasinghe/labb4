import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home";
import HotCoffee from "@/views/HotCoffee";
import IceCoffee from "@/views/IceCoffee";
import About from '@/views/About'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/hot',
    name: 'HotCoffee',
    component: HotCoffee
  },
  {
    path: '/ice',
    name: 'IceCoffee',
    component: IceCoffee
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
