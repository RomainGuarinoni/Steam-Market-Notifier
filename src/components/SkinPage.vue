<template>
    <div>
        <div id="skinPreview">
          <transition name="cartFade">
            <div v-show="cart.length>=1" class="cart_box">
              <span class="cart_title">Your Cart</span>
              <button class="cart_button" @click='showCartFonction'>Afficher</button> 
              <span><strong>Total : {{totalCart}} $ </strong></span>
              <span><strong>Item : {{totalItemCart}} </strong></span>
              <Cart 
              v-show="showCart" 
              v-for="(item,index) in cart" 
              :key="index" 
              :name="item.name" 
              :image='item.image' 
              :price='item.price' 
              :quantity ='item.quantity'
              :index='index' 
              :deleteFromCart="deleteFromCart"  
              />
            </div>
          </transition>
          <SkinPreview
              v-for="(item,index) in skin"
              :image="item.image"
              :name="item.name"
              :price="item.price"
              :state="item.state"
              :quantity="item.quantity"
              :addToCart='addToCart'
              :index ='index'
              :notAvailable ='notAvailable'
              :key="item.name"
          />
        </div>
    </div>
</template>

<script>
import SkinPreview from'./SkinPreview'
import Cart from './Cart'
export default {
    name : 'SkinPage',
    components: { SkinPreview,Cart
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
          quantity : 10,
          image : {
            src: require("@/assets/ak-k7_vulcan.png"),
            alt : "photo de l'ak-47"
            },
        },
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
          name : 'Deagle Kumicho Dragon',
          price : 0,
          state : 'factory new',
          quantity : 10,
          image : {
            src: require("@/assets/deagle_kumicho.png"),
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
        {
          name : 'MAC-10 neon',
          price : 30,
          state : 'factory new',
          quantity : 7,
          image : {
            src: require("@/assets/mac10_neon.png"),
            alt : "photo de la m4a4" 
          },
        },
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
    },
    totalItemCart(){
      return this.cart.length
    },
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
    addToCart(name_arg, price_arg,image_arg, quantity_arg, index_arg){
      let exist = false;
      let index_cart = 0;
      for(let i=0;i<this.cart.length;i++){
        if (this.cart[i].index==index_arg){
          exist=true;
          index_cart=i;
        }
      }
      if(exist==true && this.skin[index_arg].quantity>=1){
        this.skin[index_arg].quantity--;
        this.cart[index_cart].quantity++;
        this.cart[index_cart].price+=price_arg
      }
      else if(this.skin[index_arg].quantity>=1){
        this.cart.push({name : name_arg, quantity : 1, price: price_arg, image : image_arg, index : index_arg});
        this.skin[index_arg].quantity--;
      }
      
    },
    deleteFromCart(index){
      if(this.cart[index].quantity>1){
        this.cart[index].price-=this.cart[index].price/this.cart[index].quantity;
        this.cart[index].quantity--;
        this.skin[this.cart[index].index].quantity++;
      }
      else{
        this.skin[this.cart[index].index].quantity++;
        this.cart.splice(index,1);
      }
      
    },
    notAvailable(index){
      if (this.skin[index].quantity==0){
          return true;
      }
      else{
          return false;
      }
    }
  }

}
</script>

<style scoped>
.cartFade-enter-active {
  transition: opacity 1s;
}
.cartFade-enter, .cartFade-leave-to{
  opacity: 0;
}

.cart_title{
  font-size: 1.5em;
  font-weight: bold;
}
.cart_box span{
  margin-right: 20px;
}
#skinPreview{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.cart_box{
  margin-top: 30px;
  width: 100%;
  height: auto;
}
.Cart_title{
  font-size: 2em;
  font-weight: bold;
  text-decoration: underline;
}

.cart_button:hover{
    box-shadow: 2px 2px 2px rgba(95, 94, 94, 0.63);
    font-weight: bold;
}
button{
  outline-style: none;
}
</style>
