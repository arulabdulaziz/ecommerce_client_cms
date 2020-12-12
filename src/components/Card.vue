<template>
    <div class="col-md" id="card-list">
        <div class="card" style="width: 18rem;">
            <img :src="product.image_url" class="card-img-top" :alt="product.name" id="img-product">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">Stock: {{product.stock}}</p>
                <h5 class="card-text">{{convertMoney()}}</h5>
                <!-- <form action="/list/:id" method="post">
                <input type="number" placeholder="masukkan jumlah yang akan anda beli" min="1" name="itemQty">
                <button type="submit" class="btn btn-primary" onclick="return confirm(`Anda yakin dengan pilihannya? Klik Ok untuk mengirimkan detail pembayaran lewat email`)">Beli</button>
                </form> -->
                <button class="btn btn-primary" id="btn-edit" @click="editProduct">Edit</button>
                <button class="btn btn-danger" id="btn-delete" @click="deleteProduct">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  props: ['product'],
  methods: {
    convertMoney () {
      let thousand = this.product.price.toString().split('').reverse().join('')
      thousand = thousand.match(/\d{1,3}/g)
      thousand = thousand.join('.').split('').reverse().join('')
      return `Rp.${thousand},-`
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
            this.$store.dispatch('deleteProduct', this.product.id)
            this.$router.push('/list')
          } else {
            swal('Your Product is save!')
          }
        })
    },
    editProduct () {
      console.log(this.product.id, '<<<<<<<<< id')
    }
  }
}
</script>

<style scoped>
  #btn-edit{
    margin-right: 10px;
  }
  button:hover{
    background-color: darkgrey;
    border-color: darkgrey;
  }
  #img-product{
    height: 15rem;
  }
  .card{
    margin-bottom: 20px;
  }
</style>
