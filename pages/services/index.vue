<script setup lang='ts'>
definePageMeta({
  middleware: ['auth-check']
})
const token = useCookie('token')
const { $api } = useNuxtApp();
const { data, error } = useAsyncData('cases', () => $api.getServices(token.value || ''));
</script>

<template>
  <h1 class="title">Services page</h1>

  <pre class="response">
    {{ JSON.stringify(data ?? error, null, 4) }}
  </pre>
  
</template>

<style scoped></style>