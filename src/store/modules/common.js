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
    },
    state: {
        form: false,
        card: false,
        editForm: false,
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
    },
}