<script setup>
import HeroSection from '../components/HeroSection.vue';
import SpecialitiesSection from '../components/SpecialitiesSection.vue';
import TeamSection from '../components/TeamSection.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
</script>

<template>
  <main>
    <HeaderComponent />
    <HeroSection />
    <SpecialitiesSection />
    <TeamSection />
    <FooterComponent />
  </main>
</template>

<style>
main {
    background-color: #e6f9ff3d;
}
</style>
