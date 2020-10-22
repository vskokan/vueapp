<template>
    <div class="main">
        <TablesList></TablesList>
        <router-view></router-view>
    </div>
</template>

<script>

import TablesList from "@/components/Tables/TablesList"

export default {
    components: { TablesList }
}
</script>

<style scoped>
    .main {
        height: 80vh;
    }
    
  
</style>