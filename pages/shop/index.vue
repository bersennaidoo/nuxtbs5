<template>
    <ul v-if="menu">
        <li v-for="(item, index) in menu">
            <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
        </li>
    </ul>
</template>

<script setup>
  const menu = [
    {
        title: "Product 1",
        path: "/shop/product-1"
    },
    {
        title: "Product 2",
        path: "/shop/product-2"
    },
  ]
</script>