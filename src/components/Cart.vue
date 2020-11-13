<template>
  <div>
    <div class="cart">
        <h3>{{name}} </h3>
        <img :src="image.src" :alt="image.alt">
        <p><strong>quantity : {{quantity}} </strong></p>
        <p> <strong>{{price}} $</strong></p>
        <button class="cart_button" @click="deleteFromCart(index,id_arg)">Delete</button>
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
    id:{
      type : Number
    },
    image : {
      type : Object,
      default : function(){return{
        src: require('@/assets/no_image.png'),
        alt : 'no_image'
      }}
    },
    price : {
      type : Number
    },
    index : {
      type : Number
    },
    deleteFromCart : {
      type : Function
    },
    quantity : {
      type : Number
    }
  }
}
</script>

<style>

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