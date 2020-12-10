import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'e-commerce CMS',
    author: 'Arul Abdul Aziz',
    list: []
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    }
  },
  actions: {
    login (context, obj) {
      axios({
        method: 'POST',
        url: '/login',
        data: obj
      })
      .then(({data}) => {
        swal({
          text: "Login Success",
          title: "Welcome",
          icon: "success",
        });
        localStorage.setItem('access_token', value.data)
        router.push(`/home`)
      })
      .catch(err => {
        swal("Error", `${error}`);
      })
    },
    fetchList (context) {
      axios({
        method: 'GET',
        url: '/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        context.commit('setList', data)
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  modules: {
  }
})
