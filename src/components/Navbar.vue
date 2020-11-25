<template>
    <div class="nav">
        <div class="nav_title">
            <router-link @click.native="unblur" class="navbar_main_title" :to="{name : 'Home'}">
            <img id="steamLogo" src="../assets/steam.png" alt="logo de steam">
            <span id="nav_title_p">Steam market Notifier</span>
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
.nav_title{
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav{
    display: flex;
    justify-content: space-between;
    background:#0a202b;
}
.navbar_main_title{
    display: flex;
    padding:0 50px;
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
    align-items: center;
    height: 100%;
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
    letter-spacing: 3px;
}

@media all and (max-width: 1402px){
    .nav{
        flex-direction: column;
        align-items: center;
    }
    ul{
        margin: 0;
    }
}
</style>