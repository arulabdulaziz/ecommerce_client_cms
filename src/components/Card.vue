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
                <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#form-'+product.id">Edit</button>
                <!-- <button class="btn btn-primary" id="btn-edit" @click="editProduct">Edit</button> -->
                <button class="btn btn-danger" id="btn-delete" @click="deleteProduct">Delete</button>
            </div>
        </div>
        <Modal :product="product"/>
    </div>
</template>

<script>
import swal from 'sweetalert'
import Modal from './Modal.vue'
export default {
  name: 'CardProduct',
  props: ['product'],
  components: {
    Modal
  },
  data () {
    return {
      productEdit: {
        name: this.product.name,
        stock: this.product.stock,
        price: this.product.price,
        image_url: this.product.image_url
      }
    }
  },
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
    }
  }
}
</script>

<style scoped>
  #btn-delete{
    margin-left: 10px;
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
