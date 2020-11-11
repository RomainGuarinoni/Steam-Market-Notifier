<template>
    <div id="welcome">
        <img class="logo" :src="logo" alt="logo de steam">
        <span class="title"> Welcome on Steam Market Notifier</span>
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
.title{
    color: red;
    font-size: 5em;
    font-weight: bold;
    
}
#welcome{
    text-align: center;
}
</style>