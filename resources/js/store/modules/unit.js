const state = {
    unit: {},
    units: [],
    error: null,
    status: 'Loading',
}

const getters = {
    unit: state => state.unit,
    units: state => state.units,
    error: state => state.error,
}

const actions = {
    index({commit}){
        return new Promise((resolve, reject) => {
            $http.get('/units')
            .then(resp => {
                const units = resp.data
                localStorage.setItem('units', JSON.stringify(units))
                commit('UNITS_SUCCESS', units)
                resolve(resp)
            })
            .catch(err => {
                commit('UNIT_ERROR', err)
                localStorage.removeItem('units')
                reject(err)
            })
        })
    },
    show({commit}, unitId){
        return new Promise((resolve, reject) => {
            $http.get(`/units/${unitId}`)
            .then(resp => {
                const unit = resp.data
                localStorage.setItem('unit', JSON.stringify(unit))
                commit('UNIT_SUCCESS', unit)
                resolve(resp)
            })
            .catch(err => {
                commit('UNIT_ERROR', err)
                localStorage.removeItem('unit')
                reject(err)
            })
        })
    },
    store({commit}, formData){
        return new Promise((resolve, reject) => {
            $http.post(`/units`, formData)
            .then(resp => {
                commit('CREATE_SUCCESS', 'SUCCESS')
                resolve(resp)
            })
            .catch(err => {
                commit('UNIT_ERROR', err)
                reject(err)
            })
        })
    },
    update({commit}, formData){
        console.log(formData)
        return new Promise((resolve, reject) => {
            $http.put(`/units/${formData.id}`, formData)
            .then(resp => {
                const unit = resp.data

                localStorage.setItem('unit', JSON.stringify(unit))

                commit('UNIT_SUCCESS', unit)

                resolve(resp)
            })
            .catch(err => {
                commit('UNIT_ERROR', err)

                localStorage.removeItem('unit')
                
                reject(err)
            })
        })
    },
    delete({commit}, unitId){
        return new Promise((resolve, reject) => {
            $http.delete(`/units/${unitId}`)
            .then(resp => {
                localStorage.removeItem('unit')
                
                resolve(resp)
            })
            .catch(err => {
                commit('UNIT_ERROR', err)

                localStorage.removeItem('unit')

                reject(err)
            })
        })
    },
}

const mutations = {
  CREATE_SUCCESS(state, payload){
    state.status = payload
  },
  UNIT_ERROR(state, error){
    state.error = error
  },
  UNIT_SUCCESS(state, payload){
    state.unit = payload
  },
  UNITS_SUCCESS(state, payload){
    state.units = payload
  },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}