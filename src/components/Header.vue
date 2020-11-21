<template>
    <div class="header">
        <div class="logo">LOGO</div>
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
        border:  5px solid;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        font-size: 24px;
    }

</style>