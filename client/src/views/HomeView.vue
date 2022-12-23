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
  <h1>Welcome to MY FITNESS APP</h1>
  <h2>{{ newTime }}</h2>
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
