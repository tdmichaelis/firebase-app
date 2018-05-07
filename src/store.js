import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    db: null,
    user: null
  },
  mutations: {
    setDB(state, db) {
      state.db = db
    },
    setUID(state, id) {
      state.uid = id
    },
    setUser(state, user) {
      state.user = user
    },
    clearUser(state) {
      state.user = null
    }
  },
  actions: {
    setDatabase({ commit }, db) {
      commit('setDB', db)
    },
    setUID({ commit, state }, id) {
      if (state.uid !== id) commit('setUID', id)
    },
    setUser({ commit, dispatch, state }, user) {
      state.db
        .collection('users')
        .doc(user.uid)
        .get()
        .then(function(u) {
          if (u.exists) {
            let data = u.data()
            commit('setUser', data)
          } else {
            dispatch('updateUser', user)
          }
        })
    },
    clearUser({ commit }) {
      commit('clearUser')
    },
    updateUser({ commit, dispatch, state }, user) {
      // set user fields to store to database
      let u = {
        displayName: user.displayName || '',
        email: user.email || '',
        uid: user.uid,
        phone: user.phone || '',
        photoURL: user.photoURL || '',
        address: user.address || ''
      }
      state.db
        .collection('users')
        .doc(user.uid)
        .set(u)
        .then(function() {
          dispatch('setUser', user)
        })
    },
    updateUserFields({ commit, state }, fields) {
      state.db
        .collection('users')
        .doc(state.user.id)
        .update(fields)
    }
  }
})
