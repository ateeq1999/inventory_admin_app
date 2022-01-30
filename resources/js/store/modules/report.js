const state = {
    reports: {},
    error: null,
    status: 'Loading',
}

const getters = {
    reportsData: state => state.reports,
    error: state => state.error,
}

const actions = {
    index({commit}){
        return new Promise((resolve, reject) => {
            $http.get('/reports')
            .then(resp => {
                const reports = resp.data
                localStorage.setItem('reports', JSON.stringify(reports))
                commit('REPORTS_SUCCESS', reports)
                resolve(resp)
            })
            .catch(err => {
                commit('REPORTS_ERROR', err)
                localStorage.removeItem('reports')
                reject(err)
            })
        })
    },
}

const mutations = {
  REPORTS_ERROR(state, error){
    state.error = error
  },
  REPORTS_SUCCESS(state, payload){
    state.reports = payload
  },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}