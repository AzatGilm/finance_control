import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentslist: [
    ]
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentslist = payload
    }
  },
  getters: {
    getPaymentsList: (state) => state.paymentslist
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i < 105; i++) {
            items.push({
              date: '13.04.22',
              category: 'Education',
              price: i
            })
          }
          resolve(items)
        },
        1000)
      })
        .then(res => {
          commit('setPaymentsListData', res)
        }
        )
    }
  }
})
