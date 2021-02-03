<template>
  <div id="app">
    <Header></Header>
    <transition name="slide-fade" mode="out-in">
      <router-view>
      </router-view>
    </transition>
  </div>
</template>

<script>

import Header from '@/components/Header'
import { mapActions } from "vuex";

export default {
  name: 'App',
  components: {
    Header, 
  },
  methods: {
    ...mapActions(['checkSession'])
  },
  created() {
    this.checkSession()
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&family=Rubik&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Marmelad&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
  
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
      /* padding-top: 20px; */
  /* background: radial-gradient(circle farthest-corner at 100px 50px, #f9faf9, #e0e0e0); */
  background-image:  url('./assets/background2.svg');
  background-image: url('./assets/background2.svg'), radial-gradient(circle farthest-corner at 100px 50px, #f9faf9, #e0e0e0);
  min-height: calc(100vh);
  height: auto;
    --color-violet: rgb(91, 21, 148);
  --color-yellow: rgb(255, 230, 0);
  /* --color-darkgray: rgb(56, 56, 56); */
  --color-darkgray: rgb(0, 0, 0);
  --color-lightgray: rgb(194, 194, 194);
}

.red {
    color: red;
}

* {
    margin: 0px;
    margin-bottom: 0px;
}

/* button {
    height: 40px;
    font-size: 22px;
    border: none;
    background-color: #557481;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    margin: 10px 0px 0px 10px;
    font-family: 'Rubik', sans-serif;
}

button:hover {
    background-color:   #7c8e51fd;
    cursor: pointer;
} */

.button-simple {
    height: 40px;
    font-size: 24px;
    border: none;
    background-color: transparent;
    color: rgb(0, 0, 0);
    border: 3px solid rgb(101, 15, 172);;
    /* border-radius: 5px; */
    /* margin: 10px 0px 0px 10px; */
    margin-left: 5px;
    margin-right: 5px;
    text-transform: uppercase;
    font-family: 'Rubik', sans-serif;
    transition: .5s;
    
}

.button-simple:hover {
    border-color:transparent;
    background-color:   rgb(101, 15, 172);
    color: #fff;
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

Header {
  z-index: 5;
}

router-view {
  z-index: 3;
}


.button-tableheader {
    height: 40px;
    font-size: 24px;
    border: none;
    /* background-color: transparent; */
    background-color:   rgb(255, 230, 0);
    color: rgb(0, 0, 0);
    /* border: 3px solid rgb(255, 255, 255); */
    border-radius: 5px;
    /* margin: 10px 0px 0px 10px; */
    margin-left: 5px;
    margin-right: 5px;
    text-transform: uppercase;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    transition: .5s;
    box-shadow: 0px 2px rgb(0, 0, 0);
    
}

.button-tableheader:hover {
    border-color:transparent;
    background-color:   rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    cursor: pointer;
}

</style>



