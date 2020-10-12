<template>
    <div class="header">
        <h1>Header</h1>
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
        height: 80px;
        margin-top: 0px;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 10px;
        background-color:  #fff;
    }

</style>