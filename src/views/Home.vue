<template>
    <div>
       <AddNewFish></AddNewFish>
    </div>
</template>

<script>

import AddNewFish from '@/components/AddNewFish'

export default {
  components: {
    AddNewFish
  }
}
</script>

<style scoped>

  div {
      min-height: calc(100vh - 180px)
  }
  
</style>