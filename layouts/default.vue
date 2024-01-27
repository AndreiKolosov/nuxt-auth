<script setup lang="ts">
import { APP_ROUTES } from '~/utils/constants';
</script>

<template>
  <header class="header">
    <nav class="nav">
      <NuxtLink class="nav__link" :to="APP_ROUTES.ROOT">Home</NuxtLink>
      <NuxtLink class="nav__link" :to="APP_ROUTES.SERVICES">Services</NuxtLink>
      <NuxtLink class="nav__link" :to="APP_ROUTES.CASES">Cases</NuxtLink>
      <NuxtLink class="nav__link" :to="APP_ROUTES.CONTACTS">Contacts</NuxtLink>
    </nav>
    <NuxtLink class="header__loginLink" :to="APP_ROUTES.LOGIN">Log in</NuxtLink>
  </header>
  <main class="main">
    <slot />
  </main>
</template>

<style scoped>



</style>
