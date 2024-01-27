<script setup lang='ts'>
definePageMeta({
  middleware: ['auth-check']
})

const route = useRoute()
</script>

<template>
  <h1 class="title">Case page</h1>
  <p class="text">Case <code>slug</code> from route params is: "{{route.params.slug}}"</p>
</template>

<style scoped></style>