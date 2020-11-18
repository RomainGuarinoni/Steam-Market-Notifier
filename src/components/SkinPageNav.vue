<template>
    <div class="box_all">
        <SkinZoomBox v-show="skinZoom.display" class="SkinZoomClass"/>
        <div class="skinPage" :class="{blur : skinZoom.blur}">
            <div class="nav_select">
                <p>Select the skin </p>
                <ul>
                    <router-link @click.native="unblur" :to="{name : 'Skin' ,params:{id: 0}}"><li> ak-47</li></router-link>
                    <router-link @click.native="unblur" :to="{name : 'Skin',params:{id: 1}}"><li>M4A4</li></router-link>
                    <router-link @click.native="unblur" :to="{name : 'Skin',params:{id: 2}}"><li>Awp</li></router-link>
                </ul>
            </div>
            <div class="skin">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

import {mapState} from 'vuex'
import SkinZoomBox from "./SkinZoomBox"
export default {
    components : {
        SkinZoomBox
    },
    computed:{
        ...mapState(['skinZoom'])
    },
    methods : {
        unblur(){
            this.skinZoom.blur=false;
            this.skinZoom.display=false;
        }
    }
}
</script>

<style scoped>
.box_all{
    display: flex;
    justify-content: center;
}
.SkinZoomClass{
    margin-left: 10%;
    position: absolute;
    z-index: 2;
   

}
.skinPage{
    width: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    height: 73vh;
}
.blur{
    filter: blur(3px);
}
.nav_select{
    text-align: center;
    width: 400px;
    background-color: rgb(223, 219, 219);
}
.skin{
    flex: 1;
    width: 100%;
    overflow: scroll;
}
ul{
    list-style-type: none;  
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
    text-decoration: none ;
    font-weight: bold;
    background-color: rgb(161, 161, 161);
}

</style>