<template>
    <div class="tableArea">
        <transition name="fade">
            <AddDistrict class="addForm" v-if="showForm"/>
            <EditDistrict class="editForm" v-if="showEditForm" v-bind:district="currentDistrict" />
        </transition>
        
        <div class="tableContainer">
            <div class="header">
                <h2>
                    Районы
                </h2>
                <button class="button-tableheader" @click="getForm">Добавить <i class="fas fa-plus"></i></button>
            </div>
            <table class="table">
                <thead>
                    <tr class="tableHeader">
                    <th>ID</th><th>Название</th><th>Действия</th>
                </tr>
                </thead>
                    <tr v-for="district in allDistricts" :key="district.id" class="row"><td class="idCell">{{district.id}}</td><td class="nameCell">{{district.name}}</td>
                        <td class="actionCell">
                            <button class="edit" @click="chooseDistrictToUpdate(district)"><i class="fas fa-pen"></i></button>
                            <button class="delete" @click="deleteFromTable(district.id)"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
            </table>
        </div>
        <div class="navigationButtons">
            <button class="previous" @click="previousPage"><i class="fas fa-arrow-left"></i></button>
            <button class="next" @click="nextPage"><i class="fas fa-arrow-right"></i></button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import AddDistrict from '@/components/Districts/AddDistrict'
import EditDistrict from '@/components/Districts/EditDistrict'

export default {
    components: {AddDistrict, EditDistrict},
    computed: mapGetters(["allDistricts", "showForm", "showEditForm", "getCurrentPage", "getMaxPage"]), 
    methods: { 
        ...mapActions(["fetchDistricts", "deleteDistrict", "getMaxPageFromServer"]),
        ...mapMutations(['changeFormView', 'changeEditFormView', 'incrementCurrentPage', 'decrementCurrentPage']),
        getForm() {
            this.changeFormView()
        },
        deleteFromTable(id) {
            if (!this.showCard) {
                this.deleteDistrict(id)
            } else {
                alert('Закройте все окна перед удалением')
            }
        },
        chooseDistrictToUpdate(District) {
            if (!this.showEditForm) {
                this.currentDistrict = District
                this.changeEditFormView()
            }
        },
        getEditForm() {
            if (!this.showEditForm) {
                this.changeEditFormView()
            }
        },
        previousPage() {
            this.decrementCurrentPage()
            this.fetchDistricts();
        },
        nextPage() {
            this.incrementCurrentPage()
            this.fetchDistricts()
        }
    },
    mounted() {
        
        this.fetchDistricts()
    },
    data() {
        return {
            currentDistrict: ''
        }
    }
}

</script>

<style scoped>
    .tableContainer {
        font-family: 'Inter', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 0;
        
    }
    .tableArea {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 70vh;
        background-color: #fff;
        box-shadow: 0 0 60px rgba(14,42,71,.25);
        z-index: 0;
        
    }
    table {
        border-collapse: collapse;
        background-color: #fff;
        z-index: 0;
        
    }
    .tableHeader {
        background-color: rgb(101, 15, 172);
        color: #fff;
        height: 80px;
        font-size: 24px;
        font-weight: 700;
        z-index: 0;
    }

    td {
        padding: 5px;
        border-bottom: 1px solid rgb(236, 236, 236);
        height: 50px;
    }

    .navigationButtons {
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

    .row:nth-child(even) {background: #fff}
    .row:nth-child(odd) {background: rgb(248, 248, 248)}


   .tableHeader {
        background-color: rgb(101, 15, 172);
        color: #fff;
        height: 80px;
        font-size: 24px;
        font-weight: 700;
        z-index: 0;
    }

   .addForm, .cardForm, .editForm {
       position: absolute;
       margin: auto;
       margin-top: 50px;
       z-index: 5;
   }

   .fade-enter-active, .fade-leave-active {
        transition: all 0.3s;
      }
      .fade-enter, .fade-leave-to {
        opacity: 0;
      }

    .tableImage {
        width: 40px;
        margin-right: 10px;
        color: #fff;
    }

    .header {
        display: flex;
        padding-top: 5px;
        padding-right: 10px;
        padding-left: 10px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(101, 15, 172);
        color: #fff;
    }

    .header h2  {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 48px;
    }

    .fadee-enter-active, .fadee-leave-active {
    transition: opacity .5s;
    }
    .fadee-enter, .fadee-leave-to {
    opacity: 0;
    }

</style>