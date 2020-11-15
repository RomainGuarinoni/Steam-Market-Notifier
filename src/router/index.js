import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from'../components/Home.vue'
import SkinPageNav from '../components/SkinPageNav.vue'
import SkinPage from'../components/SkinPage.vue'
import YourSkins from '../components/YourSkins.vue'
import Store from '../components/Store.vue'

Vue.use(VueRouter)

const routes = [
  {
    path : '/',
    name : 'Home',
    component : Home
  },
  {
    path:'/SkinStore',
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
    path : '/YourSkins',
    name : 'YourSkins',
    component : YourSkins
  }
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router
