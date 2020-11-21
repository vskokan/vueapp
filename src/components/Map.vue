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
        <yandex-map :coords="coords" :zoom="12">
            <ymap-marker v-click-outside="hide" @click="toggle(review)" v-for="review of reviews" :key="review"
                marker-id="review.id" 
                :coords= "[`${review.latitude}`, `${review.longitude}`]"
                :balloon-template="mapBalloon(review)"
            >
            </ymap-marker>
            
        </yandex-map>
        <ReviewCard v-show="opened" v-bind:review="review"></ReviewCard>
    </div>
</template>

<script>

import ReviewCard from '@/components/ReviewCard'
import ClickOutside from 'vue-click-outside'

export default {
  props: ['reviews'],
  data: () => { 
    return {
    coords: [54.62880826189078,39.75270322600586],
    opened: false,
  }
    
  },
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Hi, everyone!</h1>
        <p>I am here: ${this.coords}</p>
      `
    }
  },
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    },
    toggle (review) {
      this.opened = true
      this.review = review
    },
    hide () {
      this.opened = false
    },
    mapBalloon: function(review) {
      return `
      <div><h1>${review.id}</h1>
      </div>
      `;
    }     
  },
  mounted() {
    this.popupItem = this.$el
    
    
    
  },
  directives: {
    ClickOutside
  },
  components: {
    ReviewCard
  }  
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

    
  
</style>