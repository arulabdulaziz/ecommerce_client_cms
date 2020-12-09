<template>
    <div id="navbar">
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#"><img src="https://blog.jejualan.com/wp-content/uploads/2014/11/1000-member-berbayar-bergabung-bersama-jejualan_20131129120559.jpg" alt="" width="15%"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/list">List Barang</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pelanggan
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a href="/about" class="dropdown-item">About</a>
                        <a class="dropdown-item" href="/user">User</a>
                        <a class="dropdown-item" href="/logout">Log Out</a>
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

}
</script>

<style>
    #navbar{
        margin-bottom: 100px;
    }
</style>
