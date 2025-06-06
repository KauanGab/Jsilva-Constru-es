<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import SectionInicio from './Inicio.vue'
import SectionSobre from './About.vue'
import SectionServicos from './Services.vue'
import SectionPortfolio from './Portfolio.vue'
import SectionContato from './Contact.vue'
</script>

<template>
  <div>
    <Navbar />

    <main class="space-y-16">
      <SectionInicio />
      <SectionSobre />
      <SectionServicos />
      <SectionPortfolio />
      <SectionContato />
    </main>

    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
