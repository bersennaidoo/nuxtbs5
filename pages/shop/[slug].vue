<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script setup>
const route = useRoute()
const product = reactive({
    title: null,
})
let { title } = toRefs(product)
const products = [
    {
        slug: "product-1",
        title: "Product 1",
    },
    {
        slug: "product-2",
        title: "Product 2",
    },
]
const found = products.find(product => product.slug === route.params.slug)
title = found.title
</script>