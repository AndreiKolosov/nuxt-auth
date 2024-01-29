<script setup lang="ts">
definePageMeta({
  middleware: ['auth-check'],
});

const route = useRoute();
const id = route.params.id as string;
const token = useCookie('token');
const { $api } = useNuxtApp();

const { data, error } = useAsyncData(`case-${id}`, () =>
  $api.getServiceById({ id, token: token.value || '' }),
);
</script>

<template>
  <h1 class="title">Service page</h1>

  <p class="text">Service <code>id</code> from route params is: "{{ id }}"</p>

  <pre class="response">
    {{ JSON.stringify(data ?? error, null, 4) }}
  </pre>
</template>

<style scoped></style>
