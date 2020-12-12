<template>
  <div id="modal-edit-product" v-if="modalShow">
          <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" :id="'form-'+ product.id">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <form @submit.prevent="editProduct">
                <div class="modal-body">
                    <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" aria-describedby="emailHelp" name="name" v-model="name">
                    </div>
                    <div class="form-group">
                    <label>Price</label>
                    <input type="number" class="form-control" name="price" v-model="price">
                    </div>
                    <div class="form-group">
                    <label>Stock</label>
                    <input type="number" class="form-control" name="stock" v-model="stock">
                    <label>Image URL</label>
                    <input type="text" class="form-control" name="image_url" v-model="image_url">
                    </div>
                </div>
                <div class="modal-footer border-top-0 d-flex justify-content-center">
                    <button type="submit" class="btn btn-success">Submit</button>
                </div>
                </form>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Modal',
  props: ['product'],
  data () {
    return {
      modalShow: true,
      name: this.product.name,
      price: this.product.price,
      stock: this.product.stock,
      image_url: this.product.image_url
    }
  },
  methods: {
    editProduct () {
      const obj = {
        id: this.product.id,
        name: this.name,
        price: this.price,
        image_url: this.image_url
      }
      this.$store.dispatch('editProduct', obj)
      $('#form-' + this.product.id).modal('hide')
      this.$bvModal['form-' + this.product.id].hide()
      this.$bvModal.hide('#form-' + this.product.id)
      this.modalShow = false
    }
  }
}
</script>

<style>

</style>
