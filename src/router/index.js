import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import FormData from '../components/FormData'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [ 
      { 
        path: '/dashboard/new', 
        component: FormData,
        meta: {
          title: 'New ticket'
        }
      }
    ],
  },
  {
    path: '/',
    name: 'Login',
    component: FormData
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
