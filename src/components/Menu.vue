<template>
    <div class="menu">
            <ul class="nav">
                <li class="menuitem"><router-link to="/map"><i class="fas fa-map-marked-alt"></i>Карта</router-link></li>
                <li class="menuitem"><router-link to="/fish"><i class="fas fa-fish"></i>Рыба</router-link></li>
                <li class="menuitem"><router-link to="/test"><i class="fas fa-handshake"></i>Партнеры</router-link></li>
                <li class="menuitem"><router-link to="/test"><i class="fas fa-info-circle"></i>О нас</router-link></li>
                <!-- <li class="menuitem"><router-link to="/partners">Тест</router-link></li>
                <li class="menuitem"><router-link to="/profile">Тест</router-link></li>
                <li class="menuitem"><router-link to="/reviews">Отзыв</router-link></li> -->
                <!-- <li class="menuitem wayToAdmin"><router-link to="/databases">Админка</router-link></li>  отображать только для админа-->
            </ul>
            <div class="nav-buttons">
                <button class="button-simple">Вход</button>
                <button class="button-simple">Регистрация</button>
            </div>
    </div>
</template>

<style scoped>
    .router-link-active {
        color: rgb(0, 0, 0);
    }

    .menu {
        background-color:  #fff;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
        padding-left: 20px;
        align-items: center;
        justify-content: space-between;
    }

    .nav {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
        list-style: none;
        margin: 0; 
        padding-left: 0; 
        height: 100%;
        /* margin-top: 20px; */
        background-color:  #fff;
    }

    .nav-buttons {
        height: 100%;
        display: flex;
        flex-direction: row;
        padding-right: 20px;
        align-items: center;
        justify-content: space-between;
    }

    button .nav-buttons {
        margin-left: 5px;
    }

    .menuitem {
        position: relative;
        margin: 0 8px 0px 8px;
        font-size: 28px;
    }

    i {
        font-size: 24px;
        margin-right: 5px;
    }

    .menuitem:after {
        display: block;
        width: 0%;
        left: 50%;
        position: absolute;
        content: '';
        height: 5px;
        background: rgb(101, 15, 172);
        -webkit-transition: width .3s ease-in-out;
        -moz--transition: width .3s ease-in-out;
        transition: width .3s ease-in-out;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        transform: translateX(-50%);
    }

    .menuitem:hover:after {
        width: 100%;
    }

        a {
            text-decoration: none;
            text-transform: uppercase;
            color: #747474;
            font-weight: bold;
            height: 100%;
        }

        a:active {
            text-decoration: none;
        }

        a:visited {
            text-decoration: none;
        }

        a:hover {
            text-decoration: none;
            color: rgb(101, 15, 172);
        }
    
</style>