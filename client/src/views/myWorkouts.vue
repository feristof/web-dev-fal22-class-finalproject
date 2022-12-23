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
hr.dotted{
    border-top:1px dotted green;
}

img:hover{
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
}
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
.title{
  font-weight: 600;
}
.workout-image img{
    width: 100%;
    height: 100%;
    box-shadow: 0 0 24px black;
    display: block;
    margin-left: 4rem;
    margin-right: auto;
}

@media screen and (max-width: 768px){
    .workout-image img{
        width: 48em;
        height: 48%;
        box-shadow: 0 0 24px black;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
}

@media screen and (max-width: 768px){
    .workoutAdd{
        margin-left: 0;
        margin-right: 0;
    }
}

.media{
    margin-left: 4rem;
    margin-right: 4rem;
    background-color: lightgoldenrodyellow;
    padding-bottom: 20px;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    box-shadow: 0 0 24px black;
    background-color: rgba(255, 255, 255, 0.6);
}

/* making it responsive */
@media screen and (max-width: 768px){
    .media{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .search{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .button{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .close-workout{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .field{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .control{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .label{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .input{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-background{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-content{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-card{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-card-head{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-card-body{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-card-foot{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-close{
        margin-left: 0;
        margin-right: 0;
    }
}

@media screen and (max-width: 768px){
    .modal-card-title{
        margin-left: 0;
        margin-right: 0;
    }
}



</style>
