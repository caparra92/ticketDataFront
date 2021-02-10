import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiURL: 'http://localhost:3000/api/ticketData'
  },
  mutations: {
  },
  actions: {
    create(_, value) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/api/ticketData', {
          reportedBy: value.reportedBy,
          lob: value.lob,
          schedule: value.schedule,
          client: value.client,
          site: value.site,
          platform: value.platform,
          issue: value.issue,
          ipHostname: value.ipHostname,
          extension: value.extension,
          startTime: value.startTime,
          reportTime: value.reportTime,
          endTime: value.endTime,
          impactedStaffed: value.impactedStaffed
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  modules: {
  }
})
