import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    skinZoom:{
      blur : false,
      display: false,
      index: 1,
      id : 0,
      name : 'Vulcan',
      nameMarket : 'AK-47 | Vulcan (Factory New)',
      state : 'Factory New',
      image : {
        src: require("@/assets/ak-k7_vulcan.png"),
        alt : "photo de l'ak-47"
        },
        price:0 
    },
    skin: [
      [
        {
        name : 'AK-47 | Vulcan',
        nameMarket : 'AK-47 | Vulcan (Factory New)',
        price : 0,
        state : 'Factory New',
        quantity : 1,
        image : {
          src: require("@/assets/ak-k7_vulcan.png"),
          alt : "photo de l'ak-47"
          },
        },
        {
        name : 'AK-47 | Neon Rider',
        nameMarket : 'AK-47 | Neon Rider (Factory New)',
        price : 0,
        state : 'Factory New',
        quantity : 1,
        image : {
          src: require("@/assets/ak-47_neon.png"),
          alt : "photo de la m4a4" 
          },
        },
        {
        name : 'AK-47 | Fire Serpent',
        nameMarket : 'AK-47 | Fire Serpent (Factory New)',
        price : 0,
        state : 'Factory New',
        quantity : 1,
        image : {
          src: require("@/assets/ak-k7_FireSerpent.png"),
          alt : "photo de l'ak-47"
          },
        },
        {
        name : 'AK-47 | Asiimov',
        nameMarket : 'AK-47 | Asiimov (Factory New)',
        price : 0,
        state : 'Factory New',
        quantity : 1,
        image : {
          src: require("@/assets/ak-k7_asimov.png"),
          alt : "photo de l'ak-47"
          },
        },
        {
          name : 'AK-47 | Fuel Injector',
          nameMarket : 'AK-47 | Fuel Injector (Factory New)',
          price : 0,
          state : 'Factory New',
          quantity : 1,
          image : {
            src: require("@/assets/ak-47_fuel.png"),
            alt : "photo de l'ak-47"
            },
          },
          {
            name : 'AK-47 | Safari Mesh',
            nameMarket : 'AK-47 | Safari Mesh (Factory New)',
            price : 0,
            state : 'Factory New',
            quantity : 1,
            image : {
              src: require("@/assets/ak-k7_safari.png"),
              alt : "photo de l'ak-47"
              },
            },
          
      ],
      [
        {
        name : 'M4A4 | Desolate Space',
        nameMarket : 'M4A4 | Desolate Space (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 1,
        image : {
          src: require("@/assets/m4a4_space.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'M4A4 | Cyrex',
        nameMarket : 'M4A1-S | Cyrex (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 1,
        image : {
          src: require("@/assets/m4a1s_cyrex.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'M4A4 | Neo-Noir',
        nameMarket : 'M4A4 | Neo-Noir (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 1,
        image : {
          src: require("@/assets/m4a4_neo.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'M4A4 | The Emperor',
        nameMarket : 'M4A4 | The Emperor (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 1,
        image : {
          src: require("@/assets/m4a4_emperor.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'M4A4 | Hellfire',
        nameMarket : 'M4A4 | Hellfire (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 1,
        image : {
          src: require("@/assets/m4a4_helfire.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'M4A4 | Howl',
        nameMarket : 'M4A4 | Howl (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 1,
        image : {
          src: require("@/assets/m4a4_howl.png"),
          alt : "photo de la m4a4" 
        },
      },
      
      ],
      [
        {
        name : 'AWP | Hyper Beast',
        nameMarket : 'AWP | Hyper Beast (Factory New)',
        price : 0,
        state : 'batle scared',
        quantity : 1,
        image : {
          src: require("@/assets/awp_hyper_beast.png"),
          alt : "photo de l'awp"           
        },
      },
      {
        name : 'AWP | The Prince',
        nameMarket : 'AWP | The Prince (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 1,
        image : {
          src: require("@/assets/awp_prince.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'AWP | Wildfire',
        nameMarket : 'AWP | Wildfire (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 1,
        image : {
          src: require("@/assets/awp_wild.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'AWP | Neo-Noir',
        nameMarket : 'AWP | Neo-Noir (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 1,
        image : {
          src: require("@/assets/awp_neo.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'AWP | Medusa',
        nameMarket : 'AWP | Medusa (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 1,
        image : {
          src: require("@/assets/awp_medusa.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'AWP | Gungnir',
        nameMarket : 'AWP | Gungnir (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 1,
        image : {
          src: require("@/assets/awp_gungnir.png"),
          alt : "photo de la m4a4" 
        },
      },
      {
        name : 'AWP | Oni Taiji',
        nameMarket : 'AWP | Oni Taiji (Factory New)',
        price : 0,
        state : 'factory new',
        quantity : 1,
        image : {
          src: require("@/assets/awp_oni.png"),
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
      state.cart.push({name : payload.name, price_act: payload.price_act, price: payload.price, image : payload.image, index : payload.index, id : payload.id,state: payload.state});
    },
    CARD_REMOVE_ITEM(state,payload){
      state.cart.splice(payload.index,1);
    },
    UPDATE_PRICE(state,payload){
      state.skin[payload.id][payload.index].price=payload.price;
    },
    UPDATE_PRICE_SKIN_ZOOM(state,payload){
      state.skinZoom.price=payload.price;
      state.skinZoom.state=payload.state;
    },
    UPDATE_PRICE_CART(state,payload){
      state.cart[payload.index].price=payload.price;
    }
  },
  actions: {
    addToCart(context, payload){
      context.commit('CART_ADD_ITEM',{name : payload.name,price: payload.price,price_act: payload.price_act, image : payload.image,index : payload.index, id : payload.id,state : payload.state});
      console.log('passé')
    },
    deleteFromCart(context,payload){
      context.commit('INCREASE_QTTY_SKIN',{index : payload.index});
      context.commit('CARD_REMOVE_ITEM',{index : payload.index});
    },
    updatePriceCart(context,payload){
      context.commit('UPDATE_PRICE_CART',payload);
    },
    async uptadePriceSkins(context){
      for(let id=0;id<context.state.skin.length;id++){
        for(let index=0;index<context.state.skin[id].length;index++){
          const name=context.state.skin[id][index].nameMarket;
          const test = await axios.get('http://api.steamapis.com/market/item/730/'+name+'?api_key=EQaV7_NxMwv6Vz5yMCvfHPlJTSs')
          context.commit('UPDATE_PRICE',{ id : id, index : index, price :Math.round(test.data.median_avg_prices_15days[14][1]*100)/100})
        }
      }
    },
    async updateStateZoomSkin(context,payload){
      const name_arg=context.state.skinZoom.name;
      const state = payload.state;
      const test = await axios.get('http://api.steamapis.com/market/item/730/'+name_arg + ' ('+ state+')'+'?api_key=EQaV7_NxMwv6Vz5yMCvfHPlJTSs')
      context.commit('UPDATE_PRICE_SKIN_ZOOM',{state : payload.state, price :Math.round(test.data.median_avg_prices_15days[14][1]*100)/100})
    }
  },
  modules: {
  }
})
