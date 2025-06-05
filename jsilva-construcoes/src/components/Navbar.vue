<!-- src/components/Navbar.vue -->
<template>
  <nav class="bg-blue-700 text-white p-4 flex gap-4">
    <RouterLink to="/" class="hover:underline">Início</RouterLink>
    <RouterLink to="/about" class="hover:underline">Sobre</RouterLink>
    <RouterLink to="/services" class="hover:underline">Serviços</RouterLink>
    <RouterLink to="/portfolio" class="hover:underline">Portfólio</RouterLink>
    <RouterLink to="/contact" class="hover:underline">Contato</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
