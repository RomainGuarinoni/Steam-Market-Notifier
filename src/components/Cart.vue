<template>
  <div>
    <div class="cart">
        <h3 id="title_cart">{{name}} </h3>
        <p> {{state}} </p>
        <img :src="image.src" :alt="image.alt">
        <p> <strong>{{priceRound}} $</strong></p>
        <p><strong>Price margin : {{differencePrice}} $</strong> </p>
        <button class="cart_button" @click="modify">Modify</button>
        <button class="cart_button" @click="deleteFromCart(index)">Delete</button>
    </div>
    <hr/>
  </div>
</template>

<script>
export default {
  name : 'Cart',
  props : {
    name : {
      type : String
    },
    state:{
      type: String
    },
    image : {
      type : Object,
      default : function(){return{
        src: require('@/assets/no_image.png'),
        alt : 'no_image'
      }}
    },
    price : {
      type : String
    },
    index : {
      type : Number
    },
    deleteFromCart : {
      type : Function
    },
    price_act : {
      type : Number
    }
  },
  computed:{
    priceRound(){
      return Math.round(this.price_act*100)/100;
    },
    differencePrice(){
      return Math.round((this.price_act - this.price)*100)/100
    }
  },methods:{
    modify(){
      this.$emit('modify-cart-price',{ index : this.index, modify: true})
    }
  }
}
</script>

<style>
#title_cart{
  width: 300px;
}
.cart_button:active {outline-style:none;}
.cart_button{
  border: none;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  margin-left: 20px;
  font-size: 1.2em;
  margin: 20px 20px;
}
.cart{
  display: flex;
  justify-content:space-around;
  align-items:center;
  height: 100px;
}
img{
  width: 200px;
}

button:hover{
    box-shadow: 2px 2px 2px rgba(95, 94, 94, 0.63);
}
</style>