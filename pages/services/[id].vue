<script setup lang='ts'>
const route = useRoute()
</script>

<template>
  <h1>Service page</h1>
  <p>Service <code>id</code> from route params is: "{{route.params.id}}"</p>
</template>

<style scoped></style>