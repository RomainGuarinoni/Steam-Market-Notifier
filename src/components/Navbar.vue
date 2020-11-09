<template>
  <div class="navbar">
    <ul>
        <li><router-link :to="{name : 'Home'}"> Home</router-link></li>
        <li><router-link :to="{name : 'SkinPage'}"> Skin Store</router-link></li>
        <li><router-link :to="{name : 'Contact'}"> Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
    name : "Navbar"
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: black;
    font-size: 1.5em;
    transition: all ease 150ms;
}
a:hover{
    color: rgb(255, 1, 1);
}
ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
    background: rgb(235, 232, 232);
    width: 100%;
    padding: 15px 0;
}
</style>