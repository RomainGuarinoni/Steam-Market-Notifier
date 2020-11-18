<template>
  <div class="store">
      <p><span class="title_store">Welcome to the store</span></p>
      <p>Select a class of skins in  the Nav bar situated on the left of your screen and add skin to your cart</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.store{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.title_store{
    color: red;
    font-size: 5em;
}
p{
    font-size: 1.5em;
}
</style>