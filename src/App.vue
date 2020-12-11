<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
    <footer id="footer">
      <center> {{ author }} ~ copyright &#169; 2020 Powered by {{ powered }} </center>
    </footer>
  </div>
</template>
<script >
export default {
  computed: {
    author () {
      return this.$store.state.author
    },
    powered () {
      return this.$store.state.powered
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#footer {
  margin-top: 100px;
}
</style>
