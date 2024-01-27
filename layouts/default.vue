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
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  min-height: 60px;
  background: #033888;
}
.nav {
  display: flex;
  width: fit-content;
  column-gap: 10px;
}

.nav__link {
  text-decoration: none;
  color: #fff;
  transition: color 0.2s ease-in;
  font-weight: 600;
}

.nav__link:hover {
  color: #e00707;
}

.main {
  display: grid;
  align-items: start;
  align-content: start;
  flex: 1;
  padding: 0 40px;
}

.header__loginLink {
  font-weight: 600;
  padding: 8px 15px;
  background-color: #fff;
  border-radius: 8px;
  text-decoration: none;
  color: #072fe0;
  transition: transform 0.2s ease-in;
}
.header__loginLink:hover {
  transform: scale(0.97);
}
</style>
