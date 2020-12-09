<template>
    <div class="col-md" id="card-list">
        <div class="card" style="width: 18rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <p class="card-text">{{product.stock}}</p>
                <h5 class="card-text">{{convertMoney()}}</h5> 
                <!-- <form action="/list/:id" method="post">
                <input type="number" placeholder="masukkan jumlah yang akan anda beli" min="1" name="itemQty">
                <button type="submit" class="btn btn-primary" onclick="return confirm(`Anda yakin dengan pilihannya? Klik Ok untuk mengirimkan detail pembayaran lewat email`)">Beli</button>
                </form> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product'],
    methods: {
        convertMoney () {
            let	reverse = this.product.price.toString().split('').reverse().join(''),
            thousand 	= reverse.match(/\d{1,3}/g);
            thousand	= thousand.join('.').split('').reverse().join('');
            return `Rp.${thousand},-`
        }
    }
}
</script>

<style>

</style>
