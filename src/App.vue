<template>
  <div id="app">
    <Welcome />
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar, Welcome, 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

button{
  outline-style: none;
}
::-webkit-scrollbar{
  width: 2px;
}
::-webkit-scrollbar-thumb{
  background: black;
}
</style>
