<template>
    <section class="login-page">
      <div class="login">
        <h2>Authentification</h2>
        <form @submit.prevent="login">
          <input type="text" v-model="username" placeholder="Username ou email" required />
          <input type="password" v-model="password" placeholder="Mot de passe" required />
          <button type="submit">Login</button>
          <p v-if="error">{{ error }}</p>
        </form>
      </div>
    </section>
  </template>
  

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Perform login logic here
            // You can access the entered username/email via this.username
            // and the entered password via this.password
        }
    }
};
</script>
<style scoped>
.login-page {
  background-color: #336774;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.login {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
}

h2 {
    font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
  color: #336774;
}

form {
  display: flex;
  flex-direction: column;
}

input,
button {
  padding: 15px;
  margin: 15px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

input {
  width: 100%;
}

button {
  background-color: #67afc1;
  font-size: 1rem;
  font-weight:500;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #5a9cb3;
}

p {
  color: red;
  text-align: center;
}
</style>
