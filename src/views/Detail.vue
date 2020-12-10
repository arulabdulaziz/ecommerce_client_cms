<template>
  <div>
      <div v-if="product">
          <h1>Datanya ada</h1>
      </div>
      <div v-else>
          <NotFound/>
      </div>
  </div>
</template>

<script>
import NotFound from './NotFound'
export default {
    props: ['product'],
    components: {
        NotFound
    }
}
</script>

<style>

</style>