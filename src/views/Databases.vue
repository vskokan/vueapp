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

    .TablesArea {
      /* min-height: calc(100vh - 180px) */
      height: 50vh;
    }
  
</style>