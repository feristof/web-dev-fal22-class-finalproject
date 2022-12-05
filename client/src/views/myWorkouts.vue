<script setup lang="ts">
import { ref, reactive } from "vue";
import session, { login, logout } from "../stores/session";
import { getWorkouts, type Workout } from "../stores/workouts";
import { RouterLink } from "vue-router";
let isActive = ref(false);
let ttl = "";
let date = "";
let Location = "";
let Url = "";
let Time = "";
let Type = "";
const workouts = reactive([] as Workout[]);
    getWorkouts().then( x=> workouts.push(...x));

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

  <div v-for="workout in workouts">
    <div v-if = "workout.firstName == session.user?.firstName">
                 <br><br>
                 <div class="media">
                     <div class="media-content">
                         <div class="content">
                             <p>
                                 <strong>Name: </strong>{{ workout.firstName }} {{ workout.lastName }} &nbsp&nbsp<strong>Handle:</strong> {{ workout.handle }} &nbsp&nbsp <strong>Date:</strong> {{ workout.workoutDate }}<br> <strong>Location: </strong>{{ workout.workoutLocation }}
                                 <br>
                                 <u><Strong>Title: </Strong>{{ workout.title }} </u>
                                 <br><br>
                                 <div class = "workout-image">
                                     <img :src="workout.pictureUrl">
                                 </div>
                             </p>
                         </div>
                     </div>
                     <div class="media-right">
                        <button class="button is-danger is-outlined" @click="">Delete</button>&nbsp
                        <button class="button is-black is-outlined">Share</button>
                     </div>
                 </div>
                 <hr class="dotted">
         </div>
      </div>
</template>

<style scoped>
.card {
  margin-top: 8rem;
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
