import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    name : 'Home',
    components : require('@/components/Home.vue')
  },
  {
    path:'/SkinPage',
    name : 'SkinPage',
    components : require("@/components/SkinPage.vue")
  },
  {
    path : '/Contact',
    name : 'Contact',
    components : require('@/components/Contact.vue')
  }
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router
