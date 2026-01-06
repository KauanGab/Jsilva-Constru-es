<template>
  <footer class="bg-primary text-white py-12 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
      <div>
        <h3 class="text-2xl font-bold mb-4 text-second">J. SILVA CONSTRUÇÕES</h3>
        <p class="text-sm opacity-90 mb-4">Atuando desde 2017 com foco em qualidade, pontualidade e inovação em obras residenciais, comerciais e de infraestrutura.</p>
        <p class="text-sm opacity-70">&copy; 2025 JOCEVALDO DA SILVA CONSTRUÇÕES LTDA</p>
      </div>

      <div>
        <h4 class="text-xl font-semibold mb-4 border-b border-second pb-1 inline-block">Links Rápidos</h4>
        <ul class="space-y-2 text-sm">
          <li><RouterLink :to="{ path: '/', hash: '#inicio' }" class="hover:text-second transition-colors duration-300">Início</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#sobre' }" class="hover:text-second transition-colors duration-300">Sobre</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#servicos' }" class="hover:text-second transition-colors duration-300">Serviços</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#portfolio' }" class="hover:text-second transition-colors duration-300">Portfólio</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#contato' }" class="hover:text-second transition-colors duration-300">Contato</RouterLink></li>
        </ul>
      </div>

      <div class="text-center md:text-left">
        <h4 class="text-xl font-semibold mb-4 border-b border-second pb-1 inline-block">Contato</h4>
          <div class="flex items-center justify-center md:justify-start gap-3 mb-2">
          <Mail class="w-5 h-5 text-white" />
          <a href="mailto:silvaconstrucoes69@gmail.com" class="hover:text-second transition-colors duration-300">silvaconstrucoes69@gmail.com</a>
        </div>
        <div class="flex items-center justify-center md:justify-start gap-3 mb-4">
          <img src="../assets/whatsapp.svg" alt="WhatsApp" class="w-5 h-5" />
          <a href="https://wa.me/5575992305197" target="_blank" rel="noopener noreferrer" class="hover:text-second transition-colors duration-300">(75) 99230-5197 (WhatsApp)</a>
        </div>

        <div class="flex justify-center md:justify-start">
           <a href="https://wa.me/5575992305197?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%20Por%20favor%2C%20me%20informem%20sobre%20prazos%20e%20valores." 
             target="_blank" 
             rel="noopener noreferrer" 
             class="inline-flex items-center gap-3 bg-second hover:brightness-90 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-all duration-300 transform hover:scale-105">
            <img src="../assets/whatsapp.svg" alt="WhatsApp" class="w-5 h-5" />
            <span>Faça um orçamento</span>
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 mt-10 pt-6">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs gap-3">
        <p class="opacity-70 text-center md:text-left">Histórico resumido: empresa fundada em 2017 em Canudos - BA, com atuação em reformas, construções e infraestrutura.</p>
        <p class="opacity-70">Desenvolvido por <a href="https://www.linkedin.com/in/kauan-gabriel-b5721b258/" target="_blank" rel="noopener noreferrer" class="underline hover:text-second transition-colors duration-300">Kauan Gabriel</a></p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Mail } from 'lucide-vue-next'
</script>

<style scoped>
footer a { 
  color: inherit; 
  text-decoration: none;
}
</style>
