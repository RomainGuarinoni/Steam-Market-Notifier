<template>
  <div class="navbar">
    <ul>
        <li><router-link @click.native="unblur" class="navbar_main" :to="{name : 'Home'}"> Home</router-link></li>
        <li><router-link @click.native="unblur" class="navbar_main" :to="{name : 'basic'}"> Skin Store</router-link></li>
        <li><router-link @click.native="unblur" class="navbar_main" :to="{name : 'YourSkins'}"> Your Skins</router-link></li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name : "Navbar",
    computed : {
        ...mapState(['skinZoom'])
    },
    methods:{
        unblur(){
            this.skinZoom.blur=false;
            this.skinZoom.display=false;
            console.log('salope')
        }
    }
}
</script>

<style scoped>
.navbar_main{
    text-decoration: none;
    color: black;
    font-size: 1.5em;
    transition: all ease 150ms;
}
.navbar_main:hover{
    color: rgb(255, 1, 1);
}
.navbar{
    background: rgb(235, 232, 232);
    height: 60px;
    display: flex;
    align-items: center;
}
ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 100%;
    margin: 0;
}
</style>