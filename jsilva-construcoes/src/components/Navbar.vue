<template>
  <nav class="bg-[var(--primary)] flex justify-between items-center">
    <div>
      <RouterLink to="/">
        <img src="../assets/jsilva_logo.png" alt="Jsilva Construções Logo" style="height: 55px; width: auto;">
      </RouterLink>
    </div>

    <div class="flex gap-4 text-white">
      <RouterLink to="/inicio"
        class="text-white no-underline hover:text-[var(--second)] px-3 py-2 rounded-md text-sm font-medium">
        Início
      </RouterLink>
      <RouterLink to="/about"
        class="text-white no-underline hover:text-[var(--second)] px-3 py-2 rounded-md text-sm font-medium">
        Sobre
      </RouterLink>
      <RouterLink to="/services"
        class="text-white no-underline hover:text-[var(--second)] px-3 py-2 rounded-md text-sm font-medium">
        Serviços
      </RouterLink>
      <RouterLink to="/portfolio"
        class="text-white no-underline hover:text-[var(--second)] px-3 py-2 rounded-md text-sm font-medium">
        Portfólio
      </RouterLink>
      <RouterLink to="/contact"
        class="text-white no-underline hover:text-[var(--second)] px-3 py-2 rounded-md text-sm font-medium">
        Contatos
      </RouterLink>

    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Search } from 'lucide-vue-next'
</script>

<style>
a {
  color: white;
  text-decoration: none;
  padding: 0px 4cqh;
}

nav {
  padding: 0px 50px;
}
</style>
