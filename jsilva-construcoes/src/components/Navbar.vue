<template>
  <nav class="bg-[#0A3D7C] px-6 md:px-12 py-3 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <RouterLink :to="{ path: '/', hash: '#inicio' }">
        <img src="../assets/jsilva_logo.png" alt="Jsilva Construções Logo" class="h-10 md:h-14" />
      </RouterLink>
    </div>

    <div class="hidden md:flex items-center gap-4 text-white">
      <RouterLink :to="{ path: '/', hash: '#inicio' }"
        class="text-white no-underline hover:text-[var(--second)] px-3 py-2 rounded-md text-sm font-medium">Início
      </RouterLink>
      <RouterLink :to="{ path: '/', hash: '#sobre' }"
        class="text-white no-underline hover:text-[var(--second)] px-3 py-2 rounded-md text-sm font-medium">Sobre
      </RouterLink>
      <RouterLink :to="{ path: '/', hash: '#servicos' }"
        class="text-white no-underline hover:text-[var(--second)] px-3 py-2 rounded-md text-sm font-medium">Serviços
      </RouterLink>
      <RouterLink :to="{ path: '/', hash: '#portfolio' }"
        class="text-white no-underline hover:text-[var(--second)] px-3 py-2 rounded-md text-sm font-medium">Portfólio
      </RouterLink>
      <RouterLink :to="{ path: '/', hash: '#contato' }"
        class="text-white no-underline hover:text-[var(--second)] px-3 py-2 rounded-md text-sm font-medium">Contatos
      </RouterLink>
    </div>

    <div class="md:hidden">
      <button @click="open = !open" class="p-2 rounded-md text-white focus:outline-none">
        <component :is="open ? X : Menu" class="w-6 h-6" />
      </button>
    </div>

    <transition name="fade">
      <div v-if="open" class="fixed top-16 left-0 right-0 z-50 bg-[var(--primary)] text-white p-6 md:hidden shadow-2xl">
        <ul class="flex flex-col space-y-3">
          <li>
            <RouterLink @click="open = false" :to="{ path: '/', hash: '#inicio' }" class="block">Início</RouterLink>
          </li>
          <li>
            <RouterLink @click="open = false" :to="{ path: '/', hash: '#sobre' }" class="block">Sobre</RouterLink>
          </li>
          <li>
            <RouterLink @click="open = false" :to="{ path: '/', hash: '#servicos' }" class="block">Serviços</RouterLink>
          </li>
          <li>
            <RouterLink @click="open = false" :to="{ path: '/', hash: '#portfolio' }" class="block">Portfólio</RouterLink>
          </li>
          <li>
            <RouterLink @click="open = false" :to="{ path: '/', hash: '#contato' }" class="block">Contatos</RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import { ref } from 'vue'

const open = ref(false)
</script>

<style>
a {
  color: white;
  text-decoration: none;
  padding: 0px 4cqh;
}

nav {
  padding: 0
}

@media (max-width: 640px) {
  nav {
    padding: 0 12px
  }
}
</style>
