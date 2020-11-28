import DistrictData from '../../services/DistrictData';

export default {
    actions: {
        fetchDistricts({ commit, rootState, dispatch}) {
            DistrictData.getPage(rootState.common.currentPage)
            .then(json => {
                const districts = json.data.rows
                commit('updateDistricts', districts)
                dispatch('getDistrictMaxPageFromServer')
            })
        },
        fetchDistrictsNoPagination({ commit, }) {
            DistrictData.getAll()
            .then(json => {
                const districts = json.data
                commit('updateDistricts', districts)
            })
        },
        getDistrictMaxPageFromServer({commit}) {
            DistrictData.getAmount()
            .then(json => {
                const districts = json.data
                commit('updateMaxPage', districts)
            })
        },
        createDistrict({ commit, dispatch }, newDistrict, districts, ) {
            DistrictData.create(newDistrict)
            .then(() => {
                dispatch('fetchDistricts')
                .then(() => {commit('updateDistricts', districts)})
                
            })
        },
        deleteDistrict({commit, dispatch}, districtToDelete, districts) {
            DistrictData.delete(districtToDelete)
            .then(() => {
                dispatch('fetchDistricts')
                .then(()=>{commit('updateDistricts', districts)})
            })
        },
        updateDistrict({commit, dispatch}, districtToUpdate, districts) {
            DistrictData.update(districtToUpdate.id, districtToUpdate.formData)
            .then(() => {
                dispatch('fetchDistricts')
                .then(() => {
                    commit('updateDistricts', districts)
                })
            })
        }
    },
    mutations: {
        updateDistricts(state, districts) {
            state.districts = districts
        },
        // updateMaxPage(state, districts) {
        //     state.maxPage = districts
        // },
        // incrementCurrentPage(state) {
        //     if (state.currentPage < Math.ceil(state.maxPage / 7)) state.currentPage = state.currentPage + 1
        // },
        // decrementCurrentPage(state) {
        //     if (state.currentPage > 1) state.currentPage--
        // }
    },
    state: {
        districts: [],
        // currentPage: 1,
        // maxPage: 0
    },
    getters: {
        allDistricts(state) {
            return state.districts
        },
        // getMaxPage(state) {
        //     return state.maxPage
        // },
        // getCurrentPage(state) {
        //     return state.currentPage
        // },
    },
}