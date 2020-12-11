<template>
    <div class="container" style="margin-top: 10%;">
      <!-- <h1>{{ listProduct }}</h1> -->
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
  components: {
    Card
  },
  created () {
    this.$store.dispatch('fetchList')
  },
  computed: {
    listProduct () {
      return this.$store.state.list
    }
  }
}
</script>

<style>

</style>
