import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Devices from '../views/Devices.vue'
import Patients from '../views/Patients.vue'
import Settings from '../views/Settings.vue'
import Tests from '../views/Tests.vue'
import TestGrid from '../views/TestGrid.vue'
import TestForm from '../views/TestForm.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
