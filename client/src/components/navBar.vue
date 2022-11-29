<script setup lang="ts">
import loginBadge from "../components/loginBadge.vue";
import { RouterLink } from "vue-router";
</script>

<template>
 <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    
    <router-link to="./" class="navbar-item">
      <div class="logo"> <img src="../assets/logo.png"> </div>
    </router-link>

    <a role="button" class="navbar-burger" aria-label="menu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
 

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <router-link to="/newtoApp" class="navbar-item">
               New to App?
        </router-link>
        </a>


      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
               Workouts
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
          <router-link to="/allWorkouts" class="navbar-item">
               Friend's Workouts
          </router-link>
          </a>
          <a class="navbar-item">
            
          <router-link to="/myWorkouts" class="navbar-item">
               My Workouts
          </router-link>
          </a>

        </div>
        <a class="navbar-item">
        <router-link to="/userPage" class="navbar-item">
               My Profile
        </router-link>
        </a>
 
      </div>
    </div>
  </div>

    <div class = "navbar-end">
    <loginBadge />
    </div>

  </div>
</nav>
</template>

<style scoped>

</style>
