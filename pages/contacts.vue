<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { data, error } = await useAsyncData('contacts', () => nuxtApp.$api.getContacts(), {
  getCachedData(key) {
    return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key];
  },
});
</script>

<template>
  <h1 class="title test">Contacts page</h1>
  <pre class="response">
    {{ JSON.stringify(data ?? error, null, 4) }}
  </pre>
</template>
