<template>
    <div id="navbar">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <img class="navbar-brand" src="https://blog.jejualan.com/wp-content/uploads/2014/11/1000-member-berbayar-bergabung-bersama-jejualan_20131129120559.jpg" alt="" width="10%">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/home">Home</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/list">List Barang</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            More
                        </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <router-link to="/add" class="dropdown-item">Add Product</router-link>
                        <p class="dropdown-item" @click="logout" id="logout">Log Out</p>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
      </nav>
    </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  methods: {
    logout () {
      swal({
        title: 'Logout?',
        icon: 'info',
        text: 'Are you sure want to logout?',
        buttons: true,
        dangerMode: true
      })
        .then(value => {
          if (value) {
            localStorage.clear()
            this.$router.push('/login')
            swal('Logout Success', { icon: 'success' })
          }
        })
    }
  }
}
</script>

<style>
    #navbar{
        margin-bottom: 70px;
    }
    .navbar .container .navbar-brand{
        display: flex;
        align-self: flex-start;
    }
    #logout{
        cursor: pointer;
    }
</style>
