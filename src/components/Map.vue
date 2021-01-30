<template>
    <div class="map">
        <!-- <h2>Тут карта</h2> -->
        <!-- <yandex-map :coords="coords" @click="onClick">
            <ymap-marker 
                marker-id="123" 
                :coords="coords"
                :balloon-template="balloonTemplate"
            ></ymap-marker>
        </yandex-map> -->
        <yandex-map :coords="coords" :zoom="12" @click="onClick">
            <!-- <ymap-marker v-click-outside="hide" @click="toggle(review)" v-for="review of reviews" :key="review" :icon="markerIcon"
                marker-id="review.id" 
                :coords= "[`${review.latitude}`, `${review.longitude}`]"
                :balloon-template="mapBalloon(review)"
            >
            </ymap-marker> -->
                <ymap-marker 
                  :coords="coords" 
                  marker-id="0" 
                  v-if="showForm"
                />
            <ymap-marker v-for="review in allReviews" :key="review.id" marker-id="review.id" :coords="[`${review.latitude}`, `${review.longitude}`]" @click="chooseReview(review)"  />

        </yandex-map>
        <transition name="fade">
        <ReviewCard class="cardForm" v-if="showCard" v-bind:review="currentReview"/>
        <AddReviewOnMap class="cardForm" v-if="showForm" v-bind:latitude="coords[0]" v-bind:longitude="coords[1]"/>
        </transition>
    </div>
</template>

<script>

import { mapGetters, mapActions, mapMutations } from "vuex";
import ReviewCard from '@/components/Reviews/AdminPanel/ReviewCard'
import AddReviewOnMap from '@/components/Reviews/AddReviewOnMap'
// import ReviewCard from '@/components/ReviewCard'
// import ClickOutside from 'vue-click-outside'

export default {
  //props: ['reviews'],
  //computed: 
  data: () => { 
    return {
    coords: [54.62880826189078,39.75270322600586],
    //opened: false,
    markerIcon: {
      layout: 'default#image',
      imageHref: 'http://localhost:3000/assets/map-marker.svg',
      imageSize: [35, 50],
      imageOffset: [-15, -45],
      // imageOffset: [0, 0],
       preset: 'islands#violetIcon'
    }
  }
    
  },
  components: { ReviewCard, AddReviewOnMap },
  computed: {
    ...mapGetters(["allReviews", "showCard", "showForm", "isAuth"]), 
    balloonTemplate() {
      return `
        <h1 class="red">Hi, everyone!</h1>
        <p>I am here: ${this.coords}</p>
      `
    }
  },
  methods: {
    ...mapActions(["fetchReviewsNoPagination"]),
    ...mapMutations(['changeFormView', 'changeCardView', 'changeEditFormView']),
    onClick(e) {
      this.coords = e.get('coords');
    
            if (this.isAuth) this.changeFormView()
            // alert(this.showForm)
        
    },
    chooseReview(review) {
            
            if (!this.showCard) {
                this.currentReview = review
                this.changeCardView()
            }
            // this.changeCardView()
    },
    // toggle (review) {
    //   this.opened = true
    //   this.review = review
    // },
    // hide () {
    //   this.opened = false
    // },
    mapBalloon: function(review) {
      return `
      <div><h1>${review.id}</h1>
      </div>
      `;
    }     
  },
  mounted() {
    this.fetchReviewsNoPagination()

  },
  // directives: {
  //   ClickOutside
  // },
  // components: {
  //   ReviewCard
  // }  
}
</script>

<style scoped>

    .ymap-container {
      height: 820px;
      width:  100%;
    }

    .map {
      width: 100%;
      min-height: calc(100vh - 320px)
    }

    yandex-map {
      height: 820px;
      width:  100%;
    }

       .addForm, .cardForm, .editForm {
       position: absolute;
       margin: auto;
       margin-top: -650px;
       margin-left: 700px;
       z-index: 5;
   }

       .fade-enter-active, .fade-leave-active {
        transition: all 0.3s;
      }
      .fade-enter, .fade-leave-to  {
        opacity: 0;
      }
  
</style>