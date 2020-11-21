<template>
    <div class="fishTable">
        <table>
            <tr>
                <th>ID</th><th>Название</th><th>Фото</th><th>Описание</th><th>Действия</th>
            </tr>
            <tr v-for="fish of fishes" :fish="fish" :key="fish.id"><td>{{fish.id}}</td><td>{{fish.name}}</td><td>{{fish.image}}</td><td>{{fish.description}}</td>
            <td>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </td>
            </tr>
        </table>
        <button class="previous">Back</button>
        <button class="next">Next</button>
    </div>
</template>

<script>
export default {
    data: {
        fishes: [],
        page: 1,
        maxpage: ''
    }, 
    methods: {
        fetchRows() {
            return fetch(`localhost:3000/api/fishes?page=${this.page}`)
            .then((res) => {
                this.fishes = res.data.fishes
                this.maxpage = res.data.maxpage
            })
        },
        nextPage() {
            if (page < maxpage) {
                this.page +=1
                this.fetchRows()
            }
        },
        previousPage() {
            if(page > 1) {
                this.page -= 1;
                this.fetchRows();
            }
        }
    },
    mounted() {
        this.fetchRows()
    } 
}
</script>