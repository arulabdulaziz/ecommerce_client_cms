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
                        <a class="nav-link" href="/home">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/list">List Barang</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            More
                        </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a href="/about" class="dropdown-item">About</a>
                        <a class="dropdown-item" href="/user">User</a>
                        <a href="/add" class="dropdown-item">Add Product</a>
                        <a class="dropdown-item" @click="logout">Log Out</a>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
      </nav>
    </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
    #navbar{
        margin-bottom: 100px;
    }
    .navbar .container .navbar-brand{
        display: flex;
        align-self: flex-start;
    }
</style>
