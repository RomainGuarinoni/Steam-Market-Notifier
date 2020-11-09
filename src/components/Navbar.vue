<template>
  <div class="navbar">
    <ul>
        <li><a href="#"> Home</a></li>
        <li><a href="#"> Skin Items</a></li>
        <li><a href="#">Ressources</a></li>
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
    color: rgb(209, 15, 15);
}
ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
    background: rgb(235, 232, 232);
    padding: 15px 0;
}
</style>