<template>
    <div class="card">
        <h2 class="name">{{bait.name}}</h2>
        <p class="description">{{bait.description}}</p>
        <div class="formButtons">
            <button class="button-simple" v-on:click="closeForm">Отмена</button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    props: ['bait'],
    methods: {
        ...mapMutations(['changeCardView']),
        closeForm() {
            this.changeCardView()
        }
    }
}
</script>

<style scoped>
    .card {
        width: 400px;
        box-shadow: 0 0 60px rgba(14,42,71,.25);
    }
</style>