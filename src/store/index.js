import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skin: [
      [
        {
        name : 'AK-47 | Vulcan (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 10,
        image : {
          src: require("@/assets/ak-k7_vulcan.png"),
          alt : "photo de l'ak-47"
          },
        },
        {
        name : 'AK-47 | Neon Rider (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 20,
        image : {
          src: require("@/assets/ak-47_neon.png"),
          alt : "photo de la m4a4" 
          },
        },
        {
        name : 'AK-47 | Vulcan (Field-Tested)',
        price : 0,
        state : 'Field-test',
        quantity : 10,
        image : {
          src: require("@/assets/ak-k7_vulcan.png"),
          alt : "photo de l'ak-47"
          },
        },
        {
        name : 'AK-47 | Vulcan (Well-Worn)',
        price : 0,
        state : 'Well Worn',
        quantity : 10,
        image : {
          src: require("@/assets/ak-k7_vulcan.png"),
          alt : "photo de l'ak-47"
          },
        },
      ],
      [
        {
        name : 'M4A4 | Desolate Space (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 0,
        image : {
          src: require("@/assets/m4a4_space.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'M4A1-S | Cyrex (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 10,
        image : {
          src: require("@/assets/m4a1s_cyrex.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'M4A4 | Neo-Noir (Factory New)',
        price : 0,
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
        name : 'AWP | Hyper Beast (Factory New)',
        price : 0,
        state : 'batle scared',
        quantity : 1,
        image : {
          src: require("@/assets/awp_hyper_beast.png"),
          alt : "photo de l'awp"           
        },
      },
      {
        name : 'AWP | Wildfire (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 5,
        image : {
          src: require("@/assets/awp_wild.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'AWP | Wildfire (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 5,
        image : {
          src: require("@/assets/awp_wild.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'AWP | Wildfire (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 5,
        image : {
          src: require("@/assets/awp_wild.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'AWP | Wildfire (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 5,
        image : {
          src: require("@/assets/awp_wild.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'AWP | Wildfire (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 5,
        image : {
          src: require("@/assets/awp_wild.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'AWP | Wildfire (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 5,
        image : {
          src: require("@/assets/awp_wild.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'AWP | Wildfire (Factory New)',
        price : 0,
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
      state.cart[payload.index].quantity--;
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
    },
    UPDATE_PRICE(state,payload){
      state.skin[payload.id][payload.index].price=payload.price;
    }
  },
  actions: {
    addToCart(context, payload){
      let exist = false;
      let index_cart = 0;
      for(let i=0;i<context.state.cart.length;i++){
        if (context.state.cart[i].index==payload.index && context.state.cart[i].id==payload.id){
          exist=true;
          index_cart=i;
        }
      }
      if(exist==true && context.state.skin[payload.id][payload.index].quantity>=1){
        context.commit('REDUCE_QTTY_SKIN',{id : payload.id, index: payload.index});
        context.commit('INCREASE_QTTY_CART',{index : index_cart});
        context.commit('INCREASE_PRICE_CART',{index : index_cart, price : payload.price});
      }
      else if(context.state.skin[payload.id][payload.index].quantity>=1){
        context.commit('CART_ADD_ITEM',{name : payload.name,price: payload.price,image : payload.image,index : payload.index, id : payload.id});
        context.commit('REDUCE_QTTY_SKIN',{id : payload.id, index : payload.index});
      }
    },
    deleteFromCart(context,payload){
      if(context.state.cart[payload.index].quantity>1){
        context.commit('REDUCE_PRICE_CART',{index: payload.index});
        context.commit('REDUCE_QTTY_CART',{index : payload.index});
        context.commit('INCREASE_QTTY_SKIN',{index : payload.index});
      }
      else{
        context.commit('INCREASE_QTTY_SKIN',{index : payload.index});
        context.commit('CARD_REMOVE_ITEM',{index : payload.index});
      }
    },
    async uptadePriceSkins(context){
      for(let id=0;id<context.state.skin.length;id++){
        for(let index=0;index<context.state.skin[id].length;index++){
          const name=context.state.skin[id][index].name;
          const test = await axios.get('http://api.steamapis.com/market/item/730/'+name+'?api_key=EQaV7_NxMwv6Vz5yMCvfHPlJTSs')
          context.commit('UPDATE_PRICE',{ id : id, index : index, price :test.data.median_avg_prices_15days[14][1]})
        }
      }
    }
  },
  modules: {
  }
})
