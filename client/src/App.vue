<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import navBar from './components/navBar.vue'
</script>

<template>

  <header>
    

    <navBar />
  </header>
  <div class="container">
     <RouterView />

     
   </div>


</template>

<style>
html{
  background-image: url('./assets/fitness-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
