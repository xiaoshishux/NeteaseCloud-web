import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const headerMenu = () => import('../components/headers/headerMenu')
const Home = () => import('../views/Home/Home.vue')
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
