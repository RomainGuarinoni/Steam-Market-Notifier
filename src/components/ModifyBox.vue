<template>
  <div class="modifyBox">
      <div class="modifyTitle">
          <p>Modify your order</p>
      </div>
      <div class="modifyInfo">
          <p> {{cart[index].name}} </p>
          <p> <img :src="cart[index].image.src" :alt="cart[index].image.alt"> </p>
          <p> {{cart[index].price_act}} $ </p>
      </div>
      <div class="modifyPrice">
          <p>Your old price order : {{cart[index].price}} $</p>
          <p>You new price order : <input class="modifyInput" type="number" placeholder="your new price" v-model="newPrice"> $</p>
          <p>New price margin : {{priceMargin}} </p>
      </div>
      <button class="modifyButton">Update</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props:{
        index :{
            type : Number
        },
    },
    data(){
        return{
            newPrice:null
        }
    },
    computed:{
        ...mapState(['cart']),
        priceMargin(){
            return Math.round((this.cart[this.index].price_act - this.newPrice)*100)/100
        }
    }
}
</script>

<style>
.modifyInput{
    border: none;
    outline: none;
    background: none;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.384);
}
.modifyBox{
    width: 900px;
    height: 700px;
    border: 1px solid  rgba(92, 87, 87, 0.329);
    background: white;
    border-radius: 20px;
}
.modifyButton{
    margin-top: 15px;
    margin-right: 30px;
    border-radius: 20px;
    width: 250px;
    border-radius: 20px;
}
</style>