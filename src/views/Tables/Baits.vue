<template>
    <div class="area">
        <!-- <AddBait></AddBait> -->
        <BaitTable/>
        <!-- <PostForm/> -->
        <!-- <h1>{{allBaits.length}}</h1> -->
        <!-- <div class="bait" v-for="bait in allBaits" :key="bait.id">
            <h2>{{bait.name + "   " + bait.id}}</h2>
            <p>{{bait.description}}</p>
        </div> -->

    </div>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";

import BaitTable from '@/components/Baits/BaitTable'

export default {
    components: { BaitTable },
//     computed: mapGetters(["allBaits", "baitCount"]),
//     methods: mapActions(["fetchBaits"]),
//     mounted() {
//         this.fetchBaits();
//   }
}

</script>