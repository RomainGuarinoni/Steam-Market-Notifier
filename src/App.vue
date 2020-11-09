<template>
  <div id="app">
    <Welcome  :name="name"/>
    <Navbar />
    <div id="skinPreview">
      <SkinPreview
        v-for="item in skin"
        :image="item.image"
        :name="item.name"
        :price="item.price"
        :state="item.state"
        :available="item.available"
        :addToCart='addToCart'
        :key="item.name"
      />
    </div>
    <div class="cart_box">
      <span class="Cart_title">Your Cart</span><button class="cart_button" @click='showCartFonction'>Afficher</button> <span><strong>Total : {{totalCart}} $</strong></span>
      <Cart v-show="showCart" v-for="(item,index) in cart" :key="item.name" :name="item.name" :image='item.image' :price='item.price' :index='index' :deleteFromCart="deleteFromCart"  />
    </div>
  </div>
</template>

<script>
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import SkinPreview from'./components/SkinPreview'
import Cart from './components/Cart'

export default {
  name: 'App',
  components: {
    Navbar, Welcome, SkinPreview,Cart
  },
  data(){
    return {
      name: 'Romain',
      showCart : false,
      skin : [
        {
          name : 'ak-47 Vulcan',
          price : 145,
          state : 'factory new',
          available : false,
          image : {
            src: require("@/assets/ak-k7_vulcan.png"),
            alt : "photo de l'ak-47"
            },
        },
        {
          name : 'awp Hyper beast',
          price : 70,
          state : 'batle scared',
          available : true,
          image : {
            src: require("@/assets/awp_hyper_beast.png"),
            alt : "photo de l'awp"           
          },
        },
        {
          name : 'M4A4 desolate space',
          price : 50,
          state : 'factory new',
          available : true,
          image : {
            src: require("@/assets/m4a4_space.png"),
            alt : "photo de la m4a4" 
          }
        }
      ],
      cart : [
      ]
    }
  },
  computed : {
    totalCart(){
      let total=0;
      for(let item of this.cart){
        total+=item.price;
      }
      return total;
    }
  },
  methods :{
    showCartFonction(){
      if(this.showCart==false){
        this.showCart=true;
      }
      else{
        this.showCart=false;
      }
    },
    addToCart(name_arg, price_arg,image_arg, available_arg){
      if(available_arg==false){
        alert('Ce skin n\'est pas disponible')
      }
      else{
        this.cart.push({name : name_arg, price: price_arg, image : image_arg})
      }
    },
    deleteFromCart(index){
      console.log(index);
      this.cart.splice(index,1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}
#skinPreview{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.cart_box{
  margin-top: 30px;
}
.Cart_title{
  font-size: 2em;
  font-weight: bold;
  text-decoration: underline;
}
.cart_button{
  border: none;
  border-radius: 30px;
  padding: 8px;
  cursor: pointer;
  margin-left: 20px;
  font-size: 1.2em;
  margin: 20px 20px;
}
.cart_button:hover{
    box-shadow: 2px 2px 2px rgba(95, 94, 94, 0.63);
    font-weight: bold;
}
.cart_box{
  width: 800px;
  height: auto;
}
button{
  outline-style: none;
}
</style>
