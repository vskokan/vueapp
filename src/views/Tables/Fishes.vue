<template>
    <div class="area">
        <AddFish></AddFish>
        <FishTable></FishTable>
    </div>
</template>

<script>

import AddFish from '@/components/Fish/AddFish'
import FishTable from '@/components/Fish/FishTable'

export default {
    components: { AddFish, FishTable }
}
</script>

<style scoped>
    .area {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

    }
</style>