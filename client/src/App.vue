<template>
<div id="app">
  <app-header />
  <router-view />
</div>
</template>

<script lang="ts">
import AppHeader from "./components/Header.vue"

export default {
  name: "app",
  components: {
    AppHeader,
  },
};

</script>




<style scoped>

</style>
