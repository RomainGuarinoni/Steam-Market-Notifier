<template>
    <div class="skin_box" >
        <div class="skin_name"><h3>{{name}}</h3></div>
        <div class="skinPreviewPic">
            <img :src="image.src" :alt="image.alt">
        </div>
        <div class="button">
            <button @click="upgradeSkinZoom">Add to the Skins list</button>
        </div> 
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name : 'SkinPreview',
    //props : ['image','name','price','state','quantity','addToCart','index','notAvailable']
    props : {
        image : {
            type : Object,
            default : function(){return{
                src : require('@/assets/no_image.png'),
                alt : 'no image'
            }}
        },
        name : {
            type : String
        },
        id : {
            type: Number
        },
        addToCart:{
            type : Function
        },
        index : {
            type : Number
        },
    },
    computed : {
        ...mapState(['skinZoom'])
    },
    methods: {
        upgradeSkinZoom(){
            this.skinZoom.name=this.name;
            this.skinZoom.index= this.index;
            this.skinZoom.id=this.id;
            this.skinZoom.image=this.image;
            this.skinZoom.blur=true;
            this.skinZoom.display=true;
        }
    }
}
    

</script>

<style scoped>
.notAvailableClass{
    opacity: 0.5;
}
.alert{
    text-align: center;
    padding: 0;
}
.skinPreviewPic{
    text-align: center;
    flex: 1;
}
.alert p{
    color: red;
    font-size: 0.9em;
}
button{
  outline-style: none;
}
img{
    width: 400px;
}

.skin_box{
    background-color:rgb(228, 225, 225);
    margin:20px 20px;
    border-radius: 20px;
    width: 550px;
    height: 280px;
    display: flex;
    flex-direction: column;
}

.skin_name{
    text-align: left;
}

h3{
    color: rgb(59, 58, 59);
    font-size: 2em;
    padding: 0;
    margin: 0;
    font-weight: bold;
    text-align: center;
}
.button{
    margin-bottom: 10px;
    width: 100%;
    text-align: center;
}
button{
    border-radius: 30px;
    padding: 8px;
    cursor: pointer;
}
button:hover{
    box-shadow: 2px 2px 2px rgba(95, 94, 94, 0.63);
    font-weight: bold;
}
</style>