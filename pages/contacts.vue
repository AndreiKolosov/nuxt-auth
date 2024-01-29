<script setup lang="ts">
const { $api } = useNuxtApp();
const { data, error } = useAsyncData('contacts', () => $api.getContacts());
</script>

<template>
  <h1 class="title">Contacts page</h1>
  <pre class="response">
    {{ JSON.stringify(data ?? error, null, 4) }}
  </pre>
</template>
