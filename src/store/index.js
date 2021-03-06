import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const localDB = {
  page: [
    { id: 1, date: '20.03.2020', category: 'Food', value: 169 },
    { id: 2, date: '21.03.2020', category: 'Navigation', value: 50 },
    { id: 3, date: '22.03.2020', category: 'Sport', value: 450 },

    { id: 4, date: '23.03.2020', category: 'Entertaiment', value: 969 },
    { id: 5, date: '24.03.2020', category: 'Education', value: 1500 },
    { id: 6, date: '25.03.2020', category: 'Food', value: 200 },

    { id: 7, date: '23.03.2020', category: 'Entertaiment', value: 969 },
    { id: 8, date: '24.03.2020', category: 'Education', value: 1500 },
    { id: 9, date: '25.03.2020', category: 'Food', value: 200 },

    { id: 10, date: '23.03.2020', category: 'Entertaiment', value: 969 },
    { id: 11, date: '24.03.2020', category: 'Education', value: 1500 },
    { id: 12, date: '25.03.2020', category: 'Food', value: 200 }
  ]
}

export default new Vuex.Store({
  state: {
    paymentslist: [
    ],
    paymentslistId: [
    ]
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentslist = payload
    },
    addPaymentsListData (state, payload) {
      const newUniqObj = payload.filter(obj => {
        return state.paymentslistId.indexOf(obj.id) < 0
      })
      const uniqIDS = newUniqObj.map(obj => obj.id)
      state.paymentslistId.push(...uniqIDS)
      state.paymentslist.push(...newUniqObj)
    }
  },
  getters: {
    getPaymentsList: (state) => state.paymentslist
  },
  actions: {
    fetchData ({ commit }, page) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const items = localDB.page
          resolve(items)
        },
        1000)
      })
        .then(res => {
          commit('addPaymentsListData', res)
        }
        )
    }
  }
})
