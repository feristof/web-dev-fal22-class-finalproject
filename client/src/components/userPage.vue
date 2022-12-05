<script setup lang="ts">
import session, { logout, login } from "../stores/session";
import { RouterLink } from "vue-router";
</script>

<template>
  <div v-if="session.user == null">
    <div class="card">
      <div class="card-content">
        <p class="subtitle">
          It Seems you are not loggen in, please log in to see your workouts
        </p>

        <p class="title">OR</p>

        <p class="subtitle">
          Please Join our community and share your workouts with others
        </p>
        <p class="subtitle">-My fitness app</p>
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

  <div class="card is-2-tablet is-4-desktop is-4-widescreen" v-else>
    <header class="card-header">
      <p class="card-header-title is-centered">My Profile</p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="field">
          <label class="label">First Name: </label>
          <div class="control">
            <div>
              {{ session.user?.firstName }}
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Last Name: </label>
          <div class="control">
            <div class="control">
              <div>{{ session.user?.lastName }}</div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Email: </label>
          <div class="control">
            <div>{{ session.user?.email }}</div>
          </div>
        </div>

        <div class="field">
          <label class="label">Password: </label>
          <div class="control">
            <div> ******** </div>
          </div>
      </div>
    </div>


    <footer class="card-footer">  
      <a href="#" class="card-footer-item">
        <div class="control">
          <div>
            <RouterLink to="/myWorkouts">My Workouts</RouterLink>
          </div>
        </div></a>
        <a href="#" class="card-footer-item">
        <div class="control">
          <div>
            <RouterLink to="/allWorkouts">Friends Workout</RouterLink>
          </div>
        </div></a>
        <a href="#" class="card-footer-item">
        <div class="control">
          <div>
            <RouterLink to="/allWorkouts"> <a href="mailto:patelr25@newpaltz.edu"> Help</a> </RouterLink>
          </div>
        </div></a>
      <a href="#" class="card-footer-item">Repeat</a>
    </footer>
  </div>
  </div>
</template>

<style scoped>
.card {
  margin-top: 80px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.subtitle,
.title {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  text-align: center;
}

.title {
  font-weight: 600;
}
</style>
