<template>
    <div class="form"> 
        <div class="formHeader">
            <div class="headerText">Добавить пользователя</div>
        </div>
        <div class="formBody">
            <div class="inputContainer">
                <label for="name">Логин</label>
                <input type="text" name="name" id="name" v-model="fish.name" required>
            </div>
            <div class="inputContainer">
                <label for="name">Пароль</label>
                <input type="text" name="name" id="name" v-model="fish.name" required>
            </div>
            <div class="inputContainer">
                <label for="name">Email</label>
                <input type="text" name="name" id="name" v-model="fish.name" required>
            </div>
            <div class="inputContainer">
                <label for="name">Админ</label>
                <input type="checkbox" name="name" id="name" v-model="fish.name" required>
            </div>
            <div class="inputContainer">
                <label for="name">Имя</label>
                <input type="text" name="name" id="name" v-model="fish.name" required>
            </div>
            <div class="inputContainer">
                <label for="name">Локация</label>
                <input type="text" name="name" id="name" v-model="fish.name" required>
            </div>
            <div class="inputContainerFile" >
                <label for="photo" class="custom-file-upload">Аватар</label>
               
                <input type="file" name="photo" id="photo" accept=".jpg, .jpeg, .png" ref="file" v-on:change="uploadImage()" required>    
            </div>
            <div class="inputContainer">
                <label for="name">Рейтинг</label>
                <input type="text" name="name" id="name" v-model="fish.name" required>
            </div>
        </div>
        <div class="formButtons">
            <button v-on:click="send()">Ок</button>
            <button>Отмена</button>
        </div>
    </div>
</template>

<script>

//ДОДЕЛАТЬ

import FishDataService from "../../services/FishDataService";

export default {
    data() {
        return {
            fish: {
                name: "",
                image: "",
                description: ""    
            }
        }
    },
    methods: {
        uploadImage() {
            this.fish.image = this.$refs.file.files[0];
        },
        send() {
            //alert(this.fish.name)
            let formData = new FormData();
            formData.append('name', this.fish.name)
            formData.append('image', this.fish.image)
            formData.append('description', this.fish.description)

            // axios.post("http://localhost:3000/api/fish/test/", formData, { headers: "multipart/form-data"})
            //     .then(()=>{console.log('Success')})
            //     .catch(()=>{console.log('Error!!!')})
            FishDataService.create(formData)
                .then(response => {
                this.fish.name = response.data;
                console.log(response.data);
                //this.submitted = true;
                })
                .catch(e => {
                console.log(e);
                });
            //alert(formData.get('image'))
        }
    }
}
</script>

<style scoped>
    
    .form {
        
        font-family: 'Rubik', sans-serif;
        display: flex;
        flex-direction: column;
        width: 450px;
        justify-items: center;
        align-items: center;
        background-color: #fff;
        border-radius: 5px;
        padding-bottom: 20px;
        box-shadow: 0 0 60px rgba(14,42,71,.25);
    }

    .formHeader {
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

    .headerText {
        font-size: 34px;
        color: rgb(255, 255, 255);
        font-weight: bold;
    }

    #description {
        resize: none;
        height: 150px;
        width: 300px;
    }

    #name {
        width: 300px;
        height: 30px;
    }

    .formBody {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 10px;
    }

    .inputContainer {
        margin-left: 20px;
        margin-right: 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    input[type="file"] {
        display: none;
    }

    .custom-file-upload {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 160px;
        cursor: pointer;
        height: 40px;
        font-size: 22px;
        border: none;
        /* background-color: #7c8e51; */
        background-color:  #557481;
        color: rgb(255, 255, 255);
        border-radius: 5px;
        margin: 10px 0px 0px 10px;
        margin: auto;
    }
    .inputContainerFile {
        margin-bottom: 20px;
        justify-self: center;
    }

    .custom-file-upload:hover {
        /* background-color:  #557481; */
        background-color: #7c8e51;
        cursor: pointer;
    }

    .inputContainer label {
        font-weight: bold;
        align-self: center;
    }

    #name, #description {
        border-radius: 3px;
        border: none;
        box-shadow: none;
        background-color: #cadbe24f;
        padding: 5px;
        font-size: 18px;
        font-weight: bold;
        font-family: 'Rubik', sans-serif;
    }

</style>