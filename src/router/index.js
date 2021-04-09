import Vue from 'vue'
import VueRouter from 'vue-router'

import Welcome from '../views/welcome.vue'
import Level1 from '../views/level1.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/level-1',
    name: 'Level1',
    component: Level1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log('before each')
  console.log('levels', store.state.levels)
  const foundIndex = store.state.levels.findIndex(element => element === false)
  const foundRoute = routes[foundIndex-1]
  console.log('found', foundRoute)

  console.log('from', from)
  if (to.name === foundRoute.name) {
    next()
  } else {
    next({ name: foundRoute.name }) 
  }
})

export default router
