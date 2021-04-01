import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      // {
      //   path: '/about',
      //   name: 'about',
      //   component: About,
      // },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
]

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
