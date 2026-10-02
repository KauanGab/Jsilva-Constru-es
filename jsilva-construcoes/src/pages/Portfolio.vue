<template>
  <section id="portfolio"
    class="py-16 md:py-20 px-6 md:px-12 max-w-7xl mx-auto min-h-screen bg-gradient-to-br from-white to-[#eef6fc]">
    <div class="text-center mb-12">
      <h2
        class="text-3xl md:text-4xl font-bold text-primary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-second">
        Portfólio de Obras
      </h2>
      <p class="text-gray-600 max-w-md mx-auto mb-8">
        Veja abaixo algumas das obras realizadas por nossa equipe.
      </p>

      <div class="flex justify-center gap-4 flex-wrap">
        <button v-for="category in categories" :key="category" @click="filterProjects(category)" :class="[
          'px-4 py-2 rounded-full font-semibold transition-shadow duration-200',
          activeFilter === category
            ? 'bg-gradient-to-r from-primary to-second text-white border-transparent'
            : 'bg-white text-primary border border-primary/10 shadow-sm'
        ]">
          {{ category }}
        </button>
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8" ref="galleryGrid">
      <div v-for="(project, index) in filteredProjects" :key="project.id"
        class="gallery-item group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer"
        @click="openLightbox(index)" @mouseenter="animateHover($event, true)" @mouseleave="animateHover($event, false)">
        <div class="relative h-72 md:h-80 overflow-hidden">
          <img :src="project.image" :alt="project.title"
            class="gallery-image w-full h-full object-cover transition-transform duration-500" loading="lazy" />
          <div
            class="image-overlay absolute inset-0 flex items-center justify-center text-center text-white opacity-0 transition-opacity duration-300"
            style="background: linear-gradient(135deg, rgba(10,61,124,0.88) 0%, rgba(193,39,45,0.88) 100%)">
            <div class="p-6">
              <h3 class="text-lg font-bold mb-1">{{ project.title }}</h3>
              <p class="text-sm opacity-90 mb-3">{{ project.category }}</p>
              <div class="flex justify-center gap-4 text-sm opacity-80">
                <span>{{ project.date }}</span>
                <span>{{ project.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section id="posto-santo-antonio-escritorios" class="mt-20 scroll-mt-8">
      <div class="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-xl">
        <div class="bg-gradient-to-r from-primary to-[#174f8c] px-6 py-10 text-white md:px-10 md:py-12">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
            Projeto comercial · Canudos, BA
          </p>
          <h3 class="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
            Continuação das obras do Posto Santo Antônio
          </h3>
          <p class="mt-3 text-lg font-medium text-white/85">Construção de escritórios</p>
          <p class="mt-4 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
            Confira detalhes dos ambientes e acabamentos desta etapa da obra, além de acompanhar o projeto em vídeo.
          </p>
        </div>

        <div class="grid gap-8 p-5 md:p-8 lg:grid-cols-[minmax(240px,0.8fr)_minmax(0,2fr)]">
          <div class="flex flex-col items-center rounded-2xl bg-slate-950 p-5 text-center text-white shadow-lg">
            <div class="mb-4">
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Vídeo da obra</p>
              <h4 class="mt-2 text-xl font-semibold">Veja a construção de perto</h4>
            </div>
            <div class="w-full max-w-[320px] overflow-hidden rounded-xl bg-black shadow-2xl">
              <div class="aspect-[9/16]">
                <iframe
                  class="h-full w-full"
                  src="https://www.youtube.com/embed/zPnn6fupYfQ"
                  title="Continuação das obras do Posto Santo Antônio — construção de escritórios"
                  loading="lazy"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <a
              class="mt-4 text-sm font-medium text-white/75 underline decoration-white/40 underline-offset-4 transition hover:text-white"
              href="https://www.youtube.com/shorts/zPnn6fupYfQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir vídeo no YouTube
            </a>
          </div>

          <div class="grid content-start gap-4 sm:grid-cols-2">
            <button
              v-for="(photo, index) in officePhotos"
              :key="photo.src"
              type="button"
              class="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30"
              :aria-label="`Ampliar foto: ${photo.caption}`"
              @click="openOfficeLightbox(index)"
            >
              <div class="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  :src="photo.src"
                  :alt="photo.caption"
                  class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span class="block px-4 py-3 text-sm font-medium text-slate-700">{{ photo.caption }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <div
      v-if="officeLightboxOpen"
      class="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      :aria-label="officePhotos[officePhotoIndex].caption"
      @click="closeOfficeLightbox"
    >
      <div class="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center" @click.stop>
        <button
          type="button"
          class="absolute right-0 top-0 z-10 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/80"
          aria-label="Fechar foto ampliada"
          @click="closeOfficeLightbox"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <img
          :src="officePhotos[officePhotoIndex].src"
          :alt="officePhotos[officePhotoIndex].caption"
          class="max-h-[78vh] max-w-full rounded-xl object-contain"
        />
        <p class="mt-4 text-center font-medium text-white">{{ officePhotos[officePhotoIndex].caption }}</p>
        <button
          v-if="officePhotoIndex > 0"
          type="button"
          class="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/80"
          aria-label="Ver foto anterior"
          @click="previousOfficePhoto"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </button>
        <button
          v-if="officePhotoIndex < officePhotos.length - 1"
          type="button"
          class="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/80"
          aria-label="Ver próxima foto"
          @click="nextOfficePhoto"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="lightboxOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      @click="closeLightbox">
      <div class="relative w-11/12 md:max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden" @click.stop>
        <button class="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2" @click="closeLightbox">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div class="flex flex-col md:flex-row max-h-[80vh]">
          <img :src="currentProject.image" :alt="currentProject.title" class="md:w-1/2 w-full object-cover" />
          <div class="md:w-1/2 p-6 flex flex-col justify-center overflow-auto">
            <h3 class="text-2xl font-bold text-primary mb-2">
              {{ currentProject.title }}
            </h3>
            <p class="text-second font-semibold mb-4">
              {{ currentProject.category }}
            </p>
            <p class="text-gray-600 mb-4">
              {{ currentProject.description }}
            </p>
            <div class="flex gap-4 text-sm text-gray-500">
              <span>{{ currentProject.date }}</span>
              <span>{{ currentProject.location }}</span>
            </div>
          </div>
        </div>

        <button v-if="currentIndex > 0"
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-3"
          @click="previousImage">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </button>

        <button v-if="currentIndex < filteredProjects.length - 1"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-3" @click="nextImage">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import laje from "../assets/laj2.png"
import madeira from "../assets/madeira2.png"
import piscina from "../assets/piscina1.png"
import posto1 from "../assets/posto1.png"
import rosario1 from "../assets/rosario1.png"
import aracaju from "../assets/aracaju.png"
import casa2 from "../assets/casa2.png"
import officeFacade from "../assets/fotos  da empresa de pai/Fachada moderna do Posto Santo Antônio.png"
import officeKitchen from "../assets/fotos  da empresa de pai/Canto de cozinha limpo e moderno.png"
import officeStairs from "../assets/fotos  da empresa de pai/Escadaria de Granito Rumo à Luz.png"
import officeWalkway from "../assets/fotos  da empresa de pai/Varanda Moderna com Vista Urbana.png"

export default {
  name: "Portfolio",
  data() {
    return {
      activeFilter: "Todos",
      lightboxOpen: false,
      currentIndex: 0,
      officeLightboxOpen: false,
      officePhotoIndex: 0,
      officePhotos: [
        { src: officeFacade, caption: "Fachada do Posto Santo Antônio" },
        { src: officeStairs, caption: "Acabamento da escadaria em granito" },
        { src: officeWalkway, caption: "Varanda e circulação dos escritórios" },
        { src: officeKitchen, caption: "Detalhe do espaço interno" }
      ],
      categories: ["Todos", "Residencial", "Comercial", "Reforma", "Infraestrutura"],
      projects: [
        {
          id: 1,
          title: "Posto Santo Antônio",
          category: "Comercial",
          image: posto1,
          description: "Projeto Comercial moderno com arquitetura contemporânea e acabamentos de alto padrão.",
          date: "2023",
          location: "Canudos, BA"
        },
        {
          id: 2,
          title: "Pavimentação do Povoado Rosário",
          category: "Infraestrutura",
          image: rosario1,
          description: "Obra de calçamento executada com qualidade e responsabilidade.",
          date: "2023",
          location: "Povoado Rosário, Canudos - BA"
        },
        {
          id: 3,
          title: "Calçadão da Praia Formosa",
          category: "Infraestrutura",
          image: aracaju,
          description: "Execução de calçadão com estrutura moderna e durável.",
          date: "2021",
          location: "Aracaju - SE"
        },
        {
          id: 4,
          title: "Construção de Laje Residencial",
          category: "Reforma",
          image: laje,
          description: "Execução de laje com estrutura segura e resistente.",
          date: "2024",
          location: "Canudos, BA"
        },
        {
          id: 5,
          title: "Estrutura de Pergolado em Madeira",
          category: "Comercial",
          image: madeira,
          description: "Pergolado em madeira com acabamento de qualidade.",
          date: "2023",
          location: "Canudos, BA"
        },
        {
          id: 6,
          title: "Piscina Escolar",
          category: "Residencial",
          image: piscina,
          description: "Piscina construída para unidade escolar.",
          date: "2023",
          location: "Canudos, BA"
        }, 
        {
          id: 7,
          title: "Construção Residencial em Alvenaria",
          category: "Residencial",
          image: casa2,
          description: "Execução de obra residencial com estrutura em concreto armado, alvenaria e cobertura cerâmica, seguindo padrões de qualidade e segurança.",
          date: "2024",
          location: "Canudos, BA"
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === "Todos") return this.projects
      return this.projects.filter(p => p.category === this.activeFilter)
    },
    currentProject() {
      return this.filteredProjects[this.currentIndex] || {}
    }
  },
  mounted() {
    this.animateGalleryEntrance()
  },
  methods: {
    filterProjects(category) {
      this.activeFilter = category
      this.$nextTick(this.animateGalleryEntrance)
    },
    openLightbox(index) {
      this.currentIndex = index
      this.lightboxOpen = true
      document.body.style.overflow = "hidden"
    },
    closeLightbox() {
      this.lightboxOpen = false
      document.body.style.overflow = "auto"
    },
    openOfficeLightbox(index) {
      this.officePhotoIndex = index
      this.officeLightboxOpen = true
      document.body.style.overflow = "hidden"
    },
    closeOfficeLightbox() {
      this.officeLightboxOpen = false
      document.body.style.overflow = this.lightboxOpen ? "hidden" : "auto"
    },
    nextOfficePhoto() {
      if (this.officePhotoIndex < this.officePhotos.length - 1) {
        this.officePhotoIndex++
      }
    },
    previousOfficePhoto() {
      if (this.officePhotoIndex > 0) {
        this.officePhotoIndex--
      }
    },
    nextImage() {
      if (this.currentIndex < this.filteredProjects.length - 1) {
        this.currentIndex++
      }
    },
    previousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    animateGalleryEntrance() {
      const items = this.$refs.galleryGrid?.querySelectorAll(".gallery-item")
      if (!items) return
      items.forEach((item, index) => {
        item.style.opacity = "0"
        item.style.transform = "translateY(50px) scale(0.9)"
        setTimeout(() => {
          item.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
          item.style.opacity = "1"
          item.style.transform = "translateY(0) scale(1)"
        }, index * 100)
      })
    },
    animateHover(event, entering) {
      const item = event.currentTarget
      const image = item.querySelector(".gallery-image")
      const overlay = item.querySelector(".image-overlay")
      if (entering) {
        item.style.transform = "translateY(-10px)"
        item.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)"
        image.style.transform = "scale(1.1)"
        overlay.style.opacity = "1"
      } else {
        item.style.transform = "translateY(0)"
        item.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"
        image.style.transform = "scale(1)"
        overlay.style.opacity = "0"
      }
    }
  }
}
</script>