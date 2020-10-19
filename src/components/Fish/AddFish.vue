<template>
    <div>
        <div class="formHeader">
            <div class="headerText">Добавить рыбу</div>
        </div>
        <div class="formBody">
            <div class="inputContainer">
                <label for="name">Название</label>
                <input type="text" name="name" id="name" v-model="fish.name" required>
            </div>
            <div class="inputContainer">
                <label for="photo">Фото</label>
                <input type="file" name="photo" id="photo" accept=".jpg, .jpeg, .png" ref="file" v-on:change="uploadImage()" required>    
            </div>
            <div class="inputContainer">
                <label for="description">Описание</label>
                <input type="text" name="description" id="description" v-model="fish.description" required>
            </div>
        </div>
        <div class="formButtons">
            <button v-on:click="send()">Ок</button>
            <button>Отмена</button>
        </div>
    </div>
</template>

<script>
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