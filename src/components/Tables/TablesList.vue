<template>
    <div class="tables">
            <ul class="nav">
                <li class="menuitem"><router-link to="/databases/fishes">Рыба</router-link></li>
                <li class="menuitem"><router-link to="/databases/methods">Методы</router-link></li>
                <li class="menuitem"><router-link to="/databases/baits">Наживка</router-link></li>
                <li class="menuitem"><router-link to="/databases/users">Пользователи</router-link></li>
                <li class="menuitem"><router-link to="/databases/reviews">Отзывы</router-link></li>
                <li class="menuitem"><router-link to="/databases/facts">Факты</router-link></li>
                <li class="menuitem"><router-link to="/databases/cities">Города</router-link></li>
            </ul>
        </div>
</template>

<style scoped>

    .menu {
        background-color:  #fff;
    }

    .nav {
        border-top: 1px solid #f5f5f5;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        margin: 0; 
        padding-left: 0; 
        background-color:  #fff;
        padding: 10px;
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