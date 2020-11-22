<template>
    <div class="form"> 
        <div class="formHeader">
            <div class="headerText">Добавить рыбу</div>
        </div>
        <div class="form-notsubmitted" v-if="!submitted">
            <div class="formBody" >
                <div class="inputContainer">
                    <!-- <label for="name">Название</label> -->
                    <input type="text" placeholder="Введите название рыбы" name="name" id="name" v-model="fish.name" required>
                </div>
                <div class="inputContainerFile" >
                    <label for="photo" class="custom-file-upload">Выбрать фото <i class="fas fa-file-upload"></i></label>
                
                    <input type="file" name="photo" id="photo" accept=".jpg, .jpeg, .png" ref="file" v-on:change="uploadImage()" required>   
                    <p>{{isFileChosen? this.fish.image.name:'Файл не выбран'}}</p> 
                </div>
                <div class="inputContainer">
                    <!-- <label for="description">Описание</label> -->
                    <textarea name="description" placeholder="Добавьте описание" id="description" v-model="fish.description"></textarea>
                </div>
            </div>
            <div class="formButtons">
                <button class="button-simple" v-on:click="send()">Ок</button>
                <button class="button-simple">Отмена</button>
            </div>
        </div>
        <div v-else>
            <h4>Рыба добавлена</h4>
            <button class="button-simple" @click="newfish">Добавить еще</button>
        </div>
    </div>
</template>

<script>
import FishData from "../../services/FishData";

export default {
    data() {
        return {
            fish: {
                name: "",
                image: "",
                description: ""    
            },
            submitted: false,
            isFileChosen: false
        }
    },
    methods: {
        uploadImage() {
            this.isFileChosen = true
            this.fish.image = this.$refs.file.files[0];
        },
        send() {
            let formData = new FormData();
            formData.append('name', this.fish.name)
            formData.append('image', this.fish.image)
            formData.append('description', this.fish.description)
            FishData.create(formData)
                .then((response) => {
                        if (response.status === 200) this.submitted = true;
                //this.fish.id = response.data.id;
                //console.log(response.status);
                // this.submitted = true;
                })
                .catch(e => {
                console.log(e);
                });
            //this.submitted = true;
        },
        newfish() {
            this.submitted = false;
            this.isFileChosen = false;
            this.fish = {};
        },
    }
}
</script>

<style scoped>
    
    .form {
        font-family: 'Inter', sans-serif;
        display: flex;
        flex-direction: column;
        width: 450px;
        height: 550px;
        justify-items: center;
        align-items: center;
        background-color: #fff;
        /* border-radius: 5px; */
        padding-bottom: 20px;
        box-shadow: 0 0 60px rgba(14,42,71,.25);
    }

    .formHeader {
        width: 450px;
        padding-top: 20px;
        padding-bottom: 20px;
        /* border-top-left-radius: 5px;
        border-top-right-radius: 5px; */
        background: rgb(101, 15, 172);
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .headerText {
        font-size: 34px;
        color: rgb(255, 255, 255);
        font-weight: 700;
        font-family: 'Inter', sans-serif;
    }

    .form-notsubmitted {
         width: 450px;
        /* width: 100%; */
        height: 100%;
        padding-right: 10px;
    }

    #description {
        resize: none;
        height: 150px;
        width: 100%;
    }

    #name {
        width: 100%;
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
        width: 50%;
        cursor: pointer;
        height: 40px;
        font-size: 22px;
        border: none;
        /* background-color: #7c8e51; */
        background-color:  rgb(101, 15, 172);
        color: rgb(255, 255, 255);
        /* border-radius: 5px; */
        margin: 10px 0px 0px 10px;
        margin: auto;
    }
    .inputContainerFile {
        margin-bottom: 20px;
        justify-self: center;
    }

    .fa-file-upload {
        margin-left: 10px;
    }

    .custom-file-upload:hover {
        /* background-color:  #557481; */
        /* background-color: #7c8e51; */
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
        padding: 15px;
        font-size: 18px;
        font-weight: bold;
        font-family: 'Rubik', sans-serif;
    }

</style>