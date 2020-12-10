<template>
    <div id="main-page">
        <Navbar/>
        <router-view/>
    </div>
</template>

<script>

import Navbar from '../components/Navbar'
export default {
  name: 'Main Page',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
