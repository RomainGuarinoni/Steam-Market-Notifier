<template>
    <div class=skin_box>
        <div class="skin_pic">
            <img :src="image.src" :alt="image.alt"/>
        </div>
        <div class="skin_info">
            <div class="skin_name"><h3>{{name}}</h3></div>
            <div class="skin_info_stat">
                <p class="price_skin"><strong>price :</strong> {{price}} $</p>
                <p class="stat_skin"><strong>state :</strong> {{state}}</p>
                <p class="available"><strong>availability :</strong> {{available}} </p>
            </div>
            <div class="button">
                <button @click="addToCart(name,price,image,available)">Ajouter le skin</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'SkinPreview',
    props : ['image','name','price','state','available','addToCart']

}
</script>

<style scoped>
img{
    width: 300px;
}
.skin_box{
    display: flex;
    align-items: center;
    background-color:rgb(228, 225, 225);
    margin:0 20px;
    border-radius: 20px;
    width: 550px;
    height: 200px;
}
.skin_info{
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 180px;
}
.skin_name{
    text-align: left;
}
.skin_info_stat{
    margin-left: 20px;
    flex: 1;
}

h3{
    color: rgb(228, 32, 32);
    font-size: 1.5em;
    padding: 0;
    margin: 0;
}
.button{
    text-align: right;
margin-right: 30px;
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