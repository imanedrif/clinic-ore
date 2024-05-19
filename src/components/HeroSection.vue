<template>
  <section class="hero">
    <div class="hero-content">
      <h2>CLINIC-CORE, ton meilleur choix pour une bonne santé</h2>
      <p>
        Bienvenue dans notre clinique, où notre équipe dévouée est prête à vous
        offrir des soins médicaux de qualité supérieure. Prendre rendez-vous n'a
        jamais été aussi simple grâce à notre système de réservation en ligne
        convivial. Que vous ayez besoin d'une consultation médicale, d'un examen
        de routine ou d'un traitement spécifique, notre équipe professionnelle
        est là pour vous aider. Rejoignez-nous dès aujourd'hui et laissez-nous
        prendre soin de vous.
      </p>
    </div>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="formData.nom" placeholder="Nom" required />
      <input
        type="text"
        v-model="formData.prenom"
        placeholder="Prénom"
        required
      />
      <input
        type="text"
        v-model="formData.numero"
        placeholder="Numéro"
        required
      />
      <input type="date" v-model="formData.date" placeholder="Date" required />
      <input
        type="text"
        v-model="formData.objet"
        placeholder="Objet de consultation"
        required
      />
      <button type="submit">Envoyer</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      formData: {
        nom: "",
        prenom: "",
        numero: "",
        date: "",
        objet: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:8080/api/endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });

        if (!response.ok) {
          const message = `An error has occurred: ${response.status}`;
          throw new Error(message);
        }

        const data = await response.json();
        console.log('Form submitted successfully:', data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
};
</script>

<style scoped>
.hero {
  background-image: url("../assets/heroimage.png");
  background-size: cover;
  padding: 100px 20px;
  color: #315963;
}
.hero-content {
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 40px;
}
.hero-content h2 {
  width: 100%;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

/* Responsive styles */
form {
  max-width: 700px;
  transform: translateY(150px);
  margin: 0 auto;
  border: 1px solid #dee2e6;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
input,
button {
  padding: 10px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
}
button {
  background-color: #67afc1;
  color: #fff;
  cursor: pointer;
}
@media (max-width: 768px) {
  .hero {
    padding: 50px 10px;
  }
  .hero-content {
    width: 100%;
    margin-left: 20px;
  }
  .hero-content h2 {
    font-size: 2rem;
  }
}
</style>
