<template>
  <section id="portfolio" class="portfolio-section">
    <!-- Header da seção -->
    <div class="portfolio-header">
      <h2 class="portfolio-title">Portfólio de Obras</h2>
      <p class="portfolio-subtitle">Veja abaixo algumas das obras realizadas por nossa equipe.</p>

      <!-- Filtros de categoria -->
      <div class="filter-buttons">
        <button v-for="category in categories" :key="category"
          :class="['filter-btn', { active: activeFilter === category }]" @click="filterProjects(category)">
          {{ category }}
        </button>
      </div>
    </div>

    <!-- Grid da galeria -->
    <div class="gallery-grid" ref="galleryGrid">
      <div v-for="(project, index) in filteredProjects" :key="project.id" :class="['gallery-item', `item-${index}`]"
        @click="openLightbox(index)" @mouseenter="animateHover($event, true)" @mouseleave="animateHover($event, false)">
        <div class="image-container">
          <img :src="project.image" :alt="project.title" class="gallery-image" loading="lazy" />
          <div class="image-overlay">
            <div class="overlay-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-category">{{ project.category }}</p>
              <div class="project-details">
                <span class="project-date">{{ project.date }}</span>
                <span class="project-location">{{ project.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="lightboxOpen" class="lightbox-overlay" @click="closeLightbox">
      <div class="lightbox-container" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="lightbox-content">
          <img :src="currentProject.image" :alt="currentProject.title" class="lightbox-image" />
          <div class="lightbox-info">
            <h3 class="lightbox-title">{{ currentProject.title }}</h3>
            <p class="lightbox-category">{{ currentProject.category }}</p>
            <p class="lightbox-description">{{ currentProject.description }}</p>
            <div class="lightbox-details">
              <span>{{ currentProject.date }}</span>
              <span>{{ currentProject.location }}</span>
            </div>
          </div>
        </div>

        <!-- Navegação -->
        <button class="lightbox-nav prev" @click="previousImage" v-if="currentIndex > 0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>
        <button class="lightbox-nav next" @click="nextImage" v-if="currentIndex < filteredProjects.length - 1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>

import posto1 from "../assets/posto1.png";
import rosario1 from "../assets/rosario1.png";
import aracaju from "../assets/aracaju.png";
import laje from "../assets/laj2.png";
import madeira from "../assets/madeira2.png";
import piscina from "../assets/piscina1.png";

export default {
  name: 'Portfolio',
  data() {
    return {
      activeFilter: 'Todos',
      lightboxOpen: false,
      currentIndex: 0,
      categories: ['Todos', 'Residencial', 'Comercial', 'Reforma', 'Infraestrutura'],
      projects: [
        {
          id: 1,
          title: 'Posto Santo Antônio',
          category: 'Comercial',
          image: posto1,
          description: 'Projeto Comercial moderno com arquitetura contemporânea e acabamentos de alto padrão.',
          date: '2023',
          location: 'Canudos, BA'
        },
        {
          id: 2,
          title: 'Pavimentação do Povoado Rosário',
          category: 'Infraestrutura',
          image: rosario1,
          description: 'Obra de calçamento executada com qualidade e responsabilidade, garantindo mais mobilidade e desenvolvimento para a comunidade local.',
          date: '2023',
          location: 'Povoado Rosário, Canudos - BA'
        }
        ,
        {
          id: 3,
          title: 'Calçadão da Praia Formosa',
          category: 'Infraestrutura',
          image: aracaju,
          description: 'Execução de calçadão com estrutura moderna e durável, contribuindo para a urbanização e valorização da orla.',
          date: '2021',
          location: 'Praia Formosa, Aracaju - SE'
        },
        {
          id: 4,
          title: 'Construção de Laje Residencial',
          category: 'Reforma',
          image: laje,
          description: 'Execução de laje em residência, garantindo estrutura segura, resistente e preparada para futuras ampliações.',
          date: '2024',
          location: 'Canudos, BA'
        },
        {
          id: 5,
          title: 'Estrutura de Pergolado em Madeira',
          category: 'Comercial',
          image: madeira,
          description: 'Construção de pergolado em madeira com acabamento de qualidade, ideal para áreas externas e espaços de convivência.',
          date: '2023',
          location: 'Canudos, BA'
        },
        {
          id: 6,
          title: 'Piscina Escolar',
          category: 'Residencial',
          image: piscina,
          description: 'Estrutura de piscina construída para unidade escolar, oferecendo espaço adequado para atividades esportivas e recreativas.',
          date: '2023',
          location: 'Canudos, BA'
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === 'Todos') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.activeFilter);
    },
    currentProject() {
      return this.filteredProjects[this.currentIndex] || {};
    }
  },
  mounted() {
    this.animateGalleryEntrance();
  },
  methods: {
    filterProjects(category) {
      this.activeFilter = category;
      this.$nextTick(() => {
        this.animateGalleryEntrance();
      });
    },

    openLightbox(index) {
      this.currentIndex = index;
      this.lightboxOpen = true;
      document.body.style.overflow = 'hidden';
    },

    closeLightbox() {
      this.lightboxOpen = false;
      document.body.style.overflow = 'auto';
    },

    nextImage() {
      if (this.currentIndex < this.filteredProjects.length - 1) {
        this.currentIndex++;
      }
    },

    previousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },

    animateGalleryEntrance() {
      const items = this.$refs.galleryGrid?.querySelectorAll('.gallery-item');
      if (!items) return;

      items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px) scale(0.9)';

        setTimeout(() => {
          item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
          item.style.opacity = '1';
          item.style.transform = 'translateY(0) scale(1)';
        }, index * 100);
      });
    },

    animateHover(event, isEntering) {
      const item = event.currentTarget;
      const image = item.querySelector('.gallery-image');
      const overlay = item.querySelector('.image-overlay');

      if (isEntering) {
        item.style.transform = 'translateY(-10px)';
        item.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
        image.style.transform = 'scale(1.1)';
        overlay.style.opacity = '1';
      } else {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        image.style.transform = 'scale(1)';
        overlay.style.opacity = '0';
      }
    }
  }
}
</script>

<style scoped>
.portfolio-section {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
}

.portfolio-header {
  text-align: center;
  margin-bottom: 4rem;
}

.portfolio-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.portfolio-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #e2e8f0;
  background: white;
  color: #64748b;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.filter-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.gallery-item {
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.image-container {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.overlay-content {
  padding: 2rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.project-category {
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.project-details {
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Lightbox Styles */
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;
}

.lightbox-container {
  position: relative;
  width: 80vw;
  max-width: 1000px;
  max-height: 90vh;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  animation: slideUp 0.4s ease;
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.lightbox-close:hover {
  background: rgba(0, 0, 0, 0.7);
}

.lightbox-content {
  display: flex;
  max-height: 80vh;
}

.lightbox-image {
  max-width: 60%;
  height: auto;
  object-fit: cover;
}

.lightbox-info {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.lightbox-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.lightbox-category {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
}

.lightbox-description {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.lightbox-details {
  display: flex;
  gap: 2rem;
  color: #94a3b8;
  font-size: 0.9rem;
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.lightbox-nav:hover {
  background: rgba(0, 0, 0, 0.7);
}

.lightbox-nav.prev {
  left: 1rem;
}

.lightbox-nav.next {
  right: 1rem;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .portfolio-section {
    padding: 2rem 1rem;
  }

  .portfolio-title {
    font-size: 2.5rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .lightbox-content {
    flex-direction: column;
  }
  .lightbox-container { width: 95vw; border-radius: 12px; }
  .lightbox-image { max-width: 100%; max-height: 50vh; width: 100%; object-fit: cover }

  .lightbox-info {
    padding: 1.5rem;
  }

  .filter-buttons {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>