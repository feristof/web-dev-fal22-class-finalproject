<script setup lang="ts">
// display current date and time
import { ref } from 'vue';
import { RouterLink } from "vue-router";
let isActive = ref(false);
let newTime = ref(new Date().toLocaleString());
setInterval(() => {
  newTime.value = new Date().toLocaleString();
}, 1000);

</script>

<template>
  <main>
    
  </main>
  <!-- <p id="royalty-text">This image is royalty free</p> -->
  <h1>Welcome to FitFusion</h1>
  <h2>This is portfolio project of <ul><b>Rishabh Patel</b></ul> which utilizes a combination languages and technologies like Javascript (Vue.js), Express (NodeJS), CSS (BULMA), HTML, MongoDB, and JSON files to create a comprehensive solution | This project includes client-side, server-side, and database components for efficient data management | Please visit my application and enjoy browsing :)</h2>
  <h3>{{ newTime }}</h3>
<br>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 80px;
  font-size: 38px;
  font-weight: 400;
}
h2 {
  text-align: center;
  font-size: 24px;
  font-weight: 400;
}
h3 {
  text-align: center;
  font-size: 18px;
  font-weight: 400;
}

/* designing todo list */
.container {
  margin-top: 50px;
}


/* #royalty-text{
  color: white;
  font-size: 18px;
  padding-top: 34em;
  padding-left: 44em;
} */
</style>
