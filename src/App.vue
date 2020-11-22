<template>
  <div id="app">
    <div id="introApp">
      <p><img id="steamLogoIntro" src="./assets/steam.png" alt="logo de steam"></p>
      <p id="LogoIntro">Steam market Notifier</p>   
    </div>
    <div id="mainApp">
      <div id="nav_sticky"><Navbar /></div>
      <div id="flex_box"><router-view/></div>
    </div>
    
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import {gsap} from "gsap"
export default {
  name: 'App',
  components: {
    Navbar, 
  },
  mounted:function(){
    const tl=gsap.timeline({autoRemoveChildren:true});
    tl.from("#steamLogoIntro",{opacity:0.5,x:-500});
    tl.from("#LogoIntro",{opacity:0,y:50});
    tl.to("#introApp",{opacity:0,duration:0.5},1.5);
    tl.from("#mainApp",{opacity:0},1.7)
  }
}
</script>

<style>
#introApp{
  position: absolute;
  z-index: 1;
  height: 100vh;
  width: 100%;
  background: #0a202b;
  display: flex;
  justify-content: center;
  align-items: center;
}
#LogoIntro{
  font-family: 'Anton', sans-serif;
  margin-left: 20px;
  font-size: 5.8em;
  color: white;
}
#steamLogoIntro{
  width:250px;
}
#mainApp{
  position: relative;
  z-index: 2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
#flex_box{
  flex: 1;
  height: 100%;
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
