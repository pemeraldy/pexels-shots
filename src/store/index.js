import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    queryInit:'animals',    
    photos:[],
    search:[],
  },
  mutations: {
    SET_PHOTOS:(state, data) => state.photos = data
  },
  actions: {
    async fetchPhotos({commit},query){
      try {
        const resp = await Api(query);
        console.log(resp)
        const photos = await resp.photos
        commit('SET_PHOTOS', photos)
        // return photos
      } catch (error) {
        console.log(error)
      }
    },

  },
  getters:{
    getPhotos:(state) => state.photos
  },
  modules: {
  }
})


