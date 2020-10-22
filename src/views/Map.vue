<template>
    <div>
       <h1>Это карта</h1>
       <Map v-bind:reviews="this.reviews"></Map>
    </div>
</template>

<script>

import Map from '@/components/Map'

export default {

    components: {
        Map
    },
    data() {
        return {
            reviews: [
            ],
        }
    },
    mounted() {
        fetch('http://localhost:3000/api/reviews')
        .then(response => response.json())
        .then(json => {
                this.reviews = json
        })
    }    
}

</script>

<style scoped>

  div {
      min-height: calc(100vh - 180px)
  }
  
</style>