import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Detail2 from '../views/Detail2.vue'
import Detail3 from '../views/Detail3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/Detail2',
    name: 'Detail2',
    component: Detail2
  },
  {
    path: '/Detail3',
    name: 'Detail3',
    component: Detail3
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
