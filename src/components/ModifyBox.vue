<template>
  <div class="modifyBox">
      <div class="modifyTitle">
          <p>Modify your order</p>
      </div>
      <div class="modifyClose"><img @click="close" class="modifyCloseImage" src="../assets/close.png" alt="close"></div>
      <div class="modifyInfo">
          <p> {{cart[index].name}} </p>
          <p> <img :src="cart[index].image.src" :alt="cart[index].image.alt"> </p>
          <p> {{cart[index].price_act}} $ </p>
          
      </div>
      <hr/>
      <div class="modifyPrice">
          <p class="modifyPriceItem">Your old price order : {{cart[index].price}} $</p>
          <p class="modifyPriceItem">You new price order : <input id="modifyInput"  type="number" placeholder="your new price" v-model="newPrice"> $</p>
          <p class="modifyPriceItem">New price margin : <strong>{{priceMargin}} </strong></p>
      </div>  
      <div class="modifyButtonBox"><button class="modifyButton" @click="updatePriceCart">Update</button></div>   
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
    },methods:{
        close(){
            this.$emit("close");
        },
        updatePriceCart(){
            this.$store.dispatch('updatePriceCart', {index:this.index, price:document.getElementById("modifyInput").value});
            this.$emit("close");
        }
    }
}
</script>

<style>
.modifyCloseImage{
    width: 45px;
    cursor: pointer;
}
.modifyClose{
    position: absolute;
    top: 5px;
    right: 10px;
}
.modifyTitle{
    font-size: 2em;
    font-weight: bold;
    text-align: center;
}
.modifyInfo{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.modifyPrice{
    text-align:center;
}
#modifyInput{
    border: none;
    outline: none;
    background: none;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.384);
}
.modifyBox{
    width: 900px;
    height: 600px;
    border: 1px solid  rgba(92, 87, 87, 0.329);
    background: white;
    border-radius: 20px;
}
.modifyButtonBox{
    text-align: center;
}
.modifyButton{
    margin-top: 15px;
    margin-right: 30px;
    border-radius: 20px;
    width: 250px;
    border-radius: 20px;
}
.modifyPriceItem{
    margin:50px 0;
}
</style>