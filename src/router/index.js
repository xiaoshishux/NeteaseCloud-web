import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const headerMenu = () => import('../components/headers/headerMenu')
const Home = () => import('../views/Home/Home.vue')
const ToLogin = () => import('../views/ToLogin.vue')
const newSongInfo = () => import('../views/homeChildren/newSongInfo.vue')
const Singer = () => import('../views/Home/Singer.vue')
const SingList = () => import('../views/Home/SingList.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home', component: headerMenu,
    children: [
      {
        path: '/home', component: Home
      },
      {
        path: '/login', component: ToLogin
      },
      {
        path: "/newSongInfo", component: newSongInfo
      },
      {
        path: "/singer", component: Singer
      },
      {
        path: "/singList", component: SingList
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
