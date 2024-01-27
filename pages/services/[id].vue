<script setup lang='ts'>
definePageMeta({
  middleware: ['auth-check']
})

const route = useRoute()
</script>

<template>
  <h1 class="title">Service page</h1>
  <p class="text">Service <code>id</code> from route params is: "{{route.params.id}}"</p>
</template>

<style scoped></style>