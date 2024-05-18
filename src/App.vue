<template>
  <div id="app">
    <HeaderComponent />
    <HeroSection />
    <SpecialitiesSection />
    <TeamSection />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import HeroSection from "./components/HeroSection.vue";
import SpecialitiesSection from "./components/SpecialitiesSection.vue";
import TeamSection from "./components/TeamSection.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    HeroSection,
    SpecialitiesSection,
    TeamSection,
    FooterComponent,
  },
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
