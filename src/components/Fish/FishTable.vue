<template>
    <div class="fishTable">
        <div class="tableContainer">
            
            <table class="table">
                <tr class="tableHeader">
                    <th>ID</th><th>Название</th><th>Фото</th><th>Описание</th><th>Действия</th>
                </tr>
                
                <tr v-for="fish of fishes" :fish="fish" :key="fish.id"><td class="idCell">{{fish.id}}</td><td class="nameCell">{{fish.name}}</td><td class="imageCell"><a :href="'http://localhost:3000/' + fish.image"> {{fish.image.split('/')[2]}}</a></td><td class="descriptionCell">{{fish.description.substr(0, 50) + '...'}}</td>
                <td class="actionCell">
                    <button class="view"><i class="fas fa-info"></i></button>
                    <button class="edit"><i class="fas fa-pen"></i></button>
                    <button class="delete"><i class="fas fa-trash-alt"></i></button>
                </td>
                </tr>
                
            </table>
           
        </div>
        <div class="navigationButtons">
            <button class="previous" v-on:click="previousPage"><i class="fas fa-arrow-left"></i></button>
            <button class="next" v-on:click="nextPage"><i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
</template>

<script>

import FishData from "../../services/FishData";

export default {
    data() { 
        return {
            isLoaded: false,
            fishes: [],
            page: 1,
            maxpage: ''
        }
    }, 
    methods: {
        fetchRows() {
            //fetch(`http://localhost:3000/api/fish/pag/?page=${this.page}`)
            FishData.getAllByPage(this.page)
            //.then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    this.fishes = json.data.rows
                    this.maxpage = json.data.maxpage
                    this.isLoaded = true
                }, 1000)
            })
        },
        nextPage() {
            if (this.page < this.maxpage) {
                this.page +=1
                // alert(this.page)
                this.fetchRows()
            }
        },
        previousPage() {
            if(this.page > 1) {
                this.page -= 1;
                this.fetchRows();
            }
        }
    },
    mounted() {
        if (!this.isLoaded) {
            this.fishes = [{id: '?', name: 'Загрузка', image: 'Загрузка', description: 'Загрузка'}]
        }
        this.fetchRows()
    },
}
</script>

<style scoped>
    .tableContainer {
        height: 720px;
        font-family: 'Inter', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
    .fishTable {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1200px;
        background-color: #fff;
        box-shadow: 0 0 60px rgba(14,42,71,.25);
        
    }
    table {
        border-collapse: collapse;
        /* width: 1200px; */
        background-color: #fff;
        
    }
    .tableHeader {
        background-color: rgb(101, 15, 172);
        color: #fff;
        height: 80px;
        font-size: 24px;
        font-weight: 700;
    }

    td {
        padding: 5px;
        border-bottom: 1px solid rgb(236, 236, 236);
        height: 50px;
    }

    .navigationButtons {
        /* background-color: #fff; */
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 15px;
        background: transparent;
        border: transparent
        
    }

    .navigationButtons button {
        background: transparent;
        border: transparent;
        font-size: 20px
    }

    .navigationButtons button:hover {
        cursor: pointer;
    }

    .edit, .view, .delete {
        width: 30px;
        height: 30px;
        background: transparent;
        border: transparent
    }

    .edit:hover, .view:hover, .delete:hover {
        cursor: pointer;
    }

    .idCell {
        width: 50px;
    }
    .descriptionCell {
        width: 500px;
    }

    .nameCell {
        width: 300px;
    }

    .imageCell {
        width: 300px;
    }

    .actionCell {
        width: 150px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    tr:nth-child(even) {background: #fff}
    tr:nth-child(odd) {background: rgb(248, 248, 248)}
    tr:nth-child(1) {
    background: rgb(101, 15, 172); /* Цвет фона */
    color: #fff; /* Цвет текста */
   }

</style>