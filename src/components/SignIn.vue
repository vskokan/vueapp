<template>
    <form>
        <div class="form">
            <div class="header"><h2>Вход</h2></div>
            <div class="input">
                <img class="icon" src="../assets/icons/user.svg">
                <input class="input-field" type="text" name="login" required>
                <div class="placeholder">Имя пользователя</div>
            </div>
            <div class="input">
                <img class="icon" src="../assets/icons/locked.svg">
                <input class="input-field" type="password" name="password" required>
                <div class="placeholder">Пароль</div>
            </div>
            <div class="buttons">
                <button>Войти</button>
                <button>Регистрация</button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    .header {
        width: 450px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: linear-gradient(to right, #7c8e51, #69afce);
        margin-bottom: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h2 {
        font-size: 34px;
        color: rgb(255, 255, 255);
    }

    .icon {
            width: 30px;
            height: 30px;
            margin-right: 15px;
            position: relative;
            top: 5px;
    }

    form {
        background-color: #fff;
        width: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        padding: 0px 0px 20px 0px;
        box-shadow: 0 0 60px rgba(14,42,71,.25);
        border-radius: 5px;
        z-index: 0;
    }

    .form {
        margin: 0px 0px 20px 0px;
    }

    .input {
        padding-top: 30px;
        position: relative;
        height: 60px;
        
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 40px;
        
    } 

    .input-field {
        border: none;
        border-bottom: 1px solid lightgray;
        background: transparent;
        z-index: 1;
        width: 250px;
        font-size: 26px;
        font-family: 'Rubik', sans-serif;
    }

    .input-field:required {
        border: none;
        box-shadow: none;
        border-bottom: 1px solid lightgray;
    }

    .placeholder {
        font-size: 18px;
        color: lightgray;
        position: relative;
        top: -28px;
        padding-left: 125px;
        z-index: -1;
        text-align: left;
        transition: font-size 0.01s ease-in-out 0.01s;
        transition: color 0.5s ease-in-out 0.01s;
    }

    .input-field:focus + .placeholder, .input-field:valid + .placeholder {
        color: #000000;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        animation: movePlaceholder 0.2s ease-in forwards;
    }

    .input-field:not(:focus) + .placeholder {
        color: gray;
    }

    @keyframes movePlaceholder {
        to {
            transform: translateY(-30px);
        }
    }

</style>