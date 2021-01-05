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
        },
        fetchDistrictById({commit}, id) {
            DistrictData.get(id)
            .then(json => {
                const district = json.data
                console.log('dkeufj')
                console.log(json.data.name)
                //alert(district.name)
                commit('updateDistrict', district)
            })
        }
    },
    mutations: {
        updateDistricts(state, districts) {
            state.districts = districts
        },
        updateDistrict(state, district) {
            state.district.id = district.id,
            state.district.name = district.name
        }
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
        district: {
            id: "",
            name: "",
        }
        // currentPage: 1,
        // maxPage: 0
    },
    getters: {
        allDistricts(state) {
            return state.districts
        },
        getDistrict(state) {
            //alert(state.district.id)
            return state.district
        },
        // getCurrentPage(state) {
        //     return state.currentPage
        // },
    },
}