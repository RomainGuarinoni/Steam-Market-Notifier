<template>
<div class='home'>
    <div class="home_title"><p>The best site for Steam  Market investment</p></div>
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
            <p data-aos="fade-right">Soyez notifié lorsque vos skins préférés sont au prix les plus bas ! Grâce à ce site, vous pouvez choisir le skin de vos rêves et définir un prix
                auquel vous aimeriez l'acheter et vous serez notifié lorsque ce dernier sera en vente au prix choisis sur le marché steam.<br/> Tout est gratuit et maintenu par une équipe 
                passionnée et soucieuse de ses utilisateurs! 
            </p>
            <p data-aos="fade-left"><img :src="image_4" alt="image"></p>  
        </div>
        <div class="info">
            <div data-aos="fade-right">
                <p> <strong>La marche a suivre : </strong> </p>
                <ul>
                    <li><p> rends toi dans la page <strong>Skin Store</strong> du site</p></li>
                    <li><p>Choisis un ou plusieurs skin que tu souhaites acheter</p></li>
                    <li><p>Choisis le prix auquel tu voudrais être notifié</p></li>
                    <li><p>Le tour est joué ,plus qu'à attendre ! </p></li>
                </ul>
            </div>
            <p data-aos="fade-left"><img :src="image_5" alt=""></p>
        </div>
        <div class="info">
            <p data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="1500">
                <img :src="image_6" alt="">
            </p>
            <p data-aos="fade-left">Rejoins une grande communauté de joueurs stylés grâce aux skins !! Tous les pros possèdent des skins, et grâce a ce site, tu pourras acheter tes skins péférés
                au prix de ton choix!! N'attends plus , va dans le skin store et choisis les skins de ton rêve !!
            </p>
        </div>
        <div class="joinUs">
            <p class="joinsUsTitle">Join us there</p>
            <div class=joinUsIcon>
                <a href="https://github.com/RomainGuarinoni" target="_blank"><span class="icon"><i class="fab fa-github"></i></span></a>
                <a href="#"><span class="icon"><i class="fab fa-instagram"></i></span></a>
                <a href="#"><span class="icon"><i class="fab fa-facebook"></i></span></a>
                <a href="#"><span class="icon"><i class="fab fa-twitter"></i></span></a>
                <a href="mailto:romain.guar01@gmail.com"><span class="icon"><i class="fas fa-envelope"></i></span></a>
            </div>
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
a{
    color: black;
    transition: all ease 200ms;
}
.joinUsIcon{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.joinsUsTitle{
    text-align: center;
    font-weight: bold;
    font-size: 3em;
}
.icon{
    font-size: 5em;
}
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