<template>
  <div id="modal-edit-product">
          <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" id="modal">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header border-bottom-0">
                <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <form>
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
export default {
  name: 'Modal',
  props: ['product'],
  data () {
    return {
      name: this.product.name,
      price: this.product.price,
      stock: this.product.stock,
      image_url: this.product.image_url
    }
  }
}
</script>

<style>

</style>
