<template>
<div class="col-md-4 card-area">
    <div class="card card-container">
        <img id ="img-card" class="card-img-top img-fluid p-2" :alt="product.name" :src="product.image.large">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
        </div>
        <div class="card-footer text-right">
            <div>
                <img v-if="product.prime" class="prime" src="@/assets/prime.png">
                <div class="card-text text-right">R$ {{ product.offerPrice }}</div>
                <div class="card-text text-right">{{ product.installment }}</div>
                <div class="card-text text-right sellerName">Vendido por: {{ product.sellerName }}</div>
            </div><br>
            <div>
                <a href="#" class="btn btn-primary">Mais detalhes</a>
            </div>
        </div>
        <modal-details />
    </div>
</div>
</template>

<script>

export default {
    name: 'Card',
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>
