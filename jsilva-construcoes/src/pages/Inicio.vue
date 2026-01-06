<template>
  <section id="inicio" class="relative min-h-screen w-full">
    <div class="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <Carousel :autoplay="4000" :wrap-around="true" :transition="1000" :pauseAutoplayOnHover="false" :mouseDrag="false"
        :touchDrag="false" class="h-full w-full">
        <Slide v-for="(image, index) in images" :key="index" class="h-full w-full">
          <div class="h-full w-full relative">
            <img :src="image" :alt="`Slide ${index + 1}`" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        </Slide>
      </Carousel>

      <div class="absolute inset-0 flex items-center justify-start px-6 md:px-12 z-10">
        <div class="max-w-2xl text-white">
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Transformando projetos em realidade
          </h1>
          <p class="text-lg md:text-xl mb-8 opacity-90">
            Oferecemos as mais completas e eficientes soluções
          </p>
          <a href="https://wa.me/5575992305197?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20projeto%20de%20constru%C3%A7%C3%A3o%2Freforma.%20Poderiam%2C%20por%20favor%2C%20me%20orientar%20sobre%20prazos%20e%20valores%3F%20Obrigado%21"
            target="_blank" rel="noopener noreferrer"
            class="bg-second hover:brightness-90 text-white font-semibold px-8 py-3 rounded-md transition duration-300 uppercase tracking-wide">
            Solicite um orçamento
          </a>
        </div>
      </div>
    </div>

    <div class="bg-white py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                  </path>
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Construção</h3>
              <p class="text-gray-600 text-sm">
                Construção desde aplicação personalizada
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                  </path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Reforma</h3>
              <p class="text-gray-600 text-sm">
                Saber quem, quando, como sempre
              </p>
            </div>
          </div>

          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                  </path>
                </svg>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Gerenciamento</h3>
              <p class="text-gray-600 text-sm">
                Solicitação, acompanhe suas metas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import posto1 from "../assets/posto1.png";
import rosario1 from "../assets/rosario1.png";
import aracaju from "../assets/aracaju.png";
import laje from "../assets/laj2.png";
import madeira from "../assets/madeira.png";
import piscina from "../assets/piscina1.png";





export default {
  name: "Inicio",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      images: [
        posto1,
        aracaju,
        laje,
        madeira,
        rosario1,
        piscina
      ]
    };
  }
};
</script>

<style scoped>
:deep(.carousel__viewport) {
  height: 100%;
  width: 100%;
}

:deep(.carousel__track) {
  height: 100%;
  width: 100%;
}

:deep(.carousel__slide) {
  height: 100%;
  width: 100%;
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  display: none;
}

:deep(.carousel__pagination) {
  display: none;
}

:deep(.carousel) {
  margin: 0;
  padding: 0;
}
</style>

<style>
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
</style>