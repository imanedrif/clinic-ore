<template>
  <header class="header">
    <div class="container">
      <nav>
        <ul>
          <li><a href="#">Spécialité</a></li>
          <li><a href="#">Équipe</a></li>
        </ul>
      </nav>
      <h1>CLINIC core</h1>
      <div class="contact-info">
        <span>TEL : +21268889900</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.header {
  background: #e6f9ff3d;
  padding: 20px;
  border-bottom: 1px solid #eaeaea;
  color: #184c59;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}
nav a {
  text-decoration: none;
  color: #184c59;
}

/* Responsive styles */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  nav ul {
    align-items: center;
    gap: 20px;
  }
}
</style>