<template>
<div class="nav">
    <div class="nav_title">
        <router-link @click.native="unblur" class="navbar_main_title" :to="{name : 'Home'}">
        <p><img id="steamLogo" src="../assets/steam.png" alt="logo de steam"></p>
        <p id="nav_title_p">Steam market Notifier</p>
        </router-link>
    </div>
    <div class="navbar">
        <ul>
            <li><router-link @click.native="unblur" class="navbar_main" :to="{name : 'Home'}"> Home</router-link></li>
            <li><router-link @click.native="unblur" class="navbar_main" :to="{name : 'basic'}"> Skin Store</router-link></li>
            <li><router-link @click.native="unblur" class="navbar_main" :to="{name : 'YourSkins'}"> Your Skins</router-link></li>
        </ul>
    </div>
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
        }
    },
}
</script>

<style scoped>
.nav{
    display: flex;
    justify-content: space-between;
    background:#0a202b;
    padding-top: 20px;
}
.navbar_main_title{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
    letter-spacing: 3px;
    text-decoration: none;
}
.navbar_main_title:hover{
    text-decoration: none;
}
ul{
    width: 800px;
    display: flex;
    margin-right: 50px;
    justify-content: space-around;
    list-style-type: none;
}
.navbar_main{
    color:white;
    text-decoration: none;
    font-size: 1.5em;
    transition: all ease 200ms;
}
.navbar_main:hover{
    color: rgb(197, 15, 15);
}
#steamLogo{
    width: 50px;
}
#nav_title_p{
    font-family: 'Anton', sans-serif;
    margin-left: 20px;
    font-size: 2em;
    color: white;
}
</style>