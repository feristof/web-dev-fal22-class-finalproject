<script setup lang="ts">
import { ref } from "vue";
import session, { logout, login } from "../stores/session";
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar" role="navigation">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons" v-if="session.user == null">
          <router-link to="/signUp">
            <button class="button is-rounded is-link is-focused">
              Sign Up
            </button>
          </router-link>
          <p>&nbsp&nbsp&nbsp</p>
          <h1>/</h1>
          <div class="navbar-item">
            <router-link to="/logIn">
              <button class="button is-rounded is-focused">Log In</button>
            </router-link>
          </div>
        </div>
        <div class="buttons" v-else>
          <div class="button is-success is-outlined">
            <router-link to="/userPage"
              >Welcome &nbsp<strong
                >{{ session.user.lastName }}, {{ session.user.firstName }}
              </strong></router-link
            >
          </div>
          <a class="button is-dark" @click="logout()"> Log out </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  justify-content: flex-end;
}
</style>
