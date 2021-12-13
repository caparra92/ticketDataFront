import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Dashboard from '../views/Dashboard'
import FormData from '../components/FormData'
import EditTicket from '../components/EditTicket'
import Login from '../views/Login'
import Tickets from '../views/Tickets'

Vue.use(VueRouter)

// const notLoggedIn = (to, from, next) => {
//   if(!this.$store.loggedIn) {
//     next()
//     return
//   }
//   next('/')
// }

const loggedIn = (to, from, next) => {
  if(store.getters.loggedIn) {
    next()
    return
  }
  next('/')
}

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: loggedIn,
    meta: {
      requiresAuth: true,
    },
    children: [ 
      { 
        path: '/dashboard/new', 
        component: FormData,
        beforeEnter: loggedIn,
        meta: {
          title: 'New ticket',
          requiresAuth: true,
        }
      },
      { 
        path: '/dashboard/tickets', 
        name: 'tickets',
        component: Tickets,
        beforeEnter: loggedIn,
        meta: {
          title: 'My Tickets',
          requiresAuth: true,
        }
      },
      { 
        path: '/dashboard/tickets/:id',
        component: EditTicket,
        beforeEnter: loggedIn,
        meta: {
          title: 'Edit ticket',
          requiresAuth: true,
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

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !loggedIn) next({ name: 'Login' })
  else next()
})

export default router
