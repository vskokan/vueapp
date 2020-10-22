<template>
  <div id="app">
    <Header></Header>
    <router-view>
    </router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>

import Header from '@/components/Header'
//import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header, 
    //Footer
  }
}
</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* padding-top: 20px; */
    background: radial-gradient(circle farthest-corner at 100px 50px, #f9faf9, #e0e0e0);
    min-height: calc(100vh)
    
  }

  .red {
    color: red;
  }
  
</style>



