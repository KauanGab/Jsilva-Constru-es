<template>
  <section id="contato" class="py-20 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold text-primary mb-3">Fale Conosco</h2>
        <p class="text-lg text-gray-600">Estamos prontos para iniciar seu projeto. Envie-nos uma mensagem ou utilize
          nossos canais diretos.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-xl shadow-2xl shadow-gray-300/50">
        <div>
          <h3 class="text-2xl font-bold text-primary mb-6">Envie sua Mensagem</h3>
          <form class="space-y-6" @submit.prevent="submitForm">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <input v-model="name" type="text" id="name" name="name"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-second focus:border-second transition duration-150"
                placeholder="Seu nome">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input v-model="email" type="email" id="email" name="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-second focus:border-second transition duration-150"
                placeholder="seu.email@exemplo.com">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea v-model="message" id="message" name="message" rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-second focus:border-second transition duration-150"
                placeholder="Descreva seu projeto ou dúvida"></textarea>
            </div>
            <button type="submit" :disabled="!canSend || loading || sent" class="w-full py-3 rounded-lg font-semibold transition-all duration-300 shadow-md
                     flex items-center justify-center
                     disabled:cursor-not-allowed" :class="{
                      'bg-primary hover:bg-second text-white': !loading && !sent,
                      'bg-gray-400 text-white': loading,
                      'bg-green-600 text-white': sent
                    }">
              <span v-if="!loading && !sent">Enviar Mensagem</span>
              <span v-if="loading">Enviando...</span>
              <span v-if="sent">Mensagem enviada com sucesso</span>
            </button>
          </form>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-[var(--primary)] mb-6">Canais Diretos</h3>
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <div class="p-3 rounded-full bg-second text-white flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p class="text-lg font-semibold text-gray-800">E-mail</p>
                <a href="mailto:silvaconstrucoes69@gmail.com"
                  class="text-gray-600 hover:text-second transition duration-150 p-0">silvaconstrucoes69@gmail.com</a>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="p-3 rounded-full bg-second text-white flex-shrink-0 flex items-center justify-center">
                <img src="../assets/whatsapp.svg" alt="WhatsApp" class="w-5 h-5" />
              </div>
              <div>
                <p class="text-lg font-semibold text-gray-800">WhatsApp</p>
                <a href="https://wa.me/5575992305197" target="_blank" rel="noopener noreferrer"
                  class="text-gray-600 hover:text-second transition duration-150 p-0">(75) 99230-5197</a>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div class="p-3 rounded-full bg-second text-white flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p class="text-lg font-semibold text-gray-800">Localização</p>
                <p class="text-gray-600">Canudos - BA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)
const sent = ref(false)

const canSend = computed(() => {
  const validEmail = /^\S+@\S+\.\S+$/.test(email.value)
  return (
    name.value.trim().length > 2 &&
    validEmail &&
    message.value.trim().length > 5
  )
})

function submitForm () {
  if (!canSend.value || loading.value) return

  loading.value = true

  const templateParams = {
    name: name.value.trim(),
    email: email.value.trim(),
    message: message.value.trim(),
    time: new Date().toLocaleString('pt-BR'),
    year: new Date().getFullYear()
  }

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then(() => {
      sent.value = true
      name.value = ''
      email.value = ''
      message.value = ''

      setTimeout(() => {
        sent.value = false
      }, 4000)
    })
    .catch((err) => {
      console.error('Erro ao enviar email:', err)
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<style scoped>
button {
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:active {
  transform: scale(0.98);
}
</style>