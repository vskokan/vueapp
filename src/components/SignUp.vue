<template>
    <form class="window">
        <div class="header">Регистрация</div>
        <div class="main">
            <div>Дальше лень...</div>
        </div>
        <div class="buttons"></div>
    </form>
</template>

<style scoped>

    .window {
        width: 500px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        padding: 0px 0px 20px 0px;
        box-shadow: 0 0 60px rgba(14,42,71,.25);
        border-radius: 5px;
        z-index: 0;
    }

     .header {
        width: 500px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: linear-gradient(to right, #7c8e51, #69afce);
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 34px;
        color: rgb(255, 255, 255);
    }

    .main {
        margin: 0px 0px 20px 0px;
    }

</style>