<template>
  <div>
    <div v-if="!notNull">
        <NotFound/>
    </div>
    <div v-else>
      <router-link to="/list" id="go-back">Back</router-link>
      <div class="row py-3">
        <div class="col-6 order-2" id="sticky-sidebar">
            <div class="container" id="edit-page">
                <center><h1>Edit Product</h1></center>
                <form @submit.prevent="editProduct">
                    <div class="form-group">
                        <label for="name">Product's Name</label>
                        <input type="text" v-model="product.name" class="form-control" aria-describedby="emailHelp" placeholder="Enter Full Name" name="name">
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input type="number" v-model="product.price" class="form-control" aria-describedby="emailHelp" placeholder="Enter Price" name="price">
                    </div>
                    <div class="form-group">
                        <label for="price">Stock</label>
                        <input type="number" v-model="product.stock" class="form-control" aria-describedby="emailHelp" placeholder="Enter Stock" name="stock">
                    </div>
                    <div class="form-group">
                        <label for="imageUrl">Image URL</label>
                        <input type="text" v-model="product.image_url" class="form-control" aria-describedby="emailHelp" placeholder="Enter Image URL" name="imageURL">
                    </div>
                    <button type="submit" class="btn btn-primary" id="btn-edit">Edit</button>
                </form>
                <button @click="deleteProduct" class="btn btn-danger" id="btn-delete">Delete</button>
            </div>
        </div>
        <div class="col-6">
            <img :src="product.image_url" :alt="product.name" id="detail-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NotFound from './NotFound'
import axios from '../config/axios'
import swal from 'sweetalert'
export default {
  data () {
    return {
      product: {},
      notNull: true
    }
  },
  components: {
    NotFound
  },
  created () {
    // this.$store.dispatch('getById', this.$route.params.id)
    axios({
      method: 'GET',
      url: '/product/' + this.$route.params.id,
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(value => {
        this.product = value.data
      })
      .catch(err => {
        this.notNull = false
        console.log(err)
      })
  },
  methods: {
    editProduct () {
      const obj = {
        id: this.$route.params.id,
        name: this.product.name,
        price: this.product.price,
        stock: this.product.stock
      }
      this.$store.dispatch('editProduct', obj)
    },
    deleteProduct () {
      swal({
        title: 'Are you Sure?',
        text: 'You will delted this product permanently',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then(willDelete => {
          if (willDelete) {
            this.$store.dispatch('deleteProduct', this.$route.params.id)
            this.$router.push('/list')
          } else {
            swal('Your Product is save!')
          }
        })
    }
  }
}
</script>

<style scoped>
    #detail-image{
        width: 30rem;
        margin-left: 30px;
    }
    #edit-page{
        margin-left: 30px;
        padding-block-end: 30px;
    }
    button:hover{
        background-color: darkgrey;
        border-color: darkgrey;
    }
    #btn-delete{
        width: 100%;
        margin-top: 10px;
    }
    #btn-edit{
        width: 100%;
    }
    #go-back{
        display: flex;
        text-align: start;
        margin-left: 20px;
        font-size: 2rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    #go-back:hover{
        text-decoration: none;
        color: darkgrey;
    }
    button:active{
        margin-top: 10px;
    }
</style>
