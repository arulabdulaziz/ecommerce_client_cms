import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios.js'
import router from '../router/index'
import swal from 'sweetalert'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'e-commerce CMS',
    author: 'Arul Abdul Aziz',
    copyright: '2020',
    powered: 'Seggoo',
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
        .then(value => {
          swal({
            text: 'Login Success',
            title: 'Welcome',
            icon: 'success'
          })
          localStorage.setItem('access_token', value.data)
          router.push('/home')
        })
        .catch(err => {
          swal('Error', `${err.response.data}`)
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
        .then(value => {
          context.commit('setList', value.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, obj) {
      axios({
        method: 'POST',
        url: '/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: obj
      })
        .then(value => {
          console.log(value)
          swal({
            text: 'Product has beed added',
            title: 'Yeay',
            icon: 'success'
          })
          router.push('/list')
        })
        .catch(err => {
          swal('Error', `${err.response.data}`)
        })
    },
    deleteProduct (context, id) {
      axios({
        method: 'DELETE',
        url: '/product/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(value => {
          swal({
            text: 'Product has beed deleted',
            title: 'Yeay',
            icon: 'success'
          })
          context.dispatch('fetchList')
        })
        .catch(err => {
          swal('Error', `${err.response.data}`)
        })
    },
    editProduct (context, obj) {
      console.log(obj, '<<<<<<<<<< dari vuex')
      axios({
        method: 'PUT',
        url: '/product/' + obj.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: obj
      })
        .then(value => {
          swal({
            text: 'Product has benn updated',
            title: 'Yeay',
            icon: 'success'
          })
          context.dispatch('fetchList')
        })
        .catch(err => {
          swal('Error', `${err.response.data}`)
        })
    }
  },
  modules: {
  }
})
