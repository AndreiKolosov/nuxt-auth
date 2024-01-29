<script setup lang="ts">
definePageMeta({
  middleware: ['auth-check'],
});

const route = useRoute();
const slug = route.params.slug as string;
const token = useCookie('token');
const { $api } = useNuxtApp();

const { data, error } = useAsyncData(`cases-${slug}`, () => $api.getCaseBySlug({ slug, token: token.value || '' }));
</script>

<template>
  <h1 class="title">Case page</h1>
  <p class="text">Case <code>slug</code> from route params is: "{{ slug }}"</p>

  <pre class="response">
    {{ JSON.stringify(data ?? error, null, 4) }}
  </pre>
</template>

<style scoped></style>
