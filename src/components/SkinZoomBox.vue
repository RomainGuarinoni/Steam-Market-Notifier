<template>
  <div class="box_zoom">
      <div class="zoom_title_box">
          <span class="zoom_title"> {{skinZoom.name}} </span>
          <span class="imgClose"><button class="button_close" @click="unblur"><img class="zoomClose" src="../assets/close.png" alt="close" /></button>
          </span>
      </div>
      <p class="zommState"> {{skinZoom.state}} </p>
        <div class="zoomImg">
            <img class="zoomPic" :src="skinZoom.image.src" :alt="skinZoom.image.alt">
        </div>
        <div class="zoomPrice">
            <p>Actual price : {{skinZoom.price}} $</p>
            <div>
                <label for="zoomPriceForm">Your price : </label>
                
                <input type="number" id="zoomPriceForm" name="zoomPriceForm" placeholder="price">
                
                <span style="font-size:1.4em">$</span>
            </div>
        </div> 
        <div class="zoomButton"><p><button @click="addToCart">Add</button></p></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props:['id'],
    computed : {
    ...mapState(['skinZoom']),

    },
    methods : {
        addToCart(){
            const price_input = document.getElementById('zoomPriceForm').value;
            console.log(price_input)
            console.log(this.skinZoom.id)
            this.$store.dispatch('addToCart',{name : this.skinZoom.name, price_act : this.skinZoom.price, image : this.skinZoom.image, price : price_input, index : this.skinZoom.index, id : this.skinZoom.id});
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
    width: 150px;

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
    height: 500px;
    width: 800px;
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

.zoomPrice{
    display: flex;
    justify-content: space-around;
}
.zoom_title{
    font-size: 2.5em;
    color: red;
    font-weight: bold;
}
</style>