<script setup lang="ts">
import { ref } from 'vue';
import loginBadge from "../components/loginBadge.vue";
import { RouterLink } from "vue-router";
let isActive = ref(false);


</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="./" class="navbar-item">
        <div class="logo"><img src="../assets/logo.png" /></div>
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': isActive }" @click="isActive = !isActive">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/newtoApp" class="navbar-item">
              New to App?
            </router-link>
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Workouts </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                <router-link to="/allWorkouts" class="navbar-item">
                  All Workouts
                </router-link>
              </a>
              <a class="navbar-item">
                <router-link to="/myWorkouts" class="navbar-item">
                  My Workouts
                </router-link>
              </a>
            </div>
          </div>
            <a class="navbar-item">
              <router-link to="/userPage" class="navbar-item">
                My Profile
              </router-link>
            </a>
            <a class="navbar-item">
              <router-link to="/users" class="navbar-item">
                User
              </router-link>
            </a>
          
        </div>
      </div>

      <loginBadge />
    
  </nav>
</template>

<style scoped>
.logo img {
  max-height: 52px;
  margin-left: 10px;
}
</style>
