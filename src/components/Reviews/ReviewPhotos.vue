<template>
    <div class="container" v-if="allPhotos.length !== 0" >
        <img class="photo" v-for="photo in allPhotos" :key="photo.id" :src="'http://localhost:3000/' + photo.link">
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    props: ['review'],
    computed: mapGetters(['allPhotos']),
    methods: {
        ...mapActions(['getReviewPhotos']),
        
    },
    created() {
        this.getReviewPhotos(this.review)
    }
}
</script>

<style scoped>

.container {
  height: 120px;
  /* width: 600px; */
  /* background-color: var(--color-lightgray); */
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  margin-bottom: 10px;
}

.photo {
  height: 120px;
  width: 120px;
  border: transparent;
  color: #000;
  border-radius: 3px;
  margin-right: 10px;
  object-fit: cover;
}

</style>