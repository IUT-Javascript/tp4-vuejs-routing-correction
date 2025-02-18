<script setup>
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <NavBar/>
    <h1 class="text-center">Vue JS Blog</h1>
  </header>

  <main>
    <RouterView />
  </main>
</template>
