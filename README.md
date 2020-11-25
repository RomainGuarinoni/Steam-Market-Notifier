# Steam Market Notifier

Pour accéder au site : [Steam Market Notifier](https://romainguarinoni.github.io/Steam-Market-Notifier/)

ce site est mon premier projet en utilisant le framework **Vue.js** . En tant que grand fan du jeux *Counter Strike - Global Offensive*
et de son marché de skins, j'ai décidé de créer un site permmettant aux joueurs d'être notifiés lorsque leurs skins préférés sont
abordable. 

## Comment ça marche ? 

Voici la marche à suivre pour choisir un skin et être notifiés au bon prix : 
1. Se rendre dans le **Skin store** et selectionner le skin souhaité en appuyant sur le bouton **Add to Skins list**
2. Sélectionner **un état** ( le prix actuel du skin dans l'état choisis s'affiche sur le coté), et **définir un prix** auxquel vous souhaiteriez l'acheter
3. Cliquer sur **Add to Skin List**
4. Votre ordre d'achat se trouve dans la page **Your Skins**. Il est possible de **mofidier l'ordre** ou de le **supprimer**
5. lorsque le **price margin** est inférieur ou égal à 0, l'utilisateur est **notifié** et peux aller acheter le skin sur le **marché steam**. 

## Les frameworks utilisés

1. Vuejs [website](https://vuejs.org/)
2. Animation on scroll [website](https://michalsnik.github.io/aos/)
3. Gsap [website](https://greensock.com/gsap/)

## Les principales issues

1. Seulement le front-end du site a été fait, il est donc encore impossible de stocker les ordre d'achats d'un utilisateurs et de le notifer lorsque le prix  du marché steam descends en dessous du prix voulu. (*on aurais pu utiliser localStorage pour la liste de skin de l'utilisateurs mais ce n'est pas interessant*)
2. Les prix des skins ne s'affichent pas car le site se load sur github-pages en **HTPPS** et les requetes d'API se font avec **XMLHttpRequest**, les requetes sont donc bloqués sur le server. 

La focntion qui permet de mettre a jour le prix des skins en fonction de leur état avec **axios** : 
```javascript
async uptadePriceSkins(context){
      for(let id=0;id<context.state.skin.length;id++){
        for(let index=0;index<context.state.skin[id].length;index++){
          const name=context.state.skin[id][index].nameMarket;
          const test = await axios.get('http://api.steamapis.com/market/item/730/'+name+'?api_key=EQaV7_NxMwv6Vz5yMCvfHPlJTSs')
          context.commit('UPDATE_PRICE',{ id : id, index : index, price :Math.round(test.data.median_avg_prices_15days[14][1]*100)/100})
        }
      }
```
3. Le responsive pour telephone n'a pas encore été mis en place

## Les améliorations à apportés au sites

- [x] Developpper tout le back-end de l'app sous *express / MongoDb / express* ou *Laravel*
- [x] fix le bug des requetes HTTP
- [x] remplir entierement le skin store 
- [x] mettre en plaxce un système de notifications 