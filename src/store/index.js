import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'e-commerce CMS',
    author: 'Arul Abdul Aziz'
  },
  mutations: {
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
    }
  },
  modules: {
  }
})
