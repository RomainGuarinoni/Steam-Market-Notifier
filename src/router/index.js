import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from'../components/Home.vue'
import SkinPageNav from '../components/SkinPageNav.vue'
import SkinPage from'../components/SkinPage.vue'
import Contact from '../components/Contact.vue'
import Store from '../components/Store.vue'

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    name : 'Home',
    component : Home
  },
  {
    path:'/SkinPage',
    name : 'SkinPage',
    component : SkinPageNav,
    children : [{
      path : '',
      name : 'basic',
      component : Store
    },
    {
      path : 'Skin/:id',
      name: "Skin",
      component : SkinPage,
      props : true
    }
  ],
  },
  {
    path : '/Contact',
    name : 'Contact',
    component : Contact
  }
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router
