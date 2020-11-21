<template>
    <div class="mapContainer">
       <!-- <div class="mapDescription">
           <p class="heading">Карта рыболовных мест</p>
           <div class="icons"><i class="fas fa-map-marker-alt"></i><i class="fas fa-chart-pie"></i><i class="fas fa-percentage"></i></div>
           <div class="text">

            <p>
               Зарегистрируйтесь, чтобы иметь возможность оставлять свои отзывы простым кликом мыши по карте. 
            </p>
            <p>
                Мы анализируем информацию из отзывов, чтобы собрать реальную статистику уловов.
            </p>
            <p>
                Мы поощряем внесенный пользователями вклад бонусами от наших партнеров. Подробннее об этом читайте здесь.
            </p>
           </div>
           
               
           
       </div> -->
       <!-- <Map v-bind:reviews="this.reviews"></Map> -->
       <Map></Map>
    </div>
</template>

<script>

import Map from '@/components/Map'

export default {

    components: {
        Map
    },
    // data() {
    //     return {
    //         reviews: [
    //         ],
    //     }
    // },
    // mounted() {
    //     fetch('http://localhost:3000/api/reviews')
    //     .then(response => response.json())
    //     .then(json => {
    //             this.reviews = json
    //     })
    // }    
}

</script>

<style scoped>

  /* div {
      min-height: calc(100vh - 180px)
  } */
    .mapDescription {
        margin-top: 5px;
        margin-bottom: 5px;
        z-index: -1;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

     p  {
        margin-top: 5px;
        margin-bottom: 5px;
        /* width: 80%; */
    }

    .heading {
        font-size: 48px;
        color: rgb(101, 15, 172);
        font-weight: bold;
        font-family: 'Rubik', sans-serif;
    }

    i {
        font-size: 50px;
        margin-left: 30px;
        margin-right: 30px;
    }
</style>