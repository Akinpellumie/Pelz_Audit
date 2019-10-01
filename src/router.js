import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './views/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/history',
      name: 'history',

      component: () => import(/* webpackChunkName: "about" */ './views/History.vue')
    }
  ]
})