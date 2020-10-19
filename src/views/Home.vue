<template>
    <div>
       <AddFish></AddFish>
    </div>
</template>

<script>

import AddFish from '@/components/Fish/AddFish'

export default {
  components: {
    AddFish
  }
}
</script>

<style scoped>

  div {
      min-height: calc(100vh - 180px)
  }
  
</style>