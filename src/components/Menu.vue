<template>
    <div class="menu">
            <ul class="nav">
                <li class="menuitem"><router-link to="/">Карта</router-link></li>
                <li class="menuitem"><router-link to="/test">Тест</router-link></li>
                <li class="menuitem"><router-link to="/fish">Рыба</router-link></li>
                <li class="menuitem"><router-link to="/partners">Тест</router-link></li>
                <li class="menuitem"><router-link to="/profile">Тест</router-link></li>
                <li class="menuitem"><router-link to="/reviews">Отзыв</router-link></li>
                <li class="menuitem"><router-link to="/databases">Тут будут таблицы</router-link></li>
            </ul>
        </div>
</template>

<style scoped>

    .menu {
        background-color:  #fff;
    }

    .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        margin: 0; 
        padding-left: 0; 
        margin-top: 20px;
        background-color:  #fff;
    }

    a {
        text-decoration: none;
        text-transform: uppercase;
        color: #6b7478;
        font-weight: bold;
    }

    a:active {
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
        color: #000;
    }
    
</style>