import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chats: []
  },
  mutations: {
    setChat(state, user) {
      let outIndex = -1
      state.chats.forEach((el, index) => {
        if (el.name === user.name) outIndex = index
      })
      outIndex > 0 ? state.chats.slice(outIndex, 1) : state.chats.push(user)
    }
  },
  getters: {
    getChats: state => {
      return state.chats
    }
  }
})