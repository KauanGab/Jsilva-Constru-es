
<template>
  <nav class="bg-[#1E3A8A] text-white p-4 flex justify-between items-center">

    <div>
      <RouterLink to="/">
        <img src="../assets/jsilva_logo.png" alt="Jsilva Construções Logo" class="h-2 w-2">
      </RouterLink>
    </div>

    <div class="flex gap-4">
      <RouterLink to="/" class="hover:text-[#F97316] hover:underline px-3 py-2 rounded-md text-sm font-medium">Início</RouterLink>
      <RouterLink to="/about" class="hover:text-[#F97316] hover:underline px-3 py-2 rounded-md text-sm font-medium">Sobre</RouterLink>
      <RouterLink to="/services" class="hover:text-[#F97316] hover:underline px-3 py-2 rounded-md text-sm font-medium">Serviços</RouterLink>
      <RouterLink to="/portfolio" class="hover:text-[#F97316] hover:underline px-3 py-2 rounded-md text-sm font-medium">Portfólio</RouterLink>
      <RouterLink to="/contact" class="hover:text-[#F97316] hover:underline px-3 py-2 rounded-md text-sm font-medium">Contato</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'


</script>

<style scoped>

</style>

