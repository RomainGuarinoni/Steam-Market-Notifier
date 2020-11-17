<template>
  <div class="YourSkins">
    <div class="YourSkinsTitleBox">
      <p><span class="YourSkinsTitle">Your Skins</span></p>
    </div>
    <div class="YourSkinsAlert" v-show="cart.length==0">
      <p><span id="alertskin1">You have not yet added any skins to your cart</span><br/>
        <span id="alertskin2">Return to the Skin Store Page to add Skins yo your cart</span>
      </p>
    </div>
    <div v-show="cart.length>0" class="YourSkinsInfoBox">
      <p><span class="YourSkinsTotal">{{totalCartItem}} skin<span v-show="cart.length>1">s</span></span></p>
      <p><span class="YourSkinsPrice">Total: {{totalCartPrice}} $ </span></p>
    </div>
    <div class="YourSkinsCartBox">
      <hr v-show="cart.length>0" />
      <Cart 
      v-for="(item,index) in cart"
      :key="index"
      :name ="item.name"
      :image="item.image"
      :price="item.price"
      :index="index"
      :deleteFromCart="deleteFromCart"
      :price_act="item.price_act"
      />
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Cart from './Cart.vue'
export default {
  components:{
    Cart,
  },
  computed:{
    ...mapState(['cart']),
    totalCartItem(){
      return this.cart.length;
    },
    totalCartPrice(){
      let total=0;
      for(let item of this.cart){
        total+=item.price;
      }
      return Math.round(total*100)/100;
    }
  },
  methods:{
    deleteFromCart(index){
      this.$store.dispatch('deleteFromCart',{index : index});
    },
  }
}
</script>

<style>
.YourSkinsTitleBox{
  text-align: center;
  color: red;
  font-size: 2em;
  margin-top: 20px;
  font-weight: bold;
}
.YourSkinsInfoBox{
  display: flex;
  justify-content: space-around;
  font-weight: bold;
}
.YourSkinsAlert{
  line-height: 150px;
  text-align: center;
  margin-top: 80px;
  font-size: 1.8em;
}
#alertskin1{
  color: rgba(252, 0, 0, 0.671);
}
</style>