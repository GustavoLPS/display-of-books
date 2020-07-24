<template>
    <nav aria-label="Page" class="text-center">
        <ul class="pagination">
            <li class="page-item"><button :disabled="value === 0" @click.prevent="first" class="page-link">Primeira</button></li>
            <li class="page-item"><button :disabled="value === 0" v-if="currentPage - 1 > 0" @click.prevent="previous" class="page-link">Anterior</button></li>
            <li class="page-item"><button  v-if="currentPage + 1 <= totalPages" @click.prevent="forward" class="page-link">Próxima</button></li>
            <li class="page-item"><button :disabled="length - value <= 9" @click.prevent="last" class="page-link">Última</button></li>
        </ul>
        <span>mostrando página {{currentPage}} de {{totalPages}} páginas</span>
    </nav>
</template>

<script>
export default {
    name: 'ProductsPaginate',
    props: {
        value: null,
        length: {
            type: Number,
            required: true
        },
    },
    computed: {
        totalPages() {
            return Math.ceil(this.length / 9);
        },
        currentPage() {
            return Math.floor(this.value / 9) + 1;
        }
    },
    methods: {
        first() {
            this.$emit('input', 0)
        },
        previous() {
            this.$emit('input', parseInt(this.value) - 9)
        },
        forward() {
            this.$emit('input', parseInt(this.value) + 9)
        },
        last() {
            this.$emit('input', this.length - (this.length - (9 * (this.totalPages - 1))))
        }
    }
}
</script>
