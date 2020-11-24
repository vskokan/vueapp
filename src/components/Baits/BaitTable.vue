<template>
    <div class="tableArea">
        <AddBait v-if="showForm"/>
        <BaitCard v-if="showCard" v-bind:bait="currentBait" />
        <div class="tableContainer">
            <div class="header"><h2>Наживки</h2><button @click="getForm">Добавить</button></div>
            <table class="table">
                <tr class="tableHeader">
                    <th>ID</th><th>Название</th><th>Описание</th><th>Действия</th>
                </tr>
                <tr v-for="bait in allBaits" :key="bait.id"><td class="idCell">{{bait.id}}</td><td class="nameCell">{{bait.name}}</td><td class="descriptionCell">{{bait.description.substr(0, 50) + '...'}}</td>
                <td class="actionCell">
                    <button class="view" @click="chooseBait(bait)"><i class="fas fa-info"></i></button>
                    <button class="edit" ><i class="fas fa-pen"></i></button>
                    <button class="delete" @click="deleteFromTable(bait.id)"><i class="fas fa-trash-alt"></i></button>
                </td>
                </tr>
                
            </table>
           
        </div>
        <div class="navigationButtons">
            <!-- <button class="add" v-on:click="showAddForm">+</button> -->
            <!-- <button class="previous" v-on:click="previousPage"><i class="fas fa-arrow-left"></i></button>
            <button class="next" v-on:click="nextPage"><i class="fas fa-arrow-right"></i></button> -->
        </div>
        <!-- <AddFish v-if="adding"/> -->
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import AddBait from '@/components/Baits/AddBait'
import BaitCard from '@/components/Baits/BaitCard'

export default {
    components: {AddBait, BaitCard},
    computed: mapGetters(["allBaits", "showForm", "showCard"]), 
    methods: { 
        ...mapActions(["fetchBaits", "deleteBait"]),
        ...mapMutations(['changeFormView', 'changeCardView']),
        getForm() {
            alert(this.showForm)
            this.changeFormView()
            alert(this.showForm)
        },
        deleteFromTable(id) {
            // alert(id)
            if (!this.showCard) {
                this.deleteBait(id)
            } else {
                alert('Закройте все окна перед удалением')
            }
            
        },
        chooseBait(bait) {
            
            if (!this.showCard) {
                this.currentBait = bait
                this.changeCardView()
            }
            // this.changeCardView()
        },
        getCard() {
            alert(this.showCard)
            if (!this.showCard) {
                this.changeCardView()
            }
            
        }
    },
    mounted() {
        this.fetchBaits();
    },
    data() {
        return {
            currentBait: ''
        }
    }
}

</script>

<style scoped>
    .tableContainer {
        /* height: 720px; */
        font-family: 'Inter', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
    .tableArea {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1000px;
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