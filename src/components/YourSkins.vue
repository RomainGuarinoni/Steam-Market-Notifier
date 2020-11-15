<template>
  <div class="YourSkins">
    <span class="YourSkinsTitle">Your SKins</span>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  methods:{
    ...mapState(['cart']),
    totalCartItem(){
      return this.cart.length;
    },
    totalCartPrice(){
      let total=0;
      for(let item of this.cart){
        total+=item.price;
      }
      return total;
    }
  }
}
</script>

<style>

</style>