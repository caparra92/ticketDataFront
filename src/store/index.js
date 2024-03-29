import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: [],
    token: localStorage.getItem('access_token') || null,
    zone: '-3',
    BASE_URL: 'https://ticket-data.herokuapp.com/api',
    // BASE_URL: 'http://localhost:3000/api',
    collapse: false
  },
  mutations: {
    setZone(state, payload) {
      state.zone = payload
    },
    getTickets(state, payload) {
      state.tickets = payload
    },
    removeTicket(state, payload) {
     const ticket = state.tickets.findIndex(ticket => {
        ticket._id === payload
      });
      state.tickets.splice(ticket,1);
    },
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    }
  },
  getters: {
    getTickets: state => {
      return state.tickets
    },
    loggedIn(state) {
      return state.token !== null
    },
    getZone(state) {
      return state.zone
    },
    getCollapse(state) {
      return state.collapse
    }
  },
  actions: {
    changeZone(context, value) {
      context.commit('setZone', value);
    },
    collapseMenu(context, value) {
      context.commit('collapse', value);
    },
    login(context, value) {
      return new Promise((resolve, reject) => {
        axios.post(`${context.state.BASE_URL}/login`, {
          username: value.username,
          password: value.password
        })
          .then(response => {
            console.log(response)
            const token = response.data.token
            localStorage.setItem('access_token', token)
            localStorage.setItem('user', response.data.usuario.name)
            localStorage.setItem('user_id', response.data.usuario._id)
            context.commit('retrieveToken', token)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    logout(context) {
      return new Promise((resolve, reject) => {
        axios.get(`${context.state.BASE_URL}/login`)
          .then(response => {
            const token = localStorage.getItem('access_token');
            console.log(response)
            localStorage.removeItem('access_token')
            localStorage.removeItem('user')
            localStorage.removeItem('user_id')
            context.commit('destroyToken', token)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    create(context, value) {
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "User": localStorage.getItem('user_id')
        }
      };
      return new Promise((resolve, reject) => {
        axios.post(`${context.state.BASE_URL}/tickets`, {
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
          impactedStaffed: value.impactedStaffed,
          logs: value.logs
        }, axiosConfig)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    update(context, value) {
      console.log(value.id)
      const token = localStorage.getItem('access_token');
      let axiosConfig = {
        headers: {
          'Authorization': token
        }
      };
      return new Promise((resolve, reject) => {
        axios.put(`${context.state.BASE_URL}/tickets/${value.id}`, {
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
          impactedStaffed: value.impactedStaffed,
          logs: value.logs
        }, axiosConfig)
          .then(response => {
            resolve(response)
            console.log(value)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getAll(context) {
      const token = localStorage.getItem('access_token');
      const user = localStorage.getItem('user_id');
      return new Promise((resolve, reject) => {
        axios.get(`${context.state.BASE_URL}/tickets/user/${user}`, {headers: {
          'Authorization': token
        }})
          .then(response => {
            context.commit('getTickets',response.data)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    getTicket(context, value) {
      const token = localStorage.getItem('access_token');
      const id = value.id
      return new Promise((resolve, reject) => {
        axios.get(`${context.state.BASE_URL}/tickets/${id}`, {headers: {
          'Authorization': token
        }})
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    remove(context,value) {
      const token = localStorage.getItem('access_token');
      return new Promise((resolve, reject) => {
        axios.delete(`${context.state.BASE_URL}/tickets/${value.id}`,{headers: {
          'Authorization': token
        }})
          .then(response => {
            context.commit('removeTicket',value.id)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  },
  modules: {
  }
})
