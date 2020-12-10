<template>
    <div class="container" style="margin-top: 10%;">
        <div class="row">
            <!--loooping-->
            <Card v-for="product in listProduct" :key="product.id" :product="product" />
            <!--looping-->
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  data () {
    return {
      listProduct: this.$store.state.list
    }
  },
  components: {
    Card
  },
  created () {
    this.$store.dispatch('fetchList')
  }
}
</script>

<style>

</style>
