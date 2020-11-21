<template>
  <div id="app">
    <div id="nav_sticky"><Navbar /></div>
    <div id="flex_box"><router-view/></div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar, 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  height: 100%;
  flex-direction: column;
}
#flex_box{
  flex: 1;
  z-index: 1;
}
#nav_sticky{
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 2;    
}

::-webkit-scrollbar{
  width: 2px;
}
::-webkit-scrollbar-thumb{
  background: black;
}
</style>
