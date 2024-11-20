import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/HomeView.vue";
// import { getCurrentUser } from "vuefire";

const routes = [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/adduser',
      name: 'adduser',
      component: () => import('../views/AddUserView.vue'),
    },
    {
      path: '/assignclothes',
      name: 'assignclothes',
      component: () => import('../views/AssignClothesView.vue'),
    },
    {
      path: '/clotheslist',
      name: 'clotheslist',
      props: true,
      component: () => import('../views/ClothesListView.vue')
    },
    {
      path: '/userslist',
      name: 'userslist',
      component: () => import('../views/UsersListView.vue')
    },
  
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;