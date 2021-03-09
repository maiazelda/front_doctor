import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Devices from '../views/Devices.vue'
import Patients from '../views/Patients.vue'
import Settings from '../views/Settings.vue'
import Tests from '../views/Tests.vue'
import TestGrid from '../views/TestGrid.vue'
import TestForm from '../views/TestForm.vue'
import Auth from '../views/Auth.vue'
import LogoutCallback from '../views/oidc/LogoutCallback.vue'
import LoginCallback from '../views/oidc/LoginCallback.vue'
import Init from '../views/Init.vue'
import Store from '@/store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/devices',
    name: 'Devices',
    component: Devices
  },
  {
    path: '/patients',
    name: 'Patients',
    component: Patients
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/tests',
    name: 'Tests',
    component: Tests
  },
  {
    path: '/testgrid',
    name: 'TestGrid',
    component: TestGrid
  },
  {
    path: '/testform',
    name: 'TestForm',
    component: TestForm
  },
  {
    path: '/init',
    name: 'Init',
    component: Init,
    props: true
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
  {
    path: '/login',
    name: 'LoginCallback',
    component: LoginCallback
  },
  {
    path: '/logout',
    name: 'LogoutCallback',
    component: LogoutCallback
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (Store.getters['auth/isAuth']) next()
    else next({ name: 'Init', params: { to } })
  }
  else next()
})

export default router

