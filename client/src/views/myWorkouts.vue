<script setup lang="ts">
     import { ref } from 'vue';
     import session, { login, logout, } from "../stores/session";
     import { RouterLink } from "vue-router";
     import data, { deleteWorkout } from "../stores/workouts";
     let isActive = ref(false);
     let ttl = '';let date = '';let Location = '';let Url = '';let Time = '';let Type = '';
</script>




<template>
<div v-if="session.user == null">
    <div class="card">
  <div class="card-content">
    <p class="subtitle">
      It Seems you are not loggen in, please log in to see your workouts
    </p>

    <p class="title">
     OR
    </p>

    <p class="subtitle">
      Please Join our community and share your workouts with others
    </p>
    <p class="subtitle">
      -My fitness app
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        <RouterLink to="/signUp">Join Us</RouterLink>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        <RouterLink to="/logIn">Log in</RouterLink>
      </span>
    </p>
  </footer>
</div>
     </div>

</template>


<style scoped>
.card{
    margin-top: 8rem;
}
.subtitle, .title{
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    text-align: center;
}
</style>


