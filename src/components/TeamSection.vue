<template>
  <section class="team">
    <div class="title">
      <h2>Équipe Spécialisée</h2>
      <hr>
    </div>
    <div class="team-list">
      <div class="team-member" v-for="member in team" :key="member.id">
        <img :src="member.image" :alt="member.name" />
        <h3>{{ member.name }}</h3>
        <p>{{ member.title }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TeamSection",
  data() {
    return {
      team: [
        {
          id: 1,
          name: "Dr. Jacques Letêvre",
          title: "Professeur de Cardiologie",
          image: "/public/jacques-letevre.jpg",
        },
        {
          id: 2,
          name: "Dr. Marie Dupont",
          title: "Professeur de Dermatologie",
          image: "public/marie-dupont.jpg",
        },
        {
          id: 3,
          name: "Dr. Steve Martin",
          title: "Professeur de Pédiatrie",
          image: "public/steve-martin.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.team {
  margin-top: 50px;
  margin-left: 20px;
  padding: 50px 20px;
  color: #315963;
}
.team-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
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
.team-member {
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  max-width: 300px;
}
.team-member h3,
.team-member p {
  padding-left: 20px;
}
.team-member img {
  max-width: 100%;
}
</style>
