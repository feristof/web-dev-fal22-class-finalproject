<script setup lang="ts">
// display current date and time
const newTime = new Date();
console.log(newTime.toLocaleString());
</script>

<template>
  <main>
    
  </main>
  <!-- <p id="royalty-text">This image is royalty free</p> -->
  <h1>Welcome to MY FITNESS APP</h1>
  <h2>{{newTime}}</h2>
  

  <h1>Try new workout: to do </h1>
</template>


<style scoped>

h1{
  text-align: center;
  margin-top: 80px;
  font-size: 38px;
  font-weight: 400;
}
h2{
  text-align: center;
  font-size: 12px;
  font-weight: 400;
}

/* #royalty-text{
  color: white;
  font-size: 18px;
  padding-top: 34em;
  padding-left: 44em;
} */
</style>