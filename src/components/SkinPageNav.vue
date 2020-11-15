<template>
  <div class="skinPage">
      <div class="nav_select">
          <p>Select the skin </p>
          <ul>
              <router-link :to="{name : 'Skin' ,params:{id: 0}}"><li> ak-47</li></router-link>
              <router-link :to="{name : 'Skin',params:{id: 1}}"><li>M4A4</li></router-link>
              <router-link :to="{name : 'Skin',params:{id: 2}}"><li>Awp</li></router-link>
          </ul>
      </div>
      <div class="skin">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.skinPage{
    display: flex;
    height: 73vh;
}
.nav_select{
    text-align: center;
    width: 400px;
    background-color: rgb(223, 219, 219);
}
.skin{
    overflow: scroll;
    width: 100%;
}
ul{
    list-style-type: none;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
}
.nav_select p{
    margin-top: 20px;
    font-size: 2em;
}
li{
    color: black;
    height: 60px;
    font-size: 1.6em;
    transition: all ease 200ms;
    cursor: pointer;
    
}
li:hover{
    font-weight: bold;
    background-color: rgb(161, 161, 161);
}

</style>