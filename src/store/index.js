import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skin: [
      [
        {
        name : 'ak-47 Vulcan',
        price : 145,
        state : 'factory new',
        quantity : 10,
        image : {
          src: require("@/assets/ak-k7_vulcan.png"),
          alt : "photo de l'ak-47"
          },
        },
        {
        name : 'AK-47 Neon',
        price : 150,
        state : 'factory new',
        quantity : 20,
        image : {
          src: require("@/assets/ak-47_neon.png"),
          alt : "photo de la m4a4" 
          },
        },
        {
        name : 'salope',
        price : 145,
        state : 'factory new',
        quantity : 10,
        image : {
          src: require("@/assets/ak-k7_vulcan.png"),
          alt : "photo de l'ak-47"
          },
        },
        {
        name : 'pute',
        price : 145,
        state : 'factory new',
        quantity : 10,
        image : {
          src: require("@/assets/ak-k7_vulcan.png"),
          alt : "photo de l'ak-47"
          },
        },
      ],
      [
        {
        name : 'M4A4 desolate space',
        price : 50,
        state : 'factory new',
        quantity : 0,
        image : {
          src: require("@/assets/m4a4_space.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'M4A41-S cyrex',
        price : 2,
        state : 'factory new',
        quantity : 10,
        image : {
          src: require("@/assets/m4a1s_cyrex.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'M4A4 neo noir',
        price : 250,
        state : 'factory new',
        quantity : 3,
        image : {
          src: require("@/assets/m4a4_neo.png"),
          alt : "photo de la m4a4" 
        },
      },
      ],
      [
        {
        name : 'awp Hyper beast',
        price : 70,
        state : 'batle scared',
        quantity : 1,
        image : {
          src: require("@/assets/awp_hyper_beast.png"),
          alt : "photo de l'awp"           
        },
      },
      {
        name : 'Awp wild fire',
        price : 500,
        state : 'factory new',
        quantity : 5,
        image : {
          src: require("@/assets/awp_wild.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'Awp wild fire',
        price : 500,
        state : 'factory new',
        quantity : 5,
        image : {
          src: require("@/assets/awp_wild.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'Awp wild fire',
        price : 500,
        state : 'factory new',
        quantity : 5,
        image : {
          src: require("@/assets/awp_wild.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'Awp wild fire',
        price : 500,
        state : 'factory new',
        quantity : 5,
        image : {
          src: require("@/assets/awp_wild.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'Awp wild fire',
        price : 500,
        state : 'factory new',
        quantity : 5,
        image : {
          src: require("@/assets/awp_wild.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'Awp wild fire',
        price : 500,
        state : 'factory new',
        quantity : 5,
        image : {
          src: require("@/assets/awp_wild.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'Awp wild fire',
        price : 500,
        state : 'factory new',
        quantity : 5,
        image : {
          src: require("@/assets/awp_wild.png"),
          alt : "photo de la m4a4" 
        },
      },
    ]
  ],
  cart : [],

  },
  mutations: {
    REDUCE_QTTY_SKIN(state, payload){
      state.skin[payload.id][payload.index].quantity--;
    },
    INCREASE_QTTY_SKIN(state, payload){
      state.skin[state.cart[payload.index].id][state.cart[payload.index].index].quantity++;
    },
    REDUCE_QTTY_CART(state, payload){
      state.cart[payload.index]--;
    },
    INCREASE_QTTY_CART(state,payload){
      state.cart[payload.index].quantity++;
    },
    INCREASE_PRICE_CART(state, payload){
      state.cart[payload.index].price+=payload.price
    },
    REDUCE_PRICE_CART(state,payload){
      state.cart[payload.index].price-=state.cart[payload.index].price/state.cart[payload.index].quantity;
    },
    CART_ADD_ITEM(state,payload){
      state.cart.push({name : payload.name, quantity : 1, price: payload.price, image : payload.image, index : payload.index, id : payload.id});  
    },
    CARD_REMOVE_ITEM(state,payload){
      state.cart.splice(payload.index,1);
    }
  },
  actions: {
    addToCart({state,commit}, payload){
      let exist = false;
      let index_cart = 0;
      for(let i=0;i<state.cart.length;i++){
        if (state.cart[i].index==payload.index && this.cart[i].id==payload.id){
          exist=true;
          index_cart=i;
        }
      }
      if(exist==true && state.skin[payload.id][payload.index].quantity>=1){
        commit('REDUCE_QTTY_SKIN',{id : payload.id, index: payload.index});
        commit('INCREASE_QTTY_CART',{index : index_cart});
        commit('INCREASE_PRICE_CART',{index : index_cart, price : payload.price});
      }
      else if(this.skin[payload.id][payload.index].quantity>=1){
        commit('CART_ADD_ITEM',{name : payload.name,price: payload.price,image : payload.image,index : payload.index, id : payload.id});
        commit('REDUCE_QTTY_SKIN',{id : payload.id, index : payload.index});
      }
    },
    deleteFromCart({state,commit},payload){
      if(state.cart[payload.index].quantity>1){
        commit('REDUCE_PRICE_CART',{index: payload.index});
        commit('REDUCE_QTTY_CART',{index : payload.index});
        commit('INCREASE_QTTY_SKIN',{index : payload.index});
      }
      else{
        commit('INCREASE_QTTY_SKIN',{index : payload.index});
        commit('CARD_REMOVE_ITEM',{index : payload.index});
      }
    }
  },
  modules: {
  }
})
