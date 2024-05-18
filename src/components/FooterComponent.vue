<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-info">
        <h2>CLINIC core</h2>
        <p>Rabat, hassan 02<br />+21267889999</p>
      </div>
      <div class="footer-links">
        <h3>Liens rapides</h3>
        <ul>
          <li><a href="#">Équipes</a></li>
          <li><a href="#">Spécialités</a></li>
        </ul>
      </div>
      <div class="footer-social">
        <h3>Réseaux sociaux</h3>
        <ul>
          <li>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      <hr>
      &copy; {{ new Date().getFullYear() }} Clinic-core. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  margin-top: 50px;
  background: #003344;
  color: #fff;
  padding: 20px 0;
}
.container {
  padding-left: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
.footer-info,
.footer-links,
.footer-social {
  flex: 1;
}
.footer-links ul,
.footer-social ul {
  display: flex;
  flex-direction: row;
  gap: 10px;
  list-style: none;
  padding: 0;
}
.footer-links a,
.footer-social a {
  color: #fff;
  text-decoration: none;
}
.footer-social a {
  font-size: 20px;
}
.footer-social i {
  margin-right: 10px;
}
.copyright {
  text-align: center;
  padding: 20px 0;
  flex-basis: 100%;
  order: 2;
}
.container hr {
  width: 100%;
  border: 0.5px solid #ffffff1f;
  margin: 0;
}

/* Responsive styles */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }
  .footer-info,
  .footer-links,
  .footer-social {
    flex-basis: 100%;
    text-align: center;
  }
}
</style>
