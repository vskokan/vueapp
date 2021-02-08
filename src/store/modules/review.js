import ReviewData from '../../services/ReviewData';

export default {
    actions: {
        fetchReviews({ commit, rootState, dispatch}) {
            ReviewData.getPage(rootState.common.currentPage)
            .then(json => {
                const reviews = json.data.rows
                //console.log(reviews)
                commit('updateReviews', reviews)
                dispatch('getReviewMaxPageFromServer')
            })
        },
        fetchReviewsNoPagination({ commit, }) {
            ReviewData.getAll()
            .then(json => {
                const reviews = json.data.rows
                console.log(json)
                commit('updateReviews', reviews)
            })
        },
        getReviewMaxPageFromServer({commit}) {
            ReviewData.getAmount()
            .then(json => {
                const reviews = json.data
                commit('updateMaxPage', reviews)
            })
        },
        createReview({ commit, dispatch }, newReview, reviews, ) {
            ReviewData.create(newReview)
            .then(() => {
                dispatch('fetchReviews')
                .then(() => {commit('updateReviews', reviews)})
                
            })
        },
        deleteReview({commit, dispatch}, reviewToDelete, reviews) {
            ReviewData.delete(reviewToDelete)
            .then(() => {
                dispatch('fetchReviews')
                .then(()=>{commit('updateReviews', reviews)})
            })
        },
        updateReview({commit, dispatch}, reviewToUpdate, reviews) {
            ReviewData.update(reviewToUpdate.id, reviewToUpdate.formData)
            .then(() => {
                dispatch('fetchReviews')
                .then(() => {
                    commit('updateReviews', reviews)
                })
            })
        },
        updateReviewPassword_AdminPanel({commit, dispatch}, reviewToUpdate, reviews) {
            //alert(ReviewToUpdate.formData)
            ReviewData.updatePassword(reviewToUpdate.login, reviewToUpdate.formData)
                .then(() => {
                    dispatch('fetchReviews')
                    .then(() => {
                        commit('updateReviews', reviews)
                    })
                })
        }
    },
    mutations: {
        updateReviews(state, reviews) {
            state.reviews = reviews
        },
    },
    state: {
        reviews: [],
    },
    getters: {
        allReviews(state) {
            //alert(state.reviews)
            return state.reviews
        },
    },
}