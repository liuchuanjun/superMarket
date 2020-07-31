import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home')
const Catgory = () => import('@/views/catgory/Catgory')
const Profile = () => import('@/views/profile/Profile')
const Shop = () => import('@/views/shop/Shop')
const Detail = () => import('@/views/detail/Detail')

// 创建应用
Vue.use(VueRouter)

// 创建路由实例

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/catgory',
    component: Catgory
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/detail/:id',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

export default router
