<template>
  <section id="contato" class="py-20 px-6 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold text-[var(--primary)] mb-3">Fale Conosco</h2>
        <p class="text-lg text-gray-600">Estamos prontos para iniciar seu projeto. Envie-nos uma mensagem ou utilize nossos canais diretos.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-xl shadow-2xl shadow-gray-300/50">
        <div>
          <h3 class="text-2xl font-bold text-[var(--primary)] mb-6">Envie sua Mensagem</h3>
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <input type="text" id="name" name="name" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[var(--second)] focus:border-[var(--second)] transition duration-150" placeholder="Seu nome">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[var(--second)] focus:border-[var(--second)] transition duration-150" placeholder="seu.email@exemplo.com">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
              <textarea id="message" name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[var(--second)] focus:border-[var(--second)] transition duration-150" placeholder="Descreva seu projeto ou dúvida"></textarea>
            </div>
            <button type="submit" class="w-full bg-[var(--primary)] text-white font-semibold py-3 rounded-lg hover:bg-[var(--second)] transition duration-300 shadow-md">
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-[var(--primary)] mb-6">Canais Diretos</h3>
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="p-3 rounded-full bg-[var(--second)] text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <p class="text-lg font-semibold text-gray-800">E-mail</p>
                <a href="mailto:silvaconstrucoes69@gmail.com" class="text-gray-600 hover:text-[var(--second)] transition duration-150">silvaconstrucoes69@gmail.com</a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="p-3 rounded-full bg-[var(--second)] text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <p class="text-lg font-semibold text-gray-800">WhatsApp</p>
                <a href="https://wa.me/5575992305197" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-[var(--second)] transition duration-150">(75) 99230-5197</a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="p-3 rounded-full bg-[var(--second)] text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
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