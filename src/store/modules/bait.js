import BaitData from '../../services/BaitData';

export default {
    actions: {
        fetchBaits({ commit, }) {
            BaitData.getAll()
            .then(json => {
                const baits = json.data
                commit('updateBaits', baits)
            })
            // const baits = await res.json()
            
        },
        createBait({ commit, dispatch }, newBait, baits, ) {
            BaitData.create(newBait)
            .then(() => {
                dispatch('fetchBaits')
                .then(() => {commit('updateBaits', baits)})
                
            })
        },
        deleteBait({commit, dispatch}, baitToDelete, baits) {
            BaitData.delete(baitToDelete)
            .then(() => {
                dispatch('fetchBaits')
                .then(()=>{commit('updateBaits', baits)})
            })
        },
    },
    mutations: {
        updateBaits(state, baits) {
            state.baits = baits
        },
        changeFormView(state) {
            state.form = !state.form
        },
        changeCardView(state) {
            state.card = !state.card
        }
        // insertBait(state, newBait) {
        //     state.baits.unshift(newBait)
        // }
    },
    state: {
        baits: [],
        form: false,
        card: false,
    },
    getters: {
        allBaits(state) {
            return state.baits
        },
        showForm(state) {
            return state.form
        },
        showCard(state) {
            return state.card
        }
        // baitCount(state) {
        //     return state.baits.length
        // }
    },
}