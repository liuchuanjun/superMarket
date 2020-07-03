import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home')
const Catgory = () => import('@/views/catgory/Catgory')
const Profile = () => import('@/views/profile/Profile')
const Shop = () => import('@/views/shop/Shop')

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
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function replace(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router
