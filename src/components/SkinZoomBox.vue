<template>
  <div class="box_zoom">
      <div class="zoom_title_box">
          <span class="zoom_title"> {{skinZoom.name}} </span>
          <span class="imgClose"><button class="button_close" @click="unblur"><img class="zoomClose" src="../assets/close.png" alt="close" /></button>
          </span>
      </div>
        <div class="zoomImg">
            <img class="zoomPic" :src="skinZoom.image.src" :alt="skinZoom.image.alt">
        </div>
        <div class="zoomPrice">
            <div class="zoomRadio">
                <div class="zoomRadioInput">
                    <input type="radio" name="stateZoom" id="Factory New" value="Factory New" v-model="state" @change="changeState">
                    <label for="Factory New">Factory New</label>
                </div>
                <div class="zoomRadioInput">
                    <input type="radio" name="stateZoom" id="Well-Worn" value="Well-Worn" v-model="state" @change="changeState">
                    <label for="Well-Worn">Well-Worn</label>
                </div>
                <div class="zoomRadioInput">
                    <input type="radio" name="stateZoom" id="Battle-Scarred" value="Battle-Scarred" v-model="state" @change="changeState">
                    <label for="Battle-Scarred">Battle-Scarred</label>
                </div>
                <div class="zoomRadioInput">
                    <input type="radio" name="stateZoom" id="Minimal Wear" value="Minimal Wear" v-model="state" @change="changeState">
                    <label for="Minimal Wear">Minimal Wear</label>
                </div>
                <div class="zoomRadioInput">
                    <input type="radio" name="stateZoom" id="Field-Tested" value="Field-Tested" v-model="state" @change="changeState">
                    <label for="Field-Tested">Field-Tested</label>
                </div>
            </div>
            <p>Actual price : <strong>{{skinZoom.price}} $</strong></p>
        </div>
        <div class="zoomPricePerso">
            <div>
                <label for="zoomPriceForm">Your price : </label>
                <input type="number" id="zoomPriceForm" name="zoomPriceForm" placeholder="price">
                <span style="font-size:1.4em">$</span>
            </div>
            <div class="zoomButton"><p><button @click="addToCart">Add to the Skin List</button></p></div>
        </div>
        
        </div> 
        
</template>

<script>
import {mapState} from 'vuex'
export default {
    props:['id'],
    data(){
        return{
            state: ""
        }
    },
    computed : {
    ...mapState(['skinZoom']),

    },
    methods : {
        changeState(){
            this.$store.dispatch('updateStateZoomSkin',{state : this.state})
        },
        addToCart(){
            const price_input = document.getElementById('zoomPriceForm').value;
            this.$store.dispatch('addToCart',{name : this.skinZoom.name, price_act : this.skinZoom.price, image : this.skinZoom.image, price : price_input, index : this.skinZoom.index, id : this.skinZoom.id,state : this.skinZoom.state});
            console.log(this.skinZoom.state)
            this.skinZoom.display=false;
            this.skinZoom.blur=false;
        },
        unblur(){
            this.skinZoom.display= false;
            this.skinZoom.blur=false;
        }
    }
}
</script>

<style scoped>
.zoomRadioInput{
    line-height: 30px;
}
.zoomPrice{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.zoomPrice p{
    width:350px;
}
.zoomRadio{
    text-align: left;
    width: 300px;
}
.zoomPricePerso{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.button_close{
    width: 2px;
    position: absolute;
    margin-left: 200px;
    border: none;
    background: white;
}
.button_close:hover{
    box-shadow: none;
}
.zoomButton{
    text-align: right;
}
.zoomClose{
    width: 50px;
}

button{
    margin-top: 15px;
    margin-right: 30px;
    border-radius: 20px;
    width: 250px;

}
input{
    border: none;
    outline: none;
    background: none;
    text-align: center;
    width: 50px;
    width: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.384);
    font-size: 1.2em;
    text-align: center;
}
.zommState{
    margin: 0;
    font-size: 2em;
}
label{
    font-size: 1.4em;
}
.box_zoom{
    text-align: center;
    border: 2px solid rgba(92, 87, 87, 0.329);
    height: 600px;
    width: 900px;
    border-radius: 20px;
    background: white;
}
.zoomImg{
    text-align: center;
}
.zoomPic{
    width:600px;
}
.zoom_title_box{
   text-align: center;
}


.zoom_title{
    font-size: 2.5em;
    color: red;
    font-weight: bold;
}
</style>