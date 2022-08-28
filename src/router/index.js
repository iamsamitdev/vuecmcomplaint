import Vue from 'vue'
import VueRouter from 'vue-router'

// Import Frontend Layout
import FrontendLayout from '@/layouts/Frontend.vue'

import Home from '../views/frontend/Home.vue'
import About from '../views/frontend/About.vue'
import Portfolio from '../views/frontend/Portfolio.vue'
import Service from '../views/frontend/Service.vue'
import Contact from '../views/frontend/Contact.vue'
import Register from '../views/frontend/Register.vue'
import Login from '../views/frontend/Login.vue'

// 404
import NotFound404 from '../views/NotFound404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/about',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'About',
        component: About
      }
    ]
  },
  {
    path: '/portfolio',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Portfolio',
        component: Portfolio
      }
    ]
  },
  {
    path: '/service',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Service',
        component: Service
      }
    ]
  },
  {
    path: '/contact',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Contact',
        component: Contact
      }
    ]
  },
  {
    path: '/register',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Register',
        component: Register
      }
    ]
  },
  {
    path: '/login',
    component: FrontendLayout,
    children: [
      {
        path: '',
        name: 'Login',
        component: Login
      }
    ]
  },
  // Error 404
  {
    path: "/:catchAll(.*)",
    component: NotFound404,
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
