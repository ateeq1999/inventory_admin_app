import Vue from "vue";
import Vuex from "vuex";
import auth from './modules/auth'
import unit from './modules/unit'
import manager from './modules/manager'
import equipment from './modules/equipment'
import staff from './modules/staff'
import department from './modules/department'
import doctor from './modules/doctor'
import order from './modules/order'
import report from "./modules/report";

Vue.use(Vuex)

const state = {
}
const getters = {
}
const actions = {
}
const mutations = {
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    Auth: auth,
    Unit: unit,
    Equipment: equipment,
    Manager: manager,
    Staff: staff,
    Department: department,
    Doctor: doctor,
    Order: order,
    Report: report
  }
})
