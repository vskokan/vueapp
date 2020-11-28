export default {
    actions: {
    },
    mutations: {
        changeFormView(state) {
            state.form = !state.form
        },
        changeCardView(state) {
            state.card = !state.card
        },
        changeEditFormView(state) {
            state.editForm = !state.editForm
        },
        updateMaxPage(state, elements) {
            state.maxPage = elements
        },
        incrementCurrentPage(state) {
            if (state.currentPage < Math.ceil(state.maxPage / 7)) state.currentPage = state.currentPage + 1
        },
        decrementCurrentPage(state) {
            if (state.currentPage > 1) state.currentPage--
        }
    },
    state: {
        form: false,
        card: false,
        editForm: false,
        currentPage: 1,
        maxPage: 1
    },
    getters: {
        showForm(state) {
            return state.form
        },
        showCard(state) {
            return state.card
        },
        showEditForm(state) {
            return state.editForm
        },
        getMaxPage(state) {
            return state.maxPage
        },
        getCurrentPage(state) {
            
            return state.currentPage
        },
    },
}