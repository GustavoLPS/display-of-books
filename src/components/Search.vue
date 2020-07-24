<template>
    <div>
        <input type="text"
            @input="find"
            class="form-control" 
            placeholder="Buscar um produto"
        />
        <span v-if="filter.length" class="find-message text-success">{{filter.length}} produtos encontrados</span>
    </div>
</template>

<script>
export default {
    name: 'Search',
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            filter: []
        }
    },
    methods: {
        find({target}) {
            let find = (target.value ?? '').toLowerCase()
            this.filter = []

            if (find) {
                this.filter = this.products.filter(({ name }) => {
                    name = name.toLowerCase()
                    return name.indexOf(find) !== -1 || String(name).includes(find)
                })
            }

            this.$emit('find', this.filter)
        }
    }
}
</script>
