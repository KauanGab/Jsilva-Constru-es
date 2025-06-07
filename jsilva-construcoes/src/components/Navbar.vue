<template>
  <nav class="bg-[#1E3A8A] flex justify-between items-center">
    <div>
      <RouterLink to="/">
        <img src="../assets/jsilva_logo.png" alt="Jsilva Construções Logo" style="height: 70px; width: auto;">
      </RouterLink>
    </div>

    <div class="flex gap-4 text-white">
      <RouterLink to="/"
        class="text-white no-underline hover:text-[#F97316] hover:underline px-3 py-2 rounded-md text-sm font-medium">
        Início
      </RouterLink>
      <RouterLink to="/about"
        class="text-white no-underline hover:text-[#F97316] hover:underline px-3 py-2 rounded-md text-sm font-medium">
        Sobre
      </RouterLink>
      <RouterLink to="/services"
        class="text-white no-underline hover:text-[#F97316] hover:underline px-3 py-2 rounded-md text-sm font-medium">
        Serviços
      </RouterLink>
      <RouterLink to="/portfolio"
        class="text-white no-underline hover:text-[#F97316] hover:underline px-3 py-2 rounded-md text-sm font-medium">
        Portfólio
      </RouterLink>
      <RouterLink to="/contact"
        class="text-white no-underline hover:text-[#F97316] hover:underline px-3 py-2 rounded-md text-sm font-medium">
        Contato
      </RouterLink>
      <Search style="color: white; height: 20px; width: auto;" />
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Search } from 'lucide-vue-next'
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
  padding: 0px 4cqh;
}

nav{
  padding: 0px 50px;
}
</style>
