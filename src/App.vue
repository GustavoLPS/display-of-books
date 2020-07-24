<template>
    <div>
        <div class="container">
            <div class="row justify-content-end mt-2 mr-1">
                <search :products="products" @find="preview" />
            </div>
            <div class="row mt-2 justify-content-center">
                <card v-for="product in filter" :key="product.id" :product="product" />
            </div>
            <div class="row mt-2 justify-content-center">
                <products-paginate v-model="startFilter" :length="products.length"/>
            </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import Search from './components/Search.vue';
import Card from './components/Card.vue';
import ProductsPaginate from './components/ProductsPaginate.vue';

export default {
    name: 'App',
    components: {
        Search,
        Card,
        ProductsPaginate
    },
    props: {
    },
    data() {
        return {
            products: [],
            startFilter: 0,
            route: 'https://blackbox-v1-submarino.b2w.io/defer/produto/1708602357?pfm_carac=livro',
            filter: []
        }
    },
    watch: {
        startFilter(value) {
            this.preview(this.products.slice(value, value + 9))
        }
    },
    mounted() {
        this.findBooks(this.route)
    },
    methods: {
        findBooks(route) {
            axios.get(route)
            .then(res => {
                this.products = Object.values(res.data.products)
                this.preview()
            });
        },
        preview(filter = []) {
            if (filter.length) {
                this.filter = filter
            } else {
                this.filter = this.products.slice(0, 9)
            }
        }
    }
}
</script>
