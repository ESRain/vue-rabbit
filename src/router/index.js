import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue';
import Layout from '@/views/Layout/index.vue';
import Category from '@/views/Category/index.vue';
import Home from '@/views/Home/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    component:Layout,
    children:[
      {
        path:'',   //路径置空，当一级路由渲染时，这个二级路由也会渲染
        component:Home,
      },
      {
        path:'catagory',
        component:Category,
      },
    ]
   },
   {
    path:'/Login',
    component:Login
   },
  ]
})

export default router
