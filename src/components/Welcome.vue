<template>
    <div id="welcome">
        <router-link :to="{name : 'Home'}"><img class="logo" :src="logo" alt="logo de steam"></router-link>
        <span id="title_home"> Welcome on Steam Market Notifier</span>
        <h2> The best market place for cs:go items</h2>
    </div>
  
 
</template>

<script>
export default {
    name : 'Welcome',
    data(){
        return{
            logo : require("@/assets/steam.png")
        }
    }
    

}
</script>

<style>

.logo{
    position: relative;
    top: 10px;
    left: -100px;
    width: 150px;
}
#title_home{
    color: red;
    font-size: 5em;
    font-weight: bold;
    
}
#welcome{
    text-align: center;
}
</style>