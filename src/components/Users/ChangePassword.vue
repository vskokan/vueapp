<template>
    <div class="card">
        <form class="passwordChangeForm">
            <div class="formHeader">
                <div class="headerText">Изменение пароля {{user.login}}</div>
            </div>
            <div class="inputContainer">
                <label for="oldPassword">
                    Введите старый пароль
                </label>
                <input type="text" name="oldPassword" v-model="userToUpdate.oldPassword" required>
            </div>
            <div class="inputContainer">
                <label for="newPassword">
                    Введите новый пароль
                </label>
                <input type="text" name="newPassword"  v-model="userToUpdate.newPassword" required>
            </div>
        </form>
        <div class="formButtons">
            <button class="button-simple" v-on:click="send">Ок</button>
            <button class="button-simple" v-on:click="closeForm">Отмена</button>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
import { mapMutations } from "vuex";
//import { mapGetters } from "vuex";

export default {
    props: ['user'],
    data() {
        return {
            userToUpdate: {
                login: "",
                oldPassword: "",
                newPassword: ""
            }
        }
    },
    //computed: mapGetters(["allUsers", "showForm", "showCard", "showEditForm", "getCurrentPage", "getMaxPage"]), 
    methods: { 
        ...mapActions(["updateUserPassword_AdminPanel"]),
        ...mapMutations(['changePasswordFormView']),
        closeForm() {
            this.changePasswordFormView()
        },
        send() {
            const login = this.user.login
            const oldPassword = this.userToUpdate.oldPassword
            const newPassword = this.userToUpdate.newPassword

            alert(oldPassword, newPassword)

            let formData = new FormData()

            
            formData.append('oldPassword', oldPassword)
            formData.append('newPassword', newPassword)

            const data = {
                login: login,
                formData: formData
            }

            console.log(data)
            this.updateUserPassword_AdminPanel(data)
                // .then(res => {
                //     const data = res.status
                //     alert(data)
                // })
        },
        mounted() {
            this.userToUpdate.login = this.user.login
        }
    }
    
}
</script>