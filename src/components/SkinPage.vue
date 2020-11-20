<template>
    <div>
        <div id="skinPreview">
            <SkinPreview
                v-for="(item,index) in skin[id]"
                :image="item.image"
                :name="item.name"
                :price="item.price"
                :state="item.state"   
                :quantity="item.quantity"
                :index ='index'
                :id ='Number(id)'
                :notAvailable ='notAvailable'
                :key="index"
            />    
        </div>
        <p> compte à ionsukter sdes grands morts : https://steamcommunity.com/profiles/76561198399970578/</p>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import SkinPreview from'./SkinPreview.vue'
export default {
    name : 'SkinPage',
    components: { SkinPreview
  },
  props: ['id'],
  data(){
    return {
      name: 'Romain',
      showCart : false,
  }
},
  computed : {
    ...mapState(['skin']),
  },
  methods :{

    notAvailable(index){
      if (this.skin[this.id][index].quantity==0){
          return true;
      }
      else{
          return false;
      }
    },
  },
  mounted(){
    this.$store.dispatch('uptadePriceSkins')
  },
}
</script>

<style scoped>
.skin_store{
  overflow: scroll;
}
.cartFade-enter-active {
  transition: opacity 1s;
}
.cartFade-enter, .cartFade-leave-to{
  opacity: 0;
}

.cart_title{
  font-size: 1.5em;
  font-weight: bold;
}
.cart_box span{
  margin-right: 20px;
}
#skinPreview{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.cart_box{
  margin-top: 30px;
  width: 100%;
  height: auto;
}
.Cart_title{
  font-size: 2em;
  font-weight: bold;
  text-decoration: underline;
}

.cart_button:hover{
    box-shadow: 2px 2px 2px rgba(95, 94, 94, 0.63);
    font-weight: bold;
}
button{
  outline-style: none;
}
</style>
