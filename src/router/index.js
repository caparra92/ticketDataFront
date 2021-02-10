import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import FormData from '../components/FormData'
import Login from '../views/Login'

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
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
