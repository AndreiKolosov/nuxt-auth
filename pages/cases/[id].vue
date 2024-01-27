<script setup lang='ts'>
const route = useRoute()
</script>

<template>
  <h1>Case page</h1>
  <p>Case <code>id</code> from route params is: "{{route.params.id}}"</p>
</template>

<style scoped></style>