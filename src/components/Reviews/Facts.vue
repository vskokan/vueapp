<template>
    <div class="container">
        {{review}}
        <div class="row" v-for="fact in allFacts" :key="fact.index">
            <div class="fishes">
                <div class="fish" v-for="fish in fact.fishes" :key="fish.id">{{fish.name}}</div>
                
            </div>
            <div class="bait">
                <span class="elem">
                    {{fact.combination.bait.name}}
                </span>
                    
            
                
            </div>
            <div class="method">
                <span class="elem">
                    {{fact.combination.method.name}}
                </span>
                
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    props: ['review'],
    watch: {
        review: function (newVal) {
            this.findFactsByReview(newVal)
        }
    },
    computed: mapGetters(['allFacts']),
    methods: {
        ...mapActions(['findFactsByReview']),
        // updateFacts() {
        //     this.findFactsByReview(newVal)
        // }
        
    },
    created() {
        this.findFactsByReview(this.review)
    },
    
}
</script>

<style scoped>
    .row {
        display: flex;
        flex-direction: row;
        /* padding: 5px; */
        /* width: 450px; */
        justify-content: space-between;
        align-items: center;
        /* border-radius: 10px; */
        /* margin-bottom: 5px; */
        /* border-bottom: 1px solid rgb(226, 226, 226); */
        /* background-color: var(--color-lightgray); */
    }

    .fishes {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        width: 200px;
    }

    .fish, .elem {
        background-color: rgb(211, 211, 211);
        margin: 5px;
        padding: 5px;
        border-radius: 10px;
    }

    .bait, .method {
        width: 200px;
    }


</style>