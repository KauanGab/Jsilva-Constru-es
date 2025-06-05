<!-- src/App.vue -->
<template>
  <Navbar />

  <main class="p-4">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>
