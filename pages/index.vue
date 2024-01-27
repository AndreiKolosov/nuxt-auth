<script setup lang='ts'>
const { getContacts } = useApi();

const { data, error } = useAsyncData('cases', getContacts)
</script>

<template>
  <h1 class="title">Home page</h1>
  {{ data }} {{ error }}
</template>

<style scoped></style>