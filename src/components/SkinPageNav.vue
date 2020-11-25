<template>
    <div class="box_all">
        <SkinZoomBox v-show="skinZoom.display" class="SkinZoomClass"/>
        <div class="skinPage" :class="{blur : skinZoom.blur}">
            <div class="nav_select">
                <p>Select the skin </p>
                <ul>
                    <router-link class="skinnavbar" @click.native="unblur" :to="{name : 'Skin' ,params:{id: 0}}"><li> ak-47</li></router-link>
                    <router-link class="skinnavbar" @click.native="unblur" :to="{name : 'Skin',params:{id: 1}}"><li>M4A4</li></router-link>
                    <router-link class="skinnavbar" @click.native="unblur" :to="{name : 'Skin',params:{id: 2}}"><li>Awp</li></router-link>
                    <router-link class="skinnavbar" @click.native="unblur" :to="{name : 'Skin',params:{id: 3}}"><li>USP-S</li></router-link>
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
.skinnavbar{
    text-decoration: none;
}
.box_all{
    height: 100%;
    display: flex;
    justify-content: center;
}
.SkinZoomClass{
    margin-left: 15%;
    align-self: center;
    position: relative;
    margin: 100px 0 100px 400px;
    z-index: 2;
}
.skinPage{
    width: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    height: 91vh;
}
@media screen and (max-width: 1297px){
    .skinPage{
        display: flex;
        flex-direction: column;
        height: auto !important;
    }
    .nav_select{
        width: 100% !important;
    }
    .nav_select ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .skin{
        height: 100%;
    }
    .SkinZoomClass{
        margin: 50px 0 !important;
    }
}
.blur{
    filter: blur(3px);
}
.nav_select{
    text-align: center;
    width: 400px;
    background-color: rgba(226, 225, 225, 0.589);
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
    padding-bottom: 10px;
    font-weight: bold;
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
    background-color: rgba(211, 208, 208, 0.651);
}

</style>