<template>
<div class='home'>
    <div class="home_title"><p>The best site for Steam Market investment</p></div>
    <div class="widht_caroussel">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img :src="image_1" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img :src="image_2" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img :src="image_3" class="d-block w-100" alt="..."/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
    </div>
    <div class="site_info">
        <div class="info_title"><span>How does it works ?</span></div>
        <div class="info">
            <p>Soyez notifié lorsque vos skins préférés sont au prix le plus bas ! Grâce a ce site, vous pouvez choisir un skin à acquerir ainsi que son prix et
                vous serez notifé lorsque ce dernier ce présente au prix selectionner sur le marché steam ! Tout est gratuit et soutenu par une communauté active et soucieuse du bien-être 
                de ses utilisateurs! 
            </p>
            <p><img :src="image_4" alt="image"></p>  
        </div>
        <div class="info">
            <ul>
                <li><p> rends toi dans la page <strong>Skin Store</strong> du site</p></li>
                <li><p>Choisis le skin pour lequel tu veux être notifié ( tu peux en choisir plusieurs</p></li>
                <li><p>Choisis la fourchette de prix dans laquelle tu veux être notifié</p></li>
                <li><p>Le tour est joué ,plus qu'à attendre ! </p></li>
            </ul>
            <p><img :src="image_5" alt=""></p>
        </div>
        <div class="info">
            <p><img :src="image_6" alt=""></p>
            <p>Rejoins une grande communauité de joueur stylé grâce aux skins !! Tous les pro possèdent des skins, et frâce a ce site, tu pourras achter tes skins péféré
                au prix de ton choix!! N'attends plus , va dans le skin store et choisis les skin de ton rêve !!
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name : 'Home',
    data(){
        return{
            image_1: require('@/assets/csgo.png'),
            image_2: require('@/assets/skin.png'),
            image_3 : require('@/assets/woman.png'),
            image_4: require('@/assets/info.png'),
            image_5 : require('@/assets/knife.png'),
            image_6 : require('@/assets/player.png')
        }
    }
}
</script>

<style scoped>
.home_title{
    font-size: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    height: 100px;
    font-weight: bold;
    
}
.site_info{
    position: relative;
    z-index: 1;
}
.widht_caroussel{
    position: relative;
    z-index: 1;
}
.home{
    padding: 0;
    margin: 0;
}
.info{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 50px 100px 50px 200px ;
}
.info p{
    font-size: 1.5em;
    text-align: justify;
    margin-right: 80px;
}
.info img{
    width: 600px;
}

.info_title{
    font-size: 4em;
    text-align: center;
    margin-top: 50px;
}
.info:last-child{
    margin-bottom: 0;
}
.carousel .carousel-item {
  height: 600px;
}

.carousel-item img {
    position: absolute;
    object-fit:cover;
    top: -300px;
    left: 0;
    min-height: 500px;
}

</style>