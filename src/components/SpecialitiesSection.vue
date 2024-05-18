<template>
  <section class="specialities">
    <div class="title">
      <h2>Nos Spécialités</h2>
      <hr>
    </div>
    <div class="specialities-list">
      <div
        class="speciality-card"
        v-for="speciality in specialities"
        :key="speciality.id"
      >
      <img :src="speciality.image" alt="Speciality Image" />
        <h3>{{ speciality.title }}</h3>
        <p>{{ speciality.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SpecialitiesSection",
  data() {
    return {
      specialities: [
        {
          id: 1,
          title: "Cardiologie",
          description:
            "Des soins spécialisés pour la diagnostic et le traitement des maladies cardiovasculaires.",
          image: "/public/cardiologie-image.png",
        },
        {
          id: 2,
          title: "Dermatologie",
          description:
            "Traitements avancés pour les affections de la peau, des cheveux et des ongles.",
          image: "/public/dermatologie-image.png",
        },
        {
          id: 3,
          title: "Pédiatrie",
          description:
            "Des soins complets pour la santé et le bien-être des enfants et des adolescents.",
          image: "/public/pediatrie-image.png",
        },
      ],
    };
  },
};
</script>

<!-- Styles remain the same -->
<style scoped>
.specialities {
  margin-top: 50px;
  margin-left: 20px;
  padding: 50px 20px;
  color: #315963;
}
.title{
  display: flex;
  flex-direction: column;
  font-size: x-large;
  gap: 5px;
  margin-bottom: 40px;
}
.title hr {
  width: 10%;
  border: 1px solid #315963;
  margin: 0;
}
.specialities-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
}
.speciality-card {
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  max-width: 300px;
}
.speciality-card h3,
.speciality-card p {
  padding-left: 20px;
}
.speciality-card img {
  max-width: 100%;
  padding: 0;
}
</style>

