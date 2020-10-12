<template>
    <div>
       <MyLoader></MyLoader>
    </div>
</template>

<script>
import MyLoader from '@/components/MyLoader'
export default {
    components: {
        MyLoader
    }    
}
</script>

<style scoped>

  div {
      min-height: calc(100vh - 180px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
  
</style>