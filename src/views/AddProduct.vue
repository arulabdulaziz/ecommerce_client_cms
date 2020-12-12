<template>
    <div class="container" style="margin-top: 10%;" id="add-page">
        <center><h1>Add Product</h1></center>
        <form @submit.prevent="addProduct">
            <div class="form-group">
                <label for="name">Product's Name</label>
                <input type="text" v-model="name" class="form-control" aria-describedby="emailHelp" placeholder="Enter Full Name" name="name">
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="number" v-model="price" class="form-control" aria-describedby="emailHelp" placeholder="Enter Price" name="price">
            </div>
            <div class="form-group">
                <label for="price">Stock</label>
                <input type="number" v-model="stock" class="form-control" aria-describedby="emailHelp" placeholder="Enter Stock" name="stock">
            </div>
            <div class="form-group">
                <label for="imageUrl">Image URL</label>
                <input type="text" v-model="image_url" class="form-control" aria-describedby="emailHelp" placeholder="Enter Image URL" name="imageURL">
            </div>
            <button type="submit" class="btn btn-primary" id="btn-submit-register">Add</button>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      price: 0,
      stock: 0,
      image_url: ''
    }
  },
  methods: {
    addProduct () {
      const obj = {
        name: this.name,
        price: this.price,
        stock: this.stock,
        image_url: this.image_url
      }
      this.$store.dispatch('addProduct', obj)
      this.name = ''
      this.price = 0
      this.stock = 0
      this.image_url = ''
    }
  }
}
</script>

<style scoped>
    h1{
        font-family: fantasy;
    }
</style>
