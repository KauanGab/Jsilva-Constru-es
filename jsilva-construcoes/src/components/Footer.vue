<template>
  <footer class="bg-blue-800 text-white py-10 px-6 mt-10">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-xl font-semibold mb-2">JOCEVALDO DA SILVA CONSTRUÇÕES LTDA</h3>
        <p class="text-sm opacity-90 mb-3">Atuando desde 2017 com foco em qualidade, pontualidade e inovação em obras residenciais, comerciais e de infraestrutura.</p>
        <p class="text-sm">&copy; 2025 JOCEVALDO DA SILVA CONSTRUÇÕES LTDA</p>
      </div>

      <div>
        <h4 class="font-semibold mb-2">Links Rápidos</h4>
        <ul class="space-y-1 text-sm">
          <li><RouterLink :to="{ path: '/', hash: '#inicio' }" class="hover:underline">Início</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#sobre' }" class="hover:underline">Sobre</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#servicos' }" class="hover:underline">Serviços</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#portfolio' }" class="hover:underline">Portfólio</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#contato' }" class="hover:underline">Contato</RouterLink></li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold mb-2">Contato</h4>
        <p class="text-sm mb-2">📧 <a href="mailto:silvaconstrucoes69@gmail.com" class="hover:underline">silvaconstrucoes69@gmail.com</a></p>
        <p class="text-sm mb-4">📞 <a href="https://wa.me/5575992305197" target="_blank" rel="noopener noreferrer" class="hover:underline">(75) 99230-5197 (WhatsApp)</a></p>
        <a href="https://wa.me/5575992305197?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%20Por%20favor%2C%20me%20informem%20sobre%20prazos%20e%20valores." target="_blank" rel="noopener noreferrer" class="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Faça um orçamento</a>
      </div>
    </div>

    <div class="border-t border-white/10 mt-6 pt-5">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm gap-4">
        <p class="opacity-80">Histórico resumido: empresa fundada em 2017 em Canudos - BA, com atuação em reformas, construções e infraestrutura.</p>
        <p class="opacity-80">Desenvolvido por <a href="https://www.linkedin.com/in/kauan-gabriel-b5721b258/" target="_blank" rel="noopener noreferrer" class="underline">Kauan Gabriel</a></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
footer a { color: inherit }
</style>
