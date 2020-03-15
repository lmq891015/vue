import Vue from 'vue';
import VueRouter from 'vue-router';
import { Layout } from "../layout"; // 页面整体布局

const Login = () => import('../views/login/login');
const index = () => import('../views/main/index');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/manage',
    name: '',
    component: Layout,
    children:[{
      path:'',
      component:index,
    }]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
