import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LogIn from './views/LogIn.vue'
import SignUp from './views/SignUp.vue'
import Principal from './views/Principal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home 
    },
    {
      path:"/login",
      name:"login",
      component: LogIn,
    },
    {
      path:"/sign-up",
      name:"sing up",
      component: SignUp,
    },
    {
      path:"/principal",
      name:"principal",
      component: Principal,
    }
  ]
})
