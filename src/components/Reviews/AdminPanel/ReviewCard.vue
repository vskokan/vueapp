<template>
    <div class="card">
        <h2 class="name">{{review.id}}</h2>
        <p class="description">{{review.login}}</p>
        <p class="description">{{review.date}}</p>
        <p class="description">{{review.description}}</p>
        <p class="description">{{review.roadquality}}</p>
        <p class="description">{{review.isbaiting}}</p>
        <p class="description">{{review.fishingtime}}</p>
        <p class="description">{{review.latitude}}</p>
        <p class="description">{{review.longitude}}</p>
        <div class="formButtons">
            <button class="button-simple" v-on:click="closeForm">Закрыть</button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    props: ['review'],
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
        font-family: 'Inter', sans-serif;
        display: flex;
        flex-direction: column;
        width: 450px;
        color: #000;
        min-height: 250px;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding-bottom: 20px;
        box-shadow: 0 0 60px rgba(14,42,71,.25);
    }

    .name {
        margin-top: 10px;
    }

    .description {
        margin: 10px;
    }

</style>