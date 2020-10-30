<template>
    <div class="form"> 
        <div class="formHeader">
            <div class="headerText">Добавить метод</div>
        </div>
        <div class="formBody">
            <div class="inputContainer">
                <label for="name">Название</label>
                <input type="text" name="name" id="name" v-model="method.name" required>
            </div>
            <div class="inputContainer">
                <label for="description">Описание</label>
                <!-- <input type="text" name="description" id="description" v-model="fish.description" required> -->
                <textarea name="description" id="description" v-model="method.description"></textarea>
            </div>
        </div>
        <div class="formButtons">
            <button v-on:click="send()">Ок</button>
            <button>Отмена</button>
        </div>
    </div>
</template>

<script>
import MethodData from "../../services/MethodData";

export default {
    data() {
        return {
            method: {
                name: "",
                description: ""    
            }
        }
    },
    methods: {
        send() {
            //alert(this.fish.name)
            let formData = new FormData();
            formData.append('name', this.method.name)
            formData.append('description', this.method.description)

            // axios.post("http://localhost:3000/api/fish/test/", formData, { headers: "multipart/form-data"})
            //     .then(()=>{console.log('Success')})
            //     .catch(()=>{console.log('Error!!!')})
            MethodData.create(formData)
                .then(response => {
                this.method.name = response.data;
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