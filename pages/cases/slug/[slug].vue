<script setup lang="ts">
definePageMeta({
  middleware: ['auth-check'],
});

const route = useRoute();
const api = useApi();

const { data, error } = useAsyncData('cases', () => api.getCaseBySlug(route.params.slug as string));
</script>

<template>
  <h1 class="title">Case page</h1>
  <p class="text">Case <code>slug</code> from route params is: "{{ route.params.slug }}"</p>

  <pre class="response">
    {{ JSON.stringify(data ?? error, null, 4) }}
  </pre>
</template>

<style scoped></style>
