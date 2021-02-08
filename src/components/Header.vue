<template>
    <div class="header">
        <div class="logo">
            <!-- <i class="fas fa-map-marker-alt"></i> -->
            <i class="fas fa-map"></i>
            <!-- <i class="fas fa-fish"></i> -->
            
            Рыбокарта</div>
        <Menu></Menu>
    </div>
</template>

<script>

    import Menu from '@/components/Menu'
    
    export default {
        components: { Menu }
    }

</script>

<style scoped>

    .header {
        /* height: 80px;
        padding-top: 20px;
        margin-top: 0px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 10px;
        background-color:  #fff; */

        font-family: 'Rubik Mono One', sans-serif;
        padding-top: 20px;
        margin-top: 0px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        background-color:  rgb(255, 255, 255);
        display: flex;
        flex-direction: row;
        align-items: center;
        box-shadow: rgba(50, 50, 105, 0.05) 0px 1px 1px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
        z-index: 5;

    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        /* border:  5px solid var(--color-violet); */
        /* padding-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px; */
        font-size: 45px;
        color: #000;
        font-family: 'Arkhip';
    }

    .icons {
        height: 40px;
    }

    /* .fa-map-marker-alt {
        font-size: 35px;
        margin-right: 5px;
        margin-bottom: 10px;
        color: var(--color-violet);
        position: relative;
        bottom: 45px;
        z-index: 2;
    }

    .fa-fish {
        position: relative;
        bottom: 70px;
        z-index: 1;
        font-size: 40px;
    } */

    .fa-map{
        margin-right: 10px;
    }

</style>