<template>
  <div id="app">
    <Header></Header>
    <transition name="slide-fade" mode="out-in">
      <router-view>
      </router-view>
    </transition>
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
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&family=Rubik&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Marmelad&display=swap');
  
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

  * {
    margin: 0px;
    margin-bottom: 0px;
}

button {
    height: 40px;
    font-size: 22px;
    border: none;
    /* background-color: #7c8e51fd; */
    background-color: #557481;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    margin: 10px 0px 0px 10px;
    font-family: 'Rubik', sans-serif;
}

button:hover {
    /* background-color:  #557481; */
    background-color:   #7c8e51fd;
    cursor: pointer;
}

.slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        opacity: 0;
    }


</style>



