<script setup lang='ts'>
definePageMeta({
  middleware: ['auth-check']
})

const route = useRoute()
const api = useApi();

const {data, error} = useAsyncData(`case-${route.params.id}`, () => api.getServiceById(route.params.id as string))
</script>

<template>
  <h1 class="title">Service page</h1>
  
  <p class="text">Service <code>id</code> from route params is: "{{route.params.id}}"</p>

  <pre class="response">
    {{ JSON.stringify(data ?? error, null, 4) }}
  </pre>
</template>

<style scoped></style>