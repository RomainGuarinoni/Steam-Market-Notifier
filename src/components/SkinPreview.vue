<template>
    <div class="skin_box" :class="{notAvailableClass : notAvailable(index)}">
        <div class="skin_name"><h3>{{name}}</h3></div>
        <div class=skin_box_info>
            <div class="skin_pic">
                <img :src="image.src" :alt="image.alt"/>
            </div>
            <div class="skin_info">
                <div class="skin_info_stat">
                    <p class="price_skin"><strong>price :</strong> {{price}} $</p>
                    <p class="stat_skin"><strong>state :</strong> {{state}}</p>
                    <p class="available"><strong>quantity :</strong> {{quantity}} </p>
                </div>
                <div class="button">
                    <button @click="addToCart(name,price,image,quantity,index,id)">Ajouter le skin</button>
                </div>
                <div v-show="notAvailable(index,id)" class="alert">
                    <p>This skin is no longer available</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
        id:{
            type: Number
        },
        name : {
            type : String
        },
        price: {
            type : Number
        },
        state : {
            type : String
        },
        quantity : {
            type : Number,
            default : 0
        },
        addToCart:{
            type : Function
        },
        index : {
            type : Number
        },
        notAvailable:{
            type : Function
        }

    }
}
    

</script>

<style scoped>
.notAvailableClass{
    opacity: 0.5;
}
.alert{
    margin-top: 5px;
    padding: 0;
}
.alert p{
    color: red;
    font-size: 0.7em;
}
button{
  outline-style: none;
}
img{
    width: 250px;
}
.skin_pic{
    height: 220px;
    display: flex;
    align-items: center;
}
.skin_box{
    background-color:rgb(228, 225, 225);
    margin:20px 20px;
    border-radius: 20px;
    width: 550px;
    height: 280px;
}
.skin_box_info{
    display: flex;
    align-items: center;


}
.skin_info{
    display: flex;
    flex-direction: column;
    height: 180px;
    width: 100%;
    margin-right: 20px;
}
.skin_name{
    text-align: left;
}
.skin_info_stat{
    margin-left: 20px;

}

h3{
    color: rgb(228, 32, 32);
    font-size: 2em;
    padding: 0;
    margin: 0;
    text-align: center;
}
.button{
    text-align: right;
}
button{
    border: none;
    border-radius: 30px;
    padding: 8px;
    cursor: pointer;
}
button:hover{
    box-shadow: 2px 2px 2px rgba(95, 94, 94, 0.63);
    font-weight: bold;
}
</style>