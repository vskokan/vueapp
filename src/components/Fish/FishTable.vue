<template>
    <div class="fishTable">
        <table class="table">
            <tr class="tableHeader">
                <th>ID</th><th>Название</th><th>Фото</th><th>Описание</th><th>Действия</th>
            </tr>
            <tr v-for="fish of fishes" :fish="fish" :key="fish.id"><td>{{fish.id}}</td><td>{{fish.name}}</td><td>{{fish.image}}</td><td>{{fish.description.substr(0, 50) + '...'}}</td>
            <td>
                <button class="view">View</button>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </td>
            </tr>
        </table>
        <div class="navigationButtons">
            <button class="previous" v-on:click="previousPage">Back</button>
            <button class="next" v-on:click="nextPage">Next</button>
        </div>
    </div>
</template>

<script>
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
            fetch(`http://localhost:3000/api/fish/pag/?page=${this.page}`)
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    this.fishes = json.rows
                    this.maxpage = json.maxpage
                    this.isLoaded = true
                }, 1000)
            })
        },
        nextPage() {
            if (this.page < this.maxpage) {
                this.page +=1
                alert(this.page)
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
    .fishTable {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 500px;
        background-color: #fff;
        
        
    }
    table {
        border-collapse: collapse;
        width: 500px;
        background-color: #fff;
        
    }
    .tableHeader {
        background-color: rgb(101, 15, 172);
        color: #fff;
        height: 80px;
    }

    td {
        padding: 20px
    }

    .navigationButtons {
        background-color: #fff;
        width: 500px;
    }
</style>