<template>
  <div>
    <div class="cart">
        <h3>{{name}} </h3>
        <img :src="image.src" :alt="image.alt">
        <p> <strong>{{price}} $</strong></p>
        <button @click="deleteFromCart(index)">Delete</button>
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