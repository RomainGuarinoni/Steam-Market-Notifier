<template>
  <div>
    <div class="cart">
        <h3>{{name}} </h3>
        <img :src="image.src" :alt="image.alt">
        <p> <strong>{{price}} $</strong></p>
        <button class="cart_button" @click="deleteFromCart(index)">Delete</button>
    </div>
    <hr/>
  </div>
</template>

<script>
export default {
  name : 'Cart',
  props : ['name', 'image','price','index','deleteFromCart'],
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
button{
    border: none;
    border-radius: 30px;
    padding: 8px;
    cursor: pointer;
}
button:hover{
    box-shadow: 2px 2px 2px rgba(95, 94, 94, 0.63);
}
</style>