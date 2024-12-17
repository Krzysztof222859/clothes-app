import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/HomeView.vue";
// import { getCurrentUser } from "vuefire";

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/addorder',
      name: 'addorder',
      component: () => import('../views/AddOrderView.vue'),
    },
    {
      path: '/clothesordered',
      name: 'clothesordered',
      component: () => import('../views/ClothesOrderedView.vue'),
    },
    {
      path: '/clothesgiven',
      name: 'clothesgiven',
      props: true,
      component: () => import('../views/ClothesGivenView.vue')
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;