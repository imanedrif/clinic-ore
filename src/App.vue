<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  
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
  overflow: hidden;
}

header-component {
  flex-shrink: 0;
}

footer-component {
  flex-shrink: 0;
}

router-view {
  flex-grow: 1;
}
</style>
